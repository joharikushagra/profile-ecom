'use client'
import React, { useContext } from 'react';
import StarRating from './StarRating';
import { CiShoppingCart, CiShoppingBasket, Tick } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { CartContext } from '@/context/CartContext';
import Link from 'next/link';

const ProductCard = ({ product, addToCart }) => {
  const { calcPrice, productList, setProductList } = useContext(CartContext);
  const iconToggle = (product) => {
    if(product.addtocart) {
      return <>Cart <FaCheck className='ml-1 text-xl' /></>
    }
    return <CiShoppingBasket className='ml-1 text-xl'/>
  }
  const updateList = () => {
    product.addtocart = true;
          addToCart(product)
          setProductList(ps => {
            return ps.map(item => item.id===product.id ? { ...product, addtocart: true} : item); 
    });
  }

  return (
    <div className="border p-4 hover:shadow-xl">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold mt-2">{product.title.length > 24 ? `${product.title.substring(0,24)}...` : product.title}</h2>
      <StarRating rating = {product.rating} />
      <span className={`font-thin ${product.discount > 0 && 'line-through'}`} >${product.price.toFixed(2)}</span>
      {product.discount > 0 && <span className={`ml-2`}>${calcPrice(product)}</span>}
      <div className='flex items-center'>
        <button
          onClick={updateList}
          className={`mt-4 ${product.addtocart ? 'bg-green-500' : 'bg-blue-500' } text-white py-2 px-4 rounded flex items-center cursor-pointer hover:scale-105`}
          disabled={product.addtocart}
        >
          Add to {iconToggle(product)}
        </button>
        {product.addtocart && <Link href={'/cart'}>
        <button
          className={`mt-4 ml-2 border-2 border-rose-100 text-red-500 py-2 px-4 rounded flex items-center cursor-pointer hover:scale-105`}
          >
          Go to <CiShoppingBasket className='ml-1 text-xl'/>
        </button>
        </Link>}
      </div>
    </div>
  );
};

export default ProductCard;
