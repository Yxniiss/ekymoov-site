import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Accessibility, Award, Zap } from "lucide-react";
import { Card } from "./ui/card";

const solutions = [
  {
    icon: Accessibility,
    title: "Accessible dès la conception",
    description: "Application pensée PMR-first. Chaque fonctionnalité, chaque interaction est conçue pour être intuitive et accessible à tous, dès le premier jour.",
    color: "#2DD4BF",
    features: [
      "Interface adaptée aux besoins PMR",
      "Navigation simplifiée et claire",
      "Accessibilité WCAG niveau AAA visé"
    ]
  },
  {
    icon: Award,
    title: "Formation des chauffeurs",
    description: "Accompagnement complet, certifications spécialisées, qualité garantie. Nos chauffeurs partenaires seront formés aux spécificités du transport adapté.",
    color: "#4829E0",
    features: [
      "Formation certifiante obligatoire",
      "Sensibilisation aux handicaps",
      "Support et accompagnement continu"
    ]
  },
  {
    icon: Zap,
    title: "Disponibilité améliorée",
    description: "Réservations simples et rapides, sans délais interminables. Notre plateforme connectera utilisateurs et chauffeurs en temps réel pour une mobilité sans attente.",
    color: "#FD2734",
    features: [
      "Réservation en quelques clics",
      "Disponibilité en temps réel",
      "Confirmation instantanée"
    ]
  }
];

export function OurSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#134E5E' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
            Notre solution
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une approche complète pour transformer la mobilité adaptée
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -12 }}
              >
                <Card className="p-8 lg:p-10 bg-white border-0 rounded-3xl h-full relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${solution.color}08 0%, ${solution.color}03 100%)`
                    }}
                  />

                  {/* Top accent bar */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                    style={{ backgroundColor: solution.color }}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative"
                      style={{ backgroundColor: solution.color + '15' }}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        animate={{ 
                          boxShadow: [
                            `0 0 0 0 ${solution.color}40`,
                            `0 0 0 8px ${solution.color}00`,
                            `0 0 0 0 ${solution.color}00`
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <Icon className="w-10 h-10 relative z-10" style={{ color: solution.color }} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="mb-4 text-xl" style={{ color: '#134E5E', fontWeight: '700' }}>
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-3 pt-4 border-t" style={{ borderColor: solution.color + '20' }}>
                      {solution.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: index * 0.2 + 0.5 + featureIndex * 0.1 }}
                        >
                          <div 
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: solution.color }}
                          />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom corner decoration */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-24 h-24 opacity-5"
                    style={{ 
                      background: `radial-gradient(circle at 100% 100%, ${solution.color} 0%, transparent 70%)`,
                      borderBottomRightRadius: '1.5rem'
                    }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600 text-lg italic max-w-3xl mx-auto">
            Une solution pensée de bout en bout pour garantir accessibilité, qualité et disponibilité
          </p>
        </motion.div>
      </div>
    </section>
  );
}
