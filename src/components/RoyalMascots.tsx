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
          className={`fixed left-0 top-20 z-[100] pointer-events-none transition-all duration-[1200ms] ease-out ${
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

        {/* Right Mascot */}
        <div
          className={`fixed right-0 top-20 z-[100] pointer-events-none transition-all duration-[1200ms] ease-out ${
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
      </>
    );
  }

  // Mobile: floating bottom corners — z-index BELOW WhatsApp (997 < 998) and BackToTop
  return (
    <>
      <div
        className={`fixed bottom-3 left-3 z-[997] pointer-events-none transition-all duration-[1200ms] ease-out ${
          loaded ? 'translate-y-0 opacity-80' : 'translate-y-full opacity-0'
        }`}
      >
        <img
          src="/images/mascot_left.png"
          alt=""
          className="w-8 h-auto drop-shadow-md"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>
      <div
        className={`fixed bottom-20 right-3 z-[997] pointer-events-none transition-all duration-[1200ms] ease-out ${
          loaded ? 'translate-y-0 opacity-80' : 'translate-y-full opacity-0'
        }`}
      >
        <img
          src="/images/mascot_right.png"
          alt=""
          className="w-8 h-auto drop-shadow-md"
        />
      </div>
    </>
  );
}
