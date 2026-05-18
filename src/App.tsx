import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import RoyalMascots from './components/RoyalMascots';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';
import MenusPage from './pages/MenusPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Update page title based on route
  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Maharaja Caterer | Best Wedding Catering in Purulia, West Bengal',
      '/menus': 'Maharaja Caterer | Our Menus | Bengali & North Indian Catering',
      '/gallery': 'Maharaja Caterer | Gallery | Wedding & Event Photos',
      '/contact': 'Maharaja Caterer | Contact Us | Book Catering in Purulia',
    };
    document.title = titles[location.pathname] || titles['/'];
  }, [location.pathname]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <ScrollToTop />
      <Navbar />
      <RoyalMascots />
      <BackToTop />
      <WhatsAppFloat />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menus" element={<MenusPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Cookie Consent */}
      <CookieConsent />
    </>
  );
}

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-maroon/95 backdrop-blur-sm py-3">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-inter text-xs text-cream/90 text-center sm:text-left">
          We use cookies to ensure you get the best experience.
        </p>
        <button
          onClick={() => {
            localStorage.setItem('cookiesAccepted', 'true');
            setVisible(false);
          }}
          className="bg-gold text-maroon font-poppins font-medium text-xs px-5 py-2 rounded-full hover:bg-cream transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
