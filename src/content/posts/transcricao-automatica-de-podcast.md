---
title: "Transcrição automática de podcast: como fazer em 2026"
description: "Transcrição automática de podcast: como funciona, qual ferramenta usar (Whisper, Sonix, Riverside) e os passos para revisar antes de publicar como show notes."
pubDate: 2026-09-02
tags: ["podcasting", "narracao"]
---

Transcrição automática de podcast é o processo de converter o áudio do episódio em texto usando reconhecimento de fala por IA, sem digitação manual. Hoje isso roda em minutos com ferramentas como Whisper (gratuito, local), Sonix ou Happy Scribe (pagas, em nuvem), com precisão entre 90% e 98% em áudio limpo e gravado com um microfone por pessoa. O texto gerado serve de base para show notes, legendas de vídeo e busca — mas quase sempre precisa de revisão antes de ir ao ar.

## Qual a ferramenta gratuita mais precisa para transcrever podcast?

O Whisper, modelo open source da OpenAI, é a opção gratuita mais precisa disponível hoje e roda localmente, sem enviar áudio para servidor externo. No modelo `large-v3`, a taxa de erro de palavra (WER) fica entre 3% e 8% em português com áudio limpo e um falante por vez — o que equivale a acertar de 92 a 97 em cada 100 palavras.

O ponto fraco do Whisper é velocidade em máquina sem GPU dedicada: processamento em CPU roda perto de 0,3x a 0,8x o tempo real (uma hora de áudio leva de 1h15 a 3h20 para transcrever), enquanto uma GPU de consumo (RTX 3060 ou superior) processa de 4x a 10x mais rápido que o tempo real. Se seu podcast tem entrevistas com dois ou mais participantes na mesma trilha, o Whisper não separa quem fala — é preciso rodar diarização à parte (pyannote.audio) ou usar um serviço pago que já entrega os falantes identificados.

## Como transcrever um podcast automaticamente passo a passo?

1. **Exporte o áudio final editado** em WAV ou MP3 de pelo menos 128 kbps — arquivo comprimido demais aumenta o erro de transcrição.
2. **Rode o modelo** (Whisper local, comando `whisper episodio.wav --model large-v3 --language Portuguese`) ou suba o arquivo num serviço em nuvem.
3. **Exporte em `.srt` ou `.vtt`** se o destino for legenda de vídeo, ou `.txt`/`.docx` se o destino for show notes.
4. **Revise nomes próprios, números e jargão técnico** — são as palavras que erram mais e que também carregam mais valor de busca.
5. **Quebre em parágrafos por assunto**, não por pausa de fala, para virar texto legível na página do episódio.
6. **Publique a versão revisada** no site e substitua a transcrição automática que Spotify e Apple Podcasts já geram por padrão, porque a deles mantém os erros de nome e termo técnico.

## Quanto custa transcrever um podcast?

Depende do volume mensal e de quem faz a revisão. A tabela abaixo compara as opções mais usadas por podcaster independente:

| Ferramenta | Custo aproximado | Diarização (separa falantes) | Onde roda |
|---|---|---|---|
| Whisper (local) | Grátis | Não, nativo | Seu computador |
| Riverside | Incluso no plano de gravação (a partir de ~R$ 90/mês) | Sim | Nuvem |
| Sonix | ~US$ 10/hora de áudio | Sim | Nuvem |
| Happy Scribe | ~US$ 0,15–0,20/minuto | Sim | Nuvem |

Para um podcast semanal de 60 minutos, o Whisper local zera o custo direto e soma só o tempo de revisão (30 a 60 minutos por episódio, em média). Serviços em nuvem cobram entre R$ 50 e R$ 200 por episódio de 60 minutos, dependendo do câmbio e do plano, mas entregam diarização pronta e cortam o tempo de revisão pela metade.

## A transcrição automática de podcast ajuda no SEO e nas respostas de IA?

Ajuda, e é hoje um dos jeitos mais diretos de um episódio aparecer em busca de cauda longa. Um episódio de 60 minutos gera entre 8.400 e 9.600 palavras de transcrição bruta — texto suficiente para cobrir dezenas de termos que nunca apareceriam no título ou na descrição curta. Google, ChatGPT e Perplexity indexam e citam texto, não áudio, então a página do episódio sem transcrição perde toda essa superfície de busca.

A transcrição bruta, porém, não deve substituir os show notes: publique as duas coisas separadas, com o resumo editado no topo da página e a transcrição completa abaixo ou em aba própria, para não afogar o leitor em texto sem pontuação de parágrafo.

## Dá para usar a transcrição para gerar legenda de vídeo?

Sim, é o caminho mais rápido para legendar um podcast em vídeo. O arquivo `.srt` ou `.vtt` que sai do Whisper ou de um serviço em nuvem já vem com marcação de tempo por trecho, pronto para importar no YouTube Studio, CapCut ou Premiere. A revisão nesse caso é mais crítica que na transcrição para texto, porque erro de legenda aparece na tela durante a reprodução — revise pelo menos os primeiros 30 segundos de cada episódio à mão, onde o erro é mais visível para quem acabou de clicar em play.

## Perguntas frequentes

**Whisper funciona bem com sotaque e gírias regionais em português?**
Razoavelmente. A taxa de erro sobe de 3-8% (fala neutra) para 10-15% em sotaques fortes ou gíria muito regional, porque o modelo foi treinado majoritariamente com português neutro de mídia. Nomes próprios locais e expressões coloquiais são os pontos mais frágeis.

**Preciso transcrever todos os episódios do catálogo antigo, ou só os novos?**
Priorize os episódios com mais downloads primeiro — é ali que o ganho de busca compensa mais rápido o tempo de revisão. Rodar Whisper local no catálogo inteiro custa só tempo de processamento, então transcrever tudo de uma vez é viável se você não for revisar linha por linha.

**Transcrição automática substitui quem faz a revisão humana?**
Não substitui, reduz o trabalho. A IA converte o áudio em texto correto na maior parte das palavras comuns; a revisão humana ainda é necessária para nomes, números e qualquer trecho que vá para uma citação pública, porque um erro de transcrição publicado vira fonte errada indexada.

Depois de transcrito e revisado, o episódio ainda precisa de um lugar para viver. Na [Speake](https://speake.com.br) você publica o áudio numa estação própria, com a transcrição junto na página do episódio, e é a assinatura mensal da audiência que sustenta a publicação, não o tráfego do texto sozinho.
