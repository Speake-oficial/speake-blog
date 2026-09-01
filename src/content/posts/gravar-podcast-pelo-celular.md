---
title: "Gravar podcast pelo celular: como fazer com qualidade"
description: "Gravar podcast pelo celular funciona: use um app que salve WAV em 48 kHz, microfone de lapela USB-C e modo avião. Passo a passo, apps comparados e os limites reais."
pubDate: 2026-09-01
tags: ["home-studio", "microfones", "podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Ilustração estilizada de microfone de podcast com ondas sonoras"
---

Dá para gravar podcast pelo celular com qualidade publicável mudando três coisas em relação ao uso casual do aparelho: um app que salve arquivo sem compressão (WAV em 48 kHz), um microfone externo no lugar do interno e o aparelho em modo avião gravando no armazenamento local. Com esses três ajustes, um celular de linha média entrega voz falada no nível de uma interface de entrada. O que ele não faz é gravar duas pessoas em faixas separadas no mesmo aparelho — aí cada participante grava no próprio telefone.

## Dá para gravar um podcast só com o celular?

Dá, e o limite não é o conversor do aparelho: é o microfone interno e o processamento aplicado antes de salvar o arquivo. O microfone interno de qualquer smartphone é mono, capta a sala inteira e passa por redução de ruído e ganho automático que não dá para desligar — a voz "respira" de volume e perde corpo nas falas mais baixas. Trocar o microfone resolve a maior parte disso; o resto vem do app, que por padrão salva em AAC comprimido.

## Qual app usar para gravar podcast no celular?

Use um app que deixe escolher formato e taxa de amostragem. Quatro opções cobrem quase todo cenário:

| App | Plataforma | Melhor formato | Observação |
|---|---|---|---|
| Gravador (nativo) | iOS | Sem compressão | Ative em Ajustes › Gravador › Qualidade do Áudio › Sem Perdas |
| RØDE Reporter | iOS e Android | WAV 24 bit / 48 kHz | Medidor de nível e forma de onda ao vivo; gratuito |
| Dolby On | iOS e Android | WAV 16 bit / 48 kHz | Processa automaticamente — guarde também a versão crua |
| Easy Voice Recorder | Android | PCM/WAV até 48 kHz | Controle direto de formato, taxa e canal |

O gravador nativo do Android varia entre fabricantes: se o seu não deixa escolher WAV, instale um dos apps acima. E dimensione o armazenamento antes: WAV mono em 48 kHz/24 bit ocupa cerca de 8,6 MB por minuto, perto de 520 MB por hora — deixe o dobro disso livre e desative o upload automático para a nuvem.

## Que microfone conectar no celular?

Três caminhos, do mais simples ao mais completo:

- **Lapela com fio (R$ 80 a R$ 400).** iRig Mic Lav 2 ou Boya BY-M1 com adaptador USB-C. Sem bateria, sem falha de link. Prenda 15 a 20 cm abaixo do queixo, ligeiramente fora do eixo da boca.
- **Lapela sem fio (R$ 700 a R$ 2.000).** DJI Mic Mini, Hollyland Lark M2 e Rode Wireless Micro gravam em 48 kHz/24 bit e trazem receptor USB-C ou Lightning que o celular reconhece como entrada. É onde a qualidade fica publicável sem ressalva; a escolha entre modelos está no post sobre [microfone de lapela sem fio](/posts/microfone-de-lapela-sem-fio-podcast/).
- **Microfone USB dinâmico.** Melhor timbre dos três, pelo mesmo raciocínio da comparação entre [microfone USB e XLR](/posts/microfone-usb-vs-xlr/). Conecta por adaptador USB-C, mas muitos modelos pedem mais corrente do que o celular fornece e exigem hub com alimentação externa.

Uma regra vale para todos: **nunca grave pelo microfone de fone Bluetooth**. Nesse modo a conexão cai para o perfil de mãos livres, que trabalha em 8 ou 16 kHz mono — qualidade de ligação telefônica, irrecuperável na edição. Para monitorar, use fone com fio.

## Como configurar o celular antes de gravar

Rotina de dois minutos, na ordem:

1. **Modo avião e Não Perturbe ligados.** Notificação no meio da fala é regravação garantida.
2. **Bluetooth desligado**, mesmo em modo avião, para o celular não captar por um fone pareado.
3. **Formato em WAV, 48 kHz**, mono se a fonte é uma voz só.
4. **Microfone externo conectado** e reconhecido como entrada no app.
5. **Picos entre -12 e -6 dBFS** na fala normal. Se o app só mostra uma barra, mire nos dois terços da escala.
6. **Celular em suporte**, sobre pano ou mousepad — mesa nua transmite batida de dedo para o corpo do aparelho.
7. **Bateria acima de 50%** e carregador desconectado: fonte ruim injeta chiado no áudio.
8. **Grave um take de teste de 30 segundos** e ouça no fone, não só no medidor.

Se aparecer eco no teste, resolva na origem: cortina, tapete e estante quebram reflexão melhor que qualquer plugin, como está no post sobre [como tirar o eco da gravação](/posts/como-tirar-o-eco-da-gravacao-de-voz/).

## Como gravar uma entrevista com duas pessoas pelo celular?

Cada pessoa grava no próprio celular, com o próprio microfone, e as faixas são alinhadas depois na edição — a técnica de [gravação double-ender](/posts/gravacao-remota-double-ender-podcast/). Ela existe porque um celular captura uma faixa só: dois convidados no mesmo aparelho viram um sinal somado, impossível de tratar separadamente. Para sincronizar sem timecode, comece com uma palma seca dos dois lados e alinhe pelo transiente; grave a chamada de vídeo como backup, mas edite pelos arquivos locais.

## Perguntas frequentes

**Gravar em 32-bit float pelo celular resolve clipping?**
Só se o microfone externo gravar internamente em 32-bit float, como fazem alguns sistemas sem fio. O arquivo salvo pelo celular vem depois do conversor do microfone: a proteção está no transmissor, não no telefone.

**Preciso normalizar o áudio gravado no celular?**
Precisa, como qualquer gravação: episódio de podcast sai entre -16 e -14 LUFS integrados conforme a plataforma, faixa tratada no post sobre [loudness para podcast](/posts/loudness-lufs-podcast-streaming/).

**Vale usar a redução de ruído do próprio app?**
Guarde sempre a versão crua. O "Aprimorar Gravação" do iOS e o processamento do Dolby On ajudam em voz falada, mas apagam detalhe e não têm volta; o mesmo tratamento aplicado na edição continua reversível.

Gravou pelo celular e o episódio está pronto — falta o lugar onde ele vive. Na [Speake](https://speake.com.br) você grava pelo próprio app, publica numa estação sua e a audiência assina para ouvir.
