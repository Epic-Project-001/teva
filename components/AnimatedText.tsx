"use client";

import { motion } from "framer-motion";

export default function AnimatedText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
}
