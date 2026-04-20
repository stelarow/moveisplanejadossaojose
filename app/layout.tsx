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
  title: "Móveis Planejados em São José SC | Qualidade e Design Personalizado",
  description: "Móveis planejados sob medida em São José, Santa Catarina. Cozinhas, dormitórios, closets e ambientes corporativos. Atendimento personalizado, qualidade garantida e os melhores preços da região.",
  keywords: "móveis planejados são josé sc, móveis sob medida são josé, cozinha planejada são josé, armários planejados sc, móveis personalizados santa catarina",
  authors: [{ name: "Móveis Planejados São José" }],
  openGraph: {
    title: "Móveis Planejados em São José SC",
    description: "Móveis planejados sob medida em São José, SC. Qualidade, design e atendimento personalizado.",
    url: "https://www.movelplanejadosaojose.com.br",
    siteName: "Móveis Planejados São José",
    locale: "pt_BR",
    type: "website",
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
