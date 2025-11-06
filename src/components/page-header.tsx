import { cn } from "@/lib/utils";

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, subtitle, className, children, ...props }: PageHeaderProps) {
  if (children) {
    return (
      <div className={cn("mb-8 flex flex-wrap items-center justify-between gap-4", className)} {...props}>
        {children}
      </div>
    )
  }
  
  return (
    <div className={cn("mb-8", className)} {...props}>
      <h1 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
