"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    quantity: 1,
    color: "Black"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    quantity: 1,
    color: "Black"
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  // Tax calculation (assuming 10% tax rate)
  const taxRate = 0.1;
  const tax = subtotal * taxRate;
  
  // Shipping cost (free shipping for orders over $100)
  const shippingCost = subtotal > 100 ? 0 : 10;
  
  // Total cost
  const total = subtotal + tax + shippingCost;
  
  // Update quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Shopping Cart</h1>
        
        <div className="mt-12">
          {cartItems.length > 0 ? (
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
              <div className="lg:col-span-7">
                <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex py-6 sm:py-10">
                      <div className="flex-shrink-0">
                        <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-md overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={128}
                            height={128}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>

                      <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">
                              <Link href={`/products/${item.id}`} className="hover:text-indigo-600">
                                {item.name}
                              </Link>
                            </h4>
                            <p className="mt-1 text-sm text-gray-500">Color: {item.color}</p>
                            <p className="mt-1 text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                          </div>
                          <button
                            type="button"
                            className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </button>
                        </div>

                        <div className="mt-4 flex-1 flex items-end justify-between">
                          <div className="flex items-center border rounded-md">
                            <button
                              type="button"
                              className="p-2 text-gray-500 hover:text-gray-600"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                              </svg>
                            </button>
                            <span className="px-4 text-gray-900">{item.quantity}</span>
                            <button
                              type="button"
                              className="p-2 text-gray-500 hover:text-gray-600"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </button>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href="/products"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    <span aria-hidden="true">&larr;</span> Continue Shopping
                  </Link>
                </div>
              </div>

              <div className="mt-16 lg:mt-0 lg:col-span-5">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">Subtotal</p>
                      <p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">Tax (10%)</p>
                      <p className="text-sm font-medium text-gray-900">${tax.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">Shipping</p>
                      <p className="text-sm font-medium text-gray-900">
                        {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
                      </p>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                      <p className="text-base font-medium text-gray-900">Order Total</p>
                      <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Checkout
                    </button>
                  </div>

                  <div className="mt-6 text-sm text-center text-gray-500">
                    <p>or</p>
                    <Link href="/checkout/express" className="text-indigo-600 font-medium hover:text-indigo-500">
                      Express Checkout <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
                  <h3 className="text-sm font-medium text-gray-900">Accepted Payment Methods</h3>
                  <div className="mt-4 flex justify-between space-x-3">
                    <div className="flex items-center justify-center w-16 h-10 border border-gray-200 rounded-md">
                      <span className="text-xs font-medium text-gray-600">Visa</span>
                    </div>
                    <div className="flex items-center justify-center w-16 h-10 border border-gray-200 rounded-md">
                      <span className="text-xs font-medium text-gray-600">Mastercard</span>
                    </div>
                    <div className="flex items-center justify-center w-16 h-10 border border-gray-200 rounded-md">
                      <span className="text-xs font-medium text-gray-600">PayPal</span>
                    </div>
                    <div className="flex items-center justify-center w-16 h-10 border border-gray-200 rounded-md">
                      <span className="text-xs font-medium text-gray-600">Apple Pay</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <h2 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h2>
              <p className="mt-1 text-sm text-gray-500">Looks like you haven't added any items to your cart yet.</p>
              <div className="mt-6">
                <Link
                  href="/products"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Start Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 