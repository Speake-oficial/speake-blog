---
title: "Transcrição de podcast: como fazer e por que publicar"
description: "O Apple Podcasts já gera transcrição automática em português, mas ela fica presa no app. Como transcrever o episódio, em qual formato e como publicar no feed."
pubDate: 2026-09-06
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Ilustração estilizada de microfone de podcast com ondas sonoras"
---

A transcrição de podcast é o texto completo do episódio, sincronizado com o áudio, publicado junto com ele. Hoje ela sai de uma API de reconhecimento de fala por cerca de **US$ 0,006 por minuto de áudio** — US$ 0,36 por um episódio de uma hora — em arquivo **VTT** ou **SRT**, e entra no feed RSS pela tag `<podcast:transcript>`. Vale fazer a sua mesmo com as plataformas gerando transcrição automática: a transcrição da Apple fica dentro do app da Apple, e o texto que o Google e os assistentes de IA leem é o que está na página do episódio.

## Como transcrever um podcast automaticamente?

Transcrever um podcast automaticamente leva de 2 a 10 minutos por episódio e custa centavos. O caminho mais direto:

1. **Exporte o áudio já editado** em WAV ou MP3 mono, 48 kHz — a versão final, não a bruta: cada "é... então" cortado na edição é uma linha a menos para revisar.
2. **Escolha o motor.** A API de transcrição da OpenAI cobra US$ 0,006/min (Whisper e GPT‑4o Transcribe) ou US$ 0,003/min na versão mini. Rodando local, `faster-whisper` com o modelo `large-v3-turbo` entrega precisão praticamente igual à do `large-v3` gastando uma fração do processamento.
3. **Force o idioma para `pt`.** Sem isso, o modelo detecta o idioma pelos primeiros 30 segundos e uma vinheta em inglês faz o episódio inteiro sair transcrito errado.
4. **Peça a saída com timestamps por segmento**, não em texto corrido — é o timestamp que permite a leitura sincronizada.
5. **Revise os nomes próprios.** Em áudio limpo, os modelos grandes ficam na faixa de 5% a 8% de erro por palavra; quase todo esse erro se concentra em nome de pessoa, marca, sigla e número.

Se você já edita o episódio por texto, a transcrição sai de graça como subproduto — o fluxo está descrito em [edição de podcast por texto](/posts/edicao-de-podcast-por-texto/).

## Qual formato de transcrição usar: TXT, SRT ou VTT?

Use **VTT** para publicar no feed e **TXT** para a página do site:

| Formato | Onde usar | Timestamps |
|---|---|---|
| VTT (WebVTT) | Tag `<podcast:transcript>` no RSS; padrão aceito pelo Apple Podcasts | Sim, com marcação de locutor |
| SRT | Alternativa aceita pela Apple; legenda em vídeo | Sim |
| TXT / HTML | Página do episódio no seu site, indexável por buscador | Não |
| JSON | Uso interno: gerar capítulos, cortes e busca no catálogo | Sim, por palavra |

Gere uma vez em JSON com timestamp por palavra e derive os outros formatos daí; o caminho inverso não existe.

## Como publicar a transcrição no feed do podcast?

A transcrição entra no feed RSS dentro do `<item>` do episódio, com a tag do namespace Podcasting 2.0:

```xml
<podcast:transcript
  url="https://seusite.com.br/transcricoes/ep-42.vtt"
  type="text/vtt"
  language="pt-BR" />
```

O arquivo precisa estar acessível publicamente, servido com o `Content-Type` correto (`text/vtt`), e o `language` deve bater com o idioma do episódio. Se a sua hospedagem não tem campo de upload de transcrição, o arquivo pode ficar em qualquer servidor estático — a tag só aponta para a URL.

## O Apple Podcasts e o Spotify não fazem isso automaticamente?

Fazem, e ainda assim vale publicar a sua. O Apple Podcasts gera transcrição automática logo após a publicação, já inclui português e português do Brasil, funciona a partir do iOS 17.4 em mais de 170 países e não processa arquivos com mais de 10 horas. O Spotify gera para parte dos episódios, com cobertura irregular por idioma e por programa.

O limite é o mesmo nos dois casos: esse texto vive dentro do aplicativo. No Apple Podcasts ele é somente leitura — não dá para copiar nem exportar — e nenhuma das duas transcrições aparece no Google, no seu site ou para um assistente de IA. Enviar a sua ainda substitui a automática pela versão revisada, com os nomes escritos certo.

## Transcrição de podcast ajuda no SEO e nas respostas de IA?

Ajuda, e por um motivo mecânico: buscador e modelo de linguagem leem texto, não áudio. Sem transcrição publicada em página aberta, uma hora de conteúdo bem pesquisado é uma caixa-preta para qualquer coisa que não seja um ouvinte humano — o episódio só pode ser encontrado pelo título, pela capa e pelas [show notes](/posts/show-notes-de-podcast-como-escrever/).

Para render descoberta, publique a transcrição na página do episódio no seu site (não só no feed) e quebre o texto em blocos com subtítulos que sejam as perguntas respondidas no episódio. Uma transcrição bruta de 9.000 palavras em parágrafo único é indexável, mas é péssima de citar — e citação é o que traz visita.

## Checklist antes de publicar a transcrição

- Idioma forçado para `pt` na transcrição, não detectado automaticamente.
- Nomes próprios, marcas e siglas conferidos manualmente.
- Números lidos por extenso no áudio convertidos para dígitos no texto.
- Identificação de quem fala em episódio com convidado.
- Arquivo VTT servido como `text/vtt` e apontado pela tag `<podcast:transcript>`.
- Versão em texto publicada na página do episódio, com subtítulos.

## Perguntas frequentes

**Preciso transcrever o catálogo antigo inteiro?**
Não de uma vez. Comece pelos 10 episódios com mais escuta e pelos de tema perene — episódio de notícia envelhece e rende pouca busca. A US$ 0,36 por hora de áudio, 50 episódios de uma hora custam menos de US$ 20: a barreira é o tempo de revisão, não o custo.

**Transcrição automática substitui legenda em vídeo?**
Serve de base, mas não substitui. Legenda de vídeo exige segmentos curtos, com limite de caracteres por linha e tempo mínimo em tela; a transcrição de podcast pode ter blocos longos. Gere o SRT a partir dela e reajuste a quebra das linhas.

**A transcrição precisa ser palavra por palavra?**
Para acessibilidade e para busca, sim: mantenha o que foi dito. Limpe apenas ruído de fala sem conteúdo — gagueira, "hã", repetição de palavra — e nunca reescreva frases, porque o texto deixa de bater com o áudio na leitura sincronizada.

Transcrição pronta, episódio legível por máquina — falta decidir onde ele vira receita. Na [Speake](https://speake.com.br) você publica os episódios numa estação própria e sua audiência assina por mês para ouvir.
