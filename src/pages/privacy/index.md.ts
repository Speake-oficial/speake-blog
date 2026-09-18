import type { APIRoute } from 'astro';

import { MARKDOWN_HEADERS, trustPageMarkdown } from '../../lib/markdownDocs';
import { getTrustPage } from '../../lib/trustPages';

// Gêmeo Markdown de /privacy/ — servido pelo middleware em Accept: text/markdown.
export const GET: APIRoute = ({ site }) => {
	const base = (site ?? new URL('https://blog.speake.com.br')).toString();

	return new Response(trustPageMarkdown(base, getTrustPage('privacy')), {
		headers: MARKDOWN_HEADERS,
	});
};
