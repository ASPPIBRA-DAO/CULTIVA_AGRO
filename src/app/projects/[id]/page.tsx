import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { InvestmentSimulator } from "@/components/investment-simulator";
import { Separator } from "@/components/ui/separator";
import { placeholderImages } from "@/lib/placeholder-images.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck, Calendar, Percent, Target, FileText } from "lucide-react";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const image = placeholderImages.find(p => p.id === project.imageId);
  const progress = (project.amountRaised / project.targetAmount) * 100;
  const formattedAmountRaised = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project.amountRaised);
  const formattedTargetAmount = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project.targetAmount);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden mb-8">
            {image && (
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={image.imageHint}
                />
              </div>
            )}
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="secondary" className="mb-2">{project.cropType}</Badge>
                  <CardTitle className="font-headline text-4xl">{project.title}</CardTitle>
                </div>
                <Badge className="text-base" variant={project.riskLevel === 'A' ? 'default' : project.riskLevel === 'B' ? 'secondary' : 'destructive'}>
                  Risk: {project.riskLevel}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-6">{project.shortDescription}</p>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-primary font-bold">{formattedAmountRaised}</span>
                  <span className="text-muted-foreground">Target: {formattedTargetAmount}</span>
                </div>
                <Progress value={progress} />
                 <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                  <span>{Math.round(progress)}% funded</span>
                  <span>{project.daysLeft} days left</span>
                </div>
              </div>
              
              <Separator className="my-6" />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                <div className="bg-card p-4 rounded-lg">
                  <Percent className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="font-bold text-lg">{project.targetROI}</p>
                  <p className="text-sm text-muted-foreground">Target ROI</p>
                </div>
                 <div className="bg-card p-4 rounded-lg">
                  <Calendar className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="font-bold text-lg">{project.term}</p>
                  <p className="text-sm text-muted-foreground">Term</p>
                </div>
                 <div className="bg-card p-4 rounded-lg">
                  <Target className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="font-bold text-lg">{project.investmentType}</p>
                  <p className="text-sm text-muted-foreground">Type</p>
                </div>
                <div className="bg-card p-4 rounded-lg">
                  <ShieldCheck className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="font-bold text-lg">{project.guarantee}</p>
                  <p className="text-sm text-muted-foreground">Guarantee</p>
                </div>
              </div>

              <h3 className="font-headline text-2xl mt-8 mb-4">Project Details</h3>
              <p className="whitespace-pre-wrap">{project.longDescription}</p>

              <Accordion type="single" collapsible className="w-full mt-6">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-headline text-xl">
                    <FileText className="mr-2" /> Secure Data Room
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card className="bg-secondary/50">
                      <CardHeader>
                        <CardTitle>Confidential Documents</CardTitle>
                        <CardDescription>By accessing these documents, you agree to our Non-Disclosure Agreement (NDA).</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p>Access to detailed due diligence, business plans, and legal documents is coming soon. In a real application, you would accept an NDA here to view:</p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Complete Business Plan</li>
                          <li>Producer's Legal Certificates</li>
                          <li>Land Registry and Titles</li>
                        </ul>
                        <Button className="mt-4">I Agree & View Documents</Button>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-headline text-xl">Q&A</AccordionTrigger>
                  <AccordionContent>
                    <p>The public Q&A section is coming soon. Here you can ask questions directly to the project owner, moderated by the platform admin.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-1">
          <InvestmentSimulator project={project} />
        </div>
      </div>
    </div>
  );
}
