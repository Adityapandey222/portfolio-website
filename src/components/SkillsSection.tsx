const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks for creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "React", level: "90%" },
            { name: "TypeScript", level: "85%" },
            { name: "Node.js", level: "80%" },
            { name: "Tailwind CSS", level: "95%" },
            { name: "Next.js", level: "85%" },
            { name: "JavaScript", level: "90%" },
            { name: "Python", level: "75%" },
            { name: "Figma", level: "80%" }
          ].map((skill, index) => (
            <div 
              key={skill.name}
              className="text-center p-6 bg-card/50 rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-lg font-semibold text-foreground mb-2">{skill.name}</div>
              <div className="w-full bg-muted rounded-full h-2 mb-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: skill.level }}
                />
              </div>
              <span className="text-sm text-muted-foreground">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;