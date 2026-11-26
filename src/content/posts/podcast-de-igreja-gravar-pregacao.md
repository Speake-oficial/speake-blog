---
title: "Podcast de igreja: como gravar a pregação do culto"
description: "Para o podcast de igreja, puxe um auxiliar pré-fader com o microfone da pregação, grave em 48 kHz/24 bit, corte os louvores e publique em -16 LUFS mono."
pubDate: 2026-11-26
tags: ["equipamentos-de-audio", "podcasting"]
image:
  src: "../../assets/posts/microfone.svg"
  alt: "Ilustração estilizada de um microfone e ondas sonoras"
---

Para montar um podcast de igreja, grave a pregação a partir de um envio auxiliar (AUX) pré-fader da mesa de som que carregue **só o microfone de quem prega**, em 48 kHz e 24 bit, com picos entre -12 e -6 dBFS. Depois corte os louvores, normalize em -16 LUFS mono com pico real em -1 dBTP e publique. O que nunca funciona é usar o áudio da câmera ou um microfone apontado para a caixa de som: ele devolve a reverberação do salão, e a voz chega abafada no fone do ouvinte.

## Como gravar a pregação direto da mesa de som?

Gravar a pregação direto da mesa de som é criar um envio paralelo, independente do que o operador faz para o salão. Use um AUX livre, suba o envio só no canal do microfone da pregação e deixe banda, playback e microfones de apoio em zero.

Pré ou pós-fader muda o resultado:

- **Pré-fader:** o nível gravado ignora as subidas e descidas que o operador faz no fader durante o culto. É a opção recomendada, porque o volume do salão varia por motivo acústico, não editorial.
- **Pós-fader:** a gravação acompanha cada movimento do operador. Se ele baixar o fader num intervalo, o arquivo baixa junto.

Três caminhos de captação:

| Caminho | Equipamento típico | O que você recebe |
|---|---|---|
| AUX → gravador portátil | Yamaha MG12XU ou Behringer Xenyx X1222USB + Zoom H4essential, Tascam DR-40X | Um arquivo pronto da pregação, sem depender de computador |
| USB da mesa → notebook | Mesa analógica com USB de 2 canais + Audacity ou Reaper | Mesmo resultado, com edição na hora; exige notebook ligado o culto inteiro |
| Multipista na mesa digital | Behringer X32/XR18, Soundcraft Ui24R, Allen & Heath QU-SB | Cada microfone em uma faixa (a Ui24R grava até 22 em pendrive), com liberdade total na edição |

Dois detalhes estragam gravação toda semana: a saída auxiliar trabalha em nível de linha (+4 dBu), então o gravador precisa estar na entrada **LINE**, não MIC — em entrada de microfone, use atenuador de 20 a 30 dB. E teste 30 segundos no fone antes do culto: a pregação não tem segunda tomada.

## Qual a configuração de gravação ideal para pregação?

A configuração ideal para gravar pregação é 48 kHz, 24 bit, mono, com picos entre -12 e -6 dBFS. Mono porque há uma fonte só: voz. Os 24 bit dão margem para erro de ganho sem chiado, e 48 kHz evita reconversão se o áudio for usado no vídeo do culto.

Na limpeza da voz, aplique nesta ordem:

1. **Passa-altas em 80-100 Hz**, contra pisada no palco e sopro de ar-condicionado.
2. **Gate suave** (limiar perto de -40 dB, release de 200 ms) se o microfone captar muito salão; gate agressivo corta o fim das palavras.
3. **EQ subtrativo** de 2 a 4 dB entre 300 e 500 Hz, faixa que microfone de cabeça e de lapela acentuam.
4. **Compressor** 3:1, ataque de 10 ms, release de 100 ms, para aproximar sussurro e grito.
5. **De-esser** quando a lapela exagera os "s" acima de 6 kHz.
6. **Normalização de loudness** em -16 LUFS integrado (mono), pico real -1 dBTP.

No FFmpeg, a etapa final sai em um comando: `ffmpeg -i pregacao.wav -af loudnorm=I=-16:TP=-1:LRA=7 -c:a libmp3lame -b:a 128k episodio.mp3`.

## Posso publicar os louvores no podcast da igreja?

Não publique os louvores sem licença própria. A autorização que cobre a execução da música no culto não cobre a distribuição daquele áudio em podcast: é uma reprodução nova, que exige licença de sincronização e mecânica de quem detém os direitos. O caminho seguro é cortar os blocos de música e manter pregação, leituras e avisos.

Para abertura e encerramento, use trilha com licença explícita para podcast. Cortar também resolve o formato: um episódio só de pregação tem de 25 a 45 minutos e não obriga o ouvinte a pular 20 minutos de música para achar o início da mensagem.

## Dá para transformar a transmissão do YouTube em podcast?

Dá, e é o atalho de quem já transmite ao vivo, mas depende da fonte: se o áudio da live veio da mesa, serve; se veio do microfone da câmera, não. Extraia o áudio e corte a pregação com `ffmpeg -i culto.mp4 -vn -ac 1 -ar 48000 -c:a pcm_s24le pregacao.wav`.

A transmissão traz dois problemas previsíveis: a compressão da plataforma, que já achatou a dinâmica, e os louvores no meio do arquivo. Trate a extração como recuperação, não como fluxo principal — gravar o AUX em paralelo custa um cabo.

## Checklist do culto

- [ ] AUX com envio aberto só no microfone da pregação
- [ ] Gravador em entrada LINE, 48 kHz/24 bit, cartão com espaço
- [ ] Teste de 30 segundos ouvido no fone antes de começar
- [ ] Gravação iniciada antes dos avisos, não na hora exata da mensagem
- [ ] Arquivo copiado para dois lugares no mesmo dia
- [ ] Louvores cortados antes da publicação

## Perguntas frequentes

### Preciso de um microfone diferente para o podcast?

Não. O microfone de cabeça ou de lapela que já atende o salão serve, desde que o sinal saia da mesa e não do ambiente. Microfone dedicado só compensa para gravar devocionais fora do culto, com a pessoa sentada.

### Quanto tempo depois do culto o episódio deve sair?

Publique em até 48 horas. A mensagem de domingo é ouvida ao longo da semana, e atrasar sete dias coloca o episódio em concorrência com a pregação seguinte.

Pregação publicada, a igreja deixa de depender do domingo para falar com quem a acompanha. Na [Speake](https://speake.com.br) você reúne os episódios numa estação própria e oferece séries de estudo exclusivas por assinatura mensal a quem quiser acompanhar de perto.
