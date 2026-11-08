---
title: "Metadados ID3 de podcast: o que preencher no MP3"
description: "Metadados ID3 de podcast são os campos gravados dentro do MP3: título, artista, capa e capítulos. Veja o que preencher, em qual versão e como fazer com ffmpeg."
pubDate: 2026-11-08
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Metadados ID3 de podcast são as informações gravadas dentro do próprio arquivo MP3: título, nome do programa, número do episódio, capa e capítulos. Eles viajam com o arquivo mesmo fora do feed RSS, então decidem como o episódio aparece quando alguém baixa, copia ou abre o MP3 num player offline. Preencha pelo menos título, artista, álbum, gênero, ano e capa, use ID3v2.3 para máxima compatibilidade e confira o resultado antes de publicar.

## O que são metadados ID3 e por que importam no podcast?

ID3 é o padrão de "etiquetas" embutidas em arquivos MP3. A versão usada hoje é a ID3v2, que guarda campos de texto, imagens e capítulos num bloco no início do arquivo.

No podcast, o feed RSS continua sendo a fonte principal para diretórios como Apple Podcasts e Spotify. O ID3 entra quando o arquivo sai do feed: download manual, player offline, carro, pendrive, envio por mensagem ou backup. Sem as etiquetas, o episódio aparece como "Faixa 01" ou "audio_final_v3.mp3", sem capa e sem nome do programa.

## Quais campos ID3 preencher em cada episódio?

Os campos essenciais são oito. Preencha todos em cada episódio:

| Campo | Frame ID3 | O que colocar |
|---|---|---|
| Título | TIT2 | Mesmo título do feed, sem prefixos como "EP" |
| Artista | TPE1 | Nome do apresentador ou do programa |
| Álbum | TALB | Nome do programa (igual em todos os episódios) |
| Gênero | TCON | "Podcast" |
| Ano | TDRC | Ano de publicação |
| Faixa | TRCK | Número do episódio |
| Capa | APIC | Imagem quadrada, JPEG ou PNG |
| Comentário | COMM | Resumo curto ou link do programa |

Usar o mesmo valor em TALB para todos os episódios agrupa a temporada no player. Mudar uma letra ou acento no nome do programa cria "álbuns" separados.

## Qual versão do ID3 usar: v2.3 ou v2.4?

Use ID3v2.3. A versão 2.4 é mais nova e aceita UTF-8 nativamente, mas alguns players e carros antigos mostram caracteres quebrados ou ignoram o bloco inteiro. A v2.3 é lida por praticamente tudo e suporta acentos do português via UTF-16.

Se o seu editor não deixa escolher, confira nas configurações de exportação. No ffmpeg, a opção é `-id3v2_version 3`.

## Qual o tamanho ideal da capa embutida no MP3?

Embuta uma capa quadrada de 1400 x 1400 px, em JPEG, com até cerca de 500 KB. A capa do feed RSS é outra coisa e costuma pedir entre 1400 e 3000 px; a embutida só precisa ser nítida em telas pequenas.

Capas de 3000 px dentro de cada MP3 engordam o arquivo sem ganho visível. Em 200 episódios, 500 KB extras por arquivo somam cerca de 100 MB de download desnecessário para quem baixa tudo.

## Como preencher os metadados passo a passo?

1. **Finalize o áudio.** Exporte o MP3 final (por exemplo 128 kbps CBR, 44,1 kHz) antes de mexer nas etiquetas.
2. **Escolha a ferramenta.** Mp3tag (Windows), Kid3 (Windows, macOS, Linux) ou ffmpeg na linha de comando.
3. **Preencha os oito campos** da tabela acima, com o mesmo padrão em todos os episódios.
4. **Embuta a capa** quadrada de 1400 px.
5. **Salve em ID3v2.3** e remova a ID3v1 se a ferramenta oferecer (ela limita campos a 30 caracteres).
6. **Abra o arquivo** em dois players diferentes e no celular para conferir título, capa e acentos.

Exemplo com ffmpeg, sem recodificar o áudio:

```
ffmpeg -i episodio.mp3 -i capa.jpg -map 0:a -map 1 -c copy \
  -id3v2_version 3 \
  -metadata title="Metadados ID3 de podcast" \
  -metadata artist="Nome do programa" \
  -metadata album="Nome do programa" \
  -metadata genre="Podcast" \
  -metadata date="2026" \
  -metadata track="12" \
  -metadata:s:v title="Capa" -metadata:s:v comment="Cover (front)" \
  episodio-tagueado.mp3
```

## Os metadados ID3 substituem os dados do feed RSS?

Não. O feed RSS é a fonte que os diretórios leem; o ID3 é a identidade do arquivo. Mantenha os dois iguais para evitar um título no Spotify e outro no arquivo baixado. Capítulos também podem ser embutidos via ID3 (frame CHAP), o que ajuda players offline a mostrar a navegação por trechos.

## Perguntas frequentes

**Preciso mexer em ID3 se uso hospedagem de podcast?**
Nem sempre. Algumas hospedagens reescrevem as etiquetas a partir dos dados do episódio, outras publicam o arquivo exatamente como você enviou. Baixe um episódio publicado e confira em Mp3tag ou Kid3 o que realmente chegou.

**O ID3 afeta o ranking do podcast nos diretórios?**
Não há evidência pública de que o ID3 influencie ranking. Título, descrição e categoria do feed são o que os diretórios indexam. O ID3 melhora a experiência de quem já tem o arquivo.

**Posso usar ID3 em M4A ou WAV?**
M4A usa outro formato de etiquetas (atoms MP4) e WAV tem suporte irregular a ID3. Para podcast distribuído por feed, MP3 com ID3v2.3 continua sendo o caminho mais compatível.

O arquivo está etiquetado e pronto para sair do seu computador. Na [Speake](https://speake.com.br) você publica os episódios numa estação própria e a assinatura mensal da sua audiência remunera o trabalho.
