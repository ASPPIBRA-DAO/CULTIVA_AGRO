import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { getMarketPrices } from "@/lib/market-data";

export default async function MarketplacePage() {
  const cropTypes = projects.map(p => p.cropType);
  const marketPrices = await getMarketPrices(cropTypes);

  const riskAProjects = projects.filter((p) => p.riskLevel === 'A');
  const riskBProjects = projects.filter((p) => p.riskLevel === 'B');
  const riskCProjects = projects.filter((p) => p.riskLevel === 'C');

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Marketplace"
        subtitle="Browse and invest in agricultural projects."
      />

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Risk A (Low)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riskAProjects.slice(0, 4).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                marketPrice={marketPrices.get(project.cropType)}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Risk B (Medium)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riskBProjects.slice(0, 4).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                marketPrice={marketPrices.get(project.cropType)}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Risk C (High)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riskCProjects.slice(0, 4).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                marketPrice={marketPrices.get(project.cropType)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
