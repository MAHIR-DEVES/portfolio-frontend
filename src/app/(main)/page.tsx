import AboutService from '@/components/common/home/AboutService';
import Banner from '@/components/common/home/Banner';
import ContactUs from '@/components/common/home/ContactUs';
import EducationalAndExperience from '@/components/common/home/EducationalAndExperience';
import ProjectSection from '@/components/common/home/ProjectSection';
import SkillSection from '@/components/common/home/SkillsSection';
import React from 'react';

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      {/* Main Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50 dark:from-gray-900 dark:via-[#0a0614] dark:to-gray-950"></div>

      {/* Moving Gradient Lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Horizontal moving lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-slideHorizontal"
            style={{
              top: `${5 + i * 12}%`,
              opacity: 0.15,
              animationDuration: `${8 + i * 2}s`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* Vertical moving lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-slideVertical"
            style={{
              left: `${10 + i * 16}%`,
              opacity: 0.15,
              animationDuration: `${10 + i * 2}s`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const randomDuration = 5 + Math.random() * 10;
          const randomDelay = Math.random() * 5;
          const size = 2 + Math.random() * 4;

          return (
            <div
              key={`p-${i}`}
              className="absolute bg-purple-500 rounded-full opacity-20 dark:opacity-30 animate-float"
              style={{
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
                animationDuration: `${randomDuration}s`,
                animationDelay: `${randomDelay}s`,
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          );
        })}
      </div>

      {/* Animated Grid Pattern */}
      <div className="fixed inset-0 opacity-5 dark:opacity-10 pointer-events-none animate-slideGrid">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Banner />
        <AboutService />
        <SkillSection />
        <EducationalAndExperience />
        <ProjectSection />
        <ContactUs />
      </div>

      {/* Global Styles */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes slideHorizontal {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes slideVertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }
        
        @keyframes slideGrid {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-slideHorizontal {
          animation: slideHorizontal linear infinite;
        }
        
        .animate-slideVertical {
          animation: slideVertical linear infinite;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-slideGrid {
          animation: slideGrid 20s linear infinite;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #9333ea 1px, transparent 1px),
                            linear-gradient(to bottom, #9333ea 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(139, 92, 246, 0.1);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #9333ea, #f97316);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7e22ce, #ea580c);
        }
        
        /* Selection color */
        ::selection {
          background: rgba(139, 92, 246, 0.3);
          color: #9333ea;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
