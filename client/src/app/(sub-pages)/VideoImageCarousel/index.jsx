import React from "react";
import { Play } from "lucide-react";

const VideoImageCarousel = () => {
  const videos = [
    { id: 1, src: "/MVI_6792.MP4", title: "THE MAKERS OF" },
    { id: 2, src: "/MVI_6817.MP4", title: "THE MAKING OF" },
    { id: 3, src: "/MVI_6847.MP4", title: "Horizons" },
    { id: 4, src: "/MVI_6882.MP4", title: "Laxmi Ben" },
  ];

  const images = [
    { id: 1, src: "/IMG_6812.jpg" },
    { id: 2, src: "/IMG_6866.jpg" },
    { id: 3, src: "/IMG_6914.jpg" },
    { id: 4, src: "/IMG_6972.jpg" },
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="relative group">
            <video src={video.src} alt={video.title} className="w-full h-full object-cover" controls />
          </div>
        ))}
      </div>

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
