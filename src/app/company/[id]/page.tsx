
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Company, getCompanyById, Project } from "@/lib/data";
import { CircleUser, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";

// Mock data for products, should be replaced with real data
const products = [
    { name: "Tomate", image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "R$ 5,00/kg" },
    { name: "Pimentão", image: "https://images.unsplash.com/photo-1599558158484-7b5c40b9049b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "R$ 7,00/kg" },
    { name: "Limão", image: "https://images.unsplash.com/photo-1590502572943-e71360ba3f21?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "R$ 4,00/kg" },
    { name: "Milho", image: "https://images.unsplash.com/photo-1543130732-495c4048f226?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: "R$ 3,00/un" },
  ];

export default async function CompanyPage({ params }: { params: { id: string } }) {
    const company = getCompanyById(params.id);

    if (!company) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="relative h-48 w-full mb-8">
                <Image
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Capa da Empresa"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            <Card className="mb-8">
                <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                        <Image src={`https://avatar.vercel.sh/${company.id}.png`} alt={company.name} width={64} height={64} className="rounded-full" />
                        <div>
                            <h1 className="text-2xl font-bold">{company.name}</h1>
                            <p className="text-muted-foreground">{company.bio.substring(0, 100)}...</p>
                        </div>
                    </div>
                    <Button variant="outline">
                        <Mail className="mr-2 h-4 w-4" />
                        Messages
                    </Button>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-2">
                    <Card>
                        <CardHeader>
                            <h2 className="text-xl font-bold">Localização</h2>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-96">
                                <Image src="https://i.imgur.com/3Q2Yp6x.png" alt="Mapa" fill className="object-cover rounded-lg" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className="mb-4">
                        <CardHeader>
                            <h3 className="font-bold">Informações do Imóvel</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="text-sm space-y-2">
                                <p><strong>Rua:</strong> Jango Pádua</p>
                                <p><strong>Tipo de Imóvel:</strong> Urbano</p>
                                <p><strong>Quadra:</strong> S/N, <strong>Lote:</strong> S/N, <strong>Nº:</strong> 08</p>
                                <p><strong>Latitude:</strong> -23.22155, <strong>Longitude:</strong> -44.71992</p>
                                <p><strong>Área:</strong> S/N m², <strong>Valor:</strong> R$ S/N</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <h3 className="font-bold">Previsão do Tempo</h3>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-4xl font-bold">29°C</p>
                                    <p className="text-muted-foreground">Paraty/RJ</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-lg">Cloudy</p>
                                    <p className="text-sm text-muted-foreground">Wheather Today</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Produtos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.name} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
