---
title: "Plugins gratuitos para mixagem: a cadeia completa"
description: "Quais plugins gratuitos para mixagem instalar, em que ordem usá-los no canal de voz e onde baixar sem risco de malware — a cadeia inteira sem gastar nada."
pubDate: 2026-09-11
tags: ["mixagem", "producao-musical"]
image:
  src: "../../assets/posts/mixagem.svg"
  alt: "Ilustração estilizada de faders de uma mesa de mixagem"
---

Dá para montar uma cadeia de mixagem inteira com plugins gratuitos: TDR Nova (EQ dinâmico), TDR Kotelnikov (compressor), ReaPlugs (gate e utilitários), Valhalla Supermassive (reverb e delay), LoudMax ou Limiter№6 (limitador) e Youlean Loudness Meter (medição de LUFS). São seis downloads, zero real gasto, e cobrem tudo o que uma voz ou uma música precisa antes de ir ao ar. O que separa um mix bom de um ruim, nessa faixa, é a ordem e o ajuste — não o preço do plugin.

## Plugin gratuito serve para mixagem profissional?

Serve. A diferença de qualidade sonora entre um EQ gratuito bem escrito e um EQ de R$ 900 é pequena o bastante para não aparecer num episódio de podcast, numa narração ou na maioria das mixagens musicais. O que os pagos entregam a mais é conveniência: presets, análise visual mais rica, oversampling automático, suporte e atualização garantida.

O gargalo real de quem começa quase nunca é o plugin. É sala não tratada, monitoração ruim e decisão de ganho errada antes do primeiro processador. Trocar um compressor gratuito por um pago não corrige nada disso.

## Quais plugins gratuitos para mixagem instalar primeiro?

Seis, nesta ordem de prioridade. Todos com versão gratuita completa, sem marca d'água, sem limite de tempo:

| Função | Plugin gratuito | Por que ele |
|---|---|---|
| EQ (estático e dinâmico) | TDR Nova | 4 bandas paramétricas que viram bandas dinâmicas com um clique — resolve EQ, de-esser e compressão multibanda leve no mesmo plugin |
| Compressor | TDR Kotelnikov | Detecção de release dupla, transparente em voz e em bus de mix |
| Gate, análise e utilitários | ReaPlugs (Cockos) | Pacote com ReaEQ, ReaComp, ReaGate, ReaFIR e ReaDelay; o ReaFIR ainda serve de redutor de ruído por impressão espectral |
| Reverb e delay | Valhalla Supermassive | Vários algoritmos, de sala curta a cauda gigante, com CPU baixa |
| Limitador | LoudMax ou Limiter№6 | Limitação simples e previsível no final da cadeia |
| Medição | Youlean Loudness Meter 2 | LUFS integrado, short-term e true peak na versão gratuita |

Um aviso sobre o ReaPlugs: o pacote é distribuído em VST2. DAWs que já removeram suporte a VST2 não vão carregá-lo — nesse caso, troque o gate pelo MGate do MFreeFXBundle da MeldaProduction, que sai em VST3 e AU.

## Em que ordem colocar os plugins gratuitos no canal de voz?

Do primeiro ao último slot do canal, para podcast, narração ou audiolivro:

1. **Filtro passa-alta** (TDR Nova, banda 1 em high-pass): 80 Hz para voz grave, 100 Hz para voz aguda. Corta ruído de mesa, ar-condicionado e plosiva residual.
2. **Gate ou redução de ruído** (ReaGate ou ReaFIR em modo subtract): threshold uns 6 dB abaixo do trecho mais baixo da fala, release 150-300 ms para não cortar o fim das palavras.
3. **EQ subtrativo** (TDR Nova): corte estreito onde a sala ressoa, geralmente entre 200 e 400 Hz.
4. **Compressor** (TDR Kotelnikov): ratio 3:1, ataque 10-20 ms, release automático, mirando 3 a 6 dB de redução de ganho nos picos.
5. **De-esser** (TDR Nova, banda dinâmica entre 5 e 8 kHz, threshold ajustado até o "s" parar de saltar).
6. **EQ aditivo** (TDR Nova ou TDR VOS SlickEQ): realce largo de 2 a 3 dB em 3-5 kHz para inteligibilidade, e de 10 kHz para cima se a voz soar abafada.
7. **Reverb curto em envio** (Valhalla Supermassive, mix 8-15%, decaimento abaixo de 1 s) — só se o material pedir; narração costuma ficar melhor seca.
8. **Limitador** (LoudMax) no bus final, teto em -1 dBTP.
9. **Medição** (Youlean) no último slot do master: -16 LUFS integrado para episódio falado, -14 LUFS para material musical.

Em música, os passos 2 e 5 saem e o Kotelnikov volta no bus de mix, em 1-2 dB de redução de ganho apenas.

## VST, VST3, AU ou AAX: qual versão baixar?

Baixe VST3 se você usa Reaper, Ableton Live, FL Studio, Studio One, Cubase ou Cakewalk no Windows. No macOS, Logic e GarageBand só carregam AU — VST3 não aparece na lista de plugins. Pro Tools é o caso isolado: só aceita AAX, e boa parte dos plugins gratuitos não tem build AAX, o que explica por que quem usa Pro Tools acaba recorrendo mais aos plugins nativos da própria DAW.

VST2 é o formato legado. Ainda funciona em várias DAWs, mas está sendo descontinuado — evite depender dele em projeto novo.

## Onde baixar plugins gratuitos para mixagem com segurança?

Sempre no site oficial do desenvolvedor: tokyodawn.net (TDR), reaper.fm/reaplugs (Cockos), valhalladsp.com, loudmax.blogspot.com, youlean.co, meldaproduction.com. Sites agregadores de "VST grátis" com botão de download próprio costumam empacotar instalador modificado.

Plugin pago "gratuito" via crack é a principal via de infecção em máquinas de quem grava e mixa: o instalador pede desativação do antivírus, e o que entra junto costuma ser minerador ou infostealer. Com uma cadeia gratuita legítima cobrindo EQ, compressão, gate, reverb, limitação e medição, não existe motivo técnico para correr esse risco.

## Perguntas frequentes

**Plugin gratuito pesa mais na CPU?**
Não como regra. Kotelnikov, Nova e Supermassive são leves. O que costuma pesar é plugin com oversampling alto ligado ou emulação analógica com modelagem pesada — e isso acontece igual em plugin pago.

**Vou precisar pagar upgrade depois?**
Não para funcionar. TDR e Melda vendem versões GE/Pro com bandas extras, mid-side e oversampling, mas as gratuitas não expiram nem perdem recurso com o tempo.

**Dá para usar esses plugins no celular ou no iPad?**
Não. VST3 e AU de desktop não rodam em iOS ou Android; no iPad o formato equivalente é o AUv3, e o catálogo gratuito é bem menor.

Cadeia montada, mix fechado e nenhum real gasto em plugin — falta o episódio chegar a quem paga por ele. Na [Speake](https://speake.com.br) você cria uma estação, publica conteúdo exclusivo e recebe assinatura mensal da sua audiência, transformando o que você mixou em receita recorrente.
