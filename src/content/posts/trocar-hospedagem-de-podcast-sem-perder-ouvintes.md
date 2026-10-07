---
title: "Como trocar hospedagem de podcast sem perder ouvintes"
description: "Para trocar hospedagem de podcast sem perder ouvintes: importe os episódios pelo feed antigo, ative o redirect 301 e só cancele a conta velha 2 a 4 semanas depois."
pubDate: 2026-10-07
tags: ["podcasting"]
image:
  src: "../../assets/posts/podcast.svg"
  alt: "Microfone estilizado com ondas sonoras"
---

Para trocar hospedagem de podcast sem perder ouvintes, a ordem é esta: importe os episódios na nova hospedagem usando a URL do feed antigo, confira se o número de episódios bate, ative o redirect 301 no feed antigo e só então cancele a conta velha — nunca antes de 2 a 4 semanas. O redirect avisa Spotify, Apple Podcasts e todos os outros aplicativos de onde buscar os episódios a partir de agora, e quem já seguia o programa continua seguindo, sem precisar fazer nada. Inverter essa ordem é o que faz um programa perder audiência na mudança.

## O que é o redirect 301 do feed RSS?

O redirect 301 é uma instrução permanente colocada no feed RSS antigo dizendo "este programa mudou de endereço, passe a ler aquele outro". Todo diretório de podcast guarda a URL do seu feed, não os seus arquivos de áudio: Spotify, Apple Podcasts, Deezer e os aplicativos independentes consultam essa URL de tempo em tempo para ver se saiu episódio novo.

Quando o feed antigo responde com um 301, cada diretório troca sozinho a URL que tem salva pela nova — é um encaminhamento de correspondência. O redirect é configurado **na hospedagem antiga**, não na nova, e é por isso que a conta antiga precisa continuar viva depois da mudança.

## Como trocar hospedagem de podcast passo a passo

1. **Copie a URL do feed RSS atual.** Costuma estar nas configurações da hospedagem, como `.../feed.xml` ou `/rss`.
2. **Desative o bloqueio de transferência.** Várias hospedagens têm uma opção de travar o feed ("lock feed from transfer"). Com ela ligada, a importação falha.
3. **Libere o feed inteiro.** Algumas hospedagens expõem só os últimos 10 ou 50 episódios no feed. Aumente esse limite para todos antes de importar, ou o histórico fica para trás.
4. **Importe pelo feed, nunca subindo arquivo por arquivo.** A importação por RSS preserva o GUID de cada episódio, o identificador que os aplicativos usam para saber o que já baixaram. Subir os MP3 na mão gera GUIDs novos e duplica o acervo inteiro para quem já ouvia. A importação leva de 15 minutos a algumas horas, conforme o tamanho do acervo.
5. **Confira o número de episódios.** Compare a contagem no feed novo e no antigo antes de seguir. Se faltar episódio, resolva agora.
6. **Ative o redirect 301 no feed antigo.** No Spotify for Creators, o caminho é `creators.spotify.com` → **Configurações** → **Redirecionar seu podcast**, colar a URL do feed novo e confirmar. Esse recurso existe só na versão web, não no aplicativo de celular.
7. **Publique um episódio de teste pela hospedagem nova.** Confirme que ele aparece no Spotify e no Apple Podcasts. É a única prova real de que o redirect funcionou.
8. **Espere, depois cancele.** Mantenha a conta antiga ativa por 2 a 4 semanas antes de encerrar.

## Quanto tempo leva para o redirect propagar?

A maioria dos diretórios atualiza a URL em 24 a 72 horas, e o prazo completo é de até 7 dias — o número que o próprio Spotify publica para o redirect feito a partir do Spotify for Creators. Nesse intervalo, é normal o episódio novo aparecer em uma plataforma antes da outra. Não é erro: refazer o redirect no meio do caminho só reinicia a contagem.

## Quando posso cancelar a hospedagem antiga?

Nunca no mesmo dia. Se você encerra a conta antiga junto com a mudança, o redirect morre com ela: os diretórios que ainda não leram o 301 encontram um feed inexistente e param de receber episódios. O mínimo seguro é 2 semanas; 3 a 4 semanas cobre até os aplicativos mais lentos.

Antes de cancelar, baixe o arquivo XML do feed antigo (abra a URL no navegador e salve a página) e os MP3 finalizados. Hospedagem encerrada não devolve arquivo.

## Quais erros fazem um podcast perder ouvintes na troca?

| Erro | O que acontece |
|---|---|
| Ativar o redirect antes da importação terminar | Os aplicativos passam a ler um feed incompleto e episódios desaparecem |
| Cancelar a conta antiga na mesma semana | O redirect deixa de existir e os seguidores param em um feed morto |
| Subir os MP3 na mão em vez de importar o feed | GUIDs novos, acervo duplicado e notificação de "episódio novo" em tudo |
| Esquecer o player embutido no site | O player aponta para o servidor de áudio antigo e quebra quando a conta cai |
| Trocar de hospedagem na véspera de publicar | A janela de propagação cai justo no dia do episódio |

O player embutido no site é o esquecimento mais comum: depois que a migração estabilizar, troque o código de incorporação de cada página pelo da hospedagem nova.

## Perguntas frequentes

**Preciso avisar o Spotify e a Apple separadamente?**
Não. O redirect 301 é lido por todos os diretórios automaticamente. Só é preciso abrir um ticket se a hospedagem antiga foi cancelada antes de o redirect ser configurado — aí a correção é manual, plataforma por plataforma.

**Perco os seguidores e as avaliações?**
Os seguidores acompanham o redirect e continuam inscritos, e as avaliações ficam atreladas ao programa dentro de cada diretório. O histórico de métricas, esse sim, não migra: a hospedagem nova conta do zero, então exporte os relatórios antigos antes de sair.

**Posso voltar para a hospedagem antiga depois?**
Pode, pelo caminho inverso: importar na antiga e configurar o redirect na nova. Mas cada migração gasta uma janela de propagação, então não é algo para testar de ida e volta.

Todo esse cuidado existe porque o feed RSS é um endereço emprestado, e mudar de endereço custa semanas de atenção. Na [Speake](https://speake.com.br) você publica os episódios numa estação própria e sua audiência assina por mês para ouvir.
