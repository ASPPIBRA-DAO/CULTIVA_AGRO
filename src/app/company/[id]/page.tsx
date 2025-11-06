
import { getCompanyById, Project, projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import ProjectCard from "@/components/project-card";
import { PageHeader } from "@/components/page-header";

interface CompanyPageParams {
  id: string;
}

// Helper function to find projects for a given company
function getProjectsByCompanyId(companyId: string): Project[] {
  return projects.filter(p => p.company.id === companyId);
}

export default function CompanyPage({ params }: { params: CompanyPageParams }) {
  const company = getCompanyById(params.id);

  if (!company) {
    notFound();
  }

  const companyProjects = getProjectsByCompanyId(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader>
        <div className="flex items-center space-x-4">
            <Avatar className="h-24 w-24 border-2">
                <AvatarImage src={`/images/${company.logoId}.png`} alt={`${company.name} logo`} />
                <AvatarFallback>{company.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <h1 className="text-4xl font-bold">{company.name}</h1>
                <p className="text-lg text-muted-foreground">Desde {company.foundedYear} | {company.location}</p>
                 <a 
                    href={company.website}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-500 hover:underline mt-1"
                >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Visitar Site
                </a>
            </div>
        </div>
      </PageHeader>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Sobre a Empresa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">{company.bio}</p>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
           <Card>
            <CardHeader>
                <CardTitle>Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <p><strong>Localização:</strong> {company.location}</p>
                <p><strong>Fundação:</strong> {company.foundedYear}</p>
                <p><strong>Projetos na Plataforma:</strong> {companyProjects.length}</p>
            </CardContent>
           </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Projetos de {company.name}</h2>
        {companyProjects.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companyProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        ) : (
            <p>{company.name} não possui outros projetos ativos no momento.</p>
        )}
      </div>
    </div>
  );
}
