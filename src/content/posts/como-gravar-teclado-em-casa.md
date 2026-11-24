---
title: "Como gravar teclado em casa: MIDI ou áudio?"
description: "Para gravar teclado em casa, ligue por USB-MIDI e registre as notas na DAW, ou use as saídas de linha para capturar o som do próprio piano. Veja os ajustes."
pubDate: 2026-11-24
tags: ["producao-musical", "home-studio"]
image:
  src: "../../assets/posts/home-studio.svg"
  alt: "Ilustração de home studio com interface de áudio e monitores"
---

Para gravar teclado em casa há dois caminhos, e eles não competem: ligue o instrumento por USB-MIDI e grave as notas que você toca, editáveis depois e com o timbre trocável, ou ligue as saídas de linha L/R numa interface de áudio e grave o som do próprio piano em 48 kHz/24 bit, com picos entre -18 e -12 dBFS. MIDI dá controle sobre a execução; áudio congela o timbre. Na dúvida, grave as duas coisas em faixas paralelas e decida na mixagem.

## Devo gravar o teclado em MIDI ou em áudio?

Grave em MIDI quando quiser corrigir notas, ajustar o tempo ou trocar o piano por um sampler melhor; grave em áudio quando o timbre do seu teclado já for o som que você quer. MIDI não guarda som nenhum — guarda qual tecla foi apertada, com que força (velocity, de 0 a 127), em que momento e o que o pedal estava fazendo (controle CC64).

| | MIDI (USB) | Áudio (saídas de linha) |
|---|---|---|
| O que é registrado | Notas, força, tempo, pedal | O som pronto do instrumento |
| Corrigir nota errada | Sim, sem regravar | Não |
| Trocar o timbre depois | Sim, qualquer instrumento virtual | Não |
| Tamanho do arquivo | Dezenas de KB | ~17 MB por minuto (48 kHz/24 bit estéreo) |
| Precisa de interface | Não | Sim |
| Risco principal | Soar mecânico se quantizar demais | Clipar na entrada e perder o take |

Como no MIDI a execução fica separada do som, dá para gravar hoje com o piano interno do teclado e, meses depois, carregar um piano amostrado de 20 GB na mesma faixa sem tocar de novo.

## Como ligar o teclado no computador para gravar?

Para MIDI, um cabo USB resolve na maioria dos teclados dos últimos quinze anos. Para áudio, as saídas do teclado precisam chegar a uma interface.

1. **USB-MIDI.** Cabo USB do teclado ao computador. No macOS funciona sem driver, por ser class compliant; no Windows, o driver do sistema basta para MIDI puro (teclados Yamaha que transmitem áudio por USB pedem o Yamaha Steinberg USB Driver).
2. **MIDI DIN de 5 pinos.** Teclados antigos só têm MIDI OUT redondo: use interface com MIDI IN ou conversor MIDI-USB (a partir de R$ 80 — os genéricos perdem mensagens de pedal).
3. **Saídas de linha L/R.** Cabos P10 do OUTPUT/LINE OUT para duas entradas da interface, em modo linha — não em instrumento nem em microfone.
4. **Saída de fone como plano B.** Sem line out, use a saída de fone com o volume do instrumento em torno de 70% e ganho baixo na interface — funciona, com mais ruído.

Interfaces com duas entradas de linha custam de R$ 500 a R$ 1.500. Se o teclado grava direto em pen drive (muitos pianos digitais salvam WAV de 16 bit/44,1 kHz), o arquivo serve para demo, não para mixar.

## Como configurar a gravação de teclado na DAW?

A ordem vale para Reaper, Logic, Ableton ou GarageBand; só o nome dos menus muda.

1. **Driver e projeto.** ASIO no Windows (o da sua interface, não o ASIO4ALL, se houver opção), Core Audio no macOS. Projeto em 48 kHz/24 bit.
2. **Buffer para tocar.** 64 ou 128 amostras em 48 kHz dão latência de ida e volta de 5 a 10 ms, imperceptível ao toque; acima de 256 amostras, a tecla parece "mole".
3. **Duas faixas.** Uma MIDI com entrada no teclado e instrumento virtual carregado; uma de áudio estéreo nas entradas 1-2.
4. **Local Control = Off.** Se você vai ouvir o instrumento virtual do computador, desative o gerador de som interno do teclado (menu Function). Sem isso, cada nota soa duas vezes, com atraso entre elas.
5. **Ganho de entrada.** Toque o trecho mais forte com as duas mãos e deixe os picos entre -18 e -12 dBFS. A dinâmica do piano é maior do que parece: o que soa seguro num acorde solto clipa no refrão.
6. **Pedal.** Pise no sustain e confirme que a DAW registra CC64 — muita gente descobre o pedal faltando só na hora de editar.

## Por que o teclado gravado soa estreito, duplicado ou atrasado?

Som estreito quase sempre é mono por acidente: o piano digital é amostrado em estéreo e a maioria dos teclados soma tudo no canal L/MONO quando só um cabo está plugado. Ligue os dois canais e mantenha a faixa em estéreo. Os outros sintomas da gravação de teclado em casa têm causas igualmente específicas:

- **Duplicado:** Local Control ligado junto com instrumento virtual. Desative no teclado.
- **Atrasado:** buffer grande demais. Use 64 ou 128 amostras para gravar e suba depois, na mixagem.
- **Sem dinâmica:** curva de toque (Touch Response) em modo fixo ou pesado demais. Os valores de velocity devem variar de 40 a 110, não travar em 100.
- **Com zumbido:** cabo de áudio e fonte do teclado em tomadas diferentes. Ligue tudo no mesmo filtro de linha.

No timbre, instrumento virtual gratuito resolve: Spitfire LABS, os pianos do Pianobook no Decent Sampler e o Keyzone Classic cobrem acústico, elétrico e rhodes sem custo.

## Perguntas frequentes

**Teclado controlador sem som próprio grava igual?**
Grava apenas MIDI, porque não tem gerador de som nem saída de áudio para captar. O timbre vem do instrumento virtual na DAW, e a interface serve só para monitorar com latência baixa.

**Dá para gravar teclado e voz ao mesmo tempo?**
Dá, em faixas separadas: teclado nas entradas 1-2 e microfone na 3, se a interface tiver. Com duas entradas, grave o teclado primeiro e cante depois, ouvindo a base no fone.

Teclado gravado, arquivo salvo — falta quem escute. Na [Speake](https://speake.com.br) você publica versões, estudos e gravações exclusivas numa estação própria, e a assinatura mensal de quem acompanha é o que remunera o que você toca.
