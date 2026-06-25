---
title: "Sidechain: como a trilha sonora do podcast some quando você fala"
description: "Como funciona a compressão sidechain (ducking) para abaixar automaticamente a música de fundo sempre que há voz, sem precisar desenhar a automação à mão em cada episódio."
pubDate: 2026-06-25
tags: ["mixagem", "podcasting"]
image:
  src: "../../assets/posts/mixagem.svg"
  alt: "Ilustração estilizada de faders de uma mesa de mixagem"
---

Todo episódio com música de abertura, transição ou trilha de fundo tem o mesmo problema: a música precisa existir, mas não pode competir com a voz. A solução amadora é desenhar automação de volume à mão, ponto por ponto, em cada lugar onde a fala entra. A solução que qualquer produtora profissional usa é sidechain compression — um compressor na faixa de música que reage à faixa de voz e abaixa o volume automaticamente, sem você tocar em um único fader depois de configurado.

## O que é sidechain, de fato

Um compressor normal reduz o volume de uma faixa quando o sinal **dela mesma** passa de um limiar (threshold). No sidechain, você separa essas duas coisas: o compressor continua na faixa de música, mas o sinal que ele "escuta" para decidir quando comprimir vem de outra faixa — a de voz. Toda DAW atual (Reaper, Logic, Ableton, Audition, Pro Tools) tem essa opção, geralmente chamada de "sidechain input" ou "external input" no próprio plugin de compressor.

Na prática: voz entra → compressor da música detecta o sinal pela entrada sidechain → música é empurrada para baixo por um instante → voz para → música volta ao volume normal. É o efeito de "respiração" que você ouve em quase todo podcast, programa de rádio e até em música eletrônica (o "duck" rítmico de kick contra baixo é a mesma técnica).

## Configurando sem complicar

1. **Insira o compressor na faixa de música**, não na de voz.
2. **Roteie a faixa de voz como entrada sidechain** desse compressor — em algumas DAWs isso é um envio (send) interno, em outras é selecionar a faixa direto no plugin.
3. **Threshold baixo, ratio alto** (4:1 a 8:1) para que qualquer fala dispare o ducking de forma perceptível, mas não exagerada.
4. **Attack rápido** (1-10ms) para a música abaixar quase instantaneamente quando a voz começa.
5. **Release de 150-400ms** — rápido demais soa "bombado" e artificial, lento demais deixa a música "afogada" mesmo depois que a voz já parou.
6. **Redução de 6-10dB** é o intervalo que funciona para a maioria dos casos. Mais que isso e a música praticamente desaparece, o que pode ser o efeito desejado em uma abertura, mas é exagero como trilha de fundo contínua.

## O erro mais comum: aplicar isso em cima de tudo

Sidechain ducking funciona bem para música de fundo contínua atrás de fala. Não é a ferramenta certa para todo episódio com efeitos sonoros, jingles ou cortes pontuais — nesses casos, um corte manual de volume costuma soar mais natural do que um compressor reagindo em tempo real a cada sílaba. Use automação manual quando o momento é único e sidechain quando o padrão se repete o episódio inteiro (intro/outro com trilha, narração com música ambiente constante).

Outro erro é configurar o ducking ouvindo só o trecho de teste e esquecer de revisar com o episódio completo rodando — silêncios entre frases e respiração podem disparar o release no momento errado, criando um "bombeamento" perceptível que cansa o ouvido em episódios longos.

## Quando vale automatizar versus terceirizar

Para quem já tem um template de DAW configurado, montar esse sidechain uma vez e reaproveitar a cadeia em todo episódio novo é trabalho de minutos. O problema aparece quando o podcast tem múltiplos formatos de trilha (abertura, transições, trilha de fundo em entrevistas) e cada um precisa de um ajuste de ratio e release diferente — isso deixa de ser configuração única e passa a ser parte do trabalho de mixagem de cada episódio. A Speake cuida dessa etapa dentro do serviço de pós-produção de podcast, ajustando ducking, EQ e nível por episódio para que a trilha nunca compita com a fala.

Quer ajuda profissional com isso? [Conheça a Speake](https://speake.com.br).
