---
title: "Gain staging: por que sua gravação já nasce comprometida antes da mixagem"
description: "O erro de nível de entrada que arruína uma gravação antes mesmo de chegar à mesa de mixagem, e como calibrar gain staging em qualquer interface de áudio."
pubDate: 2026-06-21
tags: ["producao-musical", "home-studio"]
---

A maioria dos problemas que aparecem na mixagem não nasceu na mixagem. Nasceu na hora de apertar o botão de gravar, quando o ganho de entrada foi ajustado no olho — "parece que tá bom" — em vez de calibrado de verdade. Isso se chama gain staging, e é provavelmente a etapa mais subestimada de qualquer gravação, seja de voz, instrumento ou podcast.

## O que é gain staging, na prática

Gain staging é o processo de ajustar o nível de um sinal em cada estágio da cadeia — microfone, pré-amplificador, interface, conversor A/D — para que ele chegue ao gravador forte o suficiente para ter boa relação sinal-ruído, mas com headroom suficiente para não distorcer em picos inesperados.

O erro mais comum é pensar em só dois estados: "baixo demais" e "bom". Na real existem três: baixo demais (ruído de fundo aparece quando você sobe o fader na mixagem), no ponto certo, e alto demais (clipping digital, que ao contrário da saturação analógica não tem graça nenhuma — é um corte duro e irreversível na forma de onda).

## Por que clipping digital é pior do que parece

Em gravação analógica, passar um pouco do ponto ainda gera uma saturação relativamente tolerável, às vezes até desejável. Em gravação digital não existe essa zona de conforto: ao ultrapassar 0 dBFS, o conversor simplesmente trunca a amostra. O resultado é uma distorção áspera, com harmônicos feios, que nenhum plugin de mixagem desfaz depois. Não tem "arrumar na mixagem" — o dado já foi perdido no momento da gravação.

Por isso a régua prática é simples: grave com picos entre -18 dBFS e -12 dBFS na maioria dos casos (voz, instrumentos acústicos, podcast). Isso deixa de 12 a 18 dB de headroom acima do nível médio, espaço suficiente para um grito, uma palavra mais forte ou uma batida inesperada não estourarem o gravador.

## O ganho não é só um botão — é uma cadeia

Outro ponto que passa batido: o ganho final que chega ao seu DAW é resultado de vários estágios somados, não de um único controle. Se o pré-amp do microfone está no talo e você compensa baixando o trim da interface, ou vice-versa, o ruído de cada estágio se acumula de forma diferente. A regra geral é: dê ao microfone e ao pré-amp ganho suficiente para captar um sinal saudável, e use o trim da interface só para ajuste fino — não para resolver um pré-amp mal calibrado.

Isso importa especialmente em home studios com interfaces de entrada dupla, onde é comum gravar voz e violão no mesmo take com ganhos completamente diferentes entre os dois canais, sem perceber até a hora de balancear os dois na mixagem e descobrir que um canal tem o triplo de ruído de fundo do outro.

## Um teste rápido antes de gravar qualquer coisa

Peça para quem vai ser gravado fazer a parte mais intensa do material — o grito, a nota mais aguda, a explosão de consoantes — antes de começar a gravação de verdade. Calibre o ganho nesse momento, não na fala mais calma. É o pico, não a média, que decide se você vai ter clipping.

Gravações bem calibradas na entrada economizam horas de mixagem depois, porque sobra menos para "salvar" e mais espaço para decisões criativas. É um dos motivos pelos quais a Speake trata a etapa de captação com tanto cuidado quanto a mixagem em si — gravação malfeita limita o resultado final, não importa quão boa seja a mesa depois.

Quer uma gravação calibrada desde o primeiro take? [Conheça a Speake](https://speake.com.br).
