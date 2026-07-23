import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import roomImage from '../assets/files_10287071-2026-05-27T12-08-39-381Z-image.png';
import roomImage2 from '../assets/files_10287071-2026-05-27T13-13-26-500Z-image.png';
import jacuzziImage from '../assets/image copy copy copy copy copy copy copy copy copy.png';
import parkingImage from '../assets/image copy copy copy copy copy copy copy copy copy copy.png';
import grillImage from '../assets/image copy copy copy copy copy copy copy copy copy copy copy.png';
import petFriendlyImage from '../assets/image copy copy copy copy copy copy copy copy copy copy copy copy.png';
import familyFriendlyImage from '../assets/image copy copy copy copy copy copy copy copy copy copy copy copy copy.png';

const featuresData = {
  hu: [
    {
      title: 'Kényelmes szobák',
      desc: 'Prémium matracok, hangulatos LED világítás és otthonos kialakítás biztosítja a nyugodt pihenést és feltöltődést.',
      images: [roomImage, roomImage2],
      alts: ['Kényelmes szoba téglafallal és hangulatos világítással', 'Szoba trópusi növényfalával és fa mennyezettel'],
      cta: null,
    },
    {
      title: 'Privát wellness',
      desc: 'Fedett, fűtött jacuzzi és meghitt hangulat vár a fedett teraszon, tökéletes környezetet teremtve a kikapcsolódáshoz.',
      images: [jacuzziImage],
      alts: ['Fedett jacuzzi a teraszon kanapéval'],
      cta: null,
    },
    {
      title: 'Ingyenes parkolás',
      desc: 'Vendégeink számára díjmentes parkolás biztosított közvetlenül a ház előtt és a zárt udvarban.',
      images: [parkingImage],
      alts: ['Ház elölnézet parkolóval és udvarral'],
      cta: null,
    },
    {
      title: 'Grill és bográcsozás',
      desc: 'Grillezési és bográcsozási lehetőség teljes felszereléssel biztosított.',
      images: [grillImage],
      alts: ['Kerti lugas esti fényfuzérekkel'],
      cta: null,
    },
    {
      title: 'Kisállatbarát kikapcsolódás',
      desc: 'Nálunk a négylábú családtagok is szeretettel látott vendégek. Előzetes egyeztetéssel kisállatokat is fogadunk.',
      images: [petFriendlyImage],
      alts: ['Kert terasz pergolával és jakkuzzival'],
      cta: null,
    },
    {
      title: 'Családbarát felszereltség',
      desc: 'Kérés esetén babaágyat (egyben pelenkázó) és etetőszéket is biztosítunk a kényelmesebb pihenés érdekében.',
      images: [familyFriendlyImage],
      alts: ['Nappali szoba faberendezéssel és modern bútorokkal'],
      cta: { label: 'Részletesebben', to: '/felszereltseg' },
    },
  ],
  en: [
    {
      title: 'Comfortable Rooms',
      desc: 'Premium mattresses, cozy LED lighting and a homely design ensure peaceful rest and recharging.',
      images: [roomImage, roomImage2],
      alts: ['Cozy room with brick wall and mood lighting', 'Room with tropical plant wall and wooden ceiling'],
      cta: null,
    },
    {
      title: 'Private Wellness',
      desc: 'A covered, heated jacuzzi and an intimate atmosphere await on the covered terrace, creating the perfect setting for relaxation.',
      images: [jacuzziImage],
      alts: ['Covered jacuzzi on the terrace with a sofa'],
      cta: null,
    },
    {
      title: 'Free Parking',
      desc: 'Guests enjoy complimentary parking right in front of the house and in the enclosed courtyard.',
      images: [parkingImage],
      alts: ['Front view of the house with parking and courtyard'],
      cta: null,
    },
    {
      title: 'Grill & Goulash Pot',
      desc: 'Grilling and goulash-cooking opportunities are available with full equipment.',
      images: [grillImage],
      alts: ['Garden gazebo with evening fairy lights'],
      cta: null,
    },
    {
      title: 'Pet-Friendly Getaway',
      desc: 'Your four-legged family members are welcome guests too. We accept pets by prior arrangement.',
      images: [petFriendlyImage],
      alts: ['Garden terrace with pergola and jacuzzi'],
      cta: null,
    },
    {
      title: 'Family-Friendly Amenities',
      desc: 'On request, we provide a baby cot (also a changing table) and a high chair for a more comfortable stay.',
      images: [familyFriendlyImage],
      alts: ['Living room with wooden furniture and modern furnishings'],
      cta: { label: 'More details', to: '/felszereltseg' },
    },
  ],
};

function ImageSlider({ images, alts }: { images: string[]; alts: string[] }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const touchStartX = useRef<number | null>(null);

  if (images.length === 1) {
    return (
      <div className="relative overflow-hidden rounded-2xl shadow-xl group">
        <img
          src={images[0]}
          alt={alts[0]}
          loading="lazy"
          className="w-full h-[260px] sm:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plum/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    );
  }

  const navigate = (dir: 'left' | 'right') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === 'right' ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length
      );
      setAnimating(false);
    }, 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) navigate(diff > 0 ? 'right' : 'left');
    touchStartX.current = null;
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-xl group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="w-full h-[260px] sm:h-[320px]"
        style={{
          transition: animating ? 'opacity 0.3s ease' : 'none',
          opacity: animating ? 0 : 1,
        }}
      >
        <img
          src={images[current]}
          alt={alts[current]}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-plum/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <button
        onClick={() => navigate('left')}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-black/50 hover:text-white hover:border-white/40 hover:scale-110 transition-all duration-200"
      >
        <ChevronLeft size={16} strokeWidth={2} />
      </button>

      <button
        onClick={() => navigate('right')}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:bg-black/50 hover:text-white hover:border-white/40 hover:scale-110 transition-all duration-200"
      >
        <ChevronRight size={16} strokeWidth={2} />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setDirection(idx > current ? 'right' : 'left'); setAnimating(true); setTimeout(() => { setCurrent(idx); setAnimating(false); }, 300); }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${idx === current ? 'bg-white w-4' : 'bg-white/50'}`}
            aria-label={`Image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  const { lang } = useLanguage();
  const features = featuresData[lang];

  return (
    <section className="relative py-24 sm:py-36 bg-cream overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[12vw] font-display font-bold text-plum/[0.03] uppercase -rotate-12 whitespace-nowrap">
          {lang === 'en' ? 'RELAX' : 'PIHENÉS'}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20 sm:mb-28"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-plum">
            {lang === 'en' ? 'What makes us special' : 'Ami különlegessé tesz minket'}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block z-[1]" />

          <div className="space-y-20 sm:space-y-28 lg:space-y-32">
            {features.map((feature, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 z-30 items-center justify-center"
                  >
                    <span className="w-14 h-14 rounded-full bg-cream border-2 border-gold shadow-[0_0_12px_rgba(201,168,106,0.25)] flex items-center justify-center font-display text-base font-bold text-gold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </motion.div>

                  <div
                    className={`flex flex-col gap-8 lg:gap-0 items-center ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="w-full lg:w-[43%] lg:px-4"
                    >
                      <span className="font-display text-6xl sm:text-7xl font-bold text-gold/10 leading-none block lg:hidden">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-plum mt-2 lg:mt-0">
                        {feature.title}
                      </h3>
                      <p className="mt-4 text-plum/60 text-base sm:text-lg leading-relaxed max-w-md">
                        {feature.desc}
                      </p>
                      {feature.cta && (
                        <Link
                          to={feature.cta.to}
                          className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold to-rose text-white text-sm font-semibold shadow-md hover:shadow-gold/25 hover:scale-[1.03] transition-all duration-300"
                        >
                          {feature.cta.label}
                          <ArrowRight size={14} />
                        </Link>
                      )}
                    </motion.div>

                    <div className="hidden lg:block w-[14%] flex-shrink-0" />

                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
                      viewport={{ once: true }}
                      className="w-full lg:w-[43%] lg:px-4"
                    >
                      <ImageSlider images={feature.images} alts={feature.alts} />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
