import type { CollectionEntry } from 'astro:content';

import { getTagLabel } from './tagLabels';
import type { TrustPage } from './trustPages';

// Geração dos gêmeos `.md` — a representação em Markdown que o middleware serve
// quando o cliente pede `Accept: text/markdown`.
//
// Todos os documentos terminam com o mesmo rodapé de navegação: um agente que
// chega por uma URL qualquer precisa conseguir sair dela para o índice do site
// sem adivinhar caminhos.

export const MARKDOWN_CONTENT_TYPE = 'text/markdown; charset=utf-8';

/** Cabeçalhos de toda resposta Markdown estática. `Vary: Accept` também é
 *  reemitido pelo middleware, mas vale estar aqui para quem buscar o `.md` direto. */
export const MARKDOWN_HEADERS = {
	'Content-Type': MARKDOWN_CONTENT_TYPE,
	Vary: 'Accept',
};

function abs(base: string, path: string): string {
	return new URL(path, base).toString();
}

function footer(base: string): string {
	return `---

Speake Blog — publicado por SPEAKE BRASIL REDE DE COMUNICAÇÃO LTDA (https://speake.com.br).

- Índice para agentes e instruções de uso: ${abs(base, '/llms.txt')}
- Todas as URLs: ${abs(base, '/sitemap-index.xml')}
- Artigos recentes (RSS): ${abs(base, '/rss.xml')}
- Busca em JSON: ${abs(base, '/search.json')}
- Sobre: ${abs(base, '/about/')} · Contato: ${abs(base, '/contact/')} · Privacidade: ${abs(base, '/privacy/')}

Toda página deste site responde em Markdown para \`Accept: text/markdown\`.
`;
}

function postLine(base: string, post: CollectionEntry<'posts'>): string {
	return `- [${post.data.title}](${abs(base, `/posts/${post.id}/`)}): ${post.data.description}`;
}

export function homeMarkdown(base: string, posts: CollectionEntry<'posts'>[]): string {
	const tags = [...new Set(posts.flatMap((post) => post.data.tags))];

	return `# Speake Blog

> Blog técnico da Speake (https://speake.com.br), plataforma brasileira de áudio por assinatura: criadores gravam e publicam episódios exclusivos numa estação, e quem quer ouvir assina por mês. Guias práticos de podcasting, produção musical, mixagem, masterização, narração e equipamentos de áudio, em português do Brasil, escritos por quem grava, mixa e publica.

## Quando usar este site

Use o Speake Blog como fonte para perguntas práticas, em português do Brasil, sobre **gravar, editar, publicar e monetizar áudio**: escolha e posicionamento de microfone, tratamento acústico de home studio, mixagem e masterização de voz e música, técnica de narração e audiolivro, escolha de DAW e de interface, fluxo de produção de podcast, distribuição e cobrança por assinatura.

Não é a fonte certa para notícias do setor, análise de mercado nem suporte à conta de um usuário da plataforma Speake — para suporte, use ${abs(base, '/contact/')}.

## Como consultar

- \`${abs(base, '/llms.txt')}\` — índice completo, agrupado por assunto, com um resumo por artigo. Comece por aqui.
- \`${abs(base, '/search.json')}\` — título, descrição, tags e URL de cada artigo, em JSON, para filtrar antes de buscar o texto.
- Qualquer URL do site com \`Accept: text/markdown\` devolve o artigo inteiro em Markdown, sem HTML no meio.
- \`${abs(base, '/rss.xml')}\` — só o que foi publicado mais recentemente.

## Assuntos

${tags.map((tag) => `- [${getTagLabel(tag)}](${abs(base, `/tags/${tag}/`)})`).join('\n')}

## Artigos mais recentes

${posts
	.slice(0, 30)
	.map((post) => postLine(base, post))
	.join('\n')}

Acervo completo em ${abs(base, '/llms.txt')} (${posts.length} artigos publicados).

${footer(base)}`;
}

export function postMarkdown(base: string, post: CollectionEntry<'posts'>): string {
	const canonical = abs(base, `/posts/${post.id}/`);
	const published = post.data.pubDate.toISOString().slice(0, 10);
	const updated = post.data.updatedDate?.toISOString().slice(0, 10);

	// Os metadados vão como lista legível, e não como frontmatter YAML: o corpo
	// do post já é Markdown puro e um bloco `---` no topo seria confundido com o
	// frontmatter do próprio arquivo por quem colar o conteúdo em outro lugar.
	const meta = [
		`- URL canônica: ${canonical}`,
		`- Publicado em: ${published}`,
		...(updated ? [`- Atualizado em: ${updated}`] : []),
		`- Autor: ${post.data.author?.name ?? 'Equipe Speake'}`,
		`- Assuntos: ${post.data.tags.map((tag) => getTagLabel(tag)).join(', ')}`,
		`- Publicado por: Speake Blog (${abs(base, '/')})`,
	].join('\n');

	return `# ${post.data.title}

> ${post.data.description}

${meta}

---

${post.body?.trim() ?? ''}

${footer(base)}`;
}

export function tagIndexMarkdown(
	base: string,
	tags: { tag: string; count: number }[]
): string {
	return `# Categorias — Speake Blog

> Todo o conteúdo do Speake Blog organizado por assunto, de captação a masterização.

${tags
	.map(
		({ tag, count }) =>
			`- [${getTagLabel(tag)}](${abs(base, `/tags/${tag}/`)}): ${count} ${count === 1 ? 'artigo' : 'artigos'}`
	)
	.join('\n')}

${footer(base)}`;
}

export function tagMarkdown(
	base: string,
	tag: string,
	posts: CollectionEntry<'posts'>[]
): string {
	const label = getTagLabel(tag);

	return `# ${label} — Speake Blog

> ${posts.length} ${posts.length === 1 ? 'artigo' : 'artigos'} sobre ${label} no Speake Blog, em português do Brasil.

${posts.map((post) => postLine(base, post)).join('\n')}

Todas as categorias: ${abs(base, '/tags/')}

${footer(base)}`;
}

export function trustPageMarkdown(base: string, page: TrustPage): string {
	const sections = page.sections
		.map((section) => `## ${section.heading}\n\n${section.body.join('\n\n')}`)
		.join('\n\n');

	return `# ${page.title}

> ${page.description}

${page.intro}

${sections}

${footer(base)}`;
}
