"use client";

import { useRef, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

export function ServicesTabs() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };
  const services = [
    {
      id: "cozinhas",
      title: "Cozinhas Planejadas",
      badge: "Mais Procurado",
      image: "/images/projects/cozinha-planejada.jpg",
      description: "Transforme sua cozinha em um ambiente funcional, moderno e acolhedor. Nossos projetos de cozinhas planejadas são desenvolvidos sob medida para otimizar cada centímetro do espaço disponível, combinando design elegante com soluções práticas para o seu dia a dia.",
      longDescription: "Cada detalhe é pensado para facilitar sua rotina: desde a disposição estratégica de armários e gavetas até a escolha de materiais resistentes e de fácil limpeza. Oferecemos acabamentos premium em diversos estilos - do clássico ao contemporâneo - sempre respeitando sua identidade e necessidades.",
      features: [
        "Armários sob medida com aproveitamento total do espaço",
        "Gavetas com sistemas de amortecimento e corrediças telescópicas",
        "Bancadas em granito, quartzo ou materiais premium",
        "Iluminação LED integrada em nichos e armários",
        "Ferragens de alta qualidade e acabamentos personalizados",
        "Projeto 3D realista antes da execução"
      ],
      cta: "Solicitar Orçamento para Cozinha"
    },
    {
      id: "dormitorios",
      title: "Dormitórios Completos",
      badge: "Popular",
      image: "/images/projects/dormitorio.jpg",
      description: "Crie o quarto dos seus sonhos com móveis planejados que unem conforto, organização e estilo. Desenvolvemos projetos completos de dormitórios com guarda-roupas, camas, criados-mudos, bancadas e todos os elementos necessários para um ambiente harmonioso.",
      longDescription: "Nossos dormitórios planejados são projetados pensando no seu bem-estar e rotina. Cada espaço é aproveitado de forma inteligente, criando áreas funcionais para descanso, arrumação e lazer. Trabalhamos com diversos estilos decorativos e oferecemos soluções personalizadas para quartos de casal, infantis e teen.",
      features: [
        "Guarda-roupas planejados com divisórias personalizadas",
        "Camas com cabeceiras integradas e nichos decorativos",
        "Criados-mudos com gavetas e prateleiras funcionais",
        "Bancadas para penteadeira ou home office",
        "Painéis decorativos e iluminação embutida",
        "Espelhos, sapateiras e organizadores internos"
      ],
      cta: "Solicitar Orçamento para Dormitório"
    },
    {
      id: "closets",
      title: "Closets Sob Medida",
      badge: null,
      image: "/images/projects/closet-luxo.jpg",
      description: "Tenha o closet perfeito para organizar roupas, sapatos, bolsas e acessórios com sofisticação e praticidade. Nossos closets planejados oferecem soluções inteligentes de armazenamento que facilitam sua rotina e valorizam seu espaço.",
      longDescription: "Cada closet é único e projetado de acordo com seu estilo de vida e necessidades específicas. Criamos sistemas de organização com araras, prateleiras ajustáveis, gaveteiros, sapateiras e compartimentos especiais. Iluminação estratégica e espelhos integrados completam o projeto para uma experiência premium.",
      features: [
        "Projeto personalizado com medidas exatas do espaço",
        "Araras em aço inox ou alumínio para cabides",
        "Prateleiras reguláveis para máxima flexibilidade",
        "Gaveteiros com divisórias para acessórios",
        "Sapateiras modulares e nichos para bolsas",
        "Iluminação LED de alta qualidade e espelhos amplos"
      ],
      cta: "Solicitar Orçamento para Closet"
    },
    {
      id: "salas",
      title: "Salas de Estar",
      badge: null,
      image: "/images/projects/sala-estar.jpg",
      description: "Transforme sua sala em um espaço elegante e funcional com móveis planejados que combinam design e praticidade. Oferecemos estantes, painéis para TV, aparadores e móveis multifuncionais que organizam e decoram seu ambiente.",
      longDescription: "Nossas salas planejadas são pensadas para criar ambientes acolhedores onde você pode relaxar, receber amigos e família com conforto. Criamos soluções que integram tecnologia, organização e estética, com nichos para decoração, compartimentos para equipamentos eletrônicos e acabamentos que valorizam seu espaço.",
      features: [
        "Painéis para TV com suporte para fiação organizada",
        "Estantes modulares com nichos decorativos",
        "Aparadores e buffets para área de jantar",
        "Móveis multifuncionais que otimizam espaço",
        "Iluminação de destaque em nichos e prateleiras",
        "Acabamentos em diversos estilos e cores"
      ],
      cta: "Solicitar Orçamento para Sala"
    },
    {
      id: "banheiros",
      title: "Banheiros Planejados",
      badge: null,
      image: "/images/projects/banheiro-moderno.jpg",
      description: "Aproveite cada espaço do seu banheiro com móveis planejados funcionais e elegantes. Desenvolvemos armários, gabinetes, nichos e prateleiras que organizam produtos de higiene e decoração com estilo.",
      longDescription: "Banheiros planejados precisam de materiais resistentes à umidade e soluções inteligentes de armazenamento. Nossos projetos utilizam ferragens especiais, acabamentos impermeáveis e design otimizado para criar ambientes práticos, higiênicos e bonitos. Do lavabo ao banheiro master, criamos soluções sob medida.",
      features: [
        "Gabinetes com materiais resistentes à umidade",
        "Armários espelhados com iluminação integrada",
        "Nichos embutidos para shampoos e produtos",
        "Prateleiras e organizadores internos",
        "Acabamentos impermeáveis e de fácil limpeza",
        "Projeto adaptado a instalações hidráulicas existentes"
      ],
      cta: "Solicitar Orçamento para Banheiro"
    },
    {
      id: "corporativo",
      title: "Ambientes Corporativos",
      badge: null,
      image: "/images/projects/escritorio-corporativo.jpg",
      description: "Mobilie seu escritório, consultório ou estabelecimento comercial com soluções planejadas que transmitem profissionalismo e organização. Criamos ambientes corporativos funcionais que aumentam a produtividade e impressionam clientes.",
      longDescription: "Ambientes corporativos exigem móveis robustos, funcionais e que transmitam a identidade da sua marca. Desenvolvemos projetos completos para escritórios, consultórios médicos, clínicas, salões de beleza e lojas comerciais. Cada projeto é pensado para otimizar fluxo de trabalho, organização de documentos e atendimento ao cliente.",
      features: [
        "Mesas executivas e estações de trabalho ergonômicas",
        "Armários e arquivos para organização de documentos",
        "Recepções e balcões de atendimento personalizados",
        "Estantes e prateleiras para produtos e materiais",
        "Acabamentos profissionais e duráveis",
        "Projeto alinhado à identidade visual da empresa"
      ],
      cta: "Solicitar Orçamento Corporativo"
    }
  ];

  const featuredService = services[0];

  return (
    <section
      id="servicos"
      className="section-shell bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(246,241,232,0.7)_100%)]"
    >
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center md:mb-14">
          <p className="eyebrow">Ambientes planejados</p>
          <h2 className="display-serif text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-5xl">
            Soluções sob medida para cada ambiente
          </h2>
          <p className="text-lg leading-8 text-muted-foreground md:text-xl">
            Cada categoria funciona como uma vitrine do que projetamos,
            fabricamos e instalamos em São José e região.
          </p>
        </div>

        <Tabs defaultValue="cozinhas" className="w-full services-tabs">
          <div className="relative mb-8 md:mb-10">
            {canScrollLeft && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll('left')}
                aria-label="Rolar categorias para a esquerda"
                className="absolute left-1 top-1/2 z-10 size-11 -translate-y-1/2 rounded-full border-0 bg-[#1f3a34] text-white shadow-[0_20px_35px_-24px_rgba(0,0,0,0.85)] hover:bg-[#294940]"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            )}

            {canScrollRight && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll('right')}
                aria-label="Rolar categorias para a direita"
                className="absolute right-1 top-1/2 z-10 size-11 -translate-y-1/2 rounded-full border-0 bg-[#1f3a34] text-white shadow-[0_20px_35px_-24px_rgba(0,0,0,0.85)] hover:bg-[#294940]"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            )}

            <TabsList
              ref={scrollRef}
              onScroll={checkScroll}
              className="scrollable-tabs h-auto w-full justify-start overflow-x-auto overflow-y-hidden rounded-full border border-black/8 bg-[#f3ede3] p-1.5 shadow-sm flex-nowrap"
            >
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="relative whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold text-foreground/75 transition-all duration-200 data-[state=active]:bg-[#1f3a34] data-[state=active]:text-white data-[state=active]:shadow-[0_12px_30px_-22px_rgba(0,0,0,0.7)]"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {services.map((service) => (
            <TabsContent
              key={service.id}
              value={service.id}
              className="mt-0 animate-in fade-in-50 slide-in-from-bottom-3 duration-300"
            >
              <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#ded4c7] shadow-[0_24px_60px_-34px_rgba(0,0,0,0.32)]">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Móveis Planejados São José`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 52vw"
                    />
                  </div>

                  <div className="grid gap-3 rounded-[1.75rem] border border-black/6 bg-white/80 p-4 text-sm text-muted-foreground shadow-[0_18px_40px_-34px_rgba(0,0,0,0.45)] sm:grid-cols-3">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">
                        Projeto
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        Layout pensado para sua rotina
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">
                        Execução
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        Marcenaria sob medida e instalação precisa
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">
                        Diferencial
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        Materiais premium e acabamento consistente
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 rounded-[2rem] bg-[#f6f1e8] p-6 shadow-[0_24px_60px_-42px_rgba(0,0,0,0.5)] ring-1 ring-black/5 md:p-8 lg:p-10">
                  <div className="space-y-4 border-b border-black/8 pb-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                        {service.id === featuredService.id
                          ? "Categoria em destaque"
                          : "Curadoria residencial e corporativa"}
                      </span>
                      {service.badge && (
                        <Badge className="rounded-full border-0 bg-[#1f3a34] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#1f3a34]">
                          {service.badge}
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-3">
                      <h3 className="display-serif text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-4xl">
                        {service.title}
                      </h3>
                      <p className="max-w-xl text-base leading-7 text-foreground/80 md:text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <p className="text-base leading-7 text-muted-foreground md:text-[15px]">
                    {service.longDescription}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-base font-semibold uppercase tracking-[0.12em] text-primary">
                      O que entregamos
                    </h4>
                    <ul className="grid gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/5"
                        >
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm leading-6 text-foreground/85">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 border-t border-black/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                      Atendimento consultivo, projeto visual e execução completa
                      para ambientes planejados com mais critério.
                    </p>
                    <Button size="lg" asChild className="w-full sm:w-auto">
                      <a href="#contato">{service.cta}</a>
                    </Button>
                  </div>

                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
