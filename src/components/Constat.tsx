import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { AlertCircle, Clock, Smartphone, GraduationCap } from "lucide-react";

const constats = [
  {
    icon: AlertCircle,
    stat: "1 Français sur 6",
    description: "vit avec un handicap",
    color: "#2DD4BF"
  },
  {
    icon: Clock,
    stat: "Transport adapté",
    description: "manque de disponibilité et de flexibilité",
    color: "#4829E0"
  },
  {
    icon: Smartphone,
    stat: "Peu d'applications",
    description: "sont réellement pensées PMR",
    color: "#FD2734"
  },
  {
    icon: GraduationCap,
    stat: "Chauffeurs rarement formés",
    description: "aux besoins spécifiques",
    color: "#134E5E"
  }
];

export function Constat() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-b from-[#E0F7F5] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#2DD4BF' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#134E5E', fontWeight: '700' }}>
            Le constat
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un besoin criant de solutions de mobilité adaptées et accessibles
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {constats.map((constat, index) => {
            const Icon = constat.icon;
            return (
              <motion.div
                key={constat.stat}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all h-full relative overflow-hidden group">
                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${constat.color}10 0%, ${constat.color}05 100%)`
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: constat.color + '15' }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        style={{ backgroundColor: constat.color }}
                      />
                      <Icon className="w-10 h-10 relative z-10" style={{ color: constat.color }} />
                    </motion.div>

                    {/* Content */}
                    <motion.h3 
                      className="mb-3 text-xl"
                      style={{ color: constat.color, fontWeight: '700' }}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      {constat.stat}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                    >
                      {constat.description}
                    </motion.p>
                  </div>

                  {/* Decorative corner */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-16 h-16 opacity-10"
                    style={{ 
                      background: `linear-gradient(45deg, transparent 50%, ${constat.color} 50%)`,
                      borderBottomRightRadius: '1.5rem'
                    }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
