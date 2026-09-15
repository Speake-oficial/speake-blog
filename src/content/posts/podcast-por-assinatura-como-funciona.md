---
title: "Podcast por assinatura: como funciona o conteúdo pago"
description: "Podcast por assinatura funciona com feed RSS privado ou app com login: veja como definir preço, o que liberar no conteúdo pago e quantos assinantes você precisa."
pubDate: 2026-09-15
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Podcast por assinatura funciona assim: o ouvinte paga uma mensalidade e recebe acesso a episódios que não estão no feed público, seja por um **feed RSS privado** (usado por Patreon, Apoia.se e ferramentas parecidas) ou por um **app com login** que libera o conteúdo depois do pagamento. A faixa de preço mais comum no Brasil vai de **R$ 9,90 a R$ 39,90 por mês**, dividida em dois ou três níveis, e a conversão típica de ouvinte gratuito para assinante pago fica entre **1% e 3%** da audiência ativa.

## Como funciona o podcast por assinatura?

O modelo tem duas pontas: cobrança recorrente (mensal, via cartão ou Pix) e entrega do conteúdo trancado. A plataforma de pagamento processa a assinatura, e a entrega acontece por um dos dois caminhos — feed RSS privado ou aplicativo próprio com autenticação.

Na prática, quem já publica no feed público mantém dois fluxos paralelos: o programa normal, aberto, que serve para captar audiência, e o programa bônus, fechado, que só quem paga recebe. É esse segundo fluxo que precisa da trava técnica.

## O que é feed RSS privado e como ele libera o conteúdo pago?

Feed RSS privado é um link único, com um token de acesso embutido na URL, que o assinante cola manualmente no tocador de podcast (Apple Podcasts, Podcast Addict, Overcast). Cada pessoa recebe seu próprio link — não é o mesmo endereço para todo mundo.

O problema do RSS privado é a fricção e o vazamento. Colar um link manual em outro app já derruba a conversão em relação a "aperte assinar", e como o link costuma não expirar sozinho, se um assinante vaza a URL, o conteúdo pago fica público até alguém revogar o token manualmente — coisa que a maioria das ferramentas de hospedagem não faz de forma automática. É por isso que apps com login nativo (conta e senha, ou vínculo direto com o pagamento) vêm ganhando espaço sobre o RSS privado: a trava é por conta, não por link.

## Quanto cobrar pela assinatura de um podcast?

Três níveis costumam converter melhor que preço único, porque cada um vende uma coisa diferente:

| Nível | Preço comum | O que entrega |
|---|---|---|
| Básico | R$ 9,90 – R$ 14,90 | Acesso antecipado ao episódio, sem anúncio |
| Intermediário | R$ 19,90 – R$ 24,90 | Episódios bônus mensais, cortes estendidos |
| Avançado | R$ 34,90 – R$ 39,90+ | Conteúdo exclusivo, bastidores, comunidade fechada |

Preço abaixo de R$ 9,90 raramente compensa o custo de processamento (gateway costuma cobrar taxa fixa por transação, que pesa proporcionalmente mais em valores baixos). Acima de R$ 40 sem entrega proporcional derruba a permanência — quem cancela no segundo mês por preço alto normalmente não volta.

## Quantos assinantes preciso para gerar renda relevante?

Depende do preço e da taxa da plataforma, mas dá para estimar. Com tarifas somadas de intermediação e pagamento em torno de 10% a 15% do valor bruto, uma assinatura de R$ 19,90 rende líquido entre R$ 16,90 e R$ 17,90 por assinante.

| Meta líquida/mês | Assinantes a R$ 19,90 (líquido ~R$ 17) |
|---|---|
| R$ 1.000 | ~59 |
| R$ 3.000 | ~176 |
| R$ 5.000 | ~294 |

Usando a conversão de referência de 1% a 3%, chegar a 176 assinantes pagos pede uma base de **6.000 a 17.600 ouvintes ativos** no feed gratuito — é por isso que assinatura paga só decola depois que o programa gratuito já tem [duração e constância](/posts/duracao-ideal-episodio-podcast/) suficientes para reter audiência.

## O que colocar no lado gratuito e no lado pago?

1. **Gratuito:** o episódio completo normal, toda semana, sem atraso — é o que constrói alcance e aparece em busca e recomendação.
2. **Pago, nível básico:** o mesmo episódio sem anúncio e com 24 a 48 horas de antecedência.
3. **Pago, nível intermediário:** um episódio bônus mensal que não existe no feed aberto — bastidor, entrevista estendida, resposta a pergunta de ouvinte.
4. **Pago, nível avançado:** acesso a grupo fechado (Discord, Telegram) e participação em enquete sobre pauta do programa.
5. **Nunca tranque o primeiro episódio ou o de maior alcance orgânico** — ele é a porta de entrada, não o produto pago.

## Perguntas frequentes

**RSS privado e Patreon são a mesma coisa?**
Não. Patreon, Apoia.se e ferramentas parecidas são a camada de cobrança e gestão de assinante; o RSS privado é só um dos métodos de entrega que essas ferramentas usam por baixo — nem toda plataforma de cobrança depende dele.

**Preciso de audiência grande antes de lançar assinatura?**
Não precisa ser grande, mas precisa ser fiel. Um programa com 500 ouvintes muito engajados converte proporcionalmente mais assinantes pagos do que um com 5.000 ouvintes esporádicos.

**Dá para ter assinatura e anúncio no mesmo programa?**
Dá, e é o modelo mais comum: anúncio no feed gratuito paga o alcance, assinatura no feed fechado paga o aprofundamento. São fontes de receita que não competem entre si.

Montar feed RSS privado, revogar token vazado e integrar gateway de pagamento é trabalho técnico que atrasa o lançamento do conteúdo pago. Na [Speake](https://speake.com.br) você cria a estação, publica o episódio exclusivo e a cobrança da assinatura mensal já sai pronta, sem mexer em feed nem em gateway.
