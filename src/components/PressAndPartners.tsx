import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Newspaper, Award, Handshake, Building2 } from "lucide-react";

const pressArticles = [
  {
    title: "Ekymoov : Une solution innovante pour la mobilité inclusive",
    source: "Les Échos Start",
    excerpt: "La startup parisienne développe une plateforme prometteuse qui pourrait transformer le secteur du transport adapté.",
    image: "https://images.unsplash.com/photo-1567105583350-8d56f6cb4513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ld3NwYXBlciUyMHByZXNzJTIwbWVkaWF8ZW58MXx8fHwxNzYzMDY1NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Newspaper
  },
  {
    title: "L'accessibilité au cœur de l'innovation",
    source: "BPI France Création",
    excerpt: "Ekymoov fait partie des projets tech à fort impact social soutenus par l'écosystème startup français.",
    image: "https://images.unsplash.com/photo-1520865649274-dfc80824ab25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwaW5jdWJhdG9yJTIwbG9nbyUyMGJyYW5kfGVufDF8fHx8MTc2MzA2NTcyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Award
  },
  {
    title: "Transport adapté : la révolution numérique en marche",
    source: "Maddyness",
    excerpt: "Comment Ekymoov compte révolutionner l'accès aux services de mobilité pour les personnes à mobilité réduite.",
    image: "https://images.unsplash.com/photo-1567105583350-8d56f6cb4513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ld3NwYXBlciUyMHByZXNzJTIwbWVkaWF8ZW58MXx8fHwxNzYzMDY1NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Newspaper
  }
];

const partners = [
  {
    name: "Station F",
    type: "Incubateur",
    icon: Building2,
    color: "#2DD4BF"
  },
  {
    name: "BPI France",
    type: "Soutien financier",
    icon: Handshake,
    color: "#4829E0"
  },
  {
    name: "APF France Handicap",
    type: "Partenaire associatif",
    icon: Handshake,
    color: "#FD2734"
  },
  {
    name: "Île-de-France Mobilités",
    type: "Partenaire institutionnel",
    icon: Building2,
    color: "#134E5E"
  }
];

export function PressAndPartners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#134E5E' }}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* PART A - Press */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: '#134E5E', fontWeight: '700' }}>
              Ils parlent de nous
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que les médias et acteurs de l'innovation disent d'Ekymoov
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pressArticles.map((article, index) => {
              const Icon = article.icon;
              return (
                <motion.div
                  key={article.title}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#2DD4BF', fontWeight: '600' }}>
                        {article.source}
                      </div>
                      <h3 className="mb-3" style={{ color: '#134E5E', fontWeight: '600', lineHeight: '1.4' }}>
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* PART B - Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4" style={{ color: '#134E5E', fontWeight: '700' }}>
              Ils nous accompagnent
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partenaires et soutiens qui croient en notre projet
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <motion.div
                  key={partner.name}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: partner.color + '20' }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Icon className="w-8 h-8" style={{ color: partner.color }} />
                  </motion.div>
                  
                  <h4 className="text-center mb-2" style={{ color: '#134E5E', fontWeight: '600' }}>
                    {partner.name}
                  </h4>
                  <p className="text-center text-sm text-gray-500">
                    {partner.type}
                  </p>

                  {/* Decorative bottom bar */}
                  <motion.div
                    className="mt-4 h-1 rounded-full mx-auto"
                    style={{ backgroundColor: partner.color, width: '60%' }}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Additional notes */}
          <motion.div
            className="mt-12 text-center space-y-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-gray-400 text-sm italic">
              * Simulation de revue de presse pour présentation du projet.
            </p>
            <p className="text-gray-500 text-sm italic">
              ** Partenariats en cours de négociation et de finalisation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
