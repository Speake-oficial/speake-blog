---
title: "Compressor de voz: configuração para podcast e narração"
description: "Compressor de voz: comece com razão 3:1, ataque de 15 ms, release de 80 ms e 3–6 dB de redução. Veja como ajustar threshold, make-up gain e evitar som esmagado."
pubDate: 2026-10-19
tags: ["mixagem", "podcasting", "narracao"]
image:
  src: "../../assets/posts/mixagem.svg"
  alt: "Barras estilizadas de um equalizador"
---

Para um compressor de voz, comece com razão de 3:1, ataque de 10–20 ms, release de 60–100 ms e threshold ajustado para o medidor marcar 3 a 6 dB de redução nos trechos mais altos. Depois compense o nível perdido com make-up gain. Esse ponto de partida serve para podcast e narração; o ajuste fino depende do microfone, da sala e do jeito de falar.

## Para que serve um compressor de voz?

Um compressor de voz reduz a diferença entre as sílabas mais fracas e as mais fortes da fala. Sem ele, o ouvinte sobe o volume para entender um sussurro e leva um susto na risada seguinte. Com ele, a voz fica mais constante e permanece compreensível em ambientes ruidosos, como o carro ou o transporte público.

A compressão não conserta gravação ruim. Ela amplifica o que já existe, inclusive ruído de fundo e eco, então trate a sala e faça o ganho de entrada certo antes de comprimir.

## Qual configuração de compressor usar na voz?

Use este ponto de partida e ajuste de ouvido:

1. **Threshold:** abaixe até o medidor de redução de ganho (gain reduction) mostrar 3–6 dB nas palavras mais fortes. Em voz muito dinâmica, aceite até 8 dB.
2. **Razão (ratio):** 3:1 para fala natural. Subir para 4:1 ou 6:1 só se a dinâmica for muito irregular.
3. **Ataque:** 10–20 ms. Ataque muito rápido (abaixo de 5 ms) achata as consoantes e tira a presença; muito lento deixa o início das palavras passar sem controle.
4. **Release:** 60–100 ms. Release curto demais gera "bombeamento" audível; longo demais não se recupera a tempo da próxima palavra.
5. **Knee:** soft knee (suave) soa mais natural em voz.
6. **Make-up gain:** some de volta aproximadamente o que o compressor reduziu, comparando com o compressor ligado e desligado no mesmo volume percebido.

## Qual a diferença entre ataque e release na voz?

O ataque define em quantos milissegundos o compressor começa a atuar depois que o som passa do threshold; o release define em quantos milissegundos ele solta a redução quando o som volta abaixo dele. Ataque controla o início da sílaba, release controla a cauda.

Na prática, ataque mais lento (20–30 ms) preserva o impacto das consoantes e deixa a voz mais viva; ataque rápido (1–5 ms) controla picos, mas pode soar abafado. Para detalhes de como esses dois parâmetros interagem, veja o post sobre [ataque e release no compressor](/posts/ataque-release-compressor/).

| Objetivo | Razão | Ataque | Release | Redução |
|---|---|---|---|---|
| Podcast natural | 2:1–3:1 | 15–20 ms | 80–100 ms | 3–5 dB |
| Narração de audiolivro | 2:1–3:1 | 10–20 ms | 60–100 ms | 2–4 dB |
| Locução radiofônica | 4:1–6:1 | 5–10 ms | 50–80 ms | 6–10 dB |
| Voz muito irregular | 4:1 | 10 ms | 60 ms | 6–8 dB |

Os valores são pontos de partida, não regras: cada voz e cada microfone pedem ajuste de ouvido.

## Um compressor ou dois em série?

Dois compressores suaves em série funcionam melhor do que um compressor forte. Um primeiro com 2:1 e 2–3 dB de redução doma o volume geral; um segundo, mais rápido, com 3 dB de redução, controla os picos. Cada um trabalha pouco, e o resultado soa mais transparente do que um único compressor fazendo 8 dB de redução.

Uma alternativa é a compressão paralela, em que o sinal comprimido é misturado ao original; ela está descrita em [compressão paralela](/posts/compressao-paralela-new-york/).

## Como saber se comprimi demais?

Comprimiu demais quando a respiração fica mais alta que as palavras, o ruído de fundo sobe entre as frases ou a voz perde variação de intensidade e fica "chapada". Faça o teste do liga/desliga com volume igualado: se a versão comprimida não soa melhor em casos reais, reduza a razão ou suba o threshold.

Confira também o resultado no loudness final: compressão consistente facilita atingir o alvo de -16 LUFS para estéreo ou -19 LUFS para mono sem estourar o true peak de -1 dBTP.

## Perguntas frequentes

**Compressor de voz substitui o limitador?**
Não. O compressor controla a dinâmica geral da fala; o limitador fica no fim da cadeia e impede que picos passem de um teto, geralmente -1 dBTP.

**Comprimir antes ou depois do EQ?**
Corte frequências indesejadas (EQ subtrativo) antes do compressor, para que graves e ruídos não acionem a compressão. Ajustes de brilho e presença ficam depois.

**Preciso comprimir se já gravei com bom ganho?**
Provavelmente sim, em doses pequenas. Mesmo com ganho correto, a fala natural varia 15–20 dB entre sussurros e ênfases, e 2–4 dB de compressão deixam o episódio mais confortável de ouvir.

Voz comprimida, episódio fechado — falta alguém ouvir. Na [Speake](https://speake.com.br) você publica seus episódios numa estação própria e sua audiência assina para ouvir.
