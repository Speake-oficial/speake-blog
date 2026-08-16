---
title: "Spotify lossless: o que muda no seu master"
description: "O Spotify lossless entrega FLAC 24-bit/44,1 kHz a assinantes Premium. O que muda na masterização, qual arquivo entregar ao distribuidor e por que -14 LUFS continua valendo."
pubDate: 2026-08-16
tags: ["masterizacao", "producao-musical"]
image:
  src: "../../assets/posts/masterizacao.svg"
  alt: "Representação estilizada de uma sessão de masterização com medidores"
---

O Spotify lossless entrega FLAC de 24 bits e 44,1 kHz para assinantes Premium, sem custo extra, desde a virada de 2025 para 2026. Na prática, isso muda uma coisa só do lado de quem produz: entregar ao distribuidor o arquivo nativo em 24 bits, sem converter nada. A masterização em si não muda — a normalização continua em -14 LUFS, o teto de -1 dBTP continua sendo a recomendação, e não existe royalty diferente para stream lossless.

## O que é o Spotify lossless e o que mudou de fato?

O Spotify lossless é o modo de reprodução em FLAC 24-bit/44,1 kHz que o Spotify liberou para assinantes Premium a partir de setembro de 2025, com rollout gradual em mais de 50 mercados, o Brasil incluído. Antes dele, o topo da cadeia era Ogg Vorbis a 320 kbps no app e AAC 256 kbps no player web — ambos com perda.

A diferença de dados é grande: um stream lossless em 24/44,1 fica na faixa de 1,0 a 1,4 Mbps depois da compressão FLAC, contra 320 kbps do tier anterior. Em consumo, são cerca de 500 a 600 MB por hora contra aproximadamente 145 MB por hora. Por isso o lossless exige Wi-Fi ou cabo, e precisa ser ativado nas configurações de qualidade de áudio — ele não vem ligado por padrão em dados móveis.

## Preciso masterizar diferente para o Spotify lossless?

Não. O Spotify lossless não pede um master diferente, porque o processamento que o Spotify aplica na reprodução é o mesmo: normalização de loudness ativada por padrão, alvo de -14 LUFS integrados. Se o seu master está mais alto que isso, ele é atenuado; se está mais baixo, pode ser amplificado (com limitador do lado do Spotify, no modo "alto").

O que continua valendo, exatamente como antes:

- **Loudness alvo: -14 LUFS integrados.** Masterizar a -8 LUFS não deixa a faixa mais alta no Spotify, só mais comprimida depois da atenuação.
- **Teto de true peak: -1 dBTP.** Mesmo com FLAC no destino, o Spotify continua servindo versões lossy para conta gratuita e para dados móveis, e codecs com perda geram overshoots de amostras intermediárias. -1 dBTP é a margem que evita clipping na conversão.
- **Dither ao reduzir profundidade de bits.** Se a sessão é 32 bits float e a entrega é 24 bits, aplique dither no último processo da cadeia. Nunca aplique dither duas vezes.

O ganho real do lossless está na ausência de artefatos de codec: pré-eco em transientes secos, borramento de pratos e chiado em reverbs longos são problemas de compressão com perda, e desaparecem no FLAC.

## Qual arquivo devo entregar ao distribuidor?

Entregue o master nativo, sem conversão. As especificações que o Spotify publica para entrega são diretas:

| Item | Especificação |
|---|---|
| Formato preferido | FLAC (WAV aceito com os mesmos requisitos) |
| Taxa de amostragem | 44,1 kHz ou superior |
| Profundidade de bits | 24 bits (16 bits só se não existir master maior) |
| Canais | Estéreo (2 canais) |
| WAV | Código de formato 0x0001 (PCM), não 0xFFFE |
| Versões | Uma só — não envie variações da mesma faixa |

O Spotify converte tudo internamente: arquivos acima de 24 bits são reduzidos para no máximo 24-bit/44,1 kHz, e arquivos abaixo disso são convertidos para 44,1 kHz/16 bits. Ou seja, entregar 16 bits quando você tem um master em 24 bits joga fora a qualidade lossless antes mesmo do upload — o Spotify só consegue servir FLAC de alta resolução se a fonte existir.

## Checklist de entrega para o Spotify lossless

1. **Exporte em 24 bits, na taxa nativa da sessão** (44,1 kHz ou 48 kHz). Não faça sample rate conversion desnecessária; se precisar converter, use o conversor de melhor qualidade da DAW, offline.
2. **Meça o loudness integrado da faixa inteira**, não de um trecho. Alvo entre -14 e -9 LUFS dependendo do gênero; abaixo de -14 você perde presença comparativa, muito acima você só entrega compressão.
3. **Confira o true peak com medidor de oversampling** (4x ou mais) e mantenha o máximo em -1 dBTP.
4. **Ouça o preview em Ogg 320 kbps e em AAC 256 kbps** antes de subir. É o que a maioria dos ouvintes ainda recebe.
5. **Confira metadados e ISRC** no distribuidor. Arquivo certo com ISRC errado vira faixa duplicada no catálogo.
6. **Guarde o master 24 bits arquivado.** Se amanhã aparecer um tier de 96 kHz, quem tem o arquivo nativo re-entrega em minutos.

Na Speake, masters entregues para distribuição saem em 24 bits na taxa nativa da sessão, com uma versão de referência em 16-bit/44,1 kHz apenas para os canais que ainda exigem CD-DA — é o mesmo cuidado que aplicamos em séries de podcast, onde a consistência entre episódios depende de um padrão de entrega fixo.

## Dá para ouvir a diferença do Spotify lossless?

Depende quase inteiramente da cadeia de reprodução, não do arquivo. Em fone Bluetooth a diferença não existe: nenhum codec sem fio comum carrega FLAC 24/44,1 sem perda — SBC opera perto de 328 kbps, AAC em 256 kbps e o LDAC chega a 990 kbps, ainda assim com perda. Para receber o lossless de verdade, é preciso conexão com fio, DAC USB ou Spotify Connect em um aparelho com saída digital.

Com cadeia adequada e material bem gravado, as diferenças audíveis aparecem em pratos, cordas de nylon, respirações e caudas de reverb — regiões onde o codec com perda economiza bits. Em faixas muito comprimidas, com pouca faixa dinâmica, a diferença tende a desaparecer.

## Perguntas frequentes

**Lossless aumenta o valor por stream?** Não. O pagamento do Spotify depende de streamshare, país do ouvinte e tipo de assinatura (Premium ou gratuito), não da qualidade do stream. Não existe tarifa separada anunciada para lossless — desconfie de serviço vendido como "masterização lossless" que promete mais alcance.

**Devo entregar 96 kHz se a sessão foi gravada assim?** Pode entregar: o Spotify aceita 44,1 kHz ou superior e faz a conversão internamente. A vantagem é ter o arquivo nativo no catálogo do distribuidor para plataformas que suportam alta resolução. Só não converta para cima um material que nasceu em 44,1 kHz — isso não adiciona informação nenhuma.

**Preciso de um master separado para Apple Music ou Tidal?** Não para lossless comum. Um master 24 bits na taxa nativa atende Spotify, Apple Music Lossless e Tidal. Master separado só faz sentido em formatos realmente distintos, como Dolby Atmos, que exige mixagem e entrega próprias.

Quer ajuda profissional com masterização pronta para streaming? [Conheça a Speake](https://speake.com.br).
