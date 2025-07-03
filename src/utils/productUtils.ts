import { Product } from '../types/product';
import { allProducts } from '../app/data/product';

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

export const getCategoryDisplayName = (category: string): string => {
  const categoryMap: Record<string, string> = {
    'tea': 'Teh',
    'coffee': 'Kopi',
    'herbal': 'Herbal'
  };
  return categoryMap[category] || category;
};

export const getSubcategoryDisplayName = (subcategory: string): string => {
  const subcategoryMap: Record<string, string> = {
    'ingredient': 'Bahan',
    'tool': 'Alat',
    'support': 'Penunjang'
  };
  return subcategoryMap[subcategory] || subcategory;
};

export const getCaffeineDisplayName = (caffeine: string): string => {
  const caffeineMap: Record<string, string> = {
    'none': 'Tanpa Kafein',
    'low': 'Kafein Rendah',
    'medium': 'Kafein Sedang',
    'high': 'Kafein Tinggi'
  };
  return caffeineMap[caffeine] || caffeine;
};

export const getRoastLevelDisplayName = (roastLevel: string): string => {
  const roastMap: Record<string, string> = {
    'light': 'Light Roast',
    'medium': 'Medium Roast',
    'dark': 'Dark Roast'
  };
  return roastMap[roastLevel] || roastLevel;
};

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return allProducts.filter(product => product.subcategory === subcategory);
};

export const getFeaturedProducts = (limit: number = 6): Product[] => {
  return allProducts
    .filter(product => product.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return allProducts
    .filter(p => 
      p.id !== product.id && 
      (p.category === product.category || p.subcategory === product.subcategory)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const searchProducts = (query: string, products: Product[] = allProducts): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    product.origin?.toLowerCase().includes(lowercaseQuery)
  );
};

export const getAvailableFilters = () => {
  const categories = [...new Set(allProducts.map(p => p.category))];
  const subcategories = [...new Set(allProducts.map(p => p.subcategory))];
  const origins = [...new Set(allProducts.map(p => p.origin).filter(Boolean))];
  const caffeineTypes = [...new Set(allProducts.map(p => p.caffeine).filter(Boolean))];
  const roastLevels = [...new Set(allProducts.map(p => p.roastLevel).filter(Boolean))];
  
  const priceRange = allProducts.reduce(
    (range, product) => ({
      min: Math.min(range.min, product.price),
      max: Math.max(range.max, product.price)
    }),
    { min: Infinity, max: -Infinity }
  );

  return {
    categories,
    subcategories,
    origins,
    caffeineTypes,
    roastLevels,
        priceRange
        };
    };