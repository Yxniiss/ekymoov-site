import { Download, UserCircle, Calendar, Heart } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Téléchargez l'application",
    description: "Disponible sur iOS et Android, gratuitement"
  },
  {
    number: "2",
    icon: UserCircle,
    title: "Créez votre profil",
    description: "Renseignez vos besoins spécifiques d'accessibilité"
  },
  {
    number: "3",
    icon: Calendar,
    title: "Réservez votre trajet",
    description: "En quelques clics, où et quand vous le souhaitez"
  },
  {
    number: "4",
    icon: Heart,
    title: "Voyagez sereinement",
    description: "Avec des chauffeurs formés et des véhicules adaptés"
  }
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="solution" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: '#2DD4BF' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#134E5E' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#134E5E', fontWeight: '700' }}>
            Comment ça marche
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une application pensée pour simplifier chaque déplacement.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.number} 
                className="text-center group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
              >
                <motion.div 
                  className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" 
                  style={{ backgroundColor: '#E0F7F5' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: '#2DD4BF', opacity: 0.3 }}
                  />
                  <Icon className="w-10 h-10 relative z-10" style={{ color: '#2DD4BF' }} />
                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                    style={{ backgroundColor: '#134E5E', fontWeight: '700' }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                  >
                    {step.number}
                  </motion.div>
                </motion.div>
                <motion.h3 
                  className="mb-3" 
                  style={{ color: '#134E5E', fontWeight: '600' }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                >
                  {step.description}
                </motion.p>
                
                {/* Connecting line (not on last item) */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#2DD4BF] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
