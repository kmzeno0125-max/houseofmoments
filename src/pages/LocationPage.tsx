import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, TreePine, Car, Plane, Compass, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import localRecreationImg from '../assets/files_10287071-2026-06-02T18-56-33-364Z-image.png';
import jacuzziImg from '../assets/jacuzzi.png';
import botanicImg from '../assets/botanic-room.png';
import passionImg from '../assets/passion-room.png';
import selfieImg from '../assets/selfie-corner.png';

const pageData = {
  hu: {
    heroTitle: 'Elhelyezkedés & Programok',
    heroSub: 'Fedezd fel Maglód nyugodt környezetét, a közeli kikapcsolódási lehetőségeket és a környék élményeit.',
    locationLabel: 'Elhelyezkedés',
    locationTitle: 'Nyugodt pihenés Maglódon',
    locationText: 'A House of Moments Maglód csendes, könnyen megközelíthető környezetben várja vendégeit. Ideális választás azoknak, akik nyugodt kikapcsolódásra vágynak, mégis fontos számukra a kényelmes elérhetőség.',
    mapTitle: 'House of Moments Maglód elhelyezkedése',
    programsLabel: 'Programok',
    programsTitle: 'Programlehetőségek a környéken',
    programsText: 'A környék többféle kikapcsolódási lehetőséget kínál, legyen szó nyugodt sétáról, gasztronómiai élményekről, családi programokról vagy rövidebb kirándulásokról.',
    moodTitle: 'Tökéletes választás pihenéshez és közös élményekhez',
    moodText: 'A vendégház elhelyezkedése egyszerre biztosít nyugodt környezetet és kényelmes kiindulópontot a környék felfedezéséhez.',
    ctaBtn: 'Foglalás',
    bottomCtaTitle: 'Kérdésed van a környékkel kapcsolatban?',
    bottomCtaText: 'Írj nekünk, és szívesen segítünk ajánlani programokat, éttermeket vagy kikapcsolódási lehetőségeket az itt töltött időhöz.',
    bottomCtaBtn: 'Kapcsolatfelvétel',
    locationCards: [
      { icon: Car, title: 'Könnyű megközelítés', text: 'Autóval gyorsan elérhető, csendes környezetben.' },
      { icon: TreePine, title: 'Csendes környezet', text: 'Természetközeli, nyugodt pihenésre alkalmas elhelyezkedés.' },
      { icon: MapPin, title: 'Budapest közelében', text: 'Kb. 30 perc autóval a főváros központjától.' },
      { icon: Plane, title: 'Repülőtér elérhető távolságban', text: 'A Budapest Liszt Ferenc Nemzetközi Repülőtér kb. 13 perc autóval.' },
    ],
    programCards: [
      { image: localRecreationImg, title: 'Helyi kikapcsolódás', description: 'Nyugodt séták, parkok és természetközeli pihenési lehetőségek a közelben.', distance: '5-10 perc' },
      { image: jacuzziImg, title: 'Gasztronómiai élmények', description: 'Éttermek, kávézók és helyi ízek felfedezése a környéken.', distance: '10-15 perc' },
      { image: passionImg, title: 'Családi programok', description: 'Játszóterek, kalandparkok és családbarát programok a közelben.', distance: '15-20 perc' },
      { image: botanicImg, title: 'Kirándulási lehetőségek', description: 'Természetjáró útvonalak, kerékpáros túrák és egynapos kirándulások.', distance: '20-30 perc' },
    ],
  },
  en: {
    heroTitle: 'Location & Things to Do',
    heroSub: 'Discover the peaceful surroundings of Maglód, nearby leisure options and local experiences.',
    locationLabel: 'Location',
    locationTitle: 'Peaceful Relaxation in Maglód',
    locationText: 'House of Moments welcomes its guests in a quiet, easily accessible setting in Maglód. It is an ideal choice for those seeking peaceful relaxation while valuing convenient access.',
    mapTitle: 'House of Moments Maglód location',
    programsLabel: 'Things to Do',
    programsTitle: 'Activities in the Area',
    programsText: 'The area offers a variety of leisure options, whether it is a peaceful walk, gastronomic experiences, family programs or shorter excursions.',
    moodTitle: 'The Perfect Choice for Relaxation and Shared Experiences',
    moodText: 'The location of the guest house provides both a peaceful environment and a convenient starting point for exploring the area.',
    ctaBtn: 'Booking',
    bottomCtaTitle: 'Have a Question About the Area?',
    bottomCtaText: 'Write to us and we will be happy to recommend programs, restaurants or leisure options for your stay.',
    bottomCtaBtn: 'Get in Touch',
    locationCards: [
      { icon: Car, title: 'Easy Access', text: 'Quickly accessible by car, in a quiet setting.' },
      { icon: TreePine, title: 'Peaceful Surroundings', text: 'A nature-close location perfect for tranquil relaxation.' },
      { icon: MapPin, title: 'Near Budapest', text: 'About 30 minutes by car from the city center.' },
      { icon: Plane, title: 'Airport Within Reach', text: 'Budapest Liszt Ferenc International Airport is about 13 minutes by car.' },
    ],
    programCards: [
      { image: localRecreationImg, title: 'Local Recreation', description: 'Peaceful walks, parks and nature-close relaxation options nearby.', distance: '5-10 min' },
      { image: jacuzziImg, title: 'Gastronomic Experiences', description: 'Restaurants, cafes and local flavors to discover in the area.', distance: '10-15 min' },
      { image: passionImg, title: 'Family Programs', description: 'Playgrounds, adventure parks and family-friendly activities nearby.', distance: '15-20 min' },
      { image: botanicImg, title: 'Excursions', description: 'Hiking trails, cycling tours and day trips.', distance: '20-30 min' },
    ],
  },
};

export default function LocationPage() {
  const { lang } = useLanguage();
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
            className="mt-4 text-ink/60 text-base sm:text-lg max-w-2xl mx-auto"
          >
            {t.heroSub}
          </motion.p>
        </div>
      </section>

      {/* Location Block */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">{t.locationLabel}</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-plum mb-5">
                {t.locationTitle}
              </h2>
              <p className="text-plum/70 text-base sm:text-lg leading-relaxed">
                {t.locationText}
              </p>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gold/15 shadow-lg bg-plum/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10795.24!2d19.35!3d47.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c3d9c8e2b8f7%3A0x400c4290c1e11e0!2sMagl%C3%B3d!5e0!3m2!1shu!2shu!4v1"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t.mapTitle}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.locationCards.map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-plum border border-gold/15 rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <card.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-base font-semibold text-ink mb-2">{card.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{card.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Block */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">{t.programsLabel}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-plum mb-4">
              {t.programsTitle}
            </h2>
            <p className="text-plum/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.programsText}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {t.programCards.map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-plum border border-gold/15 rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/60 to-transparent" />
                  {card.distance && (
                    <span className="absolute bottom-3 right-3 bg-plum/80 backdrop-blur-sm text-ink/80 text-xs px-3 py-1 rounded-full border border-gold/10">
                      {card.distance}
                    </span>
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">{card.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{card.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight / Mood Block */}
      <section className="py-16 sm:py-20 bg-plum noise-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink mb-4">
              {t.moodTitle}
            </h2>
            <p className="text-ink/60 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {t.moodText}
            </p>
            <Link
              to="/foglalas"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-rose text-white font-semibold text-base shadow-xl hover:shadow-gold/30 hover:scale-[1.02] transition-all duration-300"
            >
              {t.ctaBtn}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Compass size={32} className="text-gold mx-auto mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-plum mb-3">
              {t.bottomCtaTitle}
            </h2>
            <p className="text-plum/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              {t.bottomCtaText}
            </p>
            <Link
              to="/kapcsolat"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-plum text-ink font-semibold text-base border border-gold/20 shadow-lg hover:border-gold/40 hover:scale-[1.02] transition-all duration-300"
            >
              {t.bottomCtaBtn}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
