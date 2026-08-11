---
title: "Áudio para podcast em vídeo: microfone, sync e loudness"
description: "Como gravar áudio para podcast em vídeo: qual microfone usar, como sincronizar a gravação separada com a câmera e em que LUFS entregar no YouTube e no Spotify."
pubDate: 2026-08-11
tags: ["podcasting", "microfones"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Ilustração estilizada de microfone e ondas sonoras de podcast"
---

Áudio para podcast em vídeo se grava separado da câmera, em 48 kHz/24 bit, com um microfone dedicado por participante — nunca com o microfone interno da câmera. A sincronia se resolve com uma palma no início de cada gravação ou com timecode, e a entrega final vai normalizada em torno de -14 LUFS para YouTube e Spotify (-16 LUFS se o mesmo episódio for para Apple Podcasts). O restante é enquadramento: escolher um microfone que soe bem e caiba na imagem que você quer mostrar.

## Por que gravar áudio para podcast em vídeo separado da câmera

Câmeras — inclusive as boas — têm pré-amplificadores de áudio medianos e limitam o controle sobre o sinal. Gravar em paralelo, com interface ou gravador dedicado, é o padrão porque garante uma faixa por participante, com ganho ajustado individualmente e sem compressão automática da câmera.

Essa separação também protege o episódio. Se a câmera travar, superaquecer ou encher o cartão no meio da conversa, o áudio continua íntegro no gravador — e podcast em vídeo ainda é, antes de tudo, um produto de áudio. O contexto explica a atenção: relatórios do setor em 2026 apontam o YouTube como plataforma principal de consumo para cerca de um terço dos ouvintes semanais de podcast, o que empurrou produções que antes eram só áudio para o formato filmado.

Grave a faixa da câmera mesmo assim. Ela não vai para o corte final, mas serve de referência para o alinhamento.

## Qual microfone usar num podcast em vídeo?

Depende de quanto o microfone pode aparecer na imagem. Dinâmico de mão ou de mesa é o que soa melhor em salas sem tratamento acústico, porque rejeita reflexões; lapela desaparece na imagem mas capta mais sala; shotgun mantém o quadro limpo mas exige pé-de-microfone fora do enquadramento.

| Tipo | Distância típica | Aparece no vídeo | Melhor para |
|---|---|---|---|
| Dinâmico cardioide (mesa/braço articulado) | 5-15 cm da boca | Sim, na frente do rosto | Sala sem tratamento, som encorpado |
| Lapela (lavalier) | 20-25 cm abaixo do queixo | Discreto ou escondido | Imagem limpa, participantes que se movem |
| Shotgun (supercardioide) | 40-60 cm acima, fora do quadro | Não | Cenário controlado, quadro totalmente livre |
| Condensador de diafragma grande | 15-25 cm | Sim, volumoso | Estúdio tratado, foco em qualidade sonora |

Na prática, para a maioria dos podcasts filmados em escritório ou home studio, o dinâmico cardioide num braço articulado é a escolha mais segura: o microfone visível virou parte da linguagem visual do formato, e ele perdoa acústica ruim melhor que qualquer alternativa.

## Como sincronizar o áudio com o vídeo?

Bata uma palma seca de frente para a câmera antes de começar, com todos os microfones e a câmera já gravando. A palma cria um pico único e vertical na forma de onda, e alinhar esse pico com o mesmo pico da faixa da câmera resolve a sincronia em segundos, mesmo sem plugin.

Passo a passo do fluxo de sincronia:

1. Ligue todos os gravadores e a câmera antes da palma — quem chega depois fica sem referência.
2. Bata uma palma única e forte, com os braços à frente do corpo, visível no quadro.
3. Aguarde 2 segundos em silêncio antes da primeira fala.
4. Na edição, alinhe o pico da palma de cada faixa ao pico da faixa da câmera.
5. Confira a sincronia também no fim do episódio, não só no início.

Esse último passo é o que separa um episódio limpo de um com lábios fora de sincronia no minuto 40. Câmeras de consumo e gravadores independentes podem ter clocks levemente diferentes, e o desvio se acumula: alguns quadros de diferença ao longo de uma hora são comuns. Se detectar desvio, estique a faixa de áudio pelo fator necessário na DAW, ou grave com timecode se o setup permitir.

## Como esconder o microfone sem estragar o áudio

Microfone de lapela deve ficar preso na altura do esterno, 20-25 cm abaixo do queixo, com a cápsula apontada para cima. Prender mais baixo derruba o brilho da voz; prender sob tecido sem proteção antivento cria ruído de roçar a cada movimento.

Se a lapela precisa ficar sob a roupa, use fita de espuma médica ou um clipe com proteção e deixe uma alça de folga no cabo para absorver o movimento. Já o shotgun rende mais apontado de cima para baixo, a 40-60 cm da boca, fora do quadro superior — de cima ele mira o teto como fundo, não a parede lateral, o que costuma render menos reflexão.

## Qual o LUFS certo para podcast em vídeo?

Entregue o master em torno de -14 LUFS integrados com true peak em -1 dBTP. YouTube e Spotify normalizam o áudio para aproximadamente esse valor, então mixagens muito mais altas são abaixadas na reprodução e perdem dinâmica sem ganhar volume percebido.

Se o mesmo episódio também vai para Apple Podcasts, que trabalha em torno de -16 LUFS, a alternativa prática é exportar dois masters ou entregar tudo em -16 LUFS e aceitar uma pequena diferença de volume no YouTube. Nenhuma normalização, porém, conserta captação ruim: sala com eco, microfone longe ou ruído de fundo alto só ficam mais evidentes depois de a plataforma subir o ganho.

Aqui na Speake, produções de podcast em vídeo saem com edição, mixagem e masterização separadas do arquivo de vídeo justamente por isso — o áudio é finalizado no seu próprio fluxo e só depois volta para o corte.

## Perguntas frequentes

**Dá para gravar podcast em vídeo só com o celular?**
Dá, desde que o áudio não venha do microfone interno. Um microfone de lapela com fio ou um sistema sem fio conectado ao celular já resolve; o microfone interno capta a sala inteira e não tem conserto na edição.

**Preciso de duas câmeras?**
Não. Uma câmera fixa com enquadramento aberto funciona, e o corte dinâmico pode vir de zooms digitais em resolução 4K. Duas câmeras facilitam a edição, mas não mudam nada no áudio.

**Vídeo e áudio devem ter a mesma taxa de amostragem?**
Sim, use 48 kHz nos dois. É o padrão de vídeo, e gravar áudio em 44,1 kHz para depois casar com vídeo em 48 kHz é uma fonte comum de desvio de sincronia ao longo do episódio.

Quer ajuda profissional com a produção de áudio do seu podcast em vídeo? [fale com a Speake](https://speake.com.br).
