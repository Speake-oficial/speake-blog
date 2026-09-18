import { next } from '@vercel/functions';

import { markdownTwinPath, notFoundMarkdown, prefersMarkdown } from './src/lib/agentMarkdown.ts';

// Routing Middleware da Vercel (roda na borda, ANTES do filesystem).
//
// Por que middleware e não `rewrites` no vercel.json: a Vercel dá precedência ao
// filesystem sobre os rewrites ("precedence is given to the filesystem prior to
// rewrites being applied"), então `/` sempre resolveria para o `index.html`
// estático e um rewrite condicionado a `Accept` nunca dispararia na home — que é
// exatamente a página auditada. E rewrite não consegue devolver 404 com corpo
// próprio, que é o outro requisito.
//
// O blog é 100% estático; este é o único ponto de compute do site. Ele sai da
// frente imediatamente (`next()`) para qualquer request que não peça Markdown,
// que é o caso de todo navegador e de todo crawler tradicional.

export const config = {
	// Roda só no que pode ser página HTML: sem `_astro/`, sem `og/` e sem nada com
	// extensão (`/rss.xml`, `/llms.txt`, `/search.json`, `/favicon.ico` e os
	// próprios gêmeos `.md` que o middleware busca — o que também elimina
	// qualquer risco de laço).
	matcher: ['/((?!_astro/|og/|.*\\.).*)'],
};

const MARKDOWN_HEADERS = {
	'content-type': 'text/markdown; charset=utf-8',
	// Sem `Vary: Accept` qualquer cache intermediário serviria o Markdown para um
	// navegador (ou o HTML para um agente) — é o que a negociação de conteúdo
	// exige e o que a auditoria checa.
	vary: 'Accept',
} as const;

export default async function middleware(request: Request): Promise<Response> {
	const url = new URL(request.url);

	if (!prefersMarkdown(request.headers.get('accept'))) {
		// HTML também precisa declarar que a resposta varia por Accept, senão o
		// cache guarda uma representação e serve para os dois tipos de cliente.
		return next({ headers: { vary: 'Accept' } });
	}

	const twin = markdownTwinPath(url.pathname);
	if (!twin) return next({ headers: { vary: 'Accept' } });

	const twinResponse = await fetch(new URL(twin, url.origin), {
		headers: { accept: 'text/markdown' },
	});

	if (twinResponse.ok) {
		return new Response(await twinResponse.text(), {
			status: 200,
			headers: MARKDOWN_HEADERS,
		});
	}

	// Sem gêmeo `.md`: pode ser uma rota HTML sem representação em Markdown
	// (paginação, por exemplo) ou uma rota que não existe. Só o segundo caso é
	// 404 — devolver 404 para uma página que existe seria mentir para o agente.
	const original = await fetch(url, { method: 'HEAD', headers: { accept: 'text/html' } });
	if (original.ok) return next({ headers: { vary: 'Accept' } });

	return new Response(notFoundMarkdown(url.origin, url.pathname), {
		status: 404,
		headers: MARKDOWN_HEADERS,
	});
}
