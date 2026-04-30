import ProjectImageSlider from '@/components/common/home/ProjectImageSlider';
import { Star, Clock, DollarSign, Code2, ExternalLink } from 'lucide-react';
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

// ======================
// FETCH SINGLE PROJECT
// ======================
async function getProject(id: string): Promise<Project> {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${apiUrl}/projects/${id}`, {
    cache: 'no-store', // dynamic data
  });

  if (!res.ok) {
    throw new Error('Failed to fetch project');
  }

  const data = await res.json();
  return data.data || data;
}

// ======================
// PAGE COMPONENT
// ======================
export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);
  console.log(project);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-10">
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

      {/* CATEGORY */}
      <span className="inline-block bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full mb-6">
        {project.category}
      </span>

      {/* IMAGE SLIDER */}
      <div className="mb-8">
        <ProjectImageSlider images={project.images} />
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* TECH STACK */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-md"
            >
              <Code2 size={14} />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* INFO BOX */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Price */}
        <div className="p-4 border rounded-lg flex items-center gap-3">
          <DollarSign />
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p className="font-bold">{project.price}</p>
          </div>
        </div>

        {/* Duration */}
        <div className="p-4 border rounded-lg flex items-center gap-3">
          <Clock />
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-bold">{project.duration}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="p-4 border rounded-lg flex items-center gap-3">
          <Star className="text-yellow-500 fill-yellow-500" />
          <div>
            <p className="text-sm text-gray-500">Rating</p>
            <p className="font-bold">{project.rating}</p>
          </div>
        </div>
      </div>

      {/* VIDEO (optional) */}
      {project.videoUrl && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Project Demo</h3>
          <iframe
            src={project.videoUrl.replace(
              'https://youtu.be/',
              'https://www.youtube.com/embed/',
            )}
            className="w-full h-[400px] rounded-lg"
            allowFullScreen
          />
        </div>
      )}

      {/* LIVE DEMO BUTTON */}
      <Link
        href={project.liveUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg">
          <ExternalLink size={18} />
          Live Demo
        </button>
      </Link>
    </div>
  );
}
