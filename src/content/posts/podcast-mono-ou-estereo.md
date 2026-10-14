---
title: "Podcast mono ou estéreo: qual usar ao exportar"
description: "Podcast de fala sai em mono: um canal, metade do arquivo e nenhuma voz que desaparece num fone só. Veja os alvos de LUFS, o bitrate e quando estéreo se justifica."
pubDate: 2026-10-14
tags: ["masterizacao", "podcasting"]
image:
  src: "../../assets/posts/masterizacao.svg"
  alt: "Barras estilizadas de um equalizador"
---

Podcast de fala deve ser exportado em mono: um canal, nenhuma informação estéreo real a preservar e metade do tamanho de arquivo. Estéreo só se justifica quando a posição do som carrega significado — música, ambiência, ficção sonora, gravação binaural. Em conversa, entrevista ou monólogo, mono é a entrega correta, e nenhuma voz desaparece para quem ouve com um fone só.

## Qual a diferença entre mono e estéreo no podcast?

Mono é um arquivo com um canal de áudio; estéreo tem dois canais independentes, esquerdo e direito. A diferença que importa num podcast não é qualidade — é o que acontece quando o ouvinte não escuta os dois lados.

O pior caso é também o mais comum: dois apresentadores com panning aberto, um à esquerda e outro à direita. Quem ouve com um fone só, ou com um bluetooth no ouvido enquanto dirige, perde um apresentador inteiro. O outro caso é o **dual mono** — arquivo de dois canais idênticos, que ocupa o dobro do espaço sem entregar informação extra. É o que a maioria dos podcasts publica sem perceber.

## Podcast mono ou estéreo: qual pesa menos no arquivo?

Mono pesa metade, na mesma qualidade por canal. Um episódio de 60 minutos em MP3 mono a 96 kbps fica em torno de 43 MB; o mesmo episódio em estéreo a 192 kbps passa de 86 MB.

| | Mono | Estéreo |
|---|---|---|
| Canais no arquivo | 1 | 2 |
| Bitrate suficiente para fala | 96–128 kbps | 160–192 kbps |
| Episódio de 60 min em MP3 | ~43 MB (96 kbps) | ~86 MB (192 kbps) |
| Alvo de loudness | -19 LUFS (arquivo de 1 canal) | -16 LUFS |
| Risco de uma voz sumir num fone só | nenhum | alto, se houver panning |
| Quando usar | conversa, entrevista, monólogo, narração | música, ambiência, ficção, binaural |

Hospedagem cobra por armazenamento ou banda, e episódio menor baixa mais rápido em 4G ruim. A 64 kbps mono a hora de áudio cai para ~29 MB, mas 96 kbps é onde a voz para de soar "telefone".

## Qual alvo de LUFS usar quando o podcast é mono?

Use -19 LUFS integrado se o arquivo publicado tem um canal só, e -16 LUFS se tem dois. A diferença de 3 dB existe porque o arquivo mono toca pelos dois alto-falantes do aparelho, somando energia: com o mesmo número no medidor, ele chega ao ouvido cerca de 3 dB mais alto que um estéreo.

A ressalva honesta: nem todo aparelho aplica essa compensação de -3 dB, então o percebido varia entre celular, carro e smart speaker. O método não varia — meça o loudness no arquivo final, no formato final, nunca no projeto da DAW. Nos dois casos, true peak em -1 dBTP.

## Como exportar um podcast em mono sem perder nível?

1. **Centralize o pan de todas as faixas de voz.** Panning de voz em conversa não ajuda clareza, só cria risco de voz desaparecer.
2. **Ouça o episódio somado em mono antes de exportar.** Serve o botão mono do controlador de monitor, o Utility do Ableton ou o Voxengo MSED (gratuito) no master.
3. **Corrija cancelamento de fase nessa escuta.** Dois microfones perto captam a mesma voz com atraso e somam em comb filtering — voz fina, oca, metálica. Respeite a regra 3:1 (microfones afastados entre si no mínimo três vezes a distância de cada um à boca que ele capta) e use noise gate no vazamento.
4. **Confira o ganho depois da soma.** Somar dois canais idênticos pode adicionar até 6 dB; a maioria das DAWs aplica -3 dB na dobra para mono, mas confie no medidor, não na suposição.
5. **Exporte MP3 mono, 44,1 kHz, 96–128 kbps, true peak -1 dBTP.** Grave em 48 kHz/24 bit multipista — mono é decisão de entrega, não de gravação.

## Quando vale publicar o podcast em estéreo?

Vale quando o espaço faz parte do conteúdo — quatro casos claros:

- **Ficção sonora e audiodrama:** personagem que entra pela esquerda, chuva que envolve. O estéreo é narrativa aqui.
- **ASMR e gravação binaural:** o efeito depende inteiramente da diferença entre os canais.
- **Música em destaque:** trilha, show ao vivo, entrevista com performance.
- **Podcast em vídeo:** se a plataforma de destino espera estéreo, mantenha dois canais com as vozes centralizadas.

Fora disso, estéreo em podcast de fala é dual mono disfarçado.

## Checklist antes de exportar

- [ ] Faixas de voz com pan no centro
- [ ] Episódio ouvido em soma mono, sem voz fina ou oca
- [ ] Loudness no arquivo final: -19 LUFS (mono) ou -16 LUFS (estéreo)
- [ ] True peak em -1 dBTP, MP3 mono, 44,1 kHz, 96–128 kbps
- [ ] Teste num fone só, confirmando que nenhuma voz sumiu

## Perguntas frequentes

**Converter um episódio estéreo antigo para mono piora o áudio?**
Só piora se houver cancelamento de fase escondido no estéreo — e aí o problema já estava lá. Converta e compare: se a voz afinou ou perdeu corpo, o conserto é na mixagem, não na conversão.

**Devo gravar em mono para já sair pronto?**
Não. Grave cada microfone na própria faixa mono, em 48 kHz/24 bit, e decida a saída no fim. Gravar tudo somado tira a chance de corrigir uma voz sem mexer na outra.

**Plataformas penalizam arquivo mono?**
Não. Spotify, Apple Podcasts e YouTube aceitam mono sem ressalva. O que eles fazem é normalizar loudness — por isso o alvo em LUFS importa mais que o número de canais.

Exportar é a última decisão técnica do episódio; a próxima é comercial. Na [Speake](https://speake.com.br) você publica numa estação própria e cobra assinatura mensal de quem quer ouvir.
