// components/ProductGrid.jsx

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
      productName: "Berhampuri-Silk in Vermilion (Sindoor) Red and Purple",
      productLink: "https://www.odishapotli.com/Shop/category/berhampuri-silk",
    },
    {
      imageUrl: "/20250308_163551.png",
      productName: "Tussar Gicha Dupatta",
      productLink: "https://www.odishapotli.com/Shop/category/dupatta",
    },
    {
      imageUrl: "/Fabric-Ajrakh-Vegetable-Dyed-Black-Brown.jpg",
      productName: "Fabric Ajrakh Vegetable Dyed Black Brown",
      productLink: "https://www.odishapotli.com/Shop/category/yardages",
    },
    {
      imageUrl: "/Photoroom-20241213_122150-1152x1536.png",
      productName: "Cuttack Tarakashi Handcrafted Pendant Necklace",
      productLink: "https://www.odishapotli.com/Shop/category/cuttack-tarakasi",
    },
    {
      imageUrl: "/Photoroom-20240701_191422.png",
      productName: "Sambalpuri Bedcover- Cotton",
      productLink: "https://www.odishapotli.com/Shop/category/accessories",
    },
  ];

  return (
    <div className="py-12 px-6 font-Playfair Display">
     <h2 className="text-3xl font-bold text-center mb-8 text-[#97571c]">
  Our Exclusive Collection
</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="w-full max-w-sm mx-auto">
            <Link href={product.productLink}>
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={400}
                height={400}
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <h2 className="mt-2 text-lg font-semibold text-gray-800 text-center">
              {product.productName}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
