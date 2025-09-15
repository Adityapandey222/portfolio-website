import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="connect" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project and bring your ideas to life.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-6 bg-card/50 rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300 animate-fade-in-up">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">noah@example.com</p>
            </div>
            
            <div className="text-center p-6 bg-card/50 rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Github className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">GitHub</h3>
              <p className="text-muted-foreground">@noah-dev</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Mail, href: "#" }
            ].map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="w-12 h-12 rounded-full border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <social.icon className="w-5 h-5" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;