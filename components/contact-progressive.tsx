"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Clock, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  phone: z.string().min(10, {
    message: "Telefone inválido. Digite com DDD.",
  }),
  message: z.string().min(10, {
    message: "Mensagem deve ter pelo menos 10 caracteres.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactProgressive() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const whatsappUrl = "https://wa.me/5548984587067?text=" + encodeURIComponent("Olá! Gostaria de solicitar um orçamento de móveis planejados.");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      setSubmitSuccess(true);
      form.reset();

      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch {
      setSubmitError("Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  }

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
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="bg-[#25D366] text-white border-0 hover-lift overflow-hidden">
            <CardContent className="p-4 md:p-5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                    <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-base md:text-lg font-bold">Atendimento via WhatsApp</h3>
                    <p className="text-white/90 text-xs md:text-sm">Resposta rápida e personalizada</p>
                  </div>
                </div>
                <Button
                  asChild
                  size="default"
                  className="bg-white text-[#25D366] hover:bg-white/90 hover-scale shadow-lg whitespace-nowrap"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chamar Agora
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulário Progressivo */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Solicite seu Orçamento</CardTitle>
              <CardDescription className="text-base">
                Preencha os dados abaixo e entraremos em contato em até 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Nome */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Nome Completo</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Digite seu nome"
                            className="h-11 focus:ring-2 focus:ring-primary/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Telefone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Telefone/WhatsApp</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="(48) 99999-9999"
                            className="h-11 focus:ring-2 focus:ring-primary/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Mensagem */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Comentário / Projeto</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva o projeto que você tem em mente..."
                            rows={4}
                            className="focus:ring-2 focus:ring-primary/20 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Mensagem de Sucesso */}
                  {submitSuccess && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      <p className="text-sm font-medium">
                        Mensagem enviada com sucesso! Entraremos em contato em breve.
                      </p>
                    </div>
                  )}

                  {/* Mensagem de Erro */}
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      <p className="text-sm font-medium">{submitError}</p>
                    </div>
                  )}

                  {/* Botão de Envio */}
                  <Button
                    type="submit"
                    className="w-full hover-scale"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar Solicitação"
                    )}
                  </Button>
                </form>
              </Form>
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
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href="https://wa.me/5548984587067"
                      className="text-muted-foreground hover:text-primary text-lg font-medium"
                    >
                      (48) 98458-7067
                    </a>
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
