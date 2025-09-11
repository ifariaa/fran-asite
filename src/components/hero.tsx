import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-sofa');

  return (
    <section id="inicio" className="relative h-screen min-h-[500px] w-full flex items-center justify-center md:h-[90vh] md:min-h-[600px]">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
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
              <Button asChild size="lg" className="group">
                <Link href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+higieniza%C3%A7%C3%A3o.">
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
