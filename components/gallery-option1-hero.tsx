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

export function GalleryOption1Hero() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const projects = [
    {
      title: "Cozinha Moderna com Ilha",
      category: "Cozinha",
      location: "São José - Kobrasol",
      description: "Projeto completo com ilha central, armários planejados e acabamento premium"
    },
    {
      title: "Closet Casal Luxo",
      category: "Closet",
      location: "São José - Campinas",
      description: "Closet espaçoso com iluminação LED, espelhos e gavetas personalizadas"
    },
    {
      title: "Dormitório Completo",
      category: "Dormitório",
      location: "São José - Forquilhinhas",
      description: "Dormitório planejado com guarda-roupa, cabeceira e criados-mudos integrados"
    },
    {
      title: "Home Office Executivo",
      category: "Escritório",
      location: "São José - Centro",
      description: "Ambiente profissional com mesa ampla, estantes e armários sob medida"
    },
    {
      title: "Sala de Estar Integrada",
      category: "Sala",
      location: "São José - Barreiros",
      description: "Sala moderna com painel para TV, estantes e nichos decorativos"
    },
    {
      title: "Cozinha Compacta",
      category: "Cozinha",
      location: "São José - Kobrasol",
      description: "Solução inteligente para espaços pequenos com máxima funcionalidade"
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

        {/* HERO CAROUSEL - Full Width */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {filteredProjects.map((project, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden border-2">
                  {/* Hero Image Area */}
                  <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Placeholder para imagem real */}
                    <p className="text-sm text-muted-foreground/50 z-0">
                      Imagem: {project.title}
                    </p>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10">
                      <div className="max-w-3xl">
                        <Badge variant="secondary" className="mb-4">
                          {project.category}
                        </Badge>
                        <h3 className="text-3xl md:text-5xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-lg md:text-xl mb-4 text-white/90">
                          {project.description}
                        </p>
                        <p className="text-sm md:text-base text-white/80 flex items-center gap-2 mb-6">
                          <span>📍</span>
                          {project.location}
                        </p>
                        <Button size="lg" className="shadow-lg">
                          Ver Detalhes do Projeto
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredProjects.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-muted-foreground/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
