import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Taxonomia de tags do universo de áudio. Mantida como union literal (não string livre)
// para o schema rejeitar tags fora da taxonomia já na borda — evita posts com tags
// digitadas errado/inconsistentes silenciosamente "passando" pelo build.
export const AUDIO_TAGS = [
	'podcasting',
	'producao-musical',
	'masterizacao',
	'equipamentos-de-audio',
	'narracao',
	'mixagem',
	'audio-livros',
	'microfones',
	'home-studio',
] as const;

const postsCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
	schema: ({ image }) =>
		z.object({
			title: z.string().min(1).max(120),
			description: z.string().min(1).max(280),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.enum(AUDIO_TAGS)).min(1),
			image: z
				.object({
					src: image(),
					alt: z.string().min(1),
				})
				.optional(),
			draft: z.boolean().default(false),
		}),
});

export const collections = {
	posts: postsCollection,
};
