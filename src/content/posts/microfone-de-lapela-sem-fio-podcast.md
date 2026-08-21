---
title: "Microfone de lapela sem fio: como usar em podcast"
description: "Microfone de lapela sem fio para podcast: onde prender, que faixa de preço esperar no Brasil e como comparar DJI Mic 2, Rode Wireless PRO e Hollyland Lark M2."
pubDate: 2026-08-21
tags: ["microfones", "equipamentos-de-audio", "podcasting"]
image:
  src: "../../assets/posts/microfone.svg"
  alt: "Ilustração estilizada de um microfone e ondas sonoras"
---

O microfone de lapela sem fio serve para podcast, mas com uma condição: ele é a escolha certa quando a imagem importa mais que o timbre. Preso a 15–20 cm abaixo do queixo, no centro do peito, um sistema de lapela sem fio de 2,4 GHz entrega voz limpa e inteligível em 48 kHz/24 bit, com a vantagem de sumir do enquadramento e liberar as mãos. O que ele não faz é entregar o grave e a presença de um dinâmico de mesa a 5 cm da boca — por isso podcast só em áudio continua melhor servido por microfone fixo, e podcast em vídeo ganha mais com a lapela.

## Onde prender o microfone de lapela sem fio

A posição padrão para microfone de lapela é 15 a 20 cm abaixo do queixo, na linha central do esterno, com a cápsula apontada para cima. Mais perto que isso e a voz fica abafada pelo peito e sujeita a estouros de "p" e "b"; mais longe e o nível cai enquanto o ruído da sala sobe.

Três detalhes resolvem 90% dos problemas de captação:

1. **Descentralize levemente.** Prenda o transmissor 2–3 cm fora do eixo da boca. Isso reduz plosivas sem perder nível perceptível.
2. **Isole a cápsula do tecido.** Faça uma alça de folga no cabo (o "broadcast loop") e use fita de gaffer ou adesivo dupla-face para impedir que a roupa toque no microfone. Ruído de tecido é irrecuperável na edição.
3. **Fixe em peça rígida.** Gola de camisa e lapela de blazer funcionam. Malha fina e camiseta larga se mexem com a respiração e produzem farfalhar constante.

Se o convidado gesticula muito, prenda mais alto, perto da gola, e aceite 1–2 dB a menos de nível — é troca melhor que ruído de mão batendo no peito.

## Qual a diferença entre DJI Mic 2, Rode Wireless PRO e Hollyland Lark M2?

Os três sistemas transmitem em 2,4 GHz e gravam internamente, mas se separam por armazenamento, recursos de sincronia e preço. A comparação prática:

| Recurso | DJI Mic 2 | Rode Wireless PRO | Hollyland Lark M2 |
|---|---|---|---|
| Gravação interna | Sim, com opção 32-bit float | Sim, 32-bit float, 32 GB por transmissor (~40 h) | Sim, no transmissor |
| Timecode | Não | Gerador interno | Não |
| Alcance nominal (campo aberto) | ~250 m | ~250 m | ~300 m |
| Autonomia por carga | ~6 h, estendida pelo case | ~7 h, estendida pelo case | ~10 h, estendida pelo case |
| Perfil de uso | Criador solo, vídeo rápido | Produção com câmera e pós | Discrição e uso longo |

Os números de alcance são medidos em linha de visada limpa. Em estúdio ou escritório, com paredes, corpos e uma rede Wi-Fi de 2,4 GHz por perto, conte com uma fração disso — normalmente 10 a 30 metros estáveis. Para podcast isso é irrelevante: transmissor e receptor ficam na mesma mesa.

## O 32-bit float resolve clipping de verdade?

Sim, dentro da gravação interna do transmissor. O 32-bit float tem faixa dinâmica larga o suficiente para que um pico que "estouraria" em 24 bit seja apenas um número alto no arquivo, recuperável com ganho negativo na DAW sem distorção. Não é marketing: é o mesmo princípio dos gravadores de campo modernos.

Duas ressalvas que quase nunca são ditas:

- **O 32-bit float não protege o pré-amplificador nem a cápsula.** Se a fonte satura o circuito analógico antes do conversor, a distorção está gravada. Grave alto, mas não absurdo.
- **O sinal transmitido por rádio ao receptor continua limitado.** A rede de segurança só existe no arquivo gravado dentro do transmissor. Se você usa apenas a saída do receptor para a câmera ou interface, o 32-bit float não está te salvando de nada.

Na prática: ative a gravação interna sempre, mesmo quando o áudio principal vai para outro lugar. Ela custa nada e já salvou muita entrevista.

## Quanto custa um microfone de lapela sem fio no Brasil?

O mercado brasileiro se divide em três faixas bem definidas (preços observados em fevereiro de 2026, sujeitos a variação):

- **R$ 40 a R$ 200 — entrada.** Kits genéricos e o Boya BY-V10 (~R$ 181). Servem para reels e reuniões. Sem gravação interna, com compressão de sinal audível e falhas ocasionais de link.
- **R$ 700 a R$ 1.500 — intermediário.** Hollyland Lark M1/M2 (o Lark M1 Duo por volta de R$ 737), DJI Mic Mini. É onde a qualidade fica publicável sem ressalva.
- **Acima de R$ 2.000 — profissional.** DJI Mic 2 e Rode Wireless PRO, com 32-bit float, gravação interna redundante e, no caso do Rode, timecode.

Para um podcast em vídeo com dois participantes, a faixa intermediária com kit de dois transmissores resolve. A faixa profissional se justifica quando há câmera, pós-produção e prazo — a redundância vale o custo no primeiro episódio que você não precisa regravar.

## Como evitar falhas de sinal e ruído na gravação sem fio

Falhas de sinal em microfone de lapela sem fio quase sempre vêm de disputa na banda de 2,4 GHz, a mesma do Wi-Fi e do Bluetooth. Antes de gravar, desligue o Bluetooth dos celulares na sala e, se possível, mova o roteador para 5 GHz.

Checklist de 60 segundos antes de gravar:

- [ ] Transmissores e receptor com bateria acima de 50%
- [ ] Gravação interna ativada em cada transmissor
- [ ] Ganho ajustado para picos entre -18 e -12 dBFS na fala normal
- [ ] Linha de visada entre transmissor e receptor (nada de corpo no meio)
- [ ] Teste de 30 segundos gravado e ouvido no fone, não só no medidor
- [ ] Cabo com alça de folga e cápsula sem contato com tecido

Na Speake, gravações de podcast em vídeo saem com lapela sem fio na imagem e gravação interna redundante em cada transmissor — o áudio que vai para a edição é o do arquivo local, não o do link de rádio.

## Perguntas frequentes

**Dá para gravar direto no celular com lapela sem fio?**
Sim. A maioria dos kits atuais traz receptor USB-C ou Lightning que o celular reconhece como entrada de áudio. A qualidade é boa, mas o app de câmera nativo costuma comprimir o áudio — use um app de gravação dedicado se o material for para edição.

**Lapela sem fio ou microfone dinâmico de mesa para podcast?**
Se o podcast é só áudio, dinâmico de mesa, sem discussão: mais grave, mais presença, menos sala. Se há vídeo e você quer a mesa limpa, lapela sem fio. Muitos estúdios gravam os dois em paralelo e escolhem na edição.

**Preciso de um transmissor por pessoa?**
Sim. Um microfone compartilhado entre duas pessoas força posicionamento ruim para as duas e impossibilita tratar cada voz separadamente na mixagem. Kits com dois transmissores e um receptor são o padrão justamente por isso.

Quer produzir seu podcast em vídeo com captação e edição profissionais? [Conheça a Speake](https://speake.com.br).
