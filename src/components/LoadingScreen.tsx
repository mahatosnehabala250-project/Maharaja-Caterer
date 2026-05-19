import { useState, useEffect, useRef } from 'react';
import { Crown } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const [loadingText, setLoadingText] = useState('Preparing the royal feast...');
  const videoReadyRef = useRef(false);

  useEffect(() => {
    // Start loading the hero video in the background immediately
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.src = '/videos/hero_video.mp4';

    const handleReady = () => {
      if (videoReadyRef.current) return;
      videoReadyRef.current = true;
      setLoadingText('Almost ready...');

      // Small delay for smooth transition feel
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(onComplete, 600);
      }, 400);
    };

    video.addEventListener('canplaythrough', handleReady);

    // Fallback: if video fails or takes too long, show website anyway
    const fallbackTimer = setTimeout(() => {
      if (!videoReadyRef.current) {
        videoReadyRef.current = true;
        setLoadingText('Welcome!');
        setFadeOut(true);
        setTimeout(onComplete, 600);
      }
    }, 4000);

    // Start loading the video
    video.load();

    // Also preload other video assets while spinner shows
    const preloadLinks = [
      '/videos/staff_video.mp4',
      '/videos/tandoor_video.mp4',
    ];
    preloadLinks.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = src;
      document.head.appendChild(link);
    });

    return () => {
      video.removeEventListener('canplaythrough', handleReady);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-maroon flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <Crown className="w-14 h-14 text-gold animate-spin-slow mb-6" />
      <p className="font-playfair text-cream text-xl text-center px-4">
        {loadingText}
      </p>
    </div>
  );
}
