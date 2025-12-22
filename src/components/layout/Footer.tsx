import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  explore: [
    { name: "Home Builder", href: "#builder" },
    { name: "Live Sites", href: "#live" },
    { name: "Smart Home", href: "#smart" },
    { name: "Materials", href: "#materials" },
  ],
  build: [
    { name: "Cost Calculator", href: "#calculator" },
    { name: "Project Matchmaker", href: "#matchmaker" },
    { name: "Book Consultation", href: "#book" },
    { name: "Quality Standards", href: "#quality" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border/30">
      {/* Newsletter Section */}
      <div className="container-custom py-16">
        <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 opacity-50" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Stay Updated on Our Innovations
              </h3>
              <p className="text-muted-foreground">
                Get exclusive insights, project updates, and construction tips delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary/50 transition-colors min-w-[280px]"
              />
              <Button variant="gold" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16 border-t border-border/30">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center font-display font-bold text-secondary-foreground text-xl shadow-lg">
                T
              </div>
              <span className="font-display font-bold text-2xl text-foreground">
                TVICL
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building Nigeria's future with innovation, quality, and excellence. 
              Your trusted partner in construction and smart home solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+2348000000000" 
                className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+234 800 000 0000</span>
              </a>
              <a 
                href="mailto:info@tvicl.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@tvicl.com</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Innovation Drive, Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Build */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Build</h4>
            <ul className="space-y-3">
              {footerLinks.build.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-custom py-6 border-t border-border/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TVICL. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-muted/50 transition-all duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
