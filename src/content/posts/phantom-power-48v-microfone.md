---
title: "Phantom power (48V): o que é, quem precisa e o que pode ser danificado se você errar"
description: "O que é phantom power, por que condensadores precisam dela, quais microfones são imunes e como a sequência errada de conexão pode destruir um ribbon ou uma interface."
pubDate: 2026-08-07
tags: ["equipamentos-de-audio", "microfones"]
image:
  src: "../../assets/posts/microfone.svg"
  alt: "Microfone em suporte de estúdio"
---

Se você já usou uma interface de áudio, viu o botão "48V" ou "Phantom" e simplesmente ativou sem pensar muito. Na maioria das vezes, não acontece nada de errado — mas a sequência errada ou o equipamento errado na hora certa pode danificar um microfone caro ou introduzir ruído e cliques em uma gravação. Entender o que é phantom power e quando ela é necessária (ou perigosa) é parte do básico que todo home studio precisa ter claro.

## O que é phantom power

Phantom power é uma tensão de 48 volts DC transmitida pelo cabo XLR junto com o sinal de áudio. O padrão IEC 61938 define que ela é entregue igualmente nos pinos 2 e 3 do conector XLR, com o retorno pelo pino 1 (a blindagem). Como a tensão é a mesma nos dois pinos de sinal, ela é "fantasma" para o áudio em modo diferencial — o circuito de áudio soma a diferença entre os pinos 2 e 3, e como as 48V estão iguais nos dois, elas se cancelam e não entram no sinal.

O resultado prático: você pode enviar 48V pelo mesmo cabo que carrega o áudio sem corromper o som — desde que o equipamento na outra ponta seja balanceado.

## Quem precisa de phantom power

Microfones condensadores dependem de phantom power para funcionar. O princípio de funcionamento deles exige uma carga elétrica constante no diafragma (no caso dos condensadores de eletreto de back-electret, os FETs precisam de alimentação). Sem os 48V, o condensador simplesmente não produz sinal.

Isso vale para condensadores de diafragma grande, de diafragma pequeno e para os modelos de eletreto profissionais presentes em microfones de lapela e headsets de estúdio. Se a interface ou o pré-amp não oferece phantom power, você precisa de um fornecedor externo — um pré com 48V embutido ou um módulo de phantom separado.

## Quem não precisa (e funciona bem sem)

Microfones dinâmicos de bobina móvel — como o Shure SM7B, o SM58, o Sennheiser MD 421 — não precisam de phantom power e não são danificados por ela quando a ligação é feita com cabo XLR balanceado. As 48V chegam iguais nos pinos 2 e 3 e não geram corrente pelo transdutor dinâmico, que está entre esses dois pinos de forma diferencial.

Isso significa que você pode deixar a phantom power ativada na interface e plugar um dinâmico sem problema — desde que o cabo seja XLR balanceado e esteja em bom estado.

## O risco real: microfones de fita passivos

Aqui está onde a phantom power pode causar dano irreversível. Ribbons passivos — microfones de fita sem eletrônica interna — são vulneráveis a qualquer desequilíbrio de tensão entre os pinos 2 e 3. Se você ativar a phantom power com um ribbon passivo conectado, ou conectar o ribbon com a phantom já ativa e o cabo tiver qualquer assimetria de resistência ou um pino fazendo contato antes do outro (o que acontece em conectores desgastados), uma corrente atravessa a fita.

A fita de um ribbon é uma folha metálica extremamente fina — geralmente alumínio, com 2 a 4 mícrons de espessura. Corrente passando por ela pode destruí-la. Não é uma degradação gradual: é um dano imediato que inutiliza o microfone.

A regra é simples e não tem exceção para ribbons passivos: **desative a phantom power antes de conectar ou desconectar, e aguarde alguns segundos para os capacitores descarregarem antes de conectar o cabo.**

## Ribbons ativos: a exceção

Ribbons com eletrônica interna ativa — como o Royer R-122, o AEA R84A e alguns modelos da sE Electronics — têm um circuito que isola a fita da phantom power. Eles são projetados para trabalhar com 48V e geralmente precisam dela para alimentar o buffer interno. Antes de ativar phantom em qualquer ribbon, confirme pelo manual se o modelo é ativo ou passivo.

## O risco subestimado: cabos desbalanceados e adaptadores

Usar um adaptador XLR para P10 (TRS ou TS) ou um cabo desbalanceado entre a interface e qualquer equipamento com phantom power ativa é um risco. No adaptador XLR-TS (mono desbalanceado), o pino 3 vai para a blindagem — criando um desequilíbrio que coloca os 48V em contato direto com partes do circuito que não foram projetadas para recebê-los. Isso pode danificar pré-amps externos, efeitos em rack ou instrumentos que tenham conector XLR.

Para instrumentos com saída DI ou equipamentos de linha, a phantom power deve estar desativada. A exceção é quando o fabricante especifica explicitamente que o equipamento aceita phantom na entrada.

## A sequência correta para não perder equipamento

1. Conecte o cabo com a phantom desativada.
2. Ative a phantom power e aguarde 1 a 2 segundos para a tensão estabilizar antes de abrir o canal no mix.
3. Para desconectar: feche o fader ou mute o canal, desative a phantom power, aguarde alguns segundos, depois desconecte o cabo.

Esse procedimento elimina os "cliques" que aparecem na gravação quando a phantom é ativada com o canal aberto, e protege qualquer equipamento sensível ao desequilíbrio transitório no momento da conexão.

---

Na Speake, a cadeia de pré-amplificação é configurada de acordo com o microfone e o conteúdo gravado — condensadores, ribbons e dinâmicos têm tratamentos diferentes no setup. Se você tem dúvidas sobre como configurar sua interface ou qual microfone funciona com seu pré-amp, [fale com a Speake](https://speake.com.br).
