import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#" },
        { label: "Features", href: "#features" },
        { label: "Careers", href: "#careers" },
        { label: "Safety Center", href: "#safety" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms-of-use" },
        { label: "Community Guidelines", href: "/community-guidelines" }
      ]
    }
  ];

  return (
    <footer className="bg-muted border-t">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-app-red flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-bold text-xl">FRND</span>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:careers@frnd.app" className="hover:text-foreground transition-colors">
                    careers@frnd.app
                  </a>
                </div>
                <div className="flex items-start space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div className="text-xs">
                    <p>Urban Vault No. 1350,</p>
                    <p>19th Main, 17th Cross Road,</p>
                    <p>HSR Layout 1st sector opposite,</p>
                    <p>Gnan shrishti school Bengaluru,</p>
                    <p>Karnataka India, 560102</p>
                  </div>
                </div>
              </div>
            </div>

            {/* HR Contact & Social */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">HR Contact</h3>
              <div className="text-sm text-muted-foreground mb-4">
                <a 
                  href="https://www.linkedin.com/in/tanisha-g-897477167/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  HR - Tanisha Gagneja
                </a>
              </div>
              
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="p-2">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="p-2">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;