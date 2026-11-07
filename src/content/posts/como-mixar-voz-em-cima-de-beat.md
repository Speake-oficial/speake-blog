---
title: "Como mixar voz em cima de beat: passo a passo"
description: "Como mixar voz em cima de beat: abaixe o beat para -6 dBFS, corte graves da voz, abra espaço no instrumental e use reverb em envio. Passo a passo com valores."
pubDate: 2026-11-07
tags: ["mixagem", "producao-musical"]
image:
  src: "../../assets/posts/mixagem.svg"
  alt: "Faders e knobs estilizados de uma mesa de mixagem"
---

Para mixar voz em cima de beat, abaixe o beat até ele picar perto de -6 dBFS, limpe a voz com corte de graves e compressão leve, abra um espaço no instrumental na região em que a voz vive (1 a 4 kHz) e use reverb e delay em envios separados. O objetivo é fazer voz e beat caberem juntos sem que um esmague o outro: a voz fica à frente, o beat continua com peso.

## Por que a voz some quando você coloca em cima do beat?

A voz some porque o beat quase sempre já vem alto e ocupando as mesmas frequências. Um instrumental baixado de um marketplace costuma estar masterizado, com picos perto de 0 dBFS e muita energia entre 200 Hz e 4 kHz, justamente onde a voz precisa aparecer. Sem espaço sobrando, qualquer aumento de volume na voz só distorce o master.

## Como preparar o beat antes de gravar ou mixar?

Antes de mexer na voz, reduza o volume do beat. O passo a passo:

1. Abaixe o fader do beat até os picos ficarem entre -8 e -6 dBFS. Isso devolve cerca de 6 dB de headroom para a voz e para o limitador.
2. Se o beat veio em stereo único (sem stems), ouça em mono e confira se os graves não somem. Se somem, há problema de fase no arquivo e vale pedir outra versão ao produtor.
3. Sempre que possível, peça os stems separados (kick, 808, melodia, hi-hats). Mixar com stems permite tratar cada elemento sem destruir o resto.
4. Exporte a gravação da voz em 48 kHz/24 bit, sem normalizar, para manter margem de ajuste.

## Qual a cadeia de plugins ideal para voz de rap ou canto?

A cadeia mais confiável segue esta ordem: EQ corretivo, compressor, de-esser, EQ de brilho, saturação leve. Valores de partida:

| Etapa | Ajuste inicial |
|---|---|
| Filtro passa-alta | 80 a 100 Hz, 12 dB/oitava |
| EQ corretivo | corte de 2 a 4 dB perto de 250-400 Hz se a voz estiver "encaixotada" |
| Compressor | razão 3:1 a 4:1, ataque 10 a 30 ms, release curto (50 a 100 ms), 3 a 6 dB de redução |
| De-esser | atuando entre 5 e 8 kHz, 2 a 4 dB de redução |
| EQ de brilho | realce suave de 1 a 3 dB acima de 10 kHz (shelf) |

No rap, o release curto importa: com ele, o compressor volta a abrir a tempo de a próxima sílaba passar com seu transiente intacto. Release longo deixa a voz opaca e "pesada".

## Como abrir espaço para a voz dentro do beat?

Abra espaço com EQ subtrativo no beat, não só na voz. O método:

1. Insira um EQ no canal do beat (ou no grupo de instrumentos melódicos).
2. Faça um corte largo e suave de 2 a 3 dB entre 1 kHz e 4 kHz, com Q baixo.
3. Alterne o EQ ligado e desligado enquanto a voz toca. A inteligibilidade das consoantes deve melhorar sem que o beat soe vazio.
4. Se a voz e o 808 brigam, corte a voz abaixo de 100 Hz e deixe os subgraves só para o beat.

Uma alternativa mais precisa é um EQ dinâmico ou um sidechain leve (1 a 2 dB) controlado pela voz, que afasta o beat só enquanto alguém está falando ou cantando.

## Quanto de reverb e delay usar na voz?

Use pouco, e sempre em envio (send), nunca direto no canal. Voz de rap costuma ficar quase seca, porque reverb pesado borra as consoantes e empurra a voz para trás. Um ponto de partida:

- Reverb de plate ou sala pequena, decay entre 0,8 e 1,5 s, com pré-delay de 20 a 40 ms.
- Delay de 1/8 ou 1/4 sincronizado ao BPM, com feedback baixo, e o retorno filtrado acima de 300 Hz e abaixo de 6 kHz para não sujar o mix.
- Nível do retorno tão baixo que você só percebe o efeito quando o desliga.

## Como saber se a mixagem está equilibrada?

Confira em três lugares: fone, caixa do notebook ou celular, e um sistema com graves (carro, por exemplo). Se a voz se entende nos três, a mixagem traduz bem. Compare também com uma faixa de referência do mesmo estilo, ajustando o volume dela para igualar o seu, de modo que a comparação seja justa.

## Perguntas frequentes

**Devo masterizar o beat junto com a voz?**
Só depois de mixar. O ideal é fechar o mix, exportar com cerca de -3 dBFS de pico e então aplicar o limitador na masterização, mirando o loudness do destino (por exemplo, perto de -14 LUFS integrado para streaming).

**Qual a diferença entre mixar com stems e com beat em stereo?**
Com stems, você trata cada instrumento separado e consegue abrir espaço preciso para a voz. Com o stereo único, só dá para tratar o beat como um bloco, o que limita os ajustes a cortes largos de EQ e ao volume.

**Posso mixar voz com beat só no fone?**
Pode começar, mas confira também em caixas ou no celular. O fone exagera graves e detalhes finos, e uma mixagem feita só nele tende a perder presença de voz fora dele.

Com a voz mixada e o beat no lugar, falta decidir onde essa faixa vai ser ouvida. Na [Speake](https://speake.com.br) você publica numa estação própria e é a assinatura mensal da sua audiência que sustenta o trabalho.
