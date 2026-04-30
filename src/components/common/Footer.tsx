'use client';
import Link from 'next/link';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <footer className="bg-white/80 dark:bg-[#0F0B1A]/80 backdrop-blur-md text-gray-700 dark:text-gray-300 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-200 dark:border-gray-800 pb-10">
          {/* PERSONAL INFO */}
          <div>
            {/* Logo - MH */}
            <div className="mb-4">
              <Link
                href="#home"
                className="inline-flex items-center gap-1 group"
              >
                <span className="text-2xl font-black bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
                  M
                </span>
                <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                  H
                </span>
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Passionate developer creating beautiful and functional web
              experiences. I turn ideas into reality through code and
              creativity.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500 hover:text-white transition-all duration-300"
              >
                <FaGithub size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500 hover:text-white transition-all duration-300"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-500 hover:text-white transition-all duration-300"
              >
                <FaFacebook size={14} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={e => handleSmoothScroll(e, link.href)}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors duration-300 flex items-center gap-1 group cursor-pointer"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-purple-500"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SKILLS HIGHLIGHTS */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Top Skills
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <ChevronRight size={12} className="text-purple-500" />
                React & Next.js
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <ChevronRight size={12} className="text-purple-500" />
                TypeScript
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <ChevronRight size={12} className="text-purple-500" />
                Node.js & Express
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <ChevronRight size={12} className="text-purple-500" />
                Tailwind CSS
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                <ChevronRight size={12} className="text-purple-500" />
                MongoDB & PostgreSQL
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-orange-500 transition-all duration-300">
                  <Phone
                    size={14}
                    className="text-purple-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    +880 1310-520842
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-orange-500 transition-all duration-300">
                  <Mail
                    size={14}
                    className="text-purple-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Email
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    meherab@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-orange-500 transition-all duration-300">
                  <MapPin
                    size={14}
                    className="text-purple-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Location
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Rajshahi, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Meherab Hossen. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
