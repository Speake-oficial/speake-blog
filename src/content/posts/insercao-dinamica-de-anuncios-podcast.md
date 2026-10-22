---
title: "Inserção dinâmica de anúncios no podcast: como funciona"
description: "Inserção dinâmica de anúncios troca o spot a cada play: onde marcar pre-roll e mid-roll, o alvo de -16 LUFS do spot e quando ela rende mais que o baked-in."
pubDate: 2026-10-22
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Inserção dinâmica de anúncios (DAI, de *dynamic ad insertion*) é a técnica em que o anúncio não fica gravado dentro do arquivo do episódio: você marca os pontos onde ele deve entrar e o servidor da hospedagem costura o spot no momento em que cada ouvinte aperta o play. Na prática, um episódio publicado há dois anos pode veicular a campanha que você fechou nesta semana, e o anúncio de um patrocinador que saiu sai de todo o catálogo em minutos, sem reeditar nada.

## O que é inserção dinâmica de anúncios e por que ela existe?

Inserção dinâmica de anúncios é a entrega do spot em tempo de reprodução. O arquivo que você sobe contém só o conteúdo; os anúncios ficam no servidor, que monta a versão final a cada requisição. O motivo de existir é econômico: o anúncio gravado dentro do episódio para de render no dia seguinte à publicação, enquanto o catálogo antigo continua sendo baixado — a inserção dinâmica transforma esse catálogo em inventário vendável.

O efeito colateral que importa para quem grava sozinho é de conformidade: anúncio gravado no arquivo fica lá para sempre. Se a promoção venceu ou a empresa fechou, cada novo download continua veiculando a oferta vencida.

## Qual a diferença entre anúncio gravado no episódio e inserção dinâmica?

A diferença está em onde o spot vive e em quem decide qual anúncio toca.

| Aspecto | Gravado no episódio (baked-in) | Inserção dinâmica |
|---|---|---|
| Onde fica o spot | Dentro do arquivo de áudio | No servidor de anúncios da hospedagem |
| Troca depois de publicar | Só reeditando e re-subindo | Imediata, em todo o catálogo |
| Rende no catálogo antigo | Não | Sim |
| Segmentação por região | Não | Sim, por IP e idioma do ouvinte |
| Voz | Sua, com contexto do programa | Locução genérica da campanha |
| CPM típico no Brasil | R$ 80 a R$ 300 no mid-roll lido | R$ 30 a R$ 150, conforme a posição |

A leitura feita pelo apresentador continua pagando mais: levantamentos citados por publicações do setor em 2026 ainda apontam o host-read como maioria do investimento em áudio. Os dois modelos convivem — grave a leitura você mesmo e suba como spot dinâmico, ganhando a voz do programa e a troca a qualquer momento. A conta de quanto cada formato rende está em [monetização de podcast no Brasil](/posts/monetizacao-de-podcast-quanto-rende/).

## Onde colocar os marcadores de pre-roll, mid-roll e post-roll?

Marcador é um *timestamp* que você cria no editor da hospedagem; o servidor usa esse ponto como costura. A regra prática é marcar em pausa natural, nunca no meio de uma frase ou de uma trilha.

1. **Pre-roll — no segundo 0, antes da vinheta.** Dura 15 a 30 segundos. É o mais pulado: quem conhece o programa adianta.
2. **Mid-roll — entre 30% e 70% da duração.** Dura em torno de 60 segundos e é a posição mais valorizada. Algumas plataformas (RedCircle, por exemplo) criam o ponto em 50% por padrão; mova para a pausa mais próxima.
3. **Post-roll — depois do fechamento.** Tem a pior retenção; use como bônus na negociação, não como inventário principal.
4. **Dois mid-rolls só acima de 40 minutos.** Em episódio de 20 minutos, dois cortes publicitários derrubam a taxa de conclusão.
5. **Confira o limite da hospedagem.** A Megaphone aceita até 15 pontos por episódio (5 de cada tipo) — teto técnico, não recomendação editorial.

## Como preparar o spot para não destoar do episódio?

O spot precisa ter o mesmo loudness do conteúdo, senão o ouvinte pula no susto. As especificações de áudio publicitário do Spotify pedem **-16 LUFS integrado (tolerância de ±1,5 LUFS) e true peak máximo de -2 dBTP**, mais **0,5 segundo de silêncio no início e no fim** do arquivo, para a transição não cortar sílaba. Grave em 48 kHz/24 bit.

Se o episódio está masterizado em outro alvo, iguale os dois: a diferença incomoda a partir de uns 2 LUFS. Vale revisar o [loudness em LUFS](/posts/loudness-lufs-podcast-streaming/) do programa antes de abrir o inventário.

## Quantos downloads preciso para ter inserção dinâmica?

Nenhum, para ligar o recurso: o que exige audiência é a demanda, não a tecnologia. Programas de monetização por marketplace normalmente pedem entre 1.000 e 2.000 downloads por episódio nos primeiros 30 dias — confirme a regra atual da sua hospedagem, porque esse piso muda. Abaixo disso, use os marcadores com auto-promoção: trailer, newsletter, chamada para o seu conteúdo pago.

## O que a inserção dinâmica quebra no episódio?

Ela muda a duração do arquivo a cada play, e isso afeta tudo que depende de tempo fixo. Os [capítulos do episódio](/posts/capitulos-no-podcast-como-adicionar/) precisam ser gerados pela hospedagem depois da inserção, ou ficam deslocados, e qualquer "no minuto 12 eu falo sobre" dito dentro do áudio vira informação errada: cite blocos por nome, não por timestamp.

## Perguntas frequentes

**Inserção dinâmica atrapalha a entrega do episódio?**
Não. Os tocadores recebem o mesmo endereço de sempre e a montagem acontece na entrega do arquivo. O que muda é a duração informada, que varia de um ouvinte para outro.

**O ouvinte percebe que o anúncio foi inserido depois?**
Percebe quando o volume salta ou quando o corte cai no meio de uma frase. Com o spot em -16 LUFS e o marcador numa pausa, a costura passa como parte do episódio.

Anúncio dinâmico resolve o inventário, mas a receita continua dependendo de campanha fechada e de CPM. Na [Speake](https://speake.com.br) você publica os episódios numa estação própria e cobra assinatura mensal de quem quer ouvir — receita recorrente que não some quando o patrocinador não renova.
