import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const reviewsData = {
  hu: [
    {
      text: 'Gyönyörű, hangulatos hely, a kert este egyszerűen varázslatos. A Jacuzzi a kedvencünk volt!',
      author: 'Anna & Péter',
      source: 'Facebook',
    },
    {
      text: 'Prémium kényelem Budapest közelében. A szelfi sarok zseniális, tele lett a telefonunk fotókkal.',
      author: 'Réka',
      source: 'Szállás.hu',
    },
    {
      text: 'Tökéletes választás reptér előtti éjszakára, mégis olyan, mintha nyaralnánk.',
      author: 'Gábor',
      source: 'Airbnb',
    },
    {
      text: 'Már a fotóktól is tudtuk, hogy jó lesz, de élőben még szebb! Visszamegyünk nyáron.',
      author: 'Viki & Dani',
      source: 'Facebook',
    },
    {
      text: 'A szobák gyönyörűek, a kert teljesen más, mint a szokásos szállások. Nagyon kreatív!',
      author: 'Tamás',
      source: 'Szállás.hu',
    },
    {
      text: 'Párommal jöttünk, és olyan volt, mintha egy filmbe csöppentünk volna. Imádtuk a Passion szobát!',
      author: 'Zsófi',
      source: 'Facebook',
    },
  ],
  en: [
    {
      text: 'Beautiful, cozy place, the garden in the evening is simply magical. The jacuzzi was our favorite!',
      author: 'Anna & Peter',
      source: 'Facebook',
    },
    {
      text: 'Premium comfort near Budapest. The selfie corner is brilliant, our phones filled up with photos.',
      author: 'Reka',
      source: 'Szállás.hu',
    },
    {
      text: 'Perfect choice for a night before a flight, yet it feels like we are on vacation.',
      author: 'Gabor',
      source: 'Airbnb',
    },
    {
      text: 'We knew from the photos it would be good, but in person it is even more beautiful! We will go back in the summer.',
      author: 'Viki & Dani',
      source: 'Facebook',
    },
    {
      text: 'The rooms are gorgeous, the garden is completely different from usual accommodations. Very creative!',
      author: 'Tamas',
      source: 'Szállás.hu',
    },
    {
      text: 'We came as a couple, and it felt like we had stepped into a movie. We loved the Passion room!',
      author: 'Zsofi',
      source: 'Facebook',
    },
  ],
};

export default function TestimonialsPage() {
  const { lang } = useLanguage();
  const reviews = reviewsData[lang];

  const t = {
    heroTitle: lang === 'en' ? 'What Our Guests Said' : 'Vendégeink mondták',
    heroSub: lang === 'en'
      ? 'Real feedback from our guests — based on Facebook, Szállás.hu and Airbnb reviews.'
      : 'Valódi visszajelzések vendégeinktől — Facebook, Szállás.hu és Airbnb értékelések alapján.',
  };

  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-plum noise-texture relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3"
          >
            House of Moments
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink"
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-ink/60 text-base sm:text-lg max-w-xl"
          >
            {t.heroSub}
          </motion.p>
        </div>
      </section>

      {/* Staggered testimonials */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
            {reviews.map((review, i) => {
              const isOffset = i % 2 !== 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, x: isOffset ? 40 : -40 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className={`relative ${isOffset ? 'sm:ml-auto sm:mr-0' : 'sm:mr-auto sm:ml-0'} max-w-lg`}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-[1.5rem] p-7 sm:p-9 border border-blush/30 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={16} className="fill-gold text-gold" />
                      ))}
                    </div>

                    <p className="text-plum/80 text-base sm:text-lg leading-relaxed italic font-body">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <p className="text-plum font-medium text-sm">— {review.author}</p>
                      <span className="text-[11px] uppercase tracking-wider text-plum/40 font-medium">
                        {review.source}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
