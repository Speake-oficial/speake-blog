---
title: "Podcast em vídeo por assinatura: como cobrar"
description: "Podcast em vídeo por assinatura já roda no YouTube e no Patreon, e chega ao Apple Podcasts. Onde cobrar, o que trancar no paywall e como exportar o arquivo."
pubDate: 2026-10-12
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Podcast em vídeo por assinatura é o episódio filmado que só o assinante pagante consegue ver, e hoje se vende em três lugares: membros do YouTube, plataformas de membership como Patreon e, desde o anúncio de setembro de 2026, as assinaturas do Apple Podcasts. O custo de entrar nesse formato não é a câmera: é o arquivo. Uma hora em 1080p a 10 Mbps pesa cerca de 4,5 GB, contra 55 MB do mesmo episódio em MP3 128 kbps — quase 80 vezes mais dado para hospedar por assinante.

## Como funciona um podcast em vídeo por assinatura?

Funciona como o [podcast por assinatura em áudio](/posts/podcast-por-assinatura-como-funciona/), com uma diferença: vídeo não trafega por feed RSS comum. Em vez de um MP3 num feed privado, a plataforma entrega o episódio em streaming adaptativo (HLS, que fatia o vídeo em pedaços de 2 a 10 segundos e troca a qualidade conforme a conexão) dentro de um app ou página com login — e quem hospeda o vídeo controla a entrega.

A Apple anunciou o recurso dizendo que está trabalhando com provedores de hospedagem, sem publicar data de lançamento nem requisitos técnicos. O programa de assinaturas cobra US$ 19,99 por ano do criador e repassa 70% de cada cobrança no primeiro ano de cada assinante, subindo para 85% depois de 12 meses pagos.

## Onde dá para cobrar por podcast em vídeo hoje?

Em outubro de 2026, as opções de pé são membros do YouTube e plataformas de membership como Patreon e Apoia.se. O Apple Podcasts foi anunciado, mas ainda não liberado para vídeo pago.

| Onde | Taxa da plataforma | Exigência de entrada | Hospedagem do vídeo |
|---|---|---|---|
| Membros do YouTube | 30% da mensalidade | Canal no YPP (500 inscritos, 3.000 horas em 12 meses) | Inclusa, ilimitada |
| Patreon | 10% em páginas novas + processamento | Nenhuma | Inclusa, com limite por arquivo |
| Apple Podcasts (anunciado) | 15% a 30%, conforme o tempo de assinatura | US$ 19,99/ano + provedor compatível | Pelo provedor |
| Área própria com login | Só o gateway (3% a 7%) | Nenhuma | Por sua conta (CDN) |

O cálculo muda de linha para linha. No YouTube você paga 30% e não paga banda; numa área própria fica com quase toda a mensalidade e assume a entrega, que custa de US$ 0,05 a US$ 0,09 por GB nas CDNs grandes. Cem assinantes vendo um episódio de 4,5 GB por semana consomem 1,8 TB no mês: US$ 90 a US$ 160 só de banda.

## O que vale colocar atrás do paywall em vídeo?

Vale o que só existe em vídeo, nunca o episódio que você já publicou de graça em áudio: assinante cancela quando percebe que pagou por formato, e não por conteúdo. As quatro frentes que a Apple citou no anúncio — episódio exclusivo, versão sem anúncio, acesso antecipado e bônus — funcionam em qualquer plataforma, em ordem de esforço:

1. **Bônus curto**: 10 a 15 minutos que ficaram fora do corte, exportados do material já gravado. Custo marginal zero.
2. **Acesso antecipado**: o mesmo episódio liberado 48 ou 72 horas antes do público. Não exige produção nova, só calendário.
3. **Versão sem anúncio**: um render a mais, com as inserções fora da timeline.
4. **Episódio exclusivo em vídeo**: o que não vai ao feed público. Retém mais e é o único que exige gravação dedicada.

Comece pelos itens 1 a 3. Episódio exclusivo semanal é o compromisso mais caro que um criador solo assume, e a causa mais comum de paywall abandonado em três meses.

## Como exportar o episódio em vídeo para assinante?

Exporte em 1080p a 30 quadros, H.264 High profile, 8 a 12 Mbps de vídeo, com áudio AAC-LC estéreo a 256 kbps em 48 kHz. Conversa filmada tem pouco movimento e aguenta bitrate baixo melhor que esporte ou show.

Checklist de exportação:

- **Resolução**: 1080p resolve. 4K triplica o arquivo (35 a 45 Mbps) e muda pouco num plano fixo de duas pessoas sentadas.
- **Loudness**: -14 LUFS integrado para YouTube, -16 LUFS se o arquivo também for para Apple Podcasts, true peak em -1 dBTP — os valores estão em [loudness LUFS para podcast](/posts/loudness-lufs-podcast-streaming/).
- **Áudio**: use a mixagem final, não o som da câmera. A cadeia de gravação está em [áudio para podcast em vídeo](/posts/audio-para-podcast-em-video/).
- **Legenda**: suba SRT ou VTT separado em vez de queimar na imagem; reaproveita a [transcrição do episódio](/posts/transcricao-de-podcast-como-fazer/).
- **Arquivo-mestre**: guarde um ProRes ou DNxHR local. Reexportar de um H.264 comprimido degrada a imagem a cada volta.

## Compensa migrar o podcast todo para vídeo pago?

Não de uma vez. O Brasil é o segundo maior mercado de podcast em vídeo do mundo no Spotify, mas a conversão de ouvinte gratuito em assinante pagante segue entre 1% e 3% da audiência ativa e não sobe só porque o episódio tem imagem. Mantenha o feed de áudio público como porta de entrada, use [clipes verticais](/posts/audio-para-cortes-de-podcast/) para captar público e reserve o vídeo ao nível pago.

## Perguntas frequentes

**Dá para cobrar assinatura de vídeo sem ter canal grande no YouTube?**
Sim. Membros do YouTube exigem o canal dentro do programa de monetização, mas Patreon, Apoia.se e áreas próprias com login não têm exigência de tamanho — não há meta de inscritos a bater antes de cobrar.

**O assinante pode baixar o vídeo?**
Em geral não. Plataformas de assinatura entregam vídeo por streaming protegido para evitar redistribuição. Se o download importa para a sua audiência, o áudio continua sendo o formato mais fácil de liberar.

Vídeo exclusivo só se paga quando existe um lugar onde a audiência assina. Na [Speake](https://speake.com.br) você publica episódios numa estação própria e cobra assinatura mensal de quem quer ouvir — útil para descobrir se a sua audiência paga pelo que você já grava antes de assumir câmera, render e banda.
