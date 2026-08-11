import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getTagLabel } from '../lib/tagLabels';

// llms.txt — índice em texto puro para motores generativos (GEO). Segue a
// convenção llmstxt.org: descrição do site + lista curada de URLs com resumo,
// para um LLM entender e citar o conteúdo sem precisar interpretar o HTML.
export const GET: APIRoute = async ({ site }) => {
	const base = (site ?? new URL('https://blog.speake.com.br')).toString();
	const allPosts = await getCollection('posts', ({ data }) => !data.draft);
	const posts = allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	const byTag = new Map<string, typeof posts>();
	for (const post of posts) {
		const tag = post.data.tags[0];
		if (!tag) continue;
		byTag.set(tag, [...(byTag.get(tag) ?? []), post]);
	}

	const sections = [...byTag.entries()]
		.map(([tag, tagPosts]) => {
			const lines = tagPosts.map(
				(post) =>
					`- [${post.data.title}](${new URL(`/posts/${post.id}/`, base).toString()}): ${post.data.description}`
			);
			return `## ${getTagLabel(tag)}\n\n${lines.join('\n')}`;
		})
		.join('\n\n');

	const body = `# Speake Blog

> Blog técnico sobre áudio da Speake (https://speake.com.br), estúdio brasileiro de produção de áudio, podcast e narração profissional. Guias práticos de podcasting, produção musical, mixagem, masterização, narração e equipamentos de áudio, em português do Brasil, escritos por quem grava, mixa e publica.

Conteúdo publicado em ${base} — feed RSS em ${new URL('/rss.xml', base).toString()}.

${sections}
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
