---
title: "WAV, MP3, FLAC e AIFF: qual formato de áudio usar em cada etapa do projeto"
description: "Escolher o formato errado de áudio pode custar qualidade, espaço ou compatibilidade. Entenda quando usar WAV, MP3, FLAC e AIFF — da gravação à entrega final."
pubDate: 2026-08-02
tags: ["home-studio", "producao-musical", "podcasting"]
---

A dúvida aparece cedo: você acabou de gravar, a interface está conectada, o DAW pergunta em qual formato salvar. WAV? AIFF? Ou vai exportar em MP3 direto para economizar espaço? A escolha de formato parece detalhe técnico, mas afeta qualidade, compatibilidade e fluxo de trabalho do começo ao fim do projeto.

## Formatos sem perda (lossless): onde a qualidade não pode ser comprometida

**WAV** é o padrão da indústria para gravação e processamento. Suporta até 32 bits float e qualquer sample rate, não aplica nenhuma compressão ao áudio — o que entra é o que fica. Compatível com praticamente todos os DAWs, plugins e serviços de entrega profissional.

Use WAV para:
- Todos os arquivos de gravação (takes, vozes, instrumentos)
- Exportação de stems para mixagem ou masterização
- Arquivos finais para entrega a engenheiros de mixagem ou mastering
- Trilhas de alta qualidade para plataformas de streaming

**AIFF** (Audio Interchange File Format) é o equivalente da Apple. Tecnicamente idêntico ao WAV em termos de qualidade — sem compressão, suporte a 24 e 32 bits — mas historicamente mais usado em fluxos macOS e em alguns DAWs como Logic. Se você entrega para alguém no ecossistema Apple, AIFF funciona sem fricção. Se o destino é multiplataforma, WAV evita possíveis incompatibilidades.

**FLAC** é um formato lossless com compressão sem perda: o arquivo é menor que o WAV equivalente, mas ao decodificar você recupera o áudio exato, sem degradação. Isso o torna atraente para arquivamento — menor espaço em disco, sem abrir mão de qualidade. O problema: suporte nativo em DAWs ainda é irregular. Audacity suporta; Pro Tools não importa nativamente; Reaper sim. Para uso interno ou arquivamento pessoal, funciona bem. Para entregar a terceiros, confirme compatibilidade antes.

## Formatos com perda (lossy): para distribuição, não para produção

**MP3** é o formato que o mundo conhece. A compressão é com perda (lossy): o algoritmo remove informações de frequência consideradas menos perceptíveis pelo ouvido, o que reduz drasticamente o tamanho do arquivo. A 192 kbps ou 320 kbps, a diferença em relação ao WAV é imperceptível para a maioria dos ouvintes em uso casual. A diferença aparece no processamento.

Nunca edite ou processe um MP3 e salve como MP3 de novo. Cada vez que o arquivo passa pelo encoder, as perdas se acumulam — o que começa imperceptível vira artefato audível depois de dois ou três ciclos de encode/decode. Se você recebeu um arquivo MP3, converta para WAV antes de trabalhar, processe, e só exporte em MP3 no final se necessário.

Use MP3 para:
- Distribuição final de podcast (as plataformas pedem MP3, geralmente 128–192 kbps para voz, 192–320 kbps para música)
- Preview de demos que não precisam de qualidade máxima
- Arquivos onde o tamanho é realmente uma limitação de upload ou streaming

**AAC** (usado pelo iTunes, YouTube, Spotify internamente) funciona de forma parecida ao MP3, mas com compressão mais eficiente — qualidade superior no mesmo bitrate. Algumas plataformas de podcast aceitam AAC em M4A. Se a plataforma aceitar e você quiser um arquivo menor que o MP3 com mesma qualidade, AAC é uma opção válida para entrega.

## O fluxo correto por etapa

| Etapa | Formato recomendado |
|---|---|
| Gravação | WAV 24 bit / 48 kHz (ou 96 kHz se necessário) |
| Edição e processamento | WAV (sempre) |
| Stems para mixagem | WAV 24 bit, mesmo sample rate do projeto |
| Entrega para masterização | WAV 24 bit, sem limitação no master bus |
| Arquivamento do projeto | WAV ou FLAC |
| Distribuição de podcast | MP3 128–192 kbps (voz) ou 320 kbps (música) |
| Distribuição de música | WAV ou FLAC para plataformas que aceitam; MP3 320 kbps como fallback |

## Bit depth importa tanto quanto o formato

Um WAV gravado em 16 bit tem menos headroom e mais ruído de quantização que um WAV em 24 bit. Para gravação e edição, sempre use 24 bit — o espaço extra em disco compensa. A conversão para 16 bit acontece na masterização, quando necessário, usando dithering.

---

Na Speake, todos os projetos de voz, narração e produção são recebidos e entregues em formatos especificados pelo engenheiro antes do início do projeto — o que evita retrabalho por incompatibilidade de formato ou conversões desnecessárias que degradam qualidade. Quer saber qual formato preparar para o seu projeto? [fale com a Speake](https://speake.com.br).
