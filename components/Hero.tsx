"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DownloadIcon, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100 via-background to-background dark:from-purple-950/20 dark:via-background dark:to-background" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 order-2 lg:order-1"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-2"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-3"
            >
              Galeti Vamsi Krishna
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-3xl md:text-4xl font-semibold text-muted-foreground mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-400">
                Full Stack Developer
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              I build modern, responsive web applications with cutting-edge technologies.
              Focused on creating elegant solutions with clean, maintainable code.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-3 md:gap-4"
          >
            <Button size="lg" asChild>
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resume.pdf" target="_blank">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex gap-5 mt-2"
          >
            <Link href="https://github.com/GaletiVamsiKrishna" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:galetivamsikrishna@gmail.com">
              <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-200 dark:border-purple-900 shadow-xl">
            <Image
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="Galeti Vamsi Krishna"
              priority
              fill
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}