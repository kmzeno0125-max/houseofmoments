import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const navLinks = [
  { hu: 'Kezdőlap', en: 'Home', to: '/' },
  { hu: 'Felszereltség', en: 'Amenities', to: '/felszereltseg' },
  { hu: 'Szobák', en: 'Rooms', to: '/szobak' },
  { hu: 'Galéria', en: 'Gallery', to: '/galeria' },
  { hu: 'Elhelyezkedés & Programok', en: 'Location & Things to Do', to: '/elhelyezkedes-programok' },
  { hu: 'Árak', en: 'Prices', to: '/arak' },
  { hu: 'Vélemények', en: 'Reviews', to: '/velemenyek' },
  { hu: 'Kapcsolat', en: 'Contact', to: '/kapcsolat' },
];

function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`flex items-center bg-plum/60 border border-gold/20 rounded-full p-0.5 ${className}`}>
      <button
        onClick={() => setLang('hu')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
          lang === 'hu'
            ? 'bg-gold text-plum shadow-sm'
            : 'text-ink/60 hover:text-ink'
        }`}
      >
        HU
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
          lang === 'en'
            ? 'bg-gold text-plum shadow-sm'
            : 'text-ink/60 hover:text-ink'
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (to: string) => {
    if (to.startsWith('/#')) {
      const id = to.slice(2);
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  };

  const getLabel = (link: typeof navLinks[number]) => lang === 'en' ? link.en : link.hu;
  const ctaLabel = lang === 'en' ? 'Booking' : 'Foglalás';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-plum/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-display text-lg sm:text-xl font-semibold text-ink tracking-wide">
              House of Moments
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold/80 font-body">
              Maglód
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => (
              link.to.startsWith('/#') ? (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="relative text-sm text-ink/80 hover:text-gold transition-colors duration-300 group whitespace-nowrap"
                >
                  {getLabel(link)}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative text-sm transition-colors duration-300 group whitespace-nowrap ${
                    location.pathname === link.to || (link.to === '/kapcsolat' && location.pathname === '/foglalas') ? 'text-gold' : 'text-ink/80 hover:text-gold'
                  }`}
                >
                  {getLabel(link)}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-300 ${
                    location.pathname === link.to || (link.to === '/kapcsolat' && location.pathname === '/foglalas') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              )
            ))}
            <LanguageSwitcher />
            <Link
              to="/kapcsolat"
              className="px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-gold to-rose text-white shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              {ctaLabel}
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-ink p-2"
            aria-label={lang === 'en' ? 'Open menu' : 'Menü megnyitása'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="fixed inset-0 bg-plum/70 backdrop-blur-sm lg:hidden z-[-1]"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="lg:hidden bg-plum/98 backdrop-blur-xl border-t border-white/5 shadow-2xl"
            >
              <div className="px-6 py-8 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.35, delay: 0.06 * i, ease: 'easeOut' }}
                  >
                    {link.to.startsWith('/#') ? (
                      <button
                        onClick={() => handleNavClick(link.to)}
                        className="block w-full text-left py-2.5 text-ink/80 hover:text-gold transition-colors duration-300 text-base"
                      >
                        {getLabel(link)}
                      </button>
                    ) : (
                      <Link
                        to={link.to}
                        className={`block py-2.5 transition-colors duration-300 text-base ${
                          location.pathname === link.to ? 'text-gold' : 'text-ink/80 hover:text-gold'
                        }`}
                      >
                        {getLabel(link)}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35, delay: 0.06 * navLinks.length, ease: 'easeOut' }}
                  className="mt-4 flex items-center justify-center"
                >
                  <LanguageSwitcher />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35, delay: 0.06 * (navLinks.length + 1), ease: 'easeOut' }}
                  className="mt-4"
                >
                  <Link
                    to="/kapcsolat"
                    className="block px-5 py-3 text-center font-medium rounded-full bg-gradient-to-r from-gold to-rose text-white shadow-lg"
                  >
                    {ctaLabel}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
