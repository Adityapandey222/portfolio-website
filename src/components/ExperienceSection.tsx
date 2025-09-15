const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions and contributing to exciting projects across different industries.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {[
            {
              title: "Senior Frontend Developer",
              company: "Tech Solutions Inc.",
              period: "2022 - Present",
              description: "Leading frontend development for enterprise web applications using React, TypeScript, and modern tools."
            },
            {
              title: "Full Stack Developer",
              company: "Digital Agency Co.",
              period: "2020 - 2022",
              description: "Developed and maintained multiple client projects, focusing on responsive design and performance optimization."
            },
            {
              title: "Junior Developer",
              company: "StartUp Labs",
              period: "2018 - 2020",
              description: "Built foundational skills in web development while contributing to various startup projects and MVPs."
            }
          ].map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
              <div className="bg-card/50 p-6 rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;