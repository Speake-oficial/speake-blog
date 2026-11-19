---
title: "Episódio de retrospectiva de podcast: como fazer"
description: "Episódio de retrospectiva de podcast: escolha 6 a 10 trechos do ano, nivele tudo em -16 LUFS, costure com narração nova e publique entre 15 e 30 de dezembro."
pubDate: 2026-11-19
tags: ["podcasting", "mixagem"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Um episódio de retrospectiva de podcast funciona melhor como uma coletânea curta de 6 a 10 trechos do ano, de 1 a 3 minutos cada, costurados por narração gravada agora e com duração total de 25 a 45 minutos. O trabalho técnico que define a qualidade é nivelar trechos gravados em condições diferentes — todos em -16 LUFS integrado e -1 dBTP — para o ouvinte não precisar mexer no volume a cada corte. A melhor janela de publicação é entre 15 e 30 de dezembro, quando a busca por "retrospectiva" atinge o pico do ano.

## Como escolher os trechos de uma retrospectiva de podcast?

Os trechos de uma retrospectiva de podcast devem ser escolhidos por dado primeiro e por memória depois. Abra o painel da hospedagem e do Spotify for Creators, liste os 10 episódios mais ouvidos do ano e, dentro de cada um, use o gráfico de retenção para achar os momentos em que a curva fica plana ou sobe — é ali que a audiência prestou atenção.

Critérios que funcionam para a seleção:

- **Um trecho por episódio**, no máximo dois — a retrospectiva é vitrine, não reprise.
- **Autocontido**: o trecho precisa fazer sentido sem o contexto do episódio. Se exigir mais de 15 segundos de explicação na narração, descarte.
- **Variedade de voz**: alterne convidados, apresentadores e formatos (entrevista, solo, mesa).

Anote cada escolha numa planilha simples com episódio, tempo de entrada, tempo de saída e uma frase-resumo. Essa frase vira o roteiro da narração de ligação.

## Qual a duração ideal de um episódio de retrospectiva?

A duração ideal de um episódio de retrospectiva fica entre 25 e 45 minutos para programas semanais e entre 15 e 25 minutos para programas curtos ou diários. A regra prática é não passar de 70% da duração média dos seus episódios normais: retrospectiva longa demais vira maratona de reprise e a retenção cai antes da metade.

## Como igualar o volume de trechos gravados em épocas diferentes?

Igualar o volume de trechos de épocas diferentes exige normalizar cada trecho individualmente antes da montagem, não só o master final. Um episódio de fevereiro gravado com microfone USB e outro de outubro gravado com dinâmico XLR podem ter diferença de 4 a 6 dB de loudness e timbres bem distintos.

Ordem de trabalho na DAW (Reaper, Audition, Logic ou Hindenburg):

1. **Puxe o trecho do arquivo master de cada episódio**, não do MP3 publicado — o MP3 já foi comprimido e perde qualidade numa segunda codificação.
2. **Coloque cada trecho numa trilha própria** e meça o loudness integrado com um medidor (Youlean Loudness Meter, gratuito, ou o medidor nativo da DAW).
3. **Ajuste o ganho de clip** até cada trecho ficar entre -17 e -15 LUFS momentâneo médio.
4. **Aplique EQ leve só onde o timbre destoa**: um corte em 200-300 Hz tira o "abafado" de gravações antigas; um shelf de +1,5 a +2 dB em 5 kHz devolve presença.
5. **Grave a narração de ligação no seu setup atual**, a 48 kHz/24 bit, e trate com a mesma cadeia dos episódios normais.
6. **Master final**: limitador com teto em -1 dBTP e loudness integrado de -16 LUFS para estéreo (ou -19 LUFS se publicar em mono).

| Problema no trecho antigo | Correção rápida |
|---|---|
| Volume mais baixo | Ganho de clip, não compressor |
| Ruído de fundo constante | Redução de ruído leve (RX Voice De-noise ou Audition) em 6-10 dB |
| Voz abafada | Corte de 2-3 dB em 250 Hz |
| Eco de sala | De-reverb com moderação; se não resolver, troque o trecho |
| Música de fundo com direitos | Corte o trecho antes ou depois da música |

## Como fazer a transição entre os trechos?

A transição entre os trechos de uma retrospectiva funciona melhor com três elementos: uma frase de narração de 10 a 20 segundos dizendo de qual episódio vem o trecho, um respiro de 0,5 a 1 segundo de silêncio ou tom de sala, e uma vinheta curta (2 a 4 segundos) que se repete em toda a coletânea.

Evite crossfade longo entre voz e voz — duas falas sobrepostas soam como erro de edição. Use crossfade de 10 a 30 ms só para eliminar cliques no corte, e deixe a música de transição entrar com ducking de -12 a -15 dB embaixo da narração.

Mencione o número do episódio original em cada transição. Isso transforma a retrospectiva num guia do catálogo: quem gostou do trecho sabe exatamente onde ouvir o resto.

## Preciso pedir autorização ao convidado para reusar o trecho?

Pedir autorização ao convidado para reusar o trecho na retrospectiva é a prática mais segura, mesmo quando o termo de gravação original já cobre reprodução. Uma mensagem curta resolve: "Vamos usar 2 minutos da sua fala no episódio de retrospectiva de 2026, tudo bem?".

## Checklist de publicação

- [ ] Título com "Retrospectiva 2026" e o nome do programa
- [ ] Capítulos marcando cada trecho com o número do episódio original
- [ ] Show notes com link para cada episódio citado
- [ ] Loudness integrado conferido no arquivo final (-16 LUFS, -1 dBTP)
- [ ] Publicação entre 15 e 30 de dezembro
- [ ] Corte de 30 a 60 segundos do melhor trecho para redes sociais

## Perguntas frequentes

**Retrospectiva conta como episódio novo para quem publica toda semana?**
Conta, desde que tenha narração e curadoria novas. Para a audiência, uma coletânea bem editada mantém a constância do calendário durante as festas sem exigir gravação longa.

**Vale fazer retrospectiva no primeiro ano do podcast?**
Vale, mesmo com 15 ou 20 episódios publicados. Para quem chegou depois, é a porta de entrada mais rápida para o catálogo.

Uma boa retrospectiva lembra a audiência de tudo que ela ouviu no ano e abre espaço para o que vem a seguir. Na [Speake](https://speake.com.br) você publica os episódios de 2027 numa estação própria e quem não quer perder nenhum assina por mês para ouvir.
