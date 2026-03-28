import { Card } from "./ui/card";
import { Zap, Shield, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const advantages = [
  {
    icon: Zap,
    title: "Accessibilité simplifiée",
    description: "Une interface intuitive et accessible, conçue dès le départ pour répondre aux besoins spécifiques des personnes à mobilité réduite. Chaque fonctionnalité est pensée pour la simplicité d'utilisation."
  },
  {
    icon: Shield,
    title: "Sécurité garantie dès la conception",
    description: "La sécurité et le confort sont au cœur de notre développement. Chauffeurs formés, véhicules contrôlés, parcours sécurisés : tout est pensé pour votre tranquillité d'esprit."
  },
  {
    icon: Leaf,
    title: "Impact social et durable",
    description: "Nous construisons une solution qui favorise l'inclusion sociale tout en respectant l'environnement. Une mobilité responsable pour une ville plus accessible à tous."
  }
];

export function Advantages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#E0F7F5] relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #2DD4BF 1px, transparent 1px),
                           radial-gradient(circle at 80% 80%, #134E5E 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#134E5E', fontWeight: '700' }}>
            Nos avantages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ce que nous construisons pour demain.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-8 bg-white border-0 rounded-2xl h-full relative overflow-hidden group cursor-pointer">
                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.05) 0%, rgba(19, 78, 94, 0.05) 100%)'
                    }}
                  />
                  
                  {/* Glowing effect on hover */}
                  <motion.div
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ backgroundColor: '#2DD4BF' }}
                    animate={{ opacity: [0, 0.1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <div className="flex flex-col items-center text-center relative z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative"
                      style={{ backgroundColor: '#2DD4BF' }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ backgroundColor: '#2DD4BF' }}
                      />
                      <Icon className="w-8 h-8 text-white relative z-10" />
                    </motion.div>
                    
                    <h3 className="mb-4" style={{ color: '#134E5E', fontWeight: '600' }}>
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">
                      {advantage.description}
                    </p>
                  </div>

                  {/* Corner decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 opacity-10"
                    style={{ 
                      background: 'linear-gradient(135deg, transparent 50%, #2DD4BF 50%)',
                      borderTopRightRadius: '1rem'
                    }}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
