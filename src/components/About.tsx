
const About = () => {
  const skills = [
    { category: "Languages", items: ["Java", "Python", "JavaScript", "SQL"] },
    { category: "Frameworks", items: ["Spring Boot", "React", "Node.js"] },
    { category: "AI & ML", items: ["LLM", "Generative AI", "RAG", "LangChain"] },
    { category: "Cloud & DevOps", items: ["Docker", "Kubernetes", "Azure", "AWS"] },
    { category: "Tools", items: ["Git", "GitHub", "Maven", "Gradle", "VS Code", "IntelliJ"] }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-charcoal mb-8 flex items-center">
          <span className="w-12 h-1 bg-highlight block mr-4"></span>
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <p className="text-neutral-gray text-lg">
                I'm currently working on <span className="font-medium text-charcoal">RAG-based Applications</span> 
                and continuously learning <span className="font-medium text-charcoal">LLM, Gen AI, RAG, and Prompt Engineering</span>.
              </p>
              
              <p className="text-neutral-gray text-lg">
                I'm open to collaborate on <span className="font-medium text-charcoal">AI projects, backend development, and open-source contributions</span>.
              </p>
              
              <div className="py-4">
                <p className="text-neutral-gray text-lg mb-2">Ask me about:</p>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "LLMs", "Generative AI", "Docker", "Kubernetes"].map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-soft-gray text-charcoal rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-neutral-gray text-lg italic">
                "I'm passionate about decoding complex tech into simple, practical solutions!"
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-charcoal mb-6">Tech Stack</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-soft-gray p-6 rounded-lg card-hover">
                  <h4 className="text-lg font-medium text-highlight mb-3">{skillGroup.category}</h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-neutral-gray">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
