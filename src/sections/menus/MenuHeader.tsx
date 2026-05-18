export default function MenuHeader() {
  return (
    <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/tandoor.jpg"
        className="absolute inset-0 w-full h-full object-cover"
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
