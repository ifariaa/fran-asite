import { Logo } from './logo';
import Link from 'next/link';
import { Instagram, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
  { href: '#', label: 'Política de Privacidade' },
];

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900/50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Seu estofado novo de novo. © {new Date().getFullYear()} França Higienização.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h3 className="font-semibold mb-4">Contato</h3>
             <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4"/>
                    <span>(11) 99999-9999</span>
                </li>
                 <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4"/>
                    <span>São Paulo, SP</span>
                </li>
             </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Siga-nos</h3>
             <div className="flex space-x-4">
                <a href="https://www.instagram.com/francahigieniza/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                </a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
