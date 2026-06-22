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

  const whatsappUrl = "https://wa.me/554884668814?text=" + encodeURIComponent("Olá! Gostaria de solicitar um orçamento de móveis planejados.");

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
    <section id="contato" className="section-shell section-dark overflow-hidden">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
            Orçamento sem compromisso
          </p>
          <h2 className="display-serif text-3xl font-semibold text-white md:text-5xl">
            Vamos desenhar o seu próximo ambiente
          </h2>
          <p className="text-lg leading-8 text-white/78 md:text-xl">
            Fale com a equipe, compartilhe sua ideia e receba uma proposta
            alinhada ao seu espaço, ao seu prazo e ao seu estilo.
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-4xl">
          <Card className="overflow-hidden rounded-[1.75rem] border-white/10 bg-[#2a6f55] text-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.4)]">
            <CardContent className="p-5 md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/16">
                    <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                      Atendimento rápido
                    </p>
                    <h3 className="mt-1 text-xl font-bold md:text-2xl">
                      Prefere falar direto no WhatsApp?
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/82 md:text-base">
                      Envie sua ideia, fotos ou medidas iniciais e receba um atendimento personalizado.
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#2a6f55] shadow-lg hover:bg-white/90 whitespace-nowrap"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="rounded-[1.75rem] border-white/10 bg-[#f7f2ea] text-foreground shadow-[0_18px_40px_-30px_rgba(0,0,0,0.4)]">
            <CardHeader className="space-y-3 pb-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Formulário de contato
              </p>
              <CardTitle className="text-2xl md:text-3xl">Solicite seu orçamento</CardTitle>
              <CardDescription className="text-base leading-7 text-muted-foreground">
                Preencha os dados abaixo e entraremos em contato em até 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Nome completo</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Digite seu nome"
                            className="h-12 border-black/10 bg-white/80 focus-visible:ring-primary/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                            className="h-12 border-black/10 bg-white/80 focus-visible:ring-primary/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                            className="resize-none border-black/10 bg-white/80 focus-visible:ring-primary/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {submitSuccess && (
                    <div className="flex items-center gap-2 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                      <CheckCircle2 className="h-5 w-5" />
                      <p className="text-sm font-medium">
                        Mensagem enviada com sucesso! Entraremos em contato em breve.
                      </p>
                    </div>
                  )}

                  {submitError && (
                    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-800">
                      <p className="text-sm font-medium">{submitError}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
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

          <div className="space-y-6">
            <Card className="rounded-[1.75rem] border-white/10 bg-[#f7f2ea] text-foreground shadow-[0_18px_40px_-30px_rgba(0,0,0,0.4)]">
              <CardHeader className="space-y-3 pb-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Informações de contato
                </p>
                <CardTitle className="text-2xl md:text-3xl">Atendimento consultivo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-start gap-3 rounded-[1.25rem] bg-white/70 px-4 py-4 ring-1 ring-black/6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href="https://wa.me/554884668814"
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      +55 48 8466-8814
                    </a>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Compartilhe referências, medidas aproximadas e dúvidas iniciais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-[1.25rem] bg-white/70 px-4 py-4 ring-1 ring-black/6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Horário de atendimento</p>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-[1.75rem] border-white/10 bg-white/8 text-white backdrop-blur-sm">
              <CardContent className="p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  Cobertura regional
                </p>
                <h3 className="mt-3 text-xl font-bold md:text-2xl">
                  Atendemos toda São José e região
                </h3>
                <p className="mt-3 text-base leading-7 text-white/80">
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
