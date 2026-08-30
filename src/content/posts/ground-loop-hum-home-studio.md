---
title: "Ground loop, hum e 60 Hz: como eliminar ruído elétrico no home studio"
description: "Diagnóstico prático dos tipos de ruído elétrico mais comuns no home studio — ground loop, hum de 60 Hz e hiss — e o que fazer para eliminar cada um sem sair comprando equipamento."
pubDate: 2026-08-08
tags: ["home-studio", "equipamentos-de-audio"]
---

Você pressiona play no projeto em silêncio e lá está: um zumbido constante que não some quando você muta todos os canais. Às vezes é um 60 Hz limpo; às vezes é um buzz mais agressivo com harmônicos; às vezes é um hiss de alta frequência que piora com o ganho. Cada um tem origem diferente e solução específica.

## Ground loop: o culpado mais comum

O ground loop aparece quando dois ou mais equipamentos conectados na mesma cadeia de áudio têm diferença de potencial elétrico entre seus aterros. A corrente "viaja" pelo cabo de áudio para equalizar essa diferença, e você ouve o resultado: um zumbido em 60 Hz (padrão brasileiro) acompanhado de harmônicos em 120 Hz e 180 Hz.

Como identificar: desconecte os cabos de áudio um por um enquanto monitora o sinal. Quando o hum desaparece ao remover um cabo específico, o equipamento naquele ponto é o elo que fecha o loop.

A solução mais direta é um **isolador de linha** — uma DI passiva com transformador de isolamento, ou um isolador específico como o Behringer HD400 — que quebra a continuidade elétrica entre os aterros sem interromper o sinal. Funciona praticamente em todos os casos de ground loop verdadeiro.

Outra causa frequente é o cabo USB entre o computador e a interface. O laptop conectado ao carregador pode criar um loop pelo aterro do USB. Teste simples: desconecte o carregador e opere na bateria. Se o hum some, a fonte de alimentação do notebook é o culpado — um cabo USB com ferrite ou um isolador USB de linha resolve sem precisar usar a bateria em toda gravação.

## Buzz com harmônicos: interferência eletromagnética

Fontes de alimentação chaveadas — carregadores de notebook, fontes de pedaleira e instrumentos digitais, iluminação LED barata — emitem interferência que pode entrar nos cabos de instrumento e microfone por indução. O resultado é um buzz mais agressivo e "sujo" que o ground loop puro, com harmônicos irregulares.

O teste aqui é físico: afaste os cabos de áudio dos cabos de energia. Se o buzz diminui quando você muda o roteamento dos cabos, é interferência por indução. Separe pelo menos 15–20 cm entre cabos de instrumento e cabos de força, e cruze-os em ângulo reto quando precisar cruzá-los — nunca em paralelo.

Instrumentos passivos (guitarra, baixo, microfones dinâmicos sem phantom) são mais sensíveis a esse tipo de interferência do que sinais balanceados em XLR. Usar sempre XLR balanceado até a interface, e uma DI ativa de qualidade para instrumentos com cabo longo, resolve grande parte dos casos.

## Hiss: problema de nível, não de ruído elétrico

Hiss — aquele ruído branco ou rosa de alta frequência — raramente é problema elétrico. Na maioria das vezes é uma questão de gain staging: o pré-amplificador da interface está operando com ganho alto para compensar um sinal de entrada fraco.

Se o hiss sobe e desce junto com o ganho de entrada, a solução não é filtro nem gate — é ajustar o nível na fonte. Calibre a posição do microfone, aumente o sinal na origem, e mantenha o ganho da interface no range onde o sinal marca entre -18 dBFS e -12 dBFS nos picos.

Para microfones de baixa sensibilidade — dinâmicos como o SM7B e similares — um booster de linha como o Cloudlifter CL-1 eleva o sinal antes da interface, permitindo usar menos ganho no pré e reduzindo o hiss do conversor.

## Diagnose antes de comprar

O erro mais caro no home studio é comprar equipamento para resolver um problema que tem solução elétrica simples. Antes de qualquer aquisição, isole o ponto exato onde o ruído entra na cadeia. Um isolador de linha custa entre R$ 100 e R$ 200 e resolve a maioria dos ground loops sem trocar interface, cabo ou computador.

Em projetos de gravação na Speake, verificar o piso de ruído faz parte do processo antes de qualquer sessão. Em narração e audiolivro, onde o fundo deve ser praticamente inaudível, um ground loop não tratado compromete horas de material — e esse tipo de problema não tem correção no pós.

Sala silenciosa, sinal limpo — e agora? Na [Speake](https://speake.com.br) você publica os episódios numa estação própria e transforma audiência em receita mensal.
