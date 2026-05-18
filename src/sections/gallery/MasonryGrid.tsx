import SectionReveal from '../../components/SectionReveal';

const galleryItems = [
  { image: './images/gallery_stage.jpg', category: 'Stage & Venue Decoration', location: 'Purulia' },
  { image: './images/gallery_buffet.jpg', category: 'Live Buffet Setup', location: 'Purulia' },
  { image: './images/gallery_planning.jpg', category: 'Full Event Planning', location: 'Purulia' },
  { image: './images/gallery_thali.jpg', category: 'Wedding Feast Spread', location: 'Purulia' },
  { image: './images/gallery_birthday.jpg', category: 'Birthday Celebration', location: 'Purulia' },
  { image: './images/gallery_religious.jpg', category: 'Religious Function', location: 'Purulia' },
  { image: './images/gallery_team.jpg', category: 'Team Serving', location: 'Purulia' },
  { image: './images/gallery_family.jpg', category: 'Happy Clients', location: 'Purulia' },
];

export default function MasonryGrid() {
  return (
    <section className="pb-20 lg:pb-28 bg-cream">
      <div className="section-container">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <SectionReveal key={index} delay={0.1 * (index + 1)}>
              <div className="relative group overflow-hidden rounded-2xl break-inside-avoid cursor-pointer">
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
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
