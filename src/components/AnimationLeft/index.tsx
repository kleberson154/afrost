import { motion } from "framer-motion";

interface AnimationDelayProps {
  children: React.ReactNode;
}

function AnimationLeft({ children }: AnimationDelayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationLeft;
