"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductDetailCardProps } from "@/types/types";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const getColor = (color: string) => {
  switch (color.toLowerCase()) {
    case "rojo":
      return "hsl(0, 100%, 50%)";
    case "verde":
      return "hsl(120, 100%, 40%)";
    case "azul":
      return "hsl(220, 100%, 50%)";
    case "amarillo":
      return "hsl(45, 100%, 50%)";
    case "negro":
      return "hsl(0, 0%, 0%)";
    default:
      return "hsl(0, 0%, 80%)";
  }
};

export default function ProductDetailCard({ product }: ProductDetailCardProps) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Card className="flex flex-col md:flex-row justify-center items-center w-full h-full p-6">
        <div className="relative w-full md:w-1/2 h-72 md:h-96 rounded-xl overflow-hidden">
          {imageLoading && (
            <Skeleton className="absolute inset-0 h-full w-full bg-gray-100" />
          )}
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={`object-contain transition-opacity duration-300 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setImageLoading(false)}
            />
          ) : (
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Sin imagen</span>
            </div>
          )}
        </div>
        <div className="flex w-full md:w-1/2 flex-col">
          <CardHeader>
            <div className="flex justify-between">
              <Badge variant="secondary">{product.category.name}</Badge>
              <Badge variant="outline">{product.brand}</Badge>
            </div>
            <h3 className="text-2xl font-semibold">{product.name}</h3>
            <span className="text-muted-foreground uppercase text-base font-semibold">
              {product.sku}
            </span>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{product.description}</p>
            <ul className="space-y-2">
              {product.specifications.map((spec) => (
                <li key={spec.name} className="flex items-center">
                  <span className="font-medium mr-2">{spec.name}:</span>
                  {spec.name === "Color" ? (
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: getColor(spec.value) }}
                    />
                  ) : spec.name === "Tamaño" ? (
                    <div className="flex gap-2">
                      {spec.value.split(",").map((size, index) => (
                        <Badge key={index} variant="outline">
                          {size.trim()}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <span>{spec.value}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center">
              <Badge variant={product.stock > 0 ? "default" : "destructive"}>
                {product.stock === 1
                  ? "¡Última unidad!"
                  : product.stock > 0
                  ? `Quedan ${product.stock} unidades`
                  : "Agotado"}
              </Badge>
              <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

