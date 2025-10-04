import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
      <div className="container py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Móveis Planejados em{" "}
                <span className="text-primary">São José, SC</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Transformamos seus ambientes com móveis sob medida, combinando
                funcionalidade, design e qualidade excepcional.
              </p>
            </div>

            <div className="space-y-3 animate-fade-in-up animation-delay-200">
              {[
                "Projeto 3D Grátis",
                "Instalação Profissional",
                "Garantia de 5 Anos",
                "Melhores Preços da Região",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 group">
                  <CheckCircle className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  <span className="text-base md:text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Button size="lg" asChild className="text-base md:text-lg hover-scale shadow-lg">
                <a href="#contato">
                  Solicitar Orçamento Grátis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover-lift">
                <a href="#projetos">Ver Nossos Projetos</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8 pt-8 border-t animate-fade-in-up animation-delay-400">
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-bold text-primary transition-transform group-hover:scale-110">500+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Projetos Realizados</p>
              </div>
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-bold text-primary transition-transform group-hover:scale-110">15+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div className="group cursor-default">
                <p className="text-3xl md:text-4xl font-bold text-primary transition-transform group-hover:scale-110">98%</p>
                <p className="text-xs md:text-sm text-muted-foreground">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up animation-delay-200 hover-lift">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10" />
            <Image
              src="/images/hero-kitchen.jpg"
              alt="Cozinha moderna planejada em São José - Móveis sob medida com qualidade excepcional"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
