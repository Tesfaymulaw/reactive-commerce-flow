import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Truck, ShieldCheck, ArrowLeft, Plus, Minus, Heart, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button
          onClick={() => navigate('/products')}
          className="mt-4 text-indigo-600 font-bold hover:underline"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    // We update the addToCart logic here locally for multi-add
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-500 hover:text-indigo-600 mb-8 font-medium transition-colors"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Results
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="aspect-square rounded-[2rem] overflow-hidden border border-gray-100 bg-gray-50 shadow-sm">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[product.image, product.image, product.image, product.image].map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border border-gray-100 bg-gray-50 cursor-pointer hover:border-indigo-600 transition-colors">
                <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover opacity-60 hover:opacity-100" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-indigo-600 tracking-wider uppercase">{product.category}</span>
            <div className="flex space-x-2">
              <button className="p-2.5 rounded-full bg-gray-50 text-gray-400 hover:text-red-500 border border-gray-100 transition-all">
                <Heart size={20} />
              </button>
              <button className="p-2.5 rounded-full bg-gray-50 text-gray-400 hover:text-indigo-600 border border-gray-100 transition-all">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-6">
            <div className="flex text-amber-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  className={i < Math.floor(product.rating) ? '' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-900">{product.rating}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-sm text-gray-500 font-medium">{product.reviews} verified reviews</span>
          </div>

          <p className="text-3xl font-extrabold text-gray-900 mb-6">${product.price.toFixed(2)}</p>
          
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <div className="flex items-center border border-gray-200 rounded-full overflow-hidden w-full sm:w-auto">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-4 hover:bg-gray-50 text-gray-600 transition-colors flex-1"
              >
                <Minus size={20} />
              </button>
              <span className="px-6 py-1 text-lg font-bold min-w-[60px] text-center border-x border-gray-200">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-4 hover:bg-gray-50 text-gray-600 transition-colors flex-1"
              >
                <Plus size={20} />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 w-full bg-indigo-600 text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg active:scale-95"
            >
              Add to Bag
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
            <div className="flex items-start">
              <div className="p-2 rounded-lg bg-gray-50 text-gray-600 mr-3">
                <Truck size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Fast Shipping</h4>
                <p className="text-xs text-gray-500">Free delivery on orders over $150</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-2 rounded-lg bg-gray-50 text-gray-600 mr-3">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Warranty</h4>
                <p className="text-xs text-gray-500">2-year extended warranty included</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;