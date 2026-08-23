---
title: "Como tirar o eco da gravação de voz"
description: "Como tirar o eco da gravação de voz: use dereverb por IA (Clarity Vx, RX, Adobe Podcast) em doses de 20% a 40% e corrija a sala antes da próxima gravação."
pubDate: 2026-08-23
tags: ["home-studio", "mixagem"]
image:
  src: "../../assets/posts/home-studio.svg"
  alt: "Ilustração de home studio com tratamento acústico e microfone"
---

Para tirar o eco da gravação de voz que já existe, aplique um plugin de dereverb por IA — Waves Clarity Vx DeReverb, iZotope RX De-reverb, Supertone Clear ou o Adobe Podcast Enhance Speech gratuito — em doses moderadas, de 20% a 40% de redução, e só depois trate EQ e compressão. Acima de ~50% a voz perde corpo e ganha um timbre metálico, e o remédio fica pior que a doença. Se a gravação ainda não aconteceu, a solução é outra e é melhor: aproxime o microfone para 10 a 15 cm da boca e cerque a posição de gravação com material absorvente. Eco removido em software nunca fica tão bom quanto eco que nunca foi captado.

## Como tirar o eco da gravação de voz que já está gravada?

Em áudio já gravado, o eco (tecnicamente reverberação da sala) sai por processamento de dereverb, não por EQ. A ordem que funciona:

1. **Corte antes de processar.** Elimine silêncios, respirações longas e trechos inúteis primeiro. Dereverb é caro em CPU e você não quer processar o que vai jogar fora.
2. **Aplique o dereverb como primeiro plugin da cadeia**, antes de qualquer EQ, compressor ou de-esser. Processar a cauda de reverb depois de comprimir significa comprimir o eco junto — ele sobe de nível e fica mais difícil de remover.
3. **Comece em 20% e suba até doer.** Ouça em fones, isolado, e pare no ponto imediatamente anterior ao momento em que a voz começa a soar embaixo d'água. Em quase toda gravação de home studio, esse ponto fica entre 30% e 45%.
4. **Compare com bypass a cada ajuste.** O ouvido se acostuma ao artefato em segundos. Alternar ligado/desligado a cada 20 segundos é o que impede o exagero.
5. **Devolva um pouco de ambiência.** Depois do dereverb a voz costuma soar seca e colada no ouvido. Um reverb de placa curto (pré-delay 15 a 25 ms, decay 0,6 a 0,9 s) em 5% a 8% de mix devolve naturalidade sem trazer a sala de volta.
6. **Feche o loudness normalmente:** −16 LUFS integrados para podcast falado, −14 LUFS se o destino principal for YouTube, com true peak em −1 dBTP.

Um detalhe que salva projetos: se a gravação tem música de fundo ou dois microfones abertos, rode o dereverb só na faixa de voz isolada, nunca no mix somado.

## Qual o melhor plugin para remover reverb da voz?

Depende do orçamento e de quanto do timbre original você aceita perder. Os quatro que dominam o mercado em 2026:

| Ferramenta | Faixa de preço | Força na remoção | Preserva o timbre | Melhor para |
|---|---|---|---|---|
| Adobe Podcast Enhance Speech | Gratuito (web) | Alta, mas sem controle fino | Média — deixa marca "de estúdio" | Emergência e podcast falado |
| Waves Clarity Vx DeReverb | US$ 30 a US$ 50 em promoção | Média-alta | Boa | Home studio com orçamento curto |
| iZotope RX (De-reverb / Dialogue Isolate) | A partir de ~US$ 60 nas versões de entrada | Alta, com controle por banda | Muito boa | Narração e audiolivro |
| Supertone Clear | Assinatura mensal ou licença | Alta, com dial de sala separado | Boa | Quem grava em salas ruins toda semana |

O Adobe Podcast Enhance Speech resolve o problema em 30 segundos e sem instalar nada, mas ele reprocessa a voz inteira e impõe um caráter próprio — ótimo para uma entrevista remota salva no aperto, arriscado como padrão do seu programa. Para narração de audiolivro, onde a distribuidora avalia consistência de timbre entre capítulos, o controle fino do RX compensa o preço.

## Por que a gravação fica com eco mesmo com microfone bom?

Porque o microfone não sabe distinguir sua voz do som dela batendo na parede e voltando. Microfone caro capta o eco com mais fidelidade — não menos. Os três fatores que determinam quanto de sala entra na gravação de voz são, nesta ordem:

- **Distância boca-microfone.** Dobrar a distância reduz o som direto em 6 dB, enquanto o som refletido da sala se mantém quase igual. A 30 cm você capta bem mais sala do que a 12 cm.
- **Superfícies duras e paralelas.** Piso de porcelanato, paredes nuas e janela grande criam reflexões fortes. Uma sala de 3×4 m sem tratamento tem tempo de reverberação (RT60) tipicamente entre 0,6 e 1,0 s; para voz, o alvo é 0,3 a 0,4 s.
- **Padrão polar e orientação.** Um microfone cardioide apontado para uma parede nua entrega mais reflexão do que o mesmo microfone apontado para um armário cheio de roupas.

## Como evitar o eco na hora de gravar?

Evitar custa menos que corrigir, e dá para resolver em uma tarde. Checklist do que realmente muda o resultado:

- [ ] Grave a 10–15 cm do microfone, com pop filter a 5 cm entre boca e cápsula.
- [ ] Posicione-se fora do centro da sala e nunca com uma parede nua atrás de você.
- [ ] Coloque absorção no ponto de primeira reflexão: um cobertor grosso ou painel de lã de rocha de 5 cm atrás e nas laterais da posição de gravação.
- [ ] Aponte o microfone para a superfície mais macia do ambiente (guarda-roupa aberto, estante cheia de livros, sofá).
- [ ] Cubra o piso duro com tapete e feche cortinas pesadas.
- [ ] Grave em 48 kHz/24 bit com picos entre −18 e −12 dBFS — headroom facilita qualquer correção posterior.
- [ ] Faça um teste de palma: bata palma e ouça. Se sobra um "chiado" agudo depois do estalo, ainda há reflexão para tratar.

Um armário de roupas fechado é, honestamente, uma cabine melhor que a maioria dos "estúdios" improvisados com espuma fina. Espuma de 2 cm absorve agudos e deixa passar médios e graves, o que muda o timbre do eco sem eliminá-lo. Quando o projeto exige consistência ao longo de dezenas de capítulos ou episódios, é o tipo de trabalho que a Speake resolve em sala tratada e com pós-produção padronizada, em vez de depender de correção plugin a plugin.

## Perguntas frequentes

**Dá para tirar o eco de graça?**
Dá. O Adobe Podcast Enhance Speech funciona no navegador sem custo e resolve casos moderados, e o Audacity tem o Noise Reduction (que ataca ruído, não reverb) mais opções de dereverb via plugins de terceiros. A limitação do gratuito é o controle: você aceita o resultado ou não, sem meio-termo.

**Dereverb funciona em gravação de entrevista pelo celular?**
Funciona parcialmente. Celular grava mono, comprimido e com processamento próprio já aplicado, o que reduz a informação disponível para a IA separar voz e sala. Espere melhora perceptível, não milagre — e peça ao convidado para gravar localmente em WAV quando possível.

**Remover reverb é a mesma coisa que remover ruído?**
Não. Ruído (ar-condicionado, chiado, rua) é contínuo e descorrelacionado da voz; reverb é a própria voz atrasada e refletida. Por isso ferramentas de redução de ruído não tiram eco, e plugins de dereverb não resolvem chiado. Se a gravação tem os dois problemas, trate ruído primeiro e dereverb depois.

Quer ajuda profissional com isso? Conheça a [Speake](https://speake.com.br).
