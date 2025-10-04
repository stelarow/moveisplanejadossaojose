"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  const whatsappUrl = "https://wa.me/5548999999999?text=" + encodeURIComponent("Olá! Gostaria de solicitar um orçamento de móveis planejados.");

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Entre em Contato
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso. Nossa equipe está pronta para
            atender você em São José, SC
          </p>
        </div>

        {/* Botão WhatsApp em destaque */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="bg-[#25D366] text-white border-0 hover-lift">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold">Atendimento via WhatsApp</h3>
                    <p className="text-white/90 text-sm">Resposta rápida e atendimento personalizado</p>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#25D366] hover:bg-white/90 hover-scale shadow-lg"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Solicite seu Orçamento</CardTitle>
              <CardDescription className="text-base">
                Preencha o formulário e entraremos em contato em até 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">Nome Completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    required
                    className="h-11 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base">Telefone/WhatsApp</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(48) 99999-9999"
                    required
                    className="h-11 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="h-11 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-base">Tipo de Móvel</Label>
                  <Input
                    id="service"
                    placeholder="Ex: Cozinha planejada"
                    required
                    className="h-11 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva seu projeto..."
                    rows={4}
                    required
                    className="focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full hover-scale" size="lg">
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Telefone/WhatsApp</p>
                    <a
                      href="tel:+554830000000"
                      className="text-muted-foreground hover:text-primary"
                    >
                      (48) 3000-0000
                    </a>
                    <br />
                    <a
                      href="https://wa.me/5548999999999"
                      className="text-muted-foreground hover:text-primary"
                    >
                      (48) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <a
                      href="mailto:contato@moveisplanejados.com.br"
                      className="text-muted-foreground hover:text-primary"
                    >
                      contato@moveisplanejados.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-muted-foreground">
                      Rua Exemplo, 123 - Centro
                      <br />
                      São José, SC - CEP 88100-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Horário de Atendimento</p>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0 hover-lift">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Atendemos toda São José e região
                </h3>
                <p className="text-primary-foreground/95 text-base leading-relaxed">
                  Kobrasol, Campinas, Forquilhinhas, Barreiros, Centro,
                  Areias, Ipiranga e todos os bairros de São José, SC
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
