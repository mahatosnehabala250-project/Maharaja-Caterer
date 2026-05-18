import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const text = `Hi Maharaja Caterer, I am ${form.name}. I want to book catering for my ${form.eventType}${form.eventDate ? ` on ${form.eventDate}` : ''}${form.guestCount ? ` for ${form.guestCount} guests` : ''}. My phone: ${form.phone}.${form.message ? ` Message: ${form.message}` : ''} Please contact me.`;

    const url = `https://wa.me/918945005456?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const inputClass =
    'w-full bg-cream border-2 border-gold rounded-xl px-4 py-3.5 font-inter text-sm text-charcoal placeholder:text-charcoal/40 focus:border-maroon focus:ring-2 focus:ring-maroon/10 focus:outline-none transition-all duration-300';

  return (
    <SectionReveal>
      <div>
        <h3 className="font-poppins font-semibold text-maroon text-xl mb-6">
          Send Enquiry via WhatsApp
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-poppins text-sm text-charcoal mb-1.5">
              Your Name <span className="text-maroon">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-poppins text-sm text-charcoal mb-1.5">
              Phone Number <span className="text-maroon">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              required
              className={inputClass}
            />
          </div>

          {/* Event Type */}
          <div>
            <label className="block font-poppins text-sm text-charcoal mb-1.5">
              Event Type
            </label>
            <select
              name="eventType"
              value={form.eventType}
              onChange={handleChange}
              className={inputClass}
            >
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Religious</option>
              <option>Corporate</option>
              <option>Other</option>
            </select>
          </div>

          {/* Event Date */}
          <div>
            <label className="block font-poppins text-sm text-charcoal mb-1.5">
              Event Date
            </label>
            <input
              type="date"
              name="eventDate"
              value={form.eventDate}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Guest Count */}
          <div>
            <label className="block font-poppins text-sm text-charcoal mb-1.5">
              Number of Guests
            </label>
            <input
              type="number"
              name="guestCount"
              value={form.guestCount}
              onChange={handleChange}
              placeholder="Minimum 10"
              min={10}
              className={inputClass}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-poppins text-sm text-charcoal mb-1.5">
              Additional Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Any special requirements or questions..."
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-poppins font-semibold text-base px-8 py-4 rounded-full hover:brightness-110 active:scale-[0.98] transition-all duration-300 animate-pulse-btn"
          >
            <MessageCircle className="w-5 h-5" />
            Send on WhatsApp
          </button>

          <p className="font-inter text-xs text-charcoal/60 text-center">
            You will be redirected to WhatsApp to complete your booking.
          </p>
        </form>
      </div>
    </SectionReveal>
  );
}
