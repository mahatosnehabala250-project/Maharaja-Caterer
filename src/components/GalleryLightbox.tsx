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

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-maroon/80 text-cream flex items-center justify-center hover:bg-gold hover:text-maroon transition-all duration-300"
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-10 font-poppins text-cream/70 text-sm">
        {current + 1} / {images.length}
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 z-10 w-12 h-12 rounded-full bg-maroon/80 text-cream flex items-center justify-center hover:bg-gold hover:text-maroon transition-all duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image */}
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next Button */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 z-10 w-12 h-12 rounded-full bg-maroon/80 text-cream flex items-center justify-center hover:bg-gold hover:text-maroon transition-all duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <p className="font-poppins text-cream text-sm text-center">{images[current].alt}</p>
      </div>
    </div>
  );
}
