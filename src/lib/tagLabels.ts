// Fonte única de verdade para o mapeamento tag-slug -> label legível em PT-BR.
// Mapeamento explícito em vez de replace genérico, porque acentos não se recuperam
// de um slug sem acento por regra mecânica.
// Antes desta extração, esta tabela existia duplicada em TagBadge.astro,
// src/pages/posts/[slug].astro e src/pages/tags/[tag].astro — confirmado via
// diff que as três cópias eram idênticas.
export const TAG_LABELS: Record<string, string> = {
	podcasting: 'podcasting',
	'producao-musical': 'produção musical',
	masterizacao: 'masterização',
	'equipamentos-de-audio': 'equipamentos de áudio',
	narracao: 'narração',
	mixagem: 'mixagem',
	'audio-livros': 'áudio-livros',
	microfones: 'microfones',
	'home-studio': 'home studio',
};

export function getTagLabel(slug: string): string {
	return TAG_LABELS[slug] ?? slug;
}
