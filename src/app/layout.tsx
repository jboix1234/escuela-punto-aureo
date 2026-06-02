import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Escola d\'Art Punto Áureo – Lloret de Mar',
  description: 'Escuela de pintura y artes plásticas en Lloret de Mar (Girona). Clases para adultos y niños, talleres creativos y Art Brunch. Fundada en 2006 por Lidija Podgajni.',
  keywords: 'escuela arte, pintura, lloret de mar, clases pintura, taller arte, girona',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
