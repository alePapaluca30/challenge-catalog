"use client";

import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { ProductDetailCardProps } from "@/types/types";
import Image from "next/image";

const getColor = (color: string) => {
  switch (color.toLowerCase()) {
    case "rojo":
      return "hsl(0, 100%, 50%)"; // Rojo
    case "verde":
      return "hsl(120, 100%, 40%)"; // Verde
    case "azul":
      return "hsl(220, 100%, 50%)"; // Azul
    case "amarillo":
      return "hsl(45, 100%, 50%)"; // Amarillo
    case "negro":
      return "hsl(0, 0%, 0%)";
    default:
      return "hsl(0, 0%, 80%)"; // Gris como color por defecto
  }
};
export default function ProductDetailCard({ product }: ProductDetailCardProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Card className="flex flex-col justify-center items-center w-1/2">
        <div className="relative w-full h-72">
          {product.image ? (
            <div className="h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-fill rounded-xl p-1"
              />
            </div>
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
              <span className="text-gray-500">Sin imagen</span>
            </div>
          )}
        </div>
        <div className="flex w-full flex-col">
          <CardHeader>
            <div className="flex justify-between pt-2">
              <Badge>{product.category.name}</Badge>
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
              

              <ul className="space-y-1">
                {product.specifications.map((spec) => {
                  if (spec.name === "Color") {
                    const color = getColor(spec.value);
                    return (
                      <li key={spec.name} className="flex items-center">
                        <span className="font-semibold mr-2 text-gray-700">
                          {spec.name}
                        </span>

                        <div
                          className="w-8 h-8 rounded-full border-2 p-2"
                          style={{ backgroundColor: color, padding: "2" }}
                        ></div>
                      </li>
                    );
                  }

                  if (spec.name === "Tamaño") {
                    return (
                      <li key={spec.name} className="flex items-center">
                      <span className="font-semibold mr-2 text-gray-700">{spec.name}</span>
                        <div className="mt-2 flex gap-2">
                          {spec.value.split(",").map((size, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-200 text-sm rounded-full"
                            >
                              {size.trim()}
                            </span>
                          ))}
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={spec.name}>
                      <span className="font-medium">{spec.name}:</span>
                      {spec.value}
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-row justify-between">
                <Badge variant={product.stock > 0 ? "secondary" : "destructive"}>
                  {product.stock > 0 ? `En stock: ${product.stock}` : "Agotado"}
                </Badge>
                <p className="text-gray-900 font-bold text-2xl">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
