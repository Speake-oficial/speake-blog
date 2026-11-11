---
title: "Como colocar legenda no corte de podcast"
description: "Como colocar legenda no corte de podcast: gere o SRT do trecho, revise nomes próprios, use até 2 linhas de 25 caracteres e queime o texto fora da interface do app."
pubDate: 2026-11-11
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Para colocar legenda no corte de podcast, gere a transcrição com timecode do trecho já editado, revise à mão o que o reconhecimento de fala erra (nomes próprios, siglas, números), quebre o texto em cartões de no máximo duas linhas de 25 caracteres e queime a legenda no vídeo deixando-a entre 700 e 900 pixels acima da borda inferior, fora da interface do app. Legenda queimada é o padrão em Reels, TikTok e Shorts porque o feed começa sem som: quem decide ativar o áudio decide lendo.

## Como colocar legenda no corte de podcast em 5 passos

1. **Corte primeiro, transcreva depois.** Exporte o trecho final de 30 a 90 segundos e transcreva só ele: o SRT do episódio inteiro traz timecode que não bate com o corte.
2. **Gere a transcrição com timecode em .srt.** Whisper large-v3 rodando local resolve sem custo por minuto; CapCut, Submagic e Opus Clip fazem o mesmo dentro do editor. Se você gravou cada pessoa em uma faixa separada, transcreva faixa por faixa: sobreposição de vozes é o que mais degrada o reconhecimento.
3. **Revise o que a máquina sempre erra.** Nome do convidado, nome do programa, marcas, siglas e números são as palavras que mais importam e as que o reconhecimento mais erra. Em áudio limpo, o erro de um modelo bom fica na casa de poucos por cento e cai quase todo nesses termos.
4. **Reescreva a quebra de linha.** A transcrição vem em blocos longos, boa para leitura, ruim para tela vertical. Refaça a segmentação com os limites da seção abaixo.
5. **Queime a legenda e confira no celular, no mudo.** Assista na vertical, no mudo, com o app por cima, antes de publicar. É nesse teste que aparece a linha escondida atrás do botão de compartilhar.

## Legenda queimada ou legenda automática da plataforma?

Legenda queimada é parte do vídeo: aparece para todo mundo, sempre, com o estilo que você escolheu. Legenda automática da plataforma é texto gerado por cima, que o espectador pode desligar e que não vem ligado por padrão em todo app. Para corte de podcast, queime — e suba também o arquivo de legenda quando a plataforma aceitar.

| | Legenda queimada | Legenda automática da plataforma |
|---|---|---|
| Aparece por padrão | Sempre | Depende do app e do usuário |
| Controle de fonte, cor e posição | Total | Nenhum |
| Pode ser desligada | Não | Sim |
| Vira texto indexável | Não | Sim |
| Risco | Colidir com a interface | Erro de transcrição que você não revisou |

## Quantos caracteres por linha e por quanto tempo cada legenda fica na tela?

Em corte vertical, use no máximo duas linhas de 20 a 25 caracteres e deixe cada cartão de 1 a 4 segundos na tela. A referência clássica de legendagem — 42 caracteres por linha, até 7 segundos por bloco — vem da tela horizontal; na vertical, 42 caracteres em corpo legível não cabem sem invadir as laterais.

O teto de leitura é de cerca de 17 caracteres por segundo: um cartão de 50 caracteres precisa de no mínimo 3 segundos. Se a fala é rápida demais para isso, divida em mais cartões, nunca encolha a fonte. Para 1080×1920, corpo entre 56 e 72 pixels (5% a 7% da altura) é legível em qualquer celular; abaixo de 48 pixels, não.

## Onde posicionar a legenda para não ficar atrás da interface?

Mantenha o texto entre 25% e 70% da altura, a faixa que nenhum dos três apps cobre. Em 1080×1920, isso é uma margem inferior de 700 a 900 pixels — acima dos botões, do perfil e da descrição.

| Plataforma | Área inferior ocupada (vídeo 1080×1920) | Área lateral |
|---|---|---|
| TikTok | ~480 px | ~140 px à direita |
| Reels | ~420 px | ~120 px à direita |
| Shorts | ~300 px | ~130 px à direita |

Os valores são aproximados e mudam a cada atualização de app — por isso a margem folgada vale mais que o número exato.

## Como queimar a legenda com ffmpeg

O `ffmpeg` aplica o SRT direto, sem editor, e é o caminho mais rápido quando o corte já está pronto:

```bash
ffmpeg -i corte.mp4 -vf "subtitles=corte.srt:force_style='Fontname=Inter,Fontsize=64,Bold=1,Outline=4,Shadow=0,Alignment=2,MarginV=700'" -c:v libx264 -crf 18 -c:a copy saida.mp4
```

`Fontsize` e `MarginV` estão em pixels do vídeo de entrada, `Alignment=2` centraliza embaixo e `Outline=4` dá o contorno preto que segura o texto sobre fundo claro. O áudio é copiado sem reencode: o corte sai com o mesmo nível que entrou.

## Checklist antes de publicar

- [ ] Nomes próprios, siglas e números revisados à mão
- [ ] Máximo de 2 linhas e 25 caracteres por linha
- [ ] Nenhum cartão abaixo de 1 segundo
- [ ] Texto acima de 700 px da borda inferior
- [ ] Corte assistido no celular, no mudo, com o app por cima
- [ ] Áudio conferido antes da legenda: transcrição ruim quase sempre começa em captação ruim

## Perguntas frequentes

**Legenda palavra por palavra funciona melhor que frase inteira?**
Funciona em fala rápida e dá ritmo, mas cansa em explicação longa. O padrão seguro é a frase curta de duas linhas, com destaque colorido em uma palavra quando quiser ênfase.

**Preciso legendar o episódio inteiro também?**
Legenda e transcrição são coisas diferentes: o corte pede legenda na tela, o episódio pede transcrição publicada em texto. As duas saem do mesmo arquivo de reconhecimento de fala, com segmentação diferente.

**Legenda errada prejudica o alcance?**
Prejudica a retenção antes de qualquer algoritmo: nome de convidado errado nos primeiros segundos faz o espectador deslizar para o próximo vídeo.

O corte legendado só tem uma função: levar alguém até o episódio inteiro. Na [Speake](https://speake.com.br) esse episódio inteiro mora numa estação sua, com conteúdo exclusivo que a audiência assina por mês para ouvir.
