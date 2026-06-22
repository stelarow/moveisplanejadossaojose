import { MapPin, Navigation } from "lucide-react";

export function ServiceAreas() {
  const cities = [
    { name: "São José", primary: true, neighborhoods: ["Kobrasol", "Campinas", "Forquilhinhas", "Barreiros", "Centro", "Areias", "Ipiranga", "Sertão do Maruim"] },
    { name: "Florianópolis", primary: false },
    { name: "Palhoça", primary: false },
    { name: "Biguaçu", primary: false },
    { name: "Santo Amaro da Imperatriz", primary: false },
    { name: "Governador Celso Ramos", primary: false },
    { name: "São Pedro de Alcântara", primary: false },
    { name: "Antônio Carlos", primary: false },
  ];

  return (
    <section id="areas-atendidas" className="section-shell bg-[linear-gradient(180deg,rgba(246,241,232,0.7)_0%,rgba(255,255,255,1)_100%)]">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center md:mb-14">
          <p className="eyebrow">Onde atendemos</p>
          <h2 className="display-serif text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-5xl">
            Móveis planejados em São José e toda a Grande Florianópolis
          </h2>
          <p className="text-lg leading-8 text-muted-foreground md:text-xl">
            Atendemos clientes em São José, SC, e cidades vizinhas com projeto
            técnico gratuito, produção própria e instalação profissional.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 rounded-[1.75rem] border border-black/6 bg-white px-6 py-7 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.35)]">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Navigation className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  São José, SC — sede em Kobrasol
                </h3>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">
                  Atendemos todos os bairros do município. Visita técnica
                  gratuita para medição e briefing.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Bairros atendidos em São José
              </p>
              <div className="flex flex-wrap gap-2">
                {cities[0].neighborhoods?.map((n) => (
                  <span
                    key={n}
                    className="rounded-full bg-[#f3ecdf] px-3 py-1.5 text-sm font-medium text-foreground/80 ring-1 ring-black/5"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-black/8 pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Cidades da Grande Florianópolis
              </p>
              <div className="flex flex-wrap gap-2">
                {cities.slice(1).map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/8 bg-white px-3 py-1.5 text-sm font-medium text-foreground/80"
                  >
                    <MapPin className="h-3.5 w-3.5 text-primary/70" />
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-[1.75rem] bg-[#1f3a34] px-6 py-7 text-white">
            <h3 className="text-xl font-semibold">Não achou sua cidade?</h3>
            <p className="text-sm leading-7 text-white/82">
              Atendemos outras regiões de Santa Catarina sob consulta. Fale
              com a equipe pelo WhatsApp informando seu bairro e o tipo de
              projeto que você quer realizar.
            </p>
            <a
              href="https://wa.me/554884668814?text=Ol%C3%A1!%20Gostaria%20de%20saber%20se%20voc%C3%AAts%20atendem%20minha%20regi%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1f3a34] transition-all hover:bg-white/90"
            >
              Consultar disponibilidade
            </a>
            <p className="text-xs leading-6 text-white/60">
              Resposta em até 24 horas em dias úteis. Atendimento de segunda
              a sexta, das 8h às 18h.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
