import { Sofa, Armchair, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Sofa className="h-10 w-10 text-primary" />,
    title: 'Higienização de Sofás',
    description: 'Removemos sujeiras, ácaros e manchas, renovando a aparência e a saúde do seu sofá.',
  },
  {
    icon: <Armchair className="h-10 w-10 text-primary" />,
    title: 'Limpeza de Poltronas',
    description: 'Cuidado especializado para suas poltronas, garantindo limpeza profunda e conservação do tecido.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Impermeabilização',
    description: 'Proteja seus estofados contra líquidos e manchas, aumentando sua durabilidade e facilitando a limpeza.',
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold md:text-4xl">Nossos Serviços</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas para a limpeza e cuidado dos seus estofados.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col text-center items-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="p-0">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4 flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <Button variant="link" className="mt-4">Saiba Mais</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
