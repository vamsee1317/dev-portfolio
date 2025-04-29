"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col items-center text-center mb-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold">{children}</h2>
      <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full" />
    </motion.div>
  );
}