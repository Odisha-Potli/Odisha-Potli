"use client";

import React, { useState } from "react";
import {
  Star,
  Star as StarFilled,
  ShoppingCart,
  Heart,
  Heart as HeartFilled,
  Eye
} from "lucide-react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCurrency } from "../../context/CurrencyContext";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { currency, exchangeRates } = useCurrency();
  const { user } = useAuth();
  const [currentStock, setCurrentStock] = useState(product.stock);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const isWishlistPage = pathname === "/Wishlist";

  const isInWishlist = wishlist.some((item) => item._id === product._id);

  const convertPrice = (price) => {
    if (!price) return price;
    if (Object.keys(exchangeRates).length === 1 && exchangeRates.INR === 1) {
      return price;
    }
    if (!exchangeRates[currency.code]) return price;
    const converted = (price * exchangeRates[currency.code]).toFixed(2);
    return converted;
  };

  const formatPrice = (price) => {
    if (!price) return null;
    const effectiveCurrencyCode =
      Object.keys(exchangeRates).length === 1 && exchangeRates.INR === 1
        ? "INR"
        : currency.code;
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: effectiveCurrencyCode,
      currencyDisplay: "symbol",
    }).format(price);
  };

  const calculateDiscount = () => {
    if (!product.price || !product.cutPrice) return null;
    const discount = ((product.cutPrice - product.price) / product.cutPrice) * 100;
    return Math.round(discount);
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      toast.error("Please log in to add items to your cart!", {
        duration: 2000,
        position: "top-right",
        style: {
          background: "#fff",
          color: "#333",
          border: "1px solid #d99527",
        },
      });
      return;
    }
    
    if (currentStock > 0) {
      await addToCart(product._id);
      setCurrentStock((prevStock) => prevStock - 1);
      toast.success(`${product.name} added to cart!`, {
        duration: 2000,
        position: "top-right",
        style: {
          background: "#fff",
          color: "#333",
          border: "1px solid #d99527",
        },
      });
    }
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      toast.error("Please log in to manage your wishlist!", {
        duration: 2000,
        position: "top-right",
        style: {
          background: "#fff",
          color: "#333",
          border: "1px solid #d99527",
        },
      });
      return;
    }
    
    if (isInWishlist) {
      removeFromWishlist(product._id);
      if (isWishlistPage) {
        setIsVisible(false);
      }
      toast.success(`${product.name} removed from wishlist!`, {
        duration: 2000,
        position: "top-right",
        style: {
          background: "#fff",
          color: "#333",
          border: "1px solid #d99527",
        },
      });
    } else {
      addToWishlist(product._id);
      toast.success(`${product.name} added to wishlist!`, {
        duration: 2000,
        position: "top-right",
        style: {
          background: "#fff",
          color: "#333",
          border: "1px solid #d99527",
        },
      });
    }
  };

  if (!isVisible && isWishlistPage) return null;

  const discount = calculateDiscount();

  return (
    <div 
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/Shop/product/${product._id}`}>
        <motion.div
         className="bg-[#ECE5DD] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"

          whileHover={{ y: -5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Product Image Container - Fixed aspect ratio */}
          <div className="relative w-full pb-[125%] overflow-hidden bg-[#f9f5f0]">
            {/* Product Image */}
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[0]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500"
                style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
              />
            ) : (
              <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            )}

            {/* Out of Stock Overlay */}
            {currentStock === 0 && (
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center">
                <span className="bg-[#97571c] text-white text-sm px-4 py-2 rounded-md shadow-md uppercase tracking-wider font-medium">
                  Out of Stock
                </span>
              </div>
            )}

            {/* Discount Tag */}
            {discount && discount > 0 && (
              <div className="absolute top-3 left-3">
                <span className="bg-[#97571c] text-white text-xs font-medium px-2 py-1 rounded shadow-sm">
                  {discount}% OFF
                </span>
              </div>
            )}

            {/* Wishlist Button */}
            <motion.button
              onClick={handleWishlistToggle}
              className="absolute top-3 right-3 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-sm z-0"
              whileTap={{ scale: 0.9 }}
            >
              {isInWishlist ? (
                <HeartFilled
                  size={20}
                  className="text-red-500 fill-red-500"
                />
              ) : (
                <Heart
                  size={20}
                  className="text-gray-600"
                />
              )}
            </motion.button>

            {/* Quick View Button - Show on hover */}
            <div 
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Quick view logic (could be modal)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 text-[#97571c] text-xs font-medium px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1"
              >
                <Eye size={16} />
                Quick View
              </motion.button> */}
            </div>
          </div>

          {/* Product Details */}
          <div className="p-4 flex flex-col flex-grow">
            {/* Category */}
            <p className="text-xs text-[#97571c] mb-1 uppercase tracking-wider font-medium">
              {typeof product.category === 'string' 
                ? product.category.replace(/-/g, ' ') 
                : "Odisha-Potli"}
            </p>
            
            {/* Product Name */}
            <h3 className="text-gray-800 font-medium line-clamp-2 mb-2 text-sm sm:text-base h-10">
              {product.name}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  i < Math.round(product.ratings?.average || 0) ? (
                    <StarFilled key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                  ) : (
                    <Star key={i} size={14} className="text-gray-300" />
                  )
                ))}
              </div>
              <span className="ml-2 text-xs text-gray-500">
                {product.ratings?.count ? `(${product.ratings.count})` : "(0)"}
              </span>
            </div>
            
            {/* Price */}
            <div className="flex items-baseline gap-2 mt-auto">
              <span className="text-[#744d20] font-semibold text-base">
                {formatPrice(convertPrice(product.price))}
              </span>
              {product.cutPrice && (
                <span className="text-gray-400 text-xs line-through">
                  {formatPrice(convertPrice(product.cutPrice))}
                </span>
              )}
            </div>
            
            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              disabled={currentStock === 0}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-3 w-full px-3 py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                currentStock === 0
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-[#97571c] text-white hover:bg-[#744d20]"
              }`}
            >
              <ShoppingCart size={16} />
              {currentStock === 0 ? "Out of Stock" : "Add to Cart"}
            </motion.button>
          </div>
        </motion.div>
      </Link>
    </div>
  );
}