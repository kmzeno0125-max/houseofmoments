import { Facebook, Mail, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();

  const quickLinks = [
    { hu: 'A szállás', en: 'The House', to: '/#about' },
    { hu: 'Szobák', en: 'Rooms', to: '/szobak' },
    { hu: 'Galéria', en: 'Gallery', to: '/galeria' },
    { hu: 'Vélemények', en: 'Reviews', to: '/velemenyek' },
    { hu: 'Kapcsolat', en: 'Contact', to: '/kapcsolat' },
  ];

  const t = {
    tagline: lang === 'en' ? 'Relax with us in Maglód.' : 'Pihenj nálunk Maglódon.',
    copyright: lang === 'en'
      ? '© 2025 House of Moments Maglód. All rights reserved.'
      : '© 2025 House of Moments Maglód. Minden jog fenntartva.',
  };

  return (
    <footer className="bg-plum text-ink/70 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 items-start">
          <div>
            <Link to="/" className="block">
              <span className="font-display text-lg font-semibold text-ink">House of Moments</span>
              <p className="text-xs uppercase tracking-widest text-gold/70 mt-1">Maglód</p>
            </Link>
            <p className="mt-3 text-sm text-ink/50">{t.tagline}</p>
          </div>

          <div>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-gold transition-colors">
                    {lang === 'en' ? link.en : link.hu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://share.google/mNI4oyfoU0C7WoIFo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-sm hover:text-gold transition-colors"
            >
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              <span>2234 Maglód, Mikszáth Kálmán utca 6.</span>
            </a>
            <a
              href="mailto:maglodhouseofmoments@gmail.com"
              className="inline-flex items-center gap-2 text-sm hover:text-gold transition-colors"
            >
              <Mail size={16} />
              maglodhouseofmoments@gmail.com
            </a>
            <a
              href="https://www.facebook.com/houseofmomentsmaglod"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-gold transition-colors"
            >
              <Facebook size={16} />
              House of Moments Maglod
            </a>
            <a
              href="https://www.instagram.com/houseofmomentsmaglod"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-gold transition-colors"
            >
              <Instagram size={16} />
              @houseofmomentsmaglod
            </a>
            <a
              href="https://www.tiktok.com/@house.of.moments1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-gold transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.17 6.17 0 0 0-.79-.05A6.28 6.28 0 0 0 3.2 15.34a6.28 6.28 0 0 0 6.29 6.28 6.28 6.28 0 0 0 6.29-6.28V9.05a8.16 8.16 0 0 0 4.77 1.53v-3.4a4.85 4.85 0 0 1-.96-.49z" />
              </svg>
              @house.of.moments1
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-ink/40">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
}
