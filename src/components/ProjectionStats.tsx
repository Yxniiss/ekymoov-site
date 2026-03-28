import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Users, Navigation, ThumbsUp, MapPinned } from "lucide-react";

// Counter animation hook
function useCounter(end: number, duration: number = 2000, isInView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return count;
}

const objectives = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Chauffeurs partenaires",
    sublabel: "d'ici fin 2026",
    color: "#2DD4BF",
    progress: 75
  },
  {
    icon: Navigation,
    value: 20000,
    suffix: "",
    label: "Trajets réalisés",
    sublabel: "en première année",
    color: "#4829E0",
    progress: 85
  },
  {
    icon: ThumbsUp,
    value: 98,
    suffix: "%",
    label: "Satisfaction visée",
    sublabel: "qualité de service",
    color: "#FD2734",
    progress: 98
  },
  {
    icon: MapPinned,
    value: 1,
    suffix: "",
    label: "Île-de-France",
    sublabel: "extension nationale prévue",
    color: "#134E5E",
    progress: 60
  }
];

export function ProjectionStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-b from-[#E0F7F5] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#2DD4BF' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
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
            Nos objectifs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des ambitions concrètes pour une mobilité inclusive et durable
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {objectives.map((objective, index) => {
            const Icon = objective.icon;
            const count = useCounter(objective.value, 2500, isInView);
            
            return (
              <motion.div
                key={objective.label}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto relative"
                  style={{ backgroundColor: objective.color + '20' }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    style={{ backgroundColor: objective.color }}
                  />
                  <Icon className="w-7 h-7 relative z-10" style={{ color: objective.color }} />
                </motion.div>

                {/* Counter */}
                <motion.div 
                  className="text-center mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <div className="text-4xl mb-1" style={{ color: objective.color, fontWeight: '700' }}>
                    {objective.value >= 1000 
                      ? `${(count / 1000).toFixed(count >= 1000 ? 0 : 1)}K${objective.suffix}` 
                      : `${count}${objective.suffix}`}
                  </div>
                  <h3 className="mb-1" style={{ color: '#134E5E', fontWeight: '600' }}>
                    {objective.label}
                  </h3>
                  <p className="text-sm text-gray-500">{objective.sublabel}</p>
                </motion.div>

                {/* Progress bar */}
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                >
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full rounded-full"
                      style={{ backgroundColor: objective.color }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${objective.progress}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.15 + 0.7, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>

                {/* Decorative element */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 opacity-5"
                  style={{ 
                    background: `linear-gradient(135deg, transparent 50%, ${objective.color} 50%)`,
                    borderTopRightRadius: '1rem'
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Additional info banner */}
        <motion.div
          className="mt-12 text-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-3xl mx-auto border-2"
          style={{ borderColor: '#2DD4BF20' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-700 text-lg mb-3">
            <span style={{ color: '#134E5E', fontWeight: '600' }}>Déploiement initial :</span> Île-de-France
            <span className="mx-3">•</span>
            <span style={{ color: '#134E5E', fontWeight: '600' }}>Extension nationale :</span> 2027-2028
          </p>
          <p className="text-gray-400 text-sm italic">
            * Chiffres projetés, basés sur nos estimations internes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
