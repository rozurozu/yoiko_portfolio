import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { projects } from "@/lib/data/projects";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found."
    };
  }
  
  return {
    title: `${project.title} | Portfolio Projects`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map(project => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <Button asChild variant="ghost" className="self-start mb-4">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Link>
            </Button>
            
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {project.title}
            </h1>
            
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {project.tags.map(tag => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            
            <div className="flex gap-4 mt-8">
              <Button asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Link>
              </Button>
              {project.demoUrl && (
                <Button asChild variant="outline">
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Project Overview</h2>
                <p className="text-lg">{project.longDescription || project.description}</p>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Screenshots</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="aspect-video relative rounded-lg overflow-hidden border">
                    <Image
                      src={project.image}
                      alt={`${project.title} main screenshot`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.screenshots.map((screenshot, index) => (
                        <div key={index} className="aspect-video relative rounded-lg overflow-hidden border">
                          <Image
                            src={screenshot}
                            alt={`${project.title} screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Project Info</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">{formatDate(project.date)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <span className="font-medium">{project.tags[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Client:</span>
                        <span className="font-medium">Personal Project</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Links</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        <Link 
                          href={project.githubUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm hover:underline"
                        >
                          GitHub Repository
                        </Link>
                      </div>
                      {project.demoUrl && (
                        <div className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          <Link 
                            href={project.demoUrl}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm hover:underline"
                          >
                            Live Demo
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Need a similar project?</h3>
                  <p className="text-muted-foreground">
                    If you're interested in a similar project or want to discuss
                    collaboration opportunities, feel free to get in touch.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Contact Me</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}