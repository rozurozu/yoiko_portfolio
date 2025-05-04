"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function AboutHeader() {
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
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center"
        >
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden border-8 border-background shadow-xl">
              <Image
                src="https://images.pexels.com/photos/4064426/pexels-photo-4064426.jpeg?auto=compress&cs=tinysrgb&w=800"
                fill
                alt="Portrait photo"
                className="object-cover"
                sizes="(max-width: 768px) 300px, 400px"
                priority
              />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                About Me
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Full-stack developer with a passion for creating elegant, 
                user-centered digital experiences. Committed to writing clean, 
                efficient code and continuous learning.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}