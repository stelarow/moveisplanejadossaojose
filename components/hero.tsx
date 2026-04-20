import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const highlights = [
    "Projeto 3D gratuito",
    "Marcenaria sob medida",
    "Instalação profissional",
    "Atendimento em São José e região",
  ];

  const stats = [
    ["500+", "Projetos realizados"],
    ["15+", "Anos de experiência"],
    ["98%", "Clientes satisfeitos"],
  ];

  return (
    <section id="inicio" className="section-shell section-cream overflow-hidden">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="eyebrow">Móveis planejados em São José, SC</p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Ambientes sob medida com acabamento de showroom e atendimento
                <span className="display-serif ml-2 text-primary">premium</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Projetamos cozinhas, dormitórios, closets e espaços
                corporativos com aproveitamento inteligente, estética refinada
                e instalação profissional.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-black/6 bg-white px-6 py-6 shadow-[0_20px_50px_-35px_rgba(0,0,0,0.35)] md:px-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {highlights.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-2xl bg-[#f3ecdf] px-4 py-3 text-sm font-medium text-foreground/90 ring-1 ring-black/5"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4 border-t border-black/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-md space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    Atendimento consultivo
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Do briefing ao acabamento final, cada projeto nasce para
                    valorizar o ambiente e a rotina da sua casa ou empresa.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:items-end">
                  <Button size="lg" asChild>
                    <a href="#contato">
                      Solicitar orçamento grátis
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#projetos">Ver projetos</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-4 border-t border-black/8 pt-8 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-[#efe7da] px-5 py-4 ring-1 ring-black/5">
                  <p className="text-3xl font-bold text-primary md:text-4xl">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative pb-8 md:pb-10">
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-[#d9d0c3] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] md:h-[520px] lg:h-[620px]">
              <Image
                src="/images/hero-kitchen.jpg"
                alt="Cozinha planejada premium em São José"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full bg-[#f6f1e8]/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground shadow-sm ring-1 ring-black/5 md:left-7 md:top-7">
                Projeto, fabricação e montagem
              </div>

              <div className="absolute bottom-5 right-5 max-w-[220px] rounded-[1.5rem] bg-[#1f4337]/92 p-5 text-white shadow-[0_18px_40px_-28px_rgba(0,0,0,0.6)] md:bottom-7 md:right-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                  Ambientes entregues
                </p>
                <p className="mt-2 text-3xl font-bold leading-none">Alto padrão</p>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  Marcenaria pensada para durar, valorizar o imóvel e elevar a percepção do espaço.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 left-4 max-w-xs rounded-[1.5rem] bg-white p-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)] ring-1 ring-black/5 md:left-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Clientes satisfeitos
              </p>
              <p className="mt-2 text-2xl font-bold">Atendimento e acabamento elogiados</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Clientes destacam acabamento, atendimento e montagem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
