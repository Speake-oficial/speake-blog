---
title: "Como gravar guitarra em casa sem amplificador"
description: "Para gravar guitarra em casa sem amplificador, ligue na entrada Hi-Z da interface, grave o sinal limpo e use simulador de amp com IR de caixa. Veja os ajustes."
pubDate: 2026-11-13
tags: ["producao-musical", "home-studio"]
image:
  src: "../../assets/posts/home-studio.svg"
  alt: "Ilustração de um home studio com interface de áudio e monitores"
---

Para gravar guitarra em casa sem amplificador, ligue a guitarra direto na entrada de instrumento (Hi-Z) da interface de áudio, grave o sinal limpo com picos entre -12 e -6 dBFS e aplique na DAW um simulador de amplificador seguido de uma resposta ao impulso (IR) de caixa. Com buffer de 64 a 128 amostras em 48 kHz, a latência fica abaixo de 10 ms e dá para tocar ouvindo o timbre processado em tempo real. O som sai do fone, não do quarto: nenhum vizinho ouve, e o timbre pode ser trocado depois da gravação.

## O que é preciso para gravar guitarra em casa sem amplificador?

Gravar guitarra em casa sem amplificador exige quatro itens: uma interface de áudio com entrada Hi-Z, um cabo P10, uma DAW e um simulador de amplificador. Microfone, caixa e pedaleira são dispensáveis.

- **Interface com entrada de instrumento.** A entrada Hi-Z tem impedância em torno de 1 MΩ, que é o que o captador passivo da guitarra espera. Modelos de entrada custam de R$ 500 a R$ 1.500.
- **DAW.** Reaper, Cakewalk, GarageBand ou qualquer outra — o simulador roda como plugin VST, AU ou AAX.
- **Simulador de amplificador.** Existem opções gratuitas de nível profissional (lista abaixo).
- **Fone fechado ou monitores.** Fone fechado evita que o som vaze e permite gravar de madrugada.

Plugar a guitarra numa entrada de linha comum, sem Hi-Z, é o erro mais frequente: o sinal perde agudos e ataque, e nenhum simulador devolve o que não foi gravado.

## Qual simulador de amplificador usar?

O ponto de partida mais barato é o Neural Amp Modeler (NAM), gratuito e de código aberto, que usa redes neurais para reproduzir amplificadores reais a partir de capturas feitas pela comunidade. Em setembro de 2026 a TONE3000 lançou um plugin gratuito que navega por uma biblioteca de centenas de milhares de capturas NAM e IRs sem sair da DAW, o que eliminou a parte chata de baixar e organizar arquivos.

| Opção | Custo | Para quem serve |
|---|---|---|
| Neural Amp Modeler / plugin da TONE3000 | Gratuito | Quem quer timbre de amp real e aceita garimpar capturas |
| Simuladores nativos da DAW (Logic, GarageBand, Reaper) | Incluído | Quem está começando e quer gravar hoje |
| Suítes como AmpliTube e Guitar Rig | Versões grátis limitadas; completas pagas | Quem quer pedais, amps e caixas numa tela só |
| Plugins de timbre pronto (Neural DSP e similares) | Em torno de 100 a 150 dólares | Quem busca um timbre específico pronto para a mix |

A diferença entre as opções pagas e o NAM hoje está mais na conveniência do que na qualidade do som.

## Como configurar a gravação de guitarra direto na interface?

A gravação de guitarra direto na interface segue sempre a mesma ordem: ganho, buffer, cadeia de plugins e só então o take.

1. **Afine e confira as cordas.** Corda velha soa opaca em qualquer simulador.
2. **Ajuste o ganho de entrada.** Toque o trecho mais forte da música e deixe os picos entre -12 e -6 dBFS. Clipar na entrada é irreversível.
3. **Configure o buffer.** Use 48 kHz e 64 ou 128 amostras, com driver ASIO no Windows. A latência total fica entre 5 e 10 ms, equivalente a ficar a 2 ou 3 metros de um amplificador.
4. **Monte a cadeia.** Noise gate → simulador de amp → IR de caixa → EQ. Capturas só do cabeçote precisam obrigatoriamente de IR; sem a caixa, a distorção soa como um enxame de abelhas.
5. **Grave o sinal limpo.** A DAW registra a guitarra sem efeito e o plugin processa na reprodução. É isso que permite trocar o amplificador depois (o chamado reamp) sem tocar de novo.
6. **Dobre as bases.** Grave a guitarra-base duas vezes, em takes separados, e abra um para cada lado (100% esquerda e 100% direita). Copiar e colar o mesmo take não cria largura, só aumenta o volume.

## Por que a guitarra gravada em linha soa magra ou artificial?

Guitarra gravada em linha soa artificial quase sempre por três motivos: falta de IR de caixa, ganho demais no simulador ou agudos sem controle. Um alto-falante de guitarra praticamente não reproduz nada acima de 5 a 6 kHz, e é essa filtragem que o IR devolve.

- **Reduza o ganho.** Use cerca de 30% menos distorção do que você usaria tocando sozinho; duas guitarras dobradas somam peso.
- **Corte os extremos.** Passa-altas em 80 a 100 Hz libera espaço para baixo e bumbo; passa-baixas em 8 a 10 kHz tira o chiado.
- **Troque o IR antes do amp.** A caixa e a posição do microfone virtual mudam mais o timbre do que o modelo do cabeçote.
- **Confira o nível que chega ao plugin.** Sinal fraco demais deixa o amp sem pegada; forte demais satura antes da hora.

## Perguntas frequentes

**Dá para gravar baixo do mesmo jeito?**
Dá. O baixo entra na mesma entrada Hi-Z, com simulador próprio ou só compressão e EQ. Muita gravação profissional de baixo é sinal direto misturado com uma cópia saturada.

**Pedaleira com saída USB substitui a interface?**
Substitui para gravar guitarra, desde que ela envie também o sinal limpo por um par de canais USB. Verifique isso no manual: sem o sinal limpo, o timbre fica preso ao que foi gravado.

Com a guitarra gravada, falta decidir quem vai ouvir. Na [Speake](https://speake.com.br) você publica aulas, bases e gravações exclusivas numa estação própria, e a audiência assina por mês para ter acesso.
