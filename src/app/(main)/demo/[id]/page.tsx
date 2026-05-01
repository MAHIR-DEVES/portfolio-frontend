// filepath: src/app/(main)/demo/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import {
  Star,
  ArrowLeft,
  ExternalLink,
  Clock,
  DollarSign,
  Code2,
  Play,
  Calendar,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
import ProjectImageSlider from '@/components/common/home/ProjectImageSlider';

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
  createdAt?: string;
};

export default function ProjectDetailsPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getProject() {
      if (!params.id) return;

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects/${params.id}`,
          {
            cache: 'no-store',
          },
        );

        if (!res.ok) {
          throw new Error('Project not found');
        }

        const data = await res.json();
        setProject(data.data || data);
      } catch (error) {
        console.error('Error fetching project:', error);
        setError('Failed to load project. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    getProject();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          {/* Back Button Skeleton */}
          <div className="mb-8">
            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          </div>

          {/* Image Skeleton */}
          <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse mb-8"></div>

          {/* Content Skeleton */}
          <div className="space-y-4">
            <div className="h-8 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
            <div className="h-32 w-full bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Project Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {error || 'The project you are looking for does not exist.'}
            </p>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-4 md:pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Image Slider - Full Width at Top */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <ProjectImageSlider images={project.images} />
          </div>
        </div>

        {/* Content Section - Below Slider */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block bg-gradient-to-r from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 text-purple-600 dark:text-purple-400 text-sm px-3 py-1 rounded-full font-medium">
                {project.category}
              </span>
              {project.featured && (
                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-purple-600 to-orange-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                  <Star size={14} fill="currentColor" />
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
          </div>

          {/* Description */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Project Description
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-orange-100 dark:from-purple-900/30 dark:to-orange-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-lg font-medium"
                >
                  <Code2 size={16} />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Features */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Responsive Design',
                'Modern UI/UX',
                'Clean Code Architecture',
                'SEO Optimized',
                'Cross-browser Compatible',
                'Fast Performance',
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 list-none">
                  <CheckCircle
                    size={20}
                    className="text-green-500 flex-shrink-0"
                  />
                  <span className="text-gray-600 dark:text-gray-400">
                    {feature}
                  </span>
                </li>
              ))}
            </div>
          </div>

          {/* Video & Live Demo Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
              >
                <Play size={20} fill="currentColor" />
                Watch Project Video
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-500 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white px-6 py-4 rounded-xl font-medium transition-all duration-300"
              >
                <ExternalLink size={20} />
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
