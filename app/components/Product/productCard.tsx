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
          width={120}
          height={160}
          className="w-full h-72 object-cover rounded-md"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
          <span className="text-gray-500">Sin imagen</span>
        </div>
      )}
      <div className="flex flex-col justify-center space-y-2">
        <div className="flex justify-between pt-2">
          <Badge>{category}</Badge>
          <Badge variant={"outline"}>{brand}</Badge>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold capitalize">{name}</h3>
        </div>

        <div className="flex flex-row justify-between items-end pt-2">
          <Link
            href={`/products/${sku}`}
            passHref
            className="hover:underline hover:text-primary "
          >
            Ver detalle
          </Link>
          <p className="text-gray-700 font-bold text-xl">
            ${price?.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
