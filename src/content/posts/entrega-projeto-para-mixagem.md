---
title: "Como entregar um projeto para mixagem: o que preparar antes de mandar os arquivos"
description: "Guia prático de como exportar stems, nomear arquivos e organizar um projeto de áudio antes de enviar para o mixer — evitando retrabalho, ruído e perda de tempo dos dois lados."
pubDate: 2026-07-15
tags: ["producao-musical", "home-studio"]
---

Quando alguém termina de gravar e vai contratar um mixer externo pela primeira vez, o instinto é apertar "exportar" e mandar o arquivo. O problema é que "exportar" pode significar coisas muito diferentes — e um projeto mal preparado chega ao mixer cheio de ambiguidade, plugins incompatíveis, níveis inconsistentes e nomes de arquivo que não dizem nada. Resultado: horas de comunicação de ida e volta antes de qualquer fader ser movido.

Preparar um projeto bem para mixagem é uma habilidade separada da gravação em si, e quem domina ela economiza tempo e dinheiro nos dois lados da relação.

## Bounce de stems: o formato certo

A entrega padrão da indústria é stems em WAV ou AIFF, sem compressão, na mesma resolução da sessão (normalmente 24 bits / 44.1 kHz ou 48 kHz — a taxa usada durante a gravação, não convertida na saída). Cada stem deve:

- **Começar do zero da timeline.** Se a sessão tem 4 minutos de música e a guitarra só entra no minuto 1, o arquivo de guitarra ainda precisa ter 4 minutos — os primeiros 3 são silêncio. Isso garante que o mixer alinhe tudo automaticamente sem precisar descobrir onde cada elemento começa.
- **Ter consolidação de faixa, não só exportação de clip.** Se você editou com vários clipes numa faixa, consolide antes de exportar para evitar gaps ou falhas de crossfade que não aparecem no seu DAW mas existem no áudio.
- **Ser exportado sem efeitos do mix bus.** Limitadores, saturadores e EQs no canal master distorcem o nível e a dinâmica original — retire tudo isso antes do bounce. O mixer vai trabalhar com os stems crus e tomar as decisões de processamento do zero.

## Gain staging antes do bounce

Antes de exportar qualquer stem, cheque o nível de saída de cada canal. O pico do stem individual não deve ultrapassar -6 dBFS — deixe headroom. Se você foi agrupando faixas em buses com compressão durante a produção e o bus master está esmagando tudo, esse é o momento de recalibrar: o mix bus não acompanha os stems.

Uma falha comum é exportar stems que, somados, já estourariam 0 dBFS na soma — o que significa que o mixer vai ter problemas de clipping logo ao abrir os arquivos e precisará recalibrar tudo antes de começar.

## Nomenclatura que não vai gerar perguntas

Arquivos com nomes como `Audio 7_take3_final_v2.wav` causam mais confusão do que ausência de arquivo. O padrão simples que funciona:

```
PROJETO_instrumento-ou-voz_descrição.wav
```

Por exemplo: `FAIXA01_guitarra-ritmica.wav`, `FAIXA01_vocal-principal.wav`, `FAIXA01_bateria-kick.wav`. Se houver vários takes de vocal (main, dobra, harmonias), deixe explícito no nome — `vocal-lead`, `vocal-double`, `vocal-harmony-1`.

## O que mandar junto com os arquivos

Stems sozinhos são metade da informação. Mande também:

- **BPM e compasso** da sessão. Se a música não é em tempo fixo (se tem acelerações, fermatas), exporte o mapa de tempo junto ou documente as mudanças.
- **Uma referência de como o mix deve soar.** Uma ou duas músicas existentes que se aproximam do resultado esperado valem mais do que qualquer descrição textual.
- **Notas sobre o que você quer preservar e o que quer mudar.** Se o vocal principal foi gravado com um caráter que você ama, diga. Se o baixo tem um ruído de fundo que você não conseguiu eliminar, avise — é melhor o mixer saber antes do que descobrir quando o arquivo já foi processado.

## O que não mandar

Não mande o arquivo do projeto do seu DAW como substituto dos stems. Projetos de DAW dependem de plugins instalados, versões específicas de software e caminhos de arquivo que só existem na sua máquina. O mixer vai abrir e encontrar 40 plugins faltando — e esse retrabalho vai custar tempo de sessão que você está pagando.

Na Speake, o processo começa com um checklist de entrega antes de abrir qualquer arquivo — justamente para garantir que o tempo de sessão vai para decisões criativas, não para resolver problemas de exportação que deveriam ter sido resolvidos antes. Se você tem dúvidas sobre como preparar sua entrega, é exatamente esse tipo de orientação que faz parte do serviço.

Pronto para enviar seu projeto para mixagem? [envie seu projeto para a Speake](https://speake.com.br).
