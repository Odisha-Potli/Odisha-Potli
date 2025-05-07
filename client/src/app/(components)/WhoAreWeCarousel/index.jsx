"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Next.js Image component

const WhoAreWeShowcase = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [imagesLoaded, setImagesLoaded] = useState({});

  const categories = [
    { id: "nuapatna-silk", name: "Nuapatna Silk" },
    { id: "sambalpuri-silk", name: "Sambalpuri Silk" },
    { id: "mens-fashion", name: "Men's Fashion" },
    { id: "dupatta", name: "Dupatta" },
    { id: "exclusive-cotton", name: "Exclusive Cotton" },
    { id: "yardages", name: "Yardages" },
    { id: "pattachitra", name: "Pattachitra" },
  ];

  // Track image loading status
  const handleImageLoad = (productId) => {
    setImagesLoaded(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  // Preload images in the background
  const preloadImages = (products) => {
    if (!products || !Array.isArray(products)) return;
    
    products.forEach(product => {
      if (product && product.images && product.images[0]) {
        const img = new Image();
        img.src = product.images[0].url;
        img.onload = () => handleImageLoad(product._id);
      }
    });
  };

  useEffect(() => {
    const fetchInitialProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
        
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://your-api-url.com";
        
        const fetchWithTimeout = async (url) => {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);
            
            const response = await axios.get(url, { 
              signal: controller.signal,
              headers: { 'Cache-Control': 'no-cache' }
            });
            
            clearTimeout(timeoutId);
            return response;
          } catch (err) {
            console.error(`Error fetching from ${url}:`, err);
            return { data: { products: [] } };
          }
        };

        const productPromises = categories.map((category) =>
          fetchWithTimeout(`${apiBaseUrl}/api/product/category/${category.id}/?limit=4`)
        );
        
        const responses = await Promise.all(productPromises);
        
        const fetchedProducts = [];
        responses.forEach((res, index) => {
          const categoryId = categories[index].id;
          const products = res.data?.products || [];
          
          products.forEach(product => {
            if (product) {
              product.sourceCategory = categoryId;
              fetchedProducts.push(product);
            }
          });
        });
        
        console.log("Fetched products:", fetchedProducts.length);
        
        if (fetchedProducts.length === 0) {
          const sampleProducts = categories.map(category => ({
            _id: `sample-${category.id}`,
            name: `Sample ${category.name} Product`,
            price: 1999,
            images: [{ url: '/placeholder-product.jpg' }],
            sourceCategory: category.id,
            description: `This is a sample product for ${category.name} category.`,
            isDevelopment: true
          }));
          
          setAllProducts(sampleProducts);
          preloadImages(sampleProducts); // Preload sample images
          console.log("Using sample products due to API issues");
        } else {
          setAllProducts(fetchedProducts);
          preloadImages(fetchedProducts); // Preload fetched images
        }
        
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(`Failed to fetch products: ${err.message}`);
        setIsLoading(false);
      }
    };

    fetchInitialProducts();
  }, []);

  // Filter products based on active category
  const displayProducts = activeCategory === "all" 
    ? allProducts 
    : allProducts.filter((product) => (
        product.sourceCategory === activeCategory || 
        product.category === activeCategory || 
        (product.categories && product.categories.includes(activeCategory)) || 
        (product.categoryId === activeCategory)
      ));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const limitedDisplayProducts = displayProducts.slice(0, 4);

  // Create a modified ProductCard component that handles image loading properly
  const OptimizedProductCard = ({ product }) => (
    <div className="bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-[250px] w-full bg-gray-100">
        {product.images && product.images[0] ? (
          <>
            {/* Show skeleton while image is loading */}
            {!imagesLoaded[product._id] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            )}
            
            {/* Use Next.js Image with priority for important images and proper sizing */}
            <Image
              src={product.images[0].url}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={`object-cover transition-opacity duration-300 ${
                imagesLoaded[product._id] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(product._id)}
              loading="eager" // Load top-fold images eagerly
              quality={80} // Slightly reduced quality for faster loading
            />
          </>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Image not available</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description || `Beautiful ${product.sourceCategory?.replace('-', ' ')} product`}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[#97571c] font-semibold">₹{product.price?.toLocaleString() || 'N/A'}</span>
          <button className="text-sm bg-[#97571c]/10 hover:bg-[#97571c]/20 text-[#97571c] py-1 px-3 rounded-full transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-[#ECE5DD] to-[#ECE5DD] px-4 py-20 sm:px-6 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#744d20] mb-4 tracking-tight">
            Discover Our <span className="text-[#97571c]">Artisanal</span> Collections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Handpicked highlights showcasing Odisha's finest heritage crafts and traditional weaves
          </p>
        </motion.div>

        {/* Category Tabs - Horizontal scrollable on mobile */}
        <div className="mb-10 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 md:space-x-4 justify-start md:justify-center min-w-max pb-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap
                ${activeCategory === "all" 
                  ? "bg-[#97571c] text-white shadow-md" 
                  : "bg-white/80 text-[#744d20] hover:bg-white hover:shadow-sm border border-[#97571c]/20"}`}
            >
              All Collections
            </button>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap
                  ${activeCategory === category.id 
                    ? "bg-[#97571c] text-white shadow-md" 
                    : "bg-white/80 text-[#744d20] hover:bg-white hover:shadow-sm border border-[#97571c]/20"}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-12 h-12 border-4 border-[#97571c]/20 border-t-[#97571c] rounded-full animate-spin"></div>
            <p className="mt-4 text-[#744d20] font-medium">Loading collections...</p>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h3>
            <p className="text-gray-600">
              We're having trouble connecting to our product catalog. Please try again later.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <p className="mt-4 text-xs text-gray-500 max-w-lg mx-auto">{error}</p>
            )}
          </div>
        ) : limitedDisplayProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {limitedDisplayProducts.map((product, index) => (
              <motion.div
                key={product._id}
                variants={itemVariants}
                className="flex justify-center"
              >
                {product ? (
                  <OptimizedProductCard product={product} />
                ) : (
                  <div className="bg-white/50 p-6 rounded-lg shadow-sm border border-gray-200 w-full">
                    <div className="h-48 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="mt-4 h-6 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="mt-2 h-4 bg-gray-200 rounded-md animate-pulse w-2/3"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* View All Collections Button */}
        <div className="mt-12 text-center">
          <motion.a
            href={activeCategory === "all" ? "/Shop" : `/Shop/category/${activeCategory}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-6 py-3 bg-[#97571c] text-white font-medium rounded-md shadow-md hover:bg-[#744d20] transition-all duration-300"
          >
            View {activeCategory === "all" ? "All Collections" : `More ${categories.find(c => c.id === activeCategory)?.name || ''}`}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeShowcase;