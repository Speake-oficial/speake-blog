---
title: "Trailer de podcast: como fazer e quanto deve durar"
description: "Trailer de podcast dura de 30 a 60 segundos, entra no feed como episódio marcado trailer e segue quatro blocos: gancho, promessa, trecho real e chamada."
pubDate: 2026-09-15
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Ilustração estilizada de microfone e ondas sonoras de podcast"
---

Um trailer de podcast é um episódio curto e independente que apresenta o programa para quem nunca ouviu: **30 a 60 segundos**, no máximo dois minutos, publicado no próprio feed e marcado como `trailer` no RSS. A estrutura que funciona tem quatro blocos — gancho, promessa, trecho real de episódio e chamada para seguir o programa — e cabe em cerca de 140 palavras de locução. O trailer não é a vinheta de abertura nem um corte de episódio: é a peça que o ouvinte novo escuta antes de decidir se aperta "seguir".

## Quanto tempo deve durar um trailer de podcast?

A faixa que converte é de 30 a 60 segundos. A Apple Podcasts recomenda manter trailers em dois minutos ou menos, e na prática tudo acima de 90 segundos perde a função: quem está decidindo se vale a pena seguir o programa não investe dois minutos nessa decisão.

Como a locução em português corre entre 130 e 160 palavras por minuto, a conta de roteiro é direta:

| Duração do trailer | Palavras de locução | Quando usar |
|---|---|---|
| 30 s | ~70 | Programa de formato simples, tema autoexplicativo |
| 45 s | ~105 | Padrão para a maioria dos programas falados |
| 60 s | ~140 | Quando entra trecho real de episódio |
| 90 s | ~210 | Série roteirizada ou true crime, com cenas |

## O que entra no roteiro de um trailer de podcast?

Quatro blocos, nesta ordem. O trailer começa pelo gancho e nunca pela apresentação institucional — "olá, sejam bem-vindos ao nosso canal" gasta os cinco segundos que decidem a escuta.

| Tempo | Bloco | O que dizer |
|---|---|---|
| 0–5 s | Gancho | A frase mais forte do programa: uma pergunta, um dado, uma cena |
| 5–20 s | Promessa | Nome do programa, tema e o que o ouvinte leva em cada episódio |
| 20–40 s | Prova | Um trecho real de 8 a 12 segundos, com a voz de um episódio |
| 40–55 s | Chamada | Frequência de publicação e o pedido explícito: siga o programa |

A chamada precisa ser específica. "Episódios novos toda terça" funciona; "acompanhe nas principais plataformas" não diz nada e não gera ação.

## Trailer de podcast é a mesma coisa que vinheta?

Não. A vinheta é o elemento recorrente que abre e fecha cada episódio, feito para quem já é ouvinte — por isso dura 20 a 25 segundos e não repete o pitch do programa. O detalhamento de intro, bumpers e outro está no guia de [vinheta de podcast](/posts/vinheta-podcast-como-criar/).

O trailer é o oposto: existe uma vez, é dirigido a quem não conhece o programa, fica fixo no topo do feed e só é regravado quando a temporada muda. Trailer e vinheta podem dividir a mesma trilha musical — isso é bom para identidade sonora —, mas não compartilham roteiro.

## Como marcar o trailer no feed RSS do podcast?

Com a tag `itunes:episodeType`, que aceita três valores: `full` (padrão), `trailer` e `bonus`. O item do trailer no RSS fica assim:

```xml
<itunes:episodeType>trailer</itunes:episodeType>
```

Episódios marcados como `trailer` aparecem no início da lista de episódios e não recebem número de episódio — é o que impede o trailer de bagunçar a numeração da temporada. Qualquer hospedagem relevante (Spotify for Creators, Acast, Podbean, RSS.com, Simplecast) expõe isso como um seletor de tipo de episódio na hora de publicar; você raramente edita o XML à mão. Não marcar nada deixa o trailer como episódio completo, que é o erro que faz alguém começar o programa pelo anúncio dele.

## Como gravar e mixar o trailer, passo a passo

1. **Escreva o roteiro fechado** em 140 palavras e cronometre lendo em voz alta antes de gravar. Trailer é a única peça do programa em que vale decorar.
2. **Grave a locução limpa** a 48 kHz/24 bit, com a boca a 10–15 cm do microfone e picos entre −12 e −6 dBFS, sem música tocando no fone.
3. **Escolha os trechos de prova** com 8 a 12 segundos cada, no máximo dois. Trecho precisa funcionar sem contexto — se exige explicação, não serve.
4. **Coloque a trilha** 10 a 12 dB abaixo da locução, com [ducking por sidechain](/posts/sidechain-ducking-musica-podcast/) nas entradas de voz, e deixe a música respirar sozinha nos 2 segundos finais.
5. **Normalize em −16 LUFS integrado** e true peak de −1 dBTP, o mesmo alvo dos episódios ([loudness para podcast](/posts/loudness-lufs-podcast-streaming/)). Trailer mais alto que o episódio soa amador no autoplay.
6. **Exporte em MP3 de 128 a 192 kbps**, com título curto ("Trailer — nome do programa") e descrição de duas linhas com a data de estreia.

## Quando publicar o trailer e o que fazer com ele depois?

Entre duas e quatro semanas antes do primeiro episódio. O intervalo dá tempo de os diretórios aprovarem o feed e de os primeiros seguidores chegarem antes da estreia — episódio de lançamento com audiência do dia zero rende mais que episódio descoberto um mês depois.

Depois da estreia, o trailer continua trabalhando: é o áudio fixo no topo do feed, a pré-rolagem dos cortes para redes e o link que você manda para um convidado antes de gravar. Regrave a cada temporada nova ou quando o formato mudar.

## Perguntas frequentes

**Meu podcast já tem 50 episódios. Ainda vale fazer trailer?**
Vale, e ele deixa de ser peça de lançamento para virar cartão de visita. Grave um trailer que cite o que o acervo já entrega ("três anos de conversas sobre X") e marque como `trailer` para que fique no topo do feed.

**Posso usar trechos de episódios que ainda não gravei?**
Grave um piloto antes do trailer e tire a prova dele. Escrever falas "de mentira" para o trailer cria uma expectativa de tom que o episódio real não cumpre, e a desistência aparece nos primeiros minutos do episódio 1.

**O trailer conta nas estatísticas de download?**
Conta como um episódio qualquer e costuma puxar a média para baixo, porque tem muito play e pouco tempo de escuta. Ao comparar números, olhe o desempenho do trailer separado dos episódios completos.

Um bom trailer transforma curiosidade em ouvinte; o que decide o resto é para onde essa curiosidade vai. Na [Speake](https://speake.com.br) você publica os episódios numa estação própria e cobra assinatura mensal de quem faz questão de continuar ouvindo.
