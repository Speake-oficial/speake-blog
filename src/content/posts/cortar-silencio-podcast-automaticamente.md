---
title: "Cortar silêncio do podcast automaticamente: como fazer"
description: "Cortar silêncio do podcast automaticamente: qual threshold usar, quanta pausa deixar e os comandos de ffmpeg, Audacity e auto-editor que fazem o corte."
pubDate: 2026-10-30
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Para cortar silêncio do podcast automaticamente, você define um threshold de 8 a 12 dB acima do ruído de fundo da gravação, uma duração mínima para o trecho contar como silêncio (0,5 s é um bom ponto de partida) e uma margem de 0,15 a 0,25 s preservada nas pontas de cada corte. ffmpeg, Audacity, auto-editor e os plugins de DAW aplicam essa regra na faixa inteira de uma vez. O que não se automatiza é a decisão editorial: cortar silêncio não é cortar todas as pausas, e episódio sem respiro soa pior que episódio com pausa longa.

## Como cortar silêncio automaticamente num episódio, passo a passo?

Cortar silêncio automaticamente tem cinco passos, e o primeiro não é apertar nenhum botão — é medir o ruído de fundo. Sem esse número, qualquer threshold que você escolher é chute, e o detector vai cortar fala baixa ou ignorar silêncio.

1. **Meça o ruído de fundo.** Selecione 5 a 10 segundos em que ninguém fala e leia o nível RMS. Em quarto tratado com microfone dinâmico, cai entre -60 e -50 dBFS; em sala comum com condensador, entre -50 e -40 dBFS.
2. **Defina o threshold 8 a 12 dB acima disso.** Ruído em -55 dBFS → threshold em -45 dBFS. A folga existe porque a fala no fim da frase cai de nível muito antes de virar silêncio de verdade.
3. **Defina a duração mínima.** Só conta como silêncio o trecho abaixo do threshold por mais de 0,4 a 0,6 s. Abaixo de 0,3 s, o detector corta dentro das sílabas.
4. **Defina quanto sobra.** Não zere a pausa: trunque para 0,25 a 0,4 s entre frases e 0,6 a 1,0 s entre blocos de assunto.
5. **Revise só as emendas**, e aplique fade de 5 a 10 ms em cada ponta para não deixar clique audível. As emendas ruins se concentram em risada, respiração profunda e sobreposição de vozes.

## Qual threshold usar para detectar silêncio?

O threshold certo é relativo ao ruído de fundo, não um valor universal — mas se você precisa de um número para começar, use **-40 dBFS** em gravação caseira comum e **-50 dBFS** em sala tratada com microfone dinâmico. O Audacity aceita de -20 dB a -80 dB no efeito Truncate Silence, e essa faixa larga existe porque o valor depende do piso de ruído de cada gravação.

Quatro sintomas dizem que o ajuste está errado:

| Sintoma | Causa | Correção |
|---|---|---|
| Fim de palavra cortado, fala "engolida" | Threshold alto demais | Baixe 5 dB e aumente a duração mínima |
| Quase nada foi cortado | Threshold abaixo do ruído de fundo | Suba 5 dB; se não resolver, trate o ruído antes |
| Cortes picados dentro da fala | Duração mínima curta demais | Suba para 0,5–0,6 s e aumente a margem |

Ordem importa: aplique redução de ruído **antes** de detectar o silêncio. Com o piso mais baixo, a distância entre fala e pausa aumenta e o detector erra menos.

## Vale a pena remover todas as pausas do podcast?

Não. Remover toda a pausa é o erro mais comum de quem automatiza edição, porque a pausa é informação: marca fim de raciocínio, dá tempo de absorver um dado e separa pergunta de resposta. Episódio com todas as pausas zeradas soa acelerado e cansa antes dos dez minutos, mesmo com áudio tecnicamente limpo.

A regra é cortar o excesso, não a função: pausa de 2,5 s depois de uma pergunta vira 0,8 s, pausa de 0,4 s entre frases fica como está. Narração de audiolivro é o caso mais rígido — ali a pausa faz parte da leitura.

## Quais ferramentas cortam silêncio automaticamente?

Quatro caminhos cobrem quase todos os casos, do gratuito em linha de comando ao plugin pago dentro da DAW:

| Ferramenta | Custo | Como funciona | Melhor para |
|---|---|---|---|
| ffmpeg (`silenceremove`) | Grátis | Threshold em dB e duração, em lote | Episódio em formato fixo |
| Audacity (Truncate Silence) | Grátis | Threshold, duração e "truncar para" | Edição pontual |
| auto-editor | Grátis | Percentual de volume, exporta a lista de cortes | Videocast |
| Plugins de DAW e editores por texto | Pago | Detecção dentro da sessão, revisável | Quem já edita no Premiere ou Reaper |

No ffmpeg, o comando que remove todos os silêncios maiores que 0,5 s abaixo de -40 dB é:

```bash
ffmpeg -i episodio.wav -af silenceremove=stop_periods=-1:stop_duration=0.5:stop_threshold=-40dB episodio_cortado.wav
```

O `stop_periods=-1` faz o filtro valer para a faixa inteira, não só para o começo do arquivo. No auto-editor, o padrão é threshold de 4% de volume com margem de 0,2 s nas pontas:

```bash
auto-editor episodio.mp3 --edit audio:threshold=4% --margin 0.2sec
```

Confira os padrões da sua versão com `auto-editor --help` — a sintaxe dos flags mudou entre versões.

## Perguntas frequentes

**Respiração conta como silêncio?** Não. A respiração fica acima do threshold, então o detector a trata como áudio e a mantém. Reduzir respiração exige processo separado — redução manual de ganho ou plugin específico.

**Cortar silêncio quebra a sincronia do videocast?** Quebra se você cortar só o áudio. Em videocast o corte tem que valer para áudio e vídeo na mesma timeline — por isso ferramentas como o auto-editor exportam a lista de cortes em vez de devolver só um arquivo de áudio.

**É melhor cortar silêncio antes ou depois da mixagem?** Antes. Com os cortes definidos, compressor e limitador trabalham sobre o material final e você não refaz a mixagem por causa de uma emenda nova. Deixe para depois só os fades curtos de cada ponto de corte.

Edição mais rápida só vira cadência se o episódio pronto tiver para onde ir. Na [Speake](https://speake.com.br) você publica os episódios numa estação própria e cobra assinatura mensal de quem faz questão de acompanhar.
