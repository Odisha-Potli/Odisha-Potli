"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import axios from "axios";
import { motion } from "framer-motion";

const WhoAreWeShowcase = () => {
  const [productsByCategory, setProductsByCategory] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Fallback data in case the API fails
  const fallbackProductsByCategory = {
    "nuapatna-silk": [
      {
        _id: "fallback1",
        name: "Nuapatna Silk Saree",
        price: 12500,
        discount: 10,
        images: ["/images/fallback/product1.jpg"],
        categories: ["nuapatna-silk"],
        rating: 4.8,
        stock: 12
      }
    ],
    "sambalpuri-silk": [
      {
        _id: "fallback2",
        name: "Sambalpuri Ikat Silk",
        price: 15000,
        discount: 5,
        images: ["/images/fallback/product2.jpg"],
        categories: ["sambalpuri-silk"],
        rating: 4.9,
        stock: 8
      }
    ],
    "mens-fashion": [
      {
        _id: "fallback3",
        name: "Handwoven Tussar Kurta",
        price: 3500,
        discount: 0,
        images: ["/images/fallback/product3.jpg"],
        categories: ["mens-fashion"],
        rating: 4.7,
        stock: 15
      }
    ],
    "dupatta": [
      {
        _id: "fallback4",
        name: "Tussar Gicha Dupatta",
        price: 2799,
        discount: 12,
        images: ["/images/fallback/product4.jpg"],
        categories: ["dupatta"],
        rating: 4.6,
        stock: 20
      }
    ],
    "exclusive-cotton": [
      {
        _id: "fallback5",
        name: "Exclusive Handloom Cotton",
        price: 4200,
        discount: 8,
        images: ["/images/fallback/product5.jpg"],
        categories: ["exclusive-cotton"],
        rating: 4.5,
        stock: 10
      }
    ],
    "yardages": [
      {
        _id: "fallback6",
        name: "Traditional Ikat Yardage",
        price: 1800,
        discount: 0,
        images: ["/images/fallback/product6.jpg"],
        categories: ["yardages"],
        rating: 4.7,
        stock: 25
      }
    ],
    "pattachitra": [
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
    ]
  };

  const categories = [
    { id: "nuapatna-silk", name: "Nuapatna Silk" },
    { id: "sambalpuri-silk", name: "Sambalpuri Silk" },
    { id: "mens-fashion", name: "Men's Fashion" },
    // { id: "dupatta", name: "Dupatta" },
    // { id: "exclusive-cotton", name: "Exclusive Cotton" },
    // { id: "yardages", name: "Yardages" },
    // { id: "pattachitra", name: "Pattachitra" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Add timeout to the API calls to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const categoryData = {};
        
        // Fetch products for each category
        for (const category of categories) {
          try {
            const response = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/api/product/category/${category.id}/?limit=4`,
              { signal: controller.signal }
            );
            
            categoryData[category.id] = response.data.products || [];
            
            // If no products were returned for this category, use fallback
            if (!categoryData[category.id] || categoryData[category.id].length === 0) {
              categoryData[category.id] = fallbackProductsByCategory[category.id] || [];
            }
          } catch (err) {
            console.error(`Failed to fetch products for ${category.id}:`, err);
            categoryData[category.id] = fallbackProductsByCategory[category.id] || [];
          }
        }
        
        clearTimeout(timeoutId);
        setProductsByCategory(categoryData);
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to fetch products");
        // Use fallback data when API fails
        setProductsByCategory(fallbackProductsByCategory);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleRetry = () => {
    setIsLoading(true);
    setError(null);
    setProductsByCategory({});
    // Add a small delay before retrying
    setTimeout(() => {
      // Use fallback products directly for now
      setProductsByCategory(fallbackProductsByCategory);
      setIsLoading(false);
    }, 1000);
  };

  // Get all products for "All Collections" view
  const allProducts = React.useMemo(() => {
    // Safely collect all products and filter out any undefined items
    const products = [];
    Object.values(productsByCategory).forEach(categoryProducts => {
      if (Array.isArray(categoryProducts)) {
        categoryProducts.forEach(product => {
          if (product && product._id) {
            products.push(product);
          }
        });
      }
    });
    return products;
  }, [productsByCategory]);

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
  
  // Safely get products by category
  const renderProducts = () => {
    if (activeCategory === "all") {
      return allProducts;
    }
    
    const categoryProducts = productsByCategory[activeCategory];
    // Return empty array if no products found for this category
    return Array.isArray(categoryProducts) ? categoryProducts : [];
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
        ) : renderProducts().length === 0 ? (
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
          // Display products with error handling
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {renderProducts().map((product) => {
              // Skip rendering if product is invalid
              if (!product || !product._id) return null;
              
              return (
                <motion.div
                  key={product._id}
                  variants={itemVariants}
                  className="flex justify-center"
                >
                  <ProductCard product={product} />
                </motion.div>
              );
            })}
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
      </div>
    </section>
  );
};

export default WhoAreWeShowcase;