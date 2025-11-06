import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { getMarketPrices } from "@/lib/market-data";

export default async function MarketplacePage() {
  // Filtering logic would be implemented here using state for a real app
  const allCropTypes = ["All", ...new Set(projects.map((p) => p.cropType))];

  const cropTypes = projects.map(p => p.cropType);
  const marketPrices = await getMarketPrices(cropTypes);

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Marketplace"
        subtitle="Browse and invest in agricultural projects."
      />

      <Card className="mb-8 p-4 bg-card/50">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="font-semibold">Filters:</span>
          <Select defaultValue="All">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Risk Levels</SelectItem>
              <SelectItem value="A">Risk A (Low)</SelectItem>
              <SelectItem value="B">Risk B (Medium)</SelectItem>
              <SelectItem value="C">Risk C (High)</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="All">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Crop Type" />
            </SelectTrigger>
            <SelectContent>
              {allCropTypes.map(crop => (
                <SelectItem key={crop} value={crop}>{crop}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            marketPrice={marketPrices.get(project.cropType)}
          />
        ))}
      </div>
    </div>
  );
}
