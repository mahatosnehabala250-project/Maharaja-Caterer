import { useState, useEffect } from 'react';
import { X, CalendarCheck, MapPin } from 'lucide-react';

const bookings = [
  { name: 'Rajesh M.', event: 'Wedding', location: 'Purulia Town', time: '2 hours ago' },
  { name: 'Priya S.', event: 'Birthday Party', location: 'Raghunathpur', time: '5 hours ago' },
  { name: 'Amit D.', event: 'Corporate Event', location: 'Adra', time: '8 hours ago' },
  { name: 'Sneha K.', event: 'Wedding Reception', location: 'Jhalda', time: '1 day ago' },
  { name: 'Deepak T.', event: 'Religious Function', location: 'Chowk Bazar', time: '1 day ago' },
  { name: 'Anita R.', event: 'Anniversary', location: 'Dulmi', time: '2 days ago' },
  { name: 'Bikas G.', event: 'Wedding', location: 'Purulia', time: '2 days ago' },
  { name: 'Mou P.', event: 'Birthday', location: 'Nadiha', time: '3 days ago' },
];

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Show first toast after 8 seconds, then every 15 seconds
    const showTimer = setTimeout(() => {
      setVisible(true);
      setCurrentIndex(0);
    }, 8000);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bookings.length);
      setVisible(true);

      // Auto-hide after 5 seconds
      setTimeout(() => setVisible(false), 5000);
    }, 15000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  // Auto-hide each toast
  useEffect(() => {
    if (!visible) return;
    const hideTimer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(hideTimer);
  }, [visible, currentIndex]);

  if (!visible) return null;

  const booking = bookings[currentIndex];

  return (
    <div
      className={`fixed bottom-24 left-4 sm:left-6 z-[997] max-w-[320px] transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gold/20 p-4 relative overflow-hidden">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold to-maroon" />

        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-charcoal/40 hover:text-charcoal transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-start gap-3 ml-2">
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-maroon/10 flex items-center justify-center flex-shrink-0">
            <CalendarCheck className="w-4 h-4 text-maroon" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-poppins font-semibold text-charcoal text-sm truncate">
              {booking.name}
            </p>
            <p className="font-inter text-charcoal/70 text-xs mt-0.5 leading-snug">
              Booked a <span className="font-medium text-maroon">{booking.event}</span>
            </p>
            <div className="flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3 text-charcoal/40" />
              <span className="font-inter text-charcoal/50 text-[10px]">{booking.location}</span>
              <span className="text-charcoal/30 text-[10px] ml-auto">{booking.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
