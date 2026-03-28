import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import logo from "figma:asset/a8d0837a5dcc70e9c9e472dbd431f77fcbc4124f.png";
import { motion } from "motion/react";

const footerLinks = {
  "Navigation": [
    { label: "Accueil", href: "#accueil" },
    { label: "Mission", href: "#mission" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],
  "Légal": [
    { label: "Mentions légales", href: "#mentions" },
    { label: "Politique de confidentialité", href: "#confidentialite" },
    { label: "CGU", href: "#cgu" },
    { label: "Accessibilité", href: "#accessibilite" }
  ],
  "Partenaires": [
    { label: "Devenir chauffeur", href: "#chauffeur" },
    { label: "Entreprises", href: "#entreprises" },
    { label: "Collectivités", href: "#collectivites" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#2DD4BF' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={logo} 
                alt="Ekymoov" 
                className="h-12 w-auto object-contain" 
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }} 
              />
            </motion.div>
            <p className="text-gray-600 mb-6 max-w-sm">
              La mobilité inclusive pour tous. Réservez votre trajet adapté en temps réel, partout en France.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all relative overflow-hidden group"
                    style={{ backgroundColor: '#E0F7F5' }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {/* Ripple effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: '#2DD4BF' }}
                      initial={{ scale: 0, opacity: 0.5 }}
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                    <Icon className="w-5 h-5 relative z-10" style={{ color: '#2DD4BF' }} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
          
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-4" style={{ color: '#134E5E', fontWeight: '600' }}>
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <motion.a 
                      href={link.href}
                      className="text-gray-600 hover:text-[#2DD4BF] transition-colors inline-block relative"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.label}
                      <motion.div
                        className="absolute bottom-0 left-0 h-px bg-[#2DD4BF]"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2025 Ekymoov. Tous droits réservés.
            </p>
            <motion.div 
              className="flex items-center gap-2 text-sm text-gray-500"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4" />
              <a 
                href="mailto:contact@ekymoov.fr" 
                className="hover:text-[#2DD4BF] transition-colors"
              >
                contact@ekymoov.fr
              </a>
            </motion.div>
          </div>
          <div className="text-center pt-4 border-t border-gray-100">
            <p className="text-gray-400 text-xs italic">
              Ekymoov est un projet en développement, actuellement en phase de conception en Île-de-France.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
