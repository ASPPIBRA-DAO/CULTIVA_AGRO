import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import Link from "next/link";
import { Leaf, DollarSign, LineChart } from "lucide-react";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { getMarketPrices } from "@/lib/market-data";

export default async function Home() {
  const heroImage = placeholderImages.find(p => p.id === "hero-image");

  const featuredProjects = projects.slice(0, 3);
  const cropTypes = featuredProjects.map(p => p.cropType);
  const marketPrices = await getMarketPrices(cropTypes);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="relative mb-24 rounded-lg bg-card text-card-foreground shadow-lg overflow-hidden">
        <div className="absolute inset-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative p-12 lg:p-24 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
            Cultivating Opportunities, Harvesting Returns
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
            AgriVest Connect links investors with high-potential agricultural projects, offering a transparent and profitable way to diversify your portfolio.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="/projects">Explore Projects</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/register">Become an Investor</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="mb-24">
        <PageHeader 
          title="How It Works"
          subtitle="A simple path to agricultural investment."
          className="text-center"
        />
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
            <div className="p-4 bg-primary rounded-full mb-4">
              <Leaf className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-headline font-semibold mb-2">Discover Projects</h3>
            <p className="text-muted-foreground">Browse a curated selection of agricultural ventures, from sustainable farming to innovative ag-tech, each vetted for quality and potential.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
            <div className="p-4 bg-primary rounded-full mb-4">
              <DollarSign className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-headline font-semibold mb-2">Invest Securely</h3>
            <p className="text-muted-foreground">Invest with confidence through our secure platform. We handle KYC, contracts, and fund management via regulated escrow accounts.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
            <div className="p-4 bg-primary rounded-full mb-4">
              <LineChart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-headline font-semibold mb-2">Track Your Growth</h3>
            <p className="text-muted-foreground">Monitor your portfolio's performance through your investor dashboard, receive regular project updates, and watch your investment grow.</p>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <PageHeader
          title="Featured Projects"
          subtitle="Invest in the future of agriculture today."
          className="text-center"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              marketPrice={marketPrices.get(project.cropType)}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="font-bold">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>

      <section className="bg-accent text-accent-foreground rounded-lg p-12 text-center">
        <h2 className="text-3xl font-headline font-bold mb-4">Ready to Grow Your Portfolio?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Join a community of forward-thinking investors and make a tangible impact while earning competitive returns.
        </p>
        <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 font-bold">
          <Link href="/register">Get Started</Link>
        </Button>
      </section>
    </div>
  );
}
