import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Clock,
  PawPrint,
  CreditCard,
  Users,
  CalendarDays,
  MessageSquare,
  User,
  X,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const EMAIL = 'maglodhouseofmoments@gmail.com';
const PHONE = '+36 20 276 5850';
const PHONE_HREF = 'tel:+36202765850';
const ADDRESS = '2234 Maglód, Mikszáth Kálmán utca 6.';
const MAPS_URL = 'https://share.google/mNI4oyfoU0C7WoIFo';

const pageData = {
  hu: {
    heroTitle: 'Kapcsolat & Foglalás',
    heroSub: 'Írj nekünk, és segítünk megtervezni a tökéletes pihenést.',
    leftTitle: 'Foglalás és érdeklődés',
    leftP1: 'Szállásunk foglalása és az érdeklődés e-mailben vagy telefonon történik. Minden megkeresésre személyesen válaszolunk, így biztos lehetsz benne, hogy minden részlet pontosan a Te igényeidre lesz szabva.',
    emailTitle: 'Foglalási kérés e-mailben',
    emailDesc: 'Annak érdekében, hogy a lehető legpontosabb ajánlatot tudjuk küldeni, kérjük az alábbi adatokat add meg az e-mailben:',
    emailFooter: 'Megkeresésedre általában 24 órán belül válaszolunk visszaigazoló e-mail formájában. Amennyiben kérdésed van, vagy egyedi ajánlatot szeretnél, telefonon is szívesen állunk rendelkezésedre.',
    ctaBtn: 'Foglalási kérés küldése e-mailben',
    quickResponseTitle: 'Gyors válasz',
    quickResponseDesc: 'Kérésedre általában 24 órán belül válaszolunk. Sürgős esetben hívj minket telefonon.',
    responseTime: 'Válasz 24 órán belül',
    pricesTitle: 'Információk & Árak',
    weekday: 'Vasárnaptól csütörtökig',
    weekend: 'Péntek és szombat',
    pricesNote1: 'Az árak a teljes házra vonatkoznak (max. 4 fő).',
    pricesNote2: 'Az árak az idegenforgalmi adót nem tartalmazzák.',
    petLabel: 'Kisállatbarát szállás',
    checkinLabel: 'Önálló bejutás',
    checkinValue: 'széfkódos rendszerrel',
    pricesNote3: 'Kiemelt időszakokban és speciális dátumokon az árak eltérhetnek.',
    contactTitle: 'Elérhetőség',
    customOffer: 'Egyedi, kedvezményes foglalásért hívjon minket!',
    bookingTitle: 'Foglalási folyamat',
    moreInfoTitle: 'További információ',
    moreInfoText: '7 éjszakát meghaladó foglalás esetén ágyneműcsere és takarítás igényelhető.',
    mapLink: 'Megnyitás Google Térképen',
    emailModalTitle: 'Válaszd ki az e-mail platformot',
    emailModalSub: 'Az üzenet előre kitöltve nyílik meg',
    gmailDesc: 'Megnyitás a Gmail webes felületén',
    outlookDesc: 'Megnyitás az Outlook webes felületén',
    yahooDesc: 'Megnyitás a Yahoo Mail felületén',
    mailtoDesc: 'Apple Mail, Outlook desktop, Thunderbird stb.',
    recipientLabel: 'Címzett',
    checklist: [
      { icon: CalendarDays, text: 'Érkezés és távozás dátuma' },
      { icon: Clock, text: 'Éjszakák száma' },
      { icon: Users, text: 'Vendégek száma (felnőtt / gyermek)' },
      { icon: PawPrint, text: 'Kisállat érkezik-e (ha igen, milyen méretű)' },
      { icon: CreditCard, text: 'Tervezett fizetési mód (banki átutalás, készpénz)' },
      { icon: User, text: 'Kapcsolattartási adatok (név, telefonszám)' },
      { icon: MessageSquare, text: 'Esetleges különleges kérések, kérdések' },
    ],
    bookingSteps: [
      'Dátumok és adatok megadása',
      'Visszaigazolás',
      'Foglaló befizetése (50%)',
      'Foglalás véglegesítése',
    ],
    subject: 'Foglalási kérés - House of Moments',
    bodyTemplate: `Kedves House of Moments csapat!

Érkezés dátuma:
Távozás dátuma:
Éjszakák száma:
Vendégek száma (felnőtt/gyermek):
Kisállat érkezik-e:
Fizetési mód:
Név:
Telefonszám:
Megjegyzés:

Köszönettel:`,
  },
  en: {
    heroTitle: 'Contact & Booking',
    heroSub: 'Write to us and we will help you plan your perfect getaway.',
    leftTitle: 'Booking & Inquiries',
    leftP1: 'Booking and inquiries for our accommodation are handled by email or phone. We personally answer every request, so you can be sure that every detail will be tailored exactly to your needs.',
    emailTitle: 'Booking Request by Email',
    emailDesc: 'In order to send you the most accurate quote, please include the following details in your email:',
    emailFooter: 'We usually respond to inquiries within 24 hours with a confirmation email. If you have any questions or would like a custom offer, we are happy to help by phone as well.',
    ctaBtn: 'Send Booking Request by Email',
    quickResponseTitle: 'Quick Response',
    quickResponseDesc: 'We usually respond within 24 hours. In urgent cases, call us by phone.',
    responseTime: 'Response within 24 hours',
    pricesTitle: 'Information & Rates',
    weekday: 'Sunday to Thursday',
    weekend: 'Friday and Saturday',
    pricesNote1: 'The rates apply to the entire house (maximum 4 guests).',
    pricesNote2: 'Rates do not include tourism tax.',
    petLabel: 'Pet-friendly accommodation',
    checkinLabel: 'Self check-in',
    checkinValue: 'with key-safe code',
    pricesNote3: 'Rates may vary during peak periods and on special dates.',
    contactTitle: 'Contact',
    customOffer: 'For a custom, discounted booking, call us!',
    bookingTitle: 'Booking Process',
    moreInfoTitle: 'Additional Information',
    moreInfoText: 'For bookings longer than 7 nights, linen change and cleaning are available on request.',
    mapLink: 'Open in Google Maps',
    emailModalTitle: 'Choose your email platform',
    emailModalSub: 'The message opens pre-filled',
    gmailDesc: 'Open in Gmail web',
    outlookDesc: 'Open in Outlook web',
    yahooDesc: 'Open in Yahoo Mail',
    mailtoDesc: 'Apple Mail, Outlook desktop, Thunderbird, etc.',
    recipientLabel: 'Recipient',
    checklist: [
      { icon: CalendarDays, text: 'Arrival and departure dates' },
      { icon: Clock, text: 'Number of nights' },
      { icon: Users, text: 'Number of guests (adults / children)' },
      { icon: PawPrint, text: 'Pet arriving (if yes, what size)' },
      { icon: CreditCard, text: 'Preferred payment method (bank transfer, cash)' },
      { icon: User, text: 'Contact details (name, phone number)' },
      { icon: MessageSquare, text: 'Any special requests or questions' },
    ],
    bookingSteps: [
      'Provide dates and details',
      'Confirmation',
      'Deposit payment (50%)',
      'Booking finalized',
    ],
    subject: 'Booking Request - House of Moments',
    bodyTemplate: `Dear House of Moments team!

Arrival date:
Departure date:
Number of nights:
Number of guests (adult/child):
Pet arriving:
Payment method:
Name:
Phone number:
Notes:

Best regards,`,
  },
};

function EmailModal({ isOpen, onClose, lang }: { isOpen: boolean; onClose: () => void; lang: 'hu' | 'en' }) {
  const t = pageData[lang];
  const encodedSubject = encodeURIComponent(t.subject);
  const encodedBody = encodeURIComponent(t.bodyTemplate);

  const urls = {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodedSubject}&body=${encodedBody}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(EMAIL)}&subject=${encodedSubject}&body=${encodedBody}`,
    yahoo: `https://compose.mail.yahoo.com/?to=${encodeURIComponent(EMAIL)}&subject=${encodedSubject}&body=${encodedBody}`,
    mailto: `mailto:${EMAIL}?subject=${encodedSubject}&body=${encodedBody}`,
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  const options = [
    { label: 'Gmail', desc: t.gmailDesc, url: urls.gmail },
    { label: 'Outlook', desc: t.outlookDesc, url: urls.outlook },
    { label: 'Yahoo Mail', desc: t.yahooDesc, url: urls.yahoo },
    { label: lang === 'en' ? 'Default email client' : 'Alapértelmezett e-mail kliens', desc: t.mailtoDesc, url: urls.mailto },
  ];

  const closeLabel = lang === 'en' ? 'Close' : 'Bezárás';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={t.emailModalTitle}
        >
          <div className="absolute inset-0 bg-plum/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-md bg-wine border border-gold/20 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                    {t.emailModalTitle}
                  </h3>
                  <p className="text-ink/60 text-sm mt-1">{t.emailModalSub}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-ink/60 hover:text-ink transition-colors p-1"
                  aria-label={closeLabel}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-3">
                {options.map((opt) => (
                  <a
                    key={opt.label}
                    href={opt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-plum/60 border border-gold/10 hover:border-gold/30 hover:bg-plum/80 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Mail size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-ink text-sm">{opt.label}</p>
                      <p className="text-ink/50 text-xs">{opt.desc}</p>
                    </div>
                  </a>
                ))}
              </div>

              <p className="mt-6 text-center text-ink/40 text-xs">
                {t.recipientLabel}: {EMAIL}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ContactPage() {
  const { lang } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const t = pageData[lang];

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

      {/* Content */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left column — 3/5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-plum mb-6">
                {t.leftTitle}
              </h2>
              <p className="text-plum/70 text-base leading-relaxed mb-8">
                {t.leftP1}
              </p>

              {/* Email request section */}
              <div className="bg-plum border border-gold/15 rounded-2xl p-6 sm:p-8 mb-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {t.emailTitle}
                  </h3>
                </div>
                <p className="text-ink/60 text-sm leading-relaxed mb-5">
                  {t.emailDesc}
                </p>

                <ul className="space-y-3 mb-6">
                  {t.checklist.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <Icon size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-ink/80 text-sm">{text}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-ink/60 text-sm leading-relaxed">
                  {t.emailFooter}
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-rose text-white font-semibold text-base shadow-xl hover:shadow-gold/30 hover:scale-[1.02] transition-all duration-300"
              >
                <Mail size={18} />
                {t.ctaBtn}
              </button>

              {/* Meta row */}
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-plum/50 text-xs sm:text-sm">
                <a href={`mailto:${EMAIL}`} className="hover:text-rose transition-colors flex items-center gap-1.5">
                  <Mail size={12} />
                  {EMAIL}
                </a>
                <a href={PHONE_HREF} className="hover:text-rose transition-colors flex items-center gap-1.5">
                  <Phone size={12} />
                  {PHONE}
                </a>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  {t.responseTime}
                </span>
              </div>

              {/* Quick response card */}
              <article className="mt-6 bg-plum border border-gold/15 rounded-2xl p-6 flex items-start gap-3 shadow-lg">
                <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-base font-semibold text-ink mb-1">{t.quickResponseTitle}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">
                    {t.quickResponseDesc}
                  </p>
                </div>
              </article>
            </motion.div>

            {/* Right column — 2/5 */}
            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Card 1 — Prices */}
              <article className="bg-plum border border-gold/15 rounded-2xl p-6 shadow-lg">
                <h3 className="font-display text-lg font-semibold text-ink mb-4">
                  {t.pricesTitle}
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between items-start text-ink/80">
                    <span>{t.weekday}</span>
                    <span className="font-semibold text-gold whitespace-nowrap ml-3">55.000 Ft / éj</span>
                  </li>
                  <li className="flex justify-between items-start text-ink/80">
                    <span>{t.weekend}</span>
                    <span className="font-semibold text-gold whitespace-nowrap ml-3">65.000 Ft / éj</span>
                  </li>
                </ul>
                <p className="text-ink/40 text-xs mt-3">
                  {t.pricesNote1}
                </p>
                <p className="text-ink/40 text-xs mt-2">
                  {t.pricesNote2}
                </p>
                <div className="mt-4 pt-4 border-t border-gold/10 space-y-2 text-sm text-ink/80">
                  <div className="flex justify-between">
                    <span>{t.petLabel}</span>
                    <span className="font-semibold text-gold">5.000 Ft / alkalom</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.checkinLabel}</span>
                    <span className="text-ink/60">{t.checkinValue}</span>
                  </div>
                </div>
                <p className="text-ink/40 text-xs mt-3">
                  {t.pricesNote3}
                </p>
              </article>

              {/* Card 2 — Contact */}
              <article className="bg-plum border border-gold/15 rounded-2xl p-6 shadow-lg">
                <h3 className="font-display text-lg font-semibold text-ink mb-4">
                  {t.contactTitle}
                </h3>
                <div className="space-y-3">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center gap-3 text-ink/80 hover:text-gold transition-colors text-sm"
                    aria-label={lang === 'en' ? 'Phone' : 'Telefon'}
                  >
                    <Phone size={16} className="text-gold flex-shrink-0" />
                    {PHONE}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 text-ink/80 hover:text-gold transition-colors text-sm break-all"
                    aria-label={lang === 'en' ? 'Email' : 'E-mail'}
                  >
                    <Mail size={16} className="text-gold flex-shrink-0" />
                    {EMAIL}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-ink/80 hover:text-gold transition-colors text-sm"
                    aria-label={lang === 'en' ? 'Open address on map' : 'Cím megnyitása térképen'}
                  >
                    <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    {ADDRESS}
                  </a>
                </div>
              </article>

              {/* Card 3 — Accent CTA */}
              <article className="bg-plum bg-gradient-to-br from-gold/20 to-rose/10 border border-gold/20 rounded-2xl p-6 text-center shadow-lg">
                <p className="font-display text-base font-semibold text-ink">
                  {t.customOffer}
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 mt-3 text-gold hover:text-rose transition-colors font-medium text-sm"
                >
                  <Phone size={14} />
                  {PHONE}
                </a>
              </article>

              {/* Card 4 — Booking steps */}
              <article className="bg-plum border border-gold/15 rounded-2xl p-6 shadow-lg">
                <h3 className="font-display text-lg font-semibold text-ink mb-4">
                  {t.bookingTitle}
                </h3>
                <ol className="space-y-4">
                  {t.bookingSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gold">
                        {i + 1}
                      </span>
                      <span className="text-ink/80 text-sm pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </article>

              {/* Card 5 — Additional info */}
              <article className="bg-plum border border-gold/15 rounded-2xl p-6 shadow-lg">
                <h3 className="font-display text-lg font-semibold text-ink mb-3">
                  {t.moreInfoTitle}
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed">
                  {t.moreInfoText}
                </p>
              </article>

            </motion.aside>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-12 sm:py-16 bg-wine">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-gold/10 h-[300px] sm:h-[380px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1348.2!2d19.3488!3d47.4365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dd2a98a2f1e7%3A0x5e5e0f1b9e8c1a2b!2sMikszáth%20K%C3%A1lm%C3%A1n%20u.%206%2C%20Magl%C3%B3d%2C%202234!5e0!3m2!1shu!2shu!4v1716600000000!5m2!1shu!2shu"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="House of Moments - 2234 Maglód, Mikszáth Kálmán utca 6."
            />
          </motion.div>
          <p className="text-center mt-4">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/50 hover:text-gold transition-colors text-sm inline-flex items-center gap-2"
            >
              <MapPin size={14} />
              {t.mapLink}
            </a>
          </p>
        </div>
      </section>

      {/* Email Modal */}
      <EmailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} lang={lang} />
    </main>
  );
}
