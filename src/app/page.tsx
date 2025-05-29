import { HeroSection } from "@/components/HomePage/heroSection";
import "./home.css";
import { Metadata } from "next";
import { PitchSection } from "@/components/HomePage/pitchSection";
import { ScrollContainer } from "@/components/HomePage/scrollContainer";
import { SupportSection } from "@/components/HomePage/supportSection";

export const metadata: Metadata = {
  title: "Home - Ambar",
  description: "Essa é a página inicial da AmbarCode",
  openGraph: {
    title: "Home - Ambar",
    description: "Essa é a página inicial da AmbarCode",
    url: "https://www.seusite.com.br",
    siteName: "AmbarAcademy",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://postimg.cc/pyzYby4Z",
        width: 1200,
        height: 630,
        alt: "Imagem de exemplo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Ambar",
    description: "Essa é a página inicial da AmbarCode",
    images: ["https://postimg.cc/pyzYby4Z"],
  },
};


export default function Home() {
  return (
    <div className="home">
      <HeroSection id="home"/>
      <PitchSection id="pitch"/>
      <ScrollContainer id="ecossistema"/>
      <SupportSection id="suporte"/>
    </div>
  );
}
