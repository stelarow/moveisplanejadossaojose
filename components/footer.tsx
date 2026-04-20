import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1f3a34] text-white">
      <div className="container py-14">
        <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              Móveis planejados em São José, SC
            </p>
            <h3 className="display-serif text-2xl font-semibold md:text-3xl">
              Móveis Planejados São José
            </h3>
            <p className="max-w-sm text-sm leading-7 text-white/72">
              Transformando ambientes em São José, SC há mais de 15 anos.
              Qualidade, design e atendimento personalizado.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/72">
              <li>
                <a href="#servicos" className="transition-colors hover:text-white">
                  Cozinhas Planejadas
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-white">
                  Dormitórios
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-white">
                  Closets
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-white">
                  Salas de Estar
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-white">
                  Banheiros
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-white">
                  Ambientes Corporativos
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Navegação</h3>
            <ul className="space-y-2 text-sm text-white/72">
              <li>
                <a href="#inicio" className="transition-colors hover:text-white">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-white">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projetos" className="transition-colors hover:text-white">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="transition-colors hover:text-white">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="transition-colors hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Contato</h3>
            <ul className="space-y-3 text-sm text-white/72">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <a href="https://wa.me/554884668814" className="transition-colors hover:text-white">
                  +55 48 8466-8814
                </a>
              </li>
              <li>
                Atendimento via WhatsApp
              </li>
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 12h</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Móveis Planejados São José. Todos os
            direitos reservados.
          </p>
          <p>
            São José, Santa Catarina - Atendemos todos os bairros da região
          </p>
        </div>
      </div>
    </footer>
  );
}
