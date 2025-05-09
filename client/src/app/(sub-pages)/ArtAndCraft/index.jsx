import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export default function ArtAndCraft() {
  const products = [
    {
      imageUrl: "/Lacquer-Craft-Doll-Set-1-600x600.jpg",
      productName: "Lacquer Craft Doll Set",
      productLink: "https://odishapotli.in/product/lacquer-craft-doll-set/",
      prize: "₹1200",
      rating: "4.5"
    },
    {
      imageUrl: "/Pothichitra-600x600.jpg",
      productName: "Pothichitra",
      productLink: "https://odishapotli.in/product/pothichitra-2/",
      prize: "₹1600",
      rating: "4.8"
    },
    {
      imageUrl: "/20250308_163551.png",
      productName: "Tussar Gicha Dupatta",
      productLink: "https://www.odishapotli.com/Shop/category/dupatta",
      prize: "₹2800",
      rating: "4.7"
    },
    {
      imageUrl: "/Pattachitra-Ramayan-Story-600x600.jpg",
      productName: "Pattachitra- Ramayan Story",
      productLink: "https://odishapotli.in/product/pattachitra-ramayan-story/",
      prize: "₹4000",
      rating: "4.9"
    },
    {
      imageUrl: "/Photoroom-20240628_100000-600x473.png",
      productName: "Handcrafted Dhokra Wall Clock Frame",
      productLink: "https://odishapotli.in/product/handcrafted-dhokra-wall-clock-frame/",
      prize: "₹3600",
      rating: "4.6"
    },
    {
      imageUrl: "/Lacquer-Craft-Paperweights-Tortoise-Set-600x600.jpg",
      productName: "Lacquer Craft Paperweights Tortoise Set",
      productLink: "https://odishapotli.in/product/lacquer-craft-paperweights-tortoise-set/",
      prize: "₹800",
      rating: "4.3"
    }
  ];

  return (
    <div className="py-10 px-4 font-sans">
      <div className="py-4 text-center">
        <h1 className="text-4xl font-semibold" style={{ color: "#97571c" }}>
          Art and Craft
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {products.map((product, index) => (
          <div key={index} className="relative">
            <Link href={product.productLink}>
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={400}
                height={500}
                className="object-cover w-full h-[260px] md:h-[500px] transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="mt-2 text-sm md:text-lg font-medium text-gray-800 text-center truncate">
              {product.productName}
            </p>
            <div className="flex items-center justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-500" fill="#FFD700" strokeWidth={0.5} size={18} />
              ))}
            </div>
            <p className="text-center text-sm md:text-base font-semibold" style={{ color: "#97571c" }}>
              {product.prize}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
