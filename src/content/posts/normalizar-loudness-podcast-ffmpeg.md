---
title: "Como normalizar loudness do podcast com ffmpeg"
description: "Como normalizar loudness do podcast com ffmpeg: comando loudnorm em duas passadas, alvo -16 LUFS e -1,5 dBTP, sem comprar plugin de medição."
pubDate: 2026-09-18
tags: ["masterizacao", "podcasting"]
image:
  src: "../../assets/posts/masterizacao.svg"
  alt: "Barras estilizadas de um equalizador"
---

Para normalizar o loudness de um episódio de podcast com ffmpeg, use o filtro `loudnorm` em duas passadas: a primeira mede o loudness real do arquivo, a segunda aplica a correção usando esses valores medidos como referência. O alvo seguro para a maioria das plataformas é -16 LUFS integrado com true peak de -1,5 dBTP — perto do padrão do Apple Podcasts e dentro da margem que Spotify e YouTube aceitam sem penalizar o volume na reprodução.

## Por que normalizar o loudness do podcast com ffmpeg em vez de um plugin?

Um plugin como o Youlean Loudness Meter mostra o LUFS em tempo real dentro da DAW, mas ainda exige rodar o episódio inteiro de novo e ajustar o ganho manualmente até bater o alvo. O ffmpeg mede e já aplica a correção automaticamente, direto no arquivo exportado, sem abrir a DAW de novo. É a rota mais rápida para quem já tem o episódio editado e só precisa fechar o loudness antes de publicar — principalmente em lote, com vários episódios de uma vez via script.

## Como medir o loudness atual do episódio (primeira passada)?

Rode este comando para medir sem alterar nada no arquivo:

```
ffmpeg -i episodio.wav -af loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json -f null -
```

O terminal devolve um bloco JSON com `input_i` (LUFS integrado medido), `input_tp` (true peak medido), `input_lra` (faixa de loudness) e `input_thresh`. Guarde esses quatro valores — eles alimentam a segunda passada.

## Qual comando aplica a correção final (segunda passada)?

Com os valores medidos em mãos, rode:

```
ffmpeg -i episodio.wav -af loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=-23.2:measured_TP=-6.8:measured_LRA=7.5:measured_thresh=-33.2:linear=true -ar 48000 episodio_normalizado.wav
```

Troque os valores de `measured_*` pelos que a primeira passada devolveu para o seu arquivo — os do exemplo acima são só ilustrativos. Com `linear=true`, o ffmpeg aplica apenas ganho, sem compressão dinâmica extra; se o episódio tiver picos muito acima da média, o resultado ainda pode passar do true peak alvo, e vale rodar um limitador suave depois ou repetir a passada com `linear=false`, que reconstrói a curva de dinâmica de forma mais agressiva.

## O Auphonic substitui o ffmpeg para quem não quer linha de comando?

Sim, com um custo. O Auphonic faz a mesma normalização — e mais: nivelamento automático entre vozes de convidados diferentes, redução leve de ruído — por upload direto no navegador, sem digitar comando nenhum. A conta gratuita libera algumas horas de processamento por mês; depois disso, cobra por hora de áudio processada, em pacotes de créditos pré-pagos. Para quem publica episódios longos ou em volume alto, esse custo mensal pode superar rápido o de rodar o mesmo processo de graça via ffmpeg.

## ffmpeg ou Auphonic: qual escolher?

| | ffmpeg | Auphonic |
|---|---|---|
| Custo | Gratuito | Grátis limitado, depois por hora processada |
| Curva de aprendizado | Exige terminal e dois comandos | Upload direto, zero comando |
| Automação em lote | Sim, via script | Sim, com plano pago e API |
| Nivelamento entre vozes | Não — só loudness geral | Sim, automático |

Com microfone único e uma cadeia de gravação consistente, o ffmpeg resolve sozinho. Com convidados remotos em volumes muito diferentes entre si, o nivelamento automático do Auphonic costuma economizar mais tempo do que o custo cobra.

## Perguntas frequentes

**Preciso normalizar a voz e a música de fundo separadas, ou só o arquivo final?**
Ajuste o volume relativo entre voz e trilha ainda na mixagem — o loudnorm corrige o loudness do arquivo inteiro, não o equilíbrio interno entre elementos. Só depois de exportar o mixdown final é que o loudnorm entra, uma vez só.

**O comando funciona em MP3 ou só em WAV?**
Funciona nos dois, mas rode a normalização na fonte de maior qualidade (WAV ou FLAC) antes de exportar para o formato final de distribuição. Aplicar loudnorm direto num MP3 já comprimido soma um segundo ciclo de perda ao codec.

**Preciso repetir isso em todo episódio?**
Sim. O loudness medido muda com a distância do microfone, o ganho de entrada e até o volume de fala de quem participa — não existe um valor fixo de ganho que sirva igual para todas as gravações.

Loudness ajustado, falta decidir onde esse episódio vai morar. Na [Speake](https://speake.com.br) você publica numa estação própria e cobra assinatura mensal de quem quer ouvir.
