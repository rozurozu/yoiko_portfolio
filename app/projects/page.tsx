import { ProjectsHeader } from "@/components/sections/projects-header";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata = {
  title: "Projects | Professional Portfolio",
  description: "Explore my web development projects and applications.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center">
      <ProjectsHeader />
      <ProjectsShowcase />
      <ContactCta />
    </div>
  );
}