import { Instagram, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { MessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Contact() {
    const whatsappLink = "https://wa.me/5511913971760?text=Olá,%20vi%20seu%20site%20de%20higienização%20de%20estofados%20e%20quero%20solicitar%20um%20orçamento.";
    const whatsappNumber = "5511913971760";
    const displayWhatsappNumber = "(11) 91397-1760";

    return (
        <section id="contato" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-headline font-bold md:text-4xl">Entre em Contato</h2>
                  <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Tem alguma dúvida ou quer um orçamento? Fale conosco pelo WhatsApp.
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Nossas Informações</h3>
                        <p className="text-muted-foreground mb-8">
                            Você pode nos encontrar em nossos canais de atendimento ou visitar nosso endereço.
                        </p>
                        <div className="space-y-6 text-foreground">
                            <a href={`tel:+${whatsappNumber}`} className="flex items-center gap-4 group">
                                <div className="bg-primary/10 p-3 rounded-md"><Phone className="h-6 w-6 text-primary" /></div>
                                <div>
                                    <span className="font-semibold">Telefone / WhatsApp</span><br/>
                                    <span className="text-muted-foreground group-hover:text-primary transition-colors">{displayWhatsappNumber}</span>
                                </div>
                            </a>
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-md"><MapPin className="h-6 w-6 text-primary" /></div>
                                <div>
                                    <span className="font-semibold">Endereço</span><br/>
                                    <span className="text-muted-foreground">Rua Fictícia, 123 - São Paulo, SP</span>
                                </div>
                            </div>
                             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <div className="bg-primary/10 p-3 rounded-md"><Instagram className="h-6 w-6 text-primary" /></div>
                                <div>
                                    <span className="font-semibold">Instagram</span><br/>
                                    <span className="text-muted-foreground group-hover:text-primary transition-colors">@franca_higenizacao</span>
                                </div>
                            </a>
                        </div>
                    </div>
                     <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Solicite um Orçamento</CardTitle>
                            <CardDescription>
                            Clique no botão abaixo para nos enviar uma mensagem diretamente no WhatsApp.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild className="w-full">
                                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <Send className="mr-2 h-4 w-4" />
                                Enviar para o WhatsApp
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
