import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import type { ServicePage } from "@/lib/services";

export function ServicePageView({ service }: { service: ServicePage }) {
  const whatsappUrl =
    "https://wa.me/554884668814?text=" +
    encodeURIComponent(
      `Olá! Tenho interesse em ${service.title.toLowerCase()}. Pode me passar mais informações?`
    );

  return (
    <>
      <section className="section-shell section-cream overflow-hidden">
        <div className="container">
          <nav
            aria-label="breadcrumb"
            className="mb-8 flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              Início
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground/80">{service.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="space-y-6">
              <p className="eyebrow">Móveis planejados em São José, SC</p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl lg:text-5xl">
                {service.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                {service.heroSubtitle}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <a href="#contato">
                    Solicitar orçamento grátis
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-[#d9d0c3] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] md:h-[520px]">
              <Image
                src={service.image}
                alt={`${service.title} - Móveis Planejados São José`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(246,241,232,0.7)_100%)]">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <h2 className="display-serif text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-4xl">
              {service.title} com acabamento premium
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              {service.intro}
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {service.sections.map((section) => (
              <div key={section.heading} className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  {section.heading}
                </h3>
                <p className="text-base leading-8 text-muted-foreground">
                  {section.body}
                </p>
                {section.bullets && (
                  <ul className="grid gap-3 pt-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/5"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm leading-6 text-foreground/85">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-cream">
        <div className="container max-w-3xl">
          <div className="space-y-6 text-center">
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 className="display-serif text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-4xl">
              Dúvidas sobre {service.title.toLowerCase()}
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {service.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[1.25rem] border border-black/6 bg-white px-6 py-5 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.35)]"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section-shell section-dark">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="display-serif text-3xl font-semibold text-white md:text-5xl">
              Vamos projetar {service.title.toLowerCase()}
            </h2>
            <p className="text-lg leading-8 text-white/78 md:text-xl">
              Solicite um orçamento gratuito com visita técnica em São José e
              região. Projeto 3D sem compromisso.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href={`mailto:contato@movelplanejadosaojose.com.br?subject=${encodeURIComponent(
                    `Orçamento: ${service.title}`
                  )}`}
                >
                  Enviar e-mail
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/60 bg-transparent text-white hover:bg-white hover:text-[#1f3a34]"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
