import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1572717051745-383d107c2a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJvYWQlMjBzdW5yaXNlJTIwbW9ybmluZ3xlbnwxfHx8fDE3NjI5OTEwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "La mobilité inclusive, réinventée.",
    subtitle: "Découvrez Ekymoov, la première application de transport adaptée pensée pour les personnes à mobilité réduite.",
    gradient: "from-orange-900/80 via-orange-800/70 to-transparent"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1760020884550-f706e361528b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmxlJTIwY2l0eSUyMHRyYW5zcG9ydCUyMG1vZGVybnxlbnwxfHx8fDE3NjI5OTEwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Connectant villes et campagnes",
    subtitle: "Un service accessible partout, pour tous vos déplacements.",
    gradient: "from-blue-900/80 via-blue-800/70 to-transparent"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1740518937360-fa178207ed0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHJvYWQlMjBzdGFycyUyMHZlaGljbGV8ZW58MXx8fHwxNzYyOTkxMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Disponible 24h/24, 7j/7",
    subtitle: "Votre mobilité ne s'arrête jamais, jour comme nuit.",
    gradient: "from-indigo-950/90 via-indigo-900/80 to-transparent"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative pt-16 overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#134E5E] to-[#0A2540]">
      {/* Slider Background */}
      <div className="relative h-[85vh] min-h-[600px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <ImageWithFallback
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay for readability */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t ${slides[currentSlide].gradient}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="space-y-6 sm:space-y-8"
                >
                  <motion.h1 
                    className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-2xl"
                    style={{ fontWeight: '700', lineHeight: '1.1' }}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-lg sm:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      size="lg"
                      className="text-white rounded-full px-8 py-6 sm:px-10 sm:py-7 hover:opacity-90 transition-all shadow-2xl hover:scale-105"
                      style={{ backgroundColor: '#4829E0', fontSize: '1.1rem' }}
                    >
                      Découvrir le projet
                    </Button>
                    <Button 
                      size="lg"
                      className="text-white rounded-full px-8 py-6 sm:px-10 sm:py-7 hover:opacity-90 transition-all shadow-2xl hover:scale-105"
                      style={{ backgroundColor: '#FD2734', fontSize: '1.1rem' }}
                    >
                      Nous contacter
                    </Button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all flex items-center justify-center group z-10"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all flex items-center justify-center group z-10"
          aria-label="Slide suivant"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-12 h-3 bg-[#2DD4BF]' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
