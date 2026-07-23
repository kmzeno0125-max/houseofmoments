import { motion } from 'framer-motion';
import { Wine, Tv, Speaker, Bath, Flame, ShowerHead } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Amenities() {
  const { lang } = useLanguage();

  const amenities = lang === 'en'
    ? [
        { icon: Wine, label: 'Welcome champagne' },
        { icon: Tv, label: 'Netflix & TV' },
        { icon: Speaker, label: 'Bluetooth speaker' },
        { icon: Bath, label: 'Covered, heated jacuzzi' },
        { icon: Flame, label: 'Grill and goulash pot' },
        { icon: ShowerHead, label: 'Towels, shampoo and shower gel provided' },
      ]
    : [
        { icon: Wine, label: 'Bekészített pezsgő' },
        { icon: Tv, label: 'Netflix & TV' },
        { icon: Speaker, label: 'Bluetooth hangszóró' },
        { icon: Bath, label: 'Fedett, fűtött jacuzzi' },
        { icon: Flame, label: 'Grill és bográcsozási lehetőség' },
        { icon: ShowerHead, label: 'Törölköző, sampon és tusfürdő biztosított' },
      ];

  return (
    <section className="relative pt-12 pb-8 sm:pt-14 sm:pb-10 bg-cream border-b border-blush/20 overflow-hidden">
      {/* Top gradient that continues the hero fade — soft warm tint flowing into clean cream */}
      <div
        className="absolute inset-x-0 top-0 h-[100px] sm:h-[140px] pointer-events-none"
        style={{
          background: `linear-gradient(to bottom,
            rgba(43,27,46,0.06) 0%,
            rgba(246,213,225,0.10) 40%,
            rgba(251,245,239,0) 100%
          )`,
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <div className="w-14 h-14 rounded-full border-2 border-gold/30 flex items-center justify-center transition-all duration-300 group-hover:border-gold group-hover:bg-gold/5 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-gold/10">
                <item.icon size={22} className="text-plum/70 transition-colors group-hover:text-gold" />
              </div>
              <span className="text-xs sm:text-sm text-plum/70 font-medium text-center leading-tight">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
