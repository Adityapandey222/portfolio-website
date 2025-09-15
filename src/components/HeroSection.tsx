import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground animate-fade-in">
                Hey, I am <span className="gradient-text font-semibold">Noah</span>
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up">
                Web developer
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-in-up">
              Crafting beautiful, functional websites and applications with modern technologies. 
              Let's bring your digital vision to life.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                Hire me
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border/50 text-foreground hover:bg-secondary/20 font-medium px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>
            </div>
            
            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium border border-border/20 hover:border-primary/30 transition-colors duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right Column - Character space (handled by background image) */}
          <div className="hidden lg:block" />
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};

export default HeroSection;