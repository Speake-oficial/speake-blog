---
title: "Especificações técnicas de entrega de áudio-livro: por que seu arquivo é reprovado"
description: "RMS, pico, ruído de fundo e formato de arquivo: as exigências técnicas de plataformas como ACX e Spotify e por que um áudio-livro bem narrado pode ser rejeitado mesmo assim."
pubDate: 2026-06-23
tags: ["audio-livros", "masterizacao"]
image:
  src: "../../assets/posts/masterizacao.svg"
  alt: "Barras estilizadas de um equalizador"
---

Um capítulo bem narrado, bem editado, sem ruído perceptível ao ouvido — e mesmo assim reprovado na revisão da plataforma. Isso acontece com frequência em entregas de áudio-livro, e quase sempre pelo mesmo motivo: as exigências técnicas de distribuidoras como ACX, Audible e Spotify não são sugestões, são limites numéricos que o arquivo precisa cumprir, independente de como ele soa no seu monitor.

## As especificações que realmente são checadas

A ACX, por exemplo, exige RMS (volume médio) entre -23dB e -18dB, pico máximo de -3dB e piso de ruído de fundo de no máximo -60dB RMS, medido nos trechos de silêncio entre falas. O arquivo precisa ser mono — não estéreo —, em WAV 44.1kHz/16-bit para a entrega final, com headroom suficiente para a conversão posterior em MP3 a 192kbps CBR. Spotify e outras plataformas de streaming de áudio-livro tendem a normalizar em torno de -16 a -19 LUFS integrado, valor parecido com o padrão de podcast, mas a régua de aceitação na entrada costuma ser mais rígida com pico e ruído de fundo do que com loudness.

Nenhum desses números aparece "no ouvido". RMS médio, pico real e piso de ruído são medições objetivas — só aparecem em um medidor.

## Por que narração soa bem e ainda falha na medição

O problema mais comum não é a voz, é o ambiente. Um quarto tratado de forma amadora pode parecer silencioso à percepção humana e ainda assim entregar um piso de ruído de -52dB ou -48dB — acima do limite. O ouvido se acostuma ao ruído de fundo constante (ventilador, ar-condicionado, ruído elétrico de interface) depois de poucos minutos de gravação; o medidor, não.

O segundo erro mais comum é inconsistência de RMS entre capítulos. Se você narrou em sessões diferentes, em dias diferentes, com ajuste de gain staging diferente a cada sessão, é normal que um capítulo médio fique em -20dB e outro em -16dB. Plataforma nenhuma vai reprovar isso visualmente — vai reprovar porque cada arquivo é avaliado contra os mesmos limites fixos, e a inconsistência entre capítulos também pega mal na audição comparativa que o revisor humano faz por amostragem.

## Como medir antes de enviar

Três medições resolvem 90% das reprovações:

- **RMS integrado do capítulo inteiro** — não de um trecho isolado. A maioria dos DAWs (Reaper, Audition, Reason) tem um medidor de loudness embutido; se não tiver, o plugin gratuito Youlean Loudness Meter resolve.
- **Pico real (true peak)**, não pico de amostra — picos entre amostras de áudio podem passar despercebidos em um medidor simples e ainda gerar distorção na conversão para MP3.
- **Piso de ruído nos silêncios** — selecione um trecho de 2-3 segundos sem fala e meça o RMS isolado dali. Esse número, sozinho, decide se o ambiente de gravação foi bom o suficiente.

## Quando vale terceirizar a etapa de QC técnico

Para quem narra ocasionalmente, calibrar isso manualmente capítulo por capítulo é viável. Para projetos com volume — uma coleção de audiolivros, um catálogo inteiro — vale a pena ter uma etapa de controle de qualidade técnico separada da masterização criativa, justamente para pegar inconsistências entre capítulos antes do envio. A Speake presta esse tipo de serviço de masterização e adequação de especificações para entrega em plataformas de áudio-livro, revisando RMS, pico e ruído de fundo capítulo a capítulo antes da submissão.

Quer evitar reprovação técnica no seu próximo áudio-livro? [Conheça a Speake](https://speake.com.br).
