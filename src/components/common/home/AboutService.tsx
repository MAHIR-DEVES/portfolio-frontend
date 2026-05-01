'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import framer-motion with no SSR
const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  { ssr: false },
);

const AboutService = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything with animations until mounted
  if (!isMounted) {
    return (
      <section id="about">
        <div className="py-5 pt-15 px-6 sm:px-0">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
                      My Coding Journey
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Loading...
                    </p>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
                      Beyond Coding
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Loading...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-16 px-6 sm:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know me better - my journey, interests, and what I love to
            build
          </p>
        </MotionDiv>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* My Journey */}
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
                  My Coding Journey
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    My journey into programming began when I first discovered
                    the magic of turning ideas into functional websites. What
                    started as simple HTML pages has evolved into building
                    full-stack applications with the MERN stack.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    I&apos;m particularly passionate about creating intuitive
                    user interfaces that solve real problems while maintaining
                    clean, efficient code that other developers can easily
                    understand and build upon.
                  </p>
                </div>
              </MotionDiv>

              {/* Beyond Coding */}
              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
                  Beyond Coding
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p className="leading-relaxed">
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    tech trends, reading sci-fi novels, or playing football with
                    friends. I believe maintaining diverse interests fuels
                    creativity in development.
                  </p>
                  <p className="leading-relaxed">
                    My latest passion? Learning photography to better understand
                    visual composition - which directly improves my UI design
                    skills!
                  </p>
                </div>
              </MotionDiv>
            </div>

            {/* What I Love Building */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
                What I Love Building
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-purple-500 dark:text-purple-400 mr-3 mt-1">
                      ▹
                    </span>
                    <span>
                      Interactive web applications with React and modern
                      JavaScript
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 dark:text-purple-400 mr-3 mt-1">
                      ▹
                    </span>
                    <span>
                      Efficient backend systems with Node.js and Express
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 dark:text-purple-400 mr-3 mt-1">
                      ▹
                    </span>
                    <span>Real-time applications with WebSockets</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-purple-500 dark:text-purple-400 mr-3 mt-1">
                      ▹
                    </span>
                    <span>
                      Responsive, accessible designs that work across all
                      devices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 dark:text-purple-400 mr-3 mt-1">
                      ▹
                    </span>
                    <span>
                      Projects that make a real difference in people&apos;s
                      lives
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 dark:text-purple-400 mr-3 mt-1">
                      ▹
                    </span>
                    <span>
                      Open source contributions and community projects
                    </span>
                  </li>
                </ul>
              </div>
            </MotionDiv>
          </div>

          {/* Image Section */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="relative z-10 w-64 h-64 lg:w-96 lg:h-[450px] rounded-2xl overflow-hidden border-4 border-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/Md Meherab Hossen.jpeg"
                    alt="Profile"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10 group-hover:from-purple-500/5 group-hover:to-orange-500/5 transition-all duration-300"></div>
              </div>

              {/* Animated Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-30 group-hover:opacity-50 -z-10"></div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full opacity-70 group-hover:animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-400 rounded-full opacity-70 group-hover:animate-pulse delay-75"></div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
