---
title: "Como mixar stems do Suno na DAW: guia passo a passo"
description: "Para mixar stems do Suno: fixe o BPM, exporte em WAV, alinhe no compasso 1 da DAW, limpe artefatos, troque partes fracas e masterize mirando -14 LUFS."
pubDate: 2026-11-14
tags: ["mixagem", "producao-musical"]
image:
  src: "../../assets/posts/mixagem.svg"
  alt: "Ilustração estilizada de faders e ondas sonoras de mixagem"
---

Para mixar stems do Suno na DAW, defina um BPM fixo no projeto do Suno antes de extrair, exporte os stems em WAV, importe todos no compasso 1 de um projeto com o mesmo andamento e trate cada faixa como material bruto: corte artefatos, substitua as partes mais fracas e só depois equalize, comprima e masterize.. Os stems vêm de uma separação por IA, então carregam vazamento e artefatos que um multitrack gravado não teria.

## Como exportar stems do Suno?

Os stems do Suno são exportados pelo menu **More** (três pontos) da faixa, na opção **Get Stems**, ou pelo botão **Export → Multitrack** dentro do Suno Studio. Os dois exigem plano pago, e os limites mudam com frequência.

No menu Get Stems existem três modos em 2026:

| Modo | Plano | O que entrega | Quando usar |
|---|---|---|---|
| Auto Split | Pro e Premier | Até 12 stems (bateria, baixo, guitarra, teclas, vocal…) | Mixagem completa na DAW |
| Split from Mix | Pro e Premier | Um instrumento + o resto da mistura | Acapella ou instrumental rápido |
| Advanced Split | Premier | Escolha entre cerca de 100 instrumentos | Isolar uma parte específica |
| Studio → Multitrack | Premier (Studio) | Todas as faixas do projeto em WAV 32 bit/48 kHz | Projetos montados no Suno Studio |

O Auto Split custa créditos a cada extração (50 por rodada, segundo guias publicados após o Studio 2.0).

## Por que os stems do Suno ficam fora de sincronia na DAW?

Stems do Suno saem de sincronia quando o andamento do projeto da DAW não é exatamente o mesmo da faixa gerada. Os arquivos são exportados todos a partir do mesmo ponto zero, então o alinhamento entre eles está correto; o problema é a grade de compassos da DAW não bater com a música.

A solução é definir um **Manual BPM** nos controles de tempo do projeto do Suno antes de extrair os stems e usar o mesmo número na DAW. Se a faixa já foi exportada com tempo variável, dá para corrigir com Warp no Ableton Live, Smart Tempo no Logic Pro ou stretch no FL Studio, mas reexportar com BPM fixo dá menos trabalho e menos artefato de time-stretch.

O Suno não informa a tonalidade. Passe um stem melódico (baixo ou teclas) por um afinador ou plugin de detecção de tom antes de gravar qualquer parte nova por cima.

## Qual o passo a passo para mixar stems do Suno?

O passo a passo para mixar stems do Suno começa limpando e termina masterizando, nessa ordem — EQ e compressão em cima de stem sujo só realçam o problema.

1. **Crie o projeto em 48 kHz/24 bit** com o BPM fixado no Suno. Importe todos os WAV no compasso 1, sem mover nenhum.
2. **Guarde o mix original numa faixa mutada.** Ela serve de referência A/B o tempo todo: se o seu mix soa pior que o do Suno, algo está errado.
3. **Ouça cada stem em solo** e marque os trechos com artefato: "chiado d'água" em pratos, vocal com cauda metálica, bumbo vazando no baixo.
4. **Some os stems e confira a fase.** Com todos os faders em 0 dB, a soma deveria soar praticamente igual ao mix original. Se o grave sumir ou o centro esvaziar, inverta a polaridade do stem suspeito e compare.
5. **Substitua o que estiver fraco.** Bateria de IA costuma ser o primeiro candidato: troque por samples ou MIDI programado no mesmo BPM. O Suno Studio também converte stems em MIDI (10 créditos por conversão), o que facilita refazer teclas e baixo com seus próprios instrumentos virtuais.
6. **Limpe antes de colorir.** Passa-alta em 80–100 Hz em tudo que não é bumbo ou baixo, cortes estreitos nas ressonâncias metálicas e um de-esser leve no vocal (4–8 kHz).
7. **Só então mixe.** Balanço de volume, pan, compressão e efeitos, como em qualquer mix. Reverb e delay do vocal original costumam ficar presos no stem "outros", então o vocal isolado chega seco — adicione ambiência própria em vez de tentar recuperar a original.

## Como masterizar uma música feita no Suno?

Masterizar uma música feita no Suno é igual a masterizar qualquer mix, com um cuidado extra: deixe headroom. Exporte o mix estéreo com pico em torno de -6 dBFS e sem limitador no master bus, e masterize num projeto separado.

Para streaming, mire em torno de -14 LUFS integrados e true peak de no máximo -1 dBTP. Spotify e YouTube normalizam para essa faixa, então masterizar mais alto só acrescenta distorção sem ganho real de volume percebido. Ao comparar com o mix original do Suno, iguale o loudness antes de julgar qual soa melhor.

## Perguntas frequentes

**Stems do Suno são iguais a um multitrack gravado?**
Não. Os stems do Get Stems são reconstruídos por separação de IA a partir da mistura, então trazem vazamento entre instrumentos e artefatos em altas frequências. Um multitrack gravado tem cada fonte isolada de verdade.

**Posso usar comercialmente uma música mixada a partir de stems do Suno?**
O uso comercial depende de a faixa ter sido gerada em plano pago (Pro ou Premier). Regravar e substituir partes com material próprio aumenta a contribuição humana, que pesa na discussão sobre autoria no Brasil.

Faixa mixada e masterizada, falta quem ouça. Na [Speake](https://speake.com.br) você publica numa estação própria e a audiência assina por mês para acompanhar o que você lança.
