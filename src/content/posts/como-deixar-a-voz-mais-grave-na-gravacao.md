---
title: "Como deixar a voz mais grave na gravação (sem soar falso)"
description: "Para deixar a voz mais grave na gravação: microfone a 5-10 cm, voz no peito, EQ +2 a +4 dB em 100-200 Hz e compressão 3:1. Pitch shift: no máximo -1 semitom."
pubDate: 2026-11-21
tags: ["narracao", "mixagem"]
image:
  src: "../../assets/posts/narracao.svg"
  alt: "Ilustração estilizada de microfone de narração com ondas sonoras"
---

Para deixar a voz mais grave na gravação, combine três coisas na ordem certa: aproxime o microfone dinâmico ou cardioide a 5-10 cm da boca para aproveitar o efeito de proximidade, fale com a voz apoiada no peito e um pouco mais devagar, e na edição aplique um reforço de +2 a +4 dB entre 100 e 200 Hz com compressão de 3:1. Pitch shift só deve entrar como último recurso, e no máximo -1 semitom, porque acima disso a voz começa a soar robótica.

## A voz grave de locutor é técnica ou equipamento?

A voz grave de locutor é principalmente técnica de microfone e de fala, e só depois equipamento. A frequência fundamental da voz falada fica em torno de 85-155 Hz em vozes masculinas e 165-255 Hz em vozes femininas, e ninguém muda isso de forma relevante com plugin sem soar artificial. O que o locutor de rádio faz é realçar os harmônicos graves que já existem e controlar a dinâmica para que esse corpo apareça o tempo todo.

## Como usar o efeito de proximidade para engrossar a voz?

O efeito de proximidade é o aumento natural de graves que microfones direcionais (cardioide, supercardioide) geram quando a fonte chega perto da cápsula. Quanto mais perto, mais graves: a 5 cm o ganho abaixo de 200 Hz pode passar de +10 dB em relação a 30 cm, dependendo do modelo.

Distâncias de referência para a voz falada:

| Distância boca-microfone | Resultado | Indicado para |
|---|---|---|
| 3-5 cm | Grave máximo, risco de plosiva e "boom" | Locução de impacto, trailer, ASMR grave |
| 5-10 cm | Voz encorpada e próxima | Podcast, locução de rádio, narração de estilo |
| 15-25 cm | Natural, pouco reforço de grave | Audiolivro, voz neutra, entrevista |

Microfones dinâmicos como Shure SM7B, Shure MV7+, Rode PodMic e Samson Q2U respondem bem a essa técnica porque toleram a fonte muito perto sem distorcer. Use pop filter e posicione a cápsula 15-30° fora do eixo da boca para evitar plosivas. Microfones omnidirecionais e a maioria dos lapelas não têm efeito de proximidade, então essa técnica não funciona com eles.

## Como falar para a voz soar mais grave?

Para a voz soar mais grave, fale um pouco mais devagar, no meio-baixo da sua extensão confortável, com a respiração diafragmática sustentando o fim das frases. Forçar a voz para um tom abaixo do natural cansa as pregas vocais e soa forçado depois de 10 minutos.

Checklist antes de apertar o REC:

- Aqueça a voz por 3-5 minutos (humming, vibração de lábios, sirene descendente).
- Grave em pé ou sentado com a coluna reta: o diafragma livre dá mais apoio às notas graves.
- Reduza o ritmo para 130-150 palavras por minuto; fala acelerada sobe o tom naturalmente.
- Não "termine pra cima": frases que sobem no final soam como pergunta e afinam a voz.

## Qual EQ deixa a voz mais grave?

A EQ que deixa a voz mais grave reforça o corpo entre 100 e 200 Hz e limpa o que embola logo acima. Valores de partida para voz gravada a 48 kHz/24 bit:

1. **Passa-alta (high-pass):** 70-80 Hz para voz masculina grave, 90-100 Hz para vozes mais agudas, inclinação 12-18 dB/oitava.
2. **Corpo:** bell ou shelf com +2 a +4 dB em 120 Hz (vozes masculinas) ou 180-200 Hz (vozes femininas), Q entre 0,7 e 1.
3. **Lama:** corte de -2 a -3 dB entre 250 e 400 Hz, Q 1,5.
4. **Inteligibilidade:** +1 a +2 dB entre 3 e 5 kHz se a voz perder clareza depois do reforço de grave.
5. **Sibilância:** de-esser em 5-8 kHz depois da EQ.

TDR Nova e ReaEQ, ambos gratuitos, fazem todo esse trabalho.

## Compressão ajuda a deixar a voz mais encorpada?

A compressão ajuda a deixar a voz mais encorpada porque mantém os harmônicos graves audíveis também nas sílabas fracas.

Configuração de partida: ratio 3:1 a 4:1, ataque 10-20 ms, release 80-150 ms, threshold ajustado para 3-6 dB de redução nos picos e ganho de saída compensando a perda. Uma saturação leve de fita (2-5% de mix) depois do compressor reforça o timbre "de rádio" sem mexer no tom.

## Pitch shift para engrossar a voz vale a pena?

Pitch shift vale a pena só em doses pequenas: até -1 semitom costuma passar despercebido, e entre -2 e -3 semitons a voz já ganha o timbre de "voz alterada". O pitch shifter desloca também os formantes, as ressonâncias que fazem a voz soar humana.

Se for usar, prefira ferramentas com preservação de formantes (Melodyne, Little AlterBoy, o modo "Preserve Formants" do Audition) e aplique na faixa já editada, nunca em tempo real durante a gravação.

## Perguntas frequentes

### Microfone condensador deixa a voz mais grave?

Não necessariamente. Condensadores cardioides também têm efeito de proximidade, mas captam mais sala e mais detalhe agudo, o que pode deixar a voz mais clara do que grave em quarto sem tratamento. Para voz grave em ambiente doméstico, o dinâmico perto da boca costuma render mais.

### Voz grave demais atrapalha o podcast?

Atrapalha quando o grave mascara a dicção. Se o ouvinte precisa aumentar o volume para entender as palavras, corte 1-2 dB em 120-200 Hz e reforce 3-5 kHz. Teste sempre em fone de celular, onde a maioria das pessoas vai ouvir.

Voz no ponto, o próximo passo é dar a ela um público fiel. Na [Speake](https://speake.com.br) você cria uma estação, publica episódios exclusivos gravados pelo próprio app e recebe a assinatura mensal de quem quer ouvir você.
