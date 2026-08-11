---
title: "Template de DAW para podcast e narração: monte uma vez, use em todo projeto"
description: "Criar um template no DAW elimina trabalho repetitivo em cada episódio ou sessão de narração. Veja como estruturar trilhas, plugins e configurações para iniciar cada projeto já pronto para gravar."
pubDate: 2026-08-05
tags: ["podcasting", "narracao", "home-studio"]
---

Toda vez que você abre um projeto em branco para gravar um episódio novo ou mais um capítulo de narração, uma parte do tempo vai para as mesmas tarefas: criar a trilha de voz, inserir os plugins de sempre, configurar o bus de saída, checar o routing do microfone. Se isso acontece toda semana, você está gastando horas por ano com trabalho sem valor criativo.

A solução é direta: criar um template. Um arquivo de projeto salvo com trilhas, plugins e configurações já no lugar — e aberto como ponto de partida para cada novo projeto.

## O que um template de podcast ou narração precisa ter

Um template eficiente não é uma tela cheia de trilhas e plugins. É o mínimo necessário para começar a gravar imediatamente, com o caminho do sinal já configurado.

**Trilha de voz principal**

Uma trilha mono configurada para a sua interface e microfone. Gain staging inicial definido — input routing correto, monitoramento pronto. Plugins inseridos na sequência certa, mas sem configurações travadas: EQ de correção corta, compressor, de-esser e um limitador de proteção no final da cadeia. Os parâmetros você ajusta por projeto; a ordem não muda.

**Bus de voz**

Um grupo recebendo a trilha de voz principal. O processamento de caráter — qualquer compressão de cola, brilho final ou saturação leve — vai aqui, não diretamente na trilha de gravação. Isso isola o processamento de captação do processamento de mix. Se você quiser testar uma alternativa de plugin, você faz isso no bus sem tocar no take gravado.

**Trilhas de música e ambiente (para podcast)**

Uma ou duas trilhas estéreo para vinheta, trilha de abertura e música de fundo. Volume de referência já calibrado em relação à voz — a música costuma ficar em torno de -20 a -22 dBFS enquanto a voz sobe para -12 a -10 dBFS na reprodução normal. Se você usa ducking, o sidechain já está ligado: a voz abaixa automaticamente a música sem precisar configurar do zero.

**Bus master com medidor de LUFS**

Um plugin de medição de loudness integrado no caminho de saída, já configurado para o alvo da plataforma. Para podcast, -16 LUFS integrado é o ponto de referência mais usado. Para narração de audiolivro, -20 LUFS integrado com pico entre -3 e -6 dBFS atende a maioria das especificações do ACX e distribuidoras equivalentes. Ter o medidor no template significa que você abre o projeto e já sabe onde está antes de mixar qualquer coisa.

**Preset de exportação salvo**

Além das trilhas, salve junto o preset de exportação: formato WAV, 24 bits, 44.1 kHz ou 48 kHz dependendo do destino. A exportação não faz parte do template em si na maioria das DAWs, mas salvar o preset evita que você entregue um MP3 320 kbps em um projeto que pedia WAV 24 bits.

## O que não colocar

Plugins com configurações fixas que você vai querer ajustar em todo projeto não pertencem ao template — eles criam a falsa sensação de "já está pronto" e te levam a não ouvir o que o microfone capturou no dia. Parâmetros de compressão, frequências de corte de EQ, ganho de trilha — esses ficam zerados ou em neutro. O template define o caminho; os valores você calibra ao escutar.

## Como salvar em cada DAW

No **Reaper**: `File > Project Templates > Save as Template`. No **Logic**: `File > Save as Template`. No **Ableton**: salve o projeto na pasta `User Library/Templates`. No **Pro Tools**: `File > Save as Template`.

Depois de salvar, abra um projeto real usando o template e confirme que o routing de input do microfone está ativo — algumas DAWs não preservam o input ao abrir em um hardware diferente.

Revise o template a cada três ou quatro meses. Quando você muda de plugin favorito, troca de microfone ou muda de plataforma de destino, o template precisa refletir isso. Um template desatualizado trabalha contra você em vez de a seu favor.

---

Na Speake, sessões de narração e podcast partem de um template estruturado por tipo de projeto — o que garante que o processamento correto está disponível desde o primeiro take, sem reconfiguração a cada entrega.

Quer ajuda profissional com sua produção de áudio? [produção de áudio na Speake](https://speake.com.br).
