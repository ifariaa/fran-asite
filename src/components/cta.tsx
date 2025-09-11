import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export function Cta() {
  const whatsappLink = "https://wa.me/5511913971760?text=Olá,%20vi%20seu%20site%20de%20higienização%20de%20estofados%20e%20quero%20solicitar%20um%20orçamento.";

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 lg:py-24 text-center">
        <h2 className="text-2xl font-headline font-bold md:text-4xl lg:text-5xl">
          Agende sua higienização agora e veja seu estofado como novo!
        </h2>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-primary-foreground/80">
          Clique no botão abaixo e fale conosco diretamente pelo WhatsApp para um orçamento rápido e sem compromisso.
        </p>
        <div className="mt-8 px-4 sm:px-0">
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 w-full md:w-auto">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale Conosco no WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
