// Negociação de conteúdo em Markdown (acceptmarkdown.com) — lógica pura,
// compartilhada entre o middleware da Vercel (`middleware.ts`, que roda na borda,
// antes do filesystem) e os endpoints Astro que geram os gêmeos `.md` estáticos.
//
// Fica aqui, e não dentro do middleware, por dois motivos: é a única parte com
// regra de decisão de verdade (parsing de Accept com qualidade) e precisa ser
// testável sem subir servidor — `middleware.ts` não é importável pelo build do
// Astro nem pelo runner de testes sem arrastar o runtime da Vercel junto.

/** Tipos MIME aceitos como "quero Markdown". `text/x-markdown` é a grafia antiga,
 *  ainda emitida por alguns agentes. */
const MARKDOWN_TYPES = ['text/markdown', 'text/x-markdown'];

/** Tipos que, quando pedidos com qualidade igual ou maior, significam que o
 *  cliente é um navegador e quer HTML. */
const HTML_TYPES = ['text/html', 'application/xhtml+xml'];

interface MediaRange {
	type: string;
	q: number;
}

/**
 * Quebra um header `Accept` em faixas de mídia com seu fator de qualidade.
 * Parâmetros que não sejam `q` são descartados — não influenciam a escolha.
 */
function parseAccept(accept: string): MediaRange[] {
	return accept
		.split(',')
		.map((part) => {
			const [rawType, ...params] = part.split(';');
			const type = (rawType ?? '').trim().toLowerCase();
			if (!type) return null;

			let q = 1;
			for (const param of params) {
				const [key, value] = param.split('=');
				if (key?.trim().toLowerCase() !== 'q') continue;
				const parsed = Number.parseFloat(value ?? '');
				// q inválido é tratado como 1, que é o default do RFC 9110.
				q = Number.isFinite(parsed) ? Math.min(Math.max(parsed, 0), 1) : 1;
			}

			return { type, q } satisfies MediaRange;
		})
		.filter((range): range is MediaRange => range !== null);
}

function qualityOf(ranges: MediaRange[], types: string[]): number {
	let best = 0;
	for (const range of ranges) {
		if (types.includes(range.type)) best = Math.max(best, range.q);
	}
	return best;
}

/**
 * `true` quando o cliente pediu Markdown explicitamente e não deu preferência
 * maior a HTML.
 *
 * O casamento é sempre explícito: coringas (o `Accept` padrão do curl e da
 * maioria dos scrapers, e `text/` genérico) NÃO contam como pedido de Markdown.
 * Sequestrar o coringa quebraria qualquer cliente genérico que hoje recebe
 * HTML — é exatamente o comportamento que a negociação precisa preservar.
 */
export function prefersMarkdown(accept: string | null | undefined): boolean {
	if (!accept) return false;

	const ranges = parseAccept(accept);
	const markdownQuality = qualityOf(ranges, MARKDOWN_TYPES);
	if (markdownQuality <= 0) return false;

	return markdownQuality >= qualityOf(ranges, HTML_TYPES);
}

/**
 * Caminho do gêmeo `.md` de uma rota HTML, ou `null` quando a rota não é uma
 * página (arquivos com extensão: `/rss.xml`, `/llms.txt`, `/_astro/x.css`).
 *
 * Convenção única: `<rota>/index.md`. Casa com o formato `directory` do build do
 * Astro (`/posts/x/` → `posts/x/index.html`), então o gêmeo mora ao lado do HTML
 * e um único fetch resolve qualquer rota.
 */
export function markdownTwinPath(pathname: string): string | null {
	const path = pathname.split('?')[0]?.split('#')[0] ?? '/';
	const lastSegment = path.split('/').filter(Boolean).pop() ?? '';
	if (lastSegment.includes('.')) return null;

	return `${path.endsWith('/') ? path : `${path}/`}index.md`;
}

/**
 * Corpo Markdown do 404. Além do texto de erro, entrega ao agente as três portas
 * de entrada legíveis por máquina do site — sem elas o 404 é um beco sem saída,
 * que é justamente o que a auditoria aponta.
 */
export function notFoundMarkdown(origin: string, pathname: string): string {
	const url = (path: string) => new URL(path, origin).toString();

	return `# 404 — Página não encontrada

O caminho \`${pathname}\` não existe no Speake Blog. Ele pode ter sido removido,
renomeado ou nunca ter existido. Nada foi publicado nesse endereço.

Para encontrar o que você procura, use um destes índices:

- [llms.txt](${url('/llms.txt')}) — índice completo do blog em texto puro, com um resumo por artigo, e instruções de quando usar este site.
- [Sitemap](${url('/sitemap-index.xml')}) — todas as URLs publicadas.
- [Feed RSS](${url('/rss.xml')}) — artigos mais recentes.
- [Busca em JSON](${url('/search.json')}) — título, descrição, tags e URL de cada artigo.
- [Página inicial](${url('/')}) — últimos artigos publicados.

Todas as páginas deste site respondem em Markdown para \`Accept: text/markdown\`.
`;
}
