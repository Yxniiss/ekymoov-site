import { Card } from "./ui/card";
import { Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const team = [
  {
    name: "Sophie Arnaud",
    role: "Co-fondatrice & CEO",
    description: "Passionnée d'innovation sociale et d'inclusion, Sophie a créé Ekymoov pour rendre la mobilité accessible à tous.",
    image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2Mjg2MTc3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "#",
    email: "sophie@ekymoov.fr"
  },
  {
    name: "Marc Dubois",
    role: "CTO & Co-fondateur",
    description: "Expert en technologies mobiles, Marc développe les solutions techniques qui rendent Ekymoov simple et efficace.",
    image: "https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NjI4OTg2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "#",
    email: "marc@ekymoov.fr"
  },
  {
    name: "Léa Martin",
    role: "Responsable Partenariats",
    description: "Léa coordonne notre réseau de chauffeurs partenaires et veille à la qualité de service pour tous nos utilisateurs.",
    image: "https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjI4NDcxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    linkedin: "#",
    email: "lea@ekymoov.fr"
  }
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-b from-[#E0F7F5] to-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#134E5E' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
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
            Notre Équipe
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Une équipe engagée au service de la mobilité inclusive
          </p>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Passionnés par l'innovation sociale, nous travaillons chaque jour à construire une solution qui change des vies.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 sm:p-10 bg-white border-0 rounded-3xl overflow-hidden group relative h-full shadow-lg hover:shadow-2xl transition-all">
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.05) 0%, rgba(19, 78, 94, 0.05) 100%)'
                  }}
                />

                {/* Image container with hover effect */}
                <motion.div 
                  className="aspect-square rounded-3xl overflow-hidden mb-6 relative shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on image hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#134E5E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
                
                <div className="text-center relative z-10">
                  <motion.h3 
                    className="mb-2" 
                    style={{ color: '#134E5E', fontWeight: '600', fontSize: '1.25rem' }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.div 
                    className="text-sm mb-4" 
                    style={{ color: '#2DD4BF', fontWeight: '500' }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {member.role}
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {member.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex justify-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  >
                    <motion.a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                      style={{ backgroundColor: '#E0F7F5' }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="w-5 h-5" style={{ color: '#2DD4BF' }} />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                      style={{ backgroundColor: '#E0F7F5' }}
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail className="w-5 h-5" style={{ color: '#2DD4BF' }} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Decorative corner element */}
                <motion.div
                  className="absolute bottom-0 left-0 w-16 h-16 opacity-5"
                  style={{ 
                    background: 'linear-gradient(45deg, #2DD4BF 50%, transparent 50%)',
                    borderBottomLeftRadius: '1rem'
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
