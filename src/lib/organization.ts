// Nó `Organization` do JSON-LD, em um lugar só.
//
// O MESMO `@id` DO NÓ DEFINIDO EM speake.com.br — e é de propósito: é assim que
// o Google entende que o publisher deste blog é aquela entidade, e não uma
// organização homônima.
//
// Justamente por isso a `description` PRECISA ser idêntica à de lá
// (`SITE_DESCRIPTION`, em `src/lib/site.ts` do site principal). Aqui já dizia
// "Estúdio de produção de áudio, podcast e narração profissional": duas
// descrições conflitantes para o mesmo `@id`, servidas de dois hosts. O Google
// resolve o conflito escolhendo uma, e o blog tem mais páginas indexadas que o
// principal — ou seja, tendia a vencer a versão errada.
//
// Nada além de nome, URL, descrição e logo entra neste nó. Os campos que
// constroem a entidade (`legalName`, `alternateName`, `sameAs`) vivem no site
// principal, que é a fonte canônica; repeti-los aqui só criaria mais superfície
// para divergir.
//
// A função existe porque o nó agora é emitido por mais de uma página (home e as
// três páginas-âncora). Duas cópias literais do nó divergiriam na primeira
// edição — que é exatamente o erro que o parágrafo acima descreve.

export const ORGANIZATION_ID = 'https://speake.com.br/#organization';

export function organizationNode(siteURL: string) {
	return {
		'@type': 'Organization',
		'@id': ORGANIZATION_ID,
		name: 'Speake',
		url: 'https://speake.com.br',
		description:
			'Crie sua estação de áudio na Speake: publique conteúdos exclusivos, sua audiência assina para ouvir e você transforma voz em receita recorrente.',
		logo: {
			'@type': 'ImageObject',
			url: new URL('/icon-512.png', siteURL).toString(),
			width: 512,
			height: 512,
		},
	};
}
