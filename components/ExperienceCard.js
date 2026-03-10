import { motion } from 'framer-motion';

export default function ExperienceCard({ annee, icon, children, delay = 0, isHighlighted = false }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ y: -5 }}
      className={`rounded-2xl p-8 shadow-sm border flex flex-col md:flex-row gap-8 items-start relative overflow-hidden transition-all hover:shadow-lg ${
        isHighlighted ? "bg-gray-50 border-gray-200" : "bg-white border-gray-100"
      }`}
    >
      {/* Badge Année (Bleu si mis en avant, Gris sinon) */}
      <div className={`absolute top-0 right-0 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg z-10 shadow-sm ${
        isHighlighted ? "bg-blue-600" : "bg-gray-500"
      }`}>
        {annee}
      </div>
      
      {/* Grosse Icône à gauche */}
      <div className={`w-20 h-20 rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 border mt-2 ${
        isHighlighted ? "bg-white border-gray-100" : "bg-gray-50 border-gray-200"
      }`}>
        <span className="text-4xl">{icon}</span>
      </div>
      
      {/* Contenu principal (Titre, texte, boutons) */}
      <div className="flex-1">
        {children}
      </div>
    </motion.div>
  );
}