const certifications = [
  "Salesforce Agentblazer Champion",
  "HackerRank: Problem Solving (Python, CSS)",
  "Infosys Springboard: HTML5, CSS3, DBMS",
  "Udemy: Python Programming, C++"
];

const CertificationsSection = () => (
  <section id="certifications" className="py-20">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold gradient-text mb-4">Certifications</h2>
      </div>
      <ul className="max-w-2xl mx-auto list-disc list-inside space-y-4">
        {certifications.map((cert, idx) => (
          <li key={idx} className="bg-card/50 p-4 rounded-lg border border-border/20">
            {cert}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CertificationsSection;
