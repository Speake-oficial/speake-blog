---
title: "Noise gate na prática: como configurar threshold, attack e release sem matar o som"
description: "Quando usar noise gate em voz, bateria e instrumentos — e o que ajustar em cada parâmetro para isolar o sinal sem criar cortes abruptos ou artefatos."
pubDate: 2026-07-26
tags: ["mixagem", "home-studio"]
---

O noise gate é um dos processadores mais simples em conceito e mais fáceis de usar errado na prática. A ideia é direta: o gate abre quando o sinal está acima de um threshold e fecha quando cai abaixo. O problema começa quando alguém posiciona o threshold no lugar errado ou deixa o attack e o release no padrão do plugin sem ajustar.

## Threshold: onde a maioria erra primeiro

O threshold define o ponto de chaveamento — abaixo dele, o gate fecha; acima, o gate abre. O erro mais comum é colocar o threshold alto demais, no limite do sinal de ruído, e acabar cortando o início e o final das sílabas. Isso aparece como um "engolir" de palavras no começo e um corte brusco no final da frase — o sinal sobe, o gate ainda está reagindo, e o transiente já foi.

A calibração correta: encontre a faixa de ruído com o sinal em silêncio — voz em pausa, guitarra parada, baquetas paradas. Meça o pico desse ruído e posicione o threshold entre 3 e 6 dB acima desse ponto. Assim o gate abre com folga quando o sinal real chega, sem exigir um nível alto para acionar.

## Attack e release: onde o gate se torna auditível

**Attack** é o tempo que o gate leva para abrir completamente depois que o sinal cruza o threshold. Um attack lento corta transientes — o "p" de uma palavra, a batida do kick, o ataque da guitarra. Um attack rápido demais pode criar um clique audível na abertura quando o sinal entra abruptamente.

Para voz: attack entre 1 ms e 5 ms funciona na maioria dos casos. Para kick e snare: 0,1 ms a 2 ms — rápido o suficiente para não perder o transiente. Para instrumentos com ataque gradual, como violão e synth: um attack de 5 a 10 ms evita o clique sem perder o início do som.

**Release** é o tempo que o gate leva para fechar depois que o sinal cai abaixo do threshold. Release curto demais cria o efeito de "chatter" — o gate fica abrindo e fechando em sinais próximos ao threshold, como sílabas terminando em fricativas ou notas de baixo com sustain irregular. Release longo demais deixa o ruído vazar mais do que devia.

Para voz: release entre 50 ms e 200 ms, dependendo do estilo de locução. Para bateria: valores mais curtos, entre 20 ms e 80 ms, para o gate fechar antes da próxima batida. A regra prática: comece com release longo, ouça onde o ruído reaparece entre frases e encurte até sumir.

## Hold: o parâmetro que pouca gente ajusta

O hold define quanto tempo o gate permanece aberto depois que o sinal cai abaixo do threshold — antes de começar a contar o release. É útil especialmente para voz com pausas dentro de frases longas: sem hold, o gate pode fechar antes do final da fala e reabrir de forma abrupta. Com hold ajustado, o gate aguarda mais antes de iniciar o fechamento, eliminando o chatter em passagens dinâmicas.

## Range: gate suave x fechamento total

Muitos plugins têm um parâmetro range, que define quanto o sinal é atenuado quando o gate "fecha" — ao invés de cortar completamente, atenua em X dB. Um range de -20 dB deixa um resíduo de ruído reduzido quando o gate está fechado. Isso é útil para voz gravada em ambientes com algum ruído de fundo: o corte total pode soar artificial, porque o silêncio absoluto entre frases chama atenção tanto quanto o ruído. Uma atenuação de 15 a 20 dB resolve o problema sem criar o efeito de câmara anecóica.

## Quando o gate não é a solução

Gate não resolve ruído severo. Se o ruído está dentro de 6 a 10 dB do sinal útil — voz fraca ou ambiente muito ruidoso —, o gate vai ou cortar parte da voz junto com o ruído, ou deixar ruído audível quando aberto. Nesse caso, o problema é de gravação: distância do microfone, tratamento acústico insuficiente ou ruído eletrônico da interface. A ferramenta certa para ruído embedded no sinal é redução espectral (iZotope RX, por exemplo), não um gate.

A Speake inclui revisão de processamento dinâmico — incluindo gate e de-essing — nos serviços de mixagem e masterização de voz, justamente para garantir que o isolamento de ruído não comprometa a naturalidade da locução.

Quer ajuda profissional com o processamento de áudio do seu projeto? [Conheça a Speake](https://speake.com.br).
