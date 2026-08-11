import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getTagLabel } from '../lib/tagLabels';
import { formatPostDateShort } from '../lib/formatDate';

// Índice estático de busca consumido pelo SearchFilter no cliente. A listagem
// da home é paginada, então o filtro não pode depender dos cards presentes no
// DOM — este JSON pequeno (título + tags + metadados) cobre o acervo inteiro.
export const GET: APIRoute = async () => {
	const allPosts = await getCollection('posts', ({ data }) => !data.draft);
	const posts = allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	const index = posts.map((post) => {
		const words = post.body?.trim().split(/\s+/).filter(Boolean).length ?? 0;
		return {
			title: post.data.title,
			url: `/posts/${post.id}/`,
			date: formatPostDateShort(post.data.pubDate),
			min: Math.max(1, Math.round(words / 200)),
			tags: post.data.tags,
			labels: post.data.tags.map(getTagLabel),
		};
	});

	return new Response(JSON.stringify(index), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
};
