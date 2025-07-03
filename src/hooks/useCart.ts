"use client";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";

export interface CartItem {
  product: Product;
  quantity: number;
}

const getCartKey = (userId: string) => `cart-${userId}`;

export const useCart = (userId: string = "guest") => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem(getCartKey(userId));
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [userId]);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem(getCartKey(userId), JSON.stringify(cart));
  }, [cart, userId]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getQuantity = (productId: string) => {
    const item = cart.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  const clearCart = () => setCart([]);

  const getCartTotal = () =>
    cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const getCartItemCount = () =>
    cart.reduce((count, item) => count + item.quantity, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total: getCartTotal(),
    itemCount: getCartItemCount(),
    getQuantity,
  };
};