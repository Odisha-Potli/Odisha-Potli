'use client';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

const videos = [
  { src: '/MVI_6817.mp4' },
  { src: '/MVI_6847.mp4' },
  { src: '/MVI_6882.mp4' },
  { src: '/MVI_6792.mp4' },
];

const images = [
  '/IMG_6866.jpg',
  '/IMG_6812.jpg',
  '/IMG_6972.jpg',
  '/IMG_6914.jpg',
];

export default function VideoImageCarousel({
  textColor = '#2c2c2c',
  bgColor = '#ECE5DD',
}) {
  const [index, setIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState({});
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const updateIndex = (newIndex) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);
    setIndex((newIndex + videos.length) % videos.length);
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 4000);
  };

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleVideoClick = (videoIndex) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [videoIndex]: true,
    }));
  };

  const handleNext = () => {
    updateIndex(index + 1);
    resetInterval();
  };

  const handlePrev = () => {
    updateIndex(index - 1);
    resetInterval();
  };

  return (
    <div className="w-full px-4 py-8">
      {/* Heading */}
      <div
        className="text-center py-6 mb-6 rounded"
        style={{ backgroundColor: bgColor }}
      >
        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: textColor }}>
          What We Do
        </h2>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-4 gap-4">
        {videos.map((vid, i) => (
          <div key={i} className="relative w-full h-[200px] rounded overflow-hidden">
            <video
              src={vid.src}
              muted
              preload="metadata"
              controls={playingVideos[i]}
              playsInline
              onClick={(e) => {
                if (!playingVideos[i]) {
                  e.preventDefault();
                  handleVideoClick(i);
                  e.target.play();
                }
              }}
              className="w-full h-full object-cover cursor-pointer"
            />
            {!playingVideos[i] && (
              <div
                onClick={() => handleVideoClick(i)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
              >
                <div className="bg-white/70 p-3 rounded-full shadow-lg text-xl">▶</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="hidden md:grid grid-cols-4 gap-4 mt-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`img-${i}`}
            className="w-full h-[200px] object-cover rounded"
          />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden flex flex-col items-center">
        {/* Video */}
        <div className="relative w-full overflow-hidden">
          <div
            className={classNames(
              'transition-transform duration-500 ease-in-out',
              animating && 'transform scale-[1.02]'
            )}
          >
            <video
              key={videos[index].src}
              src={videos[index].src}
              muted
              preload="metadata"
              controls={playingVideos[index]}
              playsInline
              onClick={(e) => {
                if (!playingVideos[index]) {
                  handleVideoClick(index);
                  e.target.play();
                }
              }}
              className="w-full h-[200px] object-cover rounded cursor-pointer"
            />
            {!playingVideos[index] && (
              <div
                onClick={() => handleVideoClick(index)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
              >
                <div className="bg-black/70 p-3 rounded-full shadow-lg text-xl">▶</div>
              </div>
            )}
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-white p-2 rounded-full shadow"
          >
            {'<'}
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-white p-2 rounded-full shadow"
          >
            {'>'}
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full mt-4 overflow-hidden">
          <div
            className={classNames(
              'transition-transform duration-500 ease-in-out',
              animating && 'transform scale-[1.02]'
            )}
          >
            <img
              src={images[index]}
              alt={`img-${index}`}
              className="w-full h-[200px] object-cover rounded"
            />
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-white p-2 rounded-full shadow"
          >
            {'<'}
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-white p-2 rounded-full shadow"
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
}
