import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Categories = ['All', 'Electronics', 'Fashion', 'Home', 'Accessories'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    
    if (sortBy === 'Price: Low to High') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Highest Rated') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }
    
    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Our Collection</h1>
          <p className="text-gray-500">Discover our range of {filteredProducts.length} curated products.</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            <SlidersHorizontal size={18} />
            <span className="text-sm font-semibold text-gray-700">Filters</span>
          </button>
          
          <div className="relative group">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap">
              <span className="text-sm font-semibold text-gray-700">Sort by: {sortBy}</span>
              <ChevronDown size={18} />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-20 py-1 overflow-hidden">
              {['Newest', 'Price: Low to High', 'Price: High to Low', 'Highest Rated'].map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-8 border-b border-gray-100"
          >
            <div className="pb-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
              {Categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-bold transition-all border ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-gray-600 border-gray-100 hover:border-indigo-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
            <Filter size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">No products found</h3>
          <p className="text-gray-500">Try changing your filters or search terms.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSortBy('Newest');
            }}
            className="mt-6 text-indigo-600 font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;