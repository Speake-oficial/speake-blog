---
title: "Podcast não aparece no Spotify: como resolver"
description: "Podcast não aparece no Spotify quase sempre por feed fora do ar, e-mail ausente no RSS, capa fora de especificação ou simples prazo de aprovação. Veja o diagnóstico."
pubDate: 2026-11-13
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Quando um podcast não aparece no Spotify, a causa está quase sempre em uma de quatro coisas: o feed RSS não abre publicamente, o feed não tem endereço de e-mail para receber o código de verificação, a capa está fora da especificação (quadrada, de 1400 a 3000 px, em JPEG ou PNG) ou o programa simplesmente ainda está dentro do prazo de aprovação, que vai de poucas horas a cinco dias úteis. Antes de reenviar o cadastro, abra o endereço do seu feed numa janela anônima do navegador: se ele não carregar ali, não vai carregar para o Spotify.

## Por que o podcast não aparece no Spotify?

O Spotify não hospeda o seu áudio quando você vem de outra plataforma: ele lê o feed RSS e espelha o que encontra. Todo problema de "não aparece" é, portanto, de leitura do feed ou de permissão. Em ordem de frequência:

1. **Feed inacessível.** O endereço retorna erro, exige senha ou ficou como rascunho. O feed precisa responder HTTP 200 para qualquer visitante, sem login.
2. **Sem e-mail no feed.** O Spotify envia um código de oito dígitos para o e-mail declarado nas tags `<itunes:owner>` e `<itunes:email>`. Se o campo está vazio, ou se a hospedagem está com a opção de ocultar o e-mail ativada, o cadastro empaca antes de começar.
3. **Nenhum episódio publicado.** Um feed sem pelo menos um `<item>` com arquivo de áudio é recusado. Trailer conta como episódio.
4. **Capa fora de especificação.** Imagem retangular, pequena ou com URL que redireciona. Use um arquivo quadrado de 3000 x 3000 px, que atende a todos os diretórios de uma vez.
5. **Campos obrigatórios faltando.** Título, descrição, idioma (`pt-br`) e categoria. Sem esses quatro, a validação falha.
6. **Prazo.** O programa foi aceito e está na fila de aprovação.

## Quanto tempo o Spotify leva para aprovar um podcast?

A aprovação inicial de um podcast no Spotify leva de poucas horas a cinco dias úteis, com a maioria dos casos resolvida em menos de 24 horas. Esse prazo vale para o primeiro envio do feed, não para episódios seguintes.

Depois que o programa está no ar, o Spotify relê o feed em intervalos curtos — a referência prática das hospedagens é a cada duas horas, podendo chegar a 24 horas em períodos de pico. Por isso a regra de bolso é: **episódio novo que não apareceu em 24 horas é problema; em 2 horas, é só impaciência.**

## Como saber se o problema está no feed ou no Spotify?

Para saber se o problema está no feed ou no Spotify, valide o feed antes de abrir qualquer ticket. O teste leva cinco minutos:

1. Abra o endereço do feed numa janela anônima. Se pedir senha ou der erro, o problema é a hospedagem.
2. Procure no código a palavra `@` e confirme que existe um e-mail dentro de `<itunes:owner>`.
3. Confirme que o episódio está no XML, com `<enclosure>` apontando para um arquivo que toca no navegador.
4. Jogue a URL num validador como o CastFeedValidator ou o Podbase e corrija tudo que aparecer como erro (avisos podem ficar).
5. Só então volte ao Spotify for Creators e peça o reenvio do código.

Se o validador aprova o feed e o episódio está lá, o problema é de propagação ou cache, e a correção não está nas suas mãos.

## Por que o episódio novo não aparece, mas o programa sim?

Programa no ar e episódio ausente tem três causas típicas. A primeira é data futura: um `<pubDate>` adiante do horário atual esconde o episódio até a data chegar — cuidado com fuso, porque 00h no Brasil já é 03h em GMT. A segunda é arquivo pesado: acima de cerca de 200 MB o download falha em parte das hospedagens e o item aparece sem tocar. A terceira é cache: se você trocou o áudio mantendo o mesmo endereço, a plataforma segue servindo a versão antiga, e republicar com outro nome de arquivo resolve.

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| Cadastro não avança | Feed sem e-mail | Preencher `<itunes:owner>` e reenviar o código |
| "Feed inválido" no envio | Falta título, idioma, categoria ou capa | Validar o XML e corrigir os erros |
| Programa no ar, episódio não | `<pubDate>` no futuro ou fuso errado | Corrigir a data para o passado |
| Episódio listado que não toca | Arquivo muito grande ou URL quebrada | Reexportar abaixo de 200 MB e republicar |
| Áudio antigo tocando no lugar do novo | Cache do arquivo | Republicar com outro nome de arquivo |
| Episódio duplicado na lista | `<guid>` alterado | Restaurar o GUID original do episódio |

## Como evitar o problema no próximo episódio?

Publique sempre com data no passado, mantenha o `<guid>` de cada episódio imutável, exporte em MP3 de 96 a 128 kbps mono (uma hora de conversa fica em torno de 40 MB) e revalide o feed depois de qualquer troca de hospedagem, domínio ou capa.

## Perguntas frequentes

**Dá para mudar o endereço do feed sem perder os ouvintes?**
Dá, desde que o endereço antigo responda com redirecionamento 301 permanente para o novo e continue de pé por alguns meses. Os aplicativos seguem o redirecionamento e atualizam o endereço sozinhos. Sem o 301, o programa some da lista de quem já seguia.

**Preciso enviar o podcast para o Spotify e para o Apple Podcasts separadamente?**
Sim. Cada diretório tem o seu próprio cadastro, embora todos leiam o mesmo feed RSS. É trabalho de uma vez por programa, não por episódio.

**O Spotify avisa quando recusa um feed?**
Ele mostra o erro na hora do envio, mas sem dizer qual tag falhou. Validar o XML antes economiza dias de tentativa e erro.

Depender de aprovação e cache de terceiros é o preço da distribuição aberta. Na [Speake](https://speake.com.br) o caminho é outro: você publica os episódios numa estação própria e sua audiência assina para ouvir, sem feed para validar nem fila de aprovação no meio.
