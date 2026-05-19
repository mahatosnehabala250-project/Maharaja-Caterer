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
      setTimeout(onComplete, 500);
    };

    // Minimum 1.5s spinner for brand feel
    const minTimer = setTimeout(() => {
      // After min time, check if video already playing
      // If not, keep showing until video plays or max time
    }, 1500);

    // Create hidden video, make it actually PLAY
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.src = '/videos/hero_video.mp4';

    // Key: listen for 'playing' event — fires when video ACTUALLY starts playing
    // Not 'canplaythrough' which waits for full buffer (causes hang)
    const handlePlaying = () => {
      // Ensure minimum 1.5s has passed
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 1500 - elapsed);
      setTimeout(dismiss, remaining);
    };

    // If video fails to play at all
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

    // Start loading and playing immediately
    video.load();
    video.play().catch(() => {});

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('error', handleError);
      video.pause();
      video.src = '';
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-maroon flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <Crown className="w-14 h-14 text-gold animate-spin-slow mb-6" />
      <p className="font-playfair text-cream text-xl text-center px-4">
        Preparing the royal feast...
      </p>
    </div>
  );
}
