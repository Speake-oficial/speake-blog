---
title: "Capa de podcast: tamanho, formato e peso do arquivo"
description: "Capa de podcast: 3000 x 3000 px, JPEG em sRGB e menos de 300 KB passam em todos os diretórios. Veja o limite de cada plataforma e por que a arte é rejeitada."
pubDate: 2026-10-05
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

A capa de podcast que passa em todos os diretórios é um quadrado de 3000 x 3000 pixels, exportado em JPEG no espaço de cor RGB (sRGB) e com menos de 300 KB. O mínimo aceito pela Apple Podcasts e pelo Spotify é 1400 x 1400 px, mas exportar no máximo evita refazer a arte quando outra plataforma exigir mais. Arte fora dessas faixas é a causa mais comum de rejeição de um podcast novo — e a rejeição acontece antes de alguém ouvir o primeiro episódio.

## Qual o tamanho ideal da capa de podcast?

O tamanho ideal da capa de podcast é 3000 x 3000 pixels, proporção 1:1, a 72 dpi — teto aceito pela Apple Podcasts e valor recomendado pelo Spotify. Um único arquivo serve também para YouTube Music, Deezer e Amazon Music.

Resolução não decide se a capa funciona: o que decide é como ela se comporta reduzida. Nos aplicativos, a arte aparece na lista com cerca de 55 a 80 px de lado. Antes de aprovar, reduza o arquivo para 60 px e olhe — se o nome do programa sumiu, a capa está errada mesmo em 3000 px.

| Plataforma | Mínimo | Recomendado | Formato | Peso |
|---|---|---|---|---|
| Apple Podcasts | 1400 x 1400 | 3000 x 3000 | JPEG ou PNG, RGB | até ~500 KB (hospedagens cortam em 300 KB) |
| Spotify | 1400 x 1400 | 3000 x 3000 | JPEG ou PNG | abaixo de 500 KB |
| YouTube Music | 1400 x 1400 | 3000 x 3000 | JPEG ou PNG | abaixo de 2 MB |
| Capa de episódio (opcional) | 1400 x 1400 | 3000 x 3000 | JPEG ou PNG | mesma regra do programa |

## Qual o peso máximo do arquivo da capa de podcast?

Mire em 300 KB. O Spotify aceita cerca de 500 KB e a Apple é mais tolerante, mas as hospedagens distribuem o mesmo arquivo para todos os diretórios e aplicam o limite mais apertado da cadeia.

Em 3000 x 3000, PNG quase sempre estoura esse teto: um PNG de 24 bits dessa dimensão sai entre 2 e 8 MB. Exporte JPEG com qualidade 80 a 90% — a perda é imperceptível nesse tamanho e o arquivo cai para 200 a 400 KB.

Se você tem ImageMagick instalado, a conversão e a conferência são dois comandos:

```bash
magick capa-original.png -resize 3000x3000 -colorspace sRGB -quality 85 capa.jpg
identify -format "%w x %h | %[colorspace] | %b\n" capa.jpg
```

A segunda linha imprime dimensão, espaço de cor e peso. Se aparecer `CMYK`, converta para sRGB antes de enviar.

## Por que a Apple Podcasts ou o Spotify rejeitam a capa do podcast?

Os motivos de rejeição da capa se repetem e todos são verificáveis antes do envio. Em ordem de frequência:

1. **Dimensão fora da faixa** — menor que 1400 px ou maior que 3000 px de lado.
2. **Imagem não quadrada** — 3000 x 2000 é rejeitado; a proporção precisa ser exatamente 1:1.
3. **Espaço de cor errado** — arquivo em CMYK, herdado de um layout feito para impressão.
4. **Peso acima do limite** da hospedagem ou do diretório.
5. **Conteúdo proibido na arte** — logo de plataforma, número de episódio (a capa do programa é fixa), marca de terceiro sem direito de uso, conteúdo explícito sem a marcação no feed.
6. **Metadados incompletos no feed** — falta de URL do site e de nome do responsável derrubam a submissão junto com a arte.

## Quanto texto cabe na capa de podcast?

Cabe o nome do programa e, no máximo, três ou quatro palavras de subtítulo. A regra prática: o título ocupa pelo menos 10% da altura da imagem — 300 px numa arte de 3000 px — para continuar legível a 60 px.

O que quebra a leitura em tamanho pequeno é tipografia fina e fundo fotográfico com áreas claras e escuras sob o mesmo texto. Cor chapada com título em bold resolve a maior parte dos casos; rosto humano grande também funciona, porque é reconhecível antes de o texto ser legível.

## Dá para gerar a capa de podcast com IA?

Dá, e o fluxo confiável é híbrido: gerar o fundo com IA e compor o texto por cima num editor (Figma, Canva, Affinity, GIMP), porque geradores ainda deformam letras no meio de uma arte boa. Confirme se o seu plano permite uso comercial e reexporte a imagem pelo editor para garantir sRGB e peso: a maioria dos geradores entrega PNG grande, fora dos limites da tabela acima.

## Checklist antes de enviar a capa

- [ ] 3000 x 3000 px, exatamente quadrada
- [ ] JPEG, qualidade 80 a 90%
- [ ] Espaço de cor sRGB (não CMYK)
- [ ] Arquivo abaixo de 300 KB
- [ ] Nome do programa legível com a imagem reduzida a 60 px
- [ ] Sem logo de plataforma, sem número de episódio, sem marca de terceiro
- [ ] Mesma arte no feed RSS e na página do programa

## Perguntas frequentes

**Preciso de uma capa diferente para cada episódio?**
Não. A capa do programa é obrigatória e a de episódio é opcional. Ela ajuda em programas com convidados ou temporadas temáticas, mas mantenha o mesmo gabarito visual: quem reconhece a identidade na lista é quem clica.

**Posso trocar a capa depois de publicar?**
Pode, sem prejuízo para o feed. A atualização aparece em até 24 horas no Spotify e pode levar alguns dias na Apple Podcasts, que faz cache da imagem. Trocar a arte não reseta downloads nem assinaturas.

**A capa influencia a descoberta do podcast?**
Indiretamente. A capa não é fator de ranqueamento nos diretórios, mas decide o clique quando seu programa aparece ao lado de outros numa lista ou numa recomendação. Título legível e contraste alto valem mais que detalhe artístico.

Capa aprovada e episódio no ar, falta o que sustenta o trabalho. Na [Speake](https://speake.com.br) você publica numa estação própria e cobra assinatura mensal de quem já clicou e decidiu ficar.
