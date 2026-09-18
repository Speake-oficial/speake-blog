import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

import { MARKDOWN_HEADERS, tagMarkdown } from '../../../lib/markdownDocs';

// Gêmeo Markdown de cada categoria.
export const getStaticPaths = (async () => {
	const allPosts = await getCollection('posts', ({ data }) => !data.draft);
	const posts = allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	const byTag = new Map<string, CollectionEntry<'posts'>[]>();
	for (const post of posts) {
		for (const tag of post.data.tags) byTag.set(tag, [...(byTag.get(tag) ?? []), post]);
	}

	return [...byTag.entries()].map(([tag, tagPosts]) => ({
		params: { tag },
		props: { tag, posts: tagPosts },
	}));
}) satisfies GetStaticPaths;

interface Props {
	tag: string;
	posts: CollectionEntry<'posts'>[];
}

export const GET: APIRoute<Props> = ({ props, site }) => {
	const base = (site ?? new URL('https://blog.speake.com.br')).toString();

	return new Response(tagMarkdown(base, props.tag, props.posts), { headers: MARKDOWN_HEADERS });
};
