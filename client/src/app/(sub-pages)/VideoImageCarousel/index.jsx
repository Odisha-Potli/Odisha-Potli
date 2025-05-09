'use client';
import { useState, useEffect, useRef } from 'react';

// Video and image paths - ensure these paths are correct relative to your public directory
const videos = [
  '/MVI_6817.mp4',
  '/MVI_6847.mp4',
  '/MVI_6882.mp4',
  '/MVI_6792.mp4',
];

const images = [
  '/IMG_6866.jpg',
  '/IMG_6812.jpg',
  '/IMG_6972.jpg',
  '/IMG_6914.jpg',
];

export default function VideoImageCarousel() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(Array(videos.length).fill(false));
  const videoRefs = useRef(videos.map(() => null));
  
  // Auto rotation effect - only rotate when not playing
  useEffect(() => {
    if (isPlaying.some(playing => playing)) return;
    
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Navigation handlers
  const next = () => setIndex((prev) => (prev + 1) % videos.length);
  const prev = () => setIndex((prev) => (prev - 1 + videos.length) % videos.length);
  
  // Handle video play/pause
  const handlePlay = (i) => {
    const newIsPlaying = Array(videos.length).fill(false);
    newIsPlaying[i] = true;
    setIsPlaying(newIsPlaying);
  };

  const handlePause = (i) => {
    const newIsPlaying = [...isPlaying];
    newIsPlaying[i] = false;
    setIsPlaying(newIsPlaying);
  };

  // For better mobile handling
  const tryPlayVideo = (i) => {
    try {
      if (videoRefs.current[i]) {
        const playPromise = videoRefs.current[i].play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video started playing
              handlePlay(i);
            })
            .catch(error => {
              console.error("Video play failed:", error);
              // Auto-play prevented or other error
            });
        }
      }
    } catch (error) {
      console.error("Error attempting to play video:", error);
    }
  };

  return (
    <div className="w-full px-4 py-8">
      {/* Heading */}
      <div className="text-center py-6 bg-gray-100 mb-6 rounded">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-800">What We Do</h2>
      </div>
      
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((src, i) => (
          <div key={i} className="relative bg-gray-100 rounded">
            <video
              ref={el => videoRefs.current[i] = el}
              className="w-full h-48 object-cover rounded"
              preload="metadata"
              controls
              playsInline
              onPlay={() => handlePlay(i)}
              onPause={() => handlePause(i)}
              onEnded={() => handlePause(i)}
              onError={() => console.error(`Error with video ${i}: ${src}`)}
              poster={images[i]} // Use corresponding image as poster
            >
              {/* Only include MP4 format to avoid format detection issues */}
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
      
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {images.map((src, i) => (
          <div key={i} className="relative bg-gray-100 rounded overflow-hidden">
            <img
              src={src}
              alt={`Gallery image ${i+1}`}
              className="w-full h-48 object-cover"
              onError={(e) => {
                console.error(`Error loading image ${i}: ${src}`);
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' text-anchor='middle' alignment-baseline='middle' fill='%236b7280'%3EImage not available%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Mobile Carousel */}
      <div className="md:hidden flex flex-col items-center">
        <div className="relative w-full bg-gray-100 rounded overflow-hidden">
          <video
            ref={el => videoRefs.current[index] = el}
            className="w-full h-48 object-cover"
            preload="metadata"
            controls
            playsInline
            onPlay={() => handlePlay(index)}
            onPause={() => handlePause(index)}
            onEnded={() => handlePause(index)}
            onError={() => console.error(`Error with video ${index}: ${videos[index]}`)}
            poster={images[index]} // Use corresponding image as poster
          >
            <source src={videos[index]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow text-gray-800"
            aria-label="Previous item"
          >
            &lt;
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow text-gray-800"
            aria-label="Next item"
          >
            &gt;
          </button>
        </div>
        
        <div className="relative w-full mt-4 bg-gray-100 rounded overflow-hidden">
          <img
            src={images[index]}
            alt={`Gallery image ${index+1}`}
            className="w-full h-48 object-cover"
            onError={(e) => {
              console.error(`Error loading image ${index}: ${images[index]}`);
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' text-anchor='middle' alignment-baseline='middle' fill='%236b7280'%3EImage not available%3C/text%3E%3C/svg%3E";
            }}
          />
          
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow text-gray-800"
            aria-label="Previous item"
          >
            &lt;
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow text-gray-800"
            aria-label="Next item"
          >
            &gt;
          </button>
        </div>
        
        {/* Indicator dots */}
        <div className="flex mt-4 space-x-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-amber-600' : 'bg-gray-300'}`}
              aria-label={`Go to item ${i+1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}