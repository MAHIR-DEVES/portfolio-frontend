// ProjectImageSlider.tsx
'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export default function ProjectImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // AUTO SLIDE
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  const next = () => {
    setIndex(prev => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    // Auto resume after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prev = () => {
    setIndex(prev => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* SLIDER WRAPPER */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full h-full  flex-shrink-0 relative">
            <img
              src={img}
              alt={`Project image ${i + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={18} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={18} />
      </button>

      {/* AUTO PLAY TOGGLE */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 text-xs"
      >
        {isAutoPlaying ? <Pause size={12} /> : <Play size={12} />}
      </button>

      {/* DOTS INDICATOR */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? 'w-6 h-1.5 bg-orange-500'
                : 'w-1.5 h-1.5 bg-white/60 hover:bg-white/90'
            }`}
          />
        ))}
      </div>

      {/* IMAGE COUNTER */}
      <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
