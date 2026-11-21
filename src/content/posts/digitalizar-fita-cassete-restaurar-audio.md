---
title: "Como digitalizar fita cassete e restaurar o áudio"
description: "Digitalizar fita cassete pede toca-fitas limpo, entrada de linha e captura em 96 kHz/24 bit. Depois vem a restauração: cliques, zumbido, chiado e EQ, nessa ordem."
pubDate: 2026-11-21
tags: ["equipamentos-de-audio", "home-studio"]
image:
  src: "../../assets/posts/home-studio.svg"
  alt: "Ilustração de home studio com interface de áudio e monitores"
---

Digitalizar fita cassete em casa exige três coisas: um toca-fitas com cabeça limpa e saída de linha, uma entrada de linha numa interface de áudio (não a de microfone) e uma captura em tempo real a 96 kHz/24 bit com picos perto de -6 dBFS, sem processamento nenhum. A limpeza — cliques, zumbido, chiado — vem depois, numa cópia, porque toda restauração é destrutiva e o arquivo capturado passa a ser o seu único original.

## Como digitalizar fita cassete passo a passo?

A ordem abaixo vale para cassete, fita de rolo e microcassete. Reserve o tempo real da fita: não existe digitalização acelerada com qualidade.

1. **Limpe a cabeça, o capstan e o rolete** com cotonete e álcool isopropílico de 99%. Fita velha solta óxido, e óxido na cabeça abafa o agudo mais que qualquer defeito da gravação.
2. **Desmagnetize a cabeça** a cada 20 ou 30 horas de uso. Cabeça magnetizada acrescenta chiado permanente na fita que tocar nela.
3. **Rebobine a fita de ponta a ponta uma vez**, para soltar o enrolamento e reduzir o risco de ela enrolar no meio da passagem.
4. **Ligue a saída de linha (RCA) do deck à entrada de linha da interface.** Só com saída de fone, deixe o deck perto de 50% e compense na interface.
5. **Ajuste o ganho pelo trecho mais alto da fita**, com picos entre -6 e -3 dBFS. Headroom sobrando é mais barato que clipping.
6. **Grave em 96 kHz/24 bit, WAV, uma passagem por lado**, sem redução de ruído, normalização ou compressor.
7. **Duplique o arquivo** e trabalhe só na cópia: o capturado vira master de arquivo e não se mexe mais nele.

## Qual qualidade usar para digitalizar áudio antigo?

A IASA, associação internacional de arquivos sonoros, recomenda no mínimo 48 kHz/24 bit no TC-04, e 96 kHz/24 bit virou prática corrente em instituições de memória — é o que o National Archives americano especifica como master de preservação, em LPCM dentro de um WAV/BWF. Para acervo pessoal, 48 kHz/24 bit basta e ocupa metade do espaço; 96 kHz ajuda se a restauração vai ser pesada, porque os processos espectrais ganham margem.

O que não muda: **24 bit sempre** e **WAV sempre**. MP3 na captura inviabiliza a restauração, porque o codec já jogou fora a faixa de agudo que o de-hiss precisa analisar.

## Em que ordem restaurar o áudio depois de digitalizar?

A ordem importa mais que a ferramenta: cada processo analisa o ruído que sobrou do anterior, e inverter a sequência faz o próximo errar o alvo.

1. **Cliques, estalos e dropouts** — de-click e de-crackle, ou edição manual dos picos isolados.
2. **Zumbido de rede** — de-hum em **60 Hz no Brasil**, com harmônicas em 120, 180 e 240 Hz. Deck antigo quase sempre tem.
3. **Chiado de fita** — redução de banda larga, com o perfil aprendido num trecho de silêncio real da fita, nunca num trecho com fala.
4. **Corte acima de 16 kHz** — cassete Tipo I entrega entre 12 e 15 kHz na prática; acima disso só há chiado, e o passa-baixa tira sem custo de conteúdo.
5. **EQ tonal** — grave encorpado e agudo recuperado nessa etapa, não antes.
6. **Nível final** — -16 LUFS integrado para episódio falado, true peak em -1 dBTP.

## Como remover o chiado da fita sem deixar a voz chapada?

A regra é reduzir pouco: **6 a 10 dB resolvem o chiado de cassete**, e acima de 12 dB a voz soa debaixo d'água, com sibilante engolida. No Audacity, use Redução de Ruído com perfil capturado em 1 a 2 segundos de fita em branco, redução em 8 dB, sensibilidade 6 e suavização de frequência 3. No iZotope RX, Spectral De-noise com 6 dB em duas passagens leves soa melhor que uma passagem de 15 dB.

Fita gravada com Dolby B e tocada sem Dolby B volta brilhante e chiada, e nenhum de-hiss conserta isso bem. Sem deck com Dolby, compense com um shelf de -2 a -4 dB acima de 5 kHz antes da redução de ruído.

## Vale usar IA para restaurar gravação antiga?

Vale para fala e atrapalha no resto. ElevenLabs Voice Isolator, Adobe Podcast Enhance Speech e Auphonic resolvem voz abafada melhor que qualquer cadeia clássica, porque reconstroem a fala em vez de subtrair ruído. O preço aparece em dois casos: música vira artefato metálico, e a ambiência original — plateia, sala, rua — desaparece, o que é fatal quando ela faz parte do valor da gravação.

| Problema da fita | Ferramenta clássica | IA ajuda? |
| --- | --- | --- |
| Chiado constante | de-hiss / redução de ruído | sim, com cautela |
| Zumbido de 60 Hz | de-hum | não precisa |
| Voz abafada e distante | EQ + de-reverb | sim, é o melhor caso |
| Música e canto | de-click + EQ | não, estraga |
| Oscilação de rotação (wow) | correção de pitch manual | parcial |

Guarde sempre o master capturado sem IA: modelo de restauração muda a cada ano, e a fita só tem mais um punhado de passagens antes de perder óxido de vez.

## Perguntas frequentes

**Dá para digitalizar vinil do mesmo jeito?**
O fluxo é o mesmo, com uma diferença obrigatória: toca-discos precisa de pré-amplificador com equalização RIAA antes da interface, senão o grave desaparece e o agudo fica estridente. Na restauração, o peso vai para o de-click, não para o de-hiss.

**Aqueles conversores USB baratos de fita para MP3 funcionam?**
Funcionam para ouvir, não para arquivar: a maioria grava em MP3 de 128 kbps com ganho fixo e tem transporte frágil com fita velha. Um toca-fitas usado em bom estado mais uma interface com entrada de linha custa mais e devolve um arquivo que ainda dá para restaurar.

**Quanto tempo leva para digitalizar e restaurar uma fita de 60 minutos?**
Cerca de 1 hora de captura (tempo real) e de 1 a 3 horas de restauração, dependendo do estado da fita e da edição manual que os dropouts exigirem.

Acervo digitalizado é catálogo, não caixa no armário. Na [Speake](https://speake.com.br) entrevista antiga, aula gravada e show de fita viram episódios de uma estação própria, com assinatura mensal de quem quer ouvir.
