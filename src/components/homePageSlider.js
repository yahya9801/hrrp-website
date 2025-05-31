import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import community1 from '../images/community_1.png';
import community2 from '../images/community_2.png';

import community3 from '../images/community_3.png';


const HomePageSlider = () => {
  // Sample images - replace with your actual image URLs
  const images = [
    { id: 1, src: community1, alt: 'Mountain landscape' },
    { id: 2, src: community2, alt: 'Forest path' },
    { id: 3, src: community3, alt: 'Ocean waves' },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Create extended array for seamless loop - duplicate first 3 and last 3
  const extendedImages = [...images.slice(-3), ...images, ...images.slice(0, 3)];
  const totalSlides = images.length;

  const goToSlide = (index, smooth = true) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    if (sliderRef.current) {
      sliderRef.current.style.transition = smooth ? 'transform 0.5s ease-in-out' : 'none';
      // Move to show 3 images starting from the target index
      sliderRef.current.style.transform = `translateX(-${(index + 3) * 33.333}%)`;
    }

    setTimeout(() => {
      setIsTransitioning(false);
      
      // Handle seamless loop
      if (index >= totalSlides) {
        const newIndex = index - totalSlides;
        setCurrentIndex(newIndex);
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          sliderRef.current.style.transform = `translateX(-${(newIndex + 3) * 33.333}%)`;
        }
      } else if (index < 0) {
        const newIndex = totalSlides + index;
        setCurrentIndex(newIndex);
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          sliderRef.current.style.transform = `translateX(-${(newIndex + 3) * 33.333}%)`;
        }
      }
    }, 500);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }, 4000);
  }, [totalSlides]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle touch/drag for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  // Auto-play effect
  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isPlaying, startAutoPlay, stopAutoPlay]);

  // Separate effect to handle slide transitions
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${(currentIndex + 3) * 33.333}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-7xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
      {/* Header */}
      <div className="flex justify-between items-center p-6 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div>
          <h2 className="text-3xl font-semibold text-blue-500">What our Community Say</h2>
          {/* <p className="text-slate-300 text-sm">Discover amazing landscapes</p> */}
        </div>
        {/* <button
          onClick={toggleAutoPlay}
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 text-white backdrop-blur-sm border border-white/20 hover:border-white/30"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          <span className="text-sm font-medium">{isPlaying ? 'Pause' : 'Play'}</span>
        </button> */}
      </div>

      {/* Slider Container */}
      <div className="m-10 relative overflow-hidden bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        {/* Current slide indicator */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
          {currentIndex + 1} of {totalSlides}
        </div>

        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {extendedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="w-1/3 flex-shrink-0 px-3 py-4"
            >
              <div className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-end">
                  <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.alt}</h3>
                    <p className="text-sm text-gray-200 opacity-90">Click to explore this view</p>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 hover:border-white/30 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 hover:border-white/30 shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom section with dots and progress */}
      <div className="bg-black/20 backdrop-blur-md border-t border-white/10">
        {/* Dots Indicator */}
        {/* <div className="flex justify-center items-center space-x-3 pt-4 pb-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 hover:scale-125 disabled:cursor-not-allowed ${
                index === currentIndex
                  ? 'w-8 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/30'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full'
              }`}
            />
          ))}
        </div> */}

        {/* Progress Bar */}
        {/* <div className="px-6 pb-4">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transition-all duration-300 rounded-full shadow-sm"
              style={{
                width: `${((currentIndex + 1) / totalSlides) * 100}%`,
              }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-xs text-slate-400">
            <span>Progress</span>
            <span>{Math.round(((currentIndex + 1) / totalSlides) * 100)}%</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomePageSlider;