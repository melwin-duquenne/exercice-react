'use client'

import Image from "next/image";

type Product = {
  code: string;
  image_url: string;
  product_name: string;
  nutriments: {
    energy: number;
  };
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, margin: 8, borderRadius: 8 }}>
      <Image src={product.image_url} alt={product.product_name} width={120} height={120} />
      <h3>{product.product_name}</h3>
      <p>Code: {product.code}</p>
      <p>Énergie: {product.nutriments.energy} kcal</p>
    </div>
  );
}