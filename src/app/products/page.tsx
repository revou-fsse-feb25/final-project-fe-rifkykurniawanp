"use client";

import React, { useState, useMemo } from "react";
import { FilterSidebar } from "@/components/product/FilterSideBar";
import { ProductGrid } from "@/components/product/ProductGrid";
import { allProducts } from "../data/product";
import { useCart } from "@/hooks/useCart";
import { FilterState, Product } from "@/types/product";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const ProductPage = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    subcategory: [],
    priceRange: [0, 500000],
    rating: 0,
    caffeine: ""
  });

  const [searchTerm, setSearchTerm] = useState("");

  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      category: [],
      subcategory: [],
      priceRange: [0, 500000],
      rating: 0,
      caffeine: ""
    });
    setSearchTerm("");
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory = filters.category.length === 0 || filters.category.includes(product.category);
      const matchesSubcategory = filters.subcategory.length === 0 || filters.subcategory.includes(product.subcategory);
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const matchesRating = product.rating >= filters.rating;
      const matchesSearch = searchTerm === "" || product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSubcategory && matchesPrice && matchesRating && matchesSearch;
    });
  }, [filters, searchTerm]);

 const { addToCart, updateQuantity, getQuantity } = useCart();
 console.log("getQuantity is function:", typeof getQuantity === 'function');

  const categories = ["tea", "coffee", "herbal"];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Produk Kami</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-64">
          <FilterSidebar
            filters={filters}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            updateFilter={updateFilter}
            resetFilters={resetFilters}
          />
        </div>

        <div className="flex-1">
          <Tabs defaultValue="tea" className="space-y-4">
            <TabsList>
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="capitalize">
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((cat) => (
              <TabsContent key={cat} value={cat}>
                <ProductGrid
                  products={filteredProducts.filter((p) => p.category === cat)}
                  getQuantity={getQuantity}
                  addToCart={addToCart}
                  updateQuantity={updateQuantity}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
