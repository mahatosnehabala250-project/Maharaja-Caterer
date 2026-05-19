import { useState, useRef } from 'react';

export default function MenuHeader() {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    setVideoReady(true);
  };

  return (
    <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden bg-maroon">
      {/* Poster/placeholder background — no white flash */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{
          backgroundImage: 'url(/images/tandoor.jpg)',
          opacity: videoReady ? 0 : 1,
        }}
      />

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/tandoor.jpg"
        onCanPlayThrough={handleVideoCanPlay}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="/videos/tandoor_video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-maroon/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-playfair font-bold text-white text-4xl lg:text-5xl text-shadow-hero">
          Craft Your Royal Menu
        </h1>
        <p className="font-poppins text-gold text-sm lg:text-base tracking-[3px] uppercase mt-4">
          Bengali • North Indian • Chinese • Tandoori
        </p>
      </div>
    </section>
  );
}
