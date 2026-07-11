---
title: "Latência e buffer size: como configurar sua interface para gravar e mixar sem travar"
description: "Buffer size baixo demais trava o DAW. Buffer alto demais atrapalha a gravação. Como encontrar o ponto certo e por que a mesma interface precisa de ajustes diferentes dependendo do que você está fazendo."
pubDate: 2026-07-11
tags: ["home-studio", "producao-musical"]
image:
  src: "../../assets/posts/home-studio.svg"
  alt: "Representação de um setup de home studio com interface de áudio"
---

Se você já gravou voz ou instrumento num home studio e sentiu o que parece ser um eco de você mesmo no fone — sua voz chega no ouvido uma fração de segundo depois de você falar — o culpado tem nome: latência. E se você já tentou resolver isso diminuindo um parâmetro no DAW até o áudio começar a estalar, travar ou cortar, você já esbarrou no buffer size. Esses dois conceitos vivem juntos e se antagonizam. Entender a relação entre eles é o que separa uma sessão de gravação fluida de uma tarde de frustração.

## O que é latência, de verdade

Latência é o tempo que o sinal leva desde a entrada da interface (microfone, instrumento) até chegar ao monitor ou fone como áudio processado. Esse processo passa por várias etapas: a conversão analógico-digital, o buffer de entrada, o processamento do DAW e dos plugins, o buffer de saída, a conversão digital-analógica.

Cada etapa consome tempo. A soma de todas elas é a latência total do sistema. Em termos práticos, qualquer coisa acima de 10–12 ms começa a atrapalhar quem está gravando enquanto monitora o próprio áudio — o cérebro começa a perceber a defasagem como eco.

## O papel do buffer size

O buffer size (tamanho do buffer) é a quantidade de amostras de áudio que o seu computador processa de uma vez antes de enviar para saída. Valores comuns são 32, 64, 128, 256, 512 e 1024 amostras.

Buffer pequeno significa menos amostras por bloco, entrega mais rápida, latência menor. O custo: o processador precisa trabalhar em janelas curtíssimas, sem margem para falha — qualquer estouro gera cliques, estalo ou corte no áudio. É o chamado dropout.

Buffer grande significa mais amostras por bloco, processamento mais confortável para a CPU, mas latência mais alta. A vantagem é estabilidade — dá para empilhar plugins pesados sem travar.

O ponto crucial é que não existe um valor "correto" universal. O valor correto depende do que você está fazendo agora.

## A regra prática: dois momentos, dois valores

**Na gravação:** use o menor buffer que seu sistema aguentar sem dropout. Para a maioria das interfaces e computadores modernos, isso fica entre 64 e 128 amostras. Nesse ponto a latência costuma ficar abaixo de 5–8 ms — imperceptível. Se o áudio travar nesse valor, suba para 128 ou 256 antes de adicionar plugins na cadeia de monitoramento.

**Na mixagem:** suba o buffer para 512 ou 1024. Você não está gravando nada novo, não existe o problema do eco no fone — o que importa agora é CPU disponível para rodar o projeto inteiro sem dropout, especialmente em sessões com muitos plugins por canal.

Trocar o buffer entre gravação e mixagem não é sinal de problema — é parte do workflow. Muitos produtores têm dois presets salvos no software da interface ou no DAW exatamente para isso.

## O direct monitoring como atalho para a latência

A maioria das interfaces de áudio modernas tem uma opção chamada direct monitoring (ou monitor direto): o sinal do microfone é enviado direto para o fone ou monitor sem passar pelo DAW. Latência praticamente zero, independente do buffer.

Funciona muito bem para gravação de voz e instrumentos sem efeitos no monitoramento. A limitação: você não ouve os plugins que estão na cadeia do DAW enquanto grava — só o sinal cru. Para situações onde isso não importa (narrações, podcast, gravação de voz seca), é a solução mais simples.

## Driver e sistema importam tanto quanto o buffer

Um buffer de 64 amostras numa interface com driver ASIO bem otimizado é completamente diferente de 64 amostras em modo genérico pelo Windows sem driver dedicado. No Mac, o CoreAudio é nativo e funciona bem. No Windows, use sempre o driver ASIO do fabricante da interface — nunca o ASIO4ALL em produção, que é uma solução de contorno para hardware sem suporte adequado.

Parte do cuidado técnico que a Speake aplica na preparação de sessões remotas passa exatamente por isso: garantir que a cadeia de captura esteja calibrada antes de gravar, não depois de perceber o problema na edição.

Quer uma sessão de gravação configurada do início? [Conheça a Speake](https://speake.com.br).
