---
title: "Loudness (LUFS): o número que decide se seu podcast toca baixo demais"
description: "Por que masterizar olhando só o pico de dB não basta. Como funciona a normalização de loudness em LUFS e quais valores usar para podcast e streaming."
pubDate: 2026-06-20
tags: ["masterizacao", "podcasting"]
image:
  src: "../../assets/posts/masterizacao.svg"
  alt: "Barras estilizadas de um equalizador"
---

Você entrega um episódio que soa forte e cheio no seu monitor. No Spotify, ele toca visivelmente mais baixo que o podcast anterior na fila do ouvinte. O problema não é a sua mixagem — é que você masterizou olhando o medidor de pico (dB) quando devia estar olhando o medidor de loudness (LUFS).

## Pico não é volume percebido

Um medidor de pico (dBFS) só diz até onde a onda chegou na amostra mais alta. Dois áudios podem ter o mesmo pico de -1dB e um soar duas vezes mais "alto" que o outro, porque o que o ouvido percebe como volume é a energia média ao longo do tempo, não o instante de pico. É isso que o LUFS (Loudness Units relative to Full Scale) mede: loudness integrado, ponderado para se aproximar da percepção humana.

A confusão entre os dois é a causa mais comum de episódio que soa "fraco" numa plataforma e "estourado" em outra, mesmo sem clipping.

## Por que isso importa mais desde a normalização automática

Spotify, YouTube, Apple Podcasts e Audible normalizam loudness automaticamente: se seu áudio chega mais alto que o alvo da plataforma, eles abaixam o volume na reprodução. Se chega mais baixo, alguns elevam (outros não, e seu episódio simplesmente toca baixo). Resultado prático: comprimir e limitar agressivamente para "ficar mais alto" não funciona mais — a plataforma vai turn-down o seu áudio até o alvo dela, e tudo que você ganhou foi perder dinâmica e, em casos extremos, distorção por excesso de limitação.

A masterização correta hoje é: acertar o LUFS alvo, não maximizar loudness.

## Os números que valem na prática

- **Spotify e YouTube**: -14 LUFS integrado é o alvo de referência mais citado.
- **Apple Podcasts**: recomenda -16 LUFS integrado, true peak máximo de -1dBTP.
- **Audible / audiolivros**: especificação mais estrita, geralmente -18 a -23 LUFS RMS dependendo do padrão usado, com tolerância de pico bem menor — vale checar o guia de especificação técnica do distribuidor antes de entregar.
- **Broadcast/TV (referência histórica, ainda usada em vinhetas e spots)**: -23 LUFS (EBU R128) ou -24 LKFS (ATSC A/85, padrão americano).

Para podcast em fala, -16 LUFS integrado com true peak em -1dBTP é um ponto de partida seguro que funciona bem na maioria das plataformas sem precisar de ajuste por canal.

## Como medir sem comprar plugin caro

Você não precisa de um analisador profissional para isso. O Youlean Loudness Meter (gratuito) faz medição de LUFS integrado, short-term e true peak em tempo real, e roda como plugin em qualquer DAW. O fluxo prático:

1. Mixe normalmente, sem se preocupar com loudness ainda.
2. Insira o medidor no master bus e rode o episódio inteiro (ou pelo menos os trechos mais densos) para pegar o LUFS integrado real.
3. Ajuste o ganho do master (não comprima mais — só ganhe ou atenue) até bater o alvo da plataforma de destino.
4. Confirme que o true peak não passa de -1dBTP com um limitador suave só de segurança, não como ferramenta de loudness.

## Quando vale terceirizar

Se você distribui o mesmo conteúdo em múltiplas plataformas com especificações diferentes — podcast no Spotify, versão em áudio-livro na Audible, trecho em vídeo no YouTube — manter masters separados e calibrados certo para cada uma vira trabalho de rotina que rouba tempo de produção de conteúdo. A Speake faz esse processo de masterização e adequação de loudness por plataforma como parte do serviço de pós-produção de áudio, evitando que o episódio saia errado em algum canal.

Quer ajuda profissional com isso? [Conheça a Speake](https://speake.com.br).
