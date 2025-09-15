import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        {/* <ExperienceSection /> Removed */}
        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-4">Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore my recent work and personal projects.
              </p>
            </div>
            {/* Add your projects content/cards here */}
          </div>
        </section>
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;