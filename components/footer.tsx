import Link from "next/link";
import { MessageCircle, MapPin, Mail } from "lucide-react";

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
            <address className="flex items-start gap-2 not-italic text-sm leading-6 text-white/72">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/55" />
              <span>
                Rua Caetano José Ferreira, 426<br />
                Kobrasol, São José - SC, 88103-000
              </span>
            </address>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/72">
              <li>
                <Link href="/cozinhas-planejadas-sao-jose" className="transition-colors hover:text-white">
                  Cozinhas Planejadas
                </Link>
              </li>
              <li>
                <Link href="/dormitorios-planejados-sao-jose" className="transition-colors hover:text-white">
                  Dormitórios
                </Link>
              </li>
              <li>
                <Link href="/closets-sao-jose" className="transition-colors hover:text-white">
                  Closets
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="transition-colors hover:text-white">
                  Salas de Estar
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="transition-colors hover:text-white">
                  Banheiros
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="transition-colors hover:text-white">
                  Ambientes Corporativos
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Navegação</h3>
            <ul className="space-y-2 text-sm text-white/72">
              <li>
                <Link href="/#inicio" className="transition-colors hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="transition-colors hover:text-white">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/#projetos" className="transition-colors hover:text-white">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="transition-colors hover:text-white">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/#areas-atendidas" className="transition-colors hover:text-white">
                  Áreas Atendidas
                </Link>
              </li>
              <li>
                <Link href="/#depoimentos" className="transition-colors hover:text-white">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="transition-colors hover:text-white">
                  Contato
                </Link>
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
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contato@movelplanejadosaojose.com.br" className="transition-colors hover:text-white">
                  contato@movelplanejadosaojose.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Rua Caetano José Ferreira, 426<br />
                  Kobrasol, São José - SC
                </span>
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
