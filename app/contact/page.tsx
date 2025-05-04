import { ContactHeader } from "@/components/sections/contact-header";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";

export const metadata = {
  title: "Contact | Professional Portfolio",
  description: "Get in touch with me for project inquiries or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <ContactHeader />
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}