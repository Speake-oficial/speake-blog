---
title: "Microfone só de um lado: por que acontece e como resolver"
description: "Microfone só de um lado no fone? A interface manda a entrada 1 para o canal esquerdo. Grave em faixa mono ou marque Mono no OBS e a voz volta ao centro."
pubDate: 2026-11-25
tags: ["home-studio", "equipamentos-de-audio"]
image:
  src: "../../assets/posts/home-studio.svg"
  alt: "Ilustração de home studio com interface de áudio e monitores"
---

Quando o microfone sai só de um lado do fone, quase nunca é defeito: a interface de áudio é um dispositivo de 2 canais, a entrada 1 vira o canal esquerdo e a entrada 2 vira o direito, e o programa grava o par como estéreo. Com o microfone ligado só na entrada 1, a voz fica inteira no lado esquerdo e o lado direito fica em silêncio. A correção é gravar em faixa **mono** (na DAW, no Audacity ou marcando "Mono" no OBS), o que coloca a voz no centro, nos dois ouvidos.

## Por que o microfone grava só de um lado?

O microfone grava só de um lado porque cada entrada física da interface é um canal separado, e o sistema operacional entrega as duas entradas juntas como um par estéreo. Uma Focusrite Scarlett Solo, uma Behringer UMC22 ou uma Arturia MiniFuse 1 aparecem no Windows e no macOS como "2 canais", mesmo tendo uma só entrada XLR, porque a entrada de instrumento ocupa o segundo canal.

O microfone em si é mono por natureza: uma cápsula, um sinal. Nada está quebrado. O problema é de roteamento, e aparece em quatro situações comuns:

- **Interface de áudio de 2 entradas** com o microfone ligado só na entrada 1 (a causa mais frequente).
- **OBS, Discord ou Zoom** lendo o dispositivo como estéreo e repassando o canal vazio.
- **Cabo P2 de microfone (TRS) num adaptador ou entrada errada**, que entrega o sinal só na ponta.
- **Microfone USB com driver genérico** — raro; troque a porta USB e instale o driver do fabricante.

## Como saber se o problema está no microfone ou no fone?

Para saber se o problema está no microfone ou no fone, toque uma música estéreo qualquer no mesmo fone. Se a música sai dos dois lados e só a sua voz sai de um, o fone está bom e o problema é o roteamento do microfone.

Depois, olhe o medidor de nível. Se o programa mostra duas barras e só a da esquerda se mexe quando você fala, confirmado: a gravação está estéreo com um canal vazio. Se as duas barras se mexem e mesmo assim você escuta de um lado só, o problema está no balanço do sistema (Windows: Configurações → Sistema → Som → saída → Balanço; macOS: Ajustes → Som → Saída → Balanço) ou no próprio fone.

## Como resolver o microfone só de um lado em cada programa?

A solução para microfone só de um lado é sempre a mesma: dizer ao programa que a fonte é **mono**. O nome da opção muda de programa para programa:

| Programa | Onde corrigir | O que fazer |
|---|---|---|
| OBS Studio | Mixer → engrenagem → Propriedades avançadas de áudio | Marcar a caixa **Mono** na fonte do microfone |
| Reaper | Botão de entrada da trilha | Escolher **Input: Mono → Input 1** |
| Audacity | Barra de dispositivos | Mudar canais de gravação para **1 (Mono)** |
| Ableton Live | Painel I/O da trilha | **Audio From → Ext. In → 1** (não "1/2") |
| GarageBand / Logic | Inspetor da trilha | Formato de entrada **mono**, entrada 1 |
| Discord | Configurações de voz | Ativar **Downmix para mono** / processamento de entrada |

No OBS, marcar "Mono" soma os dois canais e distribui o resultado igualmente entre esquerda e direita. Como o canal direito está vazio, a voz fica mais baixa nessa soma (de 3 a 6 dB, conforme o programa); compense subindo o ganho na interface, não no fader.

## E se o áudio já foi gravado só de um lado?

Se o áudio já foi gravado só de um lado, dá para recuperar sem regravar, porque o canal com a voz está íntegro. Siga esta ordem:

1. **Abra o arquivo na DAW ou no Audacity** e confirme qual canal tem sinal.
2. **Separe os canais.** No Audacity: menu da faixa → "Dividir estéreo para mono".
3. **Apague o canal vazio.** Ele só carrega ruído de fundo e, se ficar, soma chiado à voz.
4. **Mantenha o canal com a voz como faixa mono** e exporte. Na exportação estéreo, a faixa mono vai igual para os dois lados.
5. **Confira o loudness de novo**, já que a soma ou a separação dos canais muda o nível em alguns dB.

Na linha de comando, o FFmpeg resolve em um passo: `ffmpeg -i entrada.wav -af "pan=mono|c0=c0" saida.wav` mantém só o canal esquerdo como mono. Troque `c0=c0` por `c0=c1` se a voz estiver no direito.

## Checklist rápido antes de gravar

- [ ] Microfone na entrada 1 e faixa configurada como **mono, entrada 1**
- [ ] Medidor mostrando sinal com a voz centralizada no fone
- [ ] Monitoramento direto da interface em modo **mono** (botão "Mono" ou "Stereo/Mono" em modelos como a UMC202HD e a Scarlett 2i2)
- [ ] Balanço do sistema operacional no centro
- [ ] Gravação de teste de 10 segundos ouvida no fone antes do episódio

## Perguntas frequentes

### Gravar voz em estéreo melhora a qualidade?

Gravar voz em estéreo não melhora a qualidade quando há um só microfone: o segundo canal ou fica vazio ou é cópia do primeiro. Estéreo só faz sentido com dois microfones em par, como na gravação de violão ou de ambiente.

### O ouvinte escuta de um lado só se eu publicar assim?

O ouvinte escuta de um lado só, sim, e no alto-falante do celular a voz pode até sumir dependendo do aparelho. Exporte sempre com a voz centralizada e confira no fone antes de publicar.

Voz centralizada e episódio conferido, falta só ele chegar a quem quer ouvir. Na [Speake](https://speake.com.br) você publica numa estação própria e a sua audiência assina por mês para acompanhar cada episódio.
