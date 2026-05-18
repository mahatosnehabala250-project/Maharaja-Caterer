import SectionReveal from '../../components/SectionReveal';
import { MapPin, Clock } from 'lucide-react';

export default function GoogleMapEmbed() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="section-container">
        <SectionReveal>
          <div className="text-center mb-10">
            <span className="font-poppins text-gold text-xs uppercase tracking-[2px]">
              Find Us
            </span>
            <h2 className="font-playfair font-bold text-maroon text-2xl lg:text-3xl mt-3">
              Our Location in Purulia
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <SectionReveal delay={0.1}>
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border-2 border-gold/30 shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5!2d86.3616!3d23.3322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1e4e5b0b0b0b0b%3A0x1234567890abcdef!2sNadiha%2C%20Chowk%20Bazar%2C%20Purulia%2C%20West%20Bengal%20723101!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maharaja Caterer Location - Purulia, West Bengal"
                className="w-full"
              />
            </div>
          </SectionReveal>

          {/* Location Info Cards */}
          <div className="space-y-4">
            <SectionReveal delay={0.2}>
              <div className="bg-white rounded-xl p-5 border border-gold/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-maroon" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-maroon text-sm">Main Office</h4>
                    <p className="font-inter text-charcoal/70 text-xs mt-1 leading-relaxed">
                      Near Fan House, Nadiha, Chowk Bazar, Purulia - 723101, West Bengal
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="bg-white rounded-xl p-5 border border-gold/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-maroon" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-maroon text-sm">Branch Office</h4>
                    <p className="font-inter text-charcoal/70 text-xs mt-1 leading-relaxed">
                      Tata Road, Dulmi Nadiha, Purulia - 723102, West Bengal
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="bg-white rounded-xl p-5 border border-gold/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-maroon text-sm">Working Hours</h4>
                    <p className="font-inter text-charcoal/70 text-xs mt-1 leading-relaxed">
                      Open daily: 9:00 AM - 10:00 PM
                    </p>
                    <p className="font-inter text-charcoal/50 text-[10px] mt-0.5">
                      Bookings accepted 24/7 via WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.5}>
              <a
                href="https://maps.google.com/?q=23.3322,86.3616"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-maroon text-cream font-poppins font-semibold text-sm py-3 rounded-xl hover:bg-maroon/90 transition-colors"
              >
                Open in Google Maps
              </a>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
