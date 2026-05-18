import { useState } from 'react';
import GalleryHeader from '../sections/gallery/GalleryHeader';
import MasonryGrid from '../sections/gallery/MasonryGrid';
import GalleryLightbox from '../components/GalleryLightbox';
import Footer from '../components/Footer';

const galleryImages = [
  { src: './images/gallery_stage.jpg', alt: 'Stage & Venue Decoration - Purulia' },
  { src: './images/gallery_buffet.jpg', alt: 'Live Buffet Setup - Purulia' },
  { src: './images/gallery_planning.jpg', alt: 'Full Event Planning - Purulia' },
  { src: './images/gallery_thali.jpg', alt: 'Wedding Feast Spread - Purulia' },
  { src: './images/gallery_birthday.jpg', alt: 'Birthday Celebration - Purulia' },
  { src: './images/gallery_religious.jpg', alt: 'Religious Function - Purulia' },
  { src: './images/gallery_team.jpg', alt: 'Team Serving - Purulia' },
  { src: './images/gallery_family.jpg', alt: 'Happy Clients - Purulia' },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });

  return (
    <main className="pt-[70px]">
      <GalleryHeader />
      <MasonryGrid onImageClick={(i) => setLightbox({ open: true, index: i })} />
      <Footer />

      {lightbox.open && (
        <GalleryLightbox
          images={galleryImages}
          startIndex={lightbox.index}
          onClose={() => setLightbox({ open: false, index: 0 })}
        />
      )}
    </main>
  );
}
