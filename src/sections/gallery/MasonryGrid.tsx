import SectionReveal from '../../components/SectionReveal';

const galleryItems = [
  { image: '/images/gallery_stage.jpg', category: 'Stage & Venue Decoration', location: 'Purulia' },
  { image: '/images/gallery_buffet.jpg', category: 'Live Buffet Setup', location: 'Purulia' },
  { image: '/images/gallery_planning.jpg', category: 'Full Event Planning', location: 'Purulia' },
  { image: '/images/gallery_thali.jpg', category: 'Wedding Feast Spread', location: 'Purulia' },
  { image: '/images/gallery_birthday.jpg', category: 'Birthday Celebration', location: 'Purulia' },
  { image: '/images/gallery_religious.jpg', category: 'Religious Function', location: 'Purulia' },
  { image: '/images/gallery_team.jpg', category: 'Team Serving', location: 'Purulia' },
  { image: '/images/gallery_family.jpg', category: 'Happy Clients', location: 'Purulia' },
];

interface MasonryGridProps {
  onImageClick?: (index: number) => void;
}

export default function MasonryGrid({ onImageClick }: MasonryGridProps) {
  return (
    <section className="pb-20 lg:pb-28 bg-cream">
      <div className="section-container">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <SectionReveal key={index} delay={0.1 * (index + 1)}>
              <div
                className="relative group overflow-hidden rounded-2xl break-inside-avoid cursor-pointer"
                onClick={() => onImageClick?.(index)}
              >
                <img
                  src={item.image}
                  alt={`${item.category} - ${item.location}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <h3 className="font-playfair text-gold text-base">
                    {item.category}
                  </h3>
                  <p className="font-poppins text-cream/80 text-xs mt-1">
                    {item.location}
                  </p>
                </div>

                {/* Border on hover */}
                <div className="absolute inset-0 border-2 border-gold rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Zoom icon hint */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-maroon/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-cream" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
