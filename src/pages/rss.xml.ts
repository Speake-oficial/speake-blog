import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Feed RSS gerado à mão (sem dependência extra): agregadores, leitores e
// crawlers de IA usam o feed como fonte estruturada de conteúdo novo.
function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

export const GET: APIRoute = async ({ site }) => {
	const base = (site ?? new URL('https://blog.speake.com.br')).toString();
	const allPosts = await getCollection('posts', ({ data }) => !data.draft);
	const posts = allPosts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	const items = posts
		.map((post) => {
			const url = new URL(`/posts/${post.id}/`, base).toString();
			return [
				'<item>',
				`<title>${escapeXml(post.data.title)}</title>`,
				`<link>${url}</link>`,
				`<guid isPermaLink="true">${url}</guid>`,
				`<description>${escapeXml(post.data.description)}</description>`,
				`<pubDate>${post.data.pubDate.toUTCString()}</pubDate>`,
				...post.data.tags.map((tag) => `<category>${escapeXml(tag)}</category>`),
				'</item>',
			].join('');
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Speake Blog</title>
<link>${base}</link>
<atom:link href="${new URL('/rss.xml', base).toString()}" rel="self" type="application/rss+xml"/>
<description>Guias práticos de podcasting, produção musical, masterização e equipamentos de áudio — pela equipe da Speake (speake.com.br).</description>
<language>pt-BR</language>
${items}
</channel>
</rss>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
	});
};
