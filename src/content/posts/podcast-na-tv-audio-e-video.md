---
title: "Podcast na TV: o que muda no áudio e no vídeo"
description: "Podcast na TV toca em alto-falante pequeno e somado em mono: ajuste LRA, corte de grave, volume da música e tamanho de legenda antes de publicar o episódio."
pubDate: 2026-11-17
tags: ["podcasting", "masterizacao"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Podcast na TV chega ao ouvinte por dois alto-falantes pequenos, a dois ou três metros de distância e quase sempre somados em mono — o oposto de um fone encaixado na orelha. Na prática, isso significa três ajustes na entrega: fala no centro, faixa de loudness curta (LRA entre 4 e 7 LU) e nada essencial abaixo de 150 Hz. O alvo de normalização não muda (**-14 LUFS** para YouTube), mas a mixagem e o tamanho das legendas mudam.

## Quantas pessoas ouvem podcast pela TV?

Deixou de ser exceção. O Edison Podcast Metrics mediu, no primeiro trimestre de 2026, **13% dos ouvintes semanais de podcast nos Estados Unidos apontando a televisão como dispositivo principal** — eram 1% em 2021. O YouTube informou mais de **700 milhões de horas de podcast assistidas em aparelhos de sala de estar em outubro de 2025**, quase o dobro do ano anterior. No Brasil, pela Kantar IBOPE Media, a TV já passou o celular como principal aparelho de consumo de YouTube dentro de casa.

## Por que o podcast soa diferente quando é assistido na TV?

Porque a cadeia de reprodução é pior em tudo que importa para a fala. A maioria das TVs finas traz dois alto-falantes de 10 W a 20 W, com drivers de 4 a 6 cm voltados para baixo ou para trás, que quase não entregam nada abaixo de **150 Hz a 200 Hz** — sobra a faixa média, contra o ruído da casa.

Dois efeitos previsíveis:

- **O estéreo colapsa.** Os alto-falantes ficam de 20 cm a 80 cm um do outro, e os modos "voz clara" e "noturno" somam os canais: voz panoramizada volta ao centro com nível menor.
- **A dinâmica desaparece.** Fala sussurrada que funciona no fone some no volume baixo da sala — e o ouvinte não sobe o volume, desiste do episódio.

## Como mixar podcast para alto-falante de TV?

1. **Exporte a fala centrada e em mono** quando o episódio for só conversa. Se o master for estéreo por causa de música, mantenha as vozes no centro — mesma lógica de [mono ou estéreo no podcast](/posts/podcast-mono-ou-estereo/).
2. **Passa-altas em 80 Hz a 100 Hz** em cada faixa de voz. O grave abaixo disso não toca na TV e só rouba headroom do limitador.
3. **Aperte a faixa de loudness.** Meça o LRA na exportação e mire **4 a 7 LU** para fala. Acima de 10 LU, o ouvinte na sala perde trechos inteiros.
4. **Baixe a cama musical.** 15 dB abaixo da fala funciona no fone; na TV, 18 dB a 20 dB. O [sidechain ducking](/posts/sidechain-ducking-musica-podcast/) resolve sem automação manual.
5. **Teste em mono, em volume baixo, num alto-falante só.** É a verificação que mais encontra problema.

## Em quantos LUFS entregar se o episódio vai ser visto na TV?

O alvo não muda por causa da TV: o YouTube normaliza o que passa de cerca de **-14 LUFS** integrado, e é esse o valor de entrega do episódio filmado. Se o mesmo áudio também vai para Apple Podcasts, -16 LUFS é o alvo de lá — detalhes em [loudness e LUFS para podcast](/posts/loudness-lufs-podcast-streaming/).

O que muda é o teto: deixe **-1 dBTP**, porque o processamento interno da TV (realce de diálogo, limitador de proteção do alto-falante) distorce material colado em 0. O ganho percebido vem de LRA curto, não de master mais alto.

## O tamanho da legenda muda quando o podcast é visto na TV?

Muda, e é o erro mais comum de quem veio do vertical: legenda pensada para celular na mão fica ilegível a três metros.

| Elemento | Mínimo a 1080p | Confortável |
|---|---|---|
| Legenda | 24 px | 36–48 px |
| Nome do convidado | 30 px | 40–56 px |
| Texto de apoio | 28 px | 40 px |

Mantenha tudo dentro de 90% da área da tela (5% de margem por borda): TVs ainda cortam borda em alguns modos de imagem. E não queime no master 16:9 a legenda gigante dos cortes verticais — exporte as duas versões separadas, como no fluxo de [legenda para corte de podcast](/posts/como-colocar-legenda-no-corte-de-podcast/).

## Como testar o episódio na TV antes de publicar?

Checklist de cinco minutos, com o arquivo final:

- [ ] Toque o master na TV, por HDMI ou pelo app, no volume que você usaria à noite.
- [ ] Ouça a três metros, com a cozinha funcionando — é a condição real.
- [ ] Confirme que entende cada frase sussurrada sem mexer no controle.
- [ ] Leia o nome do convidado na tela a três metros.
- [ ] Repita com o modo "voz clara" ligado, padrão de fábrica de muitos aparelhos.

Na TV a escuta é mais longa e costuma ter mais de uma pessoa na sala: diga em voz alta, no começo, o nome do programa e o tema do episódio — quem está na poltrona não leu o título antes de dar play.

## Perguntas frequentes

**Preciso exportar uma versão diferente do episódio para a TV?**
Não. Um master com fala centrada, LRA curto e -1 dBTP de teto funciona no fone, no celular e na TV. Só o vídeo vertical pede entrega separada, por enquadramento e legenda.

**Áudio espacial ou Dolby Atmos ajuda no podcast assistido na TV?**
Para conversa, não: o ganho é nulo em alto-falante de TV e o downmix pode baixar a voz. Áudio espacial faz sentido em ficção sonora e música.

**Vale colocar capítulos pensando em quem assiste na sala?**
Vale: na TV o controle remoto torna o avanço preciso mais difícil que no celular, e capítulos bem marcados viram a navegação do episódio — o processo está em [como adicionar capítulos](/posts/capitulos-no-podcast-como-adicionar/).

A sala de estar amplia o alcance, mas a TV do ouvinte continua sendo a vitrine de outra plataforma. Na [Speake](https://speake.com.br) você publica os episódios numa estação própria e cobra assinatura mensal de quem faz questão de acompanhar o programa.
