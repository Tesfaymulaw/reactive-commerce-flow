export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Electronics' | 'Fashion' | 'Home' | 'Accessories';
  image: string;
  rating: number;
  reviews: number;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Pro Wireless Headphones',
    price: 299.99,
    description: 'Experience studio-quality sound with our flagship noise-canceling headphones. Features 40-hour battery life and ultra-comfortable memory foam ear cups.',
    category: 'Electronics',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a81b3f5-49cd-46cf-b31c-7ace0aa67e39/wireless-headphones-bf3bcdd9-1771703002778.webp',
    rating: 4.8,
    reviews: 124,
    features: ['Active Noise Cancellation', '40h Battery Life', 'Bluetooth 5.2', 'Built-in Mic']
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    price: 199.50,
    description: 'Track your health and stay connected with the most advanced smart watch. Features blood oxygen monitoring and a high-resolution always-on display.',
    category: 'Electronics',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a81b3f5-49cd-46cf-b31c-7ace0aa67e39/smart-watch-509b9a11-1771703003662.webp',
    rating: 4.7,
    reviews: 89,
    features: ['Heart Rate Monitor', 'GPS', 'Water Resistant', '7-Day Battery']
  },
  {
    id: '3',
    name: 'Urban Leather Backpack',
    price: 145.00,
    description: 'A timeless classic designed for the modern commuter. Handcrafted from premium full-grain leather that ages beautifully over time.',
    category: 'Fashion',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a81b3f5-49cd-46cf-b31c-7ace0aa67e39/leather-backpack-c3466014-1771703008741.webp',
    rating: 4.9,
    reviews: 56,
    features: ['Genuine Leather', '15" Laptop Sleeve', 'Anti-theft Pocket', 'Breathable Back']
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    price: 79.00,
    description: 'Sleek design meets functionality. This lamp provides the perfect warm glow for your workspace while adding a touch of modern elegance.',
    category: 'Home',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a81b3f5-49cd-46cf-b31c-7ace0aa67e39/minimalist-lamp-c154d37a-1771703003297.webp',
    rating: 4.6,
    reviews: 42,
    features: ['Adjustable Brightness', 'Touch Control', 'Energy Efficient', 'Compact Design']
  },
  {
    id: '5',
    name: 'Classic White Sneakers',
    price: 120.00,
    description: 'Clean, versatile, and comfortable. These premium leather sneakers are perfect for any occasion, from casual Fridays to weekend outings.',
    category: 'Fashion',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a81b3f5-49cd-46cf-b31c-7ace0aa67e39/premium-sneakers-7ed22d05-1771703009489.webp',
    rating: 4.5,
    reviews: 156,
    features: ['Premium Leather', 'Rubber Outsole', 'Cushioned Insole', 'Breathable']
  },
  {
    id: '6',
    name: 'Artisan Ceramic Mug',
    price: 34.00,
    description: 'Each mug is unique, hand-thrown by skilled artisans. The perfect weight and feel for your morning coffee ritual.',
    category: 'Home',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a81b3f5-49cd-46cf-b31c-7ace0aa67e39/ceramic-mug-8b752909-1771703003072.webp',
    rating: 4.9,
    reviews: 210,
    features: ['Handcrafted', 'Microwave Safe', 'Dishwasher Safe', 'Eco-friendly']
  },
  {
    id: '7',
    name: 'Pro Mirrorless Camera',
    price: 1299.00,
    description: 'Capture every moment in stunning detail. High-performance sensor and fast autofocus make it the choice for professionals.',
    category: 'Electronics',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a81b3f5-49cd-46cf-b31c-7ace0aa67e39/digital-camera-49f9a546-1771703009094.webp',
    rating: 4.9,
    reviews: 34,
    features: ['4K Video', 'Wi-Fi/NFC', '24.2 MP Sensor', 'Tilt Screen']
  },
  {
    id: '8',
    name: 'Silk Sleep Set',
    price: 65.00,
    description: 'Experience ultimate comfort and better sleep with our premium silk set. Soft on skin and hair, designed for relaxation.',
    category: 'Accessories',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a81b3f5-49cd-46cf-b31c-7ace0aa67e39/sleep-set-60906d95-1771703003460.webp',
    rating: 4.7,
    reviews: 67,
    features: ['100% Mulberry Silk', 'Breathable', 'Hypoallergenic', 'Includes Eye Mask']
  }
];