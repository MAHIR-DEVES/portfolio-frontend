'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const EducationalAndExperience = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const educationData = [
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Nazipur Govt. College',
      location: 'Nazipur, Bangladesh',
      year: '2022 - 2024',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Nazipur High School',
      location: 'Nazipur, Bangladesh',
      year: '2020 - 2022',
    },
  ];

  const experienceData = [
    {
      title: 'Frontend Developer',
      company: 'Creative Software LTD',
      location: 'Remote',
      period: '2023 - Present',
      description:
        'Building responsive web applications using React, Next.js & Tailwind CSS',
    },
  ];

  if (!isMounted) {
    return (
      <section className="md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
            <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="md:py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Education & Experience
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mt-3 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Horizontal Line on Left Side */}
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-orange-500 to-purple-500 hidden md:block"></div>
            <div className="absolute -left-6 top-1/2 w-5 h-px bg-gradient-to-r from-purple-500 to-transparent hidden md:block"></div>

            <div className="flex items-center gap-2 mb-4 pl-0 md:pl-4">
              <GraduationCap size={20} className="text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-4 pl-0 md:pl-4">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-xl p-5 shadow-lg border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 mb-2">
                    <Calendar size={14} />
                    <span>{edu.year}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-xs">
                    <MapPin size={12} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Horizontal Line on Right Side */}
            <div className="absolute -right-4 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-purple-500 to-orange-500 hidden md:block"></div>
            <div className="absolute -right-6 top-1/2 w-5 h-px bg-gradient-to-l from-orange-500 to-transparent hidden md:block"></div>

            <div className="flex items-center gap-2 mb-4 pr-0 md:pr-4 justify-end">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                Experience
              </h3>
              <Briefcase size={20} className="text-orange-500" />
            </div>

            <div className="space-y-4 pr-0 md:pr-4">
              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-xl p-5 shadow-lg border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <div className="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-xs mb-2">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationalAndExperience;
