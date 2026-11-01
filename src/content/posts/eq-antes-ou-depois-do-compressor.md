---
title: "EQ antes ou depois do compressor? A ordem certa"
description: "EQ antes ou depois do compressor: corte subtrativo antes, brilho depois. Veja a ordem completa da cadeia de voz e os valores de cada plugin."
pubDate: 2026-11-01
tags: ["mixagem", "producao-musical"]
image:
  src: "../../assets/posts/mixagem.svg"
  alt: "Faders e knobs estilizados de uma mesa de mixagem"
---

EQ antes ou depois do compressor: os dois, com funções diferentes. O EQ **subtrativo** (corte de graves, de ruído e de ressonâncias) vai **antes** do compressor, para que o compressor não reaja a frequências que você já decidiu jogar fora. O EQ **aditivo** (presença, brilho, corpo) vai **depois**, para que o compressor não desfaça o realce que você acabou de aplicar. A ordem padrão de uma cadeia de voz é: gate → EQ subtrativo → compressor → de-esser → EQ aditivo → saturação → limitador, com reverb e delay em envio paralelo.

## Por que a ordem dos plugins muda o som?

A ordem dos plugins muda o som porque cada plugin processa o sinal que o anterior entregou, e não o sinal original. Um compressor não "ouve" sua voz: ele mede o nível que chega na entrada dele e decide quanto abaixar. Se chega um rumble de 40 Hz ou um estouro de plosiva, é nisso que ele reage — e a voz inteira abaixa junto.

O caso mais comum de cadeia mal ordenada é compressor antes do corte de graves. A energia abaixo de 100 Hz costuma ter 6 a 10 dB mais nível que a faixa da inteligibilidade (1–4 kHz), então cruza o threshold primeiro: o compressor bombeia em cada "p" e "b", e você culpa o compressor por um problema de ordem.

## Qual EQ vai antes do compressor?

Antes do compressor entra só o EQ de limpeza, com cortes — nada de realce. São três movimentos, nessa ordem:

1. **High-pass filter** em 80–100 Hz para voz masculina e 100–120 Hz para voz feminina, com inclinação de 12 ou 18 dB/oitava. Suba a frequência até ouvir a voz afinar e volte um passo.
2. **Corte de lama** entre 200 e 400 Hz, de -2 a -4 dB, com Q largo (0,7 a 1,0). É o que resolve a maior parte da sensação de voz embolada.
3. **Ressonância pontual**, se houver: Q estreito (6 a 10), corte de -3 a -6 dB, em geral entre 700 Hz e 1,2 kHz em salas pequenas. O método de varredura está detalhado no guia de [EQ subtrativo](/posts/eq-subtrativo-mixagem/).

Com esses cortes feitos, o compressor passa a reagir à fala, não ao ambiente. Na prática, você consegue a mesma redução de ganho com 3 a 4 dB menos de compressão.

## Qual EQ vai depois do compressor?

Depois do compressor vão os realces: presença em 2,5–4 kHz (+1,5 a +3 dB, Q 1,0), ar acima de 8 kHz (+1 a +2 dB em shelf) e, se a voz soar fina, um pequeno reforço de corpo em 150–250 Hz (+1 a +2 dB). O motivo é mecânico: o compressor reduz o que passa do threshold, então qualquer frequência que você levante antes dele é parcialmente apagada por ele.

Há uma exceção intencional: realçar antes do compressor faz ele reagir mais àquela região e devolve um som mais "colado", vintage. É escolha de cor, não o padrão.

## O de-esser vai antes ou depois do compressor?

O de-esser vai **depois** do compressor na maior parte dos casos, porque o compressor e o make-up gain levantam as sibilantes junto com o resto, e o "s" só mostra o tamanho real depois disso. Posicione-o entre 5 e 8 kHz, com 3 a 6 dB de redução nos picos de sibilância.

Quando a gravação tem sibilância severa, use dois estágios: um de-esser leve antes do compressor (2 a 3 dB) para o compressor não ser disparado pelos "s", e o de-esser principal depois. O ajuste fino de frequência e modo (split band vs. wideband) está em [de-essing](/posts/de-essing-sibilancia-voz/).

## Qual a ordem completa da cadeia de voz?

| # | Plugin | Função | Ponto de partida |
|---|---|---|---|
| 1 | Gate / expander | Fecha o ruído entre as frases | Threshold -45 dBFS, range 10–20 dB |
| 2 | EQ subtrativo | Tira grave, lama e ressonância | HPF 80–100 Hz, -3 dB em 300 Hz |
| 3 | Compressor | Nivela a dinâmica da fala | 3:1, 3–6 dB de redução, attack 10 ms, release 80 ms |
| 4 | De-esser | Controla a sibilância | 5–8 kHz, 3–6 dB nos picos |
| 5 | EQ aditivo | Dá presença e brilho | +2 dB em 3 kHz, +1,5 dB shelf em 8 kHz |
| 6 | Saturação | Densidade e harmônicos | Drive baixo, mix 10–20% |
| 7 | Limitador | Impede picos acima do teto | Ceiling -1 dBTP |

Reverb e delay não entram nessa fila: vão em canais de envio, alimentados depois do EQ aditivo, para que a cauda do efeito já carregue o timbre final da voz. Se o reverb estiver antes do compressor, o compressor comprime a cauda e ela "respira" de forma estranha.

A regra que fecha a lógica: correção (gate, EQ subtrativo, de-esser) antes de caráter (saturação, reverb), e correção de pitch antes da saturação — o algoritmo de afinação erra quando recebe harmônicos criados por distorção.

## Perguntas frequentes

**A ordem é a mesma na masterização?**
Não. Na masterização a cadeia é EQ → compressor de mix bus → EQ de ajuste → limitador, com movimentos muito menores (0,5 a 1,5 dB por banda) e 1 a 2 dB de redução de ganho, porque você está tratando uma mistura pronta e não uma voz isolada.

**Posso usar dois compressores na mesma voz?**
Sim, e costuma soar melhor que um só. Um primeiro em 2:1 com 2–3 dB de redução nivela a fala, e um segundo mais rápido pega os picos restantes. O ajuste de cada etapa está em [compressor de voz](/posts/compressor-de-voz-configuracao/).

**Onde entra a redução de ruído por plugin?**
Antes de tudo, inclusive antes do gate, porque os algoritmos de redução de ruído aprendem o perfil do ruído a partir do sinal cru — compressão aplicada antes deles bagunça esse perfil e aumenta o artefato.

Cadeia resolvida e voz na frente do mix, o passo seguinte não é técnico: é decidir onde esse áudio vive. Na [Speake](https://speake.com.br) você cria uma estação, publica episódios exclusivos e recebe assinatura mensal de quem faz questão de ouvir.
