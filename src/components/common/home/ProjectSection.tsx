// ProjectSection.tsx
'use client';

import { useState, useEffect } from 'react';
import {
  Star,
  ArrowRight,
  ExternalLink,
  Clock,
  DollarSign,
  Code2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import ProjectImageSlider from './ProjectImageSlider';

type Project = {
  _id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  technologies: string[];
  price: number;
  duration: string;
  rating: number;
  featured: boolean;
  videoUrl?: string;
  liveUrl?: string;
};

export default function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const projectsPerPage = 4; // Changed from 3 to 4

  useEffect(() => {
    async function getProjects() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`,
          {
            cache: 'no-store',
          },
        );
        const data = await res.json();
        setProjects(data.data || data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, []);

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="text-center mb-12">
            <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="bg-gray-200 dark:bg-gray-800 rounded-md h-96 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="projects">
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          {/* HEADER */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My{' '}
              <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent relative">
                Projects
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="4"
                  viewBox="0 0 100 4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2 L100 2"
                    stroke="#F97316"
                    strokeWidth="3"
                    strokeDasharray="5 5"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I build dynamic and scalable software solutions using modern
              technologies
            </p>
          </div>

          {/* PROJECT CARDS - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProjects.map(project => (
              <div
                key={project._id}
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* IMAGE SLIDER */}
                <div className="relative overflow-hidden h-48">
                  <ProjectImageSlider images={project.images} />

                  {/* FEATURED BADGE */}
                  {project.featured && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1 shadow-lg">
                        <Star size={10} fill="currentColor" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col flex-1">
                  {/* CATEGORY */}
                  <div className="mb-2">
                    <span className="inline-block bg-gradient-to-r from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 text-purple-600 dark:text-purple-400 text-xs px-2 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-md"
                      >
                        <Code2 size={8} />
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-2 mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
                    <Link
                      href={`/demo/${project._id}`}
                      className="flex-1 inline-flex items-center justify-center gap-1 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-3 py-1.5 rounded-lg font-medium text-sm transition-all duration-300 shadow-md"
                    >
                      Details
                      <ArrowRight size={14} />
                    </Link>

                    <Link href={project.liveUrl || '#'} target="_blank">
                      <button className="inline-flex items-center justify-center gap-1 border border-gray-300 dark:border-gray-600 hover:border-purple-500 text-gray-700 dark:text-gray-300 hover:text-purple-500 px-3 py-1.5 rounded-lg font-medium text-sm transition-all duration-300">
                        <ExternalLink size={14} />
                        Live
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION BUTTONS */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
                ${
                  currentPage === 1
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-orange-500 hover:text-white border border-gray-300 dark:border-gray-600'
                }`}
              >
                <ChevronLeft size={18} />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  page => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg font-medium transition-all duration-300
                    ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-md'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                    }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
                ${
                  currentPage === totalPages
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-orange-500 hover:text-white border border-gray-300 dark:border-gray-600'
                }`}
              >
                Next
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Showing Results Info */}
          <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
            Showing {indexOfFirstProject + 1} -{' '}
            {Math.min(indexOfLastProject, projects.length)} of {projects.length}{' '}
            projects
          </div>
        </div>
      </div>
    </section>
  );
}
