
import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
import { DollarSign, Filter } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
    { title: "Cadastrados", value: "R$ 0,00", change: "+0%" },
    { title: "Tokenizados", value: "0.00", change: "+0%" },
    { title: "Negociações", value: "R$ 0,00", change: "+0%" },
];

const states = [
    { name: "RJ/Rio de Janeiro", seed: "rio" },
    { name: "SP/São Paulo", seed: "saopaulo" },
    { name: "MG/Minas Gerais", seed: "minasgerais" },
    { name: "BA/Bahia", seed: "bahia" },
    { name: "RS/Rio Grande do Sul", seed: "riograndedosul" },
    { name: "SC/Santa Catarina", seed: "santacatarina" },
    { name: "PR/Paraná", seed: "parana" },
    { name: "MS/Mato Grosso do Sul", seed: "matogrossodosul" },
    { name: "AM/Amazonas", seed: "amazonas" },
    { name: "AC/Acre", seed: "acre" },
    { name: "RO/Rondônia", seed: "rondonia" },
    { name: "MT/Mato Grosso", seed: "matogrosso" },
    { name: "GO/Goiás", seed: "goias"},
]

export default function MarketplacePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Marketplace"
        subtitle="Explore ativos tokenizados em todo o Brasil."
      />

        <div className="grid gap-6 md:grid-cols-3 mb-8">
            {stats.map(stat => (
                <Card key={stat.title}>
                    <CardContent className="p-6">
                        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <h3 className="text-sm font-medium">{stat.title}</h3>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-muted-foreground text-green-500">
                        {stat.change}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>

      <Tabs defaultValue="imoveis" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="utm">UTM</TabsTrigger>
          <TabsTrigger value="imoveis">IMÓVEIS</TabsTrigger>
          <TabsTrigger value="empresas">EMPRESAS</TabsTrigger>
        </TabsList>
        <TabsContent value="imoveis">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {states.map(state => (
                  <Card key={state.seed} className="overflow-hidden">
                    <div className="p-0 relative h-64">
                      <Image
                        src={`https://picsum.photos/seed/${state.seed}/600/400`}
                        alt={`Mapa de ${state.name}`}
                        fill
                        className="object-cover"
                        data-ai-hint="satellite map"
                      />
                      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm p-3 rounded-md shadow-lg">
                        <h3 className="font-bold text-lg text-foreground">{state.name.split('/')[1]}</h3>
                        <div className="flex gap-2 mt-2">
                          <Button asChild size="sm" variant="link" className="p-0 h-auto text-primary">
                            <Link href="#">Ver mapa ampliado</Link>
                          </Button>
                          <Button size="sm" variant="ghost" className="h-auto p-1">
                            <Filter className="h-4 w-4" />
                            <span className="ml-1">Notas</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
        </TabsContent>
        <TabsContent value="utm">
            <div className="text-center py-16 text-muted-foreground">
                <p>Conteúdo para UTM em breve.</p>
            </div>
        </TabsContent>
        <TabsContent value="empresas">
            <div className="text-center py-16 text-muted-foreground">
                <p>Conteúdo para Empresas em breve.</p>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
