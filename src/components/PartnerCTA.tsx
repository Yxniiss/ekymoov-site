import { Button } from "./ui/button";
import { Users, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const benefits = [
  "Revenus complémentaires garantis",
  "Formation gratuite assurée",
  "Flexibilité totale des horaires",
  "Support technique 24/7"
];

export function PartnerCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
          style={{ backgroundColor: '#134E5E' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background decorations */}
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-10"
            style={{ backgroundColor: '#2DD4BF' }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-40 h-40 rounded-full opacity-10"
            style={{ backgroundColor: '#2DD4BF' }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -20, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Additional floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full opacity-20"
              style={{ 
                backgroundColor: '#2DD4BF',
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 360 }}
            >
              <Users className="w-8 h-8 text-white" />
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6" 
              style={{ fontWeight: '700' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              Ensemble, faisons bouger les lignes.
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              Vous êtes chauffeur, transporteur ou entreprise engagée ? Rejoignez notre réseau en construction et participez à la mobilité inclusive de demain.
            </motion.p>

            {/* Benefits grid */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3 text-left bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#2DD4BF' }} />
                  <span className="text-white text-sm sm:text-base">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  className="text-white rounded-full px-8 py-6 group transition-all shadow-xl hover:shadow-2xl"
                  style={{ backgroundColor: '#2DD4BF' }}
                >
                  Demande d'information
                  <motion.div
                    className="inline-block ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 bg-white hover:bg-gray-100 transition-colors"
                  style={{ color: '#134E5E' }}
                >
                  En savoir plus
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats below CTA */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 }}
            >
              {[
                { value: "500+", label: "Partenaires prévus" },
                { value: "4.8/5", label: "Satisfaction visée" },
                { value: "€2.5K", label: "Revenu estimé/mois" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl sm:text-3xl mb-1" style={{ color: '#2DD4BF', fontWeight: '700' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Disclaimer */}
            <motion.p 
              className="text-white/60 text-xs italic mt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2 }}
            >
              * Estimations basées sur nos projections de développement
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
