"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Code, Database, Globe, Monitor, Server, Layout, 
  GitBranch, Terminal, Settings, Cloud 
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Monitor className="h-6 w-6" />,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express", "NestJS", "Python", "FastAPI"],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    category: "DevOps",
    icon: <Cloud className="h-6 w-6" />,
    items: ["Docker", "GitHub Actions", "AWS", "Vercel", "CI/CD"],
  },
  {
    category: "Tools",
    icon: <GitBranch className="h-6 w-6" />,
    items: ["Git", "GitHub", "VS Code", "Figma", "Postman"],
  },
  {
    category: "Languages",
    icon: <Code className="h-6 w-6" />,
    items: ["JavaScript", "TypeScript", "Python", "Go", "Rust (Learning)"],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            A comprehensive collection of technologies and tools I work with
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className={cn(
                "relative group flex flex-col p-6 bg-background border rounded-lg shadow-sm",
                "transition-all duration-300 hover:shadow-md"
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>

              <ul className="mt-2 space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}