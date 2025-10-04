import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { WhatsAppButton } from "@/components/whatsapp-button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
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
    google: "seu-codigo-google-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
