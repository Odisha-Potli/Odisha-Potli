import React from "react";

const VideoImageCarousel = () => {
  const images = [
    { id: 1, src: "./IMG_6812.jpg" },
    { id: 2, src: "./image2.jpg" },
    { id: 3, src: "./image3.jpg" },
    { id: 4, src: "./image4.jpg" },
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoImageCarousel;
