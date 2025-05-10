import React from "react";
import Image from "next/image";

export default function Video() {
  const products = [
    {
      imageUrl: "/IMG_6812.jpg"
    },
    {
      imageUrl: "/Pothichitra-600x600.jpg"
    },
    {
      imageUrl: "/20250308_163551.png"
    },
    {
      imageUrl: "/Pattachitra-Ramayan-Story-600x600.jpg"
    }
  ];

  return (
    <div className="py-10 px-4 font-sans">
      <div className="py-4 text-center">
        <h1 className="text-4xl font-semibold" style={{ color: "#97571c" }}>
          Our Goal
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <div key={index} className="relative">
            <Image
              src={product.imageUrl}
              alt={`Product Image ${index + 1}`}
              width={250}
              height={300}
              className="object-cover w-full h-[200px] md:h-[300px] transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
