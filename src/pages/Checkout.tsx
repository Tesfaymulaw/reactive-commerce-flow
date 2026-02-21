import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, CreditCard, Truck } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
      toast.success('Order placed successfully!');
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[60vh]">
        <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Order Confirmed!</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Thank you for your purchase. Your order number is #LUM-72419. We've sent a confirmation email to your inbox.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Section */}
          <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Truck size={24} className="mr-3 text-indigo-600" />
              Shipping Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Street Address</label>
                <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-2">ZIP Code</label>
                <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <CreditCard size={24} className="mr-3 text-indigo-600" />
              Payment Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Card Number</label>
                <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Expiry Date</label>
                  <input required type="text" placeholder="MM/YY" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">CVV</label>
                  <input required type="text" placeholder="123" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8 sticky top-24 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Checkout Total</h3>
            <div className="space-y-3 mb-8">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.name} x {item.quantity}</span>
                  <span className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-6 mb-8 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-2xl font-extrabold text-indigo-600">
                ${(totalPrice + totalPrice * 0.08).toFixed(2)}
              </span>
            </div>
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-indigo-600 text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </button>
            <div className="mt-6 flex items-center justify-center text-xs text-gray-500">
              <ShieldCheck size={16} className="mr-2 text-green-600" />
              Secured by 256-bit SSL encryption
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;