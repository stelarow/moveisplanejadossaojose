import Image from "next/image";
import { Award, Hammer, ShieldCheck, Clock3 } from "lucide-react";

export function About() {
  const pillars = [
    {
      icon: Award,
      title: "15+ anos de marcenaria em São José",
      description:
        "Tradição em móveis planejados sob medida em São José, SC, com centenas de ambientes residenciais e corporativos entregues na Grande Florianópolis.",
    },
    {
      icon: Hammer,
      title: "Projeto, fabricação e montagem próprios",
      description:
        "Controlamos todo o processo: do projeto 3D à instalação. Isso garante prazo, acabamento e custo que marcenarias terceirizadas não conseguem entregar.",
    },
    {
      icon: ShieldCheck,
      title: "Garantia de 1 ano e ferragens premium",
      description:
        "Usamos ferragens de marcas reconhecidas como Blum e Hettich, MDF e MDP de alta resistência. Todos os móveis planejados têm garantia contra defeitos de fabricação.",
    },
    {
      icon: Clock3,
      title: "Prazo real de 30 a 45 dias",
      description:
        "Produção e instalação dentro do prazo combinado. Acompanhamento próximo em todas as etapas, da aprovação do projeto 3D à entrega final no ambiente.",
    },
  ];

  return (
    <section id="sobre" className="section-shell section-cream">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center md:mb-14">
          <p className="eyebrow">Sobre a marcenaria</p>
          <h2 className="display-serif text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-5xl">
            Móveis planejados em São José com padrão de showroom
          </h2>
          <p className="text-lg leading-8 text-muted-foreground md:text-xl">
            Somos uma marcenaria local de São José, SC, especializada em móveis
            sob medida com projeto 3D gratuito. Atendemos clientes em todo o
            oeste da Grande Florianópolis com foco em acabamento, durabilidade e
            atendimento consultivo.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex gap-4 rounded-[1.5rem] border border-black/6 bg-white px-6 py-6 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.35)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <pillar.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] border border-black/6 bg-[#f3ecdf] px-6 py-6 text-center">
          <p className="text-sm leading-7 text-foreground/85">
            Trabalhamos com ferragens premium da{" "}
            <a
              href="https://www.blum.com/br/pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
            >
              Blum
            </a>{" "}
            e{" "}
            <a
              href="https://www.hettich.com/pt-br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
            >
              Hettich
            </a>
            , MDF e MDP de primeira linha e acabamentos em BP, laminado e
            acrílico. É o que garante a durabilidade dos móveis planejados que
            entregamos em São José e região.
          </p>
        </div>

        <div className="mx-auto mt-5 max-w-3xl rounded-[1.5rem] border border-primary/15 bg-white px-6 py-6 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-6">
            <a
              href="https://www.escolahabilidade.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 transition-opacity hover:opacity-80"
              aria-label="Escola Habilidade — cursos profissionalizantes em São José"
            >
              <Image
                src="/images/logo-escola-habilidade.png"
                alt="Logo da Escola Habilidade — escola de cursos profissionalizantes em São José, SC"
                width={72}
                height={72}
                className="h-16 w-16 rounded-xl object-contain sm:h-20 sm:w-20"
              />
            </a>
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Parceiro de capacitação
              </p>
              <p className="mt-3 text-sm leading-7 text-foreground/85">
                Todos os nossos projetos são desenvolvidos em software 3D e render
                realista antes da fabricação. Quem quer aprender a projetar móveis,
                ambientes e interiores do zero pode fazer os{" "}
                <a
                  href="https://www.escolahabilidade.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                >
                  cursos profissionalizantes em São José da Escola Habilidade
                </a>
                , nossa escola parceira no mesmo endereço — com turmas de SketchUp,
                AutoCAD, projetista 3D e design de interiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
