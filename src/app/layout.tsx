import "./globals.css";
import { Footer } from "@/components/DefaultComponents/Footer";
import { Header } from "@/components/DefaultComponents/Header";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (

    <html lang="pt-br">
    
      <body
        className={`antialiased`}
      >
        <Header/>

        {children}
        <SpeedInsights/>
        <Footer/>
      </body>
    </html>
  );
}
