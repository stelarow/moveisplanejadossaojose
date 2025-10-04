"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
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

  const averageRating = 4.9;
  const totalReviews = 48;

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container">
        {/* Header com Rating Médio estilo Google */}
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-full shadow-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-medium text-muted-foreground">Avaliações Google</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-5xl md:text-6xl font-bold">{averageRating}</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#FBBC04] text-[#FBBC04]"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {totalReviews} avaliações
                </p>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Depoimentos reais de clientes satisfeitos em São José, SC
            </p>
          </div>

        </div>

        {/* Carrossel de Reviews */}
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
                <Card className="hover:shadow-xl transition-all duration-300 border-border/50 bg-white h-full">
                  <CardContent className="pt-6 space-y-4">
                    {/* Header do Card com Avatar */}
                    <div className="flex items-start gap-3">
                      <Avatar className="h-12 w-12 border-2 border-border">
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold">
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

                    {/* Estrelas e Data */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-[#FBBC04] text-[#FBBC04]"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {testimonial.date}
                      </span>
                    </div>

                    {/* Texto da Review */}
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {testimonial.text}
                    </p>

                    {/* Badge Google */}
                    <div className="pt-3 border-t border-border/50">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                        <span>Postado no Google</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Indicadores de Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "w-8 bg-[#4285F4]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
