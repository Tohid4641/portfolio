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

      {/* ── Navbar ── */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isMenuOpen ? 'h-screen md:h-16' : 'h-16'
      } bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-700/60 shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); closeMenu(); }}
            className="flex items-center gap-2 group"
          >
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
              ST
            </span>
            <span className="hidden sm:block font-bold text-gray-900 dark:text-white text-lg tracking-tight">
              Tauhid<span className="text-blue-600 dark:text-blue-400">.dev</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: Hire Me + dark mode + mobile menu */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:dev.tauhid@gmail.com"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <span>💼</span> Hire Me
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-xl">
            <ul className="flex flex-col px-4 py-4 gap-1">
              {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                      closeMenu();
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="mailto:dev.tauhid@gmail.com"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
                  onClick={closeMenu}
                >
                  💼 Hire Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-30 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Main content */}
      <main>
        <section id="home" className="min-h-screen">
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