// components/Navbar.js
'use client'
import React, { useContext } from 'react';
import Link from 'next/link';
import { CartContext } from '../context/CartContext';
import { usePathname } from 'next/navigation';
import { FaHome } from "react-icons/fa";



const Navbar = () => {
  const { cart } = useContext(CartContext);
  const pathname = usePathname();

  const totalItems = cart.reduce((sum, item) => sum + 1, 0);

  return (
    <nav className="bg-pink-600 rounded-[32px] shadow-2xl m-4 px-4 py-2 text-white">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/" className="text-3xl text-gray-50">
          <span className='text-3xl font-bold'>S</span>hop<span className='text-2xl font-bold'>I</span>t
        </Link>
        <div className="flex items-center p-2 cursor-pointer hover:scale-105">
          {pathname === '/' && (
            <Link href="/cart" className="flex text-md items-center">
              Go to Cart  &nbsp;<span className={`bg-violet-700 flex justify-center items-center h-[25px] w-[25px] rounded-[50%] ${totalItems && 'animate-bounce'}`}>{totalItems}</span>
            </Link>
          )}
          {pathname === '/cart' && (
            <Link href="/" className="flex text-lg items-center p-1">
             Back <FaHome className='text-lg ml-1'/>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
