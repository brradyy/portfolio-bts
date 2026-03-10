import { motion } from 'framer-motion';

export default function BentoCard({ children, className, isLarge = false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-3xl p-8 shadow-xl transition-all cursor-default ${className} ${
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {children}
    </motion.div>
  );
}