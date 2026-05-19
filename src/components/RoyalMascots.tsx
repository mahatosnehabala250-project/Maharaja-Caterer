import { useEffect, useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

export default function RoyalMascots() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (isDesktop) {
    return (
      <>
        {/* Left Mascot */}
        <div
          className="fixed top-20 z-[100] pointer-events-none transition-all duration-[1200ms] ease-out"
          style={{ left: 0 }}
        >
          <div
            className={`transition-all duration-[1200ms] ease-out ${
              loaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <div className="animate-breathe">
              <img
                src="/images/mascot_left.png"
                alt=""
                className="w-24 lg:w-32 xl:w-40 h-auto drop-shadow-lg"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>
          </div>
        </div>

        {/* Right Mascot */}
        <div
          className="fixed top-20 z-[100] pointer-events-none transition-all duration-[1200ms] ease-out"
          style={{ right: 0 }}
        >
          <div
            className={`transition-all duration-[1200ms] ease-out ${
              loaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <div className="animate-breathe">
              <img
                src="/images/mascot_right.png"
                alt=""
                className="w-24 lg:w-32 xl:w-40 h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  // Mobile: single fixed wrapper with both mascots at opposite bottom corners
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[997] pointer-events-none"
      style={{ height: '60px' }}
    >
      {/* Left Mascot — bottom-left corner */}
      <div
        className="absolute bottom-3 transition-all duration-[1200ms] ease-out"
        style={{ left: '12px' }}
      >
        <div
          className={`transition-all duration-[1200ms] ease-out ${
            loaded ? 'translate-y-0 opacity-60' : 'translate-y-full opacity-0'
          }`}
        >
          <img
            src="/images/mascot_left.png"
            alt=""
            className="w-7 h-auto drop-shadow-md"
            style={{ transform: 'scaleX(-1)' }}
          />
        </div>
      </div>

      {/* Right Mascot — bottom-right corner */}
      <div
        className="absolute bottom-3 transition-all duration-[1200ms] ease-out"
        style={{ right: '12px' }}
      >
        <div
          className={`transition-all duration-[1200ms] ease-out ${
            loaded ? 'translate-y-0 opacity-60' : 'translate-y-full opacity-0'
          }`}
        >
          <img
            src="/images/mascot_right.png"
            alt=""
            className="w-7 h-auto drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
