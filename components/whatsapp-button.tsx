"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Número de WhatsApp
  const phoneNumber = "5548984587067";
  const message = "Olá! Gostaria de solicitar um orçamento de móveis planejados.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 animate-pulse" />
      <span className="hidden sm:inline font-medium">Fale Conosco</span>

      {/* Efeito de ondas */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
