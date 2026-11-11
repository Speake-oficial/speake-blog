---
title: "Headroom para masterização: quanto deixar na mix?"
description: "Headroom para masterização: deixe os picos da mix entre -6 e -3 dBFS, sem limitador no master bus, e exporte em WAV 24 ou 32 bit float na taxa original."
pubDate: 2026-11-11
tags: ["masterizacao", "producao-musical"]
image:
  src: "../../assets/posts/masterizacao.svg"
  alt: "Ilustração estilizada de medidores de nível de masterização"
---

O headroom para masterização recomendado é deixar os picos da mix entre -6 e -3 dBFS, medidos em true peak, sem limitador ou clipper no master bus. Esse espaço não serve para "deixar a música baixa": ele garante que nenhum pico chegue a 0 dBFS no arquivo exportado e dá margem para o EQ e a compressão da masterização trabalharem antes do limitador final. Se você exporta em WAV 32 bit float, o número exato importa menos, mas a regra de não clipar continua valendo.

## O que é headroom na mixagem?

Headroom na mixagem é a distância, em dB, entre o pico mais alto da mix e 0 dBFS, o teto digital. Uma mix com pico em -6 dBFS tem 6 dB de headroom. O headroom é medido pelos picos (de preferência em true peak), nunca pelo nível médio: uma mix com RMS em -18 dB pode ter transientes de caixa ou consoantes batendo em -1 dBFS e, portanto, quase nenhum headroom.

Headroom também não é loudness: duas mixes com pico em -6 dBFS podem ter -24 ou -14 LUFS integrados, dependendo da compressão usada.

## Quanto headroom deixar para masterização?

A faixa segura é de 3 a 6 dB de headroom, ou seja, picos entre -6 e -3 dBFS true peak. O suporte da LANDR, por exemplo, recomenda cerca de 6 dB e aceita picos um pouco mais altos desde que sobrem alguns dB de margem. Guias da Waves e da iZotope chegam a valores na mesma faixa.

| Situação da mix | Pico (true peak) | O que fazer |
|---|---|---|
| Picos acima de -1 dBFS | quase sem headroom | Baixe o master fader ou a saída de todos os canais |
| Picos entre -3 e -1 dBFS | headroom curto | Aceitável em 32 bit float; arriscado em 24 bit |
| Picos entre -6 e -3 dBFS | faixa ideal | Exporte como está |
| Picos abaixo de -12 dBFS | headroom excessivo | Funciona, mas suba o nível para não perder resolução útil em 16 bit |

## Posso deixar limitador no master bus antes de exportar?

O ideal é exportar a mix sem limitador, clipper ou maximizador no master bus. O limitador final é a última etapa da masterização; se ele já esmagou os picos na mix, sobra pouco transiente para o próximo estágio trabalhar e qualquer ganho extra soa achatado.

A exceção é compressão de bus que faz parte do som (um glue compressor com 1 a 2 dB de redução): essa pode ficar, porque a mix foi decidida com ela. Se você usou limitador só para ouvir a mix mais alta enquanto trabalhava, desligue-o na hora do bounce. Quem masteriza o próprio material segue a mesma lógica: feche a mix sem limitador, exporte e abra o arquivo num projeto novo de masterização.

## Qual LUFS a mix deve ter antes da masterização?

A mix antes da masterização não precisa bater nenhum alvo de LUFS. Em música, mixes saudáveis costumam ficar entre -23 e -16 LUFS integrados, dependendo do gênero e de quanta compressão de bus foi usada. O alvo de -14 LUFS das plataformas de streaming é responsabilidade da masterização, não da mix. Para entender esses alvos, veja o guia de [loudness em LUFS para streaming](/posts/loudness-lufs-podcast-streaming/) e o de [true peak na masterização](/posts/true-peak-masterizacao-streaming/).

Em voz falada (podcast, narração), vale o mesmo raciocínio: a mix de vozes pode ficar em -20 a -24 LUFS com picos em -6 dBFS, e o ganho até -16 ou -14 LUFS é feito na etapa de loudness.

## Como baixar o volume da mix sem estragar o que já foi feito?

A forma correta de ganhar headroom é baixar o nível antes dos processadores do master bus ou baixar todos os canais por igual, nunca só o fader de saída depois de um compressor de bus. Passo a passo:

1. Selecione todos os faders dos canais e grupos e abaixe todos pela mesma quantidade (por exemplo, -4 dB). O balanço entre eles não muda.
2. Se houver compressor no master bus, confira se a redução de ganho continua parecida; ajuste o threshold na mesma proporção se necessário.
3. Desligue limitador, clipper e medidores com ganho no fim da cadeia.
4. Toque o trecho mais alto da música com um medidor de true peak (Youlean Loudness Meter, gratuito, ou o medidor nativo da DAW) e confira o pico máximo.
5. Exporte em WAV, na taxa do projeto (44,1 ou 48 kHz), em 24 bit ou 32 bit float, sem normalização.

O [gain staging feito na gravação](/posts/gain-staging-gravacao/) facilita muito esse processo: canais gravados com picos entre -18 e -12 dBFS raramente somam uma mix acima de 0 dBFS.

## Checklist do arquivo que vai para a masterização

- [ ] Picos entre -6 e -3 dBFS true peak
- [ ] Sem limitador, clipper ou maximizador no master bus
- [ ] WAV 24 bit ou 32 bit float, taxa original do projeto
- [ ] Sem normalização e sem fade cortando o reverb no final
- [ ] Meio segundo de silêncio antes do primeiro transiente
- [ ] Nome do arquivo com título, versão e taxa (ex.: `faixa-mix-v3-48k-24b.wav`)

## Perguntas frequentes

**Se eu exportar em 32 bit float, preciso me preocupar com headroom?**
Um arquivo 32 bit float não perde informação acima de 0 dBFS, então um pico em +1 dBFS pode ser recuperado baixando o ganho depois. Mesmo assim, plugins com emulação analógica e conversores podem distorcer antes disso, então manter picos abaixo de -3 dBFS continua sendo a prática segura.

**Masterização com IA também precisa de headroom?**
Sim. Serviços automáticos de [masterização com IA](/posts/masterizacao-com-ia-vale-a-pena/) aplicam EQ, compressão e limitador sobre o arquivo enviado; uma mix já limitada a -0,1 dBFS deixa pouco espaço para eles e tende a soar mais esmagada.

Os decibéis que você poupou na mix voltam como volume na master, e a master precisa de um lugar para tocar. Na [Speake](https://speake.com.br) você publica seu áudio numa estação própria e quem quer ouvir assina por mês, gerando receita recorrente para o seu trabalho.
