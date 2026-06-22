import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicePageView } from "@/components/service-page-view";
import { getServiceBySlug } from "@/lib/services";

const BASE_URL = "https://www.movelplanejadosaojose.com.br";

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then((p) => {
    const service = getServiceBySlug(p.slug);
    if (!service) {
      return { title: "Página não encontrada" };
    }
    return {
      title: service.metaTitle,
      description: service.metaDescription,
      alternates: {
        canonical: `${BASE_URL}/${service.slug}`,
      },
      openGraph: {
        title: service.metaTitle,
        description: service.metaDescription,
        url: `${BASE_URL}/${service.slug}`,
        type: "website",
        images: [
          {
            url: service.image,
            width: 1200,
            height: 630,
            alt: `${service.title} - Móveis Planejados São José`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: service.metaTitle,
        description: service.metaDescription,
        images: [service.image],
      },
    };
  });
}

export function generateStaticParams() {
  return [
    { slug: "cozinhas-planejadas-sao-jose" },
    { slug: "closets-sao-jose" },
    { slug: "dormitorios-planejados-sao-jose" },
  ];
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return null;
  }

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `${BASE_URL}/${service.slug}`,
    image: `${BASE_URL}${service.image}`,
    areaServed: {
      "@type": "City",
      name: "São José",
    },
    provider: {
      "@type": "FurnitureStore",
      name: "Móveis Planejados São José",
      url: BASE_URL,
      telephone: "+55 48 8466-8814",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: `${BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: service.title,
        item: `${BASE_URL}/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Header />
      <main>
        <ServicePageView service={service} />
      </main>
      <Footer />
    </>
  );
}
