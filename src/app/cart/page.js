'use client'
import React, { useContext, useState } from 'react';
import CartItem from '@/components/CartItem';
import { CartContext } from '@/context/CartContext';
import Alert from '@/components/Alert';
import { failedCheckout, successCheckout } from '@/utils/constants';


export default function CartPage() {
  const { cart, updateQuantity, removeItem, calcPrice } = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(0);

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => {
      return sum + calcPrice(item) * item.quantity
    }, 0).toFixed(2);
  };
  
  const calculateOverallDiscount = () => {
    let oldTotal =  cart.reduce((sum, item) => {
      return sum + item.price * item.quantity
    }, 0).toFixed(2);
    let newTotal = calculateSubtotal();
    let discount = (((oldTotal - newTotal)/oldTotal) * 100).toFixed(2);
    return discount > 0 ? `You Save: ${discount}%` : '';
  };

  const handleCheckout = () => {
    setIsCheckout(1)
  }

  return (
    <div className="container mx-auto">
      {isCheckout && cart.length ? <Alert values={successCheckout} setIsCheckout={setIsCheckout}/> : ''}
      {isCheckout && cart.length===0 ? <Alert values={failedCheckout} setIsCheckout={setIsCheckout}/> : ''}
      <div className="grid grid-cols-1 gap-8">
        {cart.length > 0 ? (
          cart.map((item, i) => (
            <CartItem
              key={i}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))
        ) : (
          // <p className='text-center'>Your cart is empty.</p>
         <h1 className="text-xl font-semibold my-8 text-center">Your Cart is empty</h1> 
        )}
      </div>
      <div className="text-right mt-8 px-2">
        <h2 className="text-lg font-semibold">Subtotal: ${calculateSubtotal()}</h2>
        {cart.length>0 && <h2 className="text-lg font-semibold">{calculateOverallDiscount()}</h2>}
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}
