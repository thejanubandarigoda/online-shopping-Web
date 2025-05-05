"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// Sample products data
const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 120,
    description: "High-quality premium headphones with noise cancellation. Experience crystal clear sound and deep bass with these comfortable over-ear headphones. Perfect for music lovers and professionals.",
    features: [
      "Active Noise Cancellation",
      "Bluetooth 5.0",
      "40-hour battery life",
      "Built-in microphone",
      "Foldable design"
    ],
    colors: ["Black", "White", "Blue"],
    stock: 25
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    category: "Clothing",
    rating: 4.2,
    reviews: 85,
    description: "Comfortable and stylish casual t-shirt made from 100% premium cotton. Perfect for everyday wear with a modern fit and soft texture.",
    features: [
      "100% premium cotton",
      "Pre-shrunk fabric",
      "Reinforced stitching",
      "Machine washable",
      "Eco-friendly dyes"
    ],
    colors: ["Black", "White", "Gray", "Navy", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 40
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.8,
    reviews: 210,
    description: "Advanced smartwatch with health monitoring features, GPS, and a bright touchscreen display. Track your fitness goals and stay connected with notifications.",
    features: [
      "Heart rate monitor",
      "Sleep tracking",
      "GPS functionality",
      "Water resistant to 50m",
      "7-day battery life",
      "Smartphone notifications"
    ],
    colors: ["Black", "Silver", "Rose Gold"],
    stock: 15
  },
  {
    id: 4,
    name: "Premium Coffee Maker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1570288685919-f7305163d0e3?q=80&w=1000&auto=format&fit=crop",
    category: "Home & Kitchen",
    rating: 4.3,
    reviews: 65,
    description: "High-quality coffee maker with programmable settings and a thermal carafe to keep your coffee hot for hours. Perfect for coffee enthusiasts who appreciate a good brew.",
    features: [
      "12-cup capacity",
      "Programmable timer",
      "Thermal carafe",
      "Built-in water filter",
      "Auto shut-off",
      "Brew strength control"
    ],
    colors: ["Stainless Steel", "Black"],
    stock: 30
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    category: "Clothing",
    rating: 4.6,
    reviews: 178,
    description: "Lightweight and responsive running shoes designed for maximum comfort and performance. Breathable mesh upper and cushioned sole make these perfect for runners of all levels.",
    features: [
      "Breathable mesh upper",
      "Responsive cushioning",
      "Durable rubber outsole",
      "Reflective details for visibility",
      "Removable insole"
    ],
    colors: ["Black/Red", "Blue/White", "Gray/Yellow"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    stock: 20
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.4,
    reviews: 132,
    description: "True wireless earbuds with impressive sound quality and comfortable fit. Includes charging case for extended battery life on the go.",
    features: [
      "True wireless design",
      "Touch controls",
      "20-hour total battery life with case",
      "Water and sweat resistant",
      "Built-in microphones for calls"
    ],
    colors: ["Black", "White"],
    stock: 35
  },
  {
    id: 7,
    name: "Leather Wallet",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
    rating: 4.1,
    reviews: 45,
    description: "Handcrafted genuine leather wallet with multiple card slots and a sleek design. Perfect blend of style and functionality for everyday use.",
    features: [
      "Genuine leather",
      "8 card slots",
      "2 bill compartments",
      "RFID blocking technology",
      "Slim profile design"
    ],
    colors: ["Brown", "Black", "Tan"],
    stock: 18
  },
  {
    id: 8,
    name: "Blender",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1000&auto=format&fit=crop",
    category: "Home & Kitchen",
    rating: 4.2,
    reviews: 87,
    description: "Powerful blender with multiple speed settings for smoothies, soups, and more. Durable blades and strong motor make quick work of even tough ingredients.",
    features: [
      "700-watt motor",
      "5 speed settings",
      "48 oz glass jar",
      "Stainless steel blades",
      "Pulse function"
    ],
    colors: ["White", "Black", "Red"],
    stock: 22
  }
];

// Related products (simplified)
const relatedProducts = [
  {
    id: 3,
    name: "Smart Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.8
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.4
  },
  {
    id: 1,
    name: "Premium Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.5
  }
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  
  const product = products.find(p => p.id === productId);
  
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors ? product.colors[0] : "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[0] : "");
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Product Not Found</h1>
          <p className="mt-4 text-lg text-gray-500">The product you're looking for doesn't exist or has been removed.</p>
          <div className="mt-6">
            <Link href="/products" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
              Return to Products <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-gray-500">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link href="/products" className="ml-2 text-gray-400 hover:text-gray-500">
                Products
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link href={`/categories/${product.category}`} className="ml-2 text-gray-400 hover:text-gray-500">
                {product.category}
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <span className="ml-2 text-gray-500" aria-current="page">
                {product.name}
              </span>
            </li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product image */}
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gray-100 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${product.price}</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 ${
                        product.rating > rating ? 'text-yellow-400' : 'text-gray-200'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-500">
                  {product.rating} out of 5 stars ({product.reviews} reviews)
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>

            {/* Colors */}
            {product.colors && (
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="mt-2">
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${
                          selectedColor === color ? 'ring-2 ring-indigo-500' : ''
                        }`}
                        onClick={() => setSelectedColor(color)}
                      >
                        <span className="sr-only">{color}</span>
                        <span
                          className={`h-8 w-8 rounded-full border border-black border-opacity-10 ${
                            color.toLowerCase() === 'white' ? 'bg-white' :
                            color.toLowerCase() === 'black' ? 'bg-gray-900' :
                            color.toLowerCase() === 'gray' ? 'bg-gray-400' :
                            color.toLowerCase() === 'red' ? 'bg-red-500' :
                            color.toLowerCase() === 'blue' ? 'bg-blue-500' :
                            color.toLowerCase() === 'navy' ? 'bg-blue-900' :
                            color.toLowerCase() === 'tan' ? 'bg-yellow-700' :
                            color.toLowerCase() === 'brown' ? 'bg-amber-800' :
                            color.toLowerCase() === 'silver' ? 'bg-gray-300' :
                            color.toLowerCase() === 'rose gold' ? 'bg-pink-200' :
                            'bg-gray-200'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <Link href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </Link>
                </div>
                <div className="mt-2">
                  <div className="grid grid-cols-4 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase focus:outline-none ${
                          selectedSize === size
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                            : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              <div className="mt-2 flex items-center border border-gray-300 rounded-md">
                <button
                  type="button"
                  className="p-2 text-gray-500 hover:text-gray-600"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <input
                  type="text"
                  className="w-12 text-center border-none focus:outline-none focus:ring-0 text-gray-900"
                  value={quantity}
                  readOnly
                />
                <button
                  type="button"
                  className="p-2 text-gray-500 hover:text-gray-600"
                  onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500">{product.stock} in stock</p>
            </div>

            {/* Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Product features */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Features</h2>
          <div className="mt-4 prose prose-sm text-gray-500">
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
          <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/products/${relatedProduct.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {relatedProduct.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{relatedProduct.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 