---
title: "Como masterizar um álbum: coerência entre as faixas"
description: "Como masterizar um álbum sem faixas de volumes desiguais: faixa âncora, LUFS integrado dentro de ±1 LU, normalização por álbum e espaçamento correto."
pubDate: 2026-11-20
tags: ["masterizacao", "producao-musical"]
image:
  src: "../../assets/posts/masterizacao.svg"
  alt: "Ilustração de medidor de masterização representando níveis de áudio"
---

Como masterizar um álbum é diferente de masterizar dez faixas soltas: o alvo não é cada música isolada, é a relação entre elas. O método é escolher uma faixa âncora, finalizar a masterização dela e ajustar as outras contra esse referencial, mantendo o LUFS integrado das faixas de peso parecido dentro de ±1 LU e o true peak em -1 dBTP. Diferença de volume entre faixas deve existir onde a música pede, nunca por descuido de medição.

## Todas as faixas do álbum precisam ter o mesmo LUFS?

Não, mas as diferenças precisam ser intencionais. As faixas de peso parecido — os singles, as de banda completa — devem ficar dentro de ±1 LU de LUFS integrado entre si; uma balada ou um interlúdio pode ficar 2 a 4 LU abaixo, porque é assim que a dinâmica do disco se expressa.

O erro comum é perseguir um número igual para tudo: empurrar um interlúdio de voz e piano para o mesmo -9 LUFS da faixa mais densa o deixa achatado e tira o contraste da sequência. Meça com um medidor de loudness em modo integrado sobre a faixa inteira (Youlean Loudness Meter, iZotope Insight), nunca com o medidor de pico do canal.

## Como masterizar um álbum passo a passo

Masterizar um álbum funciona melhor num único projeto da DAW, com todas as faixas já na sequência final:

1. **Escolha a faixa âncora:** normalmente a mais densa ou o single, a que tem menos espaço dinâmico sobrando. Ela define o teto do disco.
2. **Finalize a âncora primeiro.** Chain completa: EQ, compressão, saturação, limitador com true peak ligado, ceiling em -1 dBTP.
3. **Registre os números dela:** LUFS integrado, LRA, true peak e uma captura do analisador de espectro — a referência do álbum.
4. **Masterize as demais contra a âncora**, comparando em volume igualado — senão a mais alta sempre parece melhor.
5. **Ouça o disco inteiro na sequência.** Falha de coerência aparece na transição, não na faixa isolada.
6. **Ajuste espaçamento e fades na timeline**, e meça os arquivos exportados um a um, conferindo a maior diferença entre eles.

Use a mesma chain e o mesmo limitador em todas as faixas: o que muda são os valores, não os plugins. Se uma faixa exige mais de 2 a 3 dB de EQ corretivo para encaixar no balanço tonal da âncora, o problema está na mixagem, não na masterização.

## O que é normalização por álbum no Spotify?

A normalização por álbum é o comportamento em que o Spotify aplica o **mesmo ganho** a todas as faixas quando elas tocam em sequência dentro do álbum, preservando as diferenças de volume que você masterizou. No modo aleatório ou em playlist, o ganho passa a ser calculado por faixa e a relação entre as músicas do disco desaparece.

Ou seja: o álbum é julgado nos dois contextos. Ouça as candidatas a single normalizadas e isoladas, para confirmar que aguentam sair do disco.

| Contexto de reprodução | Ganho aplicado | Efeito no álbum |
|---|---|---|
| Álbum em ordem (Spotify, Apple Music) | Mesmo offset para todas | Dinâmica entre faixas preservada |
| Aleatório ou playlist | Calculado por faixa | Cada faixa puxada ao alvo da plataforma |
| Web player e alguns dispositivos de terceiros | Nenhum | O nível bruto da master é o que toca |

O Spotify normaliza para **-14 LUFS** (modos Alto em -11 e Baixo em -19 LUFS para assinantes) e o Sound Check da Apple Music trabalha em torno de **-16 LUFS**. Master baixa só é levantada até onde o true peak permite: o Spotify guarda cerca de 1 dB de margem para a codificação lossy, então uma faixa em -20 LUFS com true peak em -5 dBFS sobe apenas para perto de -16 LUFS.

## Quanto espaço deixar entre as faixas de um álbum?

Na distribuição digital cada faixa é um arquivo separado: o silêncio percebido entre duas músicas é a soma da cauda da primeira com o silêncio inicial da segunda. Deixe o início de cada faixa apertado — até cerca de 100 ms antes do primeiro transiente — e construa a respiração no fade da anterior. Valores de partida:

- **Álbum de canções (pop, rock, MPB):** 1,5 a 2,5 s de intervalo percebido
- **Discos contínuos (eletrônico, conceituais):** 0 a 0,5 s, ou crossfade renderizado dentro dos arquivos
- **Mudança forte de clima:** 3 a 4 s

Em CD ou DDP o intervalo é definido no PQ sheet, com 2 s de padrão. Em streaming não existe PQ: o que você renderizou é o que toca.

## Perguntas frequentes

**Masterizar um EP de 4 faixas segue a mesma lógica?**
Sim, e a normalização por álbum vale igual para EPs. Com menos faixas a âncora pesa mais, porque qualquer desvio aparece em 25% do disco.

**Lancei as faixas como singles antes do álbum. Preciso masterizar de novo?**
Depende de quanto eles divergem entre si. Se saíram com LUFS integrado e balanço tonal próximos, funcionam no álbum; se cada um foi masterizado por conta própria, uma revisão de nível e EQ costuma ser necessária.

**Qual LUFS integrado devo entregar?**
Não existe número único: entregue o que a música pede, com true peak em -1 dBTP. Rock e eletrônico densos costumam cair entre -9 e -11 LUFS; material acústico ou de voz, entre -13 e -16 LUFS.

Álbum fechado e coerente, falta quem acompanhe o que vem antes e depois dele. Na [Speake](https://speake.com.br) você publica conteúdo exclusivo numa estação própria — demos, versões alternativas, o caminho de cada faixa — e sua audiência assina por mês para ouvir.
