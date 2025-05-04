
import { ExternalLink } from 'lucide-react';

const Blogs = () => {
  const blogs = [
    {
      title: "Build AI Agents",
      excerpt: "Learn how to build AI agents from scratch with step-by-step instructions and practical examples",
      link: "https://learngenai.hashnode.dev/build-ai-agents",
      date: "April 2024",
    },
    {
      title: "Master in Prompts Using Python",
      excerpt: "Explore advanced techniques for prompt engineering using Python libraries and frameworks",
      link: "https://learngenai.hashnode.dev/master-in-prompts-using-python",
      date: "March 2024",
    },
    {
      title: "Decoding AI Jargons with Chai",
      excerpt: "A beginner-friendly guide to understanding complex AI terminology and concepts",
      link: "https://learngenai.hashnode.dev/decoding-ai-jargons-with-chai",
      date: "February 2024",
    },
  ];

  return (
    <section id="blogs" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-charcoal mb-8 flex items-center">
          <span className="w-12 h-1 bg-highlight block mr-4"></span>
          Technical Blogs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article 
              key={index}
              className="bg-soft-gray rounded-lg overflow-hidden card-hover animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-3 bg-highlight"></div>
              <div className="p-6">
                <p className="text-sm text-neutral-gray mb-2">{blog.date}</p>
                <h3 className="text-xl font-bold text-charcoal mb-3">{blog.title}</h3>
                <p className="text-neutral-gray mb-4">{blog.excerpt}</p>
                <a 
                  href={blog.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-highlight hover:underline"
                >
                  Read More <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
