import React from 'react';
import { notFound } from 'next/navigation';
import { allProducts } from '@/app/data/product';
import { Product } from '@/types/product';
import { ProductDetailClient } from '@/components/product/ProductDetailClient';

async function getProductById(id: string): Promise<Product | undefined> {
  return allProducts.find(product => product.id === id); 
}

interface ProductPageProps {
  params: { id: string };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
};

export default ProductPage;