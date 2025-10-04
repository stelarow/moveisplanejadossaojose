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

  return (
    <section id="servicos" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em móveis planejados para todos os ambientes da sua casa ou empresa em São José, SC
          </p>
        </div>

        <Tabs defaultValue="cozinhas" className="w-full services-tabs">
          <div className="relative mb-8">
            {/* Botão Esquerda */}
            {canScrollLeft && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            )}

            {/* Botão Direita */}
            {canScrollRight && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 size-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            )}

            <TabsList
              ref={scrollRef}
              onScroll={checkScroll}
              className="w-full justify-start overflow-x-auto overflow-y-hidden h-auto p-1 bg-background border rounded-lg flex-nowrap scrollable-tabs"
            >
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="relative whitespace-nowrap px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:font-semibold transition-all"
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
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Imagem */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Móveis Planejados São José`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Conteúdo */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {service.title}
                      </h3>
                      {service.badge && (
                        <Badge variant="default" className="text-xs">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">O que oferecemos:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button size="lg" asChild className="w-full md:w-auto">
                    <a href="#contato">
                      {service.cta}
                    </a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
