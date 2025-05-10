import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SEO from './components/SEO';
import { init } from '@emailjs/browser';

init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Apply dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <SEO />
      
      {/* Dark mode toggle - kept on right */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-2 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white z-50 shadow-lg hover:scale-105 transition-transform"
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Mobile menu button - moved to left */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-2 left-4 md:hidden p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white z-50 shadow-lg hover:scale-105 transition-transform"
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>

      {/* Navigation - adjusted padding to account for left menu button */}
      <nav className={`fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${
        isMenuOpen ? 'h-screen md:h-auto' : 'h-16'
      }`}>
        <div className="container h-full md:h-auto">
          <ul className={`flex md:flex-row flex-col items-center justify-center md:space-x-8 md:space-y-0 space-y-6 py-4 ${
            isMenuOpen ? 'h-full pt-20 md:pt-4' : 'hidden md:flex'
          }`}>
            {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lg md:text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                    closeMenu();
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Main content */}
      <main className="pt-8">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800/50">
          <Skills />
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center">
          <Experience />
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800/50">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Shaikh Tauhid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;