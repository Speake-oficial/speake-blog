---
title: "Como fazer seu podcast aparecer no ChatGPT e na IA"
description: "Assistentes de IA leem texto, não áudio. Publique a transcrição na página do episódio, marque PodcastEpisode e libere o OAI-SearchBot no robots.txt."
pubDate: 2026-10-24
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Ilustração estilizada de microfone de podcast com ondas sonoras"
---

Para fazer seu podcast aparecer no ChatGPT e nos outros assistentes de IA, publique a transcrição completa de cada episódio em HTML numa URL sua, marque a página com dados estruturados `PodcastEpisode` e mantenha o `OAI-SearchBot` liberado no `robots.txt`. Nenhum desses sistemas ouve o seu MP3: eles citam o texto que os rastreadores conseguem ler na web. Um episódio que só existe dentro do agregador é, para eles, um arquivo sem conteúdo.

## Por que o ChatGPT não "ouve" o seu podcast?

O ChatGPT não ouve o seu podcast porque o que alimenta a resposta é um índice de texto, não de áudio: o rastreador baixa o HTML da página, extrai palavras e guarda trechos. O arquivo de áudio linkado no feed RSS entra nesse índice como uma URL de mídia, sem nada citável dentro.

A diferença de material é grande: a página de episódio típica, com título e show notes, tem de 200 a 400 palavras. O mesmo episódio de 50 minutos, falado a cerca de 150 palavras por minuto, rende uma transcrição de aproximadamente 7.500 palavras — com nomes, números e perguntas que ninguém escreveria num resumo.

A transcrição automática da plataforma não resolve isso: a do Apple Podcasts fica dentro do app da Apple, a do Spotify dentro do Spotify. O assistente de IA só cita o que está numa página pública do seu domínio.

## O que precisa estar na página do episódio?

A página do episódio precisa de URL própria, transcrição visível no HTML e marcação estruturada:

1. **Uma URL canônica por episódio** (`/episodios/042-nome-do-tema`), não todos numa página paginada.
2. **A transcrição completa renderizada no servidor.** Texto que só aparece depois de um clique em "mostrar transcrição" ou de um `fetch` em JavaScript não é visto por boa parte dos rastreadores de IA.
3. **Falas identificadas por quem falou** (`**Ana:**`, `**Convidado:**`) e um H2 por bloco de assunto, com a pergunta que o bloco responde.
4. **Dados estruturados `PodcastEpisode`**, ligados à série por `partOf` (`PodcastSeries`) e ao arquivo por `associatedMedia` (`AudioObject`).
5. **A tag `<podcast:transcript>` no feed RSS**, apontando o VTT do episódio.
6. **Um resumo de 2 a 4 frases no topo**, que responda o tema do episódio sem depender do áudio.

## Preciso liberar algum robô no `robots.txt`?

Sim — bloquear os rastreadores errados é o jeito mais rápido de desaparecer das respostas de IA. Cada token controla uma coisa:

| Token no `robots.txt` | Para que serve | Se você bloquear |
|---|---|---|
| `Googlebot` | Índice do Google, que alimenta Busca e AI Overviews | Sai do Google |
| `Google-Extended` | Treino e grounding do Gemini | Não afeta Busca nem ranqueamento |
| `OAI-SearchBot` | Indexa o site para as respostas de busca do ChatGPT | Não aparece como fonte citada no ChatGPT |
| `GPTBot` | Coleta conteúdo que pode treinar os modelos da OpenAI | Fica fora do treino, mas segue citável |
| `ChatGPT-User` | Visita a página quando um usuário pede | Não decide se você aparece na busca |
| `PerplexityBot`, `ClaudeBot` | Rastreio de Perplexity e Anthropic | Perde citação nesses dois |

Libere `Googlebot` e `OAI-SearchBot` sempre; bloquear `GPTBot` é decisão sobre treino, não sobre visibilidade. E confira o `robots.txt` que a sua hospedagem serve por padrão.

## Como escrever o episódio para ser citado pela IA?

Para ser citado, o texto precisa do que um modelo usa para sustentar uma afirmação: fonte nomeada, número e citação direta. O estudo *GEO: Generative Engine Optimization* (Princeton, KDD 2024) testou 10.000 consultas e mediu ganho de visibilidade de até 40% ao adicionar citações, estatísticas e referências a fontes — até 37% nos testes feitos direto no Perplexity.

Três hábitos mudam a transcrição sem mudar o episódio:

- **Diga os números em voz alta.** "Caiu de 18 para 11 minutos" é citável; "caiu bastante" não.
- **Nomeie a fonte na fala.** "Segundo a PodPesquisa da abPod" entra na transcrição como atribuição.
- **Repita o sujeito ao trocar de assunto.** Assistentes recuperam trechos de 150 a 300 palavras, isolados do resto: um bloco que começa em "isso aconteceu porque ele mudou" não é recuperável.

## Dá para saber se a IA está citando o seu podcast?

Dá, por três sinais. No log do servidor, procure os user-agents `OAI-SearchBot`, `PerplexityBot` e `ClaudeBot`: a visita prova que a página é alcançável. No analytics, filtre as referências por `chatgpt.com`, `perplexity.ai` e `gemini.google.com` — esse tráfego só existe quando houve link na resposta.

O terceiro sinal é manual: rode, uma vez por mês, 10 perguntas que o seu podcast responde bem e anote quem foi citado.

## Perguntas frequentes

**Publicar a transcrição não faz a pessoa deixar de ouvir o episódio?**
Na prática, não: quem chega por uma busca de texto não ia ouvir 50 minutos de áudio de qualquer forma. A transcrição é a porta de entrada, e o player no topo da página converte parte dessa gente em ouvinte.

**O arquivo `llms.txt` resolve isso?**
Não. `llms.txt` é uma proposta sem adoção confirmada: nenhum dos grandes assistentes documenta usá-lo para decidir citações. Transcrição em HTML, dados estruturados e `robots.txt` são o que está documentado hoje.

Aparecer na resposta de um assistente leva gente nova ao episódio aberto — e aí a pergunta passa a ser o que você tem para quem quis mais. Na [Speake](https://speake.com.br) você publica numa estação própria e cobra assinatura mensal de quem, depois de ouvir, quer o conteúdo exclusivo.
