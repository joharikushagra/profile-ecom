'use client'
import React, { useContext } from 'react';
import StarRating from './StarRating';
import { CiShoppingCart, CiShoppingBasket, Tick } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { CartContext } from '@/context/CartContext';

const ProductCard = ({ product, addToCart }) => {
  const { calcPrice, productList, setProductList } = useContext(CartContext);
  const iconToggle = (product) => {
    if(product.addtocart) {
      return <>Cart <FaCheck className='ml-1 text-xl' /></>
    }
    return <CiShoppingBasket className='ml-1 text-xl'/>
  }
  return (
    <div className="border p-4 hover:shadow-xl">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold mt-2">{product.title.length > 24 ? `${product.title.substring(0,24)}...` : product.title}</h2>
      <StarRating rating = {product.rating} />
      <span className={`text-gray-700 ${product.discount > 0 && 'line-through'}`} >${product.price.toFixed(2)}</span>
      {product.discount > 0 && <span className={`ml-2 text-gray-700`}>${calcPrice(product)}</span>}
      <button
        onClick={() => {
          product.addtocart = true;
          addToCart(product)
          setProductList(ps => {
            return ps.map(item => item.id===product.id ? { ...product, addtocart: true} : item); 
          });
        }}
        className={`mt-4 ${product.addtocart ? 'bg-green-500' : 'bg-blue-500' } text-white py-2 px-4 rounded flex items-center cursor-pointer hover:scale-105`}
        disabled={product.addtocart}
      >
        Add to {iconToggle(product)}
      </button>
    </div>
  );
};

export default ProductCard;
