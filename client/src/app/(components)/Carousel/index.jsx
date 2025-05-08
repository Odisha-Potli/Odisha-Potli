"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Carousel = () => {
  // Create autoplay plugin instance with stop on interaction set to false
  // to ensure it continues to play on all devices/screen sizes
  const autoplay = AutoPlay({ 
    delay: 4000,
    stopOnInteraction: false, // prevents stopping on user interaction
    playOnInit: true // ensures autoplay starts immediately
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      draggable: true, // ensure draggable on mobile
      dragFree: false
    }, 
    [autoplay]
  );

  // Ensure carousel resets and works on window resize
  useEffect(() => {
    if (emblaApi) {
      const onResize = () => {
        emblaApi.reInit();
      };
      
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const imageWidth = 480;
  const imageHeight = 1024;

  return (
    <div>
      <div className="embla relative">
        <div className="embla-wrapper relative mx-auto">
          {/* Left Button */}
          <button
            title="left"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 scale-150 bg-gray-800 text-white rounded-full shadow-md opacity-80 hover:opacity-100 z-[5]"
            onClick={scrollPrev}
          >
            <ChevronLeft size={24} />
          </button>
          {/* Viewport */}
          <div
            className="embla__viewport bg-[#ECE5DD] border lg:py-6 py-6 overflow-hidden"
            ref={emblaRef}
          >
            <div className="embla__container h-full gap-10 flex">
              <div className="embla__slide flex-shrink-0 flex items-center justify-center ml-10 min-w-0">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/Client1.jpeg"
                    width={imageWidth}
                    height={imageHeight}
                    alt="Client 1"
                    priority
                  />
                </div>
              </div>
              <div className="embla__slide flex-shrink-0 flex items-center justify-center min-w-0">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/Client2.jpeg"
                    width={imageWidth}
                    height={imageHeight}
                    alt="Client 2"
                  />
                </div>
              </div>
              <div className="embla__slide flex-shrink-0 flex items-center justify-center min-w-0">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/Client3.jpeg"
                    width={imageWidth}
                    height={imageHeight}
                    alt="Client 3"
                  />
                </div>
              </div>
              <div className="embla__slide flex-shrink-0 flex items-center justify-center min-w-0">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/Client4.jpg"
                    width={imageWidth}
                    height={imageHeight}
                    alt="Client 4"
                  />
                </div>
              </div>
              <div className="embla__slide flex-shrink-0 flex items-center justify-center min-w-0">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/Client5.jpg"
                    width={imageWidth}
                    height={imageHeight}
                    alt="Client 5"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right Button */}
          <button
            title="right"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 scale-150 bg-gray-800 text-white rounded-full shadow-md opacity-80 hover:opacity-100 z-[5]"
            onClick={scrollNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;