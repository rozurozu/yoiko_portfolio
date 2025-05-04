import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { SkillsSection } from "@/components/sections/skills-section";
import { BlogPreview } from "@/components/sections/blog-preview";
import { GithubStats } from "@/components/sections/github-stats";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <SkillsSection />
      <ProjectsShowcase featured={true} />
      <GithubStats />
      <BlogPreview />
      <ContactCta />
    </div>
  );
}