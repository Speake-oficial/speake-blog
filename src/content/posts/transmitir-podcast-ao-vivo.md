---
title: "Como transmitir podcast ao vivo sem eco nem clipping"
description: "Cadeia de áudio para transmitir podcast ao vivo: filtros e bitrate no OBS, retorno sem eco para convidado remoto, alvo de loudness e gravação local de backup."
pubDate: 2026-09-08
tags: ["podcasting", "home-studio"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Transmitir podcast ao vivo com áudio limpo exige três coisas: cada microfone como fonte separada no encoder (OBS ou uma mesa com USB), todo mundo de fone fechado para o som nunca voltar ao microfone, e um limitador segurando o pico em -1 dBTP antes do sinal sair. Mire -16 a -14 LUFS integrados e grave uma cópia local multipista em 48 kHz/24 bit em paralelo — a transmissão é comprimida e efêmera; a gravação local é o que vira episódio.

## O que é preciso para transmitir um podcast ao vivo?

Um podcast ao vivo pede o mesmo de uma gravação normal, mais um caminho confiável até o encoder:

| Item | Por que ao vivo é diferente |
|---|---|
| Microfone dinâmico por pessoa | Rejeita sala e retorno; o que entrar fica no ar, sem edição depois. |
| Interface (2+ canais) ou mesa de podcast | R$ 900 a R$ 2.500 na interface; R$ 1.500 a R$ 6.000 na mesa, conforme o câmbio. |
| Fone fechado para cada participante | Fone aberto ou caixa de som realimenta em segundos. |
| Upload estável de 5 Mbps ou mais | Banda oscilando engasga áudio e vídeo juntos. |
| Gravação local em paralelo | O arquivo bom do episódio nunca é o da transmissão. |

## Como configurar o áudio no OBS para podcast ao vivo?

A configuração de áudio do OBS para podcast ao vivo se resume a sete passos, nesta ordem:

1. **Ajustes > Áudio**: taxa de amostragem em **48 kHz**, canais em **estéreo**. Precisa bater com a interface, senão o sistema reamostra e adiciona artefato.
2. **Adicione cada microfone como "Captura de entrada de áudio" separada.** Voz capturada pelo "Áudio do desktop" vem misturada ao retorno.
3. **Ordene os filtros da fonte assim**: Supressão de ruído (RNNoise) → Porta de ruído → Compressor → Ganho.
4. **No compressor, use 3:1, limiar em -18 dB, ataque de 10 ms e liberação de 100 ms.** O padrão de fábrica (10:1) achata a voz e bombeia o ruído de sala entre as frases.
5. **Ponha um Limitador com limiar em -1 dB** como último filtro. Ao vivo ninguém refaz o take que clipou.
6. **Em Propriedades de áudio avançadas, deixe o monitoramento do microfone em "Desligado"** se você já se escuta pela interface — monitorar duas vezes atrapalha a fala.
7. **Ajustes > Saída (modo Avançado)**: áudio da transmissão em **160 kbps AAC**; na aba Gravação, marque as trilhas 1 a 4 separadas e grave em MKV.

Com o buffer da interface em 128 ou 256 amostras a 48 kHz, a latência de ida e volta fica entre 3 e 6 ms — imperceptível para quem fala.

## Como evitar eco e microfonia no podcast ao vivo?

Eco e microfonia no podcast ao vivo têm duas causas, e as duas se resolvem antes de entrar no ar. A primeira é som saindo por caixa na mesma sala do microfone: fone fechado, sem exceção, inclusive para ouvir vinheta e trilha.

A segunda causa é o convidado remoto se escutar de volta. O retorno enviado a ele precisa conter tudo **menos a voz dele mesmo** — a configuração chamada mix-minus. Mesas de podcast fazem isso sozinhas em canal marcado como remoto; num computador, monta-se com roteador de áudio virtual (VoiceMeeter no Windows, Loopback no Mac). Sem mix-minus, a voz do convidado volta com 200 a 400 ms de atraso e ele trava a fala.

## Em quanto LUFS transmitir um podcast ao vivo?

Transmita o podcast ao vivo entre **-16 e -14 LUFS integrados**, com teto de **-1 dBTP**. YouTube e Spotify normalizam conteúdo sob demanda perto de -14 LUFS, mas ao vivo a normalização varia entre plataformas — chegar já no alvo evita que o público mexa no volume.

Sem medidor de LUFS no encoder, use o ganho como régua: falando no nível real do programa, os picos batem entre -12 e -6 dBFS no mixer do OBS. Limitador trabalhando o tempo todo significa ganho alto demais.

## Como gravar um backup do podcast ao vivo em qualidade melhor?

Grave uma cópia local em paralelo: o áudio da transmissão sai comprimido a 160 kbps e carrega qualquer engasgo de rede. Duas camadas resolvem — **multipista no OBS** (trilhas separadas em MKV), para reeditar cada voz, e **gravação na mesa ou em gravador portátil**, em 48 kHz/24 bit, que sobrevive a travamento do computador. É essa cópia, não o VOD da live, que vira o episódio publicado.

## Checklist dos 5 minutos antes de entrar ao vivo

- [ ] Taxa de amostragem igual na interface e no OBS (48 kHz).
- [ ] Fones fechados em todos os participantes, caixas de som desligadas.
- [ ] Retorno do convidado remoto sem a voz dele (mix-minus testado).
- [ ] Picos entre -12 e -6 dBFS falando no volume real do programa.
- [ ] Limitador ativo em -1 dB na saída.
- [ ] Gravação local multipista iniciada **antes** da transmissão.
- [ ] Teste de 60 segundos gravado e ouvido no fone.

## Perguntas frequentes

**Dá para fazer podcast ao vivo só com microfone USB?**
Dá, com uma pessoa. Dois microfones USB no mesmo computador exigem dispositivo agregado (Mac) ou roteador virtual (Windows), e cada um roda no próprio clock — o risco de estalo cresce com a duração do programa.

**Quanto atraso a plataforma adiciona?**
No YouTube, a latência normal fica em torno de 20 a 30 segundos, a baixa em cerca de 10 e a ultrabaixa entre 2 e 5 segundos. Para responder comentários ao vivo, use ultrabaixa; para upload fraco, a normal.

Terminada a transmissão, a melhor versão do programa ainda está no seu disco. Na [Speake](https://speake.com.br) você publica essa gravação numa estação própria como episódio exclusivo, e quem acompanha o ao vivo assina para ouvir a versão editada.
