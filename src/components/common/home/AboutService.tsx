'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

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
        <div className="bg-[#0d1321] text-white py-5 pt-15 px-6 sm:px-0">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-2 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-blue-300">
                      My Coding Journey
                    </h3>
                    <p className="text-gray-300">Loading...</p>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-blue-300">
                      Beyond Coding
                    </h3>
                    <p className="text-gray-300">Loading...</p>
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
    <section id="about">
      <div className=" text-white py-5 pt-15 px-6 sm:px-0">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </MotionDiv>

          {/* Rest of your content with MotionDiv instead of motion.div */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <MotionDiv
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold text-blue-300">
                    My Coding Journey
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      My journey into programming began when I first discovered
                      the magic of turning ideas into functional websites. What
                      started as simple HTML pages has evolved into building
                      full-stack applications with the MERN stack.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      I&apos;m particularly passionate about creating intuitive
                      user interfaces that solve real problems while maintaining
                      clean, efficient code that other developers can easily
                      understand and build upon.
                    </p>
                  </div>
                </MotionDiv>

                <MotionDiv
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold text-blue-300">
                    Beyond Coding
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <p className="leading-relaxed">
                      When I&apos;m not coding, you&apos;ll find me exploring
                      new tech trends, reading sci-fi novels, or playing
                      football with friends. I believe maintaining diverse
                      interests fuels creativity in development.
                    </p>
                    <p className="leading-relaxed">
                      My latest passion? Learning photography to better
                      understand visual composition - which directly improves my
                      UI design skills!
                    </p>
                  </div>
                </MotionDiv>
              </div>

              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-blue-300">
                  What I Love Building
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">▹</span>
                      <span>
                        Interactive web applications with React and modern
                        JavaScript
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">▹</span>
                      <span>
                        Efficient backend systems with Node.js and Express
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">▹</span>
                      <span>
                        Responsive, accessible designs that work across all
                        devices
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">▹</span>
                      <span>
                        Projects that make a real difference in people&apos;s
                        lives
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
                <div className="relative z-10 w-64 h-64 lg:w-96 lg:h-[450px] rounded-2xl overflow-hidden border-4 border-blue-500/20 group-hover:border-blue-400/40 transition-all duration-300 mt-5">
                  <img
                    src="/images/about.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 group-hover:from-blue-500/5 group-hover:to-purple-600/5 transition-all duration-300"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-30 group-hover:opacity-50 -z-10"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full opacity-70 group-hover:animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-70 group-hover:animate-pulse delay-75"></div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService;
