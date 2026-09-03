---
title: "NotebookLM podcast: como usar o Audio Overview"
description: "NotebookLM podcast (Audio Overview) transforma até 50 documentos em uma conversa sintética de dois apresentadores em português. Veja passo a passo, limites e o que evitar."
pubDate: 2026-09-03
tags: ["podcasting", "narracao"]
---

O NotebookLM podcast é o **Audio Overview**, recurso do Google NotebookLM que pega até 50 fontes (PDFs, links, vídeos do YouTube, Google Docs) e gera uma conversa sintética de dois apresentadores discutindo o conteúdo. Funciona em português brasileiro desde 2025, é gratuito no plano básico e serve muito bem para **pesquisa e preparação de episódio** — mas não substitui um podcast autoral publicado. O áudio gerado é resumo derivado, não obra sua, e replicá-lo em plataformas abertas gera problemas de originalidade e de licença.

## O que é o Audio Overview do NotebookLM?

O Audio Overview é uma função do NotebookLM que sintetiza suas fontes num diálogo de 5 a 15 minutos entre dois apresentadores gerados por IA. Você sobe os documentos, clica em **Gerar** no painel de Estúdio (Studio) e recebe um arquivo de áudio pronto para ouvir ou baixar. Diferente de um TTS comum, os "apresentadores" interagem, cortam a fala um do outro e sintetizam conexões entre pontos das fontes.

O modelo é o mesmo da linha Gemini que roda por trás do NotebookLM, com camada de síntese de voz dedicada. A geração leva de 3 a 8 minutos dependendo do volume das fontes.

## O NotebookLM funciona em português brasileiro?

Sim. Desde 2025 o Audio Overview suporta português brasileiro entre os mais de 50 idiomas disponíveis, e você define o idioma da saída independentemente do idioma da conta Google. A qualidade do pt-br em 2026 é boa para ouvir, com prosódia natural na maior parte do tempo, mas ainda fica atrás do inglês em entonação — nomes próprios estrangeiros e siglas às vezes saem lidos letra por letra.

Um detalhe prático: os controles de duração (**Shorter / Default / Longer**) ainda são exclusivos do inglês. Em português você recebe a duração-padrão (7 a 12 minutos, variando com o volume das fontes) sem opção de encurtar ou esticar.

## Como criar um podcast no NotebookLM passo a passo

O fluxo básico leva menos de 15 minutos até o áudio pronto:

1. Entre em `notebooklm.google.com` com a sua conta Google e clique em **Novo notebook**.
2. Adicione fontes pelo botão **+ Adicionar**. O plano gratuito aceita 50 fontes por notebook, cada uma com até 500 mil palavras; o Plus vai a 300 fontes.
3. No painel **Estúdio**, à direita, escolha **Audio Overview** e clique em **Personalizar** antes de gerar.
4. No campo de instruções, escreva o foco em uma frase — por exemplo, "Concentre-se nos três estudos citados sobre retenção de audiência e ignore os anexos legais".
5. Confirme o idioma **Português (Brasil)** no seletor de idioma de saída e clique em **Gerar**.
6. Espere de 3 a 8 minutos. Quando terminar, use **Interagir** para entrar no modo interativo (fazer perguntas aos apresentadores em tempo real) ou clique em **⋮ → Baixar** para salvar o MP3.

O modo interativo é o pulo do gato para preparar entrevistas: você "conversa" com os apresentadores como se fossem convidados, testando perguntas antes de gravar de verdade.

## Posso publicar o Audio Overview do NotebookLM como meu podcast?

Não é uma boa ideia, por três motivos concretos:

- **Termos de uso.** O Google permite uso pessoal e educacional do output, mas a publicação comercial em plataformas de podcast entra em zona cinzenta — a licença de saída não é a mesma de conteúdo gerado por Gemini via API paga.
- **Direito autoral das fontes.** O áudio é derivado direto dos documentos que você subiu. Se são obras de terceiros (livros, artigos pagos, transcrições sob copyright), o áudio herda o problema.
- **Sinal editorial.** Plataformas como Spotify e Apple Podcasts vêm restringindo catálogos formados por conteúdo sintético em massa desde 2024, com risco de remoção ou de desprioritização no algoritmo.

Publicar como episódio autoral também confunde o ouvinte: as duas vozes não são suas, não representam sua marca e não sustentam relação com quem assina para ouvir você.

## Qual a melhor forma de usar o NotebookLM na produção do meu podcast?

Usar como camada de **pesquisa e pré-produção**, não como episódio publicado. Cinco aplicações que funcionam sem entrar em conflito com originalidade:

- **Digestão de fontes densas.** Subir 3 papers, 2 relatórios e o site do convidado, ouvir o Audio Overview em velocidade 1,5x durante o deslocamento e chegar na gravação com o assunto mastigado.
- **Descoberta de conexões.** Os apresentadores sintéticos costumam apontar cruzamentos entre fontes que a leitura linear não pega — ganchos para pauta.
- **Ensaio de entrevista.** Modo interativo simula o convidado a partir da obra dele. Você testa perguntas antes da gravação real.
- **Roteiro de trailer.** Peça um Audio Overview de 5 minutos como base, transcreva os melhores 30 segundos e regrave com sua voz e edição.
- **Resumo pós-episódio.** Suba a transcrição do episódio publicado e gere um Audio Overview curto que vira material para redes sociais — desde que refeito com sua voz.

Em todos os casos, o Audio Overview é insumo interno. O que vai ao ar é conteúdo autoral seu.

## Perguntas frequentes

**Quanto custa o NotebookLM?**
O plano gratuito é suficiente para a maioria dos podcasters: 50 fontes por notebook, 500 mil palavras por fonte e até 3 gerações de Audio Overview por dia. O Plus, incluído no Google AI Pro (R$ 96,99/mês em 2026), sobe para 300 fontes e mais gerações diárias.

**O áudio gerado tem marca d'água ou identificação de IA?**
Sim. O Google aplica SynthID (marca d'água inaudível) em todo áudio gerado pelo NotebookLM, o que permite a detectores identificar a origem sintética mesmo após reencode ou edição.

**Dá para clonar minha própria voz nos apresentadores?**
Não no NotebookLM. As vozes são fixas e não personalizáveis em 2026. Para narração com sua voz clonada, o caminho é outro — ferramentas dedicadas como ElevenLabs ou Play.ht, com o cuidado legal descrito em [clonagem de voz com IA](/posts/clonagem-de-voz-com-ia/).

Ferramenta de pesquisa resolvida, o episódio que carrega sua voz precisa de casa. Na [Speake](https://speake.com.br) você cria uma estação própria e publica o conteúdo autoral que a assinatura mensal da sua audiência remunera — o oposto de um áudio derivado gratuito.
