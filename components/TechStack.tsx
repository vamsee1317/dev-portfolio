"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import SectionTitle from "@/components/SectionTitle";

const techCategories = [
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        level: 90,
        logo: "/icons/react.png",
        topics: ["Component Lifecycle", "Hooks", "Context API", "Performance Optimization"],
        mastered: [
          "Advanced Hooks (useCallback, useMemo, useRef)",
          "Custom Hook Creation",
          "React Router and Navigation",
          "State Management (Redux, Context)",
          "Server-Side Rendering",
          "Component Design Patterns",
          "Performance Optimization",
          "Testing with React Testing Library",
          "Error Boundaries",
          "Code Splitting and Lazy Loading",
        ],
      },
      {
        name: "Next.js",
        level: 85,
        logo: "/icons/nextdotjs.png",
        topics: ["App Router", "Server Components", "API Routes", "Static Generation"],
        mastered: [
          "App Router Architecture",
          "Server and Client Components",
          "Data Fetching Strategies",
          "Dynamic Routes and Middleware",
          "Static Site Generation (SSG)",
          "Incremental Static Regeneration",
          "API Routes and Edge Functions",
          "Image Optimization",
          "Internationalization",
          "Authentication Patterns",
        ],
      },
      {
        name: "TypeScript",
        level: 80,
        logo: "/icons/typescript.png",
        topics: ["Type System", "Generics", "Interfaces", "Type Guards"],
        mastered: [
          "Advanced Type System",
          "Generics and Constraints",
          "Utility Types",
          "Decorators and Metadata",
          "Module System",
          "Type Guards and Narrowing",
          "Mapped and Conditional Types",
          "Declaration Files",
          "Project Configuration",
          "Integration with Build Tools",
        ],
      },
      {
        name: "Tailwind CSS",
        level: 90,
        logo: "/icons/tailwindcss.png",
        topics: ["Responsive Design", "Custom Themes", "Animations", "Dark Mode"],
        mastered: [
          "Custom Configuration",
          "Responsive Design Patterns",
          "Component Styling",
          "Dark Mode Implementation",
          "Animation and Transitions",
          "Custom Plugins",
          "Performance Optimization",
          "Design System Integration",
          "Grid Layouts",
          "Utility Pattern",
        ],
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "Node.js",
        level: 85,
        logo: "/icons/nodejs.png",
        topics: ["Express.js", "REST APIs", "Authentication", "Performance"],
        mastered: [
          "Express.js Framework",
          "RESTful API Design",
          "Authentication & Authorization",
          "Middleware Development",
          "Error Handling",
          "Database Integration",
          "Performance Optimization",
          "Security Best Practices",
          "Microservices Architecture",
          "Testing and Documentation",
        ],
      },
      {
        name: "PostgreSQL",
        level: 75,
        logo: "/icons/postgresql.png",
        topics: ["Query Optimization", "Indexing", "Transactions", "Schemas"],
        mastered: [
          "Database Design",
          "Query Optimization",
          "Indexing Strategies",
          "Transaction Management",
          "Stored Procedures",
          "Triggers and Events",
          "Partitioning",
          "Replication",
          "Performance Tuning",
          "Backup and Recovery",
        ],
      },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      {
        name: "Git",
        level: 85,
        logo: "/icons/git.png",
        topics: ["Version Control", "Branching", "CI/CD", "Collaboration"],
        mastered: [
          "Version Control Fundamentals",
          "Branching Strategies",
          "Merge Conflict Resolution",
          "Git Flow Workflow",
          "GitHub Actions",
          "Repository Management",
          "Code Review Process",
          "Release Management",
          "Git Hooks",
          "Team Collaboration",
        ],
      },
      {
        name: "Docker",
        level: 70,
        logo: "/icons/docker.png",
        topics: ["Containerization", "Docker Compose", "Networking", "Security"],
        mastered: [
          "Container Creation",
          "Docker Compose",
          "Image Optimization",
          "Multi-stage Builds",
          "Container Orchestration",
          "Network Configuration",
          "Volume Management",
          "Security Best Practices",
          "CI/CD Integration",
          "Monitoring and Logging",
        ],
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 0.8, ease: "easeOut" },
  }),
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full py-20 px-4 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Tech Stack</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: catIndex * 0.2,
                  },
                },
              }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={cardVariants} whileHover="hover" className="group">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="cursor-pointer">
                          <div className="flex items-center justify-between mb-1">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
                                  <div className="flex items-center gap-2">
                                    <img
                                      src={skill.logo}
                                      alt={skill.name}
                                      className="w-5 h-5 object-contain"
                                    />
                                    <span className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400">
                                      {skill.name}
                                    </span>
                                  </div>
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-lg">
                                <DialogHeader>
                                  <DialogTitle className="flex items-center gap-2 text-xl">
                                    <img
                                      src={skill.logo}
                                      alt={skill.name}
                                      className="w-6 h-6 object-contain"
                                    />
                                    <span>{skill.name}</span>
                                    <span className="text-sm text-purple-600 dark:text-purple-400">
                                      Mastery Level: {skill.level}%
                                    </span>
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="mt-4">
                                  <h4 className="font-medium mb-2">Mastered Concepts:</h4>
                                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {skill.mastered.map((item, index) => (
                                      <li key={index} className="flex items-center gap-2">
                                        <span className="text-purple-600 dark:text-purple-400">•</span>
                                        <span className="text-sm">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          </div>

                          <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
                              variants={progressVariants}
                              custom={skill.level}
                            />
                          </div>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-64 bg-white dark:bg-slate-800 p-4 shadow-lg" align="start">
                        <h4 className="font-medium mb-2">Key Topics:</h4>
                        <ul className="space-y-1">
                          {skill.topics.map((topic, index) => (
                            <li key={index} className="text-sm flex items-center gap-2">
                              <span className="text-purple-600 dark:text-purple-400">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </HoverCardContent>
                    </HoverCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
