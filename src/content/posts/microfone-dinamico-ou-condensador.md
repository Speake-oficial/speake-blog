---
title: "Microfone dinâmico ou condensador: qual usar em casa"
description: "Microfone dinâmico ou condensador para gravar voz em casa: o que decide é sensibilidade, ganho e distância de trabalho — não a rejeição de sala do mito."
pubDate: 2026-09-07
tags: ["microfones", "home-studio"]
image:
  src: "../../assets/posts/microfone.svg"
  alt: "Ilustração estilizada de um microfone"
---

Para gravar voz falada em casa, em cômodo sem tratamento acústico, o microfone dinâmico é a escolha mais segura: ele é feito para trabalhar colado na boca, a 5 a 10 cm, e essa proximidade é o que reduz o peso da sala na gravação. O condensador entrega mais detalhe e mais agudo, mas precisa de mais distância, capta mais reflexão e exige alimentação phantom de 48V. A diferença decisiva entre microfone dinâmico ou condensador não está na "rejeição de ruído" de cada tipo — está na sensibilidade, no ganho que cada um pede e na distância de trabalho que cada um permite.

## Microfone dinâmico ou condensador: o que muda na prática?

A cápsula separa os dois. No dinâmico, uma bobina presa ao diafragma se move dentro de um campo magnético e gera corrente sozinha — não precisa de energia externa e aguenta pressão sonora altíssima. No condensador, um diafragma metalizado e uma placa fixa formam um capacitor cuja carga precisa ser mantida por fora: daí o phantom power de 48V. Esse diafragma mais leve responde mais rápido ao transiente e estende melhor o agudo.

O efeito colateral é a sensibilidade. Um dinâmico de referência para voz, o Shure SM7B, entrega cerca de −59 dBV/Pa (1,12 mV/Pa). Um condensador de entrada como o Audio-Technica AT2020 entrega −37 dBV/Pa (14,1 mV/Pa). São ~22 dB de diferença: o mesmo grito no mesmo lugar chega ao preamp com um sinal muito mais fraco no dinâmico.

## Microfone dinâmico realmente capta menos eco da sala?

Não pelo motivo que costuma ser dito. Dois microfones cardioides captam a sala praticamente igual à mesma distância — a rejeição vem do padrão polar, não do tipo de cápsula. O que muda o resultado é o uso: o dinâmico tolera ser usado a 5 a 10 cm sem distorcer e sem virar uma tempestade de plosivas, e cada vez que você reduz a distância pela metade o som direto sobe 6 dB enquanto a reflexão da sala fica no mesmo nível. É a relação direto/reverberante que melhora, não a cápsula que "filtra" o cômodo.

Um fator secundário mantém o mito vivo: muitos dinâmicos de voz têm resposta que cai acima de ~12 kHz, e como reflexão de parede nua concentra energia justamente no agudo, o eco fica menos evidente.

## Quanto de ganho um microfone dinâmico precisa?

Um dinâmico de baixa sensibilidade pede 55 a 65 dB de ganho limpo para voz falada a 10 cm; um condensador resolve a mesma tarefa com 35 a 45 dB. Interfaces atuais de entrada (Scarlett Solo de 4ª geração, Motu M2, Audient iD4) entregam entre 56 e 69 dB de ganho com ruído baixo e dão conta. Interfaces antigas ou baratas param em torno de 50 dB, e é aí que aparece o chiado: você abre o ganho no máximo e amplifica o ruído do próprio preamp junto com a voz.

O acessório que resolve isso é um ativador em linha — Cloudlifter CL-1, Klark Teknik CM-1 —, que soma +25 dB antes do preamp. Ele exige 48V para funcionar e não repassa esses 48V ao microfone dinâmico, o que é seguro. Com 65 dB de ganho limpo na interface, o ativador é opcional.

## Quando o condensador é a escolha certa?

O condensador vale quando o que você grava depende de detalhe e ar: canto, violão, instrumento acústico, narração em ambiente já tratado. A regra prática: se a sala tem absorção nas primeiras reflexões e o ruído de fundo fica abaixo de ~30 dBA, o condensador rende mais. Em quarto com piso duro, janela para a rua e ar-condicionado ligado, o dinâmico chega antes a um resultado publicável.

| Critério | Dinâmico | Condensador |
| --- | --- | --- |
| Phantom 48V | Não precisa | Obrigatório |
| Ganho típico para voz | 55 a 65 dB | 35 a 45 dB |
| Distância de trabalho | 5 a 10 cm | 15 a 25 cm |
| Sala sem tratamento | Perdoa | Denuncia |
| Detalhe no agudo | Menor | Maior |
| Faixa de preço no Brasil | R$ 330 (XM8500) a R$ 3.000+ (SM7B) | R$ 900 a R$ 2.000 (AT2020, NT1) |

Preços variam com câmbio e importador; use as faixas como ordem de grandeza, não como cotação.

## Checklist para decidir em 2 minutos

- [ ] A sala tem eco audível ao bater palma? Se sim, dinâmico.
- [ ] Você grava voz falada (podcast, narração) e não canto? Dinâmico resolve.
- [ ] Sua interface tem 60 dB ou mais de ganho? Se não, dinâmico só com ativador em linha.
- [ ] Vai gravar instrumento acústico ou voz cantada com brilho? Condensador.
- [ ] Tem alguém falando no cômodo ao lado ou rua movimentada? Dinâmico, sempre.

## Perguntas frequentes

**Microfone dinâmico USB resolve, ou preciso de XLR?**
Resolve para voz falada. Modelos como Rode PodMic USB e Shure MV7+ trazem o preamp e o conversor embutidos, então o problema de ganho some — a interface deixa de ser necessária. A limitação aparece quando você quiser gravar duas pessoas com dois microfones no mesmo computador.

**Condensador funciona sem phantom power?**
Não, com uma exceção: os de eletreto alimentados por pilha ou por plug-in power (comum em lapelas de celular). Um condensador de diafragma grande ligado a uma entrada sem 48V simplesmente não gera sinal.

**Vale gastar mais no microfone ou no tratamento acústico?**
No tratamento, quase sempre. Um dinâmico de R$ 400 num canto com absorção soa melhor que um condensador de R$ 2.000 num quarto vazio, porque a sala entra na gravação e não sai mais dela.

Microfone escolhido e voz gravada, resta decidir onde esse áudio vive. Na [Speake](https://speake.com.br) você cria uma estação, publica seus episódios e cobra assinatura mensal de quem quer ouvir.
