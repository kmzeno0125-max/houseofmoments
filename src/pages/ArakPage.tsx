import { motion } from 'framer-motion';
import { CreditCard, Info, Gift, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const EMAIL = 'maglodhouseofmoments@gmail.com';

const t = {
  hu: {
    supra: 'HOUSE OF MOMENTS',
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
    giftDesc:
      'Lepd meg szeretteidet pihentető élménnyel a House of Moments Maglódon. Ajándékutalvány 2 éjszakás tartózkodásra vagy tetszőleges összegben is igényelhető. Az utalvány online kérhető, a vásárlást követően pedig e-mailben küldjük ki. A részletekért vedd fel velünk a kapcsolatot.',
    giftBullet1: '2 éjszakás ajándékutalvány',
    giftBullet2: 'Tetszőleges összegű ajándékutalvány',
    giftCta: 'Érdeklődöm az ajándékutalványról',
    giftSubject: 'Érdeklődés ajándékutalványról - House of Moments',
    customTitle: 'Egyedi ajánlat',
    customDesc:
      'Hosszabb tartózkodás vagy egyedi igény esetén kérj személyre szabott ajánlatot.',
    customCta: 'Foglalási ajánlatot kérek',
    customSubject: 'Egyedi árajánlat kérés - House of Moments',
  },
  en: {
    supra: 'HOUSE OF MOMENTS',
    heroTitle: 'Prices',
    heroSub: 'Transparent pricing, premium experience – with a personalised offer.',
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
    infoTax: 'There is no tourism tax in Maglód.',
    infoDeposit: 'Deposit: 50% of the total amount.',
    infoCheckin: 'Self check-in with a key-safe code.',
    giftTitle: 'Gift Voucher',
    giftDesc:
      'Surprise your loved ones with a relaxing experience at the House of Moments in Maglód. Gift vouchers are available for a 2-night stay or for any custom amount. The voucher can be requested online and will be sent via email after purchase. Contact us for details.',
    giftBullet1: '2-night gift voucher',
    giftBullet2: 'Gift voucher for any amount',
    giftCta: 'Ask About the Gift Voucher',
    giftSubject: 'Gift voucher inquiry - House of Moments',
    customTitle: 'Custom Offer',
    customDesc:
      'For extended stays or special requests, ask for a personalised offer.',
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
            {tx.supra}
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

      {/* Cards Grid */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Top Left – Szállásdíjak */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-plum rounded-3xl p-6 sm:p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                  <CreditCard size={18} className="text-gold" />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {tx.ratesTitle}
                </h2>
              </div>

              {/* Price rows */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between border border-ink/20 rounded-xl px-5 py-3.5">
                  <span className="text-ink/90 text-sm sm:text-base">{tx.weekday}</span>
                  <span className="text-gold font-semibold text-sm sm:text-base">
                    {tx.weekdayPrice}
                  </span>
                </div>
                <div className="flex items-center justify-between border border-ink/20 rounded-xl px-5 py-3.5">
                  <span className="text-ink/90 text-sm sm:text-base">{tx.weekend}</span>
                  <span className="text-gold font-semibold text-sm sm:text-base">
                    {tx.weekendPrice}
                  </span>
                </div>
              </div>

              {/* Notes */}
              <p className="text-ink/50 text-xs sm:text-sm leading-relaxed">
                {tx.ratesNote1}
              </p>
              <p className="text-ink/50 text-xs sm:text-sm leading-relaxed mt-1">
                {tx.ratesNote2}
              </p>
            </motion.article>

            {/* Top Right – Fontos tudnivalók */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-plum rounded-3xl p-6 sm:p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                  <Info size={18} className="text-gold" />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {tx.infoTitle}
                </h2>
              </div>

              {/* Info rows */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border border-ink/20 rounded-xl px-5 py-3.5">
                  <span className="text-ink/90 text-sm sm:text-base">{tx.infoPet}</span>
                  <span className="text-gold font-semibold text-sm sm:text-base">
                    {tx.infoPetPrice}
                  </span>
                </div>
                <div className="border border-ink/20 rounded-xl px-5 py-3.5">
                  <span className="text-ink/90 text-sm sm:text-base">{tx.infoPayment}</span>
                </div>
                <div className="border border-ink/20 rounded-xl px-5 py-3.5">
                  <span className="text-ink/90 text-sm sm:text-base">{tx.infoTax}</span>
                </div>
                <div className="border border-ink/20 rounded-xl px-5 py-3.5">
                  <span className="text-ink/90 text-sm sm:text-base">{tx.infoDeposit}</span>
                </div>
                <div className="border border-ink/20 rounded-xl px-5 py-3.5">
                  <span className="text-ink/90 text-sm sm:text-base">{tx.infoCheckin}</span>
                </div>
              </div>
            </motion.article>

            {/* Bottom Left – Ajándékutalvány */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-plum rounded-3xl p-6 sm:p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-rose/15 flex items-center justify-center">
                  <Gift size={18} className="text-rose" />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {tx.giftTitle}
                </h2>
              </div>

              <p className="text-ink/70 text-sm leading-relaxed mb-5">
                {tx.giftDesc}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-ink text-sm font-medium">
                  <span className="text-gold">&#10022;</span>
                  {tx.giftBullet1}
                </li>
                <li className="flex items-center gap-2 text-ink text-sm font-medium">
                  <span className="text-gold">&#10022;</span>
                  {tx.giftBullet2}
                </li>
              </ul>

              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(tx.giftSubject)}`}
                className="inline-flex items-center gap-2 border border-gold/50 text-gold hover:bg-gold/10 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200"
              >
                {tx.giftCta}
                <ArrowRight size={14} />
              </a>
            </motion.article>

            {/* Bottom Right – Egyedi ajánlat */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-plum rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col"
            >
              <h2 className="font-display text-xl sm:text-2xl font-bold text-ink mb-4">
                {tx.customTitle}
              </h2>

              <p className="text-ink/70 text-sm leading-relaxed mb-8">
                {tx.customDesc}
              </p>

              <div className="mt-auto">
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(tx.customSubject)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold to-rose text-white font-medium text-sm shadow-lg hover:shadow-gold/30 hover:scale-[1.02] transition-all duration-300"
                >
                  {tx.customCta}
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </main>
  );
}
