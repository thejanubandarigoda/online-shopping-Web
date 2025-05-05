import Image from "next/image";
import Link from "next/link";

// Sample data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    category: "Clothing"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics"
  },
  {
    id: 4,
    name: "Premium Coffee Maker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1570288685919-f7305163d0e3?q=80&w=1000&auto=format&fit=crop",
    category: "Home & Kitchen"
  }
];

// Sample data for categories
const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bec6e7353275?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1000&auto=format&fit=crop"
            alt="Shopping background"
            priority
            fill
            className="object-cover object-center opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">ShopEase</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Discover amazing products at unbeatable prices. Shop with confidence on our secure platform.
          </p>
          <div className="mt-10">
            <Link href="/products" className="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-indigo-700">
              Shop Now
            </Link>
            <Link href="/categories" className="inline-block ml-4 bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-indigo-600 hover:bg-gray-50">
              Browse Categories
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Featured Products</h2>
          <Link href="/products" className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
            View all products <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
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
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shop by Category section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
            <Link href="/categories" className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
              View all categories <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {categories.map((category) => (
              <div key={category.id} className="group relative">
                <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">
                      <Link href={`/categories/${category.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {category.name}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to action section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Join our newsletter</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Sign up for our newsletter to receive the latest updates on new products, exclusive deals, and more.
          </p>
          <form className="mt-8 sm:max-w-md sm:mx-auto sm:flex">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
