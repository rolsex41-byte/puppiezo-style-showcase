import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "About Us", "Dogs", "Cats", "Available Pets", "Breeds Information"
  ];
  
  const services = [
    "Pet Adoption", "Pet Products", "Veterinary Care", "Pet Training", "Pet Insurance"
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">PUPPIE</span>
                <span className="text-accent">ZO</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                India's most trusted pet ecosystem connecting pet lovers with quality companions, products, and services.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@puppiezo.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-foreground">Follow Us</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-foreground">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe for pet care tips and updates
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Puppiezo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Button variant="link" className="text-sm text-muted-foreground hover:text-primary p-0">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-sm text-muted-foreground hover:text-primary p-0">
              Terms of Service
            </Button>
            <Button variant="link" className="text-sm text-muted-foreground hover:text-primary p-0">
              Cookie Policy
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;