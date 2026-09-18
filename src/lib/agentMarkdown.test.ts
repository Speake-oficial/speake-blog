import assert from 'node:assert/strict';
import { test } from 'node:test';

import { markdownTwinPath, notFoundMarkdown, prefersMarkdown } from './agentMarkdown.ts';

test('prefersMarkdown: pedido explícito de Markdown', () => {
	assert.equal(prefersMarkdown('text/markdown'), true);
	assert.equal(prefersMarkdown('text/x-markdown'), true);
	assert.equal(prefersMarkdown('TEXT/MARKDOWN'), true);
	assert.equal(prefersMarkdown(' text/markdown , */* '), true);
	assert.equal(prefersMarkdown('text/markdown;charset=utf-8'), true);
});

test('prefersMarkdown: navegadores continuam recebendo HTML', () => {
	// Accept real do Chrome — nenhum Markdown pedido, nada deve mudar.
	assert.equal(
		prefersMarkdown(
			'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
		),
		false
	);
	assert.equal(prefersMarkdown('text/html'), false);
});

test('prefersMarkdown: coringa sozinho não é pedido de Markdown', () => {
	// `*/*` é o default do curl e de quase todo scraper: sequestrá-lo trocaria
	// silenciosamente o conteúdo servido hoje.
	assert.equal(prefersMarkdown('*/*'), false);
	assert.equal(prefersMarkdown('text/*'), false);
	assert.equal(prefersMarkdown(''), false);
	assert.equal(prefersMarkdown(null), false);
	assert.equal(prefersMarkdown(undefined), false);
});

test('prefersMarkdown: fator de qualidade decide o empate', () => {
	assert.equal(prefersMarkdown('text/markdown;q=0.9,text/html;q=0.8'), true);
	assert.equal(prefersMarkdown('text/markdown;q=0.8,text/html;q=0.9'), false);
	// Empate vai para Markdown: foi pedido explicitamente.
	assert.equal(prefersMarkdown('text/markdown,text/html'), true);
	assert.equal(prefersMarkdown('text/markdown;q=0'), false);
	// q malformado cai no default 1 do RFC 9110.
	assert.equal(prefersMarkdown('text/markdown;q=abc,text/html;q=0.9'), true);
});

test('markdownTwinPath: rotas de página viram <rota>/index.md', () => {
	assert.equal(markdownTwinPath('/'), '/index.md');
	assert.equal(markdownTwinPath('/posts/como-gravar-podcast/'), '/posts/como-gravar-podcast/index.md');
	// Sem barra final (Vercel serve as duas formas) o gêmeo é o mesmo.
	assert.equal(markdownTwinPath('/posts/como-gravar-podcast'), '/posts/como-gravar-podcast/index.md');
	assert.equal(markdownTwinPath('/tags/'), '/tags/index.md');
	assert.equal(markdownTwinPath('/about'), '/about/index.md');
	assert.equal(markdownTwinPath('/caminho-que-nao-existe'), '/caminho-que-nao-existe/index.md');
});

test('markdownTwinPath: arquivos com extensão não têm gêmeo', () => {
	// Sem isso o middleware tentaria negociar /rss.xml e entraria em laço no
	// próprio /index.md que ele mesmo busca.
	assert.equal(markdownTwinPath('/rss.xml'), null);
	assert.equal(markdownTwinPath('/llms.txt'), null);
	assert.equal(markdownTwinPath('/index.md'), null);
	assert.equal(markdownTwinPath('/_astro/index.abc123.css'), null);
	assert.equal(markdownTwinPath('/og/podcast.png'), null);
});

test('notFoundMarkdown: corpo de erro útil para agentes', () => {
	const body = notFoundMarkdown('https://blog.speake.com.br', '/__ora-404-probe');

	// A auditoria exige ao menos 20 caracteres de explicação e um link para
	// docs/sitemap/llms.txt.
	assert.ok(body.length >= 20);
	assert.match(body, /404/);
	assert.match(body, /__ora-404-probe/);
	assert.match(body, /https:\/\/blog\.speake\.com\.br\/llms\.txt/);
	assert.match(body, /https:\/\/blog\.speake\.com\.br\/sitemap-index\.xml/);
});
