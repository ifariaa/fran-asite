'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/5511913971760"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors duration-300 hover:bg-[#1EBE57]"
      aria-label="Fale Conosco no WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </Link>
  );
}
