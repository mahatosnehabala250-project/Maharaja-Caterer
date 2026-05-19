export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918945005456?text=Hi%20Maharaja%20Caterer%2C%20I%20want%20to%20know%20about%20your%20catering%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 z-[998] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-btn group"
      aria-label="Chat on WhatsApp"
    >
      {/* Official WhatsApp Logo SVG */}
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-8 h-8 group-hover:scale-105 transition-transform"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.744 3.054 9.378L1.054 31.29l6.116-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.312 22.6c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.324-5.662-1.218-4.76-1.972-7.826-6.826-8.066-7.148-.23-.322-1.932-2.576-1.932-4.916s1.224-3.486 1.658-3.962c.434-.476.948-.596 1.264-.596.316 0 .632.004.908.016.29.014.682-.112 1.066.816.39.948 1.332 3.266 1.45 3.502.118.236.196.512.04.828-.158.316-.236.512-.472.788-.238.276-.5.616-.712.828-.238.236-.486.492-.208.964.276.472 1.228 2.024 2.638 3.28 1.812 1.614 3.342 2.114 3.814 2.35.474.236.748.198 1.024-.118.276-.316 1.186-1.382 1.502-1.858.316-.476.632-.394 1.064-.236.434.158 2.748 1.296 3.222 1.532.474.236.79.354.908.55.118.196.118 1.126-.272 2.226z" />
      </svg>
    </a>
  );
}
