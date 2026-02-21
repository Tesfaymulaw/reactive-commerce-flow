import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { ShoppingBag, ArrowRight, Trash2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Cart = () => {
  const { cart, totalPrice, totalItems, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[60vh]">
        <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Your Bag is Empty</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Look like you haven't added anything to your cart yet. Explore our collection and find something you love.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg"
        >
          Explore Collection
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Your Bag ({totalItems})</h1>
        <button
          onClick={clearCart}
          className="text-sm font-bold text-red-500 hover:text-red-600 flex items-center transition-colors"
        >
          <Trash2 size={16} className="mr-1" />
          Clear Bag
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <button
            onClick={() => navigate('/products')}
            className="flex items-center text-gray-500 hover:text-indigo-600 font-bold transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Continue Shopping
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8 sticky top-24 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Order Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span className="font-bold text-gray-900">${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6 mb-8 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-2xl font-extrabold text-indigo-600">
                ${(totalPrice + totalPrice * 0.08).toFixed(2)}
              </span>
            </div>
            <Link
              to="/checkout"
              className="block w-full text-center bg-indigo-600 text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg active:scale-95 mb-4"
            >
              Checkout Now
            </Link>
            <p className="text-center text-xs text-gray-500">
              Tax is calculated based on current state rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;