import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center py-6 border-b border-gray-100 last:border-0">
      <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="ml-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <h4 className="text-base font-semibold text-gray-900">{item.name}</h4>
          <p className="text-base font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1.5 hover:bg-gray-50 text-gray-600 transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="px-3 py-1 text-sm font-medium border-x border-gray-200 min-w-[32px] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1.5 hover:bg-gray-50 text-gray-600 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:text-red-600 text-sm font-medium flex items-center"
          >
            <Trash2 size={16} className="mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;