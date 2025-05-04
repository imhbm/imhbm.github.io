
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-4 md:px-8 border-b">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-charcoal">
            Himandri<span className="text-highlight">.dev</span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {['About', 'Tech Stack', 'Projects', 'Blogs', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-neutral-gray hover:text-charcoal transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-4",
          isMenuOpen ? "block" : "hidden"
        )}>
          <ul className="flex flex-col space-y-6">
            {['About', 'Tech Stack', 'Projects', 'Blogs', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-xl font-medium text-charcoal"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
