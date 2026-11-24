---
title: "Como editar podcast no Audacity 4: o que mudou e passo a passo"
description: "Como editar podcast no Audacity 4: clipes não destrutivos, formato .aup4, recursos que ainda faltam e o fluxo de corte, limpeza e loudness até o MP3 final."
pubDate: 2026-11-24
tags: ["podcasting", "mixagem"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Para editar podcast no Audacity 4, importe a gravação em WAV 48 kHz/24 bit, corte os clipes direto na timeline (agora a edição é não destrutiva), aplique redução de ruído, compressão leve e normalização de loudness em -16 LUFS, e exporte em MP3 de 128 kbps mono ou 192 kbps estéreo. O Audacity 4, lançado em 3 de setembro de 2026, segue gratuito e de código aberto, mas mudou a lógica de edição de "faixa" para "clipe" e ainda não tem alguns recursos da versão 3, como o gerenciador de macros.

## O que mudou no Audacity 4?

O Audacity 4 é a maior reconstrução do editor em mais de 25 anos: a interface foi refeita em Qt, a edição passou a ser baseada em clipes e o formato de projeto mudou para .aup4. Para quem edita podcast, cinco mudanças importam:

- **Edição não destrutiva:** aparar um clipe não apaga o áudio por baixo. Dá para puxar a borda de volta e recuperar uma frase cortada cedo demais.
- **Clipes sobrepostos e agrupados:** clipes podem se sobrepor na timeline e ser agrupados para mover, copiar e colar juntos — útil para levar a fala do apresentador e a do convidado em bloco.
- **Ferramentas contextuais:** os modos Seleção, Envelope, Desenho e Multiferramenta deixaram de existir. O comportamento muda conforme onde você clica, e o corte (split) é feito por atalho ou na própria forma de onda.
- **Medidor por faixa:** cada faixa tem seu medidor, que também monitora a entrada durante a gravação.
- **Workspaces:** presets Modern, Classic e Music salvam o layout de barras e painéis. Quem vem do Audacity 3 pode começar pelo Classic.

Os plugins aceitos são VST3, Nyquist, LV2 (Linux) e Audio Units (macOS).

## O que o Audacity 4 ainda não tem?

O Audacity 4 ainda não tem Time Tracks, faixas MIDI, Mixer Board, gerenciador de macros e suporte a plugins VAMP e LADSPA; a equipe diz que pretende restaurá-los. Para podcast, a ausência que mais pesa é a dos **macros**: quem aplicava a mesma cadeia (ruído → compressor → loudness → exportar) com um clique terá de fazer à mão por enquanto.

O outro ponto de atenção é o formato. O Audacity 4 abre projetos .aup3, mas não salva de volta em .aup3. Como o projeto vira .aup4 sem volta, faça cópia dos .aup3 antes de abrir na versão nova.

| Situação | Recomendação |
|---|---|
| Edita episódio simples (corte, limpeza, exportação) | Audacity 4 |
| Depende de macros para processar vários episódios | Manter Audacity 3 instalado |
| Usa plugins LADSPA ou VAMP | Manter Audacity 3 |
| Projeto antigo em andamento | Terminar no 3, começar os novos no 4 |

## Como editar podcast no Audacity 4, passo a passo?

Editar podcast no Audacity 4 segue a mesma ordem de sempre: organizar, cortar, limpar, nivelar e exportar. Os valores abaixo valem para voz falada:

1. **Configure o projeto em 48 kHz.** A taxa do projeto fica no canto inferior da janela. Grave ou importe em WAV 24 bit; evite editar a partir de MP3.
2. **Uma faixa por voz.** Em gravação com convidado, cada microfone em sua faixa. Agrupe os clipes de cada bloco para mover sem desalinhar.
3. **Corte primeiro, processe depois.** Remova erros, silêncios longos e trechos fora de pauta. Como a edição é não destrutiva, corte sem medo e revise ouvindo em 1,25x.
4. **Reduza ruído de fundo com moderação.** No Noise Reduction, capture 1 a 2 segundos de "silêncio" da sala e use redução entre 6 e 12 dB. Acima disso a voz fica metálica.
5. **Passa-altas em 80 Hz.** Tira ronco de ar-condicionado e batida na mesa sem afinar a voz.
6. **Compressão leve.** Razão de 3:1, threshold entre -20 e -18 dB, ataque de 10 a 20 ms e release de 100 a 200 ms. O objetivo é segurar picos de 3 a 6 dB, não achatar a fala.
7. **Normalize o loudness.** No efeito de normalização de loudness, mire -16 LUFS integrados para estéreo (ou -19 LUFS para mono) e deixe o pico abaixo de -1 dBTP.
8. **Exporte.** Guarde um WAV master e gere o MP3 de distribuição: 128 kbps mono ou 192 kbps estéreo, 44,1 ou 48 kHz. Preencha título e número do episódio nos metadados.

Se o nome de algum efeito estiver diferente no catálogo novo, procure pela categoria: o Audacity 4 reorganizou a lista de efeitos, mas as funções de ruído, EQ, compressão e loudness continuam lá.

## Perguntas frequentes

**Audacity 4 é gratuito?**
Sim. O Audacity 4 continua gratuito e de código aberto, sob licença GPL v3, para Windows, macOS e Linux. O download oficial também está disponível pelo MuseHub, mas não é obrigatório usá-lo.

**Vale atualizar do Audacity 3 para o 4 agora?**
Vale para quem edita episódios de forma manual e quer a edição não destrutiva. Quem depende de macros, faixas MIDI ou plugins LADSPA deve manter o Audacity 3 instalado até esses recursos voltarem.

**Audacity ou Reaper para podcast?**
O Audacity resolve corte, limpeza e exportação sem custo e com curva de aprendizado curta. O Reaper tem roteamento, automação e atalhos mais completos, e compensa quando você edita vários episódios por semana.

Episódio editado e exportado, falta para onde ele vai. Na [Speake](https://speake.com.br) você publica seus episódios numa estação própria, e a audiência que assina por mês é quem sustenta a sua próxima edição.
