"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function GalleryOption3Multi() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const projects = [
    {
      title: "Cozinha Moderna com Ilha",
      category: "Cozinha",
      location: "São José - Kobrasol",
    },
    {
      title: "Closet Casal Luxo",
      category: "Closet",
      location: "São José - Campinas",
    },
    {
      title: "Dormitório Completo",
      category: "Dormitório",
      location: "São José - Forquilhinhas",
    },
    {
      title: "Home Office Executivo",
      category: "Escritório",
      location: "São José - Centro",
    },
    {
      title: "Sala de Estar Integrada",
      category: "Sala",
      location: "São José - Barreiros",
    },
    {
      title: "Cozinha Compacta",
      category: "Cozinha",
      location: "São José - Kobrasol",
    },
    {
      title: "Banheiro Planejado",
      category: "Banheiro",
      location: "São José - Centro",
    },
    {
      title: "Área de Serviço",
      category: "Área de Serviço",
      location: "São José - Kobrasol",
    },
  ];

  const categories = ["Todos", "Cozinha", "Closet", "Dormitório", "Escritório", "Sala"];

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossos Projetos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos realizados em São José e região
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all ${
                selectedCategory === category
                  ? "shadow-md"
                  : "hover:border-primary/50"
              }`}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* MULTI-ITEM CAROUSEL - Mostra 3 no desktop, 1 no mobile */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {filteredProjects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden group cursor-pointer hover-lift border-2 hover:border-primary/30 transition-all h-full">
                  <div className="relative h-64 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="text-sm text-muted-foreground group-hover:scale-110 transition-transform duration-300">
                      Imagem: {project.title}
                    </p>

                    {/* Texto "Ver Projeto" ao fazer hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium">
                        Ver Projeto
                      </div>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="shrink-0">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <span className="text-primary">📍</span>
                      {project.location}
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        {/* Mobile: Swipe Hint */}
        <div className="md:hidden text-center mt-4">
          <p className="text-sm text-muted-foreground">
            ← Deslize para ver mais projetos →
          </p>
        </div>
      </div>
    </section>
  );
}
