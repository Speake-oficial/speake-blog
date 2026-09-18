import assert from 'node:assert/strict';
import type { Server } from 'node:http';
import { after, before, describe, test } from 'node:test';

import { config } from './middleware.ts';
import { startServer } from './scripts/serve-with-middleware.mjs';

// Teste de integração do middleware contra o build real (`dist/`), servido pelo
// mesmo harness de scripts/serve-with-middleware.mjs — que imita a ordem da
// Vercel: middleware primeiro, filesystem depois, 404.html no fim.
//
// Os testes unitários em src/lib/agentMarkdown.test.ts cobrem a decisão; aqui o
// que se prova é o encanamento: que o gêmeo `.md` existe no build e é encontrado,
// que os cabeçalhos saem certos, que o 404 mantém o status e que uma rota sem
// gêmeo (a paginação) continua servindo HTML em vez de virar 404.

/** Reproduz o `matcher` do middleware para checar o alcance dele diretamente. */
const matcherPattern = new RegExp(`^${config.matcher[0]}$`);

let server: Server;
let origin: string;

function get(path: string, accept: string): Promise<Response> {
	return fetch(`${origin}${path}`, { headers: { accept }, redirect: 'manual' });
}

describe('middleware de negociação de Markdown', () => {
	before(async () => {
		({ server, origin } = await startServer(0));
	});

	after(() => server.close());

	test('home devolve Markdown para Accept: text/markdown', async () => {
		const response = await get('/', 'text/markdown');

		assert.equal(response.status, 200);
		assert.equal(response.headers.get('content-type'), 'text/markdown; charset=utf-8');
		assert.match(response.headers.get('vary') ?? '', /Accept/i);

		const body = await response.text();
		assert.ok(body.startsWith('# Speake Blog'), 'corpo não começa com o título em Markdown');
		assert.ok(body.length > 0);
	});

	test('home continua devolvendo HTML para um navegador', async () => {
		const response = await get(
			'/',
			'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
		);

		assert.equal(response.status, 200);
		assert.match(response.headers.get('content-type') ?? '', /text\/html/);
		assert.match(response.headers.get('vary') ?? '', /Accept/i);
		assert.match(await response.text(), /<!DOCTYPE html>/i);
	});

	test('páginas de confiança devolvem Markdown', async () => {
		for (const path of ['/about/', '/contact/', '/privacy/', '/tags/']) {
			const response = await get(path, 'text/markdown');
			assert.equal(response.status, 200, `${path} deveria responder 200`);
			assert.equal(response.headers.get('content-type'), 'text/markdown; charset=utf-8');
			assert.ok((await response.text()).length > 500, `${path} devolveu corpo curto demais`);
		}
	});

	test('post devolve o Markdown original do artigo', async () => {
		const response = await get('/posts/como-tirar-o-eco-da-gravacao-de-voz/', 'text/markdown');
		const body = await response.text();

		assert.equal(response.status, 200);
		assert.match(body, /^# /);
		assert.match(body, /URL canônica: https:\/\/blog\.speake\.com\.br\/posts\//);
	});

	test('caminho inexistente devolve 404 com corpo em Markdown', async () => {
		const response = await get('/__ora-404-probe-gf1ki8uk', 'text/markdown');
		const body = await response.text();

		assert.equal(response.status, 404);
		assert.equal(response.headers.get('content-type'), 'text/markdown; charset=utf-8');
		assert.match(response.headers.get('vary') ?? '', /Accept/i);
		assert.ok(body.length >= 20);
		assert.match(body, /llms\.txt/);
		assert.match(body, /__ora-404-probe-gf1ki8uk/);
	});

	test('caminho inexistente continua 404 em HTML', async () => {
		const response = await get('/__ora-404-probe-gf1ki8uk', 'text/html');

		assert.equal(response.status, 404);
		assert.match(response.headers.get('content-type') ?? '', /text\/html/);
	});

	test('rota sem gêmeo Markdown cai para o HTML, não para o 404', async () => {
		// A paginação (/2/) existe mas não tem representação em Markdown. Devolver
		// 404 aqui seria mentir sobre uma página publicada.
		const response = await get('/2/', 'text/markdown');

		assert.equal(response.status, 200);
		assert.match(response.headers.get('content-type') ?? '', /text\/html/);
		assert.match(response.headers.get('vary') ?? '', /Accept/i);
	});

	test('matcher não alcança assets nem os próprios gêmeos .md', async () => {
		// Se o matcher pegasse os `.md`, o fetch interno do middleware voltaria
		// para ele mesmo.
		for (const path of ['/index.md', '/about/index.md', '/rss.xml', '/llms.txt', '/search.json']) {
			assert.equal(matcherPattern.test(path), false, `${path} não deveria acionar o middleware`);
		}
		for (const path of ['/_astro/algo.css', '/og/podcast.png', '/og-default.png']) {
			assert.equal(matcherPattern.test(path), false, `${path} não deveria acionar o middleware`);
		}
		for (const path of ['/', '/about/', '/posts/algum-post/', '/__nao-existe']) {
			assert.equal(matcherPattern.test(path), true, `${path} deveria acionar o middleware`);
		}
	});

	test('arquivos legíveis por máquina seguem intactos', async () => {
		for (const [path, expected] of [
			['/llms.txt', /## Quando usar este site/],
			['/robots.txt', /Sitemap:/],
			['/rss.xml', /<rss/],
			['/search.json', /\[/],
		] as const) {
			const response = await get(path, '*/*');
			assert.equal(response.status, 200, `${path} deveria responder 200`);
			assert.match(await response.text(), expected);
		}
	});
});
