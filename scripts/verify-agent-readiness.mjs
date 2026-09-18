#!/usr/bin/env node
// Verificação ponta a ponta do que a auditoria "Is Agentic" checa. Roda contra
// qualquer origem:
//
//   npm run verify:agents                          # produção
//   npm run verify:agents -- http://localhost:3000 # `vercel dev` ou preview
//
// Os testes unitários (npm test) cobrem a lógica de decisão; este script cobre o
// que só a rede prova: se o middleware da Vercel realmente intercepta antes do
// filesystem, se o Content-Type e o Vary chegam, e se o 404 mantém o status.

const base = (process.argv[2] ?? 'https://blog.speake.com.br').replace(/\/$/, '');
const MARKDOWN = 'text/markdown';
const BROWSER_ACCEPT = 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8';

const results = [];

function check(name, ok, detail) {
	results.push({ name, ok, detail });
	console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`);
}

async function get(path, accept) {
	const response = await fetch(`${base}${path}`, {
		headers: { accept },
		redirect: 'follow',
	});
	return {
		status: response.status,
		type: response.headers.get('content-type') ?? '',
		vary: response.headers.get('vary') ?? '',
		body: await response.text(),
		url: response.url,
	};
}

async function expectMarkdown(path, { status = 200 } = {}) {
	const res = await get(path, MARKDOWN);
	check(
		`${path} com Accept: text/markdown → ${status} text/markdown`,
		res.status === status && res.type.includes(MARKDOWN) && res.body.trim().length > 0,
		`status ${res.status}, content-type "${res.type}", ${res.body.length} bytes`
	);
	check(
		`${path} declara Vary: Accept`,
		/\baccept\b/i.test(res.vary),
		`vary: "${res.vary || 'none'}"`
	);
	return res;
}

async function expectHtml(path) {
	const res = await get(path, BROWSER_ACCEPT);
	check(
		`${path} com Accept: text/html → 200 text/html`,
		res.status === 200 && res.type.includes('text/html'),
		`status ${res.status}, content-type "${res.type}"`
	);
	return res;
}

async function expectContains(path, accept, needles, label) {
	const res = await get(path, accept);
	const missing = needles.filter((needle) => !res.body.includes(needle));
	check(`${path} ${label}`, missing.length === 0, missing.length ? `faltando: ${missing.join(', ')}` : undefined);
	return res;
}

async function main() {
	console.log(`Verificando ${base}\n`);

	// 2. Negociação de Markdown na home (Essencial).
	await expectMarkdown('/');
	await expectHtml('/');

	// Mesma negociação nas demais rotas de página.
	await expectMarkdown('/about/');
	await expectMarkdown('/contact/');
	await expectMarkdown('/privacy/');
	await expectMarkdown('/tags/');

	// 1. 404 com corpo em Markdown, sem perder o status (Essencial).
	const probe = `/__agent-readiness-probe-${Date.now()}`;
	const notFound = await expectMarkdown(probe, { status: 404 });
	check(
		`${probe} explica o erro e aponta um índice`,
		notFound.body.length >= 20 && /llms\.txt|sitemap/.test(notFound.body),
		`${notFound.body.length} bytes`
	);
	const notFoundHtml = await get(probe, BROWSER_ACCEPT);
	check(
		`${probe} com Accept: text/html continua 404`,
		notFoundHtml.status === 404,
		`status ${notFoundHtml.status}`
	);

	// 4. Instrução de uso para agentes.
	await expectContains(
		'/llms.txt',
		'text/plain',
		['## Quando usar este site', '## Como um agente deve consultar', 'Accept: text/markdown'],
		'traz as instruções de quando e como usar'
	);

	// 5. Páginas-âncora de confiança, com conteúdo real.
	for (const path of ['/about/', '/contact/', '/privacy/']) {
		const res = await get(path, BROWSER_ACCEPT);
		const text = res.body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
		check(
			`${path} tem 500+ caracteres de conteúdo`,
			res.status === 200 && text.length >= 500,
			`${text.length} caracteres`
		);
	}

	// Arquivos legíveis por máquina que já existiam — não podem ter regredido.
	for (const [path, expected] of [
		['/robots.txt', 'text/plain'],
		['/sitemap-index.xml', 'xml'],
		['/rss.xml', 'xml'],
		['/search.json', 'json'],
	]) {
		const res = await get(path, '*/*');
		check(
			`${path} responde 200 ${expected}`,
			res.status === 200 && res.type.includes(expected),
			`status ${res.status}, content-type "${res.type}"`
		);
	}

	const failed = results.filter((result) => !result.ok);
	console.log(`\n${results.length - failed.length}/${results.length} verificações passaram.`);
	if (failed.length) process.exitCode = 1;
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
