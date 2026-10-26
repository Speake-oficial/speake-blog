---
title: "ISRC: o que é e como conseguir o código da gravação"
description: "ISRC é o código de 12 caracteres que identifica cada gravação. Veja como ele é formado, quem pode emitir no Brasil, o passo a passo na Abramus e quando trocar."
pubDate: 2026-10-26
tags: ["producao-musical"]
---

O ISRC (International Standard Recording Code) é o código de 12 caracteres alfanuméricos que identifica uma gravação específica — não a composição, a gravação — em qualquer plataforma do mundo. Quem pode emitir é o produtor fonográfico, ou seja, quem é economicamente responsável por aquela gravação; no Brasil o código sai gratuito pelo Portal Abramus para filiados na categoria Produtor Fonográfico, e as distribuidoras digitais geram um automaticamente no momento do upload. Atribuído uma vez, o ISRC acompanha a gravação para sempre, inclusive se você trocar de distribuidora.

## O que é o ISRC e para que serve?

O ISRC é o padrão internacional de identificação de fonogramas, coordenado pela IFPI. Ele existe para que cada execução detectada em streaming, rádio, TV ou vídeo seja ligada a uma gravação única e, por ela, ao titular que deve receber.

Na prática, o ISRC é o que faz o dinheiro chegar: execução sem código correto é execução que ninguém casa com um titular, e o valor fica retido. É também o que o Ecad usa para vincular o play detectado ao fonograma cadastrado, fluxo detalhado no guia de [como registrar música e receber direitos autorais](/posts/como-registrar-musica-direitos-autorais/).

## Como é formado o código ISRC?

O ISRC tem 12 caracteres em quatro segmentos, sempre nesta ordem. Os hífens servem só para leitura humana: nos sistemas, o código é armazenado como 12 caracteres contínuos.

| Segmento | Tamanho | O que indica | Exemplo |
|---|---|---|---|
| País | 2 caracteres | Território do registrante — `BR` no Brasil (também existem os prefixos BX, BC e BK) | BR |
| Produtor | 3 caracteres | Código único do produtor fonográfico registrado | ABC |
| Ano | 2 caracteres | Dois últimos dígitos do ano em que o código foi gerado | 26 |
| Sequencial | 5 caracteres | Numeração do produtor, começando em 00001 | 00017 |

O resultado é algo como `BR-ABC-26-00017`. O sequencial é controlado pelo produtor: cada gravação nova recebe o número seguinte, e um número nunca é reutilizado, mesmo que a faixa seja descartada.

## Quem pode gerar o ISRC no Brasil?

Somente o produtor fonográfico — quem bancou a gravação. Intérprete, compositor e músico de apoio não emitem ISRC nessa condição.

Para quem gravou em casa com o próprio dinheiro, isso é uma boa notícia: você é o produtor fonográfico daquela gravação e pode emitir o seu próprio código. Basta se filiar à Abramus na categoria Produtor Fonográfico — quem já é filiado em outra categoria pede a inclusão.

## Como conseguir o ISRC pela Abramus, passo a passo

1. **Filie-se na categoria Produtor Fonográfico.** A emissão pelo portal é gratuita para filiados nessa categoria.
2. **Acesse portal.abramus.org.br** com o login da filiação.
3. **Abra "Cadastro de Repertório"** no menu lateral e clique no botão **Fonogramas**.
4. **Preencha os metadados:** título exato, intérpretes, executantes, compositores e editoras, ano, duração e gênero.
5. **Suba o arquivo .wav** — opcional, mas ajuda na identificação futura do fonograma.
6. **Conclua o cadastro.** Com os campos obrigatórios completos, o sistema gera o ISRC automaticamente.

Se a distribuidora já gerou um ISRC para a faixa, não crie um segundo: o código existente é reaproveitado no cadastro, desde que a distribuidora esteja na lista de homologadas da Abramus, e precisa ser digitado manualmente no portal. DistroKid, ONErpm, TuneCore e CD Baby emitem o código no upload — caminho mais rápido para quem publica o primeiro single, como mostra o passo a passo de [como lançar música no Spotify](/posts/como-lancar-musica-no-spotify/).

## Preciso de um ISRC novo para remix, remaster ou versão editada?

Depende de ter havido mudança no conteúdo musical. Remix, edit e versão nova sempre pedem código novo; remaster, em geral, mantém o original.

| Situação | ISRC |
|---|---|
| Remix, versão ao vivo, regravação, radio edit | Novo |
| Mudança de duração maior que 10 segundos | Novo |
| Remaster com aporte criativo significativo | Novo |
| Remaster só com EQ, compressão, de-noise, de-click | Mantém o original |
| Correção de pitch ou velocidade, conversão de taxa de amostragem | Mantém o original |
| Troca de distribuidora, de loja ou de capa | Mantém o original |

Os 10 segundos são o critério prático: abaixo disso, é a mesma gravação; acima, é outra.

## ISRC, ISWC e UPC: qual a diferença?

Os três identificam coisas diferentes e coexistem no mesmo lançamento.

| Código | Identifica | Quem emite |
|---|---|---|
| ISRC | A gravação (fonograma) | Produtor fonográfico, via Abramus ou distribuidora |
| ISWC | A composição (letra e melodia) | Associação de gestão coletiva, após cadastro da obra |
| UPC / EAN | O lançamento como produto (single, EP, álbum) | Distribuidora ou gravadora |

Uma música regravada por dez artistas tem um ISWC e dez ISRCs. Um álbum de doze faixas tem um UPC e doze ISRCs — e é o ISRC, faixa por faixa, que o streaming conta.

## Podcast e audiolivro também usam ISRC?

Não. Episódio de podcast é identificado pelo GUID do item no feed RSS, nunca por ISRC — o GUID é o que impede duplicação de episódio nos agregadores. Audiolivro usa ISBN, o padrão do mercado editorial, com registro próprio para a edição em áudio. O ISRC é específico de fonograma musical: para conteúdo falado, inventar um só suja o metadado.

## Perguntas frequentes

**Preciso pagar para ter um ISRC?**
A emissão pelo Portal Abramus é gratuita para filiados na categoria Produtor Fonográfico: o custo, se houver, está na filiação, não no código. Distribuidoras incluem o ISRC no plano de distribuição.

**Posso usar o mesmo ISRC em plataformas diferentes?**
Sim, e é para isso que ele existe. O mesmo ISRC deve aparecer no Spotify, Apple Music, Deezer e YouTube Music para que as execuções da mesma gravação sejam somadas — base dos cálculos de [qual streaming paga mais por stream](/posts/qual-streaming-paga-mais-por-stream/).

**Como descubro o ISRC de uma música já lançada?**
No painel da distribuidora, no cadastro do fonograma na associação ou nos metadados do arquivo. No Spotify, o código aparece via API e em ferramentas de análise de catálogo, não na interface do app.

O ISRC rastreia a sua gravação nas lojas, mas não decide quanto ela rende. Na [Speake](https://speake.com.br) você publica numa estação própria e a receita vem da assinatura mensal de quem escolhe ouvir você.
