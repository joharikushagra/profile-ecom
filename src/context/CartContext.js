
'use client'
import React, { createContext, useEffect, useState } from 'react';
import products from '@/utils/data.json';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productList, setProductList] = useState(products);
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product) => {
    if(!cart.filter(c => c.id === product.id).length)
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const calcPrice = (product) => {
    let newPrice = product.price - product.price * (product.discount/100);
    return newPrice.toFixed(2);
  }

  const updateQuantity = (id, quantity) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeItem = (id) => {
    let product = cart.filter(item => item.id === id)[0];
    setCart(cart.filter((item) => item.id !== id));
    setProductList((ps) => {
      return ps.map(item => item.id===id ? {...product, addtocart: false} : item);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, calcPrice, productList, setProductList }}>
      {children}
    </CartContext.Provider>
  );
};
