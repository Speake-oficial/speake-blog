import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { AUDIO_TAGS } from '../../content.config';
import { MARKDOWN_HEADERS, tagIndexMarkdown } from '../../lib/markdownDocs';

// Gêmeo Markdown de /tags/.
export const GET: APIRoute = async ({ site }) => {
	const base = (site ?? new URL('https://blog.speake.com.br')).toString();
	const allPosts = await getCollection('posts', ({ data }) => !data.draft);

	const counts = new Map<string, number>();
	for (const post of allPosts) {
		for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
	}

	const tags = AUDIO_TAGS.filter((tag) => counts.has(tag))
		.map((tag) => ({ tag, count: counts.get(tag) ?? 0 }))
		.sort((a, b) => b.count - a.count);

	return new Response(tagIndexMarkdown(base, tags), { headers: MARKDOWN_HEADERS });
};
