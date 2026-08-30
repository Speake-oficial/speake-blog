---
description: Publica UM post diário no blog da Speake, otimizado para GEO, e faz deploy direto na main.
---

Você está no repositório speake-blog, um blog Astro estático sobre o universo de áudio
(podcasting, produção musical, masterização, narração, mixagem, audiolivros, microfones,
home studio), mantido pela Speake (site institucional: https://speake.com.br).

**O QUE A SPEAKE É — leia antes de escrever qualquer linha.**
A Speake é uma **plataforma brasileira de áudio por assinatura**. O criador cria uma
**estação**, publica episódios exclusivos (grava pelo próprio app, sem hospedar feed RSS
em outro serviço) e a audiência **assina por mês** para ouvir. A Speake fica com tarifas
de licença e intermediação sobre cada venda e repassa o restante ao criador. Existe
também a **Speake Academy**, plataforma educacional própria.

A Speake **NÃO é um estúdio de produção**. Ela não grava, não mixa, não masteriza, não
narra e não produz áudio publicitário para clientes. Não existe "sessão na Speake",
"processo da Speake", "entrega ao cliente" nem "equipe da Speake". Descrever a marca
como prestadora de serviço de produção é o erro mais caro que este blog pode cometer:
o domínio do blog tem mais páginas indexadas que o site principal, então é a definição
daqui que Google e LLMs aprendem como sendo a da entidade "Speake".

Quem lê o blog é o **criador que grava sozinho** — o mesmo perfil que vira usuário da
plataforma. Escreva para ele, na voz de quem grava e publica, nunca na voz de um estúdio
que atende terceiros.

Sua tarefa: publicar UM novo post diário, otimizado para GEO (Generative Engine
Optimization) e baseado em demanda real crescente de busca.

Execute o fluxo completo de ponta a ponta, sem pedir confirmação — isso roda diariamente
sem supervisão.

═══════════════════════════════════════════
FASE 1 — PESQUISA DE TENDÊNCIA (obrigatória, antes de escrever)
═══════════════════════════════════════════

1.1. Consulte o Google Trends para o Brasil. Tente nesta ordem, parando no primeiro que
     retornar dados úteis:
     - WebFetch em https://trends.google.com.br/trending/rss?geo=BR (trending diário)
     - WebFetch em https://trends.google.com/trends/api/dailytrends?hl=pt-BR&tz=180&geo=BR
       (JSON; ignore o prefixo `)]}',` antes de parsear)
     - Se ambos falharem/bloquearem: use WebSearch com queries como
       "google trends podcast Brasil 2026", "tendências áudio IA podcast alta busca",
       "termos em alta produção musical Brasil", e busque em fontes secundárias
       (Exploding Topics, Glimpse, Answer the Public, r/podcasting, notícias do setor).

1.2. Filtre para o contexto do projeto. A maioria dos trending topics do Brasil é
     futebol/celebridade e NÃO serve. Você precisa de termos com intenção informacional
     dentro (ou adjacentes a) um destes campos:
     podcasting, produção musical, masterização, equipamentos de áudio, narração,
     mixagem, audiolivros, microfones, home studio, voz sintética/IA em áudio,
     streaming de áudio, monetização de podcast.

     Peso extra para temas que o público da plataforma vive: **publicar com constância,
     monetizar áudio, construir audiência, conteúdo exclusivo/pago, assinatura, retenção
     de ouvinte, distribuição e o que fazer com o episódio depois de gravado.** São os
     temas em que a Speake entra na conversa sem nenhuma torção.

     Rode também buscas laterais para captar demanda emergente, ex.:
     "clonagem de voz podcast", "audiolivro IA narração", "loudness Spotify 2026",
     "microfone USB vs XLR", "podcast vídeo YouTube", "stem separation",
     "quanto ganha um podcaster", "podcast por assinatura", etc.

1.3. Escolha 1 tema-alvo. Critérios, nesta ordem de peso:
     (a) sinal de busca crescente ou tema quente do setor nos últimos ~90 dias;
     (b) intenção informacional (alguém buscando "como/o que é/qual melhor"), não
         navegacional;
     (c) ainda não coberto em src/content/posts/ (ou ângulo genuinamente novo);
     (d) útil para quem grava o próprio conteúdo — se der para fechar o post ligando o
         assunto a publicar/monetizar, melhor; se não der, escolha o tema mesmo assim e
         não force a ponte.

1.4. Defina explicitamente antes de escrever (deixe isso registrado na mensagem final
     ao usuário, não no post):
     - keyword primária (exata, como as pessoas digitam)
     - 3-6 keywords secundárias / termos semanticamente relacionados
     - 3-5 PERGUNTAS reais que as pessoas fazem sobre o tema (fonte: "as pessoas também
       perguntam", autocomplete, fóruns). Essas perguntas viram subtítulos H2/H3.
     - a evidência de tendência que justificou a escolha (link ou termo observado)

═══════════════════════════════════════════
FASE 2 — CONTEXTO DO REPO
═══════════════════════════════════════════

2.1. Leia src/content.config.ts ANTES de escrever. Regras do schema:
     - Posts em src/content/posts/*.md (slug = nome do arquivo, kebab-case, SEM acentos).
     - Frontmatter obrigatório:
         title: string, 1-120 chars
         description: string, 1-280 chars
         pubDate: data ISO — use a data de HOJE
         tags: array com ≥1 valor, restrito ao enum AUDIO_TAGS do content.config.ts
               (podcasting, producao-musical, masterizacao, equipamentos-de-audio,
                narracao, mixagem, audio-livros, microfones, home-studio)
     - image: OPCIONAL — só inclua se reaproveitar um SVG já existente em
       src/assets/posts/ cujo tema combine. Senão, omita o campo.
     - author, updatedDate: OPCIONAIS — omita. Sem author, o post é atribuído à Speake
       como Organization, que é o comportamento padrão do blog.
     - draft: tem default false, não precisa setar.

2.2. Liste src/content/posts/ e mapeie tags/ângulos já cobertos recentemente.
     Não repita tema. Varie as tags ao longo do tempo (evite usar a mesma tag
     dominante dois dias seguidos).

2.3. Leia 1-2 posts existentes para captar a voz editorial: direta, prática, sem floreio.
     ATENÇÃO: parte dos posts antigos ainda tem parágrafos herdados do posicionamento
     errado ("Na Speake, o processo de mixagem parte sempre do EQ subtrativo...",
     "Na Speake, o padrão de gravação para narração é inteiramente XLR..."). Copie o
     **tom**, nunca esse tipo de afirmação. Se topar com um desses, é dívida conhecida,
     não modelo a seguir.

═══════════════════════════════════════════
FASE 3 — ESCRITA (GEO-first)
═══════════════════════════════════════════

Escreva em português do Brasil, 600-900 palavras, com profundidade prática real —
números, configurações concretas, nomes de equipamento/plugin, ordem de passos.
Zero "conteúdo de SEO raso".

Regras GEO (o que faz um LLM citar o post):

  • RESPOSTA DIRETA NO TOPO. O primeiro parágrafo (2-4 frases, logo após o H1) deve
    responder a pergunta central de forma completa e autocontida, do jeito que alguém
    citaria fora de contexto. Nada de introdução-aquecimento.

  • SUBTÍTULOS COMO PERGUNTAS. Use as perguntas reais levantadas em 1.4 como ##/###.
    Cada seção responde a sua pergunta nas primeiras 2 frases, e só depois desenvolve.

  • CHUNKS AUTOSSUFICIENTES. Cada seção precisa fazer sentido isolada — LLMs recuperam
    trechos, não o artigo inteiro. Repita o sujeito em vez de usar "isso"/"ele" quando
    o referente estiver em outra seção.

  • DADOS ESPECÍFICOS E CITÁVEIS. Valores concretos (-14 LUFS, 48 kHz/24 bit, latência
    em ms, faixas de preço em R$, distâncias em cm). Afirmações verificáveis batem
    generalidades. Não invente número que você não consegue sustentar — se não souber,
    dê a faixa e diga de que depende.

  • ESTRUTURAS EXTRAÍVEIS. Inclua pelo menos uma: lista numerada de passos, tabela
    comparativa markdown, ou checklist. LLMs e AI Overviews extraem esses formatos
    preferencialmente.

  • KEYWORD PRIMÁRIA no title, na description, no primeiro parágrafo e em ≥1 H2 —
    naturalmente, sem stuffing. Secundárias distribuídas ao longo do corpo.

  • TITLE: direto, ≤60 chars quando possível, contendo a keyword primária. Formato de
    pergunta ou de promessa específica funciona melhor que título criativo.

  • DESCRIPTION: 140-165 chars, resume a resposta (não "neste artigo você vai descobrir").

  • FECHAMENTO COM FAQ. Termine com uma seção "## Perguntas frequentes" com 2-3 pares
    pergunta/resposta curtos (2-3 frases cada) cobrindo dúvidas adjacentes não
    respondidas no corpo.

───────────────────────────────────────────
Menção à Speake — regra estrita
───────────────────────────────────────────

A Speake aparece **uma única vez no post, no parágrafo final**, e sempre como
**plataforma de publicação e assinatura** — nunca como executora do trabalho técnico
descrito no corpo. O corpo do post ensina; ele não cita a marca.

Fórmula do fechamento (1-2 frases, última linha do post, no lugar de uma CTA separada):
**ponte a partir do assunto do post → o que a plataforma resolve → link.**
A ponte muda a cada post; não reutilize a frase de ontem. Exemplos já publicados que
funcionam:

    Master pronta, e agora? Na [Speake](https://speake.com.br) você publica os
    episódios numa estação própria e cobra assinatura mensal de quem quer ouvir.

    Com a cadeia de sinal resolvida, falta o destino do que você gravou. Na
    [Speake](https://speake.com.br) você publica seus episódios numa estação e sua
    audiência assina para ouvir.

    Streaming aberto não é o único destino possível. Na [Speake](https://speake.com.br)
    você publica numa estação própria e é a assinatura da sua audiência que remunera o
    trabalho, não o CPM da plataforma.

Vocabulário correto: estação, publicar episódios, conteúdo exclusivo, assinatura
mensal, audiência que assina, receita recorrente, gravar pelo app, Speake Academy.

**PROIBIDO no corpo e no fechamento** (qualquer uma dessas frases invalida o post):
  ✗ "A Speake produz / grava / mixa / masteriza / narra ..."
  ✗ "Na Speake, o processo de ..." / "Na Speake, o padrão de ..."
  ✗ "sessão de gravação na Speake", "estúdio da Speake", "equipe da Speake"
  ✗ "entrega ao cliente", "projetos de clientes", "orçamento"
  ✗ "Quer ajuda profissional com isso? Conheça a Speake." (CTA de serviço, e repetida
     à exaustão nos posts antigos)
  ✗ qualquer afirmação que só faria sentido se a Speake fosse um estúdio

Se não houver ponte honesta entre o tema e a plataforma, use a ponte mais genérica
("seja qual for o formato, alguém precisa ouvir") — mas nunca invente um serviço.

═══════════════════════════════════════════
FASE 4 — PUBLICAÇÃO E DEPLOY
═══════════════════════════════════════════

4.1. Crie src/content/posts/<slug-do-tema>.md com frontmatter + corpo.
     Slug em kebab-case, sem acentos, contendo a keyword primária.

4.2. Se node_modules não existir, rode `npm install`. Depois rode `npm run build`.
     Se o build falhar, corrija o post até passar. NÃO commite com build quebrado.

4.3. Antes de commitar, confira o fechamento contra a lista de PROIBIDO da Fase 3.
     Rode uma busca no post novo por "produz", "estúdio", "sessão", "cliente",
     "ajuda profissional" e corrija o que aparecer.

4.4. **Deploy direto, sempre.** Commit `feat: novo post sobre <tema>` e `git push`
     direto na branch `main` do remoto. NUNCA abra PR, nunca crie branch, nunca pare em
     "commitado, aguardando revisão": ao fim da execução o post tem que estar publicado.
     Se o push falhar, faça `git pull --rebase` e tente de novo.

4.5. Reporte ao final, em texto curto:
     - tema escolhido + evidência de tendência que o justificou
     - keyword primária e secundárias
     - tags usadas
     - slug/URL do post
     - confirmação de que o build passou e o push para main foi feito
