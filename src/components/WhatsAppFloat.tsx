import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918945005456?text=Hi%20Maharaja%20Caterer%2C%20I%20want%20to%20know%20about%20your%20catering%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 z-[998] w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-btn"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
