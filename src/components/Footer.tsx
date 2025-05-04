
const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-charcoal text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-neutral-gray">
              © {new Date().getFullYear()} Himandri Mallick
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#about"
              className="text-neutral-gray hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-neutral-gray hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#blogs"
              className="text-neutral-gray hover:text-white transition-colors"
            >
              Blogs
            </a>
            <a
              href="#contact"
              className="text-neutral-gray hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
