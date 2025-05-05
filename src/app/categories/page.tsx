import Link from "next/link";
import Image from "next/image";

// Sample categories data
const categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Discover the latest gadgets and tech innovations for work and play.",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    productCount: 42
  },
  {
    id: 2,
    name: "Clothing",
    description: "Stylish apparel for men, women, and children to suit every occasion.",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    productCount: 67
  },
  {
    id: 3,
    name: "Home & Kitchen",
    description: "Essential items and stylish decor to transform your living spaces.",
    image: "https://images.unsplash.com/photo-1556911220-bec6e7353275?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    productCount: 38
  },
  {
    id: 4,
    name: "Beauty",
    description: "Premium cosmetics and skincare products for your self-care routine.",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    productCount: 24
  },
  {
    id: 5,
    name: "Sports & Outdoors",
    description: "Gear up for your favorite activities with quality sports equipment.",
    image: "https://images.unsplash.com/photo-1581509025548-9780460fe5fb?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    productCount: 31
  },
  {
    id: 6,
    name: "Books",
    description: "Explore a vast collection of books across genres to feed your mind.",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    productCount: 53
  },
  {
    id: 7,
    name: "Toys & Games",
    description: "Fun and educational toys and games for children of all ages.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    productCount: 29
  },
  {
    id: 8,
    name: "Accessories",
    description: "Complete your look with our range of stylish and functional accessories.",
    image: "https://images.unsplash.com/photo-1625591342274-013866598282?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    productCount: 45
  }
];

export default function CategoriesPage() {
  // Separate featured and non-featured categories
  const featuredCategories = categories.filter(category => category.featured);
  const otherCategories = categories.filter(category => !category.featured);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Categories</h1>
        <p className="mt-4 max-w-xl text-sm text-gray-700">
          Browse our wide selection of products across various categories.
        </p>

        {/* Featured Categories */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">Featured Categories</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredCategories.map((category) => (
              <div key={category.id} className="group relative">
                <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={320}
                    className="w-full h-full object-center object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">
                      <Link href={`/categories/${category.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {category.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">{category.productCount} products</p>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-500">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">All Categories</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {otherCategories.map((category) => (
              <div key={category.id} className="group relative">
                <div className="relative w-full h-60 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={300}
                    height={240}
                    className="w-full h-full object-center object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-bold text-white">
                      <Link href={`/categories/${category.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {category.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-300">{category.productCount} products</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Browse by collection */}
        <div className="mt-16 bg-gray-50 rounded-lg overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-24 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Browse by Collection</h2>
              <p className="mt-4 text-base text-gray-500">
                Explore our curated collections for special occasions, seasonal trends, and more.
              </p>
              <div className="mt-8">
                <Link
                  href="/collections/new-arrivals"
                  className="inline-block bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  New Arrivals
                </Link>
                <Link
                  href="/collections/trending"
                  className="inline-block ml-4 border border-transparent rounded-md py-3 px-8 font-medium text-indigo-600 bg-white shadow-sm hover:bg-gray-50"
                >
                  Trending Now
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 flex flex-col space-y-4">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1000&auto=format&fit=crop"
                      alt="Summer Collection"
                      width={200}
                      height={200}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop"
                      alt="Office Essentials"
                      width={200}
                      height={200}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="rounded-lg overflow-hidden h-full">
                    <Image
                      src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=1000&auto=format&fit=crop"
                      alt="Tech Innovations"
                      width={300}
                      height={400}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 