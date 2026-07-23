import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import aboutImage from '../assets/welcome-about.png';

export default function Welcome() {
  const { lang } = useLanguage();
  const [ref] = useInView({ triggerOnce: true, threshold: 0.2 });

  const stats = lang === 'en'
    ? [
        { title: 'Private wellness', label: 'with covered jacuzzi' },
        { title: 'Intimate atmosphere', label: 'with LED lighting' },
        { title: 'Welcome champagne', label: 'on request' },
      ]
    : [
        { title: 'Privát wellness', label: 'fedett jacuzzival' },
        { title: 'Meghitt hangulat', label: 'LED világítással' },
        { title: 'Bekészített pezsgő', label: 'kérésre' },
      ];

  const t = {
    kicker: lang === 'en' ? 'The House' : 'A szállás',
    title: lang === 'en' ? 'Private wellness in Maglód' : 'Privát wellness élmény Maglódon',
    p1: lang === 'en'
      ? 'Every detail of House of Moments is designed for peaceful relaxation and recharging. The intimate, uniquely styled spaces provide the perfect setting for romantic getaways, shared experiences, and undisturbed rest.'
      : 'A House of Moments minden részlete a nyugodt pihenést és feltöltődést szolgálja. A meghitt hangulatú, egyedi stílusú terek tökéletes környezetet biztosítanak romantikus kikapcsolódáshoz, közös élményekhez és zavartalan pihenéshez.',
    p2: lang === 'en'
      ? 'The exotic green room with its natural atmosphere helps you escape the everyday, while the moodier room with warm lights and elegant design makes your stay even more memorable.'
      : 'Az egzotikus hangulatú zöld szoba természetközeli atmoszférájával segít kiszakadni a hétköznapokból, míg a különlegesebb hangulatú szoba meleg fényekkel és elegáns kialakítással teszi még emlékezetesebbé az itt töltött időt.',
    alt: lang === 'en'
      ? 'House of Moments Maglód - modern accommodation with evening lighting'
      : 'House of Moments Maglód - modern szállás esti megvilágítással',
  };

  return (
    <section id="about" className="pt-10 pb-24 sm:pt-14 sm:pb-36 bg-cream relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with overlapping stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt={t.alt}
              className="w-full h-[400px] sm:h-[520px] object-cover rounded-[2rem] shadow-2xl block"
            />

            {/* Overlapping stat badges on image edge */}
            <div className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                    className="bg-white/95 backdrop-blur-md rounded-xl px-5 py-3 shadow-xl border border-blush/30"
                  >
                    <p className="font-display font-bold text-plum text-base leading-tight">
                      {stat.title}
                    </p>
                    <p className="text-[11px] text-plum/50 mt-1 font-medium">{stat.label}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-4"
            >
              {t.kicker}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-plum leading-tight"
            >
              {t.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 text-plum/70 text-base sm:text-lg leading-relaxed"
            >
              {t.p1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
              viewport={{ once: true }}
              className="mt-4 text-plum/70 text-base sm:text-lg leading-relaxed"
            >
              {t.p2}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
