"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, Calendar, GraduationCap, CheckCircle, MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";
import { experiences, education } from "@/lib/data/experience";

export function ExperienceTimeline() {
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
    <section id="experience" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Experience & Education
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
            My professional journey and academic background
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Work Experience
            </h3>
            
            <div className="relative space-y-8">
              <div className="absolute top-0 bottom-0 left-[15px] w-px bg-border" />
              
              {experiences.map((exp, index) => (
                <motion.div key={exp.id} variants={itemVariants}>
                  <TimelineItem
                    title={exp.role}
                    subtitle={exp.company}
                    location={exp.location}
                    startDate={exp.startDate}
                    endDate={exp.endDate}
                    description={exp.description}
                    achievements={exp.achievements}
                    tags={exp.technologies}
                    icon={<Briefcase className="h-5 w-5" />}
                    isLast={index === experiences.length - 1}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h3>
            
            <div className="relative space-y-8">
              <div className="absolute top-0 bottom-0 left-[15px] w-px bg-border" />
              
              {education.map((edu, index) => (
                <motion.div key={edu.id} variants={itemVariants}>
                  <TimelineItem
                    title={edu.degree}
                    subtitle={edu.institution}
                    location={edu.location}
                    startDate={edu.startDate}
                    endDate={edu.endDate}
                    description={edu.description}
                    achievements={edu.achievements}
                    icon={<GraduationCap className="h-5 w-5" />}
                    isLast={index === education.length - 1}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  title: string;
  subtitle: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  tags?: string[];
  icon: React.ReactNode;
  isLast: boolean;
}

function TimelineItem({
  title,
  subtitle,
  location,
  startDate,
  endDate,
  description,
  achievements,
  tags,
  icon,
  isLast,
}: TimelineItemProps) {
  // Format dates for display
  const formatTimelineDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short'
    });
  };
  
  const startFormatted = formatTimelineDate(startDate);
  const endFormatted = endDate ? formatTimelineDate(endDate) : "Present";
  
  return (
    <div className="relative pl-10">
      <div className={cn(
        "absolute left-0 rounded-full p-1 bg-background border-2 border-primary text-primary",
        "flex items-center justify-center z-10"
      )}>
        {icon}
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl">{title}</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
              <Calendar className="mr-1 h-3.5 w-3.5" />
              <span>{startFormatted} - {endFormatted}</span>
            </div>
          </div>
          <div className="flex items-start justify-between">
            <div className="text-primary font-medium">{subtitle}</div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-3.5 w-3.5" />
              {location}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{description}</p>
          
          <div className="space-y-2">
            <h4 className="font-medium">Key Achievements:</h4>
            <ul className="space-y-1.5">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex">
                  <CheckCircle className="mr-2 h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}