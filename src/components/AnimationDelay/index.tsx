import { motion } from "framer-motion";

interface AnimationDelayProps {
  children: React.ReactNode;
}

function AnimationDelay({ children }: AnimationDelayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationDelay;
