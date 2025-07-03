"use client";

import React from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  addToCart: (product: Product, quantity: number) => void;
  buyNow: (product: Product, quantity: number) => void; 
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  addToCart,
  buyNow
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product}
          addToCart={addToCart}
          buyNow={buyNow}
        />
      ))}
    </div>
  );
};