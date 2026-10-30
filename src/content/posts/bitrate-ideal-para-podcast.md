---
title: "Bitrate ideal para podcast: 128 kbps basta?"
description: "O bitrate ideal para podcast de voz é 128 kbps em mono (MP3 ou AAC), cerca de 56 MB por hora. Veja quando subir ou baixar, e a conta do tamanho do arquivo."
pubDate: 2026-10-30
tags: ["masterizacao", "podcasting"]
image:
  src: "../../assets/posts/masterizacao.svg"
  alt: "Ondas sonoras estilizadas representando a exportação de um arquivo de áudio"
---

O bitrate ideal para podcast falado é **128 kbps em mono**, em MP3 ou AAC: soa transparente para voz e gera cerca de 56 MB por hora de episódio. Para episódios muito longos ou ouvintes com internet limitada, 96 kbps mono ainda é aceitável. Para podcast com música ou trilha em estéreo, suba para 192 kbps. O mais importante é exportar a partir de um master em WAV e codificar uma única vez.

## Qual é o bitrate ideal para podcast?

O bitrate ideal para podcast depende de dois fatores: se o áudio é mono ou estéreo e se há música no episódio. A regra prática:

| Tipo de episódio | Formato | Bitrate | Tamanho por hora |
|---|---|---|---|
| Só voz (solo, entrevista) | MP3 ou AAC, mono | 96–128 kbps | 43–56 MB |
| Voz com vinhetas e trilha leve | MP3, estéreo | 128–160 kbps | 56–72 MB |
| Música relevante, narrativo | MP3 ou AAC, estéreo | 192 kbps | 86 MB |

Abaixo de 64 kbps mono a voz começa a ganhar chiado nas sibilantes ("s" e "x") e perde a sensação de presença. Acima de 192 kbps o ganho audível em voz é praticamente nulo e o arquivo só pesa mais.

## 128 kbps é suficiente para um podcast?

Sim: 128 kbps mono entrega 128 kbps inteiros para um único canal de voz, o que é mais do que a fala precisa. O problema aparece quando 128 kbps é aplicado em **estéreo**, porque a taxa se divide entre dois canais e cada um recebe cerca de 64 kbps. Se a gravação é uma voz só ou duas vozes centralizadas, converta para mono antes de codificar e use a taxa cheia.

## Como calcular o tamanho do arquivo pelo bitrate?

O tamanho do arquivo é o bitrate multiplicado pela duração, dividido por 8. A conta, em passos:

1. Pegue o bitrate em kbps (exemplo: 128).
2. Multiplique pela duração em segundos (1 hora = 3.600 s): 128 × 3.600 = 460.800 kb.
3. Divida por 8 para obter kilobytes: 57.600 KB.
4. Divida por 1.000 para megabytes: cerca de **57 MB** (56 MB em unidades binárias).

Um episódio de 45 minutos em 128 kbps mono fica perto de 43 MB. Em 320 kbps estéreo, o mesmo episódio passaria de 100 MB, sem diferença audível para voz.

## MP3 ou AAC: qual codec usar no podcast?

MP3 é o codec mais compatível; AAC entrega qualidade ligeiramente melhor na mesma taxa. Para podcast, MP3 a 128 kbps é a escolha segura, aceita por praticamente qualquer app, hospedagem e player. AAC (.m4a) permite baixar para 96 kbps com resultado equivalente, mas vale conferir se a hospedagem e a plataforma de destino aceitam o formato antes de adotá-lo.

## Qual taxa de amostragem e loudness usar na exportação?

Mantenha a taxa de amostragem em **44,1 kHz** (ou 48 kHz, se o projeto veio de vídeo) e exporte o master com loudness entre **-19 e -16 LUFS** integrado, true peak em -1 dBTP. O bitrate não corrige loudness, e codificação com perda pode acrescentar até 0,5 dB de pico; por isso o -1 dBTP deixa margem. Normalize antes de codificar, nunca depois.

## Como exportar o episódio no bitrate certo?

1. Finalize a edição e a masterização em WAV 24 bits.
2. Converta o projeto para mono se a gravação for voz centralizada.
3. Exporte em MP3 com **CBR 128 kbps** (taxa constante é mais previsível para players e para o cálculo de duração).
4. Preencha as tags ID3 (título, número do episódio, capa).
5. Ouça os primeiros e os últimos minutos do arquivo final em fone e no celular.

Guarde sempre o WAV original: recodificar um MP3 para outro MP3 acumula perda, e o arquivo de origem permite gerar versões em outras taxas depois.

## Perguntas frequentes

**VBR ou CBR no podcast?** CBR é a opção mais segura: a duração exibida pelo player fica correta e a barra de progresso não se desalinha. VBR economiza espaço, mas alguns apps antigos calculam mal a duração do episódio.

**Posso publicar o podcast em WAV?** Pode, mas um episódio de 1 hora em WAV 24 bits/44,1 kHz mono tem perto de 380 MB, o que consome o plano de dados do ouvinte. Use WAV só como arquivo de origem e distribua em MP3 ou AAC.

**Bitrate maior melhora a qualidade da voz?** Só até um ponto. Em voz, a diferença entre 128 e 320 kbps é imperceptível para a maioria dos ouvintes; o que melhora de fato o som é microfone, sala e ganho bem ajustado.

Arquivo exportado e conferido, falta o destino do episódio. Na [Speake](https://speake.com.br) você publica numa estação própria e sua audiência assina para ouvir.
