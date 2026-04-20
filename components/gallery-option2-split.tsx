"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projetos" className="section-shell section-dark overflow-hidden">
      <div className="container space-y-8 md:space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Projetos em destaque
            </p>
            <h2 className="display-serif text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              Ambientes que mostram como design e marcenaria se encontram
            </h2>
            <p className="max-w-xl text-lg leading-8 text-white/78">
              Explore cozinhas, closets, dormitórios e salas produzidos para clientes de São José e região.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="border-white/60 bg-transparent text-white hover:bg-white hover:text-[#1f3a34]"
          >
            <a href="#contato">
              Quero um projeto assim
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={selectedCategory === category ? "secondary" : "ghost"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "border border-white/10 bg-white text-[#1f3a34] hover:bg-white/92"
                  : "border border-white/12 text-white hover:bg-white/10 hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <Card
                key={project.title}
                className={
                  isFeatured
                    ? "group overflow-hidden rounded-[2rem] border-white/10 bg-white/6 text-white backdrop-blur-sm lg:col-span-2 lg:row-span-2"
                    : "group overflow-hidden rounded-[1.75rem] border-white/10 bg-white/6 text-white backdrop-blur-sm"
                }
              >
                <div className={isFeatured ? "relative h-[24rem] md:h-[32rem]" : "relative h-80"}>
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} em ${project.location}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes={isFeatured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 space-y-3 p-5 md:p-7">
                    <Badge className="w-fit border border-white/10 bg-white/16 text-white hover:bg-white/16">
                      {project.category}
                    </Badge>
                    <div className="space-y-2">
                      <h3 className={isFeatured ? "display-serif text-2xl font-semibold md:text-3xl" : "text-xl font-semibold"}>
                        {project.title}
                      </h3>
                      <p className="flex items-center gap-2 text-sm text-white/78">
                        <MapPin className="size-4" />
                        {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-4 border-t border-white/12 pt-8 md:grid-cols-3">
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
      </div>
    </section>
  );
}
