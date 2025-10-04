"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function GalleryOption2Split() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const projects = [
    {
      title: "Cozinha Moderna com Ilha",
      category: "Cozinha",
      location: "São José - Kobrasol",
      image: "/images/projects/cozinha-ilha.jpg",
    },
    {
      title: "Closet Casal Luxo",
      category: "Closet",
      location: "São José - Campinas",
      image: "/images/projects/closet-luxo.jpg",
    },
    {
      title: "Dormitório Completo",
      category: "Dormitório",
      location: "São José - Forquilhinhas",
      image: "/images/projects/dormitorio.jpg",
    },
    {
      title: "Home Office Executivo",
      category: "Escritório",
      location: "São José - Centro",
      image: "/images/projects/home-office.jpg",
    },
    {
      title: "Sala de Estar Integrada",
      category: "Sala",
      location: "São José - Barreiros",
      image: "/images/projects/sala-estar.jpg",
    },
    {
      title: "Cozinha Compacta",
      category: "Cozinha",
      location: "São José - Kobrasol",
      image: "/images/projects/cozinha-compacta.jpg",
    },
  ];

  const categories = ["Todos", "Cozinha", "Closet", "Dormitório", "Escritório", "Sala"];

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nossos Projetos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos realizados em São José e região
          </p>
        </div>

        {/* LAYOUT SPLIT: Texto ao Lado + Carousel */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">

          {/* Coluna de Texto Instrutivo */}
          <div className="space-y-6">
            <div className="inline-block">
              <Badge variant="outline" className="mb-2">Qualidade Garantida</Badge>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">
              Projetos Personalizados para Cada Ambiente
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada projeto é único e desenvolvido pensando nas suas necessidades específicas.
              Combinamos design moderno, funcionalidade e materiais de primeira qualidade.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Projeto 3D Gratuito</h4>
                  <p className="text-sm text-muted-foreground">
                    Visualize seu projeto antes mesmo de começar a produção
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Materiais Premium</h4>
                  <p className="text-sm text-muted-foreground">
                    Trabalhamos com as melhores marcas e acabamentos do mercado
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Montagem Profissional</h4>
                  <p className="text-sm text-muted-foreground">
                    Equipe especializada garante instalação perfeita e rápida
                  </p>
                </div>
              </div>
            </div>

            {/* Filtros de Categoria */}
            <div className="pt-4">
              <p className="text-sm font-medium mb-3">Filtrar por categoria:</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna do Carousel */}
          <div className="relative">
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
                    <Card className="overflow-hidden border-2 hover:border-primary/30 transition-all">
                      <div className="relative h-80 md:h-96">
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.category} planejado em ${project.location}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                        {/* Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                          <Badge variant="secondary" className="mb-2">
                            {project.category}
                          </Badge>
                          <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                          <p className="text-sm text-white/80 flex items-center gap-1">
                            <span>📍</span>
                            {project.location}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {filteredProjects.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-muted-foreground/30"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
