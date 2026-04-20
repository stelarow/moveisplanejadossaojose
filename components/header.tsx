"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      isScrolled
        ? "border-black/5 bg-[#f6f1e8]/95 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.45)] backdrop-blur-md"
        : "border-transparent bg-[#f6f1e8]/88 backdrop-blur"
    }`}>
      <div className="container flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center">
          <Logo className="w-40 text-foreground transition-colors hover:text-primary sm:w-48 md:w-52 lg:w-56" />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-[0.04em] text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="lg">
            <a href="#contato">Solicitar orçamento</a>
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="border-black/10 bg-white/60 text-foreground hover:border-primary/50 hover:bg-white"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l-black/10 bg-[#f6f1e8] px-6">
            <nav className="mt-10 flex flex-col gap-5">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-foreground/85 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild size="lg" className="mt-4 w-full">
                <a href="#contato" onClick={() => setIsOpen(false)}>
                  Solicitar orçamento
                </a>
              </Button>
              <div className="mt-5 flex flex-col gap-3 border-t border-black/10 pt-5">
                <a
                  href="tel:+554884668814"
                  className="flex items-center gap-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +55 48 8466-8814
                </a>
                <a
                  href="mailto:contato@moveisplanejados.com.br"
                  className="flex items-center gap-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  contato@moveisplanejados.com.br
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
