// Sobe `dist/` localmente com o middleware da borda na frente, imitando a ordem
// da Vercel: middleware primeiro (quando o `matcher` casa), filesystem depois,
// `404.html` com status 404 no fim.
//
//   npm run build && npm run preview:agents
//   curl -i -H 'Accept: text/markdown' http://127.0.0.1:4321/
//
// Existe para que a negociação de conteúdo possa ser verificada sem depender de
// um deploy — é o mesmo handler usado pelo teste de integração (middleware.test.ts)
// e o alvo local do scripts/verify-agent-readiness.mjs.

import { existsSync, readFileSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { join } from 'node:path';

const DIST = join(import.meta.dirname, '..', 'dist');

const CONTENT_TYPES = [
	['.html', 'text/html; charset=utf-8'],
	['.md', 'text/markdown; charset=utf-8'],
	['.xml', 'application/xml; charset=utf-8'],
	['.json', 'application/json; charset=utf-8'],
	['.txt', 'text/plain; charset=utf-8'],
	['.css', 'text/css; charset=utf-8'],
	['.js', 'text/javascript; charset=utf-8'],
	['.svg', 'image/svg+xml'],
	['.png', 'image/png'],
	['.ico', 'image/x-icon'],
];

function contentTypeFor(file) {
	return CONTENT_TYPES.find(([ext]) => file.endsWith(ext))?.[1] ?? 'application/octet-stream';
}

function staticFileFor(pathname) {
	const clean = decodeURIComponent(pathname.split('?')[0] ?? '/');
	// Sem isso, `/../` escaparia de dist/.
	if (clean.includes('..')) return null;

	const candidates = clean.endsWith('/')
		? [join(DIST, clean, 'index.html')]
		: [join(DIST, clean), join(DIST, clean, 'index.html')];

	return candidates.find((file) => existsSync(file) && statSync(file).isFile()) ?? null;
}

function serveStatic(pathname) {
	const file = staticFileFor(pathname);
	if (file) {
		return new Response(readFileSync(file), {
			status: 200,
			headers: { 'content-type': contentTypeFor(file) },
		});
	}
	return new Response(readFileSync(join(DIST, '404.html')), {
		status: 404,
		headers: { 'content-type': 'text/html; charset=utf-8' },
	});
}

/**
 * Handler completo: middleware + filesystem.
 * @returns {Promise<(request: Request) => Promise<Response>>}
 */
export async function createHandler() {
	if (!existsSync(DIST)) {
		throw new Error('dist/ não existe — rode `npm run build` antes.');
	}

	const { default: middleware, config } = await import('../middleware.ts');
	const matcher = new RegExp(`^${config.matcher[0]}$`);

	return async function handle(request) {
		const { pathname } = new URL(request.url);
		if (!matcher.test(pathname)) return serveStatic(pathname);

		const response = await middleware(request);
		if (response.headers.get('x-middleware-next') !== '1') return response;

		const downstream = serveStatic(pathname);
		for (const [key, value] of response.headers) {
			if (key !== 'x-middleware-next') downstream.headers.set(key, value);
		}
		return downstream;
	};
}

/** Sobe o servidor. `port: 0` escolhe uma porta livre. @returns {Promise<{server: import('node:http').Server, origin: string}>} */
export async function startServer(port = 4321) {
	const handle = await createHandler();
	let origin = `http://127.0.0.1:${port}`;

	const server = createServer((req, res) => {
		const request = new Request(new URL(req.url ?? '/', origin), {
			method: req.method === 'HEAD' ? 'GET' : req.method,
			headers: req.headers,
		});
		handle(request)
			.then(async (response) => {
				res.writeHead(response.status, Object.fromEntries(response.headers));
				res.end(req.method === 'HEAD' ? undefined : Buffer.from(await response.arrayBuffer()));
			})
			.catch((error) => {
				res.writeHead(500, { 'content-type': 'text/plain' });
				res.end(String(error?.stack ?? error));
			});
	});

	await new Promise((resolve) => server.listen(port, '127.0.0.1', resolve));
	origin = `http://127.0.0.1:${server.address().port}`;
	return { server, origin };
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, '/'))) {
	const { origin } = await startServer(Number(process.env.PORT ?? 4321));
	console.log(`dist/ + middleware servindo em ${origin}`);
	console.log(`Teste:  curl -i -H 'Accept: text/markdown' ${origin}/`);
}
