# Speake Blog

Blog técnico da [Speake](https://speake.com.br) — Astro, build estático, deploy na Vercel em
`blog.speake.com.br`.

## Comandos

| Comando                  | Ação                                                              |
| :----------------------- | :---------------------------------------------------------------- |
| `npm install`            | Instala as dependências                                            |
| `npm run dev`            | Servidor de desenvolvimento em `localhost:4321`                    |
| `npm run build`          | Build de produção em `./dist/`                                     |
| `npm run preview`        | Preview do build (só estático, **sem** o middleware)               |
| `npm run preview:agents` | Serve `dist/` **com** o middleware da borda, como em produção      |
| `npm test`               | Testes unitários e de integração (exige `npm run build` antes)     |
| `npm run typecheck`      | `astro check`                                                      |
| `npm run verify:agents`  | Verifica os endpoints de agente contra uma origem (padrão: produção) |
| `npm run og:images`      | Gera os PNGs 1200x630 de Open Graph                                |

## Legibilidade por agentes

O blog serve duas representações de cada página: HTML para navegadores e Markdown para agentes.

**`middleware.ts` (raiz)** é o único ponto de compute do site. É um
[Routing Middleware da Vercel](https://vercel.com/docs/routing-middleware), reconhecido pelo build
por estar na raiz — não é o middleware do Astro, e é de propósito: middleware do Astro não roda em
rota pré-renderizada, e um `rewrite` no `vercel.json` nunca dispararia na home, porque a Vercel dá
precedência ao filesystem sobre os rewrites. Ele:

1. sai da frente (`next()`) para todo request que não peça `text/markdown` — todo navegador e todo
   crawler tradicional, acrescentando só `Vary: Accept`;
2. para `Accept: text/markdown`, busca o gêmeo `<rota>/index.md` gerado no build e o devolve com
   `Content-Type: text/markdown; charset=utf-8` e `Vary: Accept`;
3. quando não há gêmeo mas a rota existe (paginação), devolve o HTML;
4. quando a rota não existe, devolve **404** com corpo em Markdown explicando o erro e apontando
   para `/llms.txt` e para o sitemap.

O `matcher` do middleware ignora `_astro/`, `og/` e qualquer caminho com extensão — o que também
impede que o fetch interno do gêmeo `.md` volte para o próprio middleware.

Os gêmeos `.md` são endpoints estáticos do Astro (`src/pages/**/index.md.ts`), gerados no build
junto com o HTML. Outros arquivos legíveis por máquina: `/llms.txt` (índice + quando e como usar o
site), `/search.json`, `/rss.xml`, `/sitemap-index.xml`, `/robots.txt`.

### Verificando

```sh
npm run build
npm test                       # unitários + integração contra dist/
npm run preview:agents         # sobe dist/ + middleware em 127.0.0.1:4321
npm run verify:agents -- http://127.0.0.1:4321
npm run verify:agents          # depois do deploy, contra produção
```

O `npm test` e o `verify:agents` local provam a lógica e o encanamento, mas **não** provam que a
Vercel reconheceu o `middleware.ts` no deploy. Depois de publicar, rode `npm run verify:agents`
contra produção antes de considerar a mudança concluída.
