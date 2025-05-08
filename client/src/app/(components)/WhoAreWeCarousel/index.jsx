"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import axios from "axios";
import { motion } from "framer-motion";

const WhoAreWeShowcase = () => {
  const [products, setProducts] = useState([]);
  const [silkMensProducts, setSilkMensProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSilkMens, setIsLoadingSilkMens] = useState(true);
  const [error, setError] = useState(null);
  const [errorSilkMens, setErrorSilkMens] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Fallback data in case the API fails
  const fallbackProducts = [
    {
      _id: "fallback1",
      name: "Nuapatna Silk Saree",
      price: 12500,
      discount: 10,
      images: ["/images/fallback/product1.jpg"],
      categories: ["nuapatna-silk"],
      rating: 4.8,
      stock: 12
    },
    {
      _id: "fallback2",
      name: "Sambalpuri Ikat Silk",
      price: 15000,
      discount: 5,
      images: ["/images/fallback/product2.jpg"],
      categories: ["sambalpuri-silk"],
      rating: 4.9,
      stock: 8
    },
    {
      _id: "fallback3",
      name: "Handwoven Tussar Kurta",
      price: 3500,
      discount: 0,
      images: ["/images/fallback/product3.jpg"],
      categories: ["mens-fashion"],
      rating: 4.7,
      stock: 15
    },
    {
      _id: "fallback4",
      name: "Hand Painted Dupatta",
      price: 2800,
      discount: 12,
      images: ["/images/fallback/product4.jpg"],
      categories: ["dupatta"],
      rating: 4.6,
      stock: 20
    },
    {
      _id: "fallback5",
      name: "Exclusive Handloom Cotton",
      price: 4200,
      discount: 8,
      images: ["/images/fallback/product5.jpg"],
      categories: ["exclusive-cotton"],
      rating: 4.5,
      stock: 10
    },
    {
      _id: "fallback6",
      name: "Traditional Ikat Yardage",
      price: 1800,
      discount: 0,
      images: ["/images/fallback/product6.jpg"],
      categories: ["yardages"],
      rating: 4.7,
      stock: 25
    },
    {
      _id: "fallback7",
      name: "Pattachitra Wall Art",
      price: 5500,
      discount: 5,
      images: ["/images/fallback/product7.jpg"],
      categories: ["pattachitra"],
      rating: 4.9,
      stock: 5
    }
  ];

  // Fallback data for silk men's collection
  const fallbackSilkMensProducts = [
    {
      _id: "silk-mens-1",
      name: "Sambalpuri Silk Kurta",
      price: 5600,
      discount: 8,
      images: ["/images/fallback/silk-mens-1.jpg"],
      categories: ["silk-mens-collection", "sambalpuri-silk"],
      rating: 4.8,
      stock: 10
    },
    {
      _id: "silk-mens-2",
      name: "Tussar Silk Nehru Jacket",
      price: 7800,
      discount: 5,
      images: ["/images/fallback/silk-mens-2.jpg"],
      categories: ["silk-mens-collection", "tussar-silk"],
      rating: 4.9,
      stock: 7
    },
    {
      _id: "silk-mens-3",
      name: "Pure Silk Dhoti Set",
      price: 6200,
      discount: 0,
      images: ["/images/fallback/silk-mens-3.jpg"],
      categories: ["silk-mens-collection"],
      rating: 4.7,
      stock: 12
    },
    {
      _id: "silk-mens-4",
      name: "Bomkai Silk Stole",
      price: 3200,
      discount: 10,
      images: ["/images/fallback/silk-mens-4.jpg"],
      categories: ["silk-mens-collection", "bomkai-silk"],
      rating: 4.6,
      stock: 15
    }
  ];

  const categories = [
    { id: "nuapatna-silk", name: "Nuapatna Silk" },
    { id: "sambalpuri-silk", name: "Sambalpuri Silk" },
    { id: "mens-fashion", name: "Men's Fashion" },
    { id: "dupatta", name: "Dupatta" },
    { id: "exclusive-cotton", name: "Exclusive Cotton" },
    { id: "yardages", name: "Yardages" },
    { id: "pattachitra", name: "Pattachitra" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Add timeout to the API calls to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const productPromises = categories.map((category) =>
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/product/category/${category.id}/?limit=1`,
            { signal: controller.signal }
          )
        );
        
        const responses = await Promise.all(productPromises);
        clearTimeout(timeoutId);
        
        const fetchedProducts = responses.map((res) => res.data.products?.[0] || null);
        const validProducts = fetchedProducts.filter(Boolean);
        
        if (validProducts.length === 0) {
          // If no products were returned, use fallback data
          setProducts(fallbackProducts);
        } else {
          setProducts(validProducts);
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to fetch products");
        // Use fallback data when API fails
        setProducts(fallbackProducts);
        setIsLoading(false);
      }
    };

    const fetchSilkMensProducts = async () => {
      setIsLoadingSilkMens(true);
      setErrorSilkMens(null);
      try {
        // Add timeout to the API call to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/product/category/silk-mens-collection/?limit=4`,
          { signal: controller.signal }
        );
        
        clearTimeout(timeoutId);
        
        const fetchedProducts = response.data.products || [];
        
        if (fetchedProducts.length === 0) {
          // If no products were returned, use fallback data
          setSilkMensProducts(fallbackSilkMensProducts);
        } else {
          setSilkMensProducts(fetchedProducts);
        }
        setIsLoadingSilkMens(false);
      } catch (err) {
        console.error("Failed to fetch silk men's products:", err);
        setErrorSilkMens("Failed to fetch silk men's products");
        // Use fallback data when API fails
        setSilkMensProducts(fallbackSilkMensProducts);
        setIsLoadingSilkMens(false);
      }
    };

    fetchProducts();
    fetchSilkMensProducts();
  }, []);

  const handleRetry = () => {
    setIsLoading(true);
    setError(null);
    setProducts([]);
    // Add a small delay before retrying
    setTimeout(() => {
      // Just use fallback products directly for now
      setProducts(fallbackProducts);
      setIsLoading(false);
    }, 1000);
  };

  const handleRetrySilkMens = () => {
    setIsLoadingSilkMens(true);
    setErrorSilkMens(null);
    setSilkMensProducts([]);
    // Add a small delay before retrying
    setTimeout(() => {
      // Just use fallback products directly for now
      setSilkMensProducts(fallbackSilkMensProducts);
      setIsLoadingSilkMens(false);
    }, 1000);
  };

  // Filter products based on active category
  const displayProducts = activeCategory === "all" 
    ? products 
    : products.filter((product) => 
        product.categories?.includes(activeCategory) || 
        product.category === activeCategory
      );

  // Animation variants
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
            <p className="text-gray-600 mb-6">We're having trouble connecting to our product catalog.</p>
            <button 
              onClick={handleRetry}
              className="px-6 py-2 bg-[#97571c] text-white font-medium rounded-md shadow-md hover:bg-[#744d20] transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        ) : displayProducts.length === 0 ? (
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {displayProducts.map((product, index) => (
              <motion.div
                key={product._id}
                variants={itemVariants}
                className="flex justify-center"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* View All Collections Button */}
        <div className="mt-12 text-center">
          <motion.a
            href="/Shop"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-6 py-3 bg-[#97571c] text-white font-medium rounded-md shadow-md hover:bg-[#744d20] transition-all duration-300"
          >
            View All Collections
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </div>

        {/* Silk Men's Collection Section */}
        <div className="mt-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#744d20] mb-4 tracking-tight">
              Exclusive <span className="text-[#97571c]">Silk Men's</span> Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Luxurious silk garments and accessories crafted specifically for the modern gentleman
            </p>
          </motion.div>

          {isLoadingSilkMens ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-12 h-12 border-4 border-[#97571c]/20 border-t-[#97571c] rounded-full animate-spin"></div>
              <p className="mt-4 text-[#744d20] font-medium">Loading silk men's collection...</p>
            </div>
          ) : errorSilkMens ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h3>
              <p className="text-gray-600 mb-6">We're having trouble loading our silk men's collection.</p>
              <button 
                onClick={handleRetrySilkMens}
                className="px-6 py-2 bg-[#97571c] text-white font-medium rounded-md shadow-md hover:bg-[#744d20] transition-all duration-300"
              >
                Try Again
              </button>
            </div>
          ) : silkMensProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No silk men's products found</h3>
              <p className="text-gray-600">Please check back later for our new collection</p>
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {silkMensProducts.map((product) => (
                <motion.div
                  key={product._id}
                  variants={itemVariants}
                  className="flex justify-center"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* View Silk Men's Collection Button */}
          <div className="mt-10 text-center">
            <motion.a
              href="/Shop/silk-mens-collection"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#97571c] text-white font-medium rounded-md shadow-md hover:bg-[#744d20] transition-all duration-300"
            >
              View All Silk Men's Products
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWeShowcase;