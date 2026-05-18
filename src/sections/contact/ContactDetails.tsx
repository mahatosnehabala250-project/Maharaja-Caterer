import {
  Shield,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
} from 'lucide-react';
import SectionReveal from '../../components/SectionReveal';

const contactItems = [
  {
    icon: Shield,
    label: 'FSSAI Lic. No. 12817016000590',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Near Fan House, Nadiha, Chowk Bazar, Purulia – 723101',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Tata Road, Dulmi Nadiha, Purulia – 723102',
    href: null,
  },
  {
    icon: Phone,
    label: '+91 89450 05456',
    href: 'tel:+918945005456',
  },
  {
    icon: Phone,
    label: '+91 82938 29200',
    href: 'tel:+918293829200',
  },
  {
    icon: MessageCircle,
    label: '+91 89450 05456 (WhatsApp)',
    href: 'https://wa.me/918945005456',
  },
  {
    icon: Mail,
    label: 'maharajaCaterer104@gmail.com',
    href: 'mailto:maharajaCaterer104@gmail.com',
  },
  {
    icon: Mail,
    label: 'maharajacaterer24@gmail.com',
    href: 'mailto:maharajacaterer24@gmail.com',
  },
  {
    icon: Clock,
    label: 'Mon – Sun (9:00 AM – 10:00 PM)',
    href: null,
  },
];

export default function ContactDetails() {
  return (
    <SectionReveal delay={0.2}>
      <div className="bg-cream border-2 border-gold rounded-2xl p-6 lg:p-10">
        <h3 className="font-poppins font-semibold text-maroon text-xl mb-6">
          Contact Information
        </h3>

        <div className="space-y-0">
          {contactItems.map((item, index) => {
            const content = (
              <div
                className={`flex items-start gap-3 py-3.5 ${
                  index < contactItems.length - 1 ? 'border-b border-gold/20' : ''
                } hover:pl-2 hover:bg-gold/5 transition-all duration-300 group`}
              >
                <item.icon className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="font-inter text-sm text-charcoal group-hover:text-maroon transition-colors">
                  {item.label}
                </span>
              </div>
            );

            if (item.href) {
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
