'use client'
import React, { useContext, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import products from '@/utils/data.json';
import { CartContext } from '@/context/CartContext';

export default function Home() {
  const { addToCart, productList } = useContext(CartContext);
  useEffect(()=>{},[productList]);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productList.map((product, i) => (
          <ProductCard key={i} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
