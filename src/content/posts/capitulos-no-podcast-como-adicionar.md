---
title: "Capítulos no podcast: como adicionar e qual formato usar"
description: "Capítulos no podcast: escreva timestamps HH:MM:SS na descrição, começando em 00:00:00, com no mínimo três marcas. Veja o que Apple, Spotify e YouTube leem."
pubDate: 2026-10-08
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Para adicionar capítulos no podcast, o caminho que funciona em todas as plataformas ao mesmo tempo é escrever os timestamps na descrição do episódio, uma linha por capítulo, no formato `00:00:00 Título do trecho`. A primeira marca tem que ser zero e o episódio precisa de pelo menos três delas: Apple Podcasts, Spotify e YouTube leem esse texto e transformam cada linha em capítulo clicável, sem nenhuma edição de áudio. Formatos mais ricos existem — capítulos embutidos no arquivo e a tag `<podcast:chapters>` no feed —, mas nenhum é lido por todos os aplicativos.

## Como adicionar capítulos no podcast?

São três métodos, e eles não competem: use o primeiro sempre, os outros quando o episódio justificar.

1. **Timestamps na descrição.** Cole as linhas no campo de descrição da hospedagem, no formato `00:00:00 Abertura`. Leva dois minutos, serve para episódio já publicado e é reversível: tirar os timestamps tira os capítulos.
2. **Metadados embutidos no arquivo.** Capítulos gravados nos quadros CHAP e CTOC do ID3 (MP3 e AAC) ou no cabeçalho de um MP4. Apple Podcasts, Overcast, Pocket Casts e Castro leem nativamente, mas algumas hospedagens limpam o ID3 ao reprocessar o arquivo.
3. **Tag `<podcast:chapters>` no feed RSS.** Um arquivo externo referenciado no feed, entregue pela hospedagem. É o formato mais completo e só existe se a sua hospedagem oferecer.

| Método | Onde aparece | Imagem por capítulo | Dá para corrigir depois |
|---|---|---|---|
| Timestamps na descrição | Apple, Spotify, YouTube | Não | Sim, editando o texto |
| ID3 embutido no arquivo | Apple, Overcast, Pocket Casts, Castro | Sim | Só reenviando o áudio |
| `<podcast:chapters>` no RSS | Apple e aplicativos Podcasting 2.0 | Sim | Sim, trocando o arquivo de capítulos |

## Qual formato de timestamp o Spotify, a Apple e o YouTube aceitam?

O formato seguro é `HH:MM:SS Título`, uma marca por linha, em ordem crescente, começando em `00:00:00`. As três aceitam essa escrita; as diferenças estão nas regras de cada uma.

- **Apple Podcasts:** exige a primeira marca em `00:00:00` e no mínimo três capítulos. A recomendação de estilo é título com até 45 caracteres e menos de cinco palavras, capítulos de pelo menos 2 minutos e no máximo 6 por hora.
- **YouTube:** o primeiro timestamp precisa ser `00:00`, com ao menos três capítulos em ordem crescente, cada um de 10 segundos ou mais, cobrindo o vídeo inteiro. Abaixo de uma hora, `MM:SS` basta.
- **Spotify:** converte os timestamps da descrição em capítulos. Esse método e os capítulos Podlove no feed são os que o Spotify documenta com clareza; o suporte a ID3 embutido é inconsistente, então não conte com ele ali.

## A Apple cria capítulos automáticos no meu episódio em português?

Não. Os capítulos automáticos que a Apple Podcasts passou a gerar a partir do iOS 26.2 funcionam **somente em inglês**, o que deixa o catálogo em português inteiro de fora. Além do idioma, a geração automática só vale para episódios completos e bônus (trailer não entra), ignora episódio com menos de 10 minutos, depende de transcrição e não acontece em feed privado.

Duas consequências práticas. Para um programa em português, capítulo continua sendo trabalho manual — por isso escrever os timestamps na descrição vale a cada episódio. E capítulo feito pelo criador tem prioridade sobre o automático, na Apple e no Spotify: quem já publica com timestamps não vê o episódio dividido por uma máquina quando o idioma entrar na lista. Para desligar de vez: Apple Podcasts Connect, aba **Availability** (ou **Settings** por episódio); no Spotify for Creators, **Settings → Auto-generated chapters**.

## Quantos capítulos um episódio deve ter?

Entre três e seis por hora de áudio. O piso de três é exigência técnica de Apple e YouTube; o teto de seis é recomendação da Apple, e existe porque capítulo curto demais vira ruído na lista do aplicativo. Num episódio de 45 minutos, quatro ou cinco marcas cobrem bem: abertura, dois ou três blocos de assunto e encerramento.

Checklist antes de publicar:

- [ ] Primeira marca em `00:00:00`, sem exceção
- [ ] No mínimo três capítulos, em ordem crescente
- [ ] Nenhum capítulo abaixo de 10 segundos (YouTube) ou 2 minutos (recomendação da Apple)
- [ ] Título com até 45 caracteres, sem numeração do tipo "Bloco 1"
- [ ] Uma marca isolando a vinheta e outra o anúncio, para quem quiser pular
- [ ] Timestamps conferidos contra o áudio final, não contra a versão antes do corte

O último item é o erro mais comum: corte feito depois da lista desloca tudo o que vem adiante.

## Perguntas frequentes

**Capítulos ajudam na descoberta do podcast?**
Indiretamente. Nenhuma plataforma declara capítulo como fator de ranqueamento, mas o título de cada marca é texto indexável ligado ao episódio e a lista reduz o abandono de quem procurava um assunto. No YouTube, capítulos também aparecem como trechos na busca.

**Dá para gerar os capítulos automaticamente?**
Dá, partindo de uma transcrição. Auphonic, o aplicativo Chapters e hospedagens como Buzzsprout, Captivate e Transistor sugerem marca e título; marcadores de Reaper e Audition e etiquetas do Audacity exportam os timestamps do projeto. A sugestão erra nome próprio e corta assunto no meio, então revise antes de publicar.

**Consigo adicionar capítulos a um episódio antigo?**
Sim, pelos timestamps na descrição ou pela tag no feed: os dois são editáveis sem tocar no áudio. Capítulo embutido no ID3 exige reenviar o arquivo, e esse reenvio dispara, em algumas hospedagens, notificação de episódio novo para quem segue o programa.

Capítulo é uma camada de navegação que cada plataforma lê do seu jeito, e que algumas já escrevem por você. Na [Speake](https://speake.com.br) você publica os episódios numa estação própria e cobra assinatura mensal de quem quer ouvir.
