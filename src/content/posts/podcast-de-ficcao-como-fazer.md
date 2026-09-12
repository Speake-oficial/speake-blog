---
title: "Como fazer um podcast de ficção: do roteiro à mixagem"
description: "Um podcast de ficção se produz em cinco etapas: roteiro em cenas, elenco gravado em double-ender, foley, ambiência em camadas e mix com diálogo a -16 LUFS."
pubDate: 2026-09-12
tags: ["narracao", "podcasting"]
image:
  src: "../../assets/posts/narracao.svg"
  alt: "Ilustração estilizada de ondas sonoras e microfone"
---

Um podcast de ficção se produz em cinco etapas: roteiro dividido em cenas, gravação do elenco (cada ator na própria casa, em arquivo local), captação de foley e ambiências, montagem em camadas e mixagem com o diálogo entregue a -16 LUFS integrado e -1 dBTP. Um episódio de 20 minutos consome entre 15 e 30 horas de trabalho, sendo que a maior parte é edição, não gravação. Nada disso exige estúdio: exige método e um roteiro que já tenha sido escrito pensando em som.

## Podcast de ficção e audiodrama são a mesma coisa?

Na prática, sim. "Audiodrama" é o termo herdado da radionovela e designa a obra dramatizada com elenco, sonoplastia e trilha; "podcast de ficção" é o mesmo produto distribuído por episódios. A distinção que importa é de forma: existe a ficção **dramatizada** (vários atores, cenas, sem narrador onisciente) e a ficção **narrada** (uma voz conta a história, mais próxima do audiolivro). A dramatizada dá mais trabalho de produção; a narrada dá mais trabalho de interpretação.

## Como escrever um roteiro de podcast de ficção?

O roteiro de um podcast de ficção precisa resolver, no texto, tudo o que o ouvinte não vê. Escreva em cenas numeradas, cada uma com cabeçalho de espaço e de tempo, e em três colunas de informação: personagem, fala, sonoplastia.

1. **Cabeçalho de cena**: `CENA 3 — COZINHA, NOITE`. Serve de marcador na edição e na planilha de gravação.
2. **Estabeleça o espaço em até duas falas.** O ouvinte precisa saber onde está; use um som identificável (chaleira, trânsito, eco de corredor) em vez de alguém dizendo "estamos na cozinha".
3. **Nomeie os personagens nas falas.** Sem rosto, só o nome dito em voz alta e o timbre distinguem quem fala. Use o nome do interlocutor nas primeiras trocas de cada cena.
4. **Marque a sonoplastia no próprio texto**, entre colchetes: `[porta range e bate]`. Isso vira a lista de efeitos a captar.
5. **Corte descrição.** Se uma linha não pode ser ouvida, ela não existe. Em ficção em áudio, o silêncio e o ruído fazem o trabalho da câmera.

Um episódio de 20 a 25 minutos costuma caber em 16 a 20 páginas de roteiro no ritmo de fala do português brasileiro (cerca de 140 palavras por minuto).

## Como gravar o elenco sem estúdio e sem juntar todo mundo?

Grave cada ator separadamente, em arquivo local, e junte as falas na edição — é o mesmo princípio da gravação double-ender. Cada um grava em 48 kHz/24 bit, com o microfone a 10-15 cm da boca, picos entre -12 e -6 dBFS, num cômodo com roupa, cortina e tapete. Peça 30 segundos de silêncio de sala no início de cada arquivo: é o que salva a edição na hora de emendar respiros.

Para a contracena, deixe a chamada de vídeo rodando só como referência: o ator ouve o colega e reage no tempo certo, mas o que entra no episódio é sempre o arquivo local dele. Peça três takes de cada fala com intenções diferentes — decidir isso na edição custa menos que remarcar o ator.

## Como fazer o foley e a ambiência de um podcast de ficção?

Foley é o som gravado por você imitando a ação da cena; ambiência é o pano de fundo contínuo que sustenta o espaço. Os dois entram em camadas separadas, nunca juntos na mesma faixa.

- **Foley caseiro que funciona**: passos numa caixa com terra ou cascalho; tecido amassado para roupa; sacola plástica para fogo; salto de sapato na mesa para porta batendo; aipo quebrado para osso.
- **Ambiências prontas**: Freesound (busque por licença CC0), BBC Sound Effects e as bibliotecas nativas do Reaper e do Logic. Confira a licença antes — CC-BY exige crédito; "comercial" nem sempre está incluído.
- **Reverb por espaço**: aplique o mesmo reverb a todas as vozes da mesma cena. Sala pequena: decay de 0,4 a 0,6 s. Corredor: 1,0 a 1,4 s. Igreja ou galpão: 2,5 a 3,5 s. É o reverb comum que convence o ouvinte de que os atores estavam no mesmo lugar.
- **Panning**: narrador sempre no centro; personagens entre 20% e 40% para os lados, mantendo a posição ao longo da cena. Panning extremo (100%) some para quem ouve com um fone só.

## Como mixar um podcast de ficção: que níveis usar?

A mixagem de um podcast de ficção é uma hierarquia de níveis. O diálogo manda; todo o resto existe em função dele.

| Camada | Nível de referência | Observação |
|---|---|---|
| Diálogo principal | -16 LUFS integrado (estéreo) | Alvo final do episódio; -1 dBTP de true peak |
| Trilha sob a fala | -12 a -18 dB abaixo do diálogo | Com ducking automático por sidechain |
| Ambiência contínua | -25 a -30 dB abaixo do diálogo | Presente, nunca identificável conscientemente |
| Efeito pontual (porta, tiro) | picos em -10 a -6 dBFS | Único elemento que pode passar na frente da fala |
| Silêncio dramático | silêncio de sala, não mudo | Corte digital total soa como falha técnica |

Faça a passada final em fone e em caixa de celular. Ficção em áudio se perde mais rápido que conversa: se a cena não se entende no alto-falante do celular dentro do ônibus, ela precisa de menos camadas, não de mais volume.

## Perguntas frequentes

**Dá para fazer um podcast de ficção sozinho, com todas as vozes?**
Dá, e é comum em produções independentes. O limite prático é de três a quatro personagens distintos por episódio, cada um gravado em passada separada e diferenciado por ritmo e altura da fala, não por sotaque forçado.

**Quantos episódios deve ter uma temporada?**
De 6 a 10 episódios, entre 15 e 30 minutos cada, é o formato mais usado. Uma temporada fechada, com começo e fim, retém melhor que uma série aberta e sem previsão de desfecho.

**Preciso de autorização para usar música em ficção em áudio?**
Precisa, do mesmo jeito que em qualquer podcast: música comercial exige licença, e a trilha original ou de biblioteca livre é o caminho viável. Registre também, por escrito, a cessão de uso da voz de cada ator antes de publicar.

Ficção seriada é o tipo de conteúdo que a audiência acompanha até o fim — e paga para acompanhar antes dos outros. Na [Speake](https://speake.com.br) você publica a temporada numa estação própria, libera episódios exclusivos para quem assina e recebe mensalidade recorrente de quem quer ouvir o próximo capítulo.
