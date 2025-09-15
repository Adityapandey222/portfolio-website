const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "",
    period: "Dec 2022 - Aug 2026",
    cgpa: "65%"
  },
  {
    degree: "Senior Secondary (XII) – Science",
    institution: "",
    period: "Apr 2020 - Mar 2021",
    cgpa: "78.2%"
  },
  {
    degree: "Secondary (X)",
    institution: "",
    period: "May 2018 - Mar 2019",
    cgpa: "79.4%"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Education</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-card/50 p-6 rounded-lg border border-border/20">
              <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-primary font-medium mb-2">{edu.period}</p>
              {edu.gpa && <p className="text-muted-foreground">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
