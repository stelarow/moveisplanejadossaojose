"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Kobrasol, São José",
      text: "Excelente trabalho! A cozinha ficou perfeita, exatamente como imaginei. A equipe é muito profissional e o acabamento é impecável.",
      rating: 5,
      date: "há 2 meses",
      initials: "MS",
    },
    {
      name: "João Santos",
      location: "Campinas, São José",
      text: "Contratei para fazer o closet do meu apartamento e superou minhas expectativas. Projeto 3D muito detalhado e instalação rápida.",
      rating: 5,
      date: "há 1 mês",
      initials: "JS",
    },
    {
      name: "Ana Paula Costa",
      location: "Forquilhinhas, São José",
      text: "Fiz o dormitório completo com eles. Adorei o atendimento personalizado e a qualidade dos materiais. Super recomendo!",
      rating: 5,
      date: "há 3 semanas",
      initials: "AC",
    },
    {
      name: "Carlos Mendes",
      location: "Centro, São José",
      text: "Móveis de excelente qualidade com preço justo. Fizeram todo o escritório da minha empresa. Equipe pontual e comprometida.",
      rating: 5,
      date: "há 1 semana",
      initials: "CM",
    },
    {
      name: "Fernanda Lima",
      location: "Barreiros, São José",
      text: "Melhor escolha que fiz! Os móveis planejados transformaram minha casa. Atendimento nota 10 do início ao fim.",
      rating: 5,
      date: "há 2 semanas",
      initials: "FL",
    },
    {
      name: "Ricardo Oliveira",
      location: "Kobrasol, São José",
      text: "Profissionais extremamente competentes. O projeto foi entregue no prazo e ficou lindo. Estou muito satisfeito!",
      rating: 5,
      date: "há 4 dias",
      initials: "RO",
    },
  ];

  return (
    <section id="depoimentos" className="section-shell section-cream overflow-hidden">
      <div className="container">
        <div className="mx-auto mb-12 max-w-4xl space-y-6 text-center md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 shadow-sm">
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground/70">Depoimentos de clientes</span>
          </div>

          <div className="space-y-4">
            <h2 className="display-serif text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              Clientes que aprovaram o projeto e o acabamento
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              A confiança construída em São José aparece nas avaliações, no cuidado
              com o atendimento e na entrega final de cada ambiente.
            </p>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                <Card className="h-full rounded-[1.5rem] border-black/6 bg-white/80 shadow-[0_16px_30px_-24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-24px_rgba(0,0,0,0.28)]">
                  <CardContent className="space-y-5 pt-6">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-12 w-12 border border-primary/10">
                        <AvatarFallback className="bg-primary/15 font-semibold text-primary">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-base truncate">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5 text-[#FBBC04]">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-current" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {testimonial.date}
                      </span>
                    </div>

                    <p className="text-sm leading-7 text-foreground/85 md:text-[15px]">
                      {testimonial.text}
                    </p>

                    <div className="border-t border-black/8 pt-4">
                      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        <Quote className="h-4 w-4 text-primary" />
                        <span>Depoimento de cliente</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden border-black/8 bg-white/90 text-foreground shadow-sm md:flex" />
          <CarouselNext className="hidden border-black/8 bg-white/90 text-foreground shadow-sm md:flex" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-black/15 hover:bg-black/25"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
