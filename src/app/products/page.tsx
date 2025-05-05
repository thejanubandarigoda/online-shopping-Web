"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Sample products data
const allProducts = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 120
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    category: "Clothing",
    rating: 4.2,
    reviews: 85
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.8,
    reviews: 210
  },
  {
    id: 4,
    name: "Premium Coffee Maker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1570288685919-f7305163d0e3?q=80&w=1000&auto=format&fit=crop",
    category: "Home & Kitchen",
    rating: 4.3,
    reviews: 65
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    category: "Clothing",
    rating: 4.6,
    reviews: 178
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    rating: 4.4,
    reviews: 132
  },
  {
    id: 7,
    name: "Leather Wallet",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
    rating: 4.1,
    reviews: 45
  },
  {
    id: 8,
    name: "Blender",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1000&auto=format&fit=crop",
    category: "Home & Kitchen",
    rating: 4.2,
    reviews: 87
  }
];

// Available categories
const availableCategories = [
  "All",
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Accessories"
];

// Sort options
const sortOptions = [
  { name: "Most Popular", value: "popular" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
  { name: "Rating: High to Low", value: "rating" }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [priceRange, setPriceRange] = useState(200);

  // Filter products by category and price
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price <= priceRange;
    return matchesCategory && matchesPrice;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "popular":
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-24 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Products</h1>
          <p className="mt-4 text-base text-gray-500">Browse our collection of high-quality products.</p>
        </div>

        <div className="pb-24 lg:grid lg:grid-cols-4 lg:gap-x-8">
          {/* Filters sidebar */}
          <div className="hidden lg:block bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Categories</h2>
            <div className="mt-4 space-y-2">
              {availableCategories.map((category, index) => (
                <div key={index} className="flex items-center">
                  <input
                    id={`category-${index}`}
                    type="radio"
                    name="category"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                  />
                  <label htmlFor={`category-${index}`} className="ml-3 text-sm text-gray-600">
                    {category}
                  </label>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h2 className="text-lg font-medium text-gray-900">Price Range</h2>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">$0</p>
                  <p className="text-sm text-gray-500">${priceRange}</p>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="10"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                />
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="mt-6 lg:mt-0 lg:col-span-3">
            {/* Sort dropdown */}
            <div className="flex items-center justify-between pb-6">
              <p className="text-sm text-gray-500">
                Showing <span className="font-medium">{sortedProducts.length}</span> products
              </p>
              <div className="flex items-center">
                <label htmlFor="sort-by" className="text-sm text-gray-700 mr-2">Sort by:</label>
                <select
                  id="sort-by"
                  name="sort-by"
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile filter dialog */}
            <div className="flex justify-between items-center mb-4 lg:hidden">
              <div>
                <label htmlFor="mobile-category" className="text-sm text-gray-700 mr-2">Category:</label>
                <select
                  id="mobile-category"
                  name="mobile-category"
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {availableCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="mobile-price" className="text-sm text-gray-700 mr-2">Max Price: ${priceRange}</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  step="10"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                />
              </div>
            </div>

            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-square rounded-md overflow-hidden group-hover:opacity-75">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link href={`/products/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                        <div className="mt-1 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <svg
                              key={rating}
                              className={`h-4 w-4 flex-shrink-0 ${
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
                          <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-900">${product.price}</p>
                    </div>
                    <div className="mt-4">
                      <button className="w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.5 10.5L4.5 15.5M15.5 9.5L9.5 15.5M15.5 15.5L9.5 9.5" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
                <p className="mt-1 text-sm text-gray-500">Try adjusting your filters to find what you're looking for.</p>
                <div className="mt-6">
                  <button 
                    type="button" 
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      setSelectedCategory("All");
                      setPriceRange(200);
                    }}
                  >
                    Reset filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 