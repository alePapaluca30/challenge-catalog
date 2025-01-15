"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { ProductDetailCardProps } from "@/types/types";
import Image from "next/image";

export default function ProductDetailCard({ product }: ProductDetailCardProps) {
  return (
    <Card className="flex flex-col md:flex-row w-full overflow-hidden">
      <div className="relative w-full h-64 flex-1">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
            <span className="text-gray-500">Sin imagen</span>
          </div>
        )}
      </div>
      <div className="flex-1">
        <CardHeader>
          <div className="flex justify-between pt-2">
            <Badge style={{ backgroundColor: "#3b82f6" }}>
              {product.category.name}
            </Badge>
            <Badge style={{ backgroundColor: "#3b82f6" }}>
              {product.brand}
            </Badge>
          </div>
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <span className="text-sm text-muted-foreground">
            SKU: {product.sku}
          </span>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-muted-foreground">{product.description}</p>
            <div className="flex flex-row justify-between">
              <Badge variant={product.stock > 0 ? "default" : "destructive"}>
                {product.stock > 0 ? `En stock: ${product.stock}` : "Agotado"}
              </Badge>
              <p className="text-gray-900 font-bold text-2xl">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <ul className="list-disc list-inside space-y-1">
              {product.specifications.map((spec) => (
                <li key={spec.name}>
                  <span className="font-medium">{spec.name}:</span> {spec.value}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
