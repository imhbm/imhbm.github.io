import { Mail, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-soft-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-charcoal mb-8 flex items-center">
          <span className="w-12 h-1 bg-highlight block mr-4"></span>
          Connect With Me
        </h2>
        
        <div>
          <h3 className="text-xl font-semibold text-charcoal mb-4">Let's get in touch</h3>
          <p className="text-neutral-gray mb-6">
            I'm open to collaborate on AI projects, backend development, and open-source contributions.
            Feel free to reach out if you have any questions or opportunities.
          </p>
          
          <div className="space-y-4 mb-8">
            <a 
              href="mailto:ihbm.dev@gmail.com"
              className="flex items-center text-neutral-gray hover:text-highlight transition-colors"
            >
              <Mail className="mr-3" size={20} />
              <span>ihbm.dev@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/himandrimallick/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-neutral-gray hover:text-highlight transition-colors"
            >
              <Linkedin className="mr-3" size={20} />
              <span>linkedin.com/in/himandrimallick</span>
              <ExternalLink size={14} className="ml-2" />
            </a>
          </div>
          
          <div className="mt-8 p-4 bg-white rounded-lg border border-neutral-gray/20">
            <p className="text-charcoal font-medium">GitHub Stats</p>
            <p className="text-neutral-gray text-sm">
              Check out my open source contributions and coding activity
            </p>
            
            <a 
              href="https://github.com/imhbm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-highlight hover:underline mt-2 text-sm"
            >
              View GitHub Profile <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
