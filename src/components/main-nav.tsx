import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  // In a real app, you would get routes and determine active state
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <Logo />
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6 ml-6">
        <Link
          href="/projects"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Projects
        </Link>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Dashboard
        </Link>
        <Link
          href="/admin/risk-assessment"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Risk Assessor
        </Link>
      </div>
    </nav>
  );
}
