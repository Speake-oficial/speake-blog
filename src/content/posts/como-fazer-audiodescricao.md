---
title: "Como fazer audiodescrição: roteiro, narração e mixagem"
description: "Como fazer audiodescrição em 4 etapas: roteiro nas pausas da obra, revisão com consultor com deficiência visual, narração em 48 kHz/24 bit e mixagem com ducking."
pubDate: 2026-11-16
tags: ["narracao", "mixagem"]
image:
  src: "../../assets/posts/narracao.svg"
  alt: "Ilustração de narração com microfone e ondas de voz"
---

Fazer audiodescrição é escrever um roteiro que traduz em palavras a informação visual de uma obra, encaixá-lo nos intervalos entre as falas, revisá-lo com um consultor com deficiência visual, gravar a narração em 48 kHz/24 bit e mixar essa faixa junto ao áudio original. A norma que rege a prática no Brasil é a ABNT NBR 16452:2016, "Acessibilidade na comunicação — Audiodescrição". Audiodescrição é trabalho de equipe: roteirista, consultor e narrador raramente são a mesma pessoa.

## O que é audiodescrição e quando ela é obrigatória?

Audiodescrição é uma faixa narrada que descreve o que acontece na tela — ação, cenário, expressão, texto escrito — para quem não enxerga a imagem. Ela não substitui o áudio original: ocupa os espaços em que ninguém está falando.

A exigência vem de três frentes: a Lei Brasileira de Inclusão (Lei 13.146/2015), que trata acessibilidade comunicacional como direito; a televisão aberta, obrigada a audiodescrever parte da grade; e as obras com fomento público, que precisam entregar recursos de acessibilidade.

## Como escrever o roteiro de audiodescrição?

O roteiro de audiodescrição se escreve dentro das brechas de áudio da obra, nunca por cima delas. Você mede cada silêncio e só então decide o que cabe ali: a limitação de tempo define a redação, não o contrário.

1. **Assista à obra inteira sem escrever nada,** para saber o que é essencial antes de descrever.
2. **Marque os intervalos** em timecode `hh:mm:ss:ff`, na taxa de quadros do vídeo recebido (no Brasil, 29,97 ou 30 fps em TV; 23,976 ou 24 em cinema).
3. **Calcule o texto que cabe.** A 160 palavras por minuto, uma brecha de 3 segundos comporta cerca de 8 palavras.
4. **Descreva objetivamente.** "Ela aperta os lábios e desvia o olhar" descreve; "ela fica constrangida" interpreta e tira do público a chance de concluir.
5. **Priorize** quando não couber tudo: quem está em cena, o que faz, onde está, como está. Texto na tela (crédito, placa) entra na frente de cenário.
6. **Revise com o consultor**, pessoa com deficiência visual que aponta o que ficou ambíguo ou inútil na escuta.
7. **Deixe folga:** termine a descrição 2 a 3 quadros antes da próxima fala.

Evite abrir frases com "vemos" ou "a imagem mostra": o sujeito é a cena, não o espectador.

## Como gravar a narração de audiodescrição?

A narração de audiodescrição se grava em WAV 48 kHz/24 bit, taxa padrão de áudio para vídeo, que sincroniza sem reamostragem. O tom é neutro e informativo, um degrau abaixo da interpretação que um audiolivro pede: a emoção já está na obra.

| Item | Referência | Por quê |
|---|---|---|
| Taxa | 48 kHz / 24 bit | Sincroniza com vídeo sem conversão |
| Ritmo | 150 a 180 ppm | Mais rápido que audiolivro: o espaço é fixo |
| Nível | Picos de -12 a -6 dBFS | Headroom para a mixagem |
| Microfone | 15 a 20 cm, com pop filter | Consistência entre dias |

Grave olhando o vídeo com timecode visível, narrando contra a imagem e não contra o relógio. Audiodescrição ao vivo inverte parte disso: o roteiro é escrito antes, mas a narração acontece na hora.

## Como mixar a faixa de audiodescrição com o áudio original?

A faixa de audiodescrição entra como camada acima do áudio original, com o programa abaixando sob a narração. Um ducking de 4 a 6 dB no leito original basta para a descrição ficar inteligível sem apagar trilha e ambiência.

- [ ] Narração posicionada no timecode do roteiro, com as folgas preservadas.
- [ ] Ducking por sidechain de 4 a 6 dB, ataque rápido e release de 300 a 500 ms.
- [ ] Voz com passa-alta em 80 Hz, realce suave de 3 a 5 kHz se precisar e compressão de 2:1 a 3:1.
- [ ] Loudness no alvo do destino: cerca de -23 LUFS em TV, -16 a -14 LUFS em web, true peak em -1 dBTP.
- [ ] Escuta final de ponta a ponta, em fone e em caixa pequena.

Guarde a faixa de audiodescrição como arquivo isolado além do mix pronto: quem recebe quase sempre precisa das duas versões.

## Audiodescritor é profissão regulamentada no Brasil?

Ainda não, mas a regulamentação tramita no Senado. O PL 2.273/2025, do senador Alessandro Vieira, foi aprovado na Comissão de Direitos Humanos em julho de 2026 e na Comissão de Educação em novembro de 2026, com relatoria do senador Flávio Arns, e seguiu para a Comissão de Assuntos Sociais. Como ainda tramita, confira o andamento no portal do Senado antes de tratar qualquer exigência como vigente.

- A audiodescrição passa a ser feita por equipe, com ao menos um roteirista e um consultor.
- O papel de consultor fica reservado a pessoas com deficiência visual.
- A formação admite caminhos diferentes: experiência somada a curso de 200 horas, ou ensino médio com 500 horas de formação específica.

## Perguntas frequentes

**Dá para fazer audiodescrição com voz de IA?**
Tecnicamente sim, e já há pesquisa aplicada nisso para televisão. Mas voz sintética ainda erra prosódia em nome próprio, sigla e termo estrangeiro, e a revisão com consultor continua sendo o que garante a escuta.

**Quanto se cobra por audiodescrição?**
O modelo mais comum é a cobrança por minuto de obra finalizada, com roteiro, narração e mixagem precificados em separado. O valor varia conforme duração, densidade visual e prazo.

**Preciso de consultor mesmo em vídeo curto?**
A validação com uma pessoa com deficiência visual é o que separa audiodescrição de narração improvisada. Em vídeo curto a revisão leva pouco tempo e é o passo que mais melhora o resultado.

Narrar audiodescrição treina voz, leitura de roteiro e disciplina de microfone — o mesmo conjunto que sustenta um conteúdo em áudio só seu. Na [Speake](https://speake.com.br) você publica episódios numa estação própria e cobra assinatura mensal de quem acompanha o seu trabalho.
