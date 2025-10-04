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
            "@type": "LocalBusiness",
            "name": "Móveis Planejados São José",
            "image": "https://seusite.com.br/logo.png",
            "@id": "https://seusite.com.br",
            "url": "https://seusite.com.br",
            "telephone": "+55-48-98458-7067",
            "priceRange": "$$",
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
              "reviewCount": "127"
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
    </>
  );
}
