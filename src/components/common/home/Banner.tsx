'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { FaFacebook, FaNodeJs, FaReact, FaXTwitter } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import { FaWhatsapp } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const linesRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // GSAP Animations
  //   // const ctx = gsap.context(() => {
  //   //   // Animated lines effect
  //   //   if (linesRef.current) {
  //   //     const lines = linesRef.current.children;
  //   //     gsap.fromTo(
  //   //       lines,
  //   //       { width: '0%' },
  //   //       {
  //   //         width: '100%',
  //   //         duration: 1.5,
  //   //         stagger: 0.3,
  //   //         ease: 'power2.out',
  //   //         scrollTrigger: {
  //   //           trigger: bannerRef.current,
  //   //           start: 'top 80%',
  //   //           toggleActions: 'play none none reverse',
  //   //         },
  //   //       },
  //   //     );
  //   //   }

  //   //   // Text animation with smooth scroll
  //   //   gsap.fromTo(
  //   //     textRef.current,
  //   //     {
  //   //       opacity: 0,
  //   //       y: 50,
  //   //       rotationX: -20,
  //   //     },
  //   //     {
  //   //       opacity: 1,
  //   //       y: 0,
  //   //       rotationX: 0,
  //   //       duration: 1.2,
  //   //       ease: 'back.out(1.2)',
  //   //       scrollTrigger: {
  //   //         trigger: bannerRef.current,
  //   //         start: 'top 80%',
  //   //         toggleActions: 'play none none reverse',
  //   //       },
  //   //     },
  //   //   );

  //   //   // Image animation with parallax
  //   //   gsap.fromTo(
  //   //     imageRef.current,
  //   //     {
  //   //       opacity: 0,
  //   //       scale: 0.8,
  //   //       rotation: -10,
  //   //     },
  //   //     {
  //   //       opacity: 1,
  //   //       scale: 1,
  //   //       rotation: 0,
  //   //       duration: 1,
  //   //       ease: 'elastic.out(1, 0.5)',
  //   //       scrollTrigger: {
  //   //         trigger: bannerRef.current,
  //   //         start: 'top 80%',
  //   //         toggleActions: 'play none none reverse',
  //   //       },
  //   //     },
  //   //   );

  //   //   // Smooth floating animation for image
  //   //   gsap.to(imageRef.current, {
  //   //     y: -15,
  //   //     duration: 2,
  //   //     repeat: -1,
  //   //     yoyo: true,
  //   //     ease: 'power1.inOut',
  //   //   });
  //   // });

  //   return () => ctx.revert();
  // }, []);

  // Image animation variants for Framer Motion
  const imageAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/8801310520842', '_blank');
  };

  // Floating tech icons animation
  const techIcons = [
    {
      icon: <SiNextdotjs className="text-gray-700 dark:text-gray-300" />,
      position: 'top-0 left-0',
    },
    {
      icon: <FaReact className="text-purple-500" />,
      position: 'bottom-0 right-0',
    },
    {
      icon: <FaNodeJs className="text-orange-500" />,
      position: 'bottom-0 left-0',
    },
    {
      icon: <SiTypescript className="text-purple-600" />,
      position: 'top-0 right-0',
    },
  ];

  return (
    <section id="home" ref={bannerRef} className="relative  overflow-hidden">
      <div className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse items-center  md:flex-row">
          {/* Text Content */}
          <div
            ref={textRef}
            className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-purple-600 dark:text-purple-400">
              Hello, I&apos;m
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent leading-tight">
              MD Meherab Hossen
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
              <span>I am a </span>
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                <Typewriter
                  words={[
                    'Frontend Developer',
                    'Backend Developer',
                    'React Developer',
                    'Next.js Developer',
                    'MERN Stack Developer',
                    'Full Stack Developer',
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
              I&apos;m a passionate developer from Bangladesh specializing in
              creating beautiful, functional websites and web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary bg-gradient-to-r from-purple-600 to-orange-500 border-none text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm sm:text-base"
              >
                <a href="/Md_Meherab_Hossain_Munna_CV.pdf" download>
                  Download Resume
                </a>
              </motion.button>

              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline border-2 border-purple-500 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-orange-500 hover:text-white hover:border-transparent px-6 py-3 rounded-full transition-all duration-300 text-sm sm:text-base flex items-center gap-2"
              >
                <FaWhatsapp className="text-lg" />
                Contact Me
              </motion.button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 pt-4 justify-center md:justify-start">
              {[
                {
                  icon: <FaFacebook />,
                  color: 'text-purple-600',
                  border: 'border-purple-500',
                  hoverBg:
                    'hover:bg-gradient-to-r hover:from-purple-600 hover:to-orange-500',
                  link: 'https://www.facebook.com/meherab.hossen.7568',
                },
                {
                  icon: <BsGithub />,
                  color: 'text-gray-700 dark:text-gray-300',
                  border: 'border-gray-400',
                  hoverBg:
                    'hover:bg-gradient-to-r hover:from-purple-600 hover:to-orange-500',
                  link: 'https://github.com/MAHIR-DEVES',
                },
                {
                  icon: <LiaLinkedin />,
                  color: 'text-purple-600',
                  border: 'border-purple-500',
                  hoverBg:
                    'hover:bg-gradient-to-r hover:from-purple-600 hover:to-orange-500',
                  link: 'https://www.linkedin.com/in/md-meherab-07565a26b/',
                },
                {
                  icon: <FaXTwitter />,
                  color: 'text-gray-700 dark:text-gray-300',
                  border: 'border-gray-400',
                  hoverBg:
                    'hover:bg-gradient-to-r hover:from-purple-600 hover:to-orange-500',
                  link: 'https://x.com/Mdmeher25341474',
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-white dark:bg-gray-800 border-2 ${item.border} ${item.color} ${item.hoverBg} transition-all duration-300 hover:text-white hover:border-transparent shadow-md hover:shadow-purple-500/25`}
                >
                  {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Animated Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <motion.div
              ref={imageRef}
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              initial="initial"
              animate="animate"
            >
              <motion.img
                src={'/images/banner.png'}
                alt="Meherab Hossen"
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-purple-500/30"
                variants={imageAnimation}
              />

              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full -z-10 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut' as const,
                }}
              />

              {/* Floating Tech Icons */}
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${tech.position} text-3xl md:text-4xl bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg`}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
