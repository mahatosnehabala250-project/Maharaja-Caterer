import { useState } from 'react';
import { MessageCircle, CheckCircle2, User, Phone as PhoneIcon, CalendarDays, Users, UtensilsCrossed, MessageSquare } from 'lucide-react';
import SectionReveal from '../../components/SectionReveal';

export default function WhatsAppForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    guestCount: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      return;
    }

    const text = `Hi Maharaja Caterer, I am ${form.name}. I want to book catering for my ${form.eventType}${form.eventDate ? ` on ${form.eventDate}` : ''}${form.guestCount ? ` for ${form.guestCount} guests` : ''}. My phone: ${form.phone}.${form.message ? ` Message: ${form.message}` : ''} Please contact me.`;

    const url = `https://wa.me/918945005456?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    'w-full bg-cream border-2 border-gold/30 rounded-xl px-4 py-3.5 font-inter text-sm text-charcoal placeholder:text-charcoal/40 focus:border-maroon focus:ring-4 focus:ring-maroon/5 focus:outline-none transition-all duration-300 hover:border-gold/60';

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-whatsapp/10 flex items-center justify-center animate-breathe">
          <CheckCircle2 className="w-10 h-10 text-whatsapp" />
        </div>
        <h3 className="font-playfair font-bold text-maroon text-2xl mb-2">
          Redirecting to WhatsApp!
        </h3>
        <p className="font-inter text-charcoal/70 text-sm">
          Complete your booking on WhatsApp. We usually respond within minutes.
        </p>
      </div>
    );
  }

  return (
    <SectionReveal>
      <div className="relative">
        {/* Decorative corner */}
        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-xl" />
        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-xl" />

        <h3 className="font-playfair font-bold text-maroon text-2xl mb-2">
          Send Enquiry
        </h3>
        <p className="font-inter text-charcoal/60 text-sm mb-6">
          Fill the form and we will connect via WhatsApp instantly
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-poppins text-sm text-charcoal mb-1.5">
              Your Name <span className="text-maroon">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className={`${inputClass} pl-10`}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block font-poppins text-sm text-charcoal mb-1.5">
              Phone Number <span className="text-maroon">*</span>
            </label>
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
                className={`${inputClass} pl-10`}
              />
            </div>
          </div>

          {/* Event Type */}
          <div>
            <label className="block font-poppins text-sm text-charcoal mb-1.5">
              Event Type
            </label>
            <div className="relative">
              <UtensilsCrossed className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30 pointer-events-none" />
              <select
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                className={`${inputClass} pl-10 appearance-none cursor-pointer`}
              >
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Religious</option>
                <option>Corporate</option>
                <option>Anniversary</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Event Date + Guest Count in one row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-poppins text-sm text-charcoal mb-1.5">
                Event Date
              </label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30 pointer-events-none" />
                <input
                  type="date"
                  name="eventDate"
                  value={form.eventDate}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>
            <div>
              <label className="block font-poppins text-sm text-charcoal mb-1.5">
                Guests
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30 pointer-events-none" />
                <input
                  type="number"
                  name="guestCount"
                  value={form.guestCount}
                  onChange={handleChange}
                  placeholder="100+"
                  min={10}
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-poppins text-sm text-charcoal mb-1.5">
              Additional Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-charcoal/30" />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Any special requirements or questions..."
                rows={3}
                className={`${inputClass} pl-10 resize-none`}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-poppins font-semibold text-base px-8 py-4 rounded-full hover:brightness-110 active:scale-[0.98] transition-all duration-300 hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Send on WhatsApp
          </button>

          <p className="font-inter text-xs text-charcoal/50 text-center">
            You will be redirected to WhatsApp. No spam, we promise.
          </p>
        </form>
      </div>
    </SectionReveal>
  );
}
