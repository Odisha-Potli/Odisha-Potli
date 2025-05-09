import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductGrid() {
  const products = [
    {
      imageUrl: "/pasapalli-con-3-1229x1536.jpeg",
      productName: "Pasapali Contemporary saree",
      productLink: "https://www.odishapotli.com/Shop/category/nuapatna-silk",
    },
    {
      imageUrl: "/WhatsApp-Image-2023-11-22-at-7.46.38-PM-2-1229x1536.jpeg",
      productName: "Berhampuri-Silk in Vermilion Red and Purple",
      productLink: "https://www.odishapotli.com/Shop/category/berhampuri-silk",
    },
    {
      imageUrl: "/20250308_163551.png",
      productName: "Tussar Gicha Dupatta",
      productLink: "https://www.odishapotli.com/Shop/category/dupatta",
    },
    {
      imageUrl: "/Fabric-Ajrakh-Vegetable-Dyed-Black-Brown.jpg",
      productName: "Ajrakh Dyed Fabric - Black Brown",
      productLink: "https://www.odishapotli.com/Shop/category/yardages",
    },
    {
      imageUrl: "/Photoroom-20241213_122150-1152x1536.png",
      productName: "Tarakashi Pendant Necklace",
      productLink: "https://www.odishapotli.com/Shop/category/cuttack-tarakasi",
    },
    {
      imageUrl: "/Photoroom-20240701_191422.png",
      productName: "Sambalpuri Cotton Bedcover",
      productLink: "https://www.odishapotli.com/Shop/category/accessories",
    },
  ];

  return (
    <div className="py-10 px-4 font-sans">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Handcrafted Dresses
      </h2>
      <p className="text-center text-sm text-gray-500 mb-6">View all</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {products.map((product, index) => (
          <div key={index}>
            {/* Card with only the image */}
            <div className="bg-white rounded-md border shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105">
              <Link href={product.productLink}>
                <Image
                  src={product.imageUrl}
                  alt={product.productName}
                  width={400}
                  height={500}
                  className="object-cover w-full h-[260px] md:h-[500px]"
                />
              </Link>
            </div>

            {/* Product name outside the card */}
            <p className="mt-2 text-sm md:text-lg font-medium text-gray-800 text-center truncate">
              {product.productName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
