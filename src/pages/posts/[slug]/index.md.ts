import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

import { MARKDOWN_HEADERS, postMarkdown } from '../../../lib/markdownDocs';

// Gêmeo Markdown de cada post. O corpo entregue é o Markdown original do arquivo
// em src/content/posts — é a melhor representação possível do artigo para um
// agente, sem HTML, sem navegação e sem perda de tabela ou lista.
export const getStaticPaths = (async () => {
	const posts = await getCollection('posts', ({ data }) => !data.draft);
	return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}) satisfies GetStaticPaths;

interface Props {
	post: CollectionEntry<'posts'>;
}

export const GET: APIRoute<Props> = ({ props, site }) => {
	const base = (site ?? new URL('https://blog.speake.com.br')).toString();

	return new Response(postMarkdown(base, props.post), { headers: MARKDOWN_HEADERS });
};
