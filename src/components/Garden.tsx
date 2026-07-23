import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FairyLights from './FairyLights';
import { useLanguage } from '../context/LanguageContext';
import gardenNightBg from '../assets/files_10287071-2026-05-27T12-55-07-257Z-image.webp';

export default function Garden() {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const badges = lang === 'en'
    ? ['Evening mood lighting', 'Outdoor Jacuzzi', 'Covered terrace']
    : ['Esti hangulatvilágítás', 'Szabadtéri Jacuzzi', 'Fedett terasz'];

  const t = {
    title: lang === 'en' ? 'Garden leisure and shared experiences' : 'Kerti kikapcsolódás és közös élmények',
    p1: lang === 'en'
      ? 'Guests can enjoy grilling and goulash cooking with full equipment provided. The covered terrace and atmospheric outdoor lighting provide the perfect setting for shared dinners, evening conversations and relaxed unwinding.'
      : 'Vendégeink számára grillezési és bográcsozási lehetőség is biztosított teljes felszereléssel. A fedett terasz és a hangulatos kültéri világítás tökéletes helyszínt biztosít közös vacsorákhoz, esti beszélgetésekhez és nyugodt kikapcsolódáshoz.',
    p2: lang === 'en'
      ? 'The house also has a vinyl record player, a fondue set, and outdoor and indoor games to make your time together even more special.'
      : 'A házban bakelit lemezlejátszó, fondü készlet, valamint kültéri és beltéri játékok is rendelkezésre állnak, hogy az együtt töltött idő még különlegesebb legyen.',
    alt: lang === 'en'
      ? 'Cozy garden with champagne and colorful fairy lights at night'
      : 'Hangulatos kert pezsgővel és színes fényfüzérekkel éjjel',
  };

  return (
    <section ref={ref} className="relative py-0 overflow-hidden">
      <div className="relative h-[80vh] sm:h-[85vh] overflow-hidden">
        <motion.div style={{ y: imgY }} className="absolute inset-0 -top-20 -bottom-20">
          <img
            src={gardenNightBg}
            alt={t.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/50 to-transparent" />
        <FairyLights />

        <div className="absolute inset-0 flex items-end z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 w-full">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight"
              >
                {t.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-4 text-ink/80 text-sm sm:text-base leading-relaxed space-y-2"
              >
                <p>{t.p1}</p>
                <p>{t.p2}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 flex flex-wrap gap-3"
              >
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 rounded-full bg-gold/15 border border-gold/40 text-gold text-sm font-medium backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
