import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-character.png";
import FloatingElements from "@/components/FloatingElements";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 lg:space-y-8 px-4 lg:px-0">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-base lg:text-lg text-muted-foreground animate-fade-in">
                Hey, I am <span className="gradient-text font-semibold">Noah</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight animate-fade-in-up">
                Web developer
              </h1>
            </div>
            
            {/* Description */}
            <p className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up">
              Crafting beautiful, functional websites and applications with modern technologies. 
              Let's bring your digital vision to life.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 lg:px-8 py-4 lg:py-6 rounded-full shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                Hire me
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border/50 text-foreground hover:bg-secondary/20 font-medium px-6 lg:px-8 py-4 lg:py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-4 lg:h-5 w-4 lg:w-5" />
                Contact
              </Button>
            </div>
            
            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 lg:gap-3 pt-2 lg:pt-4">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-3 lg:px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-xs lg:text-sm font-medium border border-border/20 hover:border-primary/30 transition-colors duration-300 animate-fade-in-up hover:animate-bounce-soft"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right Column - 3D Character & Floating Elements */}
          <div className="lg:col-span-6 xl:col-span-7 relative h-64 sm:h-80 lg:h-full min-h-[400px] lg:min-h-[600px]">
            {/* Character will be visible from background image */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20 lg:to-background/40" />
          </div>
        </div>
      </div>
      
      {/* Floating 3D Elements */}
      <FloatingElements />
    </section>
  );
};

export default HeroSection;