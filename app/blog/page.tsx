import { BlogHeader } from "@/components/sections/blog-header";
import { BlogList } from "@/components/sections/blog-list";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata = {
  title: "Blog | Professional Portfolio",
  description: "Read my articles on web development, design, and technology.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center">
      <BlogHeader />
      <BlogList />
      <ContactCta />
    </div>
  );
}