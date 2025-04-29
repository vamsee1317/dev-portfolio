"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Code2, Home, User, Layers, FolderKanban, 
  Github, Send, Menu, X 
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Tech Stack", href: "#tech-stack", icon: Layers },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "GitHub", href: "#github", icon: Github },
  { name: "Contact", href: "#contact", icon: Send },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b" 
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <Code2 className="h-6 w-6 text-primary" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-500">
            G Vamsi Krishna
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex gap-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <motion.div 
          className="absolute top-full left-0 right-0 bg-background shadow-lg border-b md:hidden p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}