import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import selfieCornerImg from '../assets/telegram-cloud-photo-size-4-5800785669410983785-x.jpg';

export default function SelfieCorner() {
  const { lang } = useLanguage();

  const t = {
    title1: lang === 'en' ? 'The House of Moments ' : 'A House of Moments ',
    title2: lang === 'en' ? 'selfie corner' : 'szelfi sarka',
    desc: lang === 'en'
      ? 'The iconic flower wall with neon sign — our guests\' favorite photo spot. Capture the moment and take the vibe home with you.'
      : 'Az ikonikus virágfal neon felirattal — a vendégeink kedvenc fotóhelye. Örökítsd meg a pillanatot, és vidd haza magaddal a hangulatot.',
    alt: lang === 'en'
      ? 'House of Moments selfie corner with flower wall and neon sign'
      : 'House of Moments szelfi sarok virágfallal és neon felirattal',
  };

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-cream to-blush/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem]">
              <img
                src={selfieCornerImg}
                alt={t.alt}
                className="w-full h-[380px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose/20 to-transparent mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-8 bg-rose/20 blur-2xl rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-plum leading-tight">
              {t.title1}
              <span className="neon-glow text-rose italic">{t.title2}</span>
            </h2>
            <p className="mt-6 text-plum/70 text-base sm:text-lg leading-relaxed">
              {t.desc}
            </p>
            <div className="mt-8">
              <span className="inline-block px-5 py-2.5 rounded-full bg-rose/10 border border-rose/30 text-rose font-medium">
                #HouseOfMomentsMaglod
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
