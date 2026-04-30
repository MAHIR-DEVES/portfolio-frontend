import ProjectImageSlider from '@/components/common/home/ProjectImageSlider';
import {
  Star,
  ArrowRight,
  ExternalLink,
  Clock,
  DollarSign,
  Code2,
} from 'lucide-react';
import Link from 'next/link';

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

async function getProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`, {
    cache: 'no-store',
  });

  const data = await res.json();

  return data.data || data; // flexible
}
export default async function ProjectsPage() {
  const projects: Project[] = await getProjects();
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* HEADER */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <div className="bg-orange-500/10 rounded-full px-4 py-1.5">
            <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
              আমাদের পোর্টফোলিও
            </span>
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          আমাদের{' '}
          <span className="text-orange-500 relative">
            প্রজেক্টসমূহ
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
          আমরা তৈরি করি আধুনিক প্রযুক্তির সমন্বয়ে গতিশীল ও স্কেলেবল সফটওয়্যার
          সলিউশন
        </p>
      </div>
      {/* PROJECT CARDS */}
      <div className="space-y-5">
        {projects.slice(0, 10).map(project => (
          <div
            key={project._id}
            className="group bg-white dark:bg-gray-800 rounded-md shadow-lg  overflow-hidden transform "
          >
            <div className="flex flex-col lg:flex-row">
              {/* IMAGE SLIDER */}
              <div className="lg:w-2/5 relative">
                <div className="relative h-64 md:h-[280px]">
                  <ProjectImageSlider images={project.images} />
                </div>

                {/* FEATURED BADGE */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1 shadow-lg">
                      <Star size={12} fill="currentColor" />
                      ফিচার্ড
                    </span>
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="lg:w-3/5 p-3 lg:px-8 flex flex-col justify-between">
                {/* CATEGORY */}
                <div className="mb-4">
                  <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs px-3 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md"
                    >
                      <Code2 size={10} />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* PRICE & DURATION  & VIEW DETAILS */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                  {/* PRICE, DURATION, RATING */}
                  <div className="flex  gap-6">
                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <DollarSign
                          size={16}
                          className="text-orange-600 dark:text-orange-400"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          মূল্য
                        </p>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {project.price}
                        </p>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <Clock
                          size={16}
                          className="text-orange-600 dark:text-orange-400"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          সময়কাল
                        </p>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {project.duration}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                        <Star
                          size={16}
                          className="text-yellow-600 dark:text-yellow-400 fill-yellow-600"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          রেটিং
                        </p>
                        <p className="font-bold text-gray-900 dark:text-white">
                          {project.rating}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* VIEW DETAILS */}
                  <div className="flex flex-row gap-3 md:justify-end items-center">
                    <Link
                      href={`/demo/${project._id}`}
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md"
                    >
                      বিস্তারিত দেখুন
                      <ArrowRight size={16} />
                    </Link>

                    <Link href={project.liveUrl || '#'} target="_blank">
                      <button className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:border-orange-500 text-gray-700 dark:text-gray-300 hover:text-orange-500 px-3 sm:px-6 py-2.5 rounded-lg font-medium transition-all duration-300">
                        <ExternalLink size={16} />
                        লাইভ ডেমো
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
