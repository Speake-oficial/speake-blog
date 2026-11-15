---
title: "Como gravar com ar-condicionado ligado sem ruído"
description: "Gravar com ar-condicionado ligado eleva o piso de ruído: níveis em dB(A) de split e de janela, o ciclo de resfriar e desligar e a posição de microfone certa."
pubDate: 2026-11-15
tags: ["home-studio", "microfones"]
image:
  src: "../../assets/posts/home-studio.svg"
  alt: "Ilustração de home studio com microfone e interface de áudio"
---

Gravar com ar-condicionado ligado é possível, mas quase sempre custa qualidade: um split em velocidade média joga entre 30 e 38 dB(A) na sala, e um aparelho de janela fica na faixa de 42 a 65 dB(A), porque o compressor dele está dentro do ambiente. O método que funciona em casa é cíclico — resfriar a sala com o aparelho ligado, desligar, gravar blocos de 20 a 25 minutos e repetir. Se desligar não for opção, deixe o ventilador interno na velocidade mínima, use microfone dinâmico a 5 cm da boca e aponte a traseira do microfone para o aparelho.

## Quanto ruído de ar-condicionado entra na gravação?

O ruído de ar-condicionado na gravação é um chiado contínuo de banda larga somado a um ronco de baixa frequência. Salas de gravação projetadas ficam em NC 15–20, bem abaixo de 30 dB(A), e nenhum aparelho doméstico ligado chega perto disso. Desconfie do catálogo: o "19 dB" da caixa de um split é medido em laboratório, na velocidade mínima do ventilador interno — na velocidade que você usa num dia de 35 °C, o mesmo aparelho entrega 30 a 38 dB(A).

| Fonte de ruído | Nível típico | Efeito na voz captada |
| --- | --- | --- |
| Split, ventilação mínima | 19–24 dB(A) | tolerável a 2 m, com dinâmico próximo |
| Split, velocidade média | 30–38 dB(A) | audível em pausas e respiração |
| Ar de janela | 42–65 dB(A) | inviabiliza take limpo |
| Ventilador de mesa a 1 m | 40–55 dB(A) | ruído e vento no diafragma |
| Ventilador de notebook sob carga | 35–45 dB(A), varia com o modelo | chiado agudo perto do microfone |

Uma regra física decide onde ficar: dobrar a distância até a fonte de ruído reduz o nível dela em cerca de 6 dB — gravar a 3 m do aparelho em vez de 1,5 m compra 6 dB de silêncio de graça.

## Split ou ar de janela: qual atrapalha menos a gravação?

O split atrapalha menos por um motivo mecânico: o compressor, parte mais ruidosa do sistema, fica na unidade externa. O aparelho de janela mantém compressor e ventilador no mesmo gabinete, dentro do quarto, e ainda abre passagem permanente para o ruído da rua. Com ar de janela, nenhum ajuste de microfone resolve: grave com ele desligado.

## Como gravar no calor sem deixar o ar ligado?

Trate como ciclo térmico, não como heroísmo:

1. Resfrie a sala por 15 a 20 minutos antes, com porta e janela fechadas, mirando 21–22 °C.
2. Desligue o aparelho e espere 30 segundos para o fluxo de ar parar antes de armar a faixa.
3. Grave em blocos de 20 a 25 minutos — em quarto pequeno, é o tempo médio antes do calor incomodar.
4. Capture 10 a 20 segundos de tom de sala por bloco, na mesma condição do take: é o trecho que a redução de ruído usa como perfil.
5. Religue o ar por 5 a 10 minutos entre blocos e use o intervalo para marcar o roteiro.

O ventilador do notebook entra na mesma conta: subir o buffer de 512 para 1024 samples derruba a carga de CPU e a rotação, e afastar a máquina 1,5 a 2 m do microfone resolve o resto.

## Qual microfone e posição reduzem o ruído do ar-condicionado?

Microfone dinâmico cardioide, bem próximo da boca. Reduzir a distância de 20 cm para 5 cm aumenta o nível da voz em cerca de 12 dB sem mudar o ruído do aparelho — é o ganho de relação sinal/ruído mais barato que existe.

Depois vem a orientação. Um cardioide rejeita de 20 a 25 dB no eixo traseiro (180°), então a traseira dele aponta para o aparelho; em supercardioide, a maior rejeição fica por volta de 125°. E nunca deixe o fluxo de ar bater no diafragma: vento direto gera estrondo de baixa frequência que nenhum pop filter segura.

## Como medir o piso de ruído antes de gravar?

Arme a faixa com o ganho do take, grave 20 segundos de silêncio e leia o RMS em dBFS. Com a voz média entre -18 e -12 dBFS e picos até -6 dBFS, as metas são:

- **Audiolivro**: piso em -60 dBFS RMS ou abaixo — requisito de entrega, não preferência.
- **Podcast e narração**: -50 dBFS RMS já soa limpo.
- **Acima de -40 dBFS**: a redução de ruído vai trabalhar demais e deixar artefato audível.

## Dá para remover o ruído do ar-condicionado na edição?

Em parte. Ruído contínuo é o melhor cenário para redução por perfil espectral, e 6 a 10 dB de atenuação costumam passar despercebidos; acima disso, a voz soa lavada. Um gate 6 a 10 dB acima do piso limpa as pausas, mas não tira o ruído de baixo da fala.

## Perguntas frequentes

**Ventilador de teto é melhor que ar-condicionado para gravar?**
Em geral sim: fica longe do microfone e gera ruído mais difuso que um ventilador de mesa a 1 m. Ainda assim, meça o piso com ele ligado e evite a corrente de ar no microfone.

**O modo silencioso do split resolve?**
Em parte: ele força o ventilador interno para a mínima, onde o aparelho fica entre 19 e 24 dB(A). A 2 m ou mais, com dinâmico próximo da boca, isso rende take utilizável — confirme medindo.

Com o piso de ruído sob controle, falta decidir onde esse áudio vai viver. Na [Speake](https://speake.com.br) você publica os episódios numa estação própria e é a assinatura mensal da sua audiência que remunera o trabalho.
