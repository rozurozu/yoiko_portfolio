import Image from "next/image";
import Link from "next/link";
import { AboutHeader } from "@/components/sections/about-header";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Download, GraduationCap } from "lucide-react";

export const metadata = {
  title: "About Me | Professional Portfolio",
  description: "Learn about my background, experience, and skills in web development.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <AboutHeader />
      
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">My Background</h2>
              
              <div className="space-y-4 text-lg">
                <p>
                  I'm a full-stack developer with over 6 years of experience building
                  modern web applications. My journey in software development began with a
                  Computer Science degree, followed by roles at various tech companies where
                  I've had the opportunity to work on a wide range of projects.
                </p>
                <p>
                  My expertise lies in creating responsive, accessible and performant web
                  applications using modern JavaScript frameworks like React and Next.js.
                  I'm passionate about writing clean, maintainable code and continuously
                  learning new technologies and approaches.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open source projects,
                  writing technical articles, or exploring the outdoors. I believe in the power
                  of technology to solve real-world problems and am always looking for
                  opportunities to make a positive impact through my work.
                </p>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </div>
            </div>
            
            <Card className="md:w-1/3">
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p>Tokyo, Japan</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Education</h3>
                  <div className="flex items-start gap-2">
                    <GraduationCap className="mt-1 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">MSc in Computer Science</p>
                      <p className="text-sm text-muted-foreground">
                        University of Tokyo, 2017
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Current Role</h3>
                  <div className="flex items-start gap-2">
                    <Briefcase className="mt-1 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">Senior Software Engineer</p>
                      <p className="text-sm text-muted-foreground">
                        TechCorp Inc., 2020-Present
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Languages</h3>
                  <ul className="space-y-1">
                    <li>Japanese (Native)</li>
                    <li>English (Fluent)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <ExperienceTimeline />
    </div>
  );
}