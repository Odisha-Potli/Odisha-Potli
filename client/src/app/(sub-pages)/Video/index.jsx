import React from "react";
import Image from "next/image";

const Video = () => {
  const images = [
    { id: 1, src: "/IMG_6812.jpg" },
    { id: 2, src: "/image2.jpg" },
    { id: 3, src: "/image3.jpg" },
    { id: 4, src: "/image4.jpg" },
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative h-64">
            <Image
              src={image.src}
              alt={`Gallery image ${image.id}`}
              fill
              className="object-cover rounded-lg"
              priority={image.id === 1}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;