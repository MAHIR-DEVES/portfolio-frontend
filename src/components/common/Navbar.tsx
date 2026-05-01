'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isClickScrolling, setIsClickScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling) return; // ❌ stop override

      setScrolled(window.scrollY > 10);

      if (window.scrollY < 150) {
        setActiveSection('home');
        return;
      }

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    const targetId = href.replace('#', '');

    // Home → top
    if (targetId === 'home') {
      setIsClickScrolling(true); // ✅ ADD
      setActiveSection('home');

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        setIsClickScrolling(false); // ✅ reset after scroll
      }, 500);

      setIsOpen(false);
      window.history.pushState(null, '', href);
      return;
    }

    const element = document.getElementById(targetId);

    if (element) {
      const yOffset = -80; // navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

      setIsOpen(false);
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      {/* Navbar with Glass Effect */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-all duration-300 ease-in-out bg-white/70 dark:bg-[#0F0B1A]/70 backdrop-blur-xl shadow-lg
          ${scrolled ? '' : ''}
          border-b border-white/20 dark:border-white/10
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Meherab Hossen */}
            <Link
              href="#home"
              onClick={e => handleSmoothScroll(e, '#home')}
              className="group flex items-center gap-2"
            >
              <div className="flex items-center gap-1">
                {/* Animated dot */}
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>

                {/* Letter M */}
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <span className="text-2xl font-black bg-gradient-to-br from-purple-600 to-orange-600 dark:from-purple-400 dark:to-orange-400 bg-clip-text text-transparent">
                    M
                  </span>
                </div>
              </div>

              {/* Your Name */}
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold tracking-tight text-gray-800 dark:text-white">
                  Meherab
                </span>
                <span className="text-lg font-light text-gray-500 dark:text-gray-400 hidden sm:inline">
                  Hossen
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => handleSmoothScroll(e, link.href)}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 
                           group overflow-hidden cursor-pointer backdrop-blur-sm
                           ${
                             activeSection === link.id
                               ? 'text-purple-600 dark:text-purple-400'
                               : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                           }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 
                               transform transition-transform duration-300
                               ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  />
                </a>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 sm:gap-4">
              <ThemeToggle />

              {/* Resume/CV Button */}
              <a
                href="/Md_Meherab_Hossain_Munna_CV.pdf"
                download
                rel="noopener noreferrer"
                className="hidden sm:block px-5 py-2 bg-gradient-to-r 
                         from-purple-500 to-orange-500
                         text-white rounded-full font-semibold text-sm
                         hover:from-purple-600 hover:to-orange-600 
                         hover:shadow-lg hover:scale-105 
                         transition-all duration-300"
              >
                Resume
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-purple-500/10 transition-colors backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X
                    size={24}
                    className="text-purple-600 dark:text-purple-400"
                  />
                ) : (
                  <Menu
                    size={24}
                    className="text-purple-600 dark:text-purple-400"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-all duration-300
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu (LEFT SIDE DRAWER) */}
      <div
        className={`
          fixed top-0 left-0 h-full w-full max-w-sm 
          bg-white/95 dark:bg-[#0F0B1A]/95 backdrop-blur-xl
          shadow-2xl z-50 md:hidden transition-transform duration-300 ease-out
          border-r border-white/20 dark:border-white/10
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-purple-500/20 dark:border-purple-400/20">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">AK</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
                  Your Name
                </span>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} className="p-1">
              <X size={24} className="text-purple-600 dark:text-purple-400" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 py-8 px-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => handleSmoothScroll(e, link.href)}
                className={`flex items-center justify-between py-4 px-4 font-medium text-lg
                         rounded-xl transition-all duration-200 group cursor-pointer
                         ${
                           activeSection === link.id
                             ? 'bg-gradient-to-r from-purple-500/10 to-orange-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                             : 'text-gray-700 dark:text-gray-300 hover:bg-purple-500/5'
                         }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <span>{link.name}</span>
                <ChevronRight
                  size={20}
                  className={`transition-all duration-200 ${
                    activeSection === link.id
                      ? 'opacity-100 text-purple-600 dark:text-purple-400'
                      : 'opacity-0 group-hover:opacity-100 text-purple-400'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-purple-500/20 dark:border-purple-400/20 space-y-4">
            <a
              href="/Md_Meherab_Hossain_Munna_CV.pdf"
              download
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-orange-500 
                       text-white font-semibold rounded-xl text-center block
                       hover:from-purple-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              © 2024 Your Name
            </p>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 sm:h-20" />
    </>
  );
}
