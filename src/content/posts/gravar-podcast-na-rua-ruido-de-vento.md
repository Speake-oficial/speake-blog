---
title: "Como gravar podcast na rua sem ruído de vento"
description: "Para gravar podcast na rua sem ruído de vento: protetor de pelo no microfone, dinâmico em vez de condensador, costas para o vento e passa-altas em 100 Hz."
pubDate: 2026-11-22
tags: ["microfones", "podcasting"]
image:
  src: "../../assets/posts/microfone.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Para gravar podcast na rua sem ruído de vento, a ordem é esta: protetor de pelo (deadcat) por cima da espuma, microfone dinâmico em vez de condensador, corpo virado de costas para o vento e passa-altas ligado em 80–100 Hz na gravação. O ruído de vento não é som captado, é a cápsula sendo empurrada por deslocamento de ar — quando ela satura, nenhum plugin recupera. Em gravação externa, 90% do resultado se decide antes de apertar o REC.

## Por que a edição não remove ruído de vento?

Porque o vento sobrecarrega a cápsula, e não existe sinal limpo embaixo para resgatar. A energia do ruído de vento se concentra nas frequências baixas, quase toda abaixo de 200 Hz e boa parte abaixo de 100 Hz, onde também vive o corpo da voz masculina. Um corte agressivo ali tira o vento e leva junto o grave da voz, deixando aquele timbre de telefone.

Pior: rajada forte gera pico acima do limite da cápsula e do pré-amplificador — distorção gravada no arquivo, não excesso de volume. Redução de ruído por IA mascara chiado constante; não reconstrói voz esmagada por rajada.

## Espuma, deadcat ou blimp: qual protetor de vento usar?

Os três resolvem faixas diferentes de vento, e o salto de preço acompanha:

| Protetor | Para que serve | Atenuação típica informada | Faixa no Brasil |
|---|---|---|---|
| Espuma (windscreen) | Brisa leve, ar-condicionado, plosivas | cerca de 5–10 dB | R$ 15 – 60 |
| Protetor de pelo (deadcat / windjammer) | Vento moderado, externa a pé, praia | cerca de 10–20 dB | R$ 60 – 250 |
| Blimp / cesta com pelo | Rajada, gravação em movimento, shotgun | cerca de 25–30 dB | R$ 400 – 2.000 |

As atenuações são faixas informadas por fabricantes e variam com a velocidade e o ângulo do vento. A regra prática: espuma sozinha não dá conta de rua aberta. Em calçada, orla ou praça, o deadcat é o item mais barato com maior impacto no episódio — ele cria uma camada de ar parado em volta da cápsula, e é essa camada que faz o trabalho, não o material em si.

Por isso protetor caseiro de meia ou feltro colado funciona pouco: ele encosta na grade do microfone em vez de manter distância dela.

## Qual microfone usar para gravar podcast na rua?

Dinâmico, de mão, cardioide — a escolha padrão de reportagem há décadas: menos sensível que condensador, suporta pressão sonora alta sem saturar e tem grade espessa que já segura parte do ar. Com deadcat, resolve entrevista de rua melhor que um condensador de R$ 2.000.

Três cuidados por tipo de microfone em externa:

1. **Condensador (incluindo lapela):** sensível e, no lapela, omnidirecional — capta vento e trânsito de todas as direções. Só com protetor de pelo e vento calmo.
2. **Shotgun:** o tubo de interferência é muito vulnerável a vento. Shotgun em rua exige blimp, não deadcat.
3. **Microfone do celular:** sem proteção nenhuma. Brisa acima de uma caminhada tranquila já estoura.

Mantenha o microfone a 10–20 cm da boca, fora do eixo, apontado para o canto dela. Em externa você fecha a distância para ganhar som direto: não há como baixar o volume da cidade.

## Como gravar podcast na rua com celular?

Dá, com microfone externo e um app que grave arquivo não comprimido. O microfone embutido não tem proteção mecânica contra vento: use um lapela ou um microfone USB-C/Lightning com espuma e deadcat por cima, e grave em WAV 48 kHz / 24 bit — o áudio comprimido do app nativo dificulta a limpeza depois.

Checklist antes de sair de casa:

- [ ] Deadcat no microfone, por cima da espuma, sem encostar na grade.
- [ ] 48 kHz / 24 bit, ou 32-bit float se o gravador tiver.
- [ ] Ganho com picos em -12 dBFS e média perto de -20 dBFS, folga para rajada.
- [ ] Passa-altas do microfone ou do gravador em 80–100 Hz.
- [ ] Fone fechado no ouvido durante o take inteiro — vento é mais fácil de ouvir que de ver no medidor.
- [ ] Gravação de backup no transmissor ou segundo gravador ligada.
- [ ] 30 segundos de ambiência da rua, parado e em silêncio, para usar nos cortes.
- [ ] Bateria e cartão com folga: frio e vento consomem mais.

## O vento já entrou na gravação: tem o que fazer?

Depende do tipo de estrago. Ronco contínuo de vento leve se trata: passa-altas em 100–120 Hz, depois um redutor de ruído espectral com perfil tirado de um trecho só de vento, em intensidade baixa — 6 a 10 dB de redução, não 30. Acima disso, a voz começa a soar submersa.

Rajada que saturou não se recupera. As saídas são regravar a frase em local abrigado, ou cortar o trecho e cobrir a emenda com a ambiência que você gravou. Em conteúdo de rua, um vento honesto incomoda menos que uma voz processada até virar robô.

## Perguntas frequentes

**Passa-altas na gravação ou só na edição?**
Na gravação. O passa-altas antes do conversor evita que energia inaudível de vento consuma headroom e empurre o pré-amplificador para a distorção. Em 80–100 Hz você não perde nada da voz falada.

**Vale gravar na rua com dois microfones?**
Vale quando há duas pessoas: um microfone por pessoa, cardioide, aproximado. Microfone único passado de mão em mão muda o timbre a cada troca e capta ruído de manuseio.

**Dia de vento forte: cancela ou tenta?**
Com vento sustentado forte, mesmo com deadcat a captação fica instável. Grave as falas em local abrigado e use o barulho da rua como ambiência separada, misturada na edição.

Gravação de rua rende material bruto; o episódio pronto precisa de endereço. Na [Speake](https://speake.com.br) você publica numa estação própria e a assinatura mensal de quem acompanha é o que remunera o trabalho de sair para gravar.
