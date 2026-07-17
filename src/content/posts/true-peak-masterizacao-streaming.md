---
title: "True peak na masterização: por que -1 dBTP é o padrão dos streamings e como acertar"
description: "O que é true peak, por que difere do peak convencional, e como garantir que sua master passe nos streamings sem distorção inesperada após a conversão."
pubDate: 2026-07-17
tags: ["masterizacao", "producao-musical"]
image:
  src: "../../assets/posts/masterizacao.svg"
  alt: "Ilustração de medidor de masterização representando níveis de áudio"
---

Quando você limita sua master a 0 dBFS e entrega para um streaming, parece que está seguro. Mas muitas masters chegam com distorção audível nos serviços — um clipping sutil que não existia quando o arquivo saiu do seu DAW. A causa quase sempre é o true peak, e entender a diferença entre ele e o peak convencional resolve o problema de vez.

## Peak e true peak são medições diferentes

O peak convencional (sample peak) mede o valor máximo das amostras discretas do arquivo digital. O problema é que, quando o arquivo é convertido para outro formato — MP3, AAC, OGG, ou qualquer codec lossy que os streamings usam —, o processo de conversão pode gerar valores entre as amostras (inter-sample peaks) que ultrapassam 0 dBFS.

Isso acontece porque a conversão reconstrói o sinal analógico contínuo a partir das amostras digitais. Esse sinal reconstruído pode ter picos mais altos do que o maior valor de amostra existente. Uma master que marca -0,1 dBFS de peak convencional pode ter inter-sample peaks de +1 dB ou mais após a conversão — e esse excedente vira clipping real no sinal que chega ao ouvinte.

## Por que -1 dBTP é o número que importa

True peak (TP) mede esses inter-sample peaks: o que o conversor ou codec vai realmente reconstruir. A unidade é dBTP (decibels true peak), separada do dBFS convencional.

As plataformas têm limites de loudness em LUFS, mas quase todas também definem um teto de true peak:

- **Spotify, Apple Music, YouTube Music:** -1 dBTP recomendado
- **Deezer:** -1 dBTP
- **Tidal:** -1 dBTP
- **Amazon Music:** -2 dBTP

O motivo é direto: a master entregue vai ser convertida. Se ela já chega em 0 dBFS sample peak, os inter-sample peaks após conversão provavelmente vão clipar. O limiar de -1 dBTP cria a margem que faz a conversão ser transparente.

## Como medir true peak no DAW

A medição de true peak exige um medidor com oversampling — ele simula a reconstrução do sinal para calcular os inter-sample peaks antes de qualquer conversão. A maioria dos DAWs modernos tem isso embutido ou acessível:

- **Logic Pro:** o limiter nativo tem medição de true peak integrada
- **Pro Tools:** o Avid Pro Limiter mostra true peak separadamente do sample peak
- **Ableton Live, Reaper, Studio One:** precisam de medidor externo ou limiter com true peak — ADPTR Metric AB, o iZotope Insight ou o Youlean Loudness Meter (gratuito) fazem isso

O que não funciona: checar o peak convencional no medidor de canal do DAW e assumir que está seguro. Esse medidor não vê inter-sample peaks.

## O limitador de true peak é diferente do convencional

Se você está usando um limitador convencional no final da chain de masterização, ele está limitando sample peaks — não true peaks. Limitadores com modo true peak fazem oversampling interno para garantir que os inter-sample peaks também fiquem dentro do teto definido:

- **FabFilter Pro-L2:** modo "True Peak" explícito nas configurações
- **iZotope Ozone Maximizer:** ativa true peak limiting no painel de configurações
- **Waves L2/L3-LL:** versões "LL" (low latency) com true peak

A diferença prática: um limitador convencional com ceiling em -0,3 dBFS pode entregar uma master com true peak de +0,5 dBTP. O mesmo material processado por um limitador de true peak no mesmo ceiling fica em -0,3 dBTP — o que você vê é o que o streaming vai receber.

## A entrega certa para streaming

Para qualquer master destinada a distribuição digital, o padrão de entrega é:

- **Loudness integrado:** entre -14 e -16 LUFS para a maioria das plataformas (varia por gênero e serviço)
- **True peak:** -1 dBTP no máximo

Se a master excede o alvo de loudness, os streamings vão normalizar o volume para baixo — não é proibido entregar mais alto, mas o serviço decide como vai soar. Entregar no nível certo significa que a dinâmica que você masterizou é a dinâmica que o ouvinte escuta, sem correção automática no meio do caminho.

Na Speake, toda masterização para streaming passa por verificação de true peak e loudness integrado nas especificações de cada plataforma — porque uma master que clipa após conversão de codec não é uma master finalizada, independentemente de como ela soa no DAW antes da entrega.

Quer uma masterização pronta para todas as plataformas? [Conheça a Speake](https://speake.com.br).
