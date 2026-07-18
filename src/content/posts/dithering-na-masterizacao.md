---
title: "Dithering na masterização: o que é e quando aplicar"
description: "Dithering não é mito nem detalhe irrelevante: é o processo que determina como o seu arquivo final soa em 16-bit. Quando aplicar, qual tipo escolher e o que nunca fazer."
pubDate: 2026-07-18
tags: ["masterizacao"]
image:
  src: "../../assets/posts/masterizacao.svg"
  alt: "Representação de medidores e processamento de masterização"
---

Quando você finaliza uma sessão de masterização no DAW, a cadeia interna opera em 32 ou 64 bits de ponto flutuante. O arquivo que vai para a plataforma de streaming ou para a prensagem de CD precisa chegar a 16 bits. Essa conversão — reduzir a profundidade de bits — gera um tipo específico de distorção chamado ruído de quantização. O dithering existe para lidar com esse problema. Não é opcional quando a entrega é em 16 bits.

## O que é ruído de quantização

Em qualquer representação digital, o sinal é aproximado por uma grade de valores discretos. Quanto maior a profundidade de bits, mais degraus disponíveis e mais fino é esse grid. Em 24 bits você tem cerca de 16 milhões de valores possíveis por amostra; em 16 bits, 65 536. Quando você converte de 24 para 16 bits simplesmente truncando ou arredondando os valores, as amostras que caíam entre os degraus disponíveis são "empurradas" para o degrau mais próximo. O erro que sobra dessa aproximação é o ruído de quantização — e ele tem uma característica desagradável: é correlacionado com o sinal. Isso significa que ele se manifesta como harmônicos espúrios, distorção harmônica audível, especialmente em sinais de baixa amplitude como caudas de reverb, silêncios gradativos e sons suaves.

## O que o dithering faz

Dithering injeta um ruído de baixíssima amplitude — abaixo do nível audível em condições normais — no sinal antes da conversão. Esse ruído descorrelaciona o erro de quantização do sinal. O resultado é que o erro não desaparece, mas deixa de ser distorção harmônica para se tornar ruído de fundo uniforme e aleatório, que o sistema auditivo humano tolera muito melhor. Em vez de ouvir um artefato musical que "segue" o sinal, você ouve um hiss suave de fundo — e na maioria dos contextos, não ouve nada.

## Tipos de dither

**TPDF (Triangular Probability Density Function):** o tipo mais básico e eficaz. Um ruído aleatório simples que randomiza completamente o erro de quantização. Funciona em qualquer contexto, é matematicamente correto e não introduz coloração.

**Noise shaping:** uma extensão do TPDF que redistribui o ruído de quantização para faixas de frequência onde a audição humana é menos sensível — principalmente acima de 15 kHz. Algoritmos como POW-r 2, POW-r 3 e UV22HR da Apogee fazem isso. O resultado é que o piso de ruído equivalente percebido pode parecer menor que o de um TPDF, porque o ruído está concentrado onde você menos o nota. A desvantagem: se o arquivo for convertido ou processado novamente depois, o noise shaping pode interagir mal com a nova conversão.

**Qual usar:** para entrega final em 16 bits que não será reprocessada — streaming, CD, arquivo de consumo — noise shaping é uma escolha razoável. Para stems intermediários ou arquivos que outros vão processar depois, TPDF é mais seguro.

## Quando aplicar (e quando não aplicar)

Dithering deve ser aplicado **uma única vez**, na última etapa da cadeia, na conversão final de bit depth. Não em bounces intermediários. Não no arquivo de projeto. Não quando você exporta um bounce em 24 bits para revisar. Só quando você converte para 16 bits para entregar.

Se você aplicar dithering em múltiplas etapas da cadeia, o ruído se acumula. Cada camada de dither adicionada em profundidades altas é processamento desnecessário que degrada o arquivo sem qualquer benefício.

Quando a entrega é em 24 bits — como o hi-res que muitas plataformas aceitam hoje — o dithering não é necessário. A passagem de 32 bits float para 24 bits inteiros num DAW moderno não introduz erro de quantização perceptível, e os plugins da cadeia já lidam com isso internamente.

## O erro mais comum

Aplicar dither no plugin da cadeia de masterização e depois deixar o exportador do DAW fazer uma segunda conversão sem dither — ou com o dither padrão do próprio exportador habilitado ao mesmo tempo. O resultado é duplo dither, que soa pior do que um único TPDF bem aplicado.

O fluxo correto: desligue qualquer dither automático do DAW, deixe o processamento interno em 32/64 bits, insira o plugin de dithering como último elemento da cadeia antes do export, e exporte em 16-bit integer. Um único ponto de conversão, um único dither.

A Speake trabalha o processo de entrega final de cada projeto — a decisão sobre profundidade de bits, dithering e loudness target — como parte da masterização, não como um passo técnico que o cliente resolve depois. Esses detalhes importam no resultado final.

Quer uma masterização onde nenhum detalhe da entrega fica ao acaso? [Conheça a Speake](https://speake.com.br).
