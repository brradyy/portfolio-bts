import { motion } from 'framer-motion';

export default function Section({ id, className, children, delay = 0 }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}