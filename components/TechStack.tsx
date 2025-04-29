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
        logo: "data:image/png;base64,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",
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
        logo: "/icons/nextjs.png",
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
        logo: "/icons/tailwind.png",
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
