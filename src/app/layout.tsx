import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { WhatsappButton } from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'França Higenização | Higienização Profissional de Estofados',
  description: 'Especialistas em higienização de sofás, poltronas e estofados. Tecnologia profissional para deixar seu estofado novo de novo. Solicite um orçamento!',
  keywords: 'higienização de sofás, limpeza de estofados, impermeabilização de estofados, França Higenização',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased")}>
        {children}
        <Toaster />
        <WhatsappButton />
      </body>
    </html>
  );
}
