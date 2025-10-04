"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Utensils, Bed, Briefcase, Shirt, Bath, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export function Services() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const services = [
    {
      icon: Utensils,
      title: "Cozinhas Planejadas",
      description: "Cozinhas funcionais e elegantes, otimizadas para seu dia a dia com acabamentos premium e soluções inteligentes.",
    },
    {
      icon: Bed,
      title: "Dormitórios",
      description: "Quartos completos com guarda-roupas, camas, criados-mudos e bancadas personalizadas para seu conforto.",
    },
    {
      icon: Shirt,
      title: "Closets",
      description: "Closets sob medida com organização perfeita para suas roupas, sapatos e acessórios.",
    },
    {
      icon: Home,
      title: "Salas de Estar",
      description: "Estantes, painéis e móveis para sala que combinam estilo e funcionalidade.",
    },
    {
      icon: Bath,
      title: "Banheiros",
      description: "Armários e gabinetes planejados que aproveitam cada espaço do seu banheiro.",
    },
    {
      icon: Briefcase,
      title: "Ambientes Corporativos",
      description: "Móveis planejados para escritórios, consultórios e estabelecimentos comerciais.",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="servicos" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em móveis planejados para todos os
            ambientes da sua casa ou empresa em São José, SC
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <CarouselItem key={service.title} className="pl-4 md:basis-1/2 lg:basis-1/2">
                    <Card className="hover-lift border-2 hover:border-primary/30 transition-all group h-full">
                      <CardHeader>
                        <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                        <Button variant="ghost" asChild className="w-full group/btn hover:bg-primary/10">
                          <a href="#contato" className="flex items-center justify-center gap-2">
                            Solicitar Orçamento
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              className="size-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Anterior</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              className="size-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border-0 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Próximo</span>
            </Button>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Ir para serviço ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
