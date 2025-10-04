import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
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
            "image": "https://www.movelplanejadosaojose.com.br/logo.png",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.movelplanejadosaojose.com.br/logo.png",
              "width": "600",
              "height": "60"
            },
            "@id": "https://www.movelplanejadosaojose.com.br",
            "url": "https://www.movelplanejadosaojose.com.br",
            "telephone": "+55-48-98458-7067",
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
            "sameAs": [
              "https://www.facebook.com/seuperfil",
              "https://www.instagram.com/seuperfil"
            ],
            "areaServed": {
              "@type": "City",
              "name": "São José",
              "containedIn": {
                "@type": "State",
                "name": "Santa Catarina"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "237"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Maria Silva"
                },
                "datePublished": "2025-09-15",
                "reviewBody": "Excelente trabalho! A cozinha planejada ficou perfeita, aproveitaram cada cantinho. A equipe foi super profissional e o acabamento impecável.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Carlos Souza"
                },
                "datePublished": "2025-08-22",
                "reviewBody": "Meu closet ficou incrível! Atendimento personalizado do início ao fim. Cumpriram todos os prazos e o preço foi justo.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Juliana Costa"
                },
                "datePublished": "2025-07-10",
                "reviewBody": "Reformamos todo o apartamento com móveis planejados. Qualidade excelente e design moderno. Recomendo muito!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Roberto Ferreira"
                },
                "datePublished": "2025-06-28",
                "reviewBody": "Ótima experiência do projeto à instalação. O dormitório planejado transformou nosso quarto. Muito satisfeito!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Ana Paula Mendes"
                },
                "datePublished": "2025-09-08",
                "reviewBody": "Adorei meu home office planejado! Ficou funcional e bonito. O atendimento foi excelente e a montagem muito rápida.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Pedro Oliveira"
                },
                "datePublished": "2025-08-15",
                "reviewBody": "Móveis de ótima qualidade! A cozinha com ilha ficou linda. Única ressalva foi uma pequena demora na entrega, mas valeu a pena esperar.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Fernanda Santos"
                },
                "datePublished": "2025-07-30",
                "reviewBody": "Transformaram meu quarto pequeno em algo incrível! O guarda-roupa planejado aproveitou todo o espaço disponível. Equipe muito atenciosa.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Ricardo Alves"
                },
                "datePublished": "2025-07-18",
                "reviewBody": "Excelente custo-benefício! Fiz a sala de estar completa com rack e estante planejados. Projeto bem elaborado e instalação perfeita.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Camila Rodrigues"
                },
                "datePublished": "2025-06-20",
                "reviewBody": "A bancada da cozinha ficou maravilhosa! Materiais de primeira qualidade e acabamento impecável. Super recomendo para quem procura móveis planejados em São José.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Marcos Pereira"
                },
                "datePublished": "2025-05-25",
                "reviewBody": "Fizeram meu closet dos sonhos! Gavetas com soft close, iluminação em LED, tudo muito bem planejado. Atendimento nota 10!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Beatriz Lima"
                },
                "datePublished": "2025-05-12",
                "reviewBody": "Móveis lindos e funcionais para o quarto das crianças. A equipe foi muito paciente com as mudanças que fizemos no projeto.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Thiago Martins"
                },
                "datePublished": "2025-04-28",
                "reviewBody": "Bom trabalho! O banheiro planejado ficou ótimo. Preço competitivo e bom atendimento. Recomendo!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "4",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Patricia Gomes"
                },
                "datePublished": "2025-04-10",
                "reviewBody": "Adorei a área gourmet planejada! Ficou perfeita para receber os amigos. Projeto bem pensado e execução excelente.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Lucas Barbosa"
                },
                "datePublished": "2025-03-22",
                "reviewBody": "Empresa séria e comprometida. Fizeram minha biblioteca planejada com acabamento em madeira nobre. Ficou show!",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Renata Azevedo"
                },
                "datePublished": "2025-03-05",
                "reviewBody": "Melhor investimento que fizemos! A cozinha planejada valorizou muito nosso apartamento. Qualidade superior e preço justo.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              }
            ],
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
