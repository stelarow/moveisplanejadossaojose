import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import { WhatsAppButton } from "@/components/whatsapp-button";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-sans-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lora = Lora({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.movelplanejadosaojose.com.br'),
  title: "Móveis Planejados em São José SC | Sob Medida com Garantia",
  description: "Móveis planejados sob medida em São José/SC. Cozinhas, closets, dormitórios e ambientes corporativos com projeto 3D gratuito. Peça seu orçamento.",
  keywords: "móveis planejados são josé sc, móveis sob medida são josé, cozinha planejada são josé, armários planejados sc, móveis personalizados santa catarina",
  authors: [{ name: "Móveis Planejados São José" }],
  alternates: {
    canonical: "https://www.movelplanejadosaojose.com.br/",
  },
  openGraph: {
    title: "Móveis Planejados em São José SC",
    description: "Móveis planejados sob medida em São José, SC. Qualidade, design e atendimento personalizado.",
    url: "https://www.movelplanejadosaojose.com.br",
    siteName: "Móveis Planejados São José",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-kitchen.jpg",
        width: 1200,
        height: 630,
        alt: "Cozinha planejada premium em São José SC - Móveis Planejados São José",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Móveis Planejados em São José SC",
    description: "Móveis planejados sob medida em São José, SC. Projeto 3D gratuito.",
    images: ["/images/hero-kitchen.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "EgsULd1yHvgnwG7VRPCcfYjPFY43-x_vstW0tVoK1-U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunitoSans.variable} ${lora.variable} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
