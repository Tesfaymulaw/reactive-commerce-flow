import React from 'react';
import { Mail, Github, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              LUMINA
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Elevating your lifestyle through premium design and innovation. Quality products for a modern world.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Decor</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Shipping Policy</li>
              <li>Returns & Exchanges</li>
              <li>Track Order</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Stay updated with our latest releases and exclusive offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-50 border border-gray-200 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md text-sm hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Lumina Store. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Instagram size={20} className="hover:text-indigo-600 cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-indigo-600 cursor-pointer transition-colors" />
            <Github size={20} className="hover:text-indigo-600 cursor-pointer transition-colors" />
            <Mail size={20} className="hover:text-indigo-600 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;