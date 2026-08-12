import { motion } from 'framer-motion';
import { CalendarDays, PawPrint, Info, Gift, Sparkles, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const EMAIL = 'maglodhouseofmoments@gmail.com';

const t = {
  hu: {
    heroTitle: 'Szállásdíjak',
    heroSub: 'Az árak a teljes házra vonatkoznak (max. 4 fő).',
    weekday: 'Vasárnaptól csütörtökig',
    weekend: 'Péntek és szombat',
    perNight: '/ éjszaka',
    petTitle: 'Kisállatbarát szállás',
    petPrice: '5.000 Ft / alkalom',
    infoTitle: 'Fontos tudnivalók',
    info1: 'Az árak a teljes házra vonatkoznak (max. 4 fő).',
    info2: 'Az árak az idegenforgalmi adót nem tartalmazzák.',
    info3: 'Kiemelt időszakokban és speciális dátumokon az árak eltérhetnek.',
    info4: 'Önálló bejutás széfkódos rendszerrel.',
    info5: 'A foglalás foglaló befizetésével (50%) válik véglegesítetté.',
    giftTitle: 'Ajándékutalvány',
    giftDesc: 'Lepd meg szeretteidet egy különleges élménnyel! Ajándékutalványunkat tetszőleges összegre vagy konkrét éjszakaszámra állítjuk ki.',
    giftCta: 'Érdeklődöm az ajándékutalványról',
    giftSubject: 'Érdeklődés ajándékutalványról - House of Moments',
    customTitle: 'Egyedi ajánlat',
    customDesc: 'Hosszabb tartózkodás, csoportos foglalás vagy különleges alkalom? Kérj egyedi árajánlatot!',
    customCta: 'Foglalási ajánlatot kérek',
    customSubject: 'Egyedi árajánlat kérés - House of Moments',
  },
  en: {
    heroTitle: 'Accommodation Rates',
    heroSub: 'The rates apply to the entire house (maximum 4 guests).',
    weekday: 'Sunday to Thursday',
    weekend: 'Friday and Saturday',
    perNight: '/ night',
    petTitle: 'Pet-friendly accommodation',
    petPrice: '5,000 Ft / stay',
    infoTitle: 'Important Information',
    info1: 'The rates apply to the entire house (maximum 4 guests).',
    info2: 'Rates do not include tourism tax.',
    info3: 'Rates may vary during peak periods and on special dates.',
    info4: 'Self check-in with a key-safe code.',
    info5: 'Bookings are confirmed upon payment of a 50% deposit.',
    giftTitle: 'Gift Voucher',
    giftDesc: 'Surprise your loved ones with a special experience! We issue gift vouchers for any amount or a specific number of nights.',
    giftCta: 'Ask About a Gift Voucher',
    giftSubject: 'Gift voucher inquiry - House of Moments',
    customTitle: 'Custom Offer',
    customDesc: 'Extended stay, group booking, or special occasion? Request a custom quote!',
    customCta: 'Request a Booking Offer',
    customSubject: 'Custom quote request - House of Moments',
  },
};

export default function ArakPage() {
  const { lang } = useLanguage();
  const tx = t[lang];

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-plum noise-texture relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
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
            {tx.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-ink/60 text-base sm:text-lg max-w-xl mx-auto"
          >
            {tx.heroSub}
          </motion.p>
        </div>
      </section>

      {/* Prices */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {/* Weekday price */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-plum border border-gold/15 rounded-2xl p-6 sm:p-8 shadow-lg text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <CalendarDays size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">
                {tx.weekday}
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-gold">55.000 Ft</p>
              <p className="text-ink/50 text-sm mt-1">{tx.perNight}</p>
            </motion.article>

            {/* Weekend price */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-plum border border-gold/15 rounded-2xl p-6 sm:p-8 shadow-lg text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <CalendarDays size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">
                {tx.weekend}
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-gold">65.000 Ft</p>
              <p className="text-ink/50 text-sm mt-1">{tx.perNight}</p>
            </motion.article>
          </div>

          {/* Pet fee */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 bg-plum border border-gold/15 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <PawPrint size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {tx.petTitle}
                </h3>
                <p className="text-gold font-semibold">{tx.petPrice}</p>
              </div>
            </div>
          </motion.article>

          {/* Important info */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 bg-plum border border-gold/15 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <Info size={18} className="text-gold flex-shrink-0" />
              <h3 className="font-display text-lg font-semibold text-ink">
                {tx.infoTitle}
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-ink/70 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#8226;</span>
                {tx.info1}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#8226;</span>
                {tx.info2}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#8226;</span>
                {tx.info3}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#8226;</span>
                {tx.info4}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#8226;</span>
                {tx.info5}
              </li>
            </ul>
          </motion.article>

          {/* Gift Voucher */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 bg-plum bg-gradient-to-br from-gold/15 to-rose/10 border border-gold/20 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-3">
              <Gift size={18} className="text-gold flex-shrink-0" />
              <h3 className="font-display text-lg font-semibold text-ink">
                {tx.giftTitle}
              </h3>
            </div>
            <p className="text-ink/70 text-sm leading-relaxed mb-4">
              {tx.giftDesc}
            </p>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(tx.giftSubject)}`}
              className="inline-flex items-center gap-2 text-gold hover:text-rose transition-colors font-medium text-sm"
            >
              <Mail size={14} />
              {tx.giftCta}
            </a>
          </motion.article>

          {/* Custom offer */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 bg-plum border border-gold/15 rounded-2xl p-6 sm:p-8 shadow-lg text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-gold/10 flex items-center justify-center mb-4">
              <Sparkles size={20} className="text-gold" />
            </div>
            <h3 className="font-display text-lg font-semibold text-ink mb-2">
              {tx.customTitle}
            </h3>
            <p className="text-ink/70 text-sm leading-relaxed mb-4">
              {tx.customDesc}
            </p>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(tx.customSubject)}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-rose text-white font-medium text-sm shadow-lg hover:shadow-gold/30 hover:scale-[1.02] transition-all duration-300"
            >
              <Mail size={16} />
              {tx.customCta}
            </a>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
