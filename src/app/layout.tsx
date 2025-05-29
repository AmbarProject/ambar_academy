import "./globals.css";
import { Footer } from "@/components/DefaultComponents/Footer";
import { Header } from "@/components/DefaultComponents/Header";


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

        <Footer/>
      </body>
    </html>
  );
}
