---
title: "Como equilibrar o volume das vozes no podcast"
description: "Para equilibrar o volume das vozes no podcast, ajuste cada faixa com clip gain, comprima suave e nivele tudo em -16 LUFS. Passo a passo com números."
pubDate: 2026-10-10
tags: ["mixagem", "podcasting"]
image:
  src: "../../assets/posts/mixagem.svg"
  alt: "Ilustração estilizada de faders de uma mesa de mixagem"
---

Para equilibrar o volume das vozes no podcast, nivele cada pessoa separadamente antes de comprimir: use clip gain para aproximar as vozes dentro de 2 a 3 dB, aplique uma compressão suave de 2:1 a 3:1 em cada faixa e só então ajuste o master para cerca de -16 LUFS integrado. Tentar resolver tudo com um único compressor no master faz a voz mais baixa sumir e a mais alta distorcer.

## Por que as vozes ficam com volumes diferentes?

As vozes ficam desiguais porque cada pessoa fala com uma intensidade, uma distância do microfone e um ganho de entrada diferentes. Duas pessoas no mesmo cômodo, com o mesmo modelo de microfone, ainda podem diferir em 6 a 10 dB. Quem fala a 5 cm do microfone soa muito mais alto do que quem se afasta para 20 cm, porque o nível cai de forma acentuada com a distância.

A causa define a solução: se o problema é de captação, resolva na edição faixa a faixa; se é de dinâmica da fala, a compressão resolve.

## Como nivelar duas vozes passo a passo?

O nivelamento funciona melhor em ordem fixa, trabalhando uma faixa por vez. Siga esta sequência:

1. **Grave cada voz em faixa separada**, em 48 kHz/24 bit, com picos em torno de -12 dBFS.
2. **Corte ruído e respiração alta** de cada faixa (passa-alta em 80 Hz é o ponto de partida).
3. **Aplique clip gain** nos trechos mais baixos ou mais altos até as duas vozes terem o mesmo nível médio, com diferença máxima de 2 a 3 dB.
4. **Comprima cada faixa** com razão 2:1 a 3:1, ataque de 10 a 20 ms e release de 80 a 150 ms, buscando 3 a 5 dB de redução nos picos.
5. **Some as faixas** e confira o nível de cada voz no medidor de LUFS de curto prazo.
6. **Normalize o master** em -16 LUFS integrado, com true peak abaixo de -1 dBTP.

## Clip gain ou compressor: qual usar primeiro?

Use clip gain primeiro, porque ele corrige diferenças grandes e pontuais sem alterar o timbre. O clip gain muda o volume de um trecho antes de qualquer plugin, então o compressor recebe um sinal já parecido e trabalha menos. Se você inverter a ordem, o compressor reage com força excessiva à voz alta, o que deixa a fala bombeada e realça o ruído de fundo nas pausas.

## Qual configuração de compressor funciona para voz falada?

Para voz falada, um compressor com razão baixa e ataque médio funciona bem. A tabela abaixo reúne pontos de partida; ajuste ouvindo.

| Parâmetro | Voz firme e constante | Voz com muita variação |
|---|---|---|
| Razão | 2:1 | 3:1 a 4:1 |
| Ataque | 15 a 20 ms | 5 a 10 ms |
| Release | 100 a 150 ms | 60 a 100 ms |
| Redução nos picos | 2 a 3 dB | 4 a 6 dB |

Se a redução passar de 6 dB com frequência, o problema está no ganho de captação, não no plugin. Volte ao clip gain.

## Como conferir se o resultado ficou equilibrado?

Meça o loudness de curto prazo de cada voz isolada. Se uma delas ficar mais de 3 LU acima ou abaixo da outra, o ouvinte vai perceber e mexer no volume do aparelho. Ouça também no celular, em volume baixo: se você acompanha as duas vozes sem esforço, o equilíbrio está bom. Plugins de nivelamento automático, como o Auto-Leveler do Auphonic ou o Waves Vocal Rider, ajudam em episódios longos, mas não substituem a revisão manual de trechos críticos.

## Perguntas frequentes

**Normalizar cada faixa resolve o problema?** Em parte. A normalização de pico alinha o ponto mais alto, mas não a percepção de volume. Duas faixas com o mesmo pico podem ter loudness bem diferente, então prefira medir em LUFS.

**Qual o volume ideal de um podcast?** Entre -16 e -14 LUFS integrado é a faixa mais usada por plataformas de áudio falado. O valor exato depende do destino, e o ideal é conferir a recomendação de cada serviço.

**Preciso de compressor se já usei clip gain?** Normalmente sim, mas bem leve. O clip gain corrige trechos, e o compressor controla a variação natural dentro de cada frase.

Com as vozes equilibradas, o episódio está pronto para ir ao ar. Na [Speake](https://speake.com.br) você publica numa estação própria e a assinatura mensal da sua audiência remunera o trabalho.
