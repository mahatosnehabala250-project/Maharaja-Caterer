export default function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center py-4 select-none">
      <div className="flex items-center gap-3">
        {/* Left line */}
        <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-gold/60" />
        {/* Center diamond */}
        <div className="w-2.5 h-2.5 rotate-45 border border-gold/60 bg-gold/10" />
        {/* Center dot */}
        <div className="w-1.5 h-1.5 rounded-full bg-gold/80" />
        {/* Right diamond */}
        <div className="w-2.5 h-2.5 rotate-45 border border-gold/60 bg-gold/10" />
        {/* Right line */}
        <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-gold/60" />
      </div>
    </div>
  );
}
