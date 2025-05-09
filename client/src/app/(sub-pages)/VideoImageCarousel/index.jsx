'use client';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % videos.length);
  const prev = () => setIndex((prev - 1 + videos.length) % videos.length);

  return (
    <div className="w-full px-4 py-8">
      <div className="text-center py-6 bg-[#ECE5DD] mb-6 rounded">
        <h2 className="text-2xl md:text-3xl font-bold text-[#97571c]">What We Do</h2>
      </div>

      <div className="hidden md:grid grid-cols-4 gap-4">
        {videos.map((src, i) => (
          <div key={i} className="relative">
            <video src={src} muted preload="auto" controls className="w-full h-[200px] object-cover rounded"/>
          </div>
        ))}
      </div>

      <div className="hidden md:grid grid-cols-4 gap-4 mt-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`img-${i}`} className="w-full h-[200px] object-cover rounded"/>
        ))}
      </div>

      <div className="md:hidden flex flex-col items-center">
        <div className="relative w-full">
          <video src={videos[index]} muted preload="auto" controls className="w-full h-[200px] object-cover rounded"/>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow">&lt;</button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow">&gt;</button>
        </div>

        <div className="relative w-full mt-4">
          <img src={images[index]} alt={`img-${index}`} className="w-full h-[200px] object-cover rounded"/>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow">&lt;</button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow">&gt;</button>
        </div>
      </div>
    </div>
  );
}
