---
title: "Cancelamento de fase: por que dois microfones próximos destroem o som um do outro"
description: "Quando dois microfones captam a mesma fonte sonora com distâncias diferentes, frequências se cancelam e o som fica fino e metálico. Entenda comb filtering, a regra dos 3:1 e como evitar o problema antes da gravação."
pubDate: 2026-06-29
tags: ["microfones", "mixagem"]
image:
  src: "../../assets/posts/microfone.svg"
  alt: "Ilustração estilizada de um microfone"
---

Gravação com dois apresentadores na mesma sala, cada um com seu microfone, costuma soar "fina" e meio metálica mesmo quando cada microfone, isolado, está limpo. O problema raramente é o equipamento — é cancelamento de fase entre os dois microfones captando a mesma fonte sonora com distâncias diferentes. É um defeito que não aparece testando um microfone por vez, só aparece quando os dois canais tocam juntos.

## O que realmente acontece

Som é onda de pressão, e toda onda tem fase. Quando a mesma fonte sonora chega a dois microfones em momentos levemente diferentes — porque as distâncias são diferentes —, algumas frequências chegam em fase nos dois canais (e se somam, ficando mais fortes) e outras chegam fora de fase (e se cancelam, ficando mais fracas). O resultado, quando os dois canais são somados na mixagem, é uma sequência de picos e vales na resposta de frequência que lembra o desenho de um pente — daí o nome comb filtering (filtro pente).

Isso não é teórico: é o motivo de uma voz captada por dois microfones próximos perder corpo nos médios-graves e ganhar um timbre estranho, "telefônico", que nenhum EQ corrige de forma limpa, porque o problema não é uma frequência fraca — é cancelamento físico de fase, frequência por frequência.

## Onde isso aparece na prática

- **Podcast com dois microfones na mesma mesa, sem isolamento entre eles**: o microfone da pessoa A capta um pouco da voz da pessoa B, e vice-versa, com distâncias diferentes em cada combinação. Ao somar os canais, esse "vazamento" cruzado soma fase com atraso.
- **Gravação de instrumento acústico com microfone principal + microfone de apoio**: clássico em gravação de violão, piano e bateria overhead. Sem cuidado com a distância relativa, a soma dos dois microfones cancela frequências específicas do instrumento.
- **Lapela + microfone de mesa captando a mesma pessoa**: comum em vídeo, quando se grava os dois como segurança e depois soma os dois canais sem decidir qual prevalece.

## A regra dos 3:1 e outras soluções

A solução clássica de captação multimicrofone é a regra dos 3:1: a distância entre os dois microfones deve ser pelo menos três vezes maior que a distância de cada microfone até a fonte que ele capta principalmente. Isso reduz o nível relativo do vazamento cruzado o suficiente para que o cancelamento de fase fique abaixo do perceptível.

Quando isso não é suficiente ou não é viável no espaço disponível:

1. **Use microfones cardioides bem direcionados** apontados para fora um do outro, reduzindo o quanto cada um capta da fonte do vizinho.
2. **Aumente a distância física entre as fontes** (e os microfones), não só entre os microfones entre si.
3. **Na mixagem, não some os canais sem critério**: se o vazamento cruzado é audível, silenciar (gate) o canal de quem não está falando no momento evita que o cancelamento apareça nos trechos de fala simultânea.
4. **Em casos graves, inverta a polaridade de um dos canais** e compare — às vezes isso melhora a soma, mas só funciona caso a caso; nunca inverta por padrão sem testar com o ouvido.

## O erro mais comum: tentar resolver com EQ

Cancelamento de fase parece, ao ouvido destreinado, "falta de uma frequência" — e a reação automática é compensar com EQ, boostando justamente a faixa que está sendo cancelada. Isso não funciona, porque o cancelamento acontece na soma das fases, não no nível de uma frequência isolada; aumentar o ganho daquela faixa só amplifica o ruído ao redor do vale, sem trazer de volta o que foi cancelado. O ajuste correto é sempre na captação — distância, ângulo, isolamento — e não na mixagem depois do fato.

Decidir esse setup de microfones antes de gravar economiza horas de tentativa de conserto depois. A Speake monta a captação multimicrofone de podcasts, entrevistas e sessões de gravação musical já prevendo esse tipo de problema, da posição dos microfones ao tratamento do ambiente.

Resolvida a captação, o episódio precisa de casa. Na [Speake](https://speake.com.br) você publica sua estação de áudio e cobra assinatura de quem quer ouvir.
