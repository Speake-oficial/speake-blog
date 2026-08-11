// Datas de post vêm do frontmatter como `2026-08-11`, que o Zod coage para
// meia-noite UTC. Formatar isso no fuso do runner de build (UTC-3 em produção)
// devolvia o dia anterior — a página exibia "10 de agosto" enquanto o
// `datePublished` do JSON-LD e o `article:published_time` diziam 11. Fixar o
// timeZone em UTC mantém texto visível e metadado apontando para a mesma data.
const UTC = 'UTC';

export function formatPostDate(date: Date): string {
	return date.toLocaleDateString('pt-BR', {
		day: '2-digit',
		month: 'long',
		year: 'numeric',
		timeZone: UTC,
	});
}

export function formatPostDateShort(date: Date): string {
	return date.toLocaleDateString('pt-BR', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
		timeZone: UTC,
	});
}
