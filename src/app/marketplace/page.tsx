
import { PageHeader } from "@/components/page-header";
import {
  Card, CardContent, CardFooter, CardHeader,
} from "@/components/ui/card";
import { DollarSign, Filter } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const stats = [
    { title: "Cadastrados", value: "R$ 0,00", change: "+0%" },
    { title: "Tokenizados", value: "0.00", change: "+0%" },
    { title: "Negociações", value: "R$ 0,00", change: "+0%" },
];

const states = [
    { name: "AC/Acre", seed: "acre", area: "164.122 km²", properties: 120, avgPrice: "R$ 250.000" },
    { name: "AL/Alagoas", seed: "alagoas", area: "27.767 km²", properties: 340, avgPrice: "R$ 450.000" },
    { name: "AP/Amapá", seed: "amapa", area: "142.814 km²", properties: 80, avgPrice: "R$ 200.000" },
    { name: "AM/Amazonas", seed: "amazonas", area: "1.570.745 km²", properties: 150, avgPrice: "R$ 300.000" },
    { name: "BA/Bahia", seed: "bahia", area: "564.733 km²", properties: 1200, avgPrice: "R$ 550.000" },
    { name: "CE/Ceará", seed: "ceara", area: "148.825 km²", properties: 800, avgPrice: "R$ 480.000" },
    { name: "DF/Distrito Federal", seed: "distritofederal", area: "5.779 km²", properties: 2500, avgPrice: "R$ 1.200.000" },
    { name: "ES/Espírito Santo", seed: "espiritosanto", area: "46.095 km²", properties: 600, avgPrice: "R$ 700.000" },
    { name: "GO/Goiás", seed: "goias", area: "340.086 km²", properties: 950, avgPrice: "R$ 650.000" },
    { name: "MA/Maranhão", seed: "maranhao", area: "331.983 km²", properties: 400, avgPrice: "R$ 350.000" },
    { name: "MT/Mato Grosso", seed: "matogrosso", area: "903.357 km²", properties: 700, avgPrice: "R$ 800.000" },
    { name: "MS/Mato Grosso do Sul", seed: "matogrossodosul", area: "357.125 km²", properties: 500, avgPrice: "R$ 750.000" },
    { name: "MG/Minas Gerais", seed: "minasgerais", area: "586.528 km²", properties: 3000, avgPrice: "R$ 900.000" },
    { name: "PA/Pará", seed: "para", area: "1.247.689 km²", properties: 600, avgPrice: "R$ 400.000" },
    { name: "PB/Paraíba", seed: "paraiba", area: "56.439 km²", properties: 450, avgPrice: "R$ 420.000" },
    { name: "PR/Paraná", seed: "parana", area: "199.314 km²", properties: 1500, avgPrice: "R$ 850.000" },
    { name: "PE/Pernambuco", seed: "pernambuco", area: "98.311 km²", properties: 900, avgPrice: "R$ 580.000" },
    { name: "PI/Piauí", seed: "piaui", area: "251.529 km²", properties: 300, avgPrice: "R$ 320.000" },
    { name: "RJ/Rio de Janeiro", seed: "riodejaneiro", area: "43.696 km²", properties: 4500, avgPrice: "R$ 1.500.000" },
    { name: "RN/Rio Grande do Norte", seed: "riograndedonorte", area: "52.796 km²", properties: 550, avgPrice: "R$ 500.000" },
    { name: "RS/Rio Grande do Sul", seed: "riograndedosul", area: "281.748 km²", properties: 1800, avgPrice: "R$ 950.000" },
    { name: "RO/Rondônia", seed: "rondonia", area: "237.576 km²", properties: 250, avgPrice: "R$ 280.000" },
    { name: "RR/Roraima", seed: "roraima", area: "224.299 km²", properties: 100, avgPrice: "R$ 180.000" },
    { name: "SC/Santa Catarina", seed: "santacatarina", area: "95.346 km²", properties: 1300, avgPrice: "R$ 1.100.000" },
    { name: "SP/São Paulo", seed: "saopaulo", area: "248.209 km²", properties: 10000, avgPrice: "R$ 1.800.000" },
    { name: "SE/Sergipe", seed: "sergipe", area: "21.910 km²", properties: 380, avgPrice: "R$ 380.000" },
    { name: "TO/Tocantins", seed: "tocantins", area: "277.620 km²", properties: 200, avgPrice: "R$ 260.000" }
];

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
                    <div className="p-6">
                        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <h3 className="text-sm font-medium">{stat.title}</h3>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <p className="text-xs text-muted-foreground text-green-500">
                        {stat.change}
                        </p>
                    </div>
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
                  <Card key={state.seed} className="overflow-hidden flex flex-col">
                    <CardHeader className="p-0 relative h-48">
                      <Image
                        src={`https://picsum.photos/seed/${state.seed}/600/400`}
                        alt={`Mapa de ${state.name}`}
                        fill
                        className="object-cover"
                        data-ai-hint="satellite map"
                      />
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                        <h3 className="font-bold text-lg text-foreground">{state.name.split('/')[1]}</h3>
                        <div className="text-sm text-muted-foreground mt-2">
                            <p><span className="font-semibold">Área:</span> {state.area}</p>
                            <p><span className="font-semibold">Imóveis:</span> {state.properties}</p>
                            <p><span className="font-semibold">Preço Médio:</span> {state.avgPrice}</p>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                        <div className="flex flex-col items-start gap-2 w-full">
                            <Button asChild size="sm" variant="link" className="p-0 h-auto text-primary">
                                <Link href="#">Ver mapa ampliado</Link>
                            </Button>
                            <Button size="sm" variant="ghost" className="h-auto p-1">
                                <Filter className="h-4 w-4" />
                                <span className="ml-1">Notas</span>
                            </Button>
                        </div>
                    </CardFooter>
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
