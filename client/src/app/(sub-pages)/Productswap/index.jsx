import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
  {
    name: "Pichwai Art Inspired Nuapatna Ikat Saree",
    image: "/hujsjva36br3uheblbel.jpg",
    price: "₹ 40,000.00",
    rating: 5,
    productLink: "https://www.odishapotli.com/Shop/product/680e771893acc37f08880c13"
  },
  {
    name: "Sachipar Khandua Silk Saree- Yellow Temple Border",
    image: "/gheiznqfrpdtteh1lwhq.jpg",
    price: "₹ 10,100.00",
    rating: 4,
    productLink: "https://www.odishapotli.com/Shop/product/680e766893acc37f08880bff"
  },
  {
    name: "Nuapatna Ikat Floral Bandha Silk Saree",
    image: "/mcf7cbufp4y6jd7itmv3.jpg",
    price: "₹ 16,000.00",
    rating: 5,
    productLink: "https://www.odishapotli.com/Shop/product/680e522667a17847032bd224"
  },
  {
    name: "Nuapatna Khandua Saree in White",
    image: "/xmeazjqsatzvxolxnin9.png",
    price: "₹ 13,599.00",
    rating: 4,
    productLink: "https://www.odishapotli.com/Shop/product/680e4f1e67a17847032bd12f"
  },
  {
    name: "Bomkai Silk",
    image: "/vy0pusdnvjpvzkpghmld.jpg",
    price: "₹ 10,500.00",
    rating: 3,
    productLink: "https://www.odishapotli.com/Shop/product/680f3a7289be3aef2cdf4c36"
  },
  {
    name: "Sankha Bandhakala Sambalpuri Cotton Saree",
    image: "/kgkua9pblfdufoaljzgw.jpg",
    price: "₹ 15,500.00",
    rating: 5,
    productLink: "https://www.odishapotli.com/Shop/product/681ca519de5b5cd8c1798cd0"
  },
  {
    name: "Matsyakanya",
    image: "/ozsmwevad2qewhqrcifb.jpg",
    price: "₹ 10,000.00",
    rating: 2,
    productLink: "https://www.odishapotli.com/Shop/product/680e7e5fbbe8ae2a7989decc"
  },
  {
    name: "Dhalapathar Saree-Nritya",
    image: "/x3hwnvh12hackqay2voc.png",
    price: "₹ 19,499.00",
    rating: 5,
    productLink: "https://www.odishapotli.com/Shop/product/680f41af89be3aef2cdf5030"
  },
  {
    name: "Handpainted Nuapatna Silk Saree",
    image: "/nmdmcwotkuudnzczd9vo.jpg",
    price: "₹ 17,999.00",
    rating: 4,
    productLink: "https://www.odishapotli.com/Shop/product/680e4da567a17847032bd11b"
  },
  {
    name: "Siminoi inspired Nuapatna Silk Saree",
    image: "/cbdkrtkdigp8tjbkobdp.jpg",
    price: "₹ 13,199.00",
    rating: 4,
    productLink: "https://www.odishapotli.com/Shop/product/680e4bdc67a17847032bd104"
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
        <div className="absolute top-4 mt-40 w-full flex justify-between px-2">
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