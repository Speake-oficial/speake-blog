---
title: "Feed RSS de podcast: o que é e como funciona"
description: "Feed RSS de podcast é um arquivo XML público com os dados do programa e o link de cada áudio. Veja as tags obrigatórias, um exemplo e como validar o seu."
pubDate: 2026-10-24
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Ilustração estilizada de microfone e ondas sonoras de podcast"
---

O feed RSS de podcast é um arquivo XML público, num endereço fixo, que lista o nome do programa, a capa, a descrição e, para cada episódio, o título, a data e o link do arquivo de áudio. Apple Podcasts, Spotify, Pocket Casts e qualquer outro aplicativo leem esse arquivo periodicamente e atualizam a lista de episódios sozinhos. Ou seja, um podcast é um feed RSS com algumas tags extras, e o áudio fica hospedado em outro lugar, fora dos aplicativos.

## O que é um feed RSS de podcast na prática?

Um feed RSS de podcast é uma página de texto em formato XML que o aplicativo consulta de tempos em tempos, em geral a cada poucas horas. Se aparece um `<item>` novo, o aplicativo mostra o episódio para quem segue o programa.

O arquivo tem duas camadas:

- **`<channel>`:** dados do programa inteiro (título, descrição, idioma, capa, categoria).
- **`<item>`:** um bloco por episódio, com título, data, duração e o endereço do áudio.

Os aplicativos não guardam o seu áudio. Eles guardam apenas o endereço do feed e baixam o MP3 ou M4A direto do servidor que você indicou no `<enclosure>`.

## Quais tags são obrigatórias no RSS do podcast?

Para o Apple Podcasts aceitar o feed, o programa precisa de título, descrição, idioma, capa, categoria e indicação de conteúdo explícito, e cada episódio precisa de título e do arquivo de áudio. Os demais campos melhoram a apresentação, mas o feed funciona sem eles.

| Nível | Tag | O que informa |
|---|---|---|
| Programa | `<title>` | Nome do podcast |
| Programa | `<description>` | Resumo do programa |
| Programa | `<language>` | Idioma, como `pt-br` |
| Programa | `<itunes:image>` | Capa quadrada, de 1400 a 3000 px |
| Programa | `<itunes:category>` | Categoria do diretório |
| Programa | `<itunes:explicit>` | `true` ou `false` |
| Episódio | `<title>` | Título do episódio |
| Episódio | `<enclosure>` | URL, tamanho em bytes e tipo do áudio |
| Episódio | `<guid>` | Identificador único e permanente |

Também vale preencher `<pubDate>`, `<itunes:duration>`, `<itunes:episodeType>` (`full`, `trailer` ou `bonus`) e, em programas com temporadas, `<itunes:season>` e `<itunes:episode>`.

## Como é um exemplo de feed RSS de podcast?

Um feed mínimo com um episódio tem esta cara:

```xml
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <channel>
    <title>Meu Programa</title>
    <description>Conversas curtas sobre produção de áudio.</description>
    <language>pt-br</language>
    <itunes:image href="https://exemplo.com/capa-3000.jpg"/>
    <itunes:category text="Technology"/>
    <itunes:explicit>false</itunes:explicit>
    <item>
      <title>Episódio 1</title>
      <guid isPermaLink="false">ep-0001</guid>
      <pubDate>Mon, 20 Oct 2026 08:00:00 GMT</pubDate>
      <enclosure url="https://exemplo.com/ep1.mp3" length="14500000" type="audio/mpeg"/>
      <itunes:duration>00:20:15</itunes:duration>
    </item>
  </channel>
</rss>
```

O atributo `length` do `<enclosure>` é o tamanho do arquivo em bytes, e o `type` é `audio/mpeg` para MP3 ou `audio/x-m4a` para M4A.

## Como enviar o feed RSS para o Spotify e o Apple Podcasts?

Você cadastra o endereço do feed uma única vez em cada diretório, no painel do criador (Spotify for Creators e Apple Podcasts Connect), e a partir daí os episódios novos entram sozinhos. Cada diretório revisa o programa na primeira vez, o que costuma levar de algumas horas a alguns dias.

1. Valide o feed antes de enviar (veja a seção abaixo).
2. Copie a URL pública do feed na sua hospedagem.
3. Cole a URL no painel do Spotify e do Apple Podcasts Connect.
4. Confirme o e-mail de verificação enviado ao endereço do campo `<itunes:email>` ou ao e-mail do cadastro.
5. Aguarde a aprovação e confira se capa, título e episódios aparecem corretos.

Para escolher onde o feed vai morar, veja o guia de [hospedagem de podcast](/posts/hospedagem-de-podcast-como-escolher/).

## Como validar o feed RSS e evitar os erros mais comuns?

Abra a URL do feed no navegador e passe por um validador, como o do Podbase ou o do Cast Feed Validator. Os erros mais frequentes são capa fora da faixa de 1400 a 3000 px, `<enclosure>` com `length` zerado, data fora do formato RFC 822, caracteres especiais sem codificação (como `&` solto) e servidor de áudio sem suporte a requisições parciais (byte-range), que quebra o avanço e o retorno no player.

O `<guid>` merece atenção especial: ele identifica o episódio para o aplicativo. Se você trocar o guid de um episódio já publicado, os aplicativos entendem como episódio novo e podem baixar de novo ou duplicar o item na lista de quem já ouviu.

## Perguntas frequentes

**Posso mudar o endereço do feed RSS sem perder ouvintes?** Sim, desde que você coloque `<itunes:new-feed-url>` no feed antigo apontando para o novo e mantenha o antigo no ar por algumas semanas. O passo a passo completo está no post sobre [como trocar de hospedagem sem perder ouvintes](/posts/trocar-hospedagem-de-podcast-sem-perder-ouvintes/).

**Todo podcast precisa de um feed RSS?** Para aparecer nos diretórios abertos, como Apple Podcasts e Spotify, sim. Podcasts publicados em plataformas fechadas, que entregam o áudio só dentro do próprio aplicativo, não expõem um feed aberto.

**O feed RSS guarda o áudio do episódio?** Não. O feed guarda apenas o endereço do arquivo, e o áudio fica no servidor de hospedagem. Se o arquivo sair do ar, o episódio some do player mesmo com o feed intacto.

Feed aberto é a regra do podcast tradicional, mas não é o único formato de distribuição. Na [Speake](https://speake.com.br) você publica seus episódios numa estação própria, sem montar nem manter um feed, e a audiência que assina ouve o conteúdo exclusivo no app.
