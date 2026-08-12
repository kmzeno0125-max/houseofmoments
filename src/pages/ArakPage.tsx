import { motion } from 'framer-motion';
import { CreditCard, Info, Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const EMAIL = 'maglodhouseofmoments@gmail.com';

const pageText = {
  hu: {
    heroTitle: 'Árak',
    heroSub: 'Átlátható árazás, prémium élmény – személyre szabott ajánlattal.',
    ratesTitle: 'Szállásdíjak',
    weekday: 'Vasárnaptól csütörtökig',
    weekdayPrice: '55.000 Ft / éj',
    weekend: 'Péntek és szombat',
    weekendPrice: '65.000 Ft / éj',
    ratesNote1: 'Az árak a teljes házra vonatkoznak (max. 4 fő).',
    ratesNote2: 'Kiemelt időszakokban és speciális dátumokon az árak eltérhetnek.',
    infoTitle: 'Fontos tudnivalók',
    infoPet: 'Kisállatbarát szállás',
    infoPetPrice: '5.000 Ft / alkalom',
    infoPayment: 'Fizetési mód: banki átutalás.',
    infoTax: 'Maglódon nincs idegenforgalmi adó.',
    infoDeposit: 'Foglaló: a teljes összeg 50%-a.',
    infoCheckin: 'Önálló bejutás széfkódos rendszerrel.',
    giftTitle: 'Ajándékutalvány',
    giftDesc: 'Lepd meg szeretteidet pihentető élménnyel a House of Moments Maglódon. Ajándékutalvány 2 éjszakás tartózkodásra vagy tetszőleges összegben is igényelhető. Az utalvány online kérhető, a vásárlást követően pedig e-mailben küldjük ki. A részletekért vedd fel velünk a kapcsolatot.',
    giftBullet1: '2 éjszakás ajándékutalvány',
    giftBullet2: 'Tetszőleges összegű ajándékutalvány',
    giftCta: 'Érdeklődöm az ajándékutalványról',
    giftSubject: 'Érdeklődés ajándékutalványról - House of Moments',
    customTitle: 'Egyedi ajánlat',
    customDesc: 'Hosszabb tartózkodás vagy egyedi igény esetén kérj személyre szabott ajánlatot.',
    customCta: 'Foglalási ajánlatot kérek',
    customSubject: 'Egyedi árajánlat kérés - House of Moments',
  },
  en: {
    heroTitle: 'Prices',
    heroSub: 'Transparent pricing, premium experience – with a personalized offer.',
    ratesTitle: 'Accommodation Rates',
    weekday: 'Sunday to Thursday',
    weekdayPrice: '55,000 Ft / night',
    weekend: 'Friday and Saturday',
    weekendPrice: '65,000 Ft / night',
    ratesNote1: 'The rates apply to the entire house (maximum 4 guests).',
    ratesNote2: 'Rates may vary during peak periods and on special dates.',
    infoTitle: 'Important Information',
    infoPet: 'Pet-friendly accommodation',
    infoPetPrice: '5,000 Ft / stay',
    infoPayment: 'Payment method: bank transfer.',
    infoTax: 'No tourism tax applies in Maglód.',
    infoDeposit: 'Deposit: 50% of the total amount.',
    infoCheckin: 'Self check-in with key-safe code.',
    giftTitle: 'Gift Voucher',
    giftDesc: 'Surprise your loved ones with a relaxing experience at House of Moments Maglód. Gift vouchers are available for a 2-night stay or for any amount. The voucher can be requested online, and it is sent by email after purchase. Contact us for details.',
    giftBullet1: '2-night gift voucher',
    giftBullet2: 'Gift voucher for any amount',
    giftCta: 'Ask About the Gift Voucher',
    giftSubject: 'Gift voucher inquiry - House of Moments',
    customTitle: 'Custom Offer',
    customDesc: 'For a longer stay or special requirements, request a personalized offer.',
    customCta: 'Request a Booking Offer',
    customSubject: 'Custom quote request - House of Moments',
  },
};

export default function ArakPage() {
  const { lang } = useLanguage();
  const t = pageText[lang];

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
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-ink/60 text-base sm:text-lg max-w-xl mx-auto"
          >
            {t.heroSub}
          </motion.p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* ===== TOP LEFT — Szállásdíjak ===== */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-plum border border-gold/15 rounded-2xl p-7 sm:p-9 shadow-lg"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <CreditCard size={18} className="text-gold" />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {t.ratesTitle}
                </h2>
              </div>

              {/* Price rows */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between rounded-xl border border-ink/10 px-5 py-4">
                  <span className="text-ink/80 text-sm sm:text-base">{t.weekday}</span>
                  <span className="text-gold font-bold text-base sm:text-lg whitespace-nowrap ml-4">
                    {t.weekdayPrice}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-ink/10 px-5 py-4">
                  <span className="text-ink/80 text-sm sm:text-base">{t.weekend}</span>
                  <span className="text-gold font-bold text-base sm:text-lg whitespace-nowrap ml-4">
                    {t.weekendPrice}
                  </span>
                </div>
              </div>

              {/* Notes */}
              <p className="text-ink/50 text-xs sm:text-sm leading-relaxed">
                {t.ratesNote1}
              </p>
              <p className="text-ink/50 text-xs sm:text-sm leading-relaxed mt-1">
                {t.ratesNote2}
              </p>
            </motion.article>

            {/* ===== TOP RIGHT — Fontos tudnivalók ===== */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-plum border border-gold/15 rounded-2xl p-7 sm:p-9 shadow-lg"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Info size={18} className="text-gold" />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {t.infoTitle}
                </h2>
              </div>

              {/* Info rows */}
              <div className="space-y-3">
                {/* Pet - with price */}
                <div className="flex items-center justify-between rounded-xl border border-ink/10 px-5 py-4">
                  <span className="text-ink/80 text-sm sm:text-base">{t.infoPet}</span>
                  <span className="text-gold font-bold text-sm sm:text-base whitespace-nowrap ml-4">
                    {t.infoPetPrice}
                  </span>
                </div>
                {/* Payment */}
                <div className="rounded-xl border border-ink/10 px-5 py-4">
                  <span className="text-ink/80 text-sm sm:text-base">{t.infoPayment}</span>
                </div>
                {/* Tax */}
                <div className="rounded-xl border border-ink/10 px-5 py-4">
                  <span className="text-ink/80 text-sm sm:text-base">{t.infoTax}</span>
                </div>
                {/* Deposit */}
                <div className="rounded-xl border border-ink/10 px-5 py-4">
                  <span className="text-ink/80 text-sm sm:text-base">{t.infoDeposit}</span>
                </div>
                {/* Check-in */}
                <div className="rounded-xl border border-ink/10 px-5 py-4">
                  <span className="text-ink/80 text-sm sm:text-base">{t.infoCheckin}</span>
                </div>
              </div>
            </motion.article>

            {/* ===== BOTTOM LEFT — Ajándékutalvány ===== */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-plum border border-gold/15 rounded-2xl p-7 sm:p-9 shadow-lg"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center">
                  <Gift size={18} className="text-rose" />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {t.giftTitle}
                </h2>
              </div>

              {/* Description */}
              <p className="text-ink/70 text-sm sm:text-base leading-relaxed mb-5">
                {t.giftDesc}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-7">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold text-sm mt-0.5">&#10022;</span>
                  <span className="text-ink/80 text-sm font-medium">{t.giftBullet1}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold text-sm mt-0.5">&#10022;</span>
                  <span className="text-ink/80 text-sm font-medium">{t.giftBullet2}</span>
                </li>
              </ul>

              {/* CTA - outlined button matching reference */}
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.giftSubject)}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-gold/40 text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300 font-medium text-sm"
              >
                {t.giftCta}
                <ArrowRight size={15} />
              </a>
            </motion.article>

            {/* ===== BOTTOM RIGHT — Egyedi ajánlat ===== */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-plum border border-gold/15 rounded-2xl p-7 sm:p-9 shadow-lg flex flex-col"
            >
              <h2 className="font-display text-xl sm:text-2xl font-bold text-ink mb-4">
                {t.customTitle}
              </h2>
              <p className="text-ink/70 text-sm sm:text-base leading-relaxed mb-8">
                {t.customDesc}
              </p>

              {/* CTA - gradient button matching reference */}
              <div className="mt-auto">
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(t.customSubject)}`}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-rose text-white font-semibold text-sm shadow-xl hover:shadow-gold/30 hover:scale-[1.02] transition-all duration-300"
                >
                  {t.customCta}
                  <ArrowRight size={15} />
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </main>
  );
}
