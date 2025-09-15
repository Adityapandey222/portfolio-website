import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Connect", href: "#connect" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="text-2xl font-bold gradient-text">noah.</h2>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Download Resume Button */}
          <Button 
            variant="outline" 
            size="sm" 
            className="border-border/50 text-foreground hover:bg-secondary/20 font-medium rounded-full transition-all duration-300"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;