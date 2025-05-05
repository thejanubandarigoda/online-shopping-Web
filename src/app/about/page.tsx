import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
            alt="Team working"
            fill
            className="object-cover object-center opacity-25"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About ShopEase</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            We're on a mission to make online shopping simple, convenient, and enjoyable for everyone.
          </p>
        </div>
      </div>

      {/* Our story section */}
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Story</h2>
            <div className="mt-12 flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <p className="text-lg text-gray-500 mb-8">
                  Founded in 2020, ShopEase started with a simple idea: make online shopping easier and more accessible for everyone. What began as a small venture by a group of tech enthusiasts and retail experts has since grown into a trusted online marketplace serving customers worldwide.
                </p>
                <p className="text-lg text-gray-500 mb-8">
                  Our founders noticed that many online shopping platforms were complicated, confusing, and frustrating to use. They set out to create a solution that would prioritize user experience, product quality, and customer satisfaction above all else.
                </p>
                <p className="text-lg text-gray-500">
                  Today, ShopEase offers thousands of products across multiple categories, from electronics and fashion to home goods and more. We work directly with manufacturers and trusted suppliers to ensure that every item in our catalog meets our high standards for quality and value.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1000&auto=format&fit=crop"
                  alt="Our team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              These principles guide every decision we make and every product we sell.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Quality First</h3>
                  <p className="mt-5 text-base text-gray-500">
                    We carefully vet every product in our catalog to ensure it meets our standards for durability, functionality, and value.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Customer-Centric</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Every decision we make is based on improving the experience for our customers, from website design to shipping policies.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Sustainability</h3>
                  <p className="mt-5 text-base text-gray-500">
                    We're committed to reducing our environmental impact through eco-friendly packaging, carbon offset shipping, and sustainable products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Meet the people driving ShopEase's mission forward.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-3">
                <Image
                  className="rounded-lg object-cover shadow-lg"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
                  alt="CEO"
                  width={300}
                  height={300}
                />
              </div>
              <div className="space-y-1 text-lg font-medium leading-6">
                <h3 className="text-gray-900">Michael Chen</h3>
                <p className="text-indigo-600">CEO & Co-founder</p>
              </div>
              <div className="text-base text-gray-500">
                <p>Former retail executive with 15+ years of experience in e-commerce and digital transformation.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-3">
                <Image
                  className="rounded-lg object-cover shadow-lg"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                  alt="CTO"
                  width={300}
                  height={300}
                />
              </div>
              <div className="space-y-1 text-lg font-medium leading-6">
                <h3 className="text-gray-900">Sarah Johnson</h3>
                <p className="text-indigo-600">CTO & Co-founder</p>
              </div>
              <div className="text-base text-gray-500">
                <p>Tech innovator who led development teams at major tech companies before co-founding ShopEase.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-3">
                <Image
                  className="rounded-lg object-cover shadow-lg"
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
                  alt="COO"
                  width={300}
                  height={300}
                />
              </div>
              <div className="space-y-1 text-lg font-medium leading-6">
                <h3 className="text-gray-900">David Rodriguez</h3>
                <p className="text-indigo-600">COO</p>
              </div>
              <div className="text-base text-gray-500">
                <p>Operations expert who oversees our global supply chain and ensures smooth fulfillment for all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Join the ShopEase community</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Start shopping with us today and experience the difference of a platform built with your needs in mind.
          </p>
          <Link
            href="/products"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
} 