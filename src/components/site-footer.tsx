import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © Cultiva Agro - Coded by ASPFIBRA-DAO
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">Quem Somos</Link>
            <Link href="#" className="hover:text-primary">Contato</Link>
            <Link href="#" className="hover:text-primary">Blog</Link>
        </div>
      </div>
    </footer>
  );
}
