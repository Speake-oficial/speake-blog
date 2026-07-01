---
title: "De-essing: como controlar a sibilância sem destruir a clareza da voz"
description: "Sons de 's' e 'ch' estridentes arruínam gravações de voz — e o de-esser mal configurado resolve um problema criando outro. Aprenda a acertar os parâmetros de uma vez."
pubDate: 2026-07-01
tags: ["mixagem", "narracao"]
image:
  src: "../../assets/posts/narracao.svg"
  alt: "Ilustração de microfone com onda sonora representando narração de voz"
---

Existe um ruído que passa despercebido na gravação, aparece como inofensivo no medidor e só revela seu tamanho real quando você coloca fones e sobe o volume: a sibilância. Os sons de "s", "ch", "z" e "ci" explodem no espectro por volta de 5 a 10 kHz e, em gravação de voz, são um dos maiores culpados por tornar um áudio desconfortável de ouvir — não importa quão boa seja a performance.

A ferramenta para resolver isso é o de-esser. O problema é que mal configurado ele cria um efeito igualmente indesejável: uma voz que lispa, perde articulação ou soa processada. Controlar sibilância sem destruir a clareza é uma questão de parâmetros bem calibrados, não de "jogar um plugin e pronto".

## Por que a sibilância é mais severa em gravação do que na vida real

O ouvido humano tem uma capacidade extraordinária de ignorar sibilância excessiva em conversas presenciais, porque integra som, imagem e contexto ao mesmo tempo. Em gravação, especialmente em close-miking (microfone próximo à boca, como em podcasts e audiolivros), essa compensação desaparece. O microfone captura a pressão sonora direta, sem os amortecedores naturais da percepção humana, e o resultado é que frequências entre 5 e 8 kHz soam muito mais agressivas do que pareciam na hora da gravação.

Microfones condensadores com padrão cardioide — os mais comuns em home studio — tendem a enfatizar justamente essa faixa para dar "presença" e "ar" à voz. A consequência é que sibilâncias que pareciam aceitáveis ao vivo ficam exageradas na gravação.

## Como o de-esser funciona

Um de-esser é essencialmente um compressor de faixa lateral: em vez de reagir ao nível geral do sinal, ele monitora apenas a energia numa banda de frequência específica — a faixa onde a sibilância ocorre — e aplica redução de ganho somente quando essa banda ultrapassa um threshold.

Há dois tipos principais:

- **Wideband:** quando o de-esser detecta sibilância, baixa o volume do sinal inteiro por um momento. É mais simples, mas em vozes onde "s" e outras consoantes frequentes acontecem em sequência, pode criar um efeito de "bombeamento" perceptível.
- **Splitband (ou multiband):** o de-esser só atua na faixa problemática, sem afetar o restante do espectro. É mais cirúrgico e geralmente o tipo preferido para voz.

## Os parâmetros que realmente importam

**Frequência de detecção:** aqui está o erro mais comum. Muita gente deixa o de-esser atuando numa faixa ampla (4–10 kHz) quando a sibilância real da voz costuma concentrar numa faixa bem mais estreita — entre 5 e 7 kHz na maioria dos locutores, mas pode ser diferente dependendo da voz e do microfone. Use o analisador de espectro do seu DAW enquanto o locutor fala frases com muitos "s" e localize o pico exato antes de configurar o de-esser.

**Threshold:** deve ser ajustado de modo que o de-esser só dispare nos picos de sibilância, não durante a frase inteira. Se o gain reduction está ativo o tempo todo, o threshold está baixo demais e você vai suprimir a articulação das palavras mesmo quando não há problema.

**Attack e release:** attack muito rápido corta o início dos "s", tornando as consoantes abafadas. Release muito lento faz a voz soar sem brilho por mais tempo do que necessário. Um ponto de partida razoável para voz: attack entre 1 e 5ms, release entre 50 e 100ms.

## Sibilância que o de-esser não resolve

Quando a sibilância é extremamente severa — locutor com dicção muito sibilante, microfone mal posicionado (diretamente na linha dos lábios em vez de levemente acima ou abaixo), ou ambiente com excesso de reflexões em alta frequência — o de-esser chega até um limite. Nesses casos, parte do trabalho precisa vir da captação: reposicionar o microfone, usar um pop filter com malha dupla ou selecionar um microfone com resposta de frequência menos enfatizada nos agudos faz diferença que nenhum plugin cobre depois.

Na Speake, o controle de sibilância começa na captação — escolha de microfone, posicionamento e acústica do ambiente — e a etapa de mixagem com de-esser é o ajuste fino, não o resgate de uma gravação problemática.

Quer voz limpa desde a origem? [Conheça a Speake](https://speake.com.br).
