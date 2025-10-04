import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Móveis Planejados São José</h3>
            <p className="text-sm text-muted-foreground">
              Transformando ambientes em São José, SC há mais de 15 anos.
              Qualidade, design e atendimento personalizado.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#servicos" className="hover:text-primary">
                  Cozinhas Planejadas
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary">
                  Dormitórios
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary">
                  Closets
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary">
                  Salas de Estar
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary">
                  Banheiros
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary">
                  Ambientes Corporativos
                </a>
              </li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-primary">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-primary">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-primary">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <a href="https://wa.me/5548984587067" className="hover:text-primary">
                  (48) 98458-7067
                </a>
              </li>
              <li className="text-sm">
                Atendimento via WhatsApp
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Móveis Planejados São José. Todos os
            direitos reservados.
          </p>
          <p className="mt-2">
            São José, Santa Catarina - Atendemos todos os bairros da região
          </p>
        </div>
      </div>
    </footer>
  );
}
