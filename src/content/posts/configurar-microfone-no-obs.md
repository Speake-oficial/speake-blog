---
title: "Como configurar microfone no OBS para podcast em vídeo"
description: "Configurar microfone no OBS: 48 kHz, picos entre -12 e -6 dBFS e filtros na ordem ganho, supressão de ruído, gate, EQ, compressor e limitador. Valores prontos."
pubDate: 2026-11-20
tags: ["podcasting", "microfones"]
image:
  src: "../../assets/posts/microfone.svg"
  alt: "Ilustração estilizada de microfone"
---

Para configurar o microfone no OBS Studio, ajuste a taxa de amostragem para 48 kHz, regule o ganho na interface até os picos de fala ficarem entre -12 e -6 dBFS no mixer e aplique os filtros nesta ordem: ganho, supressão de ruído, noise gate, equalizador, compressor e limitador. Com o limitador em -1 dB no fim da cadeia, a voz não clipa, e com o compressor em 3:1 a 4:1 o volume fica estável do sussurro à risada.

## Qual a configuração de áudio ideal no OBS para gravar podcast?

A configuração de áudio ideal no OBS para podcast é 48 kHz, mono por microfone e uma faixa de gravação para cada voz. Em **Configurações → Áudio**, mude a taxa de amostragem de 44,1 kHz para 48 kHz, o padrão de vídeo.

Os ajustes essenciais, em ordem:

1. **Configurações → Áudio:** taxa de amostragem 48 kHz; canais em Estéreo (o mix final), mas cada microfone como fonte mono.
2. **Desative os dispositivos globais que você não usa** ("Mic/Aux 2", "Áudio da área de trabalho 2"). Microfone duplicado — um global e outro como fonte de cena — é a causa mais comum de eco e phasing no OBS.
3. **Propriedades avançadas de áudio** (engrenagem do mixer): marque "Mono" no microfone e defina em quais faixas (1 a 6) ele entra.
4. **Configurações → Saída → modo Avançado → Gravação:** formato MKV (ou MP4 híbrido nas versões recentes, que não corrompe se o PC travar), com as faixas 1 a 3 marcadas.
5. **Bitrate do AAC em 320 kbps** para as faixas de gravação. Nas versões atuais, dá para escolher codec sem perda (FLAC ou PCM) em MKV/MOV, o que vale a pena se você for editar o áudio depois.

## Qual o volume certo do microfone no OBS?

O volume certo do microfone no OBS é com os picos de fala entre -12 e -6 dBFS e a média da voz por volta de -18 dBFS. No mixer do OBS, a faixa verde vai até -20 dB, a amarela de -20 a -9 dB e a vermelha acima de -9 dB: a fala normal deve oscilar no amarelo e só encostar no vermelho em risadas.

Regule esse nível **no ganho da interface de áudio ou do microfone USB**, não no fader do OBS. O fader só atenua; se o sinal chega fraco, subir o fader também sobe o ruído. Com um dinâmico como o Shure SM7B ou o Rode PodMic, o ganho costuma ficar entre 55 e 65 dB; um condensador USB precisa de bem menos.

## Em que ordem colocar os filtros de microfone no OBS?

A ordem dos filtros de microfone no OBS importa porque o processamento acontece de cima para baixo. Clique com o botão direito na fonte do microfone → **Filtros** e monte a cadeia assim:

| Ordem | Filtro do OBS | Configuração inicial para voz | Para que serve |
|---|---|---|---|
| 1 | Ganho | 0 a +6 dB, só se o sinal estiver baixo | Corrigir nível antes do resto |
| 2 | Supressão de ruído | RNNoise (ou NVIDIA Broadcast em placas RTX) | Tirar ventilador, ar-condicionado, chiado |
| 3 | Noise gate | Fechar -40 dB, abrir -32 dB, ataque 25 ms, espera 200 ms, liberação 150 ms | Silenciar o microfone entre as falas |
| 4 | Equalizador de 3 bandas ou VST | Corte abaixo de 80 Hz, -2 a -3 dB em 250-400 Hz | Remover grave de mesa e voz "abafada" |
| 5 | Compressor | Razão 3:1 a 4:1, limiar -20 dB, ataque 6 ms, liberação 60-100 ms, ganho de saída +3 a +6 dB | Estabilizar o volume |
| 6 | Limitador | Limiar -1 dB, liberação 60 ms | Impedir clipping digital |

Os valores do noise gate dependem da sala: meça o ruído de fundo com o microfone aberto e em silêncio, e coloque o limiar de fechamento uns 6 a 10 dB acima dele. O equalizador nativo do OBS tem só três bandas; para um passa-altas preciso, use o filtro **VST 2.x Plug-in** com um plugin gratuito como o ReaEQ (pacote ReaPlugs) ou o TDR Nova.

## Supressão de ruído RNNoise ou Speex: qual usar?

A supressão de ruído RNNoise é a melhor escolha para quase todo podcast no OBS, porque usa rede neural e remove ruído constante com menos artefato que o Speex. O Speex gasta menos CPU, mas soa metálico com ruído alto.

Supressão de ruído é correção, não tratamento: ela não remove eco de sala e piora a voz quanto mais trabalho precisa fazer. Microfone a 10-15 cm da boca e ventilador desligado resolvem mais que qualquer algoritmo.

## Como gravar cada microfone em uma faixa separada no OBS?

Para gravar cada microfone em uma faixa separada no OBS, use o modo de saída Avançado e distribua as fontes pelas seis faixas de áudio disponíveis. A faixa 1 fica com o mix completo (o que vai para a live ou para o arquivo final) e as faixas 2, 3 e seguintes recebem cada voz isolada.

Checklist para conferir antes de apertar REC:

- [ ] Em **Propriedades avançadas de áudio**, microfone 1 marcado nas faixas 1 e 2; microfone 2 nas faixas 1 e 3.
- [ ] Áudio do computador (trilha, vinheta) só na faixa 1, ou numa faixa própria.
- [ ] Em **Saída → Gravação**, as faixas 1, 2 e 3 marcadas.
- [ ] Gravação de teste de 30 segundos aberta no DaVinci ou no Audacity, confirmando que cada faixa tem só uma voz.

Faixas separadas permitem refazer a mixagem sem os filtros do OBS. Para a versão em áudio do episódio, normalize o arquivo final para -16 LUFS integrados e true peak em -1 dBTP.

## Perguntas frequentes

### O OBS adiciona latência no microfone?

Os filtros nativos do OBS adicionam poucos milissegundos, imperceptíveis na gravação. Atraso entre áudio e vídeo vem quase sempre da câmera e se corrige no campo "Deslocamento de sincronia" das propriedades avançadas, normalmente com valores entre 50 e 200 ms.

### Os filtros do OBS substituem a edição do áudio?

Os filtros do OBS substituem a edição para lives e cortes rápidos, mas não para o episódio principal. Para o episódio, grave as faixas separadas e trate a voz numa DAW, onde dá para voltar atrás em qualquer ajuste.

Gravado e sincronizado, o episódio precisa de um lugar onde quem acompanha você possa ouvi-lo. Na [Speake](https://speake.com.br) você publica numa estação própria e a sua audiência assina por mês para ter acesso ao conteúdo exclusivo.
