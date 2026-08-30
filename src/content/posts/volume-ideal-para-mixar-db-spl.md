---
title: "Volume ideal para mixar: 85 dB SPL e como calibrar"
description: "O volume ideal para mixar fica entre 79 e 85 dB SPL. Como calibrar os monitores com ruído rosa, quanto tempo cada nível é seguro e como evitar fadiga auditiva."
pubDate: 2026-08-15
tags: ["home-studio", "equipamentos-de-audio"]
image:
  src: "../../assets/posts/home-studio.svg"
  alt: "Representação estilizada de um home studio com monitores de referência"
---

O volume ideal para mixar fica entre 79 e 85 dB SPL (ponderação C, resposta lenta) medidos na posição de escuta — 79 a 83 dB em salas pequenas de home studio, até 85 dB em salas tratadas. Nessa faixa a curva de resposta do ouvido humano é mais plana, as decisões de grave e agudo se mantêm válidas fora do estúdio, e o nível é baixo o suficiente para uma jornada de 8 horas sem risco de perda auditiva. Acima de 85 dB, o tempo seguro de exposição cai pela metade a cada 3 dB.

## Qual é o volume ideal para mixar e por que 85 dB SPL?

O volume ideal para mixar não é uma preferência estética: é o ponto em que o ouvido mente menos. As curvas de igual intensidade (Fletcher-Munson) mostram que, em volumes baixos, percebemos menos grave e menos agudo do que existe de fato no sinal. Em volumes muito altos, o oposto — graves e agudos parecem inflados.

Consequência prática: se você mixa a 95 dB SPL, o grave soa farto e você tende a cortá-lo demais. Ao tocar o mesmo arquivo no celular ou no carro, a música chega magra. Se mixa a 60 dB, acontece o inverso — você empilha grave que vira lama no sistema do ouvinte.

A faixa de 79 a 85 dB SPL é o consenso porque nela a percepção fica próxima o suficiente do "meio-termo" dos sistemas de reprodução reais. O K-System de Bob Katz padroniza 83 dB SPL por canal, herdado do cinema desde o fim dos anos 1970, e sugere 77 dB para salas pequenas.

## Como calibrar os monitores para o nível correto?

Calibrar os monitores leva 15 minutos e só precisa ser feito uma vez (repita se mudar de sala ou de caixas). O procedimento com ruído rosa:

1. **Gere ruído rosa a -20 dBFS RMS** na DAW, em um canal mono, com todo o processamento do master desligado. Esse é o nível de referência: sobram 20 dB de headroom para picos.
2. **Mande o ruído só para o monitor esquerdo.** Calibre um canal de cada vez — somar os dois muda a leitura em cerca de 3 dB.
3. **Posicione o medidor SPL** na posição da sua cabeça, apontado para cima, ponderação C e resposta lenta (Slow).
4. **Ajuste o volume do monitor** até o medidor marcar 79 dB (sala pequena, até 12 m²) ou 83 dB (sala tratada).
5. **Repita no monitor direito** e confira se os dois batem no mesmo valor. Com os dois tocando juntos, a leitura deve ficar por volta de 82 a 86 dB.
6. **Marque a posição do knob** com fita ou anote o valor do controlador. Esse é o seu ponto de referência — volte a ele sempre que precisar tomar uma decisão de equilíbrio tonal.

Para medir, um medidor SPL dedicado custa entre R$ 150 e R$ 400 no Brasil. Apps de celular servem para calibração relativa, mas erram de 3 a 5 dB dependendo do microfone do aparelho; se usar app, prefira os que permitem ponderação C e calibre o offset com um medidor real pelo menos uma vez.

## Quanto tempo posso ouvir alto sem risco de perda auditiva?

O limite recomendado pelo NIOSH é 85 dBA por 8 horas, com taxa de troca de 3 dB: cada 3 dB a mais corta o tempo seguro pela metade. Isso significa que "só uns minutinhos no alto" tem orçamento — e ele acaba rápido.

| Nível (dBA) | Tempo diário seguro | Equivalente prático |
|---|---|---|
| 85 | 8 horas | monitoração calibrada, sessão inteira |
| 88 | 4 horas | mix "empolgado" no refrão |
| 91 | 2 horas | fone em volume alto |
| 94 | 1 hora | ensaio de banda sem proteção |
| 97 | 30 minutos | checagem de impacto no subgrave |
| 100 | 15 minutos | show em casa noturna |

A exposição é cumulativa ao longo do dia: uma hora a 94 dB já consome o orçamento inteiro. Profissionais de áudio estão entre os grupos de maior risco justamente porque a exposição é diária e a perda é indolor e progressiva — as frequências entre 3 e 6 kHz somem primeiro, exatamente a região onde ficam a inteligibilidade da voz e a definição dos pratos.

## Fone de ouvido também causa fadiga auditiva?

Fone de ouvido causa fadiga auditiva mais rápido que monitores no mesmo nível percebido, por dois motivos: o transdutor fica a poucos milímetros do tímpano, sem a atenuação do ar, e não há pausa acústica — o campo sonoro não varia quando você mexe a cabeça. Sessões longas de edição em fone cansam o ouvido mesmo em volumes moderados.

A regra prática mais útil é a 60/60: no máximo 60% do volume do dispositivo por até 60 minutos consecutivos. Para trabalho, adapte para ciclos de 45 a 50 minutos com 10 minutos de silêncio real — não troque o fone por caixa no intervalo, o ouvido precisa de ausência de estímulo para recuperar.

Um teste barato de aferição: se você precisa levantar a voz para conversar com alguém a 1 metro de distância enquanto os monitores tocam, está acima de 85 dB SPL. Serve como checagem grosseira quando não há medidor à mão.

## Como usar variação de volume a favor do mix

Calibrar não significa mixar sempre no mesmo nível. A referência calibrada é o ponto de decisão tonal; ao redor dela, a variação é ferramenta:

- **Volume baixo (60 a 70 dB SPL):** revela o balanço entre os elementos principais. Se a voz sumiu no volume baixo, ela está baixa demais no mix, ponto final.
- **Nível calibrado (79 a 85 dB SPL):** EQ, compressão, decisões de timbre e de grave.
- **Volume alto (acima de 90 dB SPL):** só para checagens pontuais de impacto e subgrave, em trechos de 10 a 20 segundos. Não é um lugar para trabalhar.
- **Em mono e em alto-falante único:** confere compatibilidade e mascaramento, independentemente do nível.

Na Speake, sessões de mixagem e masterização trabalham com nível de monitoração fixo e checagens curtas em outros volumes — é o que mantém a coerência tonal entre episódios de uma mesma série de podcast, em que cada faixa precisa soar igual à anterior.

## Perguntas frequentes

**Ponderação A ou C no medidor?** Use ponderação C para calibrar monitores: ela é quase plana e considera o grave, que a ponderação A descarta. A ponderação A (dBA) é a usada nas tabelas de exposição ocupacional, porque aproxima o risco de dano auditivo. São finalidades diferentes — calibre em dBC, avalie risco em dBA.

**Preciso recalibrar se mudar os móveis da sala?** Sim, se a mudança for significativa. Sofá, estante ou painel acústico novo alteram a resposta na posição de escuta, principalmente abaixo de 300 Hz. Refazer a medição com ruído rosa leva poucos minutos e evita decisões de grave tomadas em cima de uma referência deslocada.

**Zumbido depois da sessão é normal?** Não. Zumbido (tinnitus) temporário após uma sessão é sinal de que o nível ou a duração passou do limite seguro. Se acontecer com frequência, reduza o nível de monitoração, aumente as pausas e procure avaliação audiológica — a perda auditiva induzida por ruído é irreversível.

Com a sala calibrada e o mix fechado, o passo seguinte é a distribuição. Na [Speake](https://speake.com.br) você publica seus episódios numa estação e sua audiência assina para ouvir.
