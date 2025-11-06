import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
import { DollarSign, TrendingUp, Info } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const stats = [
    { title: "Cadastrados", value: "R$ 0,00", change: "+0%" },
    { title: "Tokenizados", value: "0.00", change: "+0%" },
    { title: "Negociações", value: "R$ 0,00", change: "+0%" },
];

const states = [
    { name: "RJ/Rio de Janeiro", seed: "rio" },
    { name: "SP/São Paulo", seed: "saopaulo" },
    { name: "MG/Minas Gerais", seed: "minasgerais" },
    { name: "BH/Bahia", seed: "bahia" },
    { name: "RS/Rio Grande do Sul", seed: "riograndedosul" },
    { name: "SC/Santa Catarina", seed: "santacatarina" },
    { name: "PR/Paraná", seed: "parana" },
    { name: "MS/Mato Grosso do Sul", seed: "matogrossodosul" },
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
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
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
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-base font-medium">{state.name}</CardTitle>
                                <Info className="h-4 w-4 text-muted-foreground" />
                            </div>
                        </CardHeader>
                        <CardContent className="p-0 relative h-64">
                            <Image 
                                src={`https://picsum.photos/seed/${state.seed}/600/400`}
                                alt={`Mapa de ${state.name}`}
                                fill
                                className="object-cover"
                                data-ai-hint="satellite map"
                            />
                            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-4">
                                <div className="bg-background/80 backdrop-blur-sm p-2 rounded-md">
                                    <h3 className="font-bold text-lg text-foreground">{state.name.split('/')[1]}</h3>
                                    <div className="flex gap-2 mt-2">
                                        <Button size="sm" variant="outline">Ver mapa ampliado</Button>
                                        <Button size="sm">Ativos</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>>
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
