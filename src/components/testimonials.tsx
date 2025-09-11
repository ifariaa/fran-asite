import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: 'Maria S.',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-1'),
    quote: 'Serviço impecável! Meu sofá parece que saiu da loja. A equipe foi super profissional e atenciosa. Recomendo de olhos fechados!',
    rating: 5,
  },
  {
    name: 'João P.',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-2'),
    quote: 'Contratei a impermeabilização e estou muito satisfeito. O resultado foi ótimo e o atendimento excelente. Valeu muito a pena!',
    rating: 5,
  },
  {
    name: 'Ana L.',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-3'),
    quote: 'Atendimento rápido e eficiente. Limparam os bancos do meu carro e ficou perfeito. Cheirinho de novo! Com certeza chamarei de novo.',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold md:text-4xl">O que nossos clientes dizem</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Confiança e qualidade que se refletem em cada avaliação.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-start gap-4 p-6 text-left h-full">
                        <StarRating rating={testimonial.rating} />
                        <p className="text-muted-foreground italic flex-grow">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4 mt-2">
                           {testimonial.image && (
                            <Avatar>
                                <AvatarImage src={testimonial.image.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.image.imageHint}/>
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                           )}
                           <div>
                               <p className="font-semibold">{testimonial.name}</p>
                           </div>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
