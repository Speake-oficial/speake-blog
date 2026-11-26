---
title: "Como mixar 808 e kick sem embolar o grave"
description: "Como mixar 808: afine na tonalidade, separe o kick com clip fade ou sidechain de 2-4 dB, sature para o celular ouvir e deixe tudo abaixo de 120 Hz em mono."
pubDate: 2026-11-26
tags: ["mixagem", "producao-musical"]
image:
  src: "../../assets/posts/mixagem.svg"
  alt: "Ilustração estilizada de faders de uma mesa de mixagem"
---

Para mixar 808 sem embolar o grave, faça quatro coisas nesta ordem: afine o 808 na tonalidade da faixa, impeça que ele e o kick toquem a mesma frequência no mesmo instante (com clip fade ou sidechain de 2 a 4 dB), sature o 808 para criar harmônicos que o alto-falante do celular consegue reproduzir e deixe tudo abaixo de 120 Hz em mono. A maior parte do "grave embolado" em trap, funk e drill não é falta de EQ — é kick e 808 disputando os mesmos 40 a 80 Hz.

## Como mixar 808 com kick sem embolar?

O 808 e o kick embolam porque os dois concentram energia entre 40 e 100 Hz e batem juntos no tempo 1. A solução é dividir essa região no tempo ou na frequência, nunca deixar os dois cheios ao mesmo tempo.

Existem três técnicas, e elas se combinam:

1. **Clip fade no ataque do 808.** Renderize o 808 em áudio e aplique um fade-in de 5 a 15 ms no começo de cada nota que coincide com o kick. O kick entrega o impacto, o 808 entra logo depois e sustenta a nota.
2. **Encurtar a cauda do kick.** Corte o decay do kick entre 80 e 150 ms.
3. **Escolher quem manda no sub.** Se o 808 é o protagonista, passe um high-pass no kick em torno de 50-60 Hz e deixe o punch dele em 60-100 Hz e o clique em 2-5 kHz. Se o kick é o protagonista, corte 2 a 3 dB do 808 na frequência fundamental do kick.

## Sidechain no 808 vale a pena?

Sidechain no 808 vale a pena quando o clip fade não é prático. A ideia é um compressor no 808 que abaixa o volume sempre que o kick toca.

Configuração de partida para sidechain do 808 pelo kick:

| Parâmetro | Valor inicial | Por quê |
|---|---|---|
| Fonte do sidechain | Kick (pré-fader) | O compressor reage só ao kick |
| Ratio | 4:1 a 8:1 | Abaixa rápido sem matar o corpo |
| Attack | 0-1 ms | Precisa abaixar antes do transiente do kick passar |
| Release | 50-120 ms | Acompanha a cauda do kick; mais longo "bombeia" |
| Redução de ganho | 2-4 dB | Acima de 6 dB o 808 começa a soar picotado |

Sem configurar compressor, plugins de volume shaping como Kickstart 2 ou LFO Tool fazem o mesmo efeito.

## Precisa afinar o 808?

Sim, o 808 precisa estar afinado na tonalidade da faixa, porque o 808 é um instrumento melódico, não só percussão. Um 808 meio tom fora do tom gera batimento com o baixo da harmonia e soa "sujo" mesmo com EQ perfeito.

Referências úteis para conferir no afinador ou no analisador de espectro:

- Dó (C1): 32,7 Hz
- Mi (E1): 41,2 Hz
- Fá (F1): 43,7 Hz
- Sol (G1): 49,0 Hz
- Lá (A1): 55,0 Hz

Afine também o kick: se o pico grave do kick cai a meio caminho entre duas notas do 808, os dois brigam. Ajuste o pitch do sample do kick até o pico dele coincidir com a tônica ou a quinta da tonalidade.

## Por que o 808 some no celular e no fone barato?

O 808 some no celular porque a fundamental dele fica entre 30 e 60 Hz, e o alto-falante de celular praticamente não reproduz nada abaixo de 150-200 Hz. O ouvinte não escuta a fundamental do 808 — escuta os harmônicos dela, e o cérebro reconstrói a nota grave a partir deles.

Por isso o passo decisivo é a saturação do 808:

1. Insira um saturador no 808 (Saturn 2, Decapitator ou o gratuito Softube Saturation Knob).
2. Aumente o drive até ouvir o 808 aparecer num alto-falante pequeno, geralmente quando os harmônicos entre 100 e 400 Hz sobem de 3 a 6 dB.
3. Use o controle de mix (dry/wet) entre 30% e 60% para manter o sub limpo embaixo.
4. Confira no próprio celular ou numa caixinha Bluetooth antes de seguir — é o teste que mais revela problema de 808.

## 808 deve ficar em mono ou estéreo?

O 808 deve ficar em mono, assim como tudo abaixo de cerca de 120 Hz na mixagem. Grave em estéreo perde energia quando somado em mono e torna a master instável no limitador.

Na prática: deixe o canal do 808 em mono e use um "bass mono" no barramento master ou de instrumentos — o Utility do Ableton tem a opção Bass Mono, e no FL Studio o Fruity Stereo Shaper ou um imager multibanda faz o mesmo. Se você quer largura, coloque estéreo só nos harmônicos saturados acima de 200 Hz, nunca no sub.

## Checklist rápido antes de exportar o beat

- [ ] 808 afinado na tonalidade e kick afinado com ele
- [ ] Kick e 808 sem sobreposição cheia no tempo 1 (clip fade ou sidechain de 2-4 dB)
- [ ] High-pass em 25-30 Hz no 808 para tirar sub inaudível que só consome headroom
- [ ] Saturação audível num alto-falante de celular
- [ ] Tudo abaixo de 120 Hz em mono
- [ ] Pico do barramento de bateria + 808 entre -6 e -3 dBFS antes da master

## Perguntas frequentes

**Qual volume o 808 deve ter em relação ao kick?**
Não existe valor fixo, porque depende do gênero: no trap o 808 costuma ficar 1 a 3 dB acima do kick em LUFS de curto prazo, no funk o kick geralmente lidera. Compare com uma faixa de referência do mesmo estilo no mesmo volume percebido.

**Posso usar compressor no 808?**
Pode, mas com pouca redução — 2 a 3 dB com ataque lento (20-30 ms) segura notas que variam de volume sem apagar o transiente. O 808 de sample já vem muito comprimido; a saturação costuma fazer mais diferença que o compressor.

**Mixar 808 em fone de ouvido funciona?**
Funciona se o fone for fechado e você conferir com um analisador de espectro, porque fones têm resposta irregular abaixo de 60 Hz. Os cuidados para isso estão no guia de [mixar com fone de ouvido](/posts/mixar-com-fone-de-ouvido/).

Beat fechado com o grave no lugar, falta quem escute. Na [Speake](https://speake.com.br) você cria uma estação, publica beats, stems e bastidores das suas produções como conteúdo exclusivo e recebe pela assinatura mensal de quem acompanha o seu trabalho.
