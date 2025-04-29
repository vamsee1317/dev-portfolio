"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/SectionTitle";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, user authentication, and payment processing.",
    image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team functionality.",
    image: "https://images.pexels.com/photos/7108/notebook-computer-chill-tablet.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "TypeScript", "Prisma", "tRPC"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that displays current conditions and forecasts for any location.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my projects and skills with a modern design.",
    image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>My Projects</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
      className={cn(
        "rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md hover:shadow-lg transition-all duration-300",
        project.featured && "md:col-span-2"
      )}
    >
      <div className={cn(
        "grid grid-cols-1",
        project.featured && "md:grid-cols-2"
      )}>
        <div className="relative h-60 md:h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
            <div className="flex gap-2">
              <Button size="sm" asChild className="gap-1.5">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button size="sm" variant="secondary" asChild className="gap-1.5">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/30">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="mt-auto flex gap-3">
            <Button asChild variant="outline" size="sm" className="gap-1.5">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-1.5">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Repository
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}