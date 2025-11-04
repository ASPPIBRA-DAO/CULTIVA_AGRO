import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { Calendar, Percent, TrendingUp } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  marketPrice?: string | null;
}

export function ProjectCard({ project, marketPrice }: ProjectCardProps) {
  const image = placeholderImages.find(p => p.id === project.imageId);
  const progress = (project.amountRaised / project.targetAmount) * 100;

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative w-full h-48">
          {image && (
            <Image
              src={image.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
          <div className="absolute top-2 right-2">
            <Badge variant={project.riskLevel === 'A' ? 'default' : project.riskLevel === 'B' ? 'secondary' : 'destructive'}>
                Risk {project.riskLevel}
            </Badge>
          </div>
        </div>
      </Link>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
            <Badge variant="secondary" className="w-fit">{project.cropType}</Badge>
            {marketPrice && (
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                  <TrendingUp className="mr-1 h-3 w-3 text-primary" /> {marketPrice}
              </Badge>
            )}
        </div>
        <CardTitle className="font-headline text-2xl h-16">
          <Link href={`/projects/${project.id}`}>{project.title}</Link>
        </CardTitle>
        <CardDescription className="h-10">{project.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1 text-sm">
            <span className="text-primary font-bold">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project.amountRaised)}
            </span>
            <span className="text-muted-foreground">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
                <Percent className="h-4 w-4" />
                <span>{project.targetROI} ROI</span>
            </div>
            <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{project.term}</span>
            </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/projects/${project.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
