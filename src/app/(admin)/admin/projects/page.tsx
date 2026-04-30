'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { uploadImageToImgbb } from '@/utils/imageUpload';
import {
  Plus,
  Edit,
  Trash2,
  X,
  Image as ImageIcon,
  Save,
  Loader2,
  Search,
  Eye,
} from 'lucide-react';

// ================= TYPES =================
type Project = {
  _id?: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  technologies: string[];
  price: number;
  duration: string;
  rating?: number;
  featured?: boolean;
  videoUrl: string;
  liveUrl?: string;
};

type FormState = {
  title: string;
  description: string;
  category: string;
  price: string;
  technologies: string;
  duration: string;
  videoUrl: string;
  liveUrl: string;
};

// ================= API =================
const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects`;

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [viewProject, setViewProject] = useState<Project | null>(null);
  const [viewLoading, setViewLoading] = useState(false);

  const [form, setForm] = useState<FormState>({
    title: '',
    description: '',
    category: '',
    price: '',
    technologies: '',
    duration: '',
    videoUrl: '',
    liveUrl: '',
  });

  // ================= FETCH =================
  const fetchProjects = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setProjects(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Filter projects based on search
  const filteredProjects = projects.filter(
    project =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.category.toLowerCase().includes(search.toLowerCase()) ||
      project.technologies.some(tech =>
        tech.toLowerCase().includes(search.toLowerCase()),
      ),
  );

  // ================= OPEN ADD =================
  const openAdd = () => {
    setForm({
      title: '',
      description: '',
      category: '',
      price: '',
      technologies: '',
      duration: '',
      videoUrl: '',
      liveUrl: '',
    });

    setImageFiles([]);
    setPreviewImages([]);
    setExistingImages([]);

    setEditId(null);
    setIsOpen(true);
  };

  // ================= OPEN EDIT =================
  const openEdit = (project: Project) => {
    setForm({
      title: project.title,
      description: project.description,
      category: project.category,
      price: project.price.toString(),
      technologies: project.technologies.join(', '),
      duration: project.duration,
      videoUrl: project.videoUrl || '',
      liveUrl: project.liveUrl || '',
    });

    setExistingImages(project.images);
    setPreviewImages(project.images);
    setImageFiles([]);

    setEditId(project._id!);
    setIsOpen(true);
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let uploadedUrls: string[] = [];

      if (imageFiles.length > 0) {
        uploadedUrls = await Promise.all(
          imageFiles.map(file => uploadImageToImgbb(file)),
        );
      }

      const formattedData = {
        title: form.title,
        description: form.description,
        category: form.category,
        price: Number(form.price),
        technologies: form.technologies.split(',').map(t => t.trim()),
        duration: form.duration,
        videoUrl: form.videoUrl,
        liveUrl: form.liveUrl,
        images: uploadedUrls.length ? uploadedUrls : existingImages,
        rating: 4.5,
        featured: false,
      };

      if (editId) {
        await axios.patch(`${BASE_URL}/${editId}`, formattedData);
      } else {
        await axios.post(BASE_URL, formattedData);
      }

      await fetchProjects();
      setIsOpen(false);

      setImageFiles([]);
      setPreviewImages([]);
      setExistingImages([]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ================= OPEN VIEW =================
  const handleView = async (id: string) => {
    setViewLoading(true);

    try {
      const res = await axios.get(`${BASE_URL}/${id}`);
      setViewProject(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setViewLoading(false);
    }
  };

  // ================= DELETE =================
  const handleDelete = async () => {
    if (!deleteId) return;

    setDeleteLoading(true);
    try {
      await axios.delete(`${BASE_URL}/${deleteId}`);
      setProjects(prev => prev.filter(p => p._id !== deleteId));
      setDeleteId(null);
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="p-6 lg:p-8">
        {/* HEADER */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                Projects
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Manage your portfolio projects
              </p>
            </div>

            <button
              onClick={openAdd}
              className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#ff8c5a] text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Plus size={18} />
              <span>Add Project</span>
            </button>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="mb-4">
          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by title, category or technology..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Technologies
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredProjects.map(project => (
                  <tr
                    key={project._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
                  >
                    <td className="px-4 py-3">
                      {project.images[0] ? (
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                          <ImageIcon size={20} className="text-gray-400" />
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {project.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                          {project.description}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg text-xs font-medium">
                        {project.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        ${project.price}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="inline-flex px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                      {project.duration}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openEdit(project)}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition"
                          title="Edit"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => setDeleteId(project._id!)}
                          className="p-1.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                        <button
                          onClick={() => handleView(project._id!)}
                          className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg"
                        >
                          <Eye size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              {search ? (
                <>
                  <p className="text-gray-500 dark:text-gray-400">
                    No projects found matching "{search}"
                  </p>
                  <button
                    onClick={() => setSearch('')}
                    className="mt-2 text-[#FF6B35] hover:underline"
                  >
                    Clear search
                  </button>
                </>
              ) : (
                <>
                  <p className="text-gray-500 dark:text-gray-400">
                    No projects yet
                  </p>
                  <button
                    onClick={openAdd}
                    className="mt-2 text-[#FF6B35] hover:underline"
                  >
                    Create your first project
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* DELETE CONFIRMATION MODAL */}
        {deleteId && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md p-6 mx-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Delete Project
                </h2>
                <button
                  onClick={() => setDeleteId(null)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Are you sure you want to delete this project? This action cannot
                be undone.
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setDeleteId(null)}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={deleteLoading}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition disabled:opacity-50"
                >
                  {deleteLoading && (
                    <Loader2 size={16} className="animate-spin" />
                  )}
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ADD/EDIT MODAL */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto py-8">
            <div className="bg-white dark:bg-gray-800 w-full max-w-2xl mx-4 rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {editId ? 'Edit Project' : 'Add New Project'}
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title *
                  </label>
                  <input
                    placeholder="Project title"
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Category *
                  </label>
                  <input
                    placeholder="e.g., Web Development, Mobile App"
                    value={form.category}
                    onChange={e =>
                      setForm({ ...form, category: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                {/* Price and Duration Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Price ($) *
                    </label>
                    <input
                      type="number"
                      placeholder="Price"
                      value={form.price}
                      onChange={e =>
                        setForm({ ...form, price: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Duration *
                    </label>
                    <input
                      placeholder="e.g., 2 weeks, 1 month"
                      value={form.duration}
                      onChange={e =>
                        setForm({ ...form, duration: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Technologies (comma separated) *
                  </label>
                  <input
                    placeholder="React, Node.js, MongoDB"
                    value={form.technologies}
                    onChange={e =>
                      setForm({ ...form, technologies: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                {/* Video URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Video URL (optional)
                  </label>
                  <input
                    placeholder="YouTube or Vimeo URL"
                    value={form.videoUrl}
                    onChange={e =>
                      setForm({ ...form, videoUrl: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                {/* Live URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Live URL (optional)
                  </label>
                  <input
                    placeholder="https://example.com"
                    value={form.liveUrl}
                    onChange={e =>
                      setForm({ ...form, liveUrl: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Images */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Project Images
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={e => {
                      const files = Array.from(e.target.files || []);
                      setImageFiles(prev => [...prev, ...files]);
                      const previews = files.map(f => URL.createObjectURL(f));
                      setPreviewImages(prev => [...prev, ...previews]);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:text-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:bg-[#FF6B35] file:text-white hover:file:bg-[#ff8c5a]"
                  />
                  {imageFiles.length > 0 && (
                    <p className="text-xs text-gray-500 mt-1">
                      Selected: {imageFiles.length} new image(s)
                    </p>
                  )}
                </div>

                {/* Image Preview */}
                {previewImages.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Image Preview
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {previewImages.map((img, i) => (
                        <div key={i} className="relative">
                          <img
                            src={img}
                            alt={`Preview ${i + 1}`}
                            className="w-16 h-16 object-cover rounded-lg border border-gray-200 dark:border-gray-600"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setPreviewImages(prev =>
                                prev.filter((_, idx) => idx !== i),
                              );
                              if (i < existingImages.length) {
                                setExistingImages(prev =>
                                  prev.filter((_, idx) => idx !== i),
                                );
                              } else {
                                const newIndex = i - existingImages.length;
                                setImageFiles(prev =>
                                  prev.filter((_, idx) => idx !== newIndex),
                                );
                              }
                            }}
                            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Detailed project description..."
                    value={form.description}
                    onChange={e =>
                      setForm({ ...form, description: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                    required
                  />
                </div>

                {/* Form Actions */}
                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 bg-[#FF6B35] hover:bg-[#ff8c5a] text-white rounded-lg transition disabled:opacity-50"
                  >
                    {loading && <Loader2 size={16} className="animate-spin" />}
                    <Save size={16} />
                    {loading
                      ? 'Saving...'
                      : editId
                        ? 'Update Project'
                        : 'Save Project'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* View Project Modal */}

        {viewProject && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setViewProject(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 w-full max-w-4xl rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* HEADER with Image Banner */}
              {viewProject.images[0] && (
                <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={viewProject.images[0]}
                    alt={viewProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Close Button */}
                  <button
                    onClick={() => setViewProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 backdrop-blur-sm"
                  >
                    <X size={20} />
                  </button>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {viewProject.title}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex px-2 py-1 bg-orange-500 text-white rounded-lg text-xs font-medium">
                        {viewProject.category}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {!viewProject.images[0] && (
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Project Details
                  </h2>
                  <button
                    onClick={() => setViewProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}

              {viewLoading ? (
                <div className="flex justify-center py-20">
                  <Loader2 className="animate-spin text-[#FF6B35]" size={40} />
                </div>
              ) : (
                <div className="p-6">
                  {/* ALL IMAGES GALLERY */}
                  {viewProject.images.length > 1 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                        Project Gallery
                      </h3>
                      <div className="flex gap-3 flex-wrap">
                        {viewProject.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`Project image ${i + 1}`}
                            className="w-20 h-20 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 transition-all duration-300 cursor-pointer"
                            onClick={() => window.open(img, '_blank')}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* DESCRIPTION */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                      Description
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {viewProject.description}
                    </p>
                  </div>

                  {/* DETAILS GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Price
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        ${viewProject.price}
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Duration
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        {viewProject.duration}
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Category
                      </p>
                      <p className="text-base font-medium text-gray-900 dark:text-white">
                        {viewProject.category}
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Rating
                      </p>
                      <div className="flex items-center gap-1">
                        <span className="text-base font-bold text-gray-900 dark:text-white">
                          {viewProject.rating || 4.5}
                        </span>
                        <span className="text-yellow-500">★</span>
                        <span className="text-xs text-gray-500">/ 5</span>
                      </div>
                    </div>
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {viewProject.technologies.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* VIDEO (optional) */}
                  {viewProject.videoUrl && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3">
                        Project Demo
                      </h3>
                      <iframe
                        src={viewProject.videoUrl.replace(
                          'https://youtu.be/',
                          'https://www.youtube.com/embed/',
                        )}
                        className="w-full h-[400px] rounded-lg"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {/* ACTION BUTTONS */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => {
                        setViewProject(null);
                        openEdit(viewProject);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300"
                    >
                      <Edit size={16} />
                      Edit Project
                    </button>
                    <button
                      onClick={() => {
                        setViewProject(null);
                        setDeleteId(viewProject._id!);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300"
                    >
                      <Trash2 size={16} />
                      Delete Project
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
