---
title: "Como gravar com dois microfones no mesmo computador"
description: "Gravar com dois microfones no mesmo computador pede dispositivo agregado no Mac ou mixer virtual no Windows — e uma interface com duas entradas XLR evita o drift."
pubDate: 2026-10-11
tags: ["equipamentos-de-audio", "home-studio"]
image:
  src: "../../assets/posts/microfone.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Para gravar com dois microfones no mesmo computador existem dois caminhos, e eles não dão o mesmo resultado. Com dois microfones **USB**, o sistema operacional precisa juntar dois dispositivos diferentes — dispositivo agregado no macOS, mixer virtual no Windows — e cada microfone roda no próprio clock, o que gera estalos e perda de sincronia ao longo da gravação. Com dois microfones **XLR ligados numa única interface de áudio de duas entradas**, existe um só clock, duas faixas separadas e nenhum drift. A segunda opção custa a partir de cerca de R$ 1.100 no Brasil e é a única que se sustenta em episódio longo.

## Dá para usar dois microfones USB ao mesmo tempo?

Dá, com ressalvas sérias. Dois microfones USB aparecem como dispositivos independentes, e nenhuma DAW grava de dois dispositivos ao mesmo tempo sem que o sistema os apresente como um só. Dois detalhes derrubam a gravação antes do áudio:

- **Microfones USB idênticos podem não ser reconhecidos juntos**, porque compartilham o mesmo identificador USB. Dois modelos diferentes convivem melhor que duas unidades do mesmo modelo.
- **Alimentação.** Dois microfones USB no mesmo barramento podem derrubar um dos dois. Use hub com fonte externa, nunca hub passivo.

## Como criar um dispositivo agregado no Mac, passo a passo

1. Conecte os dois microfones e abra **Audio MIDI Setup** (Configuração de Áudio e MIDI).
2. Clique no **+** no canto inferior esquerdo e escolha **Criar dispositivo agregado**.
3. Marque os dois microfones na lista.
4. Defina como **fonte de clock** o dispositivo mais confiável — se houver uma interface na cadeia, é ela.
5. Ative **Drift Correction** em todos os dispositivos que *não* são a fonte de clock.
6. Confirme que os dois estão na mesma taxa de amostragem: **48 kHz/24 bit** é o padrão para voz falada.
7. Na DAW, selecione o dispositivo agregado e aponte cada microfone para uma faixa mono separada.

O passo 5 é o que a maioria esquece. Sem Drift Correction, o macOS não compensa a diferença entre os clocks e as faixas se afastam sozinhas.

## E no Windows, como gravar dois microfones USB?

O Windows não tem dispositivo agregado nativo. A solução mais usada é o **Voicemeeter** (ou Voicemeeter Banana), um mixer virtual que recebe os dois microfones como entradas de hardware, via driver MME, e devolve um dispositivo único para a DAW.

A limitação é grande: nessa configuração o Voicemeeter entrega as duas vozes **somadas numa única faixa**. Perde-se o que mais importa depois — noise gate por voz e [equilibrar o volume das vozes](/posts/equilibrar-volume-de-vozes-no-podcast/) uma a uma. O FlexASIO não substitui isso: o próprio autor do projeto afirma que vários dispositivos simultâneos não são possíveis com ele. O ASIO4ALL agrega dispositivos WDM em algumas máquinas, mas não é confiável em gravação longa.

## Por que os dois microfones saem de sincronia depois de meia hora?

Porque cada microfone USB tem seu próprio oscilador, e dois osciladores nunca marcam o mesmo tempo. A diferença se mede em partes por milhão: **cada 10 ppm de desvio acumula cerca de 36 ms por hora**. Dois microfones especificados em ±50 ppm, derivando em sentidos opostos, somam perto de 360 ms numa gravação de uma hora. Quando o software compensa, ele descarta ou repete amostras — é aí que surgem os cliques no meio do episódio.

O teste que revela o problema: grave 40 minutos e compare o alinhamento das faixas no final, não no começo — no início tudo parece certo.

## Interface com duas entradas XLR: quanto custa e por que resolve?

Resolve porque os dois microfones passam a compartilhar um único clock, um único conversor e um único driver — não existe drift a corrigir, e cada entrada chega na DAW como faixa separada.

| Opção | Entradas XLR | Preço no Brasil | Observação |
|---|---|---|---|
| Behringer UMC202HD | 2 | ~R$ 1.100 – R$ 1.300 | Caminho mais barato; preamp básico |
| Focusrite Scarlett 2i2 (4ª geração) | 2 | ~R$ 2.100 – R$ 2.950 | Ganho alto e conversor melhor |
| Zoom PodTrak P4 | 4 | importado, US$ 149 – US$ 199 | Grava em cartão SD, sem computador |

Atenção ao ganho: dinâmicos como o Shure SM7B pedem cerca de **60 dB de ganho limpo**, e interfaces antigas param em 50 a 56 dB — exigindo um pré de +25 dB que custa de R$ 700 a R$ 1.200. Com três ou mais vozes na sala, a comparação muda: vale ler [mesa de podcast ou interface](/posts/mesa-de-podcast-ou-interface-de-audio/).

## Checklist antes de gravar com dois microfones

- [ ] Os dois microfones na mesma taxa de amostragem (48 kHz) e profundidade (24 bit).
- [ ] Cada microfone roteado para uma faixa mono separada, nunca para uma faixa estéreo.
- [ ] Drift Correction ativo nos dispositivos secundários (Mac).
- [ ] Buffer em 128 ou 256 samples.
- [ ] Distância entre os microfones dentro da [regra 3:1 contra cancelamento de fase](/posts/cancelamento-fase-multiplos-microfones/).
- [ ] Teste de 2 minutos ouvido nos fones antes de começar de verdade.

## Perguntas frequentes

**Posso usar um microfone USB e um XLR juntos?**
Tecnicamente sim, por dispositivo agregado, mas é a pior combinação: dois clocks diferentes, dois ganhos com comportamento distinto e nenhuma garantia de alinhamento. Se já existe uma interface na mesa, use dois microfones XLR nela.

**Dois microfones precisam ser do mesmo modelo?**
Para duas vozes na mesma sala, modelos iguais facilitam a mixagem: o timbre de fundo e a captação da sala ficam parecidos. Não é obrigatório, é só menos trabalho de EQ depois.

Duas faixas limpas e sincronizadas são o começo do episódio, não o fim: gravado, ele precisa de um destino. Na [Speake](https://speake.com.br) você publica os episódios numa estação própria e cobra assinatura mensal de quem quer ouvir.
