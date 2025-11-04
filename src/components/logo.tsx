import { Leaf } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="AgriVest Connect Home">
      <div className="p-2 bg-primary rounded-md">
        <Leaf className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-xl font-headline font-semibold text-foreground">
        AgriVest Connect
      </span>
    </Link>
  );
}
