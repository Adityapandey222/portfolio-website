export default function AboutSection() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-foreground">About Me</h2>
      <div className="max-w-3xl mx-auto text-center text-muted-foreground">
        <p>
          Hi, I'm <span className="font-bold text-primary">Aditya Pandey</span>.<br />
          I am a highly motivated software engineer with strong skills in web development, problem solving, and modern frameworks.
          I love building impactful projects and continually learning new technologies. My experience includes React, TypeScript, Node.js, machine learning, and cloud platforms.
        </p>
        <p className="mt-4">
          Connect with me on <a className="text-primary underline" href="https://linkedin.com/in/aditya-pandey-1b204920b" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my work on <a className="text-primary underline" href="https://github.com/Adityapandey222" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </div>
    </section>
  );
}