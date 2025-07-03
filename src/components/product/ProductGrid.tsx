// components/product/ProductGrid.tsx
"use client";
import React from 'react';
import { Product } from '@/types/product';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { formatCurrency } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  getQuantity: (id: string) => number;
  addToCart: (product: Product) => void;
  updateQuantity: (id: string, qty: number) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  getQuantity,
  addToCart,
  updateQuantity
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => {
        const qty = getQuantity(product.id);
        return (
          <Card key={product.id}>
            <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-cover" />
            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
              <p className="text-primary text-xl font-bold">{formatCurrency(product.price)}</p>
              {qty > 0 ? (
                <div className="flex items-center gap-2">
                  <Button onClick={() => updateQuantity(product.id, qty - 1)} size="sm" variant="outline"><Minus className="w-4 h-4" /></Button>
                  <span>{qty}</span>
                  <Button onClick={() => updateQuantity(product.id, qty + 1)} size="sm" variant="outline"><Plus className="w-4 h-4" /></Button>
                </div>
              ) : (
                <Button onClick={() => addToCart(product)} size="sm">
                  <Plus className="w-4 h-4 mr-1" /> Tambah
                </Button>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
