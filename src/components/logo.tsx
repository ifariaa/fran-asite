import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-xl font-bold text-primary transition-opacity hover:opacity-80',
        className
      )}
    >
      <Image 
        src="https://placehold.co/180x50/1E3A5F/FFFFFF?text=França+Higienização" 
        alt="França Higienização Logo" 
        width={180} 
        height={50} 
        className="object-contain"
        priority
      />
    </Link>
  );
}
