"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ProjectsHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-[800px] mx-auto text-center space-y-4"
        >
          <motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My Projects
          </motion.h1>
          <motion.p variants={itemVariants} className="text-muted-foreground md:text-xl/relaxed">
            A collection of web and application development projects showcasing my
            skills and experience across different technologies and domains.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}