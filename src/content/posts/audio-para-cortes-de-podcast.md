---
title: "Áudio para cortes de podcast: LUFS para Reels e TikTok"
description: "Como preparar o áudio para cortes de podcast: alvo de -14 LUFS, true peak em -1,5 dBTP, compatibilidade mono e faixa dinâmica curta para ouvir no celular."
pubDate: 2026-08-28
tags: ["masterizacao", "podcasting"]
image:
  src: "../../assets/posts/masterizacao.svg"
  alt: "Barras estilizadas de um equalizador"
---

Áudio para cortes de podcast se entrega em torno de **-14 LUFS integrado**, com true peak em **-1,5 dBTP**, em mono ou num estéreo que não colapse ao ser somado, e com faixa dinâmica curta (LRA de 3 a 6 LU). Instagram, TikTok e YouTube normalizam o volume de cada upload, então masterizar o corte mais alto que isso não faz ele tocar mais alto — só entrega menos dinâmica e mais risco de distorção depois da recompressão da plataforma.

## Qual LUFS usar num corte de podcast para Reels, TikTok e Shorts?

Use -14 LUFS integrado como alvo único para os três e ajuste o true peak conforme a plataforma. Não existe ganho em fazer um master por rede: as três normalizam para baixo o que chega mais alto que o alvo delas, e as diferenças medidas entre elas são menores que a variação causada pelo próprio celular do ouvinte.

| Destino | Alvo prático (LUFS integrado) | True peak | Observação |
|---|---|---|---|
| YouTube / Shorts | -14 | -1 dBTP | Abaixa o que vem mais alto; não levanta o que vem baixo |
| Instagram / Reels | -14 (tolera até -12) | -1,5 dBTP | Sem especificação pública; valores vêm de medição |
| TikTok | -14 | -1,5 dBTP | Sem especificação pública; comportamento varia por versão do app |
| Episódio completo no Spotify | -14 | -1 dBTP | Mesmo alvo do corte, mixagem diferente |
| Episódio completo no Apple Podcasts | -16 | -1 dBTP | Alvo recomendado pela própria Apple |

Se você quiser um único número para não errar: -14 LUFS e -1,5 dBTP servem para qualquer corte publicado hoje. O detalhamento dos alvos por plataforma de áudio está no guia de [loudness em LUFS para podcast e streaming](/posts/loudness-lufs-podcast-streaming/).

## Por que meu corte fica com áudio baixo ou distorcido depois do upload?

São dois problemas diferentes com a mesma origem: o corte foi entregue alto demais. Quando o arquivo chega em -9 ou -10 LUFS, a plataforma aplica ganho negativo até o alvo dela — e o resultado é um vídeo que soa comprimido, sem impacto e, na comparação com o feed, nem mais alto que os outros.

A distorção vem da segunda etapa. Toda plataforma recodifica o áudio em AAC ou Opus, e a codificação com perdas cria picos intersample acima do valor que o seu limitador mostrava. Um corte limitado em -0,1 dBTP pode voltar do upload com picos reais de +0,5 dBTP, que estouram na conversão do celular. Deixar a margem em -1,5 dBTP resolve isso sem custo audível.

## Preciso exportar o corte em mono ou estéreo?

Exporte em estéreo, mas mixe pensando em mono. O alto-falante do celular é mono, e boa parte dos cortes é ouvida exatamente assim: voz somada, sem fones. Se a mixagem depende de largura estéreo, ela perde corpo na soma.

Três regras que resolvem quase tudo:

- Voz sempre no centro, sem duplicação nem widener.
- Música de fundo em estéreo natural, sem plugin de alargamento (eles são a causa mais comum de [cancelamento de fase](/posts/cancelamento-fase-multiplos-microfones/) na soma mono).
- Antes de exportar, escute o corte inteiro com o master somado em mono. Se a música sumir ou a voz mudar de timbre, o problema é a mixagem, não a plataforma.

## Como preparar o áudio de um corte a partir do episódio já masterizado

Não corte do arquivo publicado. O episódio publicado já passou por limitação e normalização, e recortar dali empilha processamento sobre processamento.

1. **Volte à sessão do episódio** e exporte só o trecho do corte a partir da mixagem, antes do master final.
2. **Faça o corte pelo silêncio**, não no meio da respiração: deixe 150 a 300 ms de [tom de sala](/posts/tom-de-sala-edicao-audiolivro/) antes da primeira sílaba e depois da última.
3. **Passa-alta em 80-100 Hz** na voz. Nada abaixo disso sobrevive no alto-falante do celular, e o que fica só rouba headroom.
4. **Comprima em 3:1** com 3 a 5 dB de redução de ganho nos picos, para segurar a faixa dinâmica entre 3 e 6 LU — o corte vai ser ouvido no ônibus, não no estúdio.
5. **Limite em -1,5 dBTP** com true peak ligado no limitador (não é o mesmo que peak comum).
6. **Meça o LUFS integrado** do arquivo final e ajuste o ganho de saída até chegar em -14. Medidores gratuitos como o Youlean Loudness Meter ou o LUFS Meter do próprio Premiere/DaVinci resolvem.
7. **Renderize o áudio em 48 kHz/24 bit** dentro do vídeo. É a taxa nativa de todo pipeline de vídeo — converter para 44,1 kHz só adiciona um passo desnecessário.

Em produções que a Speake edita, os cortes saem desse export dedicado da mixagem, e não do MP3 já publicado: é a diferença entre um corte que soa como o episódio e um que soa como uma cópia de terceira geração.

## O que muda porque o corte é ouvido no celular e sem som?

Duas coisas: a resposta de frequência do alto-falante e o autoplay mudo. Alto-falante de celular praticamente não reproduz nada abaixo de 400-500 Hz, então a inteligibilidade da voz vive na região de 2 a 5 kHz — 1 a 2 dB de realce ali rendem mais que qualquer ajuste de graves.

E como o feed começa sem som na maioria das sessões, o corte precisa de legenda queimada e de um primeiro segundo que funcione em silêncio. O áudio caprichado é o que segura quem ativou o som; a legenda é o que faz a pessoa ativar.

## Perguntas frequentes

**Preciso masterizar cada corte separadamente?**
Sim, mas é rápido. Cada corte tem um conteúdo dinâmico diferente — um trecho de risada e um trecho de fala calma medem LUFS bem distintos partindo do mesmo episódio. Medir e ajustar o ganho de saída leva menos de um minuto por corte.

**Qual nível usar para a música de fundo no corte?**
Deixe a música 15 a 20 dB abaixo da voz nos trechos falados, com [ducking por sidechain](/posts/sidechain-ducking-musica-podcast/) automático. Em corte curto ouvido no celular, música alta demais come a inteligibilidade antes de qualquer outro erro aparecer.

**Cortes verticais e horizontais precisam de mixes diferentes?**
Não. O formato de imagem não muda nada no áudio. O que muda é o destino: se o mesmo corte vai para o feed e para um episódio completo no Apple Podcasts, aí sim vale um segundo master em -16 LUFS.

Quer ajuda profissional com a edição e os cortes do seu podcast? Conheça a [Speake](https://speake.com.br).
