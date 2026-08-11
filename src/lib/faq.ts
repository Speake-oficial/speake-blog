// Extrai pares pergunta/resposta da seção de FAQ de um post para gerar JSON-LD
// `FAQPage`. Lê o markdown cru (post.body) em vez do HTML renderizado porque o
// schema precisa ser montado no frontmatter do template, antes de <Content />.
//
// Convenção esperada no markdown:
//
//   ## Perguntas frequentes
//
//   ### A pergunta?
//
//   A resposta, em um parágrafo.
//
// Também aceita o formato antigo `**A pergunta?**` seguido da resposta na linha
// debaixo. Em ambos, a resposta é o primeiro bloco contíguo de texto depois da
// pergunta — o que faz o parser parar sozinho no parágrafo de CTA que fecha os
// posts, já que ele vem separado por linha em branco e sem pergunta antes.

export interface FaqEntry {
	question: string;
	answer: string;
}

const FAQ_SECTION = /^##\s+(perguntas frequentes|d[uú]vidas frequentes|faq)\s*$/i;
const NEXT_SECTION = /^##\s+/;
const HEADING_QUESTION = /^#{3,4}\s+(.+?)\s*$/;
const BOLD_QUESTION = /^\*\*(.+?)\*\*\s*$/;

/** Remove marcação inline (links, ênfase, código) mantendo o texto legível. */
function stripInlineMarkdown(text: string): string {
	return text
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/`([^`]+)`/g, '$1')
		.replace(/\*\*([^*]+)\*\*/g, '$1')
		.replace(/\*([^*]+)\*/g, '$1')
		.replace(/_([^_]+)_/g, '$1')
		.trim();
}

function matchQuestion(line: string): string | null {
	const heading = line.match(HEADING_QUESTION);
	if (heading) return stripInlineMarkdown(heading[1]);
	const bold = line.match(BOLD_QUESTION);
	if (bold) return stripInlineMarkdown(bold[1]);
	return null;
}

export function extractFaq(markdown: string): FaqEntry[] {
	const lines = markdown.split(/\r?\n/);
	const start = lines.findIndex((line) => FAQ_SECTION.test(line));
	if (start === -1) return [];

	const entries: FaqEntry[] = [];

	for (let i = start + 1; i < lines.length; i++) {
		if (NEXT_SECTION.test(lines[i])) break;

		const question = matchQuestion(lines[i]);
		if (!question) continue;

		// Pula as linhas em branco entre a pergunta e a resposta (o formato com
		// `###` sempre tem uma; o formato com `**` não tem nenhuma).
		let j = i + 1;
		while (j < lines.length && lines[j].trim() === '') j++;

		const answerLines: string[] = [];
		while (j < lines.length && lines[j].trim() !== '' && !matchQuestion(lines[j]) && !NEXT_SECTION.test(lines[j])) {
			answerLines.push(lines[j].trim());
			j++;
		}

		const answer = stripInlineMarkdown(answerLines.join(' '));
		if (answer) entries.push({ question, answer });

		i = j - 1;
	}

	return entries;
}
