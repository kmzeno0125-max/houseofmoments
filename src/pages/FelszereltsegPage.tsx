import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

import jacuzziFeatureImg from '../assets/image copy copy copy copy copy copy copy copy copy.png';
import grillFeatureImg from '../assets/image copy copy copy copy copy copy copy copy copy copy copy.png';
import selfiePhotoImg from '../assets/telegram-cloud-photo-size-4-5800785669410983785-x.jpg';
import passionRoomImg from '../assets/passion-room.png';
import kitchenDiningImg1 from '../assets/konyha-etkezo-1.png';
import kitchenDiningImg2 from '../assets/konyha-etkezo-2.png';
import kitchenDiningImg3 from '../assets/konyha-etkezo-3.png';

const kitchenDiningImages = [kitchenDiningImg1, kitchenDiningImg2, kitchenDiningImg3];
const kitchenDiningAlts = [
  'Étkező és konyha közös összképe',
  'Teljes konyha',
  'Konyhapult és felszereltség',
];

interface Block {
  id: string;
  title: string;
  intro: string;
  details: string[];
  image: string;
  imageAlt: string;
  images?: string[];
  imageAlts?: string[];
}

const blocksData: Record<'hu' | 'en', Block[]> = {
  hu: [
    {
      id: 'terasz-jakuzzi',
      title: 'Terasz & Jakuzzi',
      intro: 'Privát, fűtött jacuzzi, fedett terasz és hangulatos kültéri világítás biztosítja a nyugodt kikapcsolódást.',
      details: [
        'Privát, fűtött jacuzzi',
        'Fedett terasz',
        'Kerti LED világítás',
        'Csendes, természetközeli környezet',
      ],
      image: jacuzziFeatureImg,
      imageAlt: 'Privát fűtött jacuzzi a House of Moments teraszán',
    },
    {
      id: 'konyha-etkezo',
      title: 'Konyha & Étkező',
      intro: 'A jól felszerelt konyha és az étkező kényelmes lehetőséget biztosít közös főzésekhez, vacsorákhoz és hosszabb tartózkodáshoz is.',
      details: [
        'Jól felszerelt konyha',
        'Főzési és sütési lehetőség',
        'Mikrohullámú sütő',
        'Fondü készlet',
      ],
      image: '',
      imageAlt: 'Jól felszerelt konyha és étkező',
      images: kitchenDiningImages,
      imageAlts: kitchenDiningAlts,
    },
    {
      id: 'szobak',
      title: 'Szobák',
      intro: 'A kényelmes, otthonos szobák prémium ágyneműkkel és nyugodt hangulattal várják a vendégeket. A Passion szoba Smart TV-vel is felszerelt.',
      details: [
        'Prémium ágyneműk és törölközők',
        'Ingyenes Wi-Fi',
        'Smart TV Netflix és YouTube hozzáféréssel (Passion szoba)',
      ],
      image: passionRoomImg,
      imageAlt: 'Kényelmes, prémium szoba',
    },
    {
      id: 'bogracs-grill-kert',
      title: 'Bogrács, Grill & Kert',
      intro: 'A kert tökéletes helyszín közös sütésekhez, bográcsozáshoz és esti beszélgetésekhez.',
      details: [
        'Grill- és bográcsozási lehetőség',
        'A grillhez és bográcsozáshoz fa és brikett biztosított',
        'Kültéri játékok felnőtteknek és gyermekeknek',
        'Saját parkoló',
      ],
      image: grillFeatureImg,
      imageAlt: 'Kert és grill terület',
    },
    {
      id: 'szelfisarok',
      title: 'Szelfisarok',
      intro: 'Egy különleges, hangulatos fotópont, ahol a vendégek emlékezetes képeket készíthetnek az itt töltött pillanatokról.',
      details: [
        'Egyedi hangulatú szelfisarok',
        'Dekoratív fotózási háttér',
        'Közös képekhez és emlékekhez ideális helyszín',
        'Hangulatos beltéri környezet',
      ],
      image: selfiePhotoImg,
      imageAlt: 'Hangulatos szelfisarok',
    },
    {
      id: 'kozos-terek',
      title: 'Közös terek és ház felszereltsége',
      intro: 'Az alábbi felszereltségek a ház közös tereiben (nappali, étkező) érhetők el, minden vendég számára.',
      details: [
        'Légkondicionáló (nappali és étkező)',
        'Smart TV Netflix és YouTube hozzáféréssel (nappali)',
        'Bluetooth hangszóró',
        'Bakelit lemezjátszó',
        'Beltéri játékok felnőtteknek és gyermekeknek',
        'Ingyenes Wi-Fi az egész házban',
      ],
      image: '',
      imageAlt: 'Nappali közös tér',
    },
  ],
  en: [
    {
      id: 'terasz-jakuzzi',
      title: 'Terrace & Jacuzzi',
      intro: 'A private, heated jacuzzi, covered terrace and atmospheric outdoor lighting ensure peaceful relaxation.',
      details: [
        'Private, heated jacuzzi',
        'Covered terrace',
        'Garden LED lighting',
        'Quiet, nature-close surroundings',
      ],
      image: jacuzziFeatureImg,
      imageAlt: 'Private heated jacuzzi on the House of Moments terrace',
    },
    {
      id: 'konyha-etkezo',
      title: 'Kitchen & Dining',
      intro: 'The well-equipped kitchen and dining area provide a comfortable setting for shared cooking, dinners and longer stays.',
      details: [
        'Well-equipped kitchen',
        'Cooking and baking facilities',
        'Microwave oven',
        'Fondue set',
      ],
      image: '',
      imageAlt: 'Well-equipped kitchen and dining area',
      images: kitchenDiningImages,
      imageAlts: kitchenDiningAlts,
    },
    {
      id: 'szobak',
      title: 'Rooms',
      intro: 'The comfortable, homely rooms welcome guests with premium bedding and a calm atmosphere. The Passion room is also equipped with a Smart TV.',
      details: [
        'Premium bedding and towels',
        'Free Wi-Fi',
        'Smart TV with Netflix and YouTube (Passion room)',
      ],
      image: passionRoomImg,
      imageAlt: 'Comfortable, premium room',
    },
    {
      id: 'bogracs-grill-kert',
      title: 'Grill, Goulash Pot & Garden',
      intro: 'The garden is the perfect setting for shared barbecues, goulash cooking and evening conversations.',
      details: [
        'Grill and goulash-pot cooking',
        'Firewood and briquettes provided for grilling and goulash cooking',
        'Outdoor games for adults and children',
        'Private parking',
      ],
      image: grillFeatureImg,
      imageAlt: 'Garden and grill area',
    },
    {
      id: 'szelfisarok',
      title: 'Selfie Corner',
      intro: 'A special, atmospheric photo spot where guests can capture memorable moments of their stay.',
      details: [
        'Uniquely styled selfie corner',
        'Decorative photo backdrop',
        'Ideal for shared photos and memories',
        'Cozy indoor setting',
      ],
      image: selfiePhotoImg,
      imageAlt: 'Atmospheric selfie corner',
    },
    {
      id: 'kozos-terek',
      title: 'Shared Spaces & House Amenities',
      intro: 'The following amenities are available in the shared spaces (living room, dining area) for all guests.',
      details: [
        'Air conditioning (living room and dining area)',
        'Smart TV with Netflix and YouTube (living room)',
        'Bluetooth speaker',
        'Vinyl record player',
        'Indoor games for adults and children',
        'Free Wi-Fi throughout the house',
      ],
      image: '',
      imageAlt: 'Living room shared space',
    },
  ],
};

function KitchenImageSlider({ images, alts }: { images: string[]; alts: string[] }) {
  const [current, setCurrent] = useState(0);

  const navigate = (direction: 'previous' | 'next') => {
    setCurrent((previous) =>
      direction === 'next'
        ? (previous + 1) % images.length
        : (previous - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="relative h-full min-h-[260px] sm:min-h-[320px] overflow-hidden">
      <img
        src={images[current]}
        alt={alts[current]}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-plum/40 to-transparent" />
      <button
        type="button"
        onClick={() => navigate('previous')}
        aria-label="Previous kitchen image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-black/50 hover:text-white hover:border-white/40 hover:scale-110 transition-all duration-200"
      >
        <ChevronLeft size={18} strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={() => navigate('next')}
        aria-label="Next kitchen image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-black/50 hover:text-white hover:border-white/40 hover:scale-110 transition-all duration-200"
      >
        <ChevronRight size={18} strokeWidth={2} />
      </button>
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 rounded-full bg-black/35 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {current + 1} / {images.length}
      </span>
    </div>
  );
}

function FeatureBlock({ block, index }: { block: Block; index: number }) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const imageLeft = index % 2 === 0;
  const isFullWidth = block.id === 'kozos-terek';
  const isKitchen = block.id === 'konyha-etkezo';

  const fullWidthLabel = lang === 'en' ? 'Amenities for the entire house' : 'A ház egészére vonatkozó felszereltség';
  const toggleOpen = lang === 'en' ? 'Close' : 'Bezárás';
  const toggleClosed = lang === 'en' ? 'Details' : 'Részletesen';

  if (isFullWidth) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: '-50px' }}
        className="bg-plum border border-gold/15 rounded-2xl overflow-hidden shadow-lg"
      >
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-ink/40 text-xs uppercase tracking-[0.15em] font-medium mb-2">
            {fullWidthLabel}
          </p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-3">
            {block.title}
          </h3>
          <p className="text-ink/70 text-base leading-relaxed mb-6">
            {block.intro}
          </p>
          <ul className="space-y-3">
            {block.details.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-ink/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    );
  }

  if (isKitchen && block.images && block.imageAlts) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, margin: '-50px' }}
        className="bg-plum border border-gold/15 rounded-2xl overflow-hidden shadow-lg"
      >
        <div className={`flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          <div className="lg:w-[45%] flex-shrink-0">
            <KitchenImageSlider images={block.images} alts={block.imageAlts} />
          </div>
          <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-3">
              {block.title}
            </h3>
            <p className="text-ink/70 text-base leading-relaxed mb-6">
              {block.intro}
            </p>
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center gap-2 text-gold hover:text-rose transition-colors font-medium text-sm self-start group"
              aria-expanded={open}
            >
              <span>{open ? toggleOpen : toggleClosed}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${open ? 'rotate-180' : ''} group-hover:translate-y-0.5`}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <ul className="mt-5 pt-5 border-t border-gold/10 space-y-3">
                    {block.details.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-ink/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="bg-plum border border-gold/15 rounded-2xl overflow-hidden shadow-lg"
    >
      <div className={`flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Image */}
        {block.image && (
          <div className="lg:w-[45%] flex-shrink-0">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
              <img
                src={block.image}
                alt={block.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/40 to-transparent" />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-3">
            {block.title}
          </h3>
          <p className="text-ink/70 text-base leading-relaxed mb-6">
            {block.intro}
          </p>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-2 text-gold hover:text-rose transition-colors font-medium text-sm self-start group"
            aria-expanded={open}
          >
            <span>{open ? toggleOpen : toggleClosed}</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''} group-hover:translate-y-0.5`}
            />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <ul className="mt-5 pt-5 border-t border-gold/10 space-y-3">
                  {block.details.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-ink/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

export default function FelszereltsegPage() {
  const { lang } = useLanguage();
  const blocks = blocksData[lang];

  const t = {
    heroTitle: lang === 'en' ? 'Amenities' : 'Felszereltség',
    heroSub: lang === 'en'
      ? 'Discover the comfort of our guest house: from the private jacuzzi to the well-equipped kitchen and the atmospheric selfie corner.'
      : 'Fedezd fel vendégházunk kényelmét: a privát jacuzzitól a jól felszerelt konyhán át a hangulatos szelfisarokig.',
    ctaTitle: lang === 'en' ? 'Ready to relax?' : 'Készen állsz a pihenésre?',
    ctaDesc: lang === 'en'
      ? 'Experience the atmosphere of House of Moments in person and book your next getaway.'
      : 'Fedezd fel személyesen is a House of Moments hangulatát, és foglald le az időpontot a következő kikapcsolódásodhoz.',
    ctaBtn: lang === 'en' ? 'Booking' : 'Foglalás',
  };

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
            className="mt-4 text-ink/60 text-base sm:text-lg max-w-2xl mx-auto"
          >
            {t.heroSub}
          </motion.p>
        </div>
      </section>

      {/* Blocks */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          {blocks.map((block, i) => (
            <FeatureBlock key={block.id} block={block} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-plum noise-texture relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-rose/5 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-ink/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              {t.ctaDesc}
            </p>
            <Link
              to="/foglalas"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-gold to-rose text-white font-semibold text-base shadow-xl hover:shadow-gold/30 hover:scale-[1.03] transition-all duration-300"
            >
              {t.ctaBtn}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
