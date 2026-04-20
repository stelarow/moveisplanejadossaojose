# Site Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refatorar a home para uma direção visual premium inspirada no sistema de `DESIGN.md`, reintroduzindo projetos e unificando paleta, tipografia e superfícies.

**Architecture:** A implementação reaproveita a estrutura atual da home e concentra a maior parte da mudança em tokens globais e nos componentes já ativos. A nova direção visual nasce primeiro em `app/layout.tsx`, `app/globals.css` e `components/ui/button.tsx`, depois é aplicada seção a seção para evitar retrabalho e manter o site navegável em cada etapa.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Lucide React, next/font.

---

## Estrutura de arquivos

- Modify: `app/layout.tsx`
  Responsável por fontes globais e composição base do documento.
- Modify: `app/globals.css`
  Responsável por tokens globais, superfícies, helpers visuais e ritmo de seção.
- Modify: `components/ui/button.tsx`
  Responsável pelo padrão pill e variantes principais de CTA.
- Modify: `components/header.tsx`
  Responsável pela navegação fixa, CTA do topo e drawer mobile.
- Modify: `components/hero.tsx`
  Responsável pela primeira dobra, prova social e estatísticas.
- Modify: `components/services-tabs.tsx`
  Responsável pela vitrine de categorias e conteúdo de serviços.
- Modify or replace: `components/gallery-option2-split.tsx`
  Responsável pela nova seção forte de projetos.
- Modify: `components/testimonials.tsx`
  Responsável pela prova social e integração visual das avaliações.
- Modify: `components/contact-progressive.tsx`
  Responsável pela CTA final, WhatsApp e formulário.
- Modify: `components/footer.tsx`
  Responsável pelo fechamento institucional.
- Modify: `app/page.tsx`
  Responsável por recompor a home com a volta da seção de projetos.

## Task 1: Base global de identidade

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Atualizar as fontes globais no layout**

Substituir a combinação atual baseada em `Geist + Montserrat` por uma dupla `sans + serif` mais compatível com a direção aprovada. Uma base segura para este projeto é `Nunito Sans` para corpo/navegação e `Lora` para momentos editoriais.

```tsx
import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import { WhatsAppButton } from "@/components/whatsapp-button";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans-ui",
  weight: ["400", "500", "600", "700", "800"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif-display",
  weight: ["500", "600", "700"],
});
```

- [ ] **Step 2: Aplicar as novas variáveis de fonte no `body`**

```tsx
<body className={`${nunitoSans.variable} ${lora.variable} antialiased`}>
  {children}
  <WhatsAppButton />
</body>
```

- [ ] **Step 3: Atualizar os aliases de fonte no tema do Tailwind**

Trocar as referências antigas do `@theme inline` por aliases específicos para o redesign.

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans-ui);
  --font-serif: var(--font-serif-display);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
}
```

- [ ] **Step 4: Trocar os tokens de cor e superfície em `:root`**

Aplicar uma base quente com creme, verde institucional e verde escuro para contraste. O bloco abaixo substitui os tokens atuais de fundo/primária/secundária/muted/borda.

```css
:root {
  --radius: 0.75rem;
  --background: oklch(0.96 0.012 85);
  --foreground: oklch(0.24 0.02 45);
  --card: oklch(0.995 0.003 80);
  --card-foreground: oklch(0.24 0.02 45);
  --popover: oklch(0.995 0.003 80);
  --popover-foreground: oklch(0.24 0.02 45);
  --primary: oklch(0.48 0.11 157);
  --primary-foreground: oklch(0.99 0.002 80);
  --secondary: oklch(0.92 0.02 84);
  --secondary-foreground: oklch(0.24 0.02 45);
  --muted: oklch(0.93 0.015 80);
  --muted-foreground: oklch(0.47 0.02 46);
  --accent: oklch(0.92 0.02 84);
  --accent-foreground: oklch(0.24 0.02 45);
  --border: oklch(0.87 0.01 80);
  --input: oklch(0.9 0.01 80);
  --ring: oklch(0.48 0.11 157);
}
```

- [ ] **Step 5: Adicionar helpers globais para seção, heading editorial e superfícies**

Esses utilitários evitam repetir classes extensas ao longo dos componentes.

```css
@layer base {
  body {
    @apply bg-background text-foreground font-sans;
  }

  h1,
  h2,
  h3 {
    letter-spacing: -0.02em;
  }
}

@layer components {
  .section-shell {
    @apply py-20 md:py-24;
  }

  .section-cream {
    background: color-mix(in oklch, var(--background) 88%, white 12%);
  }

  .section-ceramic {
    background: oklch(0.93 0.016 82);
  }

  .section-dark {
    background: oklch(0.3 0.06 164);
    color: white;
  }

  .eyebrow {
    @apply text-xs font-semibold uppercase tracking-[0.18em] text-primary;
  }

  .display-serif {
    font-family: var(--font-serif-display), serif;
  }
}
```

- [ ] **Step 6: Executar verificação rápida de compilação tipográfica e CSS**

Run: `npm run lint`
Expected: sem erros de import, sem variáveis de fonte quebradas, sem erro de sintaxe em `globals.css`.

- [ ] **Step 7: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat: establish premium visual foundation"
```

## Task 2: Padronizar CTAs e navegação superior

**Files:**
- Modify: `components/ui/button.tsx`
- Modify: `components/header.tsx`
- Modify: `components/logo.tsx`

- [ ] **Step 1: Ajustar o componente de botão para pills consistentes**

Atualizar o `cva` para que `default`, `outline` e `ghost` reflitam o novo sistema visual.

```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/95 shadow-[0_8px_20px_-12px_rgba(0,0,0,0.35)]",
        outline: "border border-primary/70 bg-transparent text-primary hover:bg-primary/8",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        ghost: "text-foreground hover:bg-black/5",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4",
        lg: "h-12 px-6 text-[15px]",
        icon: "size-10",
      },
    },
  }
);
```

- [ ] **Step 2: Remover import de fonte externa de dentro da logo**

Fazer a `Logo` herdar a nova tipografia global em vez de importar Google Fonts dentro do SVG.

```tsx
<text
  x="0"
  y="32"
  fontFamily="var(--font-sans-ui), sans-serif"
  fontSize="22"
  fontWeight="400"
  fill="currentColor"
  letterSpacing="0.08em"
>
  MÓVEIS PLANEJADOS
</text>
```

- [ ] **Step 3: Reestilizar o header para fundo quente e CTA forte**

Refatorar a composição principal do header para remover a aparência de barra SaaS e aproximar da linguagem de flagship retail.

```tsx
<header
  className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
    isScrolled
      ? "border-black/5 bg-[#f6f1e8]/95 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.45)] backdrop-blur-md"
      : "border-transparent bg-[#f6f1e8]/88 backdrop-blur"
  }`}
>
  <div className="container flex h-18 items-center justify-between gap-6">
```

- [ ] **Step 4: Ajustar navegação desktop e CTA**

```tsx
<nav className="hidden md:flex items-center gap-7">
  {menuItems.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="text-sm font-semibold tracking-[0.04em] text-foreground/80 transition-colors hover:text-primary"
    >
      {item.label}
    </a>
  ))}
  <Button asChild size="lg">
    <a href="#contato">Solicitar orçamento</a>
  </Button>
</nav>
```

- [ ] **Step 5: Ajustar menu mobile para a mesma linguagem visual**

```tsx
<SheetContent side="right" className="border-l-black/10 bg-[#f6f1e8] px-6">
  <nav className="mt-10 flex flex-col gap-5">
    {menuItems.map((item) => (
      <a
        key={item.href}
        href={item.href}
        onClick={() => setIsOpen(false)}
        className="text-lg font-semibold text-foreground/85 transition-colors hover:text-primary"
      >
        {item.label}
      </a>
    ))}
  </nav>
</SheetContent>
```

- [ ] **Step 6: Executar verificação do topo e variantes de CTA**

Run: `npm run lint`
Expected: sem erros em `button.tsx`, `header.tsx` e `logo.tsx`.

- [ ] **Step 7: Commit**

```bash
git add components/ui/button.tsx components/header.tsx components/logo.tsx
git commit -m "feat: restyle navigation and call to action system"
```

## Task 3: Redesenhar o hero

**Files:**
- Modify: `components/hero.tsx`

- [ ] **Step 1: Reestruturar o container do hero para superfícies sólidas**

```tsx
<section id="inicio" className="section-shell section-cream overflow-hidden">
  <div className="container">
    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
```

- [ ] **Step 2: Atualizar a hierarquia de texto com serif editorial pontual**

```tsx
<div className="space-y-6">
  <p className="eyebrow">Móveis planejados em São José, SC</p>
  <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
    Ambientes sob medida com acabamento de showroom e atendimento
    <span className="display-serif ml-2 text-primary">premium</span>
  </h1>
  <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
    Projetamos cozinhas, dormitórios, closets e espaços corporativos com
    aproveitamento inteligente, estética refinada e instalação profissional.
  </p>
</div>
```

- [ ] **Step 3: Substituir lista e CTAs por bloco mais institucional**

```tsx
<div className="grid gap-3 sm:grid-cols-2">
  {[
    "Projeto 3D gratuito",
    "Instalação profissional",
    "Garantia de 5 anos",
    "Atendimento em São José e região",
  ].map((benefit) => (
    <div key={benefit} className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 text-sm shadow-sm ring-1 ring-black/5">
      <CheckCircle className="h-5 w-5 text-primary" />
      <span>{benefit}</span>
    </div>
  ))}
</div>

<div className="flex flex-col gap-4 sm:flex-row">
  <Button size="lg" asChild>
    <a href="#contato">Solicitar orçamento grátis</a>
  </Button>
  <Button size="lg" variant="outline" asChild>
    <a href="#projetos">Ver projetos</a>
  </Button>
</div>
```

- [ ] **Step 4: Transformar a área da imagem em vitrine com sobreposição de autoridade**

```tsx
<div className="relative">
  <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-[#d9d0c3] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] md:h-[520px] lg:h-[620px]">
    <Image
      src="/images/hero-kitchen.jpg"
      alt="Cozinha planejada premium em São José"
      fill
      className="object-cover"
      priority
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
  </div>

  <div className="absolute -bottom-6 left-4 max-w-xs rounded-[1.5rem] bg-white p-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)] ring-1 ring-black/5 md:left-8">
    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Avaliação média</p>
    <p className="mt-2 text-3xl font-bold">4.9/5</p>
    <p className="mt-1 text-sm leading-6 text-muted-foreground">Clientes destacam acabamento, atendimento e montagem.</p>
  </div>
</div>
```

- [ ] **Step 5: Reestilizar as estatísticas finais**

```tsx
<div className="grid gap-4 border-t border-black/8 pt-8 sm:grid-cols-3">
  {[
    ["500+", "Projetos realizados"],
    ["15+", "Anos de experiência"],
    ["98%", "Clientes satisfeitos"],
  ].map(([value, label]) => (
    <div key={label} className="rounded-2xl bg-[#efe7da] px-5 py-4">
      <p className="text-3xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  ))}
</div>
```

- [ ] **Step 6: Executar verificação visual e de lint**

Run: `npm run lint`
Expected: sem erros em `components/hero.tsx`.

- [ ] **Step 7: Commit**

```bash
git add components/hero.tsx
git commit -m "feat: redesign hero as premium showroom section"
```

## Task 4: Transformar serviços em vitrine de categorias

**Files:**
- Modify: `components/services-tabs.tsx`

- [ ] **Step 1: Reestilizar a casca da seção e o cabeçalho**

```tsx
<section id="servicos" className="section-shell bg-white">
  <div className="container">
    <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
      <p className="eyebrow">Ambientes planejados</p>
      <h2 className="text-3xl font-bold md:text-4xl">Soluções sob medida para cada ambiente</h2>
      <p className="text-lg leading-8 text-muted-foreground">
        Cada categoria funciona como uma vitrine do que projetamos, fabricamos e instalamos em São José e região.
      </p>
    </div>
```

- [ ] **Step 2: Refinar tabs e trilha horizontal para parecer seleção de showroom**

```tsx
<TabsList
  ref={scrollRef}
  onScroll={checkScroll}
  className="w-full justify-start overflow-x-auto overflow-y-hidden rounded-full border border-black/8 bg-[#f3ede3] p-1.5 shadow-sm flex-nowrap scrollable-tabs"
>
  {services.map((service) => (
    <TabsTrigger
      key={service.id}
      value={service.id}
      className="rounded-full px-5 py-3 text-sm font-semibold text-foreground/75 data-[state=active]:bg-[#1f3a34] data-[state=active]:text-white"
    >
      {service.title}
    </TabsTrigger>
  ))}
</TabsList>
```

- [ ] **Step 3: Atualizar o conteúdo da aba para layout editorial com imagem forte**

```tsx
<div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#ded4c7] shadow-[0_24px_60px_-34px_rgba(0,0,0,0.32)]">
    <Image
      src={service.image}
      alt={`${service.title} - Móveis Planejados São José`}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>

  <div className="space-y-6 rounded-[2rem] bg-[#f6f1e8] p-6 md:p-8">
```

- [ ] **Step 4: Encurtar a sensação de lista técnica e reforçar benefícios legíveis**

```tsx
<div className="space-y-3">
  <h4 className="text-base font-semibold uppercase tracking-[0.12em] text-primary">O que entregamos</h4>
  <ul className="grid gap-3">
    {service.features.map((feature) => (
      <li key={feature} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/5">
        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <span className="text-sm leading-6 text-foreground/85">{feature}</span>
      </li>
    ))}
  </ul>
</div>
```

- [ ] **Step 5: Harmonizar botões laterais de scroll e CTA final**

```tsx
<Button size="lg" asChild>
  <a href="#contato">{service.cta}</a>
</Button>
```

Manter os botões de scroll, mas trocando o preenchimento atual por `bg-[#1f3a34] text-white` para alinhar com a nova banda escura.

- [ ] **Step 6: Executar verificação da seção**

Run: `npm run lint`
Expected: sem erros em `components/services-tabs.tsx`.

- [ ] **Step 7: Commit**

```bash
git add components/services-tabs.tsx
git commit -m "feat: restyle services as curated category showcase"
```

## Task 5: Reintroduzir projetos como seção protagonista

**Files:**
- Modify: `components/gallery-option2-split.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Reaproveitar a galeria atual como base da nova seção**

Manter o estado local de categoria e os dados atuais, mas trocar a estrutura de split por uma composição mais forte.

```tsx
export function GalleryOption2Split() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projetos" className="section-shell section-dark overflow-hidden">
```

- [ ] **Step 2: Criar cabeçalho editorial com CTA e filtros compactos**

```tsx
<div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
  <div className="max-w-2xl space-y-4">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Projetos em destaque</p>
    <h2 className="text-3xl font-bold text-white md:text-4xl">Ambientes que mostram como design e marcenaria se encontram</h2>
    <p className="text-lg leading-8 text-white/78">
      Explore cozinhas, closets, dormitórios e salas produzidos para clientes de São José e região.
    </p>
  </div>

  <Button asChild variant="outline" className="border-white/60 text-white hover:bg-white hover:text-[#1f3a34]">
    <a href="#contato">Quero um projeto assim</a>
  </Button>
</div>

<div className="mb-8 flex flex-wrap gap-2">
  {categories.map((category) => (
    <Button
      key={category}
      size="sm"
      variant={selectedCategory === category ? "secondary" : "ghost"}
      onClick={() => setSelectedCategory(category)}
      className={selectedCategory === category ? "bg-white text-[#1f3a34]" : "text-white hover:bg-white/10"}
    >
      {category}
    </Button>
  ))}
</div>
```

- [ ] **Step 3: Trocar o carrossel simples por uma grade/carrossel com cards fotográficos grandes**

```tsx
<div className="grid gap-5 lg:grid-cols-3">
  {filteredProjects.map((project) => (
    <Card key={project.title} className="overflow-hidden rounded-[1.75rem] border-white/10 bg-white/6 text-white backdrop-blur-sm">
      <div className="relative h-80">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.category} em ${project.location}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      </div>
      <div className="space-y-3 p-5">
        <Badge className="w-fit bg-white/16 text-white hover:bg-white/16">{project.category}</Badge>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-white/72">{project.location}</p>
      </div>
    </Card>
  ))}
</div>
```

- [ ] **Step 4: Adicionar faixa de processo abaixo da galeria**

```tsx
<div className="mt-10 grid gap-4 border-t border-white/12 pt-8 md:grid-cols-3">
  {[
    ["01", "Projeto 3D para validar layout e circulação."],
    ["02", "Materiais e ferragens selecionados para uso real."],
    ["03", "Montagem profissional com acabamento final no ambiente."],
  ].map(([step, copy]) => (
    <div key={step} className="rounded-3xl bg-white/7 p-5">
      <p className="text-sm font-semibold tracking-[0.16em] text-white/55">{step}</p>
      <p className="mt-3 text-base leading-7 text-white/88">{copy}</p>
    </div>
  ))}
</div>
```

- [ ] **Step 5: Recolocar a seção em `app/page.tsx`**

Inserir a importação e a renderização entre `ServicesTabs` e `Testimonials`.

```tsx
import { GalleryOption2Split } from "@/components/gallery-option2-split";

<main>
  <Hero />
  <ServicesTabs />
  <GalleryOption2Split />
  <Testimonials />
  <Contact />
</main>
```

- [ ] **Step 6: Executar verificação da composição da home**

Run: `npm run lint`
Expected: sem erros em `app/page.tsx` e `components/gallery-option2-split.tsx`.

- [ ] **Step 7: Commit**

```bash
git add components/gallery-option2-split.tsx app/page.tsx
git commit -m "feat: bring back projects as flagship home section"
```

## Task 6: Unificar prova social, contato e fechamento

**Files:**
- Modify: `components/testimonials.tsx`
- Modify: `components/contact-progressive.tsx`
- Modify: `components/footer.tsx`

- [ ] **Step 1: Reestilizar depoimentos para integrar o selo Google ao sistema visual**

Atualizar o wrapper da seção para `section-cream` e trocar cards brancos frios por superfícies quentes. O header pode seguir este bloco:

```tsx
<section id="depoimentos" className="section-shell section-cream">
  <div className="container">
    <div className="mb-12 space-y-6 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 shadow-sm">
        <span className="text-sm font-semibold text-foreground/70">Avaliações Google</span>
      </div>
      <div className="space-y-3">
        <h2 className="text-3xl font-bold md:text-4xl">Clientes que aprovaram o projeto e o acabamento</h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
          A nota média continua visível, mas agora dentro de uma apresentação alinhada ao restante da home.
        </p>
      </div>
    </div>
```

- [ ] **Step 2: Atualizar cards de depoimento para superfícies mais elegantes**

```tsx
<Card className="h-full rounded-[1.5rem] border-black/6 bg-white/80 shadow-[0_16px_30px_-24px_rgba(0,0,0,0.35)]">
  <CardContent className="space-y-4 pt-6">
```

Trocar o avatar azul por base em `primary/15` com texto `text-primary`.

- [ ] **Step 3: Reestruturar a seção de contato como bloco final de conversão**

Trocar o wrapper atual por uma banda escura ou creme com contraste mais forte. A composição recomendada é fundo escuro com cards internos claros.

```tsx
<section id="contato" className="section-shell section-dark">
  <div className="container">
    <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Orçamento sem compromisso</p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">Vamos desenhar o seu próximo ambiente</h2>
      <p className="text-lg leading-8 text-white/78">
        Fale com a equipe, compartilhe sua ideia e receba uma proposta alinhada ao seu espaço.
      </p>
    </div>
```

- [ ] **Step 4: Integrar o destaque de WhatsApp ao mesmo sistema de superfícies**

```tsx
<Card className="overflow-hidden rounded-[1.75rem] border-white/10 bg-[#2a6f55] text-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.4)]">
  <CardContent className="p-5 md:p-6">
```

O botão interno deve usar `bg-white text-[#2a6f55] hover:bg-white/90`.

- [ ] **Step 5: Reestilizar cards do formulário e do footer**

Aplicar fundos claros quentes e remover o look atual de bloco utilitário.

```tsx
<Card className="rounded-[1.75rem] border-white/10 bg-[#f7f2ea] text-foreground shadow-[0_18px_40px_-30px_rgba(0,0,0,0.4)]">
```

No footer, migrar para uma base institucional escura:

```tsx
<footer className="border-t border-white/10 bg-[#1f3a34] text-white">
  <div className="container py-14">
```

- [ ] **Step 6: Executar verificação final da home**

Run: `npm run lint`
Expected: sem erros nos três componentes.

Run: `npm run build`
Expected: build de produção concluído com sucesso.

- [ ] **Step 7: Commit**

```bash
git add components/testimonials.tsx components/contact-progressive.tsx components/footer.tsx
git commit -m "feat: unify testimonials contact and footer styling"
```

## Task 7: Revisão final e validação manual

**Files:**
- Modify: none expected unless correções forem necessárias

- [ ] **Step 1: Rodar lint geral após todos os commits locais**

Run: `npm run lint`
Expected: PASS.

- [ ] **Step 2: Rodar build geral após todos os commits locais**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 3: Verificar a home manualmente em desktop e mobile**

Run: `npm run dev`
Expected: servidor disponível em `http://localhost:3000`.

Checklist manual:

```text
- Header continua legível e sticky.
- Hero mantém CTA visível acima da dobra.
- Serviços continuam navegáveis por tab e touch.
- Projetos aparecem entre serviços e depoimentos.
- Depoimentos, contato e footer seguem a mesma paleta.
- Mobile não apresenta overflow horizontal.
```

- [ ] **Step 4: Corrigir eventuais regressões de espaçamento, contraste ou responsividade**

Se algum item do checklist falhar, aplicar correções mínimas nos componentes impactados antes de encerrar.

```tsx
// Exemplo de correção mínima esperada:
className="px-4 md:px-6 lg:px-8"
className="text-white/78 md:text-lg"
className="overflow-hidden rounded-[1.75rem]"
```

- [ ] **Step 5: Commit de acabamento final**

```bash
git add app/page.tsx app/layout.tsx app/globals.css components/header.tsx components/hero.tsx components/services-tabs.tsx components/gallery-option2-split.tsx components/testimonials.tsx components/contact-progressive.tsx components/footer.tsx components/ui/button.tsx components/logo.tsx
git commit -m "feat: complete premium home redesign"
```

## Self-review

- Cobertura do spec:
  - Paleta, tipografia, superfícies e pills cobertos em `Task 1` e `Task 2`.
  - Header, Hero, ServicesTabs, Projetos, Depoimentos, Contato e Footer cobertos em `Task 2` a `Task 6`.
  - Reintrodução da seção de projetos coberta em `Task 5`.
  - Responsividade e validação final cobertas em `Task 7`.
- Placeholder scan:
  - Não há `TODO`, `TBD` ou referências vagas a “fazer depois”.
  - Os comandos de verificação e commits estão explícitos.
- Consistência:
  - Os mesmos arquivos do spec aparecem no plano.
  - A composição final da home mantém a ordem `Hero > ServicesTabs > GalleryOption2Split > Testimonials > Contact > Footer`.
