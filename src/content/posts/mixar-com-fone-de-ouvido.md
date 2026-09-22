---
title: "Mixar com fone de ouvido: como acertar sem monitores"
description: "Mixar com fone de ouvido funciona: calibre a resposta com um perfil do seu modelo, use cross-feed, cheque em mono e confira o grave num analisador antes de fechar."
pubDate: 2026-09-22
tags: ["mixagem", "home-studio"]
---

Mixar com fone de ouvido dá certo desde que você compense as três distorções que o fone impõe: resposta de frequência colorida, ausência de cross-feed entre os canais e grave que você sente pouco abaixo de 50 Hz. A correção prática é usar um plugin de calibração com o perfil do seu modelo, ouvir entre 70 e 80 dB SPL, checar a mixagem em mono e conferir o conteúdo grave num analisador de espectro em vez de confiar só no ouvido. Com esses quatro hábitos, uma mixagem feita em fone traduz bem em caixa de som, celular e carro.

## Dá para mixar com fone de ouvido profissionalmente?

Dá, e é o cenário padrão de quem grava em casa. O fone tem uma vantagem que nenhum monitor de home studio tem: ele ignora a acústica do cômodo. Num quarto sem [tratamento acústico](/posts/tratamento-acustico-home-studio/), as reflexões e os modos de sala alteram o que chega ao seu ouvido em 10 dB ou mais em regiões do grave — o fone entrega o sinal direto na orelha, sem esse filtro.

O preço dessa vantagem é que o fone introduz distorções próprias, previsíveis e corrigíveis. Ele não é um monitor pior: é um sistema de escuta diferente, que exige um protocolo diferente — o dos tópicos abaixo. A comparação entre os dois mundos está em [monitores de estúdio ou fones de ouvido](/posts/monitores-vs-fones-home-studio/).

## Por que a mixagem feita no fone soa diferente na caixa de som?

Porque no fone cada ouvido escuta apenas um canal, e na vida real os dois ouvidos escutam as duas caixas. Numa caixa de som, o áudio do canal esquerdo também chega ao ouvido direito, com cerca de 0,6 ms de atraso e filtrado pela cabeça — esse vazamento cruzado é o que o cérebro usa para posicionar sons no espaço. Sem ele, a imagem estéreo fica "dentro da cabeça", os extremos do panorama parecem exagerados e reverb e delay soam mais próximos do que realmente estão.

O resultado típico: mixagens de fone chegam ao carro com estéreo largo demais, reverb curto demais e voz mais baixa do que devia. Plugins de cross-feed e de monitoração virtual simulam esse vazamento e a resposta de uma sala, aproximando o fone da escuta em caixas.

## Software de calibração de fone de ouvido funciona?

Funciona, com a ressalva de que um perfil genérico corrige o modelo, não a sua unidade específica nem o formato da sua orelha. A calibração mede a curva média daquele fone e aplica o filtro inverso, deixando a resposta mais próxima do plano — é o ganho mais barato de precisão disponível para quem mixa em casa.

| Ferramenta | O que é | Funciona com | Faixa de preço (lista, US$) |
|---|---|---|---|
| Sonarworks SoundID Reference | Calibração por perfil + monitoração virtual opcional | Mais de 400 modelos com perfil pronto | 99 a 299 |
| dSONIQ Realphones | Calibração + simulação de sala e cross-feed | Perfis para modelos populares | 99 a 179 |
| Slate VSX | Fone fechado próprio + simulação de salas, carro e clube | Só o fone que vem no pacote | 479 |
| Waves Nx | Simulação de sala com cross-feed, sem calibração por modelo | Qualquer fone | 20 a 100 em promoção |

Converta pelo câmbio do dia e considere impostos de importação: os valores de lista são em dólar e todos esses fabricantes rodam promoções agressivas várias vezes por ano.

Três cuidados ao usar qualquer um deles:

1. Insira o plugin de calibração no último slot do canal master, depois de todo o processamento.
2. **Desative ou faça bypass do plugin antes de exportar.** Renderizar com a curva de correção ativa grava a correção no arquivo final — o erro mais comum de quem começa a calibrar.
3. Use o modo de baixa latência do plugin enquanto grava e o modo de máxima precisão só na mixagem, porque os filtros lineares que mais corrigem a fase são também os que mais atrasam o sinal.

## Fone aberto ou fechado para mixar?

Aberto, sempre que o ambiente permitir. Fones abertos têm palco sonoro mais largo, médios menos coloridos e cansam menos em jornadas longas, porque não pressurizam o canal auditivo. Fechados servem para gravar, onde o vazamento para o microfone é o problema a resolver, e para ambientes barulhentos.

Na faixa de R$ 1.000 a R$ 3.000 no Brasil, os abertos de referência mais usados são o Sennheiser HD 560S/HD 600, o Beyerdynamic DT 990 Pro e o AKG K702 — todos com perfil de calibração pronto nos softwares da tabela acima. Use sempre o mesmo par: familiaridade com uma única resposta vale mais que alternar entre três modelos.

## Em que volume e por quanto tempo mixar de fone?

Entre 70 e 80 dB SPL, com pausa de 10 minutos a cada 45 a 60 minutos. O limite de exposição segura adotado pelo NIOSH é 85 dB por 8 horas, e cada 3 dB acima disso corta o tempo seguro pela metade — a 94 dB você chega ao limite em uma hora. No fone, sem a referência do volume da sala, é fácil passar disso sem perceber.

Volume baixo também melhora as decisões: se a voz continua inteligível e o equilíbrio se mantém baixinho, a mixagem está sólida. O raciocínio é o mesmo do [volume ideal para mixar em monitores](/posts/volume-ideal-para-mixar-db-spl/), só que sem calibrar SPL na sala.

## Checklist antes de fechar uma mixagem feita no fone

1. Ouça em mono e confirme que nada some — cancelamento de fase aparece no mono, não no estéreo do fone.
2. Abra um analisador de espectro no master e veja se existe energia abaixo de 40 Hz que você não está ouvindo; se existir e não for musical, corte com filtro passa-alta.
3. Compare com duas ou três [faixas de referência](/posts/referencias-de-mix-como-usar/) no mesmo fone, niveladas por loudness.
4. Exporte e ouça no celular no alto-falante interno, em fone de intra-auricular comum e, se der, no carro.
5. Confira o loudness final no medidor: em torno de -14 LUFS para streaming de música e podcast em plataformas abertas, -16 LUFS para Apple Podcasts.
6. Deixe a mixagem descansar 12 horas e reouça antes de aprovar.

Os passos 1, 2 e 4 cobrem as três fragilidades do fone: imagem estéreo, grave inaudível e excesso de detalhe que não sobrevive num alto-falante pequeno.

## Perguntas frequentes

**Preciso de placa de áudio externa para mixar de fone?**
Não obrigatoriamente, mas ajuda. A saída de fone de um notebook costuma ter impedância alta e pouca corrente, o que derruba o grave em fones de 250 ou 300 ohms. Uma [interface de áudio](/posts/interface-de-audio-escolha/) de entrada resolve, assim como um amplificador de fone dedicado.

**Fone Bluetooth serve para mixar?**
Não. A compressão do codec altera o timbre, a latência inviabiliza qualquer edição sincronizada e o processamento interno de muitos modelos aplica equalização que você não controla. Use fone com cabo.

**Calibração substitui tratamento acústico?**
No fone, o tratamento da sala é irrelevante para a escuta — mas continua importando para a gravação, já que o microfone capta as reflexões do ambiente de qualquer jeito. Calibrar o fone resolve a monitoração, não a captação.

Mixagem aprovada no fone, no celular e no carro, o arquivo deixa de ser projeto e vira episódio. Na [Speake](https://speake.com.br) ele ganha uma estação própria, onde quem quer ouvir assina por mês em vez de depender de anúncio.
