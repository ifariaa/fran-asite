import Image from 'next/image';
import { Award, Users, Smile } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
    const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-team');

    return (
        <section id="sobre" className="py-20 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-headline font-bold md:text-4xl">Sobre a França Clean</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Nascemos da paixão por limpeza e do desejo de transformar ambientes. Na França Limpeza e Higienização, combinamos tecnologia de ponta e uma equipe dedicada para revitalizar seus estofados, garantindo não apenas beleza, mas também saúde e bem-estar para sua família.
                        </p>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Nosso compromisso é com a sua total satisfação. Por isso, cada serviço é executado com o máximo de cuidado, profissionalismo e atenção aos detalhes.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-6">
                            <div className="flex items-center gap-3">
                                <Award className="h-8 w-8 text-primary" />
                                <div>
                                    <h3 className="font-bold text-lg">+5 Anos</h3>
                                    <p className="text-muted-foreground">de Experiência</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="h-8 w-8 text-primary" />
                                <div>
                                    <h3 className="font-bold text-lg">+1000 Clientes</h3>
                                    <p className="text-muted-foreground">Atendidos</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-3">
                                <Smile className="h-8 w-8 text-primary" />
                                <div>
                                    <h3 className="font-bold text-lg">99% de Satisfação</h3>
                                    <p className="text-muted-foreground">Garantida</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        {aboutImage && (
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl"
                                data-ai-hint={aboutImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
