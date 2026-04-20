import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { GalleryOption2Split } from "@/components/gallery-option2-split";
import { ServicesTabs } from "@/components/services-tabs";
import { Testimonials } from "@/components/testimonials";
import { ContactProgressive as Contact } from "@/components/contact-progressive";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesTabs />
        <GalleryOption2Split />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* JSON-LD Schema para SEO Local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FurnitureStore",
            "name": "Móveis Planejados São José",
            "description": "Especialistas em móveis planejados sob medida em São José, SC. Criamos cozinhas, dormitórios, closets e ambientes corporativos com design personalizado, qualidade superior e atendimento diferenciado. Projeto 3D gratuito e mais de 15 anos de experiência.",
            "@id": "https://www.movelplanejadosaojose.com.br",
            "url": "https://www.movelplanejadosaojose.com.br",
            "telephone": "+55 48 8466-8814",
            "priceRange": "$$",
            "currenciesAccepted": "BRL",
            "paymentAccepted": "Dinheiro, Cartão de Crédito, Cartão de Débito, PIX, Transferência Bancária, Parcelamento",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Caetano José Ferreira, 426",
              "addressLocality": "São José",
              "addressRegion": "SC",
              "postalCode": "88103-000",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -27.6167,
              "longitude": -48.6333
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "12:00"
              }
            ],
            "areaServed": {
              "@type": "City",
              "name": "São José",
              "containedIn": {
                "@type": "State",
                "name": "Santa Catarina"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Móveis Planejados",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cozinhas Planejadas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dormitórios Planejados"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Closets sob Medida"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* FAQ Schema para Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quanto custa uma cozinha planejada em São José?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O valor de uma cozinha planejada varia de acordo com o tamanho, materiais escolhidos e acabamentos. Em média, projetos completos variam de R$ 8.000 a R$ 25.000. Fazemos orçamento personalizado gratuito e oferecemos parcelamento facilitado."
                }
              },
              {
                "@type": "Question",
                "name": "Qual o prazo de entrega dos móveis planejados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O prazo médio de produção e instalação é de 30 a 45 dias após a aprovação do projeto e confirmação do pagamento. Prazos podem variar conforme a complexidade do projeto e disponibilidade de materiais."
                }
              },
              {
                "@type": "Question",
                "name": "Vocês fazem projeto 3D gratuito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim! Oferecemos projeto 3D personalizado totalmente gratuito, sem compromisso. Assim você pode visualizar como seus móveis planejados ficarão antes de aprovar o orçamento."
                }
              },
              {
                "@type": "Question",
                "name": "Quais ambientes vocês atendem com móveis planejados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Atendemos todos os ambientes: cozinhas, dormitórios, closets, banheiros, home office, salas de estar, áreas gourmet, lavanderias e ambientes corporativos. Criamos soluções sob medida para qualquer espaço da sua casa ou empresa."
                }
              },
              {
                "@type": "Question",
                "name": "Oferecem garantia nos móveis planejados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, todos os nossos móveis planejados possuem garantia de 1 ano contra defeitos de fabricação. Utilizamos apenas materiais de primeira qualidade e ferragens de marcas reconhecidas no mercado."
                }
              },
              {
                "@type": "Question",
                "name": "Atendem outras cidades além de São José?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim! Atendemos São José e toda a região da Grande Florianópolis, incluindo Florianópolis, Palhoça, Biguaçu e Santo Amaro da Imperatriz. Consulte disponibilidade para outras regiões de Santa Catarina."
                }
              },
              {
                "@type": "Question",
                "name": "Como funciona o processo de compra de móveis planejados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O processo é simples: 1) Agendamento da visita técnica gratuita, 2) Elaboração do projeto 3D personalizado, 3) Aprovação do orçamento, 4) Produção dos móveis (30-45 dias), 5) Instalação profissional. Acompanhamos você em todas as etapas."
                }
              },
              {
                "@type": "Question",
                "name": "Quais materiais são utilizados nos móveis planejados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Trabalhamos com MDF, MDP de alta qualidade, acabamentos em BP, laminados, acrílico, vidros e espelhos. Ferragens de marcas premium como Blum e Hettich. Você escolhe cores, texturas e acabamentos no projeto personalizado."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
