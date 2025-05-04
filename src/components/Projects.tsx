
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const projects = [
    {
      title: "Prompting",
      description: "A project to master prompt engineering techniques",
      tags: ["LLM", "Prompt Engineering", "AI"],
      github: "https://github.com/imhbm/masterinprompting",
      featured: true,
    },
    {
      title: "Build Your Agent",
      description: "Learn how to build AI agents with hands-on examples",
      tags: ["AI Agents", "LLM", "Python"],
      github: "https://github.com/imhbm/learnAgents",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-soft-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-charcoal mb-8 flex items-center">
          <span className="w-12 h-1 bg-highlight block mr-4"></span>
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-lg p-6 flex flex-col justify-between card-hover animate-slide-in",
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-charcoal">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-gray hover:text-highlight transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-neutral-gray mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-soft-gray text-neutral-gray rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={project.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-highlight hover:underline mt-4"
              >
                View Project <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
