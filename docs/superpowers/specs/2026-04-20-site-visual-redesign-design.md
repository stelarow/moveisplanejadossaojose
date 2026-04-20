# Design: refatoração visual da home

## Objetivo

Refatorar o visual da home de `Móveis Planejados São José` para uma direção mais fiel ao sistema descrito em `DESIGN.md`, preservando o conteúdo comercial do site e adaptando a linguagem para uma marcenaria premium local.

## Contexto atual

- A home atual é funcional, mas ainda tem aparência genérica de landing page baseada em componentes.
- O site já usa uma estrutura enxuta com `Header`, `Hero`, `ServicesTabs`, `Testimonials`, `ContactProgressive` e `Footer`.
- A seção de projetos foi removida da composição atual da home, o que enfraquece o impacto visual para um negócio baseado em fotografia de ambientes.
- O guia em `DESIGN.md` define uma direção de varejo premium com paleta quente, pills, contraste em verde escuro e ritmo de blocos sólidos.

## Decisões aprovadas

- Seguir uma direção visual `fiel ao Starbucks` conforme `DESIGN.md`.
- Ajustar `interface + paleta + tipografia`.
- Trabalhar a mensagem principal da home com `equilíbrio entre luxo, aproveitamento inteligente e confiança`, sem exagerar apenas um desses pontos.
- Reintroduzir uma seção forte de `projetos` no meio da página.
- Adotar a abordagem visual `Vitrine Institucional Cafe-Flagship`.

## Direção visual

### Identidade

A home deve transmitir sensação de showroom premium: acolhedora, organizada, confiável e fotográfica. A referência não deve ser uma cópia literal do Starbucks, mas uma adaptação fiel dos seus princípios de superfície, hierarquia, contraste e ritmo comercial.

### Paleta

- Usar uma base de `creme quente` e `ceramic` como fundos principais das seções.
- Usar `verde principal` como cor institucional dos CTAs, destaques e detalhes de marca.
- Usar `verde escuro profundo` nas faixas de contraste, áreas de autoridade e footer.
- Reservar `branco` para cards e superfícies de leitura.
- Restringir `dourado` a microacentos editoriais ou detalhes pontuais, nunca como cor dominante.

### Tipografia

- Adotar uma `sans` principal mais calorosa e refinada para navegação, corpo e CTAs.
- Adotar uma `serif` de apoio para momentos de destaque editorial, principalmente no hero e em faixas nobres.
- Trabalhar tracking levemente mais fechado, títulos fortes e hierarquia mais controlada.
- A serif deve ser pontual; o sistema principal continua baseado em sans.

### Superfícies e formas

- Abandonar o branco frio como plano dominante da página.
- Trabalhar o ritmo por blocos sólidos: creme, branco, verde escuro e novamente creme.
- Manter cards com raio médio e sombra sutil, sem aparência de dashboard.
- Consolidar botões pill como padrão principal de ação.
- Reduzir efeitos genéricos de gradiente e hover exagerado; priorizar refinamento comercial.

## Arquitetura da home

1. `Header`
Barra clara e quente, com sombra suave ao scroll, navegação enxuta e CTA pill em destaque.

2. `Hero`
Layout em duas colunas. À esquerda entram headline, apoio, diferenciais e CTAs. À direita entra fotografia principal com tratamento mais editorial e um elemento de prova social ou autoridade sobreposto.

3. `Serviços`
Manter a lógica de categorias, mas com visual de vitrine. A seção deve parecer seleção de ambientes e soluções, não carrossel de app.

4. `Projetos`
Reintroduzir uma seção forte e central, baseada em fotografia grande, filtros discretos e CTA para orçamento após navegação pelos exemplos.

5. `Depoimentos`
Manter o peso da prova social do Google, mas integrar a apresentação ao novo sistema visual para evitar aparência de widget externo.

6. `Contato`
Encerrar a página com uma faixa mais forte de conversão. WhatsApp continua destacado, mas visualmente integrado ao resto da marca.

7. `Footer`
Transformar o footer em fechamento institucional com fundo escuro, contraste limpo e hierarquia forte para marca e contato.

## Mudanças por componente

### `components/header.tsx`

- Trocar o fundo atual por superfície clara quente.
- Refinar estados de scroll, hover e CTA.
- Ajustar menu mobile para a mesma linguagem premium do desktop.

### `components/hero.tsx`

- Remover dependência do gradiente atual como linguagem principal.
- Reestruturar tipografia para maior presença visual.
- Inserir composição mais editorial com fotografia e camada de prova social.
- Refinar bloco de estatísticas e benefícios.

### `components/services-tabs.tsx`

- Manter tabs como estrutura funcional principal.
- Refatorar a aparência para uma vitrine de categorias.
- Reduzir a sensação de componente padrão do shadcn.
- Reforçar imagem, títulos e CTA dentro de uma linguagem mais showroom.

### `components/gallery-option2-split.tsx` ou nova seção equivalente

- Voltar a exibir projetos na home.
- Promover imagens a protagonistas da narrativa.
- Manter filtros simples e rápidos.
- Integrar texto de apoio sobre processo, materiais e montagem.

### `components/testimonials.tsx`

- Preservar nota média, volume de avaliações e depoimentos.
- Redesenhar o bloco para harmonizar com a nova paleta.
- Reduzir dependência do azul como protagonista visual.

### `components/contact-progressive.tsx`

- Reestilizar WhatsApp, formulário e cartões informativos dentro da nova direção visual.
- Reforçar a leitura de fechamento comercial premium.
- Melhorar composição entre formulário, contatos e área atendida.

### `components/footer.tsx`

- Migrar para bloco escuro institucional.
- Reorganizar marca, links e contato com maior clareza visual.
- Manter leitura simples e forte em mobile.

## Tokens e base global

### `app/globals.css`

- Atualizar tokens de cor para o novo eixo creme / verde / verde escuro.
- Ajustar superfícies, bordas, sombras e estados interativos.
- Definir padrões globais de pills, cards e ritmo de seções.

### `app/layout.tsx`

- Atualizar tipografia global para o novo par sans + serif.
- Garantir que a mudança preserve performance e renderização adequada no Next.js.

## Conteúdo e SEO

- Preservar estrutura geral de conteúdo e seções voltadas para conversão local.
- Preservar schema JSON-LD atual em `app/page.tsx`.
- Preservar copy principal em português e foco em São José, SC.
- Melhorar a apresentação visual sem comprometer a densidade comercial do conteúdo.

## Comportamento e responsividade

- O redesign deve funcionar bem em desktop e mobile.
- O hero precisa manter leitura clara em telas pequenas.
- A navegação por tabs e filtros precisa continuar simples em touch.
- O peso visual não pode prejudicar performance nem legibilidade.

## Fora de escopo

- Alterar regras de negócio do formulário.
- Alterar API de envio de e-mail.
- Alterar schema markup além de ajustes mínimos caso a composição da home mude.
- Criar novas páginas internas.
- Reescrever toda a copy do site.

## Verificação

- A home passa a refletir a direção `Vitrine Institucional Cafe-Flagship` aprovada.
- O sistema visual fica coerente com `DESIGN.md` em paleta, superfícies, contraste e botões.
- A home volta a ter uma seção forte de projetos.
- `Header`, `Hero`, `ServicesTabs`, `Testimonials`, `ContactProgressive` e `Footer` ficam visualmente consistentes entre si.
- Desktop e mobile mantêm boa leitura e navegação.
- A refatoração preserva estrutura comercial e SEO existentes.

## Notas de implementação

- Priorizar mudanças pequenas e focadas dentro dos componentes já existentes.
- Reaproveitar a seção de galeria existente se isso reduzir retrabalho e mantiver qualidade visual.
- Onde houver dúvida entre inventar novas estruturas ou refinar as atuais, preferir a solução mais enxuta que entregue a nova direção com clareza.
