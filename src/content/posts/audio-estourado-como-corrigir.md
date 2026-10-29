---
title: "Áudio estourado: como corrigir e evitar na gravação"
description: "Áudio estourado é clipping: o topo da onda é cortado e não volta. Veja como reduzir o dano com declipper e como gravar com picos entre -12 e -6 dBFS."
pubDate: 2026-10-29
tags: ["mixagem", "home-studio"]
image:
  src: "../../assets/posts/mixagem.svg"
  alt: "Ilustração estilizada de uma mesa de mixagem com faders"
---

Áudio estourado é clipping: o sinal passou de 0 dBFS e o topo da onda foi cortado, deixando a voz áspera e distorcida. A informação cortada não existe mais no arquivo, então um declipper só reconstrói uma aproximação e funciona bem em estouros leves. Em estouros graves, regravar é a saída honesta. O melhor conserto é prevenir: gravar com picos entre **-12 e -6 dBFS**.

## O que é áudio estourado (clipping)?

Clipping acontece quando o nível do sinal ultrapassa o máximo que o sistema representa. Em áudio digital, esse máximo é 0 dBFS: acima dele, a forma de onda arredondada vira um "platô" reto. Esse achatamento gera harmônicos que não estavam na voz, e é isso que soa como chiado áspero e rouquidão artificial.

Existem dois tipos:

- **Clipping de entrada:** o estouro aconteceu no pré-amplificador ou no conversor da interface, antes de o arquivo existir. É o mais comum e o mais difícil de salvar.
- **Clipping digital na edição:** o estouro veio de somar ganho ou plugins depois da gravação. Esse costuma ser evitável: se o arquivo original está limpo, basta reduzir o ganho e refazer a etapa.

## Como saber se o meu áudio estourou?

Abra o arquivo no editor e dê zoom na forma de onda. Picos achatados encostando no limite superior e inferior, em linha reta, indicam clipping. Medidores de pico e a função de estatísticas do Audacity ou do Reaper também contam as amostras que bateram em 0 dBFS. Se o contador mostra mais do que algumas amostras isoladas, o arquivo estourou.

Confirme de ouvido com fones fechados: o estouro aparece em consoantes fortes ("p", "t", "s") e em risadas, momentos em que a voz sobe de nível de repente.

## Dá para corrigir áudio estourado?

Parcialmente. Como o trecho cortado se perdeu, nenhuma ferramenta recupera a voz original; ela estima a curva que faltava. O resultado depende da gravidade:

| Situação | O que fazer | Resultado típico |
|---|---|---|
| Poucas amostras cortadas, só em picos | Declipper + abaixar o ganho | Quase inaudível |
| Estouros em várias palavras | Declipper em passes curtos | Melhora, mas fica uma textura "granulada" |
| Distorção contínua na fala | Regravar o trecho | Declipper não salva |

Passo a passo para tentar o reparo:

1. Trabalhe numa **cópia** do arquivo, nunca no original.
2. **Reduza o ganho** do clipe em 6 a 10 dB antes de qualquer plugin. O declipper precisa de folga acima do teto para reconstruir os picos.
3. Aplique um **declipper** (iZotope RX De-clip, o reparo de clipping do Adobe Audition ou o efeito gratuito Clip Fix do Audacity) com o limiar um pouco abaixo do nível do platô.
4. Ouça em trechos curtos e compare com o original. Se o resultado ficar "papelão", diminua a intensidade.
5. Só depois aplique EQ e compressão. Compressão antes do reparo esconde o problema e piora a distorção.

Um limitador ou compressor **não** conserta clipping: ele reduz o nível, mas não devolve a onda que foi cortada.

## Como evitar áudio estourado ao gravar?

Grave com os picos mais altos entre -12 e -6 dBFS. Essa faixa deixa de 6 a 12 dB de margem, suficiente para uma risada ou uma frase mais enfática, e continua bem acima do ruído de fundo em gravação de 24 bits.

Checklist antes de apertar REC:

1. Fale a frase mais forte que você espera dizer e ajuste o **ganho** da interface até o pico máximo ficar em torno de -8 dBFS.
2. Mantenha o microfone a **10 a 15 cm** da boca, levemente fora do eixo, para reduzir as explosões de "p" e "b".
3. Grave em **24 bits**. Com 24 bits, deixar o sinal baixo não cobra preço de ruído, então não há motivo para gravar perto de 0 dBFS.
4. Se a interface tiver chave **PAD** ou entrada "Hi-Z/Line" separada, use-a com microfones muito sensíveis ou vozes muito altas.
5. Em gravadores portáteis e celulares, desligue o **controle automático de ganho** (AGC) quando possível, porque ele sobe o nível de repente depois de trechos baixos.
6. Se o equipamento permitir, grave uma **faixa de segurança** com ganho 10 dB menor (modo "safety track" ou dual-level em gravadores portáteis).

## Qual é o melhor nível de gravação para voz?

Para voz falada em 24 bits/48 kHz, o melhor nível de gravação tem os picos entre -12 e -6 dBFS e a média (RMS) entre -24 e -18 dBFS. Isso dá margem contra estouros sem aproximar a voz do ruído de fundo da sala. O nível final de entrega, como -16 LUFS para podcasts, é ajustado depois, na masterização.

## Perguntas frequentes

**Normalizar o áudio resolve o estouro?**
Não. Normalizar muda o volume do arquivo inteiro; um arquivo que já estourou continua com os picos achatados, só mais alto ou mais baixo.

**Compressão antes de gravar evita clipping?**
Ajuda em compressores de hardware ou na função limitador de alguns gravadores, mas não substitui o ajuste de ganho. Se o conversor da interface estoura antes do compressor, a distorção já está gravada.

**Gravar em 32 bits float elimina o clipping?**
Em arquivos 32 bits float, o formato em si não estoura ao passar de 0 dBFS, e você pode reduzir o ganho depois sem perda. Mas o estouro no conversor analógico ainda acontece, a menos que o equipamento tenha conversão dupla ou float real na entrada.

Estourar o nível custa uma regravação; acertar o ganho custa dois minutos. Com o episódio limpo, falta o destino: na [Speake](https://speake.com.br) você publica numa estação própria e sua audiência assina para ouvir.
