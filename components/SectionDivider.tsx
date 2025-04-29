"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="my-12 md:my-24 flex justify-center"
    >
      <div className="h-1 w-16 rounded-full bg-gradient-to-r from-purple-200 to-violet-200 dark:from-purple-900/30 dark:to-violet-900/30" />
    </motion.div>
  );
}