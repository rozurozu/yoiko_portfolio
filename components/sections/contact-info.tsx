import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-1" />
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-muted-foreground">Tokyo, Japan</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-primary mt-1" />
            <div>
              <h3 className="font-medium">Email</h3>
              <Link 
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                contact@example.com
              </Link>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-primary mt-1" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <Link 
                href="tel:+81123456789"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                +81 123 456 789
              </Link>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary mt-1" />
            <div>
              <h3 className="font-medium">Working Hours</h3>
              <p className="text-muted-foreground">Mon - Fri: 9AM - 6PM (JST)</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Connect With Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <Github className="h-8 w-8 mb-2" />
              <span className="text-sm font-medium">GitHub</span>
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <Twitter className="h-8 w-8 mb-2" />
              <span className="text-sm font-medium">Twitter</span>
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 border rounded-lg hover:bg-muted transition-colors"
            >
              <Linkedin className="h-8 w-8 mb-2" />
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}