import { Sparkles } from 'lucide-react';
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
      <div className="rounded-md bg-primary p-2">
        <Sparkles className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="font-headline">França Higenização</span>
    </Link>
  );
}
