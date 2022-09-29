import { motion } from "framer-motion";
import React from "react";

interface AnimationCompProps {
  children: React.ReactNode;
}

function AnimationComp({ children }: AnimationCompProps) {
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

export default AnimationComp;
