---
title: "Como gravar o áudio do computador e o microfone juntos"
description: "Gravar o áudio do computador e o microfone juntos pede dispositivo virtual: BlackHole no Mac, VoiceMeeter no Windows ou OBS, que já separa as faixas."
pubDate: 2026-10-16
tags: ["equipamentos-de-audio", "home-studio"]
image:
  src: "../../assets/posts/home-studio.svg"
  alt: "Ilustração de home studio com interface de áudio e computador"
---

Para gravar o áudio do computador e o microfone juntos você precisa de um dispositivo de áudio virtual que una as duas fontes antes do gravador. No macOS, o caminho gratuito é o **BlackHole** dentro de um dispositivo agregado; no Windows, o **VoiceMeeter**; nos dois sistemas, o **OBS Studio** resolve sem instalar driver nenhum e grava cada fonte em faixa separada. A regra vale para os três: nunca some microfone e sistema na mesma faixa, porque depois não há como consertar um sem estragar o outro.

## Como gravar o áudio do computador e o microfone juntos?

O sistema operacional não entrega a própria saída de áudio como entrada de gravação: é preciso um driver virtual que finja ser microfone e receba o som dos aplicativos. Com ele instalado, o gravador vê uma entrada só, com o microfone em um par de canais e o áudio do computador em outro.

| Caminho | Sistema | Custo | Faixas separadas |
|---|---|---|---|
| OBS Studio | macOS, Windows, Linux | gratuito | Sim, até 6 trilhas |
| BlackHole 2ch + dispositivo agregado | macOS | gratuito (doação sugerida de US$ 10) | Sim, por par de canais |
| Loopback (Rogue Amoeba) | macOS | US$ 99, licença única | Sim, mas teste antes de confiar |
| VoiceMeeter / Banana | Windows | gratuito (donationware) | Não na configuração básica |
| Mesa com loopback USB (Rødecaster, Wave XLR, GO XLR) | ambos | hardware, de R$ 1.200 a R$ 4.500 | Depende do modelo |

O OBS é o caminho mais curto: captura de saída e multitrilha vêm de fábrica.

## Como fazer no Mac com o BlackHole, passo a passo?

1. Instale o **BlackHole 2ch** (gratuito, doação sugerida de US$ 10) e reinicie o Mac.
2. Abra **Audio MIDI Setup**, clique no **+** e crie um **dispositivo agregado** com o seu microfone (ou interface) e o BlackHole 2ch.
3. Defina a interface como **fonte de clock** e ative **Drift Correction** no BlackHole.
4. Deixe tudo em **48 kHz/24 bit** — misturar 44,1 kHz com 48 kHz gera clique e alteração de altura.
5. Crie um **dispositivo de múltiplas saídas** com BlackHole + seus fones e selecione-o como saída do sistema. Sem esse passo, o áudio entra na gravação mas você não ouve nada.
6. No gravador, escolha o dispositivo agregado e aponte os canais 1-2 (microfone) e 3-4 (BlackHole) para **faixas diferentes**. Grave 30 segundos de teste antes de valer.

Use fones, nunca caixa de som: na caixa, o microfone recaptura o áudio do computador e a faixa limpa deixa de existir.

## E no Windows, qual é o caminho gratuito?

No Windows a captura de saída do sistema é nativa do OBS: adicione a fonte **Captura de saída de áudio (WASAPI)** e nenhum driver extra é necessário. O VoiceMeeter Banana (gratuito, donationware) serve quando o destino é uma DAW, mas na configuração padrão entrega microfone e sistema já somados em um só canal.

## Dá para gravar o áudio do computador e o microfone em faixas separadas?

Dá, e é o que o OBS faz melhor que as alternativas pagas. Em **Configurações → Saída → Avançado → Gravação**, marque as trilhas 1 a 3; no mixer de áudio (engrenagem → Propriedades de áudio avançadas), mande o microfone só para a trilha 2 e a captura de saída só para a trilha 3, deixando a trilha 1 com a mistura.

Grave em **.mkv** para não perder o arquivo se o computador travar e depois use *Remuxar gravações*. Cada faixa mono em 48 kHz/24 bit ocupa cerca de **500 MB por hora**: três trilhas passam de 1,5 GB por hora de disco.

## Por que o áudio do computador sai baixo, estourado ou fora de sincronia?

Porque o volume do sistema altera o que o driver virtual captura e as duas fontes chegam por caminhos diferentes. Três ajustes resolvem quase todos os casos:

- **Trave o volume do sistema** em um valor fixo (75% a 80%) e ajuste o resto no gravador. Alvo: média perto de **-18 dBFS** e pico abaixo de **-6 dBFS**.
- **Unifique a taxa de amostragem** em 48 kHz no sistema, no driver virtual, no microfone e no gravador.
- **Alinhe pelo início.** As duas fontes chegam com 10 a 60 ms de diferença: dê uma palma de claquete e alinhe as faixas por ela na edição.

Se a diferença crescer durante a gravação em vez de ficar constante, o problema é clock, não latência — o mesmo drift de [gravar com dois microfones no mesmo computador](/posts/gravar-com-dois-microfones-no-mesmo-computador/).

## Preciso de autorização para usar o áudio que capturei?

Sim, em dois cenários comuns. Música capturada do streaming continua protegida por direito autoral e derruba episódio nas plataformas de distribuição — o critério está em [música com direitos autorais em podcast](/posts/musica-com-direitos-autorais-em-podcast/). E gravar uma chamada exige avisar quem está do outro lado. Em entrevista remota, capturar o áudio da chamada é o plano B, porque a qualidade é a da compressão do Zoom ou do Meet; o plano A é a [gravação double-ender](/posts/gravacao-remota-double-ender-podcast/).

## Checklist antes de gravar

- [ ] Sistema, driver virtual e gravador em 48 kHz/24 bit.
- [ ] Fones no lugar da caixa de som.
- [ ] Microfone e áudio do computador em faixas separadas.
- [ ] Volume do sistema travado, pico abaixo de -6 dBFS.
- [ ] Teste de 30 segundos com sinal nos dois canais.
- [ ] Disco livre para 1,5 GB por hora.

## Perguntas frequentes

**Dá para gravar o áudio do computador sem instalar nada?**
No Windows, sim: o OBS captura a saída do sistema por WASAPI sem driver adicional. No macOS, não — QuickTime e Voice Memos só gravam microfone até você instalar BlackHole ou Loopback.

**O driver virtual piora a qualidade do áudio?**
Não. BlackHole e Loopback transportam o sinal digital sem conversão nem perda, desde que a taxa de amostragem seja a mesma nas duas pontas.

**Preciso de interface de áudio para isso?**
Não, microfone USB funciona. A diferença é o clock: dentro de um dispositivo agregado, o microfone USB pede Drift Correction ativo e gravação mais curta; uma interface mantém a referência estável em episódio longo.

Terminada a captura, falta decidir onde o episódio vai morar. Na [Speake](https://speake.com.br) você publica numa estação própria e quem acompanha o programa paga uma assinatura mensal para ouvir.
