---
title: "Piso de ruído: qual nível é aceitável para gravar voz"
description: "O piso de ruído aceitável para voz é -60 dBFS RMS ou menor nos silêncios. Veja o alvo por tipo de projeto, como medir em 5 passos e como baixar sem gastar nada."
pubDate: 2026-11-07
tags: ["home-studio", "equipamentos-de-audio"]
image:
  src: "../../assets/posts/home-studio.svg"
  alt: "Ilustração estilizada de um home studio com microfone e tratamento acústico"
---

O piso de ruído aceitável para gravação de voz é **-60 dBFS RMS ou mais baixo** medido nos trechos de silêncio, com o ganho na posição real de uso. Esse é o limite que a ACX cobra em audiolivro e que a maioria dos distribuidores copiou. Para podcast falado, até -50 dBFS passa sem incomodar; acima de -45 dBFS o chiado fica audível assim que o episódio é normalizado para -16 LUFS. Em home studio, -65 a -75 dBFS é o resultado realista de um canto bem escolhido com microfone dinâmico.

## O que é piso de ruído na gravação de voz?

O piso de ruído é o som residual que o microfone e a interface entregam quando ninguém fala: ar-condicionado, geladeira, cooler de notebook, trânsito, mais o ruído eletrônico do preamp. Mede-se em dBFS (0 dBFS é o teto digital) e sempre nos silêncios, nunca na média do arquivo inteiro.

Ele não é a mesma coisa que o ruído acústico da sala, medido em dB SPL ponderado em A — 30 a 35 dBA num quarto silencioso de madrugada, 45 a 50 dBA com o ar ligado. O piso em dBFS é o que sobra desse ambiente depois do microfone, da distância da boca e do ganho.

## Qual piso de ruído é aceitável para podcast, narração e audiolivro?

O alvo muda conforme o destino, porque cada formato tolera uma quantidade diferente de fundo audível. Audiolivro é o mais rígido: ali o piso de ruído é critério de aprovação.

| Uso | Alvo no silêncio | Limite tolerável |
| --- | --- | --- |
| Audiolivro (ACX e distribuidores) | -65 dBFS RMS ou menor | -60 dBFS RMS (acima reprova) |
| Narração e locução comercial | -65 a -70 dBFS RMS | -60 dBFS RMS |
| Podcast falado | -55 a -60 dBFS RMS | -45 a -50 dBFS RMS |

Abaixo de -80 dBFS é inalcançável em casa. As demais medições de entrega estão em [especificações de entrega de audiolivro](/posts/especificacoes-entrega-audiolivro/).

## Como medir o piso de ruído da sua sala em 5 passos

Medir piso de ruído leva dois minutos e não exige plugin pago. O erro mais comum é medir com o ganho fora da posição de uso: o número só vale se a cadeia estiver igual à da gravação real.

1. **Ajuste o ganho como você grava de verdade.** Picos perto de -12 dBFS em 48 kHz/24 bit, e não mexa mais no ganho.
2. **Grave 10 a 15 segundos de tom de sala.** Silêncio total, sem se mexer e sem respirar perto da cápsula.
3. **Desligue o processamento.** Noise gate, redução de ruído e expansor falseiam a medição; mede-se o sinal cru.
4. **Leia o RMS do trecho silencioso.** No Audacity, use Analisar → Contraste ou o plugin ACX-Check, que mostra pico, RMS e NoiseFloor de uma vez; em Reaper, Audition, Logic ou Pro Tools, qualquer medidor de RMS em seleção resolve.
5. **Repita em dois horários.** O mesmo quarto às 14h e às 23h costuma dar 8 a 12 dB de diferença — é o que define seu horário de gravação.

## Por que o piso de ruído sobe quando você normaliza para -16 LUFS?

Porque normalização é ganho aplicado ao arquivo inteiro, e ganho não distingue voz de ruído. Um episódio em -22 LUFS integrado que vai para -16 LUFS subiu 6 dB inteiros: o piso de ruído de -58 dBFS passou a -52 dBFS. O chiado apareceu na normalização, não na captação — é por isso que gravar "baixinho para não estourar" piora o fundo ([alvos de LUFS por destino](/posts/loudness-lufs-podcast-streaming/)).

## Como baixar o piso de ruído sem comprar equipamento

A maior parte do ganho vem de decisão, não de compra: gravar de madrugada resolve de graça parte do que R$ 500 a R$ 2.000 de tratamento acústico resolveriam. Por ordem de impacto:

- **Aproxime-se do microfone.** Falar a 10-15 cm de um dinâmico em vez de 40 cm aumenta a voz cerca de 10 dB sem mexer no ruído da sala.
- **Desligue as fontes.** Ar-condicionado, ventilador, geladeira no mesmo circuito, cooler de notebook: cada aparelho vale 3 a 8 dBA.
- **Prefira dinâmico cardioide em sala ruim** — capta menos ambiente que um condensador no mesmo ponto ([comparação](/posts/microfone-dinamico-ou-condensador/)).
- **Cheque o preamp se o microfone é pouco sensível.** Quem precisa de +55 a +60 dB de ganho expõe o ruído da interface, de -120 a -125 dBu de EIN.

## Piso de ruído alto tem conserto na edição?

Parcialmente, e com custo. Redução de ruído funciona bem até 6 a 10 dB de atenuação em voz limpa; acima disso surgem artefato metálico nas consoantes e perda de corpo — um arquivo com piso em -45 dBFS não chega a -65 dBFS sem estragar a voz. Noise gate não resolve, apenas esconde: o fundo passa a "ligar e desligar" a cada frase ([até onde o plugin resolve](/posts/reducao-ruido-fundo-gravacao-voz/)).

## Perguntas frequentes

**Piso de ruído se mede em RMS ou em pico?** Em RMS, porque o que incomoda é a energia contínua do fundo, não um estalo isolado. A régua de audiolivro cita "-60 dB RMS" por isso.

**Dá para passar na régua de audiolivro gravando em quarto comum?** Dá, e é assim que a maioria dos títulos independentes é gravada. Decidem a distância do microfone, o horário e o que está desligado — não o preço do equipamento.

**E se o piso ficar abaixo de -85 dBFS?** Desconfie: quase sempre é noise gate ligado na captação, e fundo artificialmente mudo é sinalizado tanto quanto fundo alto.

Sala medida e nível resolvido, falta destino para o que você gravou. Na [Speake](https://speake.com.br) você mantém uma estação própria com episódios exclusivos e recebe assinatura mensal de quem acompanha, em vez de depender de audiência avulsa.
