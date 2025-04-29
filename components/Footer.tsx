import Link from "next/link";
import { Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-primary" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-400 dark:to-violet-400 font-semibold">
            Galeti Vamsi Krishna
          </span>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {year} Galeti Vamsi Krishna. All rights reserved.
        </div>
        
        <div className="flex gap-8 text-sm">
          <Link 
            href="#home" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link 
            href="#about" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link 
            href="#projects" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}