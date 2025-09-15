import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const whatsappLink = "https://wa.me/5511913971760?text=Olá,%20vi%20seu%20site%20de%20higienização%20de%20estofados%20e%20quero%20solicitar%20um%20orçamento.";

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden md:h-[90vh] md:min-h-[600px]">
      <video
        src="https://i.imgur.com/hIT9KGH.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-headline font-bold text-white sm:text-5xl md:text-6xl">
              Seu estofado novo de novo!
            </h1>
            <p className="mt-4 text-base text-gray-200 md:text-xl">
              Higienização completa de sofás, poltronas e estofados com tecnologia profissional.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="group w-full md:w-auto">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Agendar agora pelo WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
