import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function CtaBand() {
  const { lang } = useLanguage();

  const t = {
    title: lang === 'en' ? 'Book your getaway' : 'Foglald le a pihenésed',
    desc: lang === 'en'
      ? 'Choose House of Moments for your next getaway — write to us and we\'ll help you plan.'
      : 'Válaszd a House of Moments-et következő kikapcsolódásodhoz — írj nekünk, és segítünk a tervezésben.',
    cta: lang === 'en' ? 'Booking' : 'Foglalás',
  };

  return (
    <section className="relative py-20 sm:py-28 bg-plum overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[80%] h-[200%] bg-wine/40 rotate-12 rounded-[3rem]" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[60%] h-[200%] bg-wine/20 -rotate-6 rounded-[3rem]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight"
        >
          {t.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-5 text-ink/60 text-base sm:text-lg max-w-xl mx-auto"
        >
          {t.desc}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/kapcsolat"
            className="inline-block mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-gold to-rose text-white font-semibold text-lg shadow-2xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
          >
            {t.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
