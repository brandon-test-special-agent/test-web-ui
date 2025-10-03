'use client';

import { useState } from 'react';
import BikeCard from './components/BikeCard';

const bikes = [
  {
    id: 1,
    name: 'Mountain Bike Pro',
    price: 899,
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&q=80',
    category: 'Off-Road'
  },
  {
    id: 2,
    name: 'Road Racer',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80',
    category: 'Speed'
  },
  {
    id: 3,
    name: 'City Cruiser',
    price: 599,
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
    category: 'Urban'
  },
  {
    id: 4,
    name: 'Electric Bike',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1633467106716-f840c0b14302?w=800&q=80',
    category: 'E-Bike'
  },
  {
    id: 5,
    name: 'Gravel Bike',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800&q=80',
    category: 'Adventure'
  },
  {
    id: 6,
    name: 'BMX Pro',
    price: 449,
    image: 'https://images.unsplash.com/photo-1559348349-86f1f65817fe?w=800&q=80',
    category: 'Stunt'
  },
];

export default function Home() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (bikeId: number) => {
    setCart([...cart, bikeId]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, bikeId) => {
      const bike = bikes.find(b => b.id === bikeId);
      return total + (bike?.price || 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-gray-900">BIKE STORE</h1>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Shop</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
              </div>
            </div>
            <button className="relative flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium">{cart.length}</span>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80"
            alt="Hero"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ride Beyond Limits
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-6">
              Discover premium bikes engineered for performance and built for adventure
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-2.5 rounded-lg transition-colors">
                Shop Now
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
            <p className="text-base text-gray-600">Find the perfect bike for your riding style</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {['Mountain', 'Road', 'Urban', 'Electric'].map((category) => (
              <div key={category} className="group relative h-40 rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={`https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&q=80`}
                  alt={category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-lg font-bold text-white">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bikes.map((bike) => (
              <BikeCard
                key={bike.id}
                id={bike.id}
                name={bike.name}
                price={bike.price}
                image={bike.image}
                category={bike.category}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Why Choose Us</h2>
            <p className="text-sm text-gray-400">Premium quality and service guaranteed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Free Shipping</h3>
              <p className="text-sm text-gray-400">Free delivery on orders over $500</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">2 Year Warranty</h3>
              <p className="text-sm text-gray-400">Warranty on all bikes</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">Expert Support</h3>
              <p className="text-sm text-gray-400">24/7 customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Mountain Bikes</a></li>
                <li><a href="#" className="hover:text-white">Road Bikes</a></li>
                <li><a href="#" className="hover:text-white">E-Bikes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Bike Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
