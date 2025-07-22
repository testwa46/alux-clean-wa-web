import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/70130c4b-bd65-4194-8749-7c833bdadb3a.png" 
                alt="Alux Facility Services" 
                className="h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Setting the benchmark in industrial and commercial cleaning across Western Australia.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-primary-foreground/80 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-primary-foreground/80 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-primary-foreground/80 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#quote" className="text-primary-foreground/80 hover:text-accent transition-colors">Get a Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><span className="text-primary-foreground/80">Office Cleaning</span></li>
              <li><span className="text-primary-foreground/80">Industrial Cleaning</span></li>
              <li><span className="text-primary-foreground/80">Commercial Spaces</span></li>
              <li><span className="text-primary-foreground/80">Deep Cleaning</span></li>
              <li><span className="text-primary-foreground/80">Eco-Friendly Solutions</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">(08) 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">info@aluxfacilityservices.com.au</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">Perth, WA</span>
              </div>
            </div>
            <Button variant="accent" size="sm" className="mt-4">
              Get Started Today
            </Button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 Alux Facility Services. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;