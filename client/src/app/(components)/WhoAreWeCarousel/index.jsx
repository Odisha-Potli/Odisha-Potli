"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import axios from "axios";
import { motion } from "framer-motion";

const WhoAreWeShowcase = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

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
    const fetchInitialProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch multiple products per category for better showcase
        const productPromises = categories.map((category) =>
          axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/product/category/${category.id}/?limit=4`
          )
        );
        const responses = await Promise.all(productPromises);
        
        // Combine all products and mark them with their category
        const fetchedProducts = [];
        responses.forEach((res, index) => {
          const categoryId = categories[index].id;
          const products = res.data.products || [];
          
          // Mark each product with its source category to make filtering easier
          products.forEach(product => {
            // Ensure product.sourceCategory exists
            product.sourceCategory = categoryId;
            fetchedProducts.push(product);
          });
        });
        
        setAllProducts(fetchedProducts.filter(Boolean));
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to fetch products");
        setIsLoading(false);
      }
    };

    fetchInitialProducts();
  }, []);

  // Filter products based on active category
  const displayProducts = activeCategory === "all" 
    ? allProducts 
    : allProducts.filter((product) => {
        // Check multiple ways a product could match a category
        return (
          product.sourceCategory === activeCategory || // From our added property
          product.category === activeCategory || // Direct match
          product.categories?.includes(activeCategory) || // In categories array
          (product.categoryId === activeCategory) // By ID
        );
      });

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

  // Limit displayed products to 4 for showcase purposes
  const limitedDisplayProducts = displayProducts.slice(0, 4);

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
            <p className="text-gray-600">{error}</p>
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
                <ProductCard product={product} />
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