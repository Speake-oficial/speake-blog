---
title: "Ruído de teclado no microfone: como eliminar"
description: "Ruído de teclado no microfone se resolve em três camadas: boca a 5 cm da cápsula, teclado fora do eixo e desacoplado da mesa, e reparo espectral no que sobrou."
pubDate: 2026-11-23
tags: ["home-studio", "microfones"]
image:
  src: "../../assets/posts/home-studio.svg"
  alt: "Ilustração de home studio com microfone e interface de áudio"
---

Ruído de teclado no microfone se resolve antes da edição, em três camadas: aproxime a boca para 5 cm da cápsula, tire o teclado do eixo de captação e desacople-o da mesa, e só então repare o que sobrou. A ordem importa porque o clique de tecla é um transiente de 5 a 30 ms — rápido demais para um noise gate e curto demais para um perfil de redução de ruído. Ruído impulsivo não se remove: ou você evita na captação, ou paga caro em edição manual.

## Por que o microfone pega o som do teclado?

O microfone pega o teclado por dois caminhos simultâneos, e cada um pede solução diferente. O primeiro é aéreo: o estalo chega à cápsula como um transiente com energia entre 2 e 8 kHz — a mesma faixa das consoantes da sua voz, o que torna o reparo difícil sem estragar a dicção.

O segundo é mecânico: a batida do dedo vibra o tampo da mesa, sobe pelo braço articulado preso nesse tampo e chega ao corpo do microfone como um "tump" entre 80 e 250 Hz. É por isso que trocar de teclado parece não resolver nada — você tratou o som aéreo e deixou o caminho estrutural intacto.

## Qual microfone pega menos ruído de teclado?

Um dinâmico cardioide usado muito perto da boca: SM7B, SM58, RE20 ou clones de baixo custo tipo XM8500. O ganho não vem de ele ser "menos sensível" — é, e por isso pede mais ganho no pré. Vem da distância de trabalho: dinâmico aguenta 3 a 5 cm da boca, e um condensador grande costuma ficar a 15 ou 20 cm.

Essa diferença é o maior lance da mesa: cada vez que a distância cai à metade, a voz sobe cerca de 6 dB e o teclado continua onde estava. Sair de 20 cm para 5 cm compra cerca de 12 dB de relação voz/teclado — mais do que qualquer plugin entrega sem artefato.

## Como posicionar o microfone para o teclado ficar fora do eixo?

Coloque o teclado na região de menor sensibilidade do padrão polar, abaixo da linha da cápsula. Um cardioide rejeita de 20 a 25 dB no eixo traseiro (180°); o supercardioide tem o ponto mais surdo em torno de 125°, e o hipercardioide, 110°.

Na prática, com cardioide:

1. Traga o braço articulado por cima, descendo até a boca num ângulo de 30° a 45°.
2. Mire a frente da cápsula na boca, com a traseira apontada para a mesa e o teclado.
3. Afaste o teclado 30 a 40 cm da cápsula — entre 15 cm e 40 cm há cerca de 8 dB.
4. Prenda o braço em superfície diferente da que recebe o teclado, ou use pedestal de chão.
5. Monte em shock mount e aplique high-pass em 80 a 100 Hz na edição, para o resto do "tump".

## Teclado silencioso e tapete de mesa resolvem?

Resolvem o caminho aéreo, não o mecânico — e valem cada centavo mesmo assim. Switches lineares silenciosos derrubam o estalo mais audível; o-rings de 0,4 mm abafam o fim de curso, mas não o topo. Os números abaixo são ordem de grandeza a 30 cm, e variam com o teclado e o tampo:

| Teclado | Nível típico a 30 cm | O que sobra |
| --- | --- | --- |
| Mecânico clicky (azul) | 55–65 dB(A) | clique agudo impossível de esconder |
| Mecânico linear/tátil | 45–55 dB(A) | fim de curso e vibração na mesa |
| Switch silencioso | 40–48 dB(A) | toque leve, mascarado pela voz |
| Membrana baixo perfil | 40–50 dB(A) | chassi oco ressoa na mesa |

O tapete trata a outra metade: EVA ou feltro de 3 a 5 mm sob o teclado e sob o mouse corta boa parte da vibração que chegaria ao braço do microfone. Mouse com switch silencioso elimina o clique mais irritante, porque ele é isolado e nunca fica mascarado pela fala.

## Noise gate tira ruído de teclado?

Não tira. Um noise gate só age no silêncio entre frases, e o clique de teclado acontece junto com a fala — no exato momento em que o gate está aberto. Pior: nas pausas, o transiente dispara a abertura do gate e deixa o clique mais exposto que antes. Gate limpa piso de ruído, não ruído impulsivo.

## Como remover cliques de teclado já gravados?

Reparo espectral, um clique por vez. No iZotope RX, selecione o transiente no espectrograma e use Spectral Repair em modo Attenuate; De-click ajuda em estalos curtos e isolados. De graça, o Spectral Delete do Audacity faz a versão simples do mesmo trabalho.

O limite é de volume: dez a vinte cliques isolados por hora são reparáveis à mão; quarenta minutos de digitação contínua por baixo da voz não são, e o caminho é regravar. Adobe Podcast Enhance Speech, Descript Studio Sound e Auphonic atenuam parte dos cliques, mas tratam a voz inteira — teste um minuto antes de processar o episódio.

## Perguntas frequentes

**Gravar o roteiro no tablet resolve o problema?** Em grande parte, sim. Rolar texto no tablet, usar pedal de página ou imprimir o roteiro elimina a fonte do ruído — sempre mais barato que tratá-la depois.

**O pop filter ajuda contra ruído de teclado?** Não. Pop filter trata o jato de ar das plosivas, não transientes de outra direção nem vibração que sobe pela haste.

Com o teclado fora do take, sobra decidir quem ouve o resultado. Na [Speake](https://speake.com.br) você publica seus episódios numa estação própria e é a assinatura mensal da sua audiência que remunera esse cuidado na gravação.
