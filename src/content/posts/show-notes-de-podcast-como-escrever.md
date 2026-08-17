---
title: "Show notes de podcast: como escrever para SEO e IA"
description: "Show notes de podcast são a versão em texto do episódio: 150 a 300 palavras no feed RSS e 500 a 1.500 na página do site. O que incluir e em que ordem."
pubDate: 2026-08-17
tags: ["podcasting", "narracao"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Ilustração estilizada de ondas sonoras concêntricas"
---

Show notes de podcast são o resumo em texto de um episódio, publicado em dois lugares com tamanhos diferentes: 150 a 300 palavras na descrição do feed RSS (o que aparece dentro do Spotify e do Apple Podcasts) e 500 a 1.500 palavras na página do episódio no seu site, com timestamps, links e trechos da transcrição. Buscadores e assistentes de IA não escutam áudio — eles leem esse texto. Um episódio sem show notes existe apenas para quem já é ouvinte.

## O que são show notes de podcast?

Show notes de podcast são o par escrito do episódio: resumo do assunto, nome e credencial do convidado, marcações de tempo dos blocos, links citados e uma chamada para ação. Não é a mesma coisa que transcrição — a transcrição é o texto palavra por palavra, os show notes são a versão editada e organizada.

Na prática existem duas versões do mesmo texto:

| Onde | Tamanho | Função |
|---|---|---|
| Descrição no feed RSS | 150-300 palavras | Convencer quem já está no app a dar play |
| Página do episódio no site | 500-1.500 palavras | Ser indexada pelo Google e citada por IA |
| Transcrição (arquivo .vtt/.srt) | 9.000+ palavras por hora | Acessibilidade e cobertura de busca de cauda longa |

A conta da última linha: fala normal roda entre 140 e 160 palavras por minuto, então um episódio de 60 minutos gera de 8.400 a 9.600 palavras.

## Quantas palavras deve ter um show notes de podcast?

Entre 150 e 300 palavras para a descrição do feed e entre 500 e 1.500 para a página do site. O limite técnico da descrição de episódio no Apple Podcasts fica na casa dos 4.000 caracteres, mas encher esse espaço é contraproducente: os apps mostram só 2 ou 3 linhas antes do "ver mais", e é ali que a decisão de dar play acontece. As duas primeiras frases precisam funcionar sozinhas, sem o título.

## Show notes ajudam no SEO e nas respostas de IA?

Sim, e são hoje o principal caminho de descoberta fora dos apps. Google, ChatGPT e Perplexity não transcrevem seu MP3 para responder uma pergunta — eles recuperam trechos de texto indexado. Três coisas aumentam a chance de o episódio ser citado:

- **Página própria por episódio**, com URL estável e o título real do episódio no `<h1>`.
- **Subtítulos em forma de pergunta** nos show notes, com a resposta nas duas primeiras frases da seção. É o formato que motores generativos extraem melhor.
- **JSON-LD com `PodcastEpisode`**, preenchendo `name`, `datePublished`, `timeRequired`, `associatedMedia` e `partOfSeries` com os mesmos valores que aparecem na tela.

## Como escrever show notes passo a passo

1. **Gere a transcrição automática** logo depois da edição final. Whisper rodando local sai de graça; serviços em nuvem cobram por hora de áudio e costumam ter camada gratuita limitada.
2. **Revise nomes próprios, números e jargão.** Transcrição automática de áudio limpo erra poucos por cento das palavras, mas erra justamente termos técnicos, marcas e nomes de convidado — as palavras que trazem busca.
3. **Extraia os timestamps** dos blocos, formato `mm:ss` (ou `hh:mm:ss` acima de uma hora), começando em `00:00`. Entre 5 e 10 marcações por hora de episódio.
4. **Escreva o resumo de 150-300 palavras** usando as palavras que o ouvinte digitaria, não o jargão interno do programa.
5. **Liste os links citados** com texto de âncora descritivo — nunca "clique aqui".
6. **Monte a página completa** com resumo, timestamps, 3 a 5 blocos de pergunta e resposta tirados da conversa e a transcrição — em acordeão indexável, nunca atrás de JavaScript que só carrega no clique.
7. **Suba o arquivo de transcrição** no seu host. Apple Podcasts e Spotify já geram transcrição automática, mas a sua versão revisada substitui a deles e mantém os nomes corretos.

Esse fluxo — edição, transcrição revisada, show notes e página de episódio — é parte da produção de podcast que a [Speake](https://speake.com.br) entrega junto com o áudio, justamente porque publicar o MP3 sem o texto joga fora metade do alcance.

## Checklist antes de publicar o episódio

- [ ] Título do episódio com a pergunta ou o tema, sem depender do número ("#47" não é busca)
- [ ] Descrição do feed entre 150 e 300 palavras, com as 2 primeiras frases autossuficientes
- [ ] Página do episódio no site, com URL própria
- [ ] Timestamps começando em `00:00`
- [ ] Nome e credencial do convidado escritos por extenso
- [ ] Transcrição revisada publicada e enviada ao host
- [ ] JSON-LD `PodcastEpisode` batendo com o conteúdo visível
- [ ] Uma CTA só, no fim

## Perguntas frequentes

**Devo publicar a transcrição inteira na página do episódio?**
Sim, se ela estiver revisada. Transcrição bruta cheia de "é... né..." e nomes errados prejudica a leitura e ainda ensina o buscador a associar seu episódio a termos errados. Se não houver tempo de revisar tudo, publique os show notes completos e a transcrição em arquivo separado.

**Posso usar IA para escrever os show notes?**
Para o primeiro rascunho a partir da transcrição, sim. O que a IA erra com frequência é o ângulo: resume em ordem cronológica, não pelo que interessa a quem busca. Reescreva a abertura e os subtítulos à mão.

**Show notes mudam com podcast em vídeo no YouTube?**
A estrutura é a mesma, mas o YouTube mostra só os primeiros ~150 caracteres da descrição antes do "mostrar mais" e exige capítulos começando em `00:00` para exibi-los na barra de progresso. Use o mesmo texto, com a informação decisiva antes do corte.

Quer ajuda profissional com a produção e a publicação do seu podcast? Conheça a [Speake](https://speake.com.br).
