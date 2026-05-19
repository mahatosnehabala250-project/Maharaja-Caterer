import { useState, useEffect, useRef } from 'react';
import { Crown } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const dismiss = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      setFadeOut(true);
      setTimeout(onComplete, 800); // longer fade for smoother transition
    };

    // Create hidden video, make it actually PLAY
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.src = '/videos/hero_video.mp4';

    const handlePlaying = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 1500 - elapsed);
      setTimeout(dismiss, remaining);
    };

    const handleError = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 2000 - elapsed);
      setTimeout(dismiss, remaining);
    };

    video.addEventListener('playing', handlePlaying);
    video.addEventListener('error', handleError);

    // Max fallback — 3 seconds absolute max
    const maxTimer = setTimeout(dismiss, 3000);

    const startTime = Date.now();

    video.load();
    video.play().catch(() => {});

    return () => {
      clearTimeout(maxTimer);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('error', handleError);
      video.pause();
      video.src = '';
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-maroon flex flex-col items-center justify-center ${
        fadeOut
          ? 'opacity-0 pointer-events-none'
          : 'opacity-100'
      }`}
      style={{
        transition: fadeOut
          ? 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          : 'none',
      }}
    >
      <Crown className="w-14 h-14 text-gold animate-spin-slow mb-6" />
      <p className="font-playfair text-cream text-xl text-center px-4">
        Preparing the royal feast...
      </p>
    </div>
  );
}
