import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import botanicImg from '../assets/botanic-room.png';
import passionImg from '../assets/files_10287071-2026-06-03T14-59-22-661Z-image.png';
import passionImg2 from '../assets/legacy-asset-27.png';
import passionImg3 from '../assets/legacy-asset-28.png';

const passionImages = [
  { src: passionImg, altHu: 'Passion szoba meleg téglafallal és romantikus hangulatvilágítással', altEn: 'Passion room with warm brick wall and romantic mood lighting' },
  { src: passionImg2, altHu: 'Passion szoba téglafal és egyedi ágynemű', altEn: 'Passion room brick wall and custom bedding' },
  { src: passionImg3, altHu: 'Passion szoba hangulatos LED világítással', altEn: 'Passion room with cozy LED lighting' },
];

const roomsData = {
  hu: {
    heroTitle: 'Hangulatos szobáink',
    heroSub: 'Minden szobánknak megvan a maga karaktere — egyedi stílus, meleg fények és prémium kényelem.',
    roomAmenity: 'Szoba felszereltsége',
    ctaText: 'Tetszik, amit látsz?',
    ctaBtn: 'Foglalás',
    rooms: [
      {
        name: 'Passion szoba',
        tagline: 'Romantikus, merész, egyedi',
        desc: 'Szobáink kialakításánál a kényelem és a nyugodt kikapcsolódás kapta a főszerepet. A prémium matracok, a hangulatos LED világítás és az otthonos atmoszféra tökéletes környezetet biztosítanak a pihenéshez és feltöltődéshez.',
        alt: 'Passion szoba meleg téglafallal és romantikus hangulatvilágítással',
        tags: ['Prémium matrac', 'LED hangulatfény', 'Romantikus dekor'],
        amenities: [
          'Prémium ágyneműk és törölközők',
          'Ingyenes Wi-Fi',
          'Smart TV Netflix és YouTube hozzáféréssel',
        ],
      },
      {
        name: 'Botanic szoba',
        tagline: 'Friss, nyugtató, természetes',
        desc: 'A szobák praktikus felszereltségéhez tágas szekrények és modern kényelmi megoldások is tartoznak, hogy vendégeink igazán otthon érezhessék magukat.',
        alt: 'Botanic szoba zöld növényfallal és trópusi dekorral',
        tags: ['Prémium matrac', 'LED hangulatfény', 'Növényes dekor'],
        amenities: [
          'Prémium ágyneműk és törölközők',
          'Ingyenes Wi-Fi',
        ],
      },
    ],
  },
  en: {
    heroTitle: 'Our Cozy Rooms',
    heroSub: 'Each of our rooms has its own character — unique style, warm lighting and premium comfort.',
    roomAmenity: 'Room Amenities',
    ctaText: 'Like what you see?',
    ctaBtn: 'Booking',
    rooms: [
      {
        name: 'Passion Room',
        tagline: 'Romantic, bold, unique',
        desc: 'When designing our rooms, comfort and peaceful relaxation took center stage. Premium mattresses, cozy LED lighting and a homely atmosphere provide the perfect setting for rest and recharging.',
        alt: 'Passion room with warm brick wall and romantic mood lighting',
        tags: ['Premium mattress', 'LED mood lighting', 'Romantic decor'],
        amenities: [
          'Premium bedding and towels',
          'Free Wi-Fi',
          'Smart TV with Netflix and YouTube',
        ],
      },
      {
        name: 'Botanic Room',
        tagline: 'Fresh, soothing, natural',
        desc: 'The rooms also feature spacious wardrobes and modern conveniences so our guests can truly feel at home.',
        alt: 'Botanic room with green plant wall and tropical decor',
        tags: ['Premium mattress', 'LED mood lighting', 'Plant decor'],
        amenities: [
          'Premium bedding and towels',
          'Free Wi-Fi',
        ],
      },
    ],
  },
};

function PassionSlider() {
  const { lang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStart = useRef<number | null>(null);

  const goTo = useCallback((next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  const next = useCallback(() => {
    const nextIdx = (current + 1) % passionImages.length;
    setDirection(1);
    setCurrent(nextIdx);
  }, [current]);

  const prev = useCallback(() => {
    const prevIdx = (current - 1 + passionImages.length) % passionImages.length;
    setDirection(-1);
    setCurrent(prevIdx);
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStart.current = null;
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  const altKey = lang === 'en' ? 'altEn' : 'altHu';

  return (
    <div
      className="relative w-full h-[320px] sm:h-[440px] lg:h-[500px] overflow-hidden rounded-[2rem]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={current}
          src={passionImages[current].src}
          alt={passionImages[current][altKey as keyof typeof passionImages[0]]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-plum/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-plum/80 hover:border-gold/40 transition-all duration-200"
        aria-label={lang === 'en' ? 'Previous image' : 'Előző kép'}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-plum/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-plum/80 hover:border-gold/40 transition-all duration-200"
        aria-label={lang === 'en' ? 'Next image' : 'Következő kép'}
      >
        <ChevronRight size={20} />
      </button>

      <span className="absolute bottom-3 right-3 z-10 bg-plum/60 backdrop-blur-sm text-ink/80 text-xs px-2.5 py-1 rounded-full border border-gold/10">
        {current + 1}/{passionImages.length}
      </span>
    </div>
  );
}

export default function RoomsPage() {
  const { lang } = useLanguage();
  const data = roomsData[lang];

  return (
    <>
      {/* Page hero band */}
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
            {data.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-ink/60 text-base sm:text-lg max-w-xl"
          >
            {data.heroSub}
          </motion.p>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-28 sm:space-y-36">
            {data.rooms.map((room, i) => {
              const isEven = i % 2 === 0;
              const isPassion = i === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col gap-10 lg:gap-16 items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="w-full lg:w-[55%] overflow-hidden rounded-[2rem] group"
                  >
                    {isPassion ? (
                      <PassionSlider />
                    ) : (
                      <img
                        src={i === 1 ? botanicImg : passionImg}
                        alt={room.alt}
                        className="w-full h-[320px] sm:h-[440px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-[45%]"
                  >
                    <p className="text-gold text-xs uppercase tracking-[0.15em] font-medium mb-2">
                      {room.tagline}
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-plum">
                      {room.name}
                    </h2>
                    <p className="mt-5 text-plum/70 text-base sm:text-lg leading-relaxed">
                      {room.desc}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {room.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 py-1.5 rounded-full bg-plum/5 text-plum/70 text-sm font-medium border border-plum/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Per-room amenity list */}
                    <div className="mt-6 pt-5 border-t border-plum/10">
                      <p className="text-plum/40 text-xs uppercase tracking-[0.15em] font-medium mb-3">
                        {data.roomAmenity}
                      </p>
                      <ul className="space-y-2">
                        {room.amenities.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />
                            <span className="text-plum/70 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-plum/60 text-lg mb-4">{data.ctaText}</p>
            <Link
              to="/kapcsolat"
              className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-gold to-rose text-white font-semibold shadow-xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
            >
              {data.ctaBtn}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
