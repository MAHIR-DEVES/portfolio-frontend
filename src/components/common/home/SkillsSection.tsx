'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaNetworkWired } from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiMongoose,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma,
} from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

const SkillSection = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        {
          name: 'JavaScript',
          icon: <SiJavascript className="w-6 h-6 text-yellow-400" />,
        },
        { name: 'React', icon: <FaReact className="w-6 h-6 text-cyan-400" /> },
        {
          name: 'Next.js',
          icon: (
            <SiNextdotjs className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: 'TypeScript',
          icon: <SiTypescript className="w-6 h-6 text-blue-500" />,
        },
        {
          name: 'Firebase',
          icon: <IoLogoFirebase className="w-6 h-6 text-yellow-500" />,
        },
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss className="w-6 h-6 text-teal-400" />,
        },
      ],
      gradient: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-500/30',
    },
    {
      name: 'Backend',
      skills: [
        {
          name: 'MongoDB',
          icon: <SiMongodb className="w-6 h-6 text-green-500" />,
        },
        {
          name: 'Mongoose',
          icon: <SiMongoose className="w-6 h-6 text-green-600" />,
        },
        { name: 'MySQL', icon: <SiMysql className="w-6 h-6 text-blue-600" /> },
        {
          name: 'Express',
          icon: (
            <SiExpress className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          ),
        },
        {
          name: 'Node.js',
          icon: <FaNodeJs className="w-6 h-6 text-green-600" />,
        },
        {
          name: 'RESTful API',
          icon: <FaNetworkWired className="w-6 h-6 text-purple-500" />,
        },
      ],
      gradient: 'from-orange-500 to-orange-600',
      borderColor: 'border-orange-500/30',
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', icon: <SiGit className="w-6 h-6 text-orange-600" /> },
        {
          name: 'GitHub',
          icon: (
            <SiGithub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          ),
        },
        {
          name: 'Postman',
          icon: <SiPostman className="w-6 h-6 text-orange-500" />,
        },
        {
          name: 'Vercel',
          icon: (
            <SiVercel className="w-6 h-6 text-gray-800 dark:text-gray-400" />
          ),
        },
        {
          name: 'Netlify',
          icon: <SiNetlify className="w-6 h-6 text-teal-500" />,
        },
        {
          name: 'Figma',
          icon: <SiFigma className="w-6 h-6 text-purple-500" />,
        },
      ],
      gradient: 'from-purple-500 to-orange-500',
      borderColor: 'border-purple-500/30',
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border ${category.borderColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-opacity-50`}
            >
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {category.name}
                </h3>
                <div
                  className={`w-16 h-1 bg-gradient-to-r ${category.gradient} mx-auto rounded-full`}
                ></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center p-4 bg-white/50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* MERN Stack Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 w-full"
        >
          <div className="text-center mb-6">
            <span className="text-lg text-gray-600 dark:text-gray-400">
              Specialized in
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {/* React */}
            <div className="flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg">
              <FaReact className="text-cyan-400 text-xl" />
              <span className="text-cyan-400 font-medium">React</span>
            </div>

            {/* Next.js */}
            <div className="flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg">
              <SiNextdotjs className="text-gray-700 dark:text-gray-300 text-xl" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Next.js
              </span>
            </div>

            {/* TypeScript */}
            <div className="flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg">
              <SiTypescript className="text-blue-500 text-xl" />
              <span className="text-blue-500 font-medium">TypeScript</span>
            </div>

            {/* MongoDB */}
            <div className="flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg">
              <SiMongodb className="text-green-500 text-xl" />
              <span className="text-green-500 font-medium">MongoDB</span>
            </div>

            {/* Mongoose */}
            <div className="flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg">
              <SiMongoose className="text-green-600 text-xl" />
              <span className="text-green-600 font-medium">Mongoose</span>
            </div>

            {/* MySQL */}
            <div className="flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg">
              <SiMysql className="text-blue-600 text-xl" />
              <span className="text-blue-600 font-medium">MySQL</span>
            </div>

            {/* Node.js */}
            <div className="flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg">
              <FaNodeJs className="text-green-600 text-xl" />
              <span className="text-green-600 font-medium">Node.js</span>
            </div>

            {/* Express */}
            <div className="flex items-center gap-3 px-6 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-lg">
              <SiExpress className="text-gray-600 dark:text-gray-400 text-xl" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Express
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
