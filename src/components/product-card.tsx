
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
}

export function ProductCard({ name, image, price }: ProductCardProps) {
  return (
    <Card>
      <Image src={image} alt={name} width={300} height={200} className="object-cover rounded-t-lg" />
      <CardContent className="p-4">
        <h3 className="font-bold">{name}</h3>
        <p className="text-muted-foreground">{price}</p>
      </CardContent>
    </Card>
  );
}
