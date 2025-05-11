import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
  {
    name: "Okhai \"Grand Marina\" Tie-and-Dye Pure Cotton Black Dress",
    image: "/products/p1.png",
    price: "₹ 5,500.00",
    rating: 4,
    productLink: "https://www.odishapotli.com/Shop/category/dresses/grand-marina"
  },
  {
    name: "Okhai 'Maria' Hand Embroidered Dress",
    image: "/products/p2.png",
    price: "₹ 4,500.00",
    rating: 5,
    productLink: "https://www.odishapotli.com/Shop/category/dresses/maria"
  },
  {
    name: "Okhai 'Lavender Pearl' Mirror Work Halter Neck Dress",
    image: "/products/p3.png",
    price: "₹ 3,200.00",
    rating: 5,
    productLink: "https://www.odishapotli.com/Shop/category/dresses/lavender-pearl"
  },
  {
    name: "Okhai 'Magical Elixir' Hand-Embroidered and Mirrorwork Pure Cotton",
    image: "/products/p4.png",
    price: "₹ 3,500.00",
    rating: 4,
    productLink: "https://www.odishapotli.com/Shop/category/dresses/magical-elixir-1"
  },
  {
    name: "Okhai 'Magical Elixir' Hand-Embroidered and Mirrorwork Pure Cotton",
    image: "/products/p4.png",
    price: "₹ 3,500.00",
    rating: 4,
    productLink: "https://www.odishapotli.com/Shop/category/dresses/magical-elixir-2"
  },
  {
    name: "Okhai 'Magical Elixir' Hand-Embroidered and Mirrorwork Pure Cotton",
    image: "/products/p3.png",
    price: "₹ 3,500.00",
    rating: 4,
    productLink: "https://www.odishapotli.com/Shop/category/dresses/magical-elixir-3"
  },
  {
    name: "Okhai 'Magical Elixir' Hand-Embroidered and Mirrorwork Pure Cotton",
    image: "/products/p4.png",
    price: "₹ 3,500.00",
    rating: 4,
    productLink: "https://www.odishapotli.com/Shop/category/dresses/magical-elixir-4"
  },
  {
    name: "Okhai 'Magical Elixir' Hand-Embroidered and Mirrorwork Pure Cotton",
    image: "/products/p3.png",
    price: "₹ 3,500.00",
    rating: 4,
    productLink: "https://www.odishapotli.com/Shop/category/dresses/magical-elixir-5"
  },
  {
    name: "Okhai 'Magical Elixir' Hand-Embroidered and Mirrorwork Pure Cotton",
    image: "/products/p4.png",
    price: "₹ 3,500.00",
    rating: 4,
    productLink: "https://www.odishapotli.com/Shop/category/dresses/magical-elixir-6"
  },
  {
    name: "Okhai 'Magical Elixir' Hand-Embroidered and Mirrorwork Pure Cotton",
    image: "/products/p4.png",
    price: "₹ 3,500.00",
    rating: 4,
    productLink: "https://www.odishapotli.com/Shop/category/dresses/magical-elixir-7"
  },
];

export default function HandcraftedDresses() {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  const checkScrollPosition = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    // Show left arrow only if scrolled
    setShowLeftArrow(container.scrollLeft > 20);
    
    // Show right arrow only if more content to scroll
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 20
    );
  };
  
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      // Initial check
      checkScrollPosition();
      
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);
  
  const scroll = (direction) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="w-full px-4 py-8 bg-gradient-to-b from-[#ECE5DD] to-[#ECE5DD]">
      <h2 className="text-2xl font-semibold text-center mb-6 text-[#97571c]">
        Handcrafted Saree
      </h2>
     
      <div className="relative">
        {/* Removed navigation controls from here */}
        
        <div
          ref={containerRef}
          className="flex overflow-x-auto scroll-smooth space-x-4 no-scrollbar hide-scrollbar pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[60%] sm:w-[45%] md:w-[30%] lg:w-[20%]"
            >
              <a 
                href={product.productLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-md shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer h-full"
              >
                <div className="overflow-hidden">
                  <div className="relative pt-[125%]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover absolute inset-0 transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2 h-10 hover:text-[#97571c]">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mt-1">
                    {renderStars(product.rating)}
                  </div>
                  
                  <p className="mt-2 text-lg font-semibold text-[#97571c]">
                    {product.price}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        {/* Navigation controls positioned 15px below original position using absolute positioning */}
        <div className="absolute top-4 mt-45 w-full flex justify-between px-2">
          <button
            onClick={() => scroll("left")}
            className={`p-2 bg-white shadow-md rounded-full hover:bg-gray-100 focus:outline-none active:bg-gray-200 transition-all ${showLeftArrow ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
            aria-label="Scroll left"
            disabled={!showLeftArrow}
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className={`p-2 bg-white shadow-md rounded-full hover:bg-gray-100 focus:outline-none active:bg-gray-200 transition-all ${showRightArrow ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
            aria-label="Scroll right"
            disabled={!showRightArrow}
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
      
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}