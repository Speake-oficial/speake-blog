---
title: "Correção de sala por software: o que resolve e o que não"
description: "Correção de sala por software mede a resposta na sua posição de escuta e aplica EQ inverso na monitoração. O que Sonarworks e ARC resolvem, o que não, e como medir."
pubDate: 2026-10-09
tags: ["home-studio", "mixagem"]
image:
  src: "../../assets/posts/home-studio.svg"
  alt: "Ilustração de home studio com tratamento acústico e microfone"
---

Correção de sala por software mede a resposta de frequência na sua posição de escuta com um microfone de medição e aplica o EQ inverso no caminho de monitoração — você continua ouvindo os mesmos monitores, mas com os desequilíbrios de timbre da sala compensados. Funciona bem acima de 80 a 100 Hz e para desvios amplos de grave e agudo; não funciona para tempo de reverberação, reflexões precoces nem cancelamentos profundos de fase. É um acabamento depois do tratamento acústico, nunca um substituto dele.

## Correção de sala por software funciona mesmo?

Sim, para o que ela se propõe: igualar a resposta de frequência no ponto onde você senta para trabalhar. O software toca varreduras de senoide pelos monitores, mede o que chega ao microfone em 18 a 21 posições ao redor da sua cabeça, calcula a média e gera o filtro que derruba os picos e levanta os vales dessa média.

O ganho prático é parar de compensar o que a sala inventa: menos "subi o grave porque não ouvia e estourou no celular", e tradução mais previsível entre fone, monitor e celular.

## O que a correção por software não corrige

Correção por software mexe em amplitude por frequência, e só nisso. Quatro problemas continuam intactos depois de calibrar:

- **Tempo de decaimento (RT60).** Sala que ecoa continua ecoando: filtro não encurta reverberação.
- **Reflexões precoces.** O som que bate na parede lateral e chega 5 ms depois do direto segue borrando a imagem estéreo.
- **Cancelamentos profundos.** Um null de 15 a 20 dB num modo de ressonância não volta com EQ: levantar 18 dB ali só consome headroom e distorce.
- **Ruído de fundo.** Geladeira, ar-condicionado e ventoinha de PC mascaram detalhe, e nenhum filtro remove isso da escuta.

## Sonarworks SoundID ou ARC Studio: qual escolher?

Depende de onde você quer que a correção aconteça: dentro do computador ou fora dele. Com medição cuidadosa, o resultado sonoro das duas é comparável.

| | SoundID Reference | ARC Studio |
|---|---|---|
| Onde roda | Plugin no DAW + modo sistema (pega Spotify, YouTube, navegador) | Caixa de hardware entre interface e monitores |
| Posições de medição | ~18 por padrão | 21 pontos |
| Calibra fone também | Sim, com perfis prontos para centenas de modelos | Não, foco em sala |
| Latência na monitoração | ~1 ms no modo de baixa latência, até ~60 ms no modo mais preciso | fora do caminho do DAW |
| Preço de lista | US$ 199 a 299 com microfone (promoções a partir de ~US$ 169) | US$ 299 a 349 com microfone |

Em reais, os dois caem entre R$ 1.100 e R$ 2.000 convertidos, antes de frete e impostos de importação; o microfone de medição avulso sai por cerca de US$ 99. Regra simples: quem mixa em fone e em monitor resolve os dois com um perfil só no SoundID; quem grava muito e não quer plugin no caminho do som fica melhor com o hardware do ARC Studio.

## Dá para fazer correção de sala de graça com o REW?

Dá, ao custo de tempo. O Room EQ Wizard (REW) é gratuito, mede a sala com um microfone USB calibrado (o miniDSP UMIK-1 custa de US$ 100 a US$ 150) e exporta filtros que você carrega num EQ paramétrico gratuito, como o ReaEQ, no insert de monitoração.

A precisão não é o problema: o REW mede mais coisa que os pagos, RT60 e waterfall inclusive. A diferença é que você escolhe cada filtro à mão e refaz tudo manualmente quando a sala muda.

## Como medir a sala em 7 passos

1. Resolva o posicionamento antes de medir: triângulo equilátero entre as caixas e sua cabeça, tweeters na altura da orelha, 20 cm de folga da parede traseira, simetria lateral.
2. Silencie a sala — ar-condicionado, ventilador, qualquer coisa com motor.
3. Monte o microfone num tripé, na posição exata da sua cabeça, na orientação que o software pedir.
4. Rode todas as posições pedidas, movendo o tripé poucos centímetros por medição: a média é o que segura o resultado.
5. Comece com curva alvo plana e escolha o modo de filtro pela tarefa — baixa latência para gravar, fase linear para mixar.
6. Mantenha a correção só na monitoração: se o plugin está no master, desative-o antes de exportar, senão o EQ da sua sala vai para o arquivo final.

## Preciso de tratamento acústico se eu usar correção por software?

Precisa. Correção por software compensa o que a sala faz com a amplitude; tratamento acústico reduz o que a sala faz com o tempo. Sala sem absorção de grave também entrega medição instável: mova o microfone 10 cm e a resposta abaixo de 150 Hz muda vários dB, então o filtro médio acerta pouco. A ordem de gasto que rende mais é posicionamento (grátis), absorção nos cantos e nos pontos de reflexão primária, e só então software.

## Perguntas frequentes

**Correção de sala muda o que o ouvinte escuta?** Não. A correção age só na sua escuta, para que as decisões de EQ e volume saiam de uma referência honesta — o arquivo exportado não leva nada do filtro, desde que ele fique fora da cadeia de exportação.

**Quanto tempo leva para acostumar?** De alguns dias a duas semanas. O primeiro contato soa mais magro ou mais escuro do que você está habituado, porque a sala vinha inflando certas faixas; compare com faixas de referência conhecidas antes de concluir que a calibração errou.

**Preciso remedir se eu mudar os móveis?** Sim, quando a mudança é grande: sofá, estante ou painel novo alteram a resposta na posição de escuta, principalmente abaixo de 300 Hz. Remedir leva de 10 a 15 minutos.

Com a escuta calibrada, o que falta decidir é para onde vai o áudio que você fecha nessa sala. Na [Speake](https://speake.com.br) você mantém uma estação própria, publica episódios exclusivos e recebe assinatura mensal de quem acompanha.
