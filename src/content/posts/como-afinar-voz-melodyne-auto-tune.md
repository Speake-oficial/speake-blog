---
title: "Como afinar voz: Melodyne ou Auto-Tune?"
description: "Melodyne serve para afinação cirúrgica depois da gravação; Auto-Tune, para correção em tempo real e efeito. Quando usar cada um, que valores ajustar e em que ordem."
pubDate: 2026-08-18
tags: ["producao-musical", "mixagem"]
---

Para afinar voz com resultado natural, use o Melodyne: ele analisa a gravação nota por nota e permite corrigir altura, vibrato e formante de cada sílaba separadamente. Use o Auto-Tune quando quiser correção em tempo real durante a gravação ou o efeito de afinação audível característico do trap, do hyperpop e do funk melódico. Os dois não competem — a maioria das produções comerciais usa Melodyne no vocal principal e Auto-Tune como efeito em faixas específicas.

## O que é melhor para afinar voz: Melodyne ou Auto-Tune?

Depende de quando a correção acontece e de quanto ela deve ser percebida. O Melodyne trabalha em modo offline: ele varre o áudio, separa a performance em blobs (um por nota) e você edita cada um manualmente. O Auto-Tune trabalha em tempo real, corrigindo o sinal enquanto ele passa, sem que você escolha nota por nota.

| Critério | Melodyne 5 | Auto-Tune Pro |
|---|---|---|
| Processamento | Offline, nota por nota | Tempo real, contínuo |
| Controle | Total (altura, vibrato, formante, tempo) | Paramétrico (escala, velocidade, humanize) |
| Tempo por vocal principal | 20 a 40 min | 2 a 5 min |
| Uso típico | Pop, R&B, sertanejo, MPB, voz de artista | Trap, hyperpop, funk, guia de gravação |
| Preço (licença) | US$ 99 (Essential) a US$ 699 (Studio) | ~US$ 459 perpétua ou ~US$ 25/mês no Unlimited |
| Latência ao vivo | Não se aplica | Baixa o suficiente para monitoração |

Se você só pode ter um e trabalha com voz cantada gravada em estúdio, o Melodyne resolve mais casos. Se você grava rap melódico ou precisa que o cantor ouça a voz já afinada no fone, o Auto-Tune é o certo.

## Como afinar voz sem que ela pareça robótica?

Voz soa robótica quando a correção elimina três coisas que o ouvido usa para reconhecer uma performance humana: o desvio microtonal no ataque da nota, o vibrato natural e o formante original. Preserve essas três e a afinação vira invisível.

Valores que funcionam na prática:

1. **Deixe 5 a 10 cents de desvio** nas notas sustentadas. Correção a 0 cent em toda a linha é o que cria a sensação de plástico. No Melodyne, isso significa usar a macro *Correct Pitch Center* em torno de 70% a 90%, nunca em 100%.
2. **Não zere o vibrato.** A macro *Pitch Modulation* controla a profundidade do vibrato. Reduza no máximo 20% a 30% — zerar transforma nota sustentada em senoide.
3. **Mantenha o pitch drift baixo.** O *drift* é a variação lenta dentro da nota e a transição entre notas. Corrigir acima de 40% deixa a ligadura entre sílabas quadrada.
4. **Compense o formante** quando mover uma nota mais de 2 semitons. Deslocar a altura sem tocar no formante gera efeito chipmunk (para cima) ou voz cavernosa (para baixo). Empurre o formante levemente na direção oposta.
5. **Deixe as consoantes em paz.** Blobs de sibilante e oclusiva não têm altura definida. Editar esses trechos só introduz artefato.

No Auto-Tune, o parâmetro decisivo é o Retune Speed, numa escala de 0 a 400 (em milissegundos de resposta): 0 a 10 produz o efeito T-Pain assumido; 20 a 40 serve para pop moderno com correção perceptível mas aceitável; 40 a 80 é a faixa para baladas e vozes que precisam soar naturais. Antes de qualquer ajuste, defina a tonalidade e a escala da música — em escala cromática o plugin puxa a nota para o semitom mais próximo, que nem sempre é o certo.

## Afinar antes ou depois de corrigir o tempo?

Corrija o tempo primeiro, a afinação depois. O motor de detecção de altura usa a estrutura temporal do sinal para decidir onde uma nota começa e termina; se o alinhamento rítmico mudar depois, os limites dos blobs deixam de coincidir com as sílabas e as edições de formante ficam deslocadas.

A ordem completa numa faixa vocal é: comping dos takes → limpeza de ruído e respirações → alinhamento rítmico → afinação → só então compressor, EQ e de-esser. Afinar antes do comping é desperdício: você processa material que pode nem entrar no comp final.

## Dá para afinar voz sem comprar plugin?

Sim, e provavelmente você já tem uma ferramenta nativa. O Logic Pro traz o Flex Pitch, o Cubase tem o VariAudio, o Studio One inclui o Melodyne Essential na licença, e o Reaper vem com o ReaTune. Todos permitem edição por nota com qualidade suficiente para conteúdo falado, backing vocals e demos.

Entre os gratuitos de terceiros, o Graillon 2 (versão free) e o MAutoPitch cobrem correção em tempo real e o efeito duro. Nenhum deles chega perto do algoritmo do Melodyne em vozes com muito vibrato ou material polifônico, mas resolvem a maior parte do trabalho de home studio. Na Speake, a produção vocal usa afinação manual nota a nota justamente nos casos em que o algoritmo automático falha: vozes com muito ar, sussurro e passagens de peito para falsete.

## Perguntas frequentes

**Afinação vocal serve para narração e podcast?**
Não para corrigir altura — voz falada não tem notas sustentadas. O que ajuda em narração é a edição de entonação em frases que caem demais no final, e isso se faz melhor com automação de volume e edição de tempo do que com afinação.

**Preciso afinar backing vocals também?**
Sim, e geralmente com correção mais forte que a do lead. Em empilhamentos de 4 a 8 vozes, pequenos desvios entre camadas viram batimento perceptível. Corrija os backings a 90% a 100% e mantenha o lead solto.

**Afinar voz estraga a qualidade do áudio?**
Correções de até 1 semitom são praticamente transparentes nos algoritmos atuais. Acima de 2 semitons começam a aparecer artefatos no ataque das consoantes e no formante — nesse ponto, regravar a frase custa menos tempo do que consertar.

Voz afinada é meio caminho — o outro meio é publicar com constância. Na [Speake](https://speake.com.br) você mantém uma estação de áudio e sua audiência assina para ouvir.
