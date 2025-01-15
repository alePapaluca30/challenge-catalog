"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProductCardProps } from "@/types/types";

const ProductCard: React.FC<ProductCardProps> = ({
  sku,
  name,
  price,
  brand,
  category,
  imageUrl,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          className="w-full h-48 object-cover rounded-md"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
          <span className="text-gray-500">Sin imagen</span>
        </div>
      )}
      <div className="flex flex-col justify-center space-y-2">
        <div className="flex justify-between pt-2">
          <Badge style={{ backgroundColor: "#3b82f6" }}>{category}</Badge>
          <Badge style={{ backgroundColor: "#3b82f6" }}>{brand}</Badge>
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="flex flex-row justify-between items-end">
          <Link
            href={`/products/${sku}`}
            passHref
            className="hover:underline hover:text-blue-500"
          >
            Ver detalle
          </Link>
          <p className="text-gray-900 font-bold text-xl">${price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
