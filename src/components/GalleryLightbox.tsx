import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryLightboxProps {
  images: { src: string; alt: string }[];
  startIndex: number;
  onClose: () => void;
}

export default function GalleryLightbox({ images, startIndex, onClose }: GalleryLightboxProps) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  // Keyboard navigation
  useState(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-gold/20 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-maroon transition-all duration-300 backdrop-blur-sm"
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 z-10 font-poppins text-cream/60 text-sm bg-maroon/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gold/20">
        {current + 1} / {images.length}
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 z-10 w-12 h-12 rounded-full bg-gold/20 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-maroon transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image */}
      <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        {/* Gold border glow */}
        <div className="absolute inset-0 rounded-lg border border-gold/30 pointer-events-none" />
      </div>

      {/* Next Button */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 z-10 w-12 h-12 rounded-full bg-gold/20 border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-maroon transition-all duration-300 backdrop-blur-sm"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-maroon/60 backdrop-blur-sm px-6 py-2.5 rounded-full border border-gold/20">
        <p className="font-poppins text-cream text-sm text-center">{images[current].alt}</p>
      </div>
    </div>
  );
}
