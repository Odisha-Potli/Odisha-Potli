import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function VideoImageCarousel() {
  const products = [
    { imageUrl: "/Screenshot 2025-05-10 160831.png" },
    { imageUrl: "/Screenshot 2025-05-11 095128.png" },
    { imageUrl: "/Screenshot 2025-05-11 095322.png" },
    { imageUrl: "/Screenshot 2025-05-11 095453.png" }
  ];

  const videos = [
    "/WhatsApp Video 2025-05-11 at 10.01.42_3183e4c6.mp4",
    "/WhatsApp Video 2025-05-11 at 10.04.13_64bf4d27.mp4",
    "/WhatsApp Video 2025-05-11 at 10.03.14_2ef1435f.mp4",
    "/WhatsApp Video 2025-05-11 at 10.00.26_f089ea47.mp4"
  ];
  
  // Individual static thumbnails for each video
  const staticThumbnails = [
    "/Screenshot 2025-05-11 120802.png",
    "/Screenshot 2025-05-11 121129.png",
    "/Screenshot 2025-05-11 120953.png",
    "/Screenshot 2025-05-11 120601.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [videoPreviews, setVideoPreviews] = useState([]);
  const videoRefs = useRef([]);

  // Initialize video refs
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos.length]);

  // Set thumbnails directly from our static array
  useEffect(() => {
    setVideoPreviews(staticThumbnails);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const goToPrevious = () =>
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));

  const goToNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);

  const handlePlayVideo = (index) => {
    setPlayingIndex(index);
  };

  // No need for a helper function since we're using the same thumbnail for all videos

  return (
    <div className="py-10 px-4 font-sans">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-semibold" style={{ color: "#97571c" }}>What We Do</h1>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid gap-4 md:grid-cols-4">
        {videos.map((video, index) => (
          <div className="relative" key={index}>
            {playingIndex === index ? (
              <video
                ref={el => videoRefs.current[index] = el}
                className="w-full h-64 object-cover rounded-md"
                src={video}
                controls
                autoPlay
                muted
                loop
              />
            ) : (
              <div className="relative">
                {/* Unique static thumbnail for each video */}
                <Image
                  src={staticThumbnails[index]}
                  alt={`Video ${index + 1} thumbnail`}
                  width={300}
                  height={260}
                  className="w-full h-64 object-cover rounded-md"
                />
                <button
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => handlePlayVideo(index)}
                >
                  <Play size={48} className="text-black bg-white rounded-full p-2" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Image Grid */}
      <div className="hidden md:grid gap-4 mt-4 md:grid-cols-4">
        {products.map((product, index) => (
          <div className="relative" key={index}>
            <Image
              src={product.imageUrl}
              alt={`Product Image ${index + 1}`}
              width={300}
              height={260}
              className="object-cover w-full h-64 transition-transform duration-800 rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {/* Mobile Video */}
        <div className="relative">
          {playingIndex === currentIndex ? (
            <video
              ref={el => videoRefs.current[currentIndex] = el}
              className="w-full h-64 object-cover rounded-md"
              src={videos[currentIndex]}
              controls
              autoPlay
              muted
              loop
            />
          ) : (
            <div className="relative">
              {/* Unique static thumbnail for mobile view */}
              <Image
                src={staticThumbnails[currentIndex]}
                alt={`Video ${currentIndex + 1} thumbnail`}
                width={300}
                height={260}
                className="w-full h-64 object-cover rounded-md"
              />
              <button
                className="absolute inset-0 flex items-center justify-center"
                onClick={() => handlePlayVideo(currentIndex)}
              >
                <Play size={48} className="text-black bg-white rounded-full p-2" />
              </button>
            </div>
          )}
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            onClick={goToPrevious}
          >
            <ChevronLeft size={32} className="text-white bg-gray rounded-full p-1" />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={goToNext}
          >
            <ChevronRight size={32} className="text-white bg-gray rounded-full p-1" />
          </button>
        </div>

        {/* Mobile Image */}
        <div className="relative mt-4">
          <Image
            src={products[currentIndex].imageUrl}
            alt={`Product Image ${currentIndex + 1}`}
            width={1200}
            height={600}
            className="object-cover w-full h-64 transition-transform duration-800 rounded-md"
          />
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            onClick={goToPrevious}
          >
            <ChevronLeft size={32} className="text-white bg-gray rounded-full p-1" />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={goToNext}
          >
            <ChevronRight size={32} className="text-white bg-gray rounded-full p-1" />
          </button>
        </div>
      </div>
    </div>
  );
}