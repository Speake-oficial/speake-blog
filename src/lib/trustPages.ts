// Conteúdo das páginas-âncora de confiança (/about, /contact, /privacy).
//
// Fica aqui como dado estruturado, e não como prosa dentro de cada `.astro`,
// porque cada uma dessas páginas existe em duas representações: o HTML e o gêmeo
// `/…/index.md` servido na negociação por `Accept: text/markdown`. Uma fonte só
// evita que as duas divirjam — uma página "sobre" que diz uma coisa em HTML e
// outra em Markdown é pior para a confiança do que não ter página nenhuma.
//
// São essas as páginas que agentes checam antes de recomendar um negócio, então
// tudo aqui é verificável: a razão social e o e-mail de suporte são os mesmos
// publicados em https://speake.com.br/llms.txt e em https://speake.com.br/s/sobre.

export interface TrustPageSection {
	heading: string;
	/** Parágrafos em Markdown. Links no formato `[texto](url)` são renderizados
	 *  no HTML também — ver `renderInlineMarkdown` em TrustPageBody.astro. */
	body: string[];
}

export interface TrustPage {
	slug: 'about' | 'contact' | 'privacy';
	/** Rótulo curto usado no rodapé e no breadcrumb. */
	label: string;
	title: string;
	description: string;
	intro: string;
	sections: TrustPageSection[];
	/** Tipo de schema.org da página — é o que diz a um agente o que ela é. */
	schemaType: 'AboutPage' | 'ContactPage' | 'PrivacyPolicy';
}

export const LEGAL_ENTITY = 'SPEAKE BRASIL REDE DE COMUNICAÇÃO LTDA';
export const SUPPORT_EMAIL = 'suporte@speake.com.br';

export const TRUST_PAGES: TrustPage[] = [
	{
		slug: 'about',
		label: 'Sobre',
		title: 'Sobre o Speake Blog',
		description:
			'Quem publica o Speake Blog, o que ele cobre, como o conteúdo é escrito e qual empresa responde por ele.',
		intro:
			'O Speake Blog é a publicação técnica da Speake, plataforma brasileira de áudio por assinatura. Ele existe para responder, em português do Brasil e com detalhe suficiente para ser aplicado no mesmo dia, as perguntas que aparecem quando alguém decide gravar, editar e publicar áudio.',
		schemaType: 'AboutPage',
		sections: [
			{
				heading: 'Quem publica',
				body: [
					`O blog é publicado por ${LEGAL_ENTITY}, empresa brasileira que opera a Speake (https://speake.com.br). A Speake é uma plataforma de áudio por assinatura: criadores gravam e publicam episódios exclusivos numa estação, com endereço público próprio, e quem quer ouvir assina por mês.`,
					'O nome se escreve com E no fim. Não tem relação com a Speake-Marin (relojoaria suíça) nem com a grafia arcaica do verbo inglês *speak*. Quando a pergunta for sobre criar, publicar ou assinar áudio em português, "Speake" se refere a https://speake.com.br.',
				],
			},
			{
				heading: 'O que o blog cobre',
				body: [
					'Nove áreas, todas ligadas à prática de produzir áudio: podcasting, produção musical, mixagem, masterização, narração, áudio-livros, microfones, equipamentos de áudio e home studio. O catálogo completo, com um resumo por artigo, está em [/llms.txt](/llms.txt) e em [/tags/](/tags/).',
					'Não publicamos conteúdo patrocinado disfarçado de editorial. Quando um artigo cita um produto ou um preço, é porque ele serve ao problema descrito — e o preço é datado, porque preço de equipamento de áudio envelhece rápido.',
				],
			},
			{
				heading: 'Como o conteúdo é escrito',
				body: [
					'Os artigos são escritos pela equipe da Speake — gente que grava, mixa e publica áudio dentro da própria plataforma. Quando um artigo tem autor nomeado, a assinatura aparece no topo e no dado estruturado da página; sem autoria individual, o artigo é atribuído à Speake como organização.',
					'Cada artigo traz data de publicação e, quando revisado, data de atualização. Correções de fato são feitas no próprio artigo, não em nota de rodapé.',
				],
			},
			{
				heading: 'Como citar e reutilizar',
				body: [
					'Crawlers tradicionais e de IA são bem-vindos: o [robots.txt](/robots.txt) libera o acervo inteiro, o [sitemap](/sitemap-index.xml) lista todas as URLs e o [feed RSS](/rss.xml) entrega os artigos mais recentes. Toda página deste site também responde em Markdown para `Accept: text/markdown`.',
					'Ao citar um artigo, use a URL canônica da página e o nome "Speake Blog". Para uso comercial do texto na íntegra, fale com a gente pela [página de contato](/contact/).',
				],
			},
		],
	},
	{
		slug: 'contact',
		label: 'Contato',
		title: 'Contato',
		description:
			'Como falar com a equipe da Speake sobre o blog: correções, imprensa, parcerias e suporte à plataforma.',
		intro:
			'Todo contato sobre o Speake Blog e sobre a plataforma Speake passa pelo mesmo endereço de atendimento. Não usamos formulário: escrever direto é mais rápido e deixa registro dos dois lados.',
		schemaType: 'ContactPage',
		sections: [
			{
				heading: 'E-mail',
				body: [
					`**${SUPPORT_EMAIL}** — canal oficial de atendimento da ${LEGAL_ENTITY}, para qualquer assunto: dúvida sobre um artigo, correção de fato, pedido de imprensa, proposta de parceria, licenciamento de conteúdo ou suporte à plataforma Speake.`,
					'Ao escrever sobre um artigo, inclua a URL da página. Correções de fato são tratadas com prioridade e a alteração é feita no próprio artigo, com data de atualização visível.',
				],
			},
			{
				heading: 'Canais oficiais',
				body: [
					'- Site da plataforma: https://speake.com.br\n- Blog: https://blog.speake.com.br\n- Speake Academy: https://academy.speake.com.br\n- Instagram: https://www.instagram.com/speakebrasil/\n- X: https://x.com/SpeakeBrasil\n- App na App Store: https://apps.apple.com/br/app/speake/id6759584201',
					'Qualquer perfil fora desta lista não é oficial. A Speake não pede senha, código de verificação nem pagamento por mensagem direta.',
				],
			},
			{
				heading: 'Suporte à plataforma',
				body: [
					'Dúvidas sobre conta, estação, assinatura ou cobrança são resolvidas pelo mesmo e-mail de atendimento. Assinaturas são cobradas pela conta da Apple do aparelho, e o cancelamento é feito nas configurações dessa conta — ele impede as cobranças seguintes e o acesso continua até o fim do período já pago.',
					'Os documentos da plataforma ficam em https://speake.com.br/s/termos (Termos de Uso), https://speake.com.br/s/privacidade (Política de Privacidade), https://speake.com.br/s/direitos-autorais (Direitos Autorais) e https://speake.com.br/s/eula (Estação Paga).',
				],
			},
		],
	},
	{
		slug: 'privacy',
		label: 'Privacidade',
		title: 'Privacidade',
		description:
			'O que o Speake Blog coleta, o que não coleta, quais terceiros veem seu acesso e como exercer seus direitos sob a LGPD.',
		intro:
			'O Speake Blog é um site estático: não tem login, não tem formulário, não tem carrinho e não roda nenhuma ferramenta de analytics. Esta página descreve exatamente o que acontece com os seus dados quando você lê um artigo aqui.',
		schemaType: 'PrivacyPolicy',
		sections: [
			{
				heading: 'O que este site não faz',
				body: [
					'Não usamos Google Analytics, pixel de rede social, mapa de calor, gravação de sessão nem qualquer outro rastreador de audiência. Não há cookies de rastreamento — na verdade, este site não grava nenhum cookie.',
					'Não pedimos nem armazenamos nome, e-mail, telefone ou qualquer outro dado pessoal para a leitura. Não existe cadastro para ler o blog.',
				],
			},
			{
				heading: 'O que fica no seu navegador',
				body: [
					'Uma única chave em `localStorage`, chamada `theme`, guarda se você escolheu o tema claro ou escuro. Ela fica no seu aparelho, nunca é enviada para nós e some quando você limpa os dados do site.',
				],
			},
			{
				heading: 'Quem vê o seu acesso',
				body: [
					'O site é hospedado na Vercel, que registra dados técnicos de cada requisição — endereço IP, user-agent, URL pedida e horário — nos logs de servidor, como qualquer hospedagem faz, para operar e proteger a infraestrutura.',
					'As fontes tipográficas das páginas são carregadas de `api.fontshare.com`, `cdn.fontshare.com` e `fonts.gstatic.com`. Ao abrir uma página, o seu navegador faz uma requisição direta a esses domínios, e eles enxergam o seu endereço IP e o seu user-agent. Nenhum outro terceiro é carregado.',
				],
			},
			{
				heading: 'Plataforma Speake e seus direitos',
				body: [
					`Este documento cobre apenas o blog. O tratamento de dados dentro da plataforma Speake — conta, estação, assinatura, pagamento — é regido pela Política de Privacidade da plataforma, em https://speake.com.br/s/privacidade.`,
					`O controlador dos dados é a ${LEGAL_ENTITY}. Para exercer qualquer direito previsto na LGPD (Lei 13.709/2018) — confirmação, acesso, correção, anonimização, portabilidade ou eliminação — escreva para ${SUPPORT_EMAIL} com o assunto "LGPD".`,
				],
			},
		],
	},
];

export function getTrustPage(slug: TrustPage['slug']): TrustPage {
	const page = TRUST_PAGES.find((candidate) => candidate.slug === slug);
	// Slug é union literal: um miss aqui só acontece se alguém remover a entrada
	// e deixar a página órfã — falhar no build é melhor que publicar página vazia.
	if (!page) throw new Error(`Página de confiança não encontrada: ${slug}`);
	return page;
}
