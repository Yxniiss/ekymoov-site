import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import logo from "figma:asset/a8d0837a5dcc70e9c9e472dbd431f77fcbc4124f.png";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 border-gray-200 shadow-lg' 
          : 'bg-white/80 border-gray-100'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={logo} 
              alt="Ekymoov" 
              className="h-14 w-auto object-contain" 
              style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }} 
            />
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '#accueil', label: 'Accueil' },
              { href: '#mission', label: 'Mission' },
              { href: '#solution', label: 'Solution' },
              { href: '#faq', label: 'FAQ' },
              { href: '#contact', label: 'Contact' }
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-gray-700 hover:text-[#2DD4BF] transition-colors relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2DD4BF]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="hidden sm:inline-flex text-white hover:opacity-90 transition-all shadow-md hover:shadow-lg" 
                style={{ backgroundColor: '#2DD4BF' }}
              >
                Nous contacter
              </Button>
            </motion.div>
            <motion.button 
              className="md:hidden p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
