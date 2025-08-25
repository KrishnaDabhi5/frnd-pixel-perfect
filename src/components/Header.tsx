import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Safety Center", href: "#safety" },
    { label: "APM Program", href: "#apm" },
    { label: "Become Star Trainer", href: "#trainer" },
    { label: "Become a Game Show Host", href: "#host" },
    { label: "Become a FRND Celeb", href: "#celeb" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 max-w-7xl">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-app-red flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline text-foreground">FRND</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <span>Language</span>
          </Button>
          
          <Button variant="default" size="sm" className="hidden sm:inline-flex bg-app-green hover:bg-app-green/90 text-white">
            Login
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="border-t pt-4 space-y-3">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Globe className="h-4 w-4 mr-2" />
                    Language
                  </Button>
                  <Button variant="default" size="sm" className="w-full bg-app-green hover:bg-app-green/90 text-white">
                    Login
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;