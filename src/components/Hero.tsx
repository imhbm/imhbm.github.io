
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 section-padding bg-gradient-to-br from-soft-gray to-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal">
              Hi there, I'm <br />
              <span className="text-highlight">Himandri Mallick</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-gray max-w-xl">
              A passionate software developer and AI enthusiast who loves building, learning, and sharing knowledge.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-highlight text-white rounded-md hover:bg-highlight/90 transition-colors"
              >
                Get in touch
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-highlight text-highlight rounded-md hover:bg-highlight/10 transition-colors"
              >
                View projects
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-highlight/20 to-highlight/5 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-highlight/30 animate-spin-slow"></div>
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-white shadow-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/3a5686d9-c03b-47d7-aef5-2895b8a9cbcd.png" 
                  alt="Himandri Mallick" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
