'use client';

import { useState } from 'react';

const bikes = [
  { id: 1, name: 'Mountain Bike Pro', price: 899, image: '🚵' },
  { id: 2, name: 'Road Racer', price: 1299, image: '🚴' },
  { id: 3, name: 'City Cruiser', price: 599, image: '🚲' },
  { id: 4, name: 'Electric Bike', price: 1899, image: '⚡🚲' },
];

export default function Home() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (bikeId: number) => {
    setCart([...cart, bikeId]);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Bike Store</h1>
        <p className="text-gray-600 mt-2">Cart items: {cart.length}</p>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bikes.map((bike) => (
            <div key={bike.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4 text-center">{bike.image}</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{bike.name}</h2>
              <p className="text-2xl font-bold text-gray-900 mb-4">${bike.price}</p>
              <button
                onClick={() => addToCart(bike.id)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
