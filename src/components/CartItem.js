import { CartContext } from '@/context/CartContext';
import React, { useContext } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const CartItem = ({ item, updateQuantity, removeItem }) => {
  const { calcPrice }  = useContext(CartContext);
  return (
    <div className="flex items-center justify-between border-b p-4">
      <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover" />
      <h2 className="text-[10px] px-1 sm:text-lg max-w-[180px] font-bold">{item.title}</h2>
      <div className="flex px-2 items-center">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <p className="text-gray-700 px-2">${(calcPrice(item) * item.quantity).toFixed(2)}</p>
      <button onClick={() => removeItem(item.id)} className="text-red-500"><FaRegTrashAlt/></button>
    </div>
  );
};

export default CartItem;
