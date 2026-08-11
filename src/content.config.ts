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
			// Autor nomeado. Opcional: sem ele, o post é atribuído à Speake como
			// Organization (comportamento histórico). Preenchido, vira um `Person`
			// no JSON-LD e uma assinatura visível — sinal de E-E-A-T que buscadores
			// e motores generativos pesam mais que autoria institucional.
			author: z
				.object({
					name: z.string().min(1),
					// Página/perfil que comprove a autoria (LinkedIn, site pessoal, /sobre).
					url: z.string().url().optional(),
					jobTitle: z.string().optional(),
				})
				.optional(),
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
