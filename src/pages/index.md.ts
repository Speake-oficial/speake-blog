import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { homeMarkdown, MARKDOWN_HEADERS } from '../lib/markdownDocs';

// Gêmeo Markdown da home. É a página auditada pela negociação de conteúdo
// (acceptmarkdown.com), então é ela que precisa existir antes de qualquer outra.
export const GET: APIRoute = async ({ site }) => {
	const base = (site ?? new URL('https://blog.speake.com.br')).toString();
	const allPosts = await getCollection('posts', ({ data }) => !data.draft);
	const posts = allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return new Response(homeMarkdown(base, posts), { headers: MARKDOWN_HEADERS });
};
