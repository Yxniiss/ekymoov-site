import missionImage from "figma:asset/fdd8d772ca1590553baad3b4af12a859c8ce07bb.png";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, Rocket, TestTube, MapPin, Globe } from "lucide-react";

const timeline = [
  {
    icon: Rocket,
    phase: "Phase conception",
    status: "En cours",
    color: "#2DD4BF"
  },
  {
    icon: TestTube,
    phase: "Phase test",
    status: "2025",
    color: "#4829E0"
  },
  {
    icon: MapPin,
    phase: "Lancement pilote",
    status: "2026",
    color: "#FD2734"
  },
  {
    icon: Globe,
    phase: "Déploiement national",
    status: "2027+",
    color: "#134E5E"
  }
];

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="mission" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 80%, #2DD4BF 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #134E5E 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, #2DD4BF 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ 
              backgroundColor: i % 2 === 0 ? '#2DD4BF' : '#134E5E',
              left: `${(i * 12 + 10)}%`,
              top: `${(i * 15 + 5)}%`,
              opacity: 0.2
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="rounded-3xl overflow-hidden shadow-2xl relative"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-[#2DD4BF]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
              />
              <img
                src={missionImage}
                alt="La mobilité pour tous, en toute confiance"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl" 
              style={{ color: '#134E5E', fontWeight: '700', lineHeight: '1.2' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              Notre mission : rendre la mobilité accessible à tous.
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-gray-700 text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p>
                Ekymoov développe une plateforme de mobilité inclusive, actuellement en phase de conception en Île-de-France.
              </p>
              <p>
                Notre objectif : offrir d'ici 2026 un service de transport fiable, accessible et humain pour toutes les personnes à mobilité réduite.
              </p>
              <p>
                Nous croyons que la mobilité est un droit fondamental, et nous travaillons à bâtir une solution qui favorise l'inclusion et l'autonomie.
              </p>
            </motion.div>

            {/* Key features checklist */}
            <motion.div 
              className="space-y-3 pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7 }}
            >
              {[
                "Application mobile intuitive et accessible",
                "Réseau de chauffeurs formés et certifiés",
                "Véhicules 100% adaptés PMR",
                "Tarification transparente et équitable"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#2DD4BF' }} />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.9 }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-4" style={{ color: '#134E5E', fontWeight: '700' }}>
            Notre feuille de route
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Un plan de développement structuré pour garantir la qualité et la pérennité du projet
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.phase}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 1 + index * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 hover:shadow-xl transition-all" style={{ borderColor: item.color + '20' }}>
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto"
                      style={{ backgroundColor: item.color + '20' }}
                    >
                      <Icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <h4 className="text-center mb-2" style={{ color: '#134E5E', fontWeight: '600' }}>
                      {item.phase}
                    </h4>
                    <p className="text-center text-sm text-gray-600">
                      {item.status}
                    </p>
                  </div>
                  
                  {/* Connecting arrow (not on last item) */}
                  {index < timeline.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ delay: 1.2 + index * 0.15, duration: 0.5 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
