import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FairyLights from './FairyLights';
import { useLanguage } from '../context/LanguageContext';
import heroBg from '../assets/hero-bg.png';

export default function Hero() {
  const { lang } = useLanguage();

  const titleWords = lang === 'en'
    ? ['Relax', 'with us', 'in Maglód']
    : ['Pihenj', 'nálunk', 'Maglódon'];

  const t = {
    kicker: lang === 'en' ? 'Maglód · Near Budapest' : 'Maglód · Budapest közelében',
    subtitle: lang === 'en'
      ? 'Cozy rooms, premium comfort and a magical garden with a jacuzzi — only about 30 minutes from Budapest and 13 minutes from the airport.'
      : 'Hangulatos szobák, prémium kényelem és egy varázslatos kert Jacuzzival — mindössze kb. 30 percre Budapesttől és kb. 13 percre a repülőtértől.',
    cta: lang === 'en' ? 'Booking' : 'Foglalás',
    explore: lang === 'en' ? 'Explore the house' : 'Fedezd fel a házat',
    rating: lang === 'en' ? 'Guest rating' : 'Vendégeink értékelése',
    airport: lang === 'en' ? 'from the airport' : 'a reptértől',
    alt: lang === 'en'
      ? 'House of Moments Maglód - premium accommodation in the evening'
      : 'House of Moments Maglód - prémium szállás esti hangulatban',
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Full-bleed background image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt={t.alt}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Gradient overlay: deep plum-burgundy left, fading to transparent right */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(105deg,
            rgba(45,23,49,0.92) 0%,
            rgba(58,33,64,0.85) 20%,
            rgba(58,33,64,0.7) 35%,
            rgba(50,28,55,0.5) 50%,
            rgba(45,23,49,0.28) 65%,
            rgba(45,23,49,0.1) 80%,
            transparent 95%
          )`,
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(to bottom,
            rgba(45,23,49,0.3) 0%,
            transparent 40%,
            transparent 70%,
            rgba(45,23,49,0.2) 100%
          )`,
        }}
      />

      {/* Bottom gradient — soft fade into cream */}
      <div
        className="absolute inset-x-0 bottom-0 h-[120px] sm:h-[160px] z-[3] pointer-events-none"
        style={{
          background: `linear-gradient(to bottom,
            transparent 0%,
            rgba(251,245,239,0.3) 40%,
            rgba(251,245,239,0.7) 70%,
            #FBF5EF 100%
          )`,
        }}
      />

      <FairyLights />

      {/* Content layer */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        {/* Vertical side text */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:block">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold/30 font-body writing-vertical">
            House of Moments &middot; Est. 2024
          </span>
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-32 lg:py-0">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Kicker */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] font-body font-medium mb-6"
            >
              {t.kicker}
            </motion.p>

            {/* Title - word stagger */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-ink leading-[1.1]">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-6 text-ink/75 text-base sm:text-lg max-w-lg font-body leading-relaxed"
            >
              {t.subtitle}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10 flex items-center gap-6 flex-wrap"
            >
              <Link
                to="/kapcsolat"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold to-rose text-white font-semibold shadow-xl hover:shadow-gold/40 hover:scale-105 transition-all duration-300"
              >
                {t.cta}
              </Link>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 text-ink/70 hover:text-gold transition-colors text-sm font-medium border-b border-ink/30 hover:border-gold pb-0.5"
              >
                {t.explore}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating badges - positioned in the bottom-right area of the hero, clear of the transition */}
        <div className="absolute bottom-20 right-6 sm:right-10 lg:right-16 xl:right-20 z-10 hidden sm:flex flex-col gap-3 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-2xl border border-white/30"
            >
              <p className="text-plum font-display font-bold text-lg">4.9 ★</p>
              <p className="text-plum/60 text-xs mt-0.5">{t.rating}</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 1.8 }}
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-2xl border border-white/30"
            >
              <p className="text-plum font-display font-bold text-lg flex items-center gap-1.5">
                <span className="text-base">✈</span> {lang === 'en' ? '13 min' : '13 perc'}
              </p>
              <p className="text-plum/60 text-xs mt-0.5">{t.airport}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-ink/40" size={28} />
        </motion.div>
      </div>
    </section>
  );
}
