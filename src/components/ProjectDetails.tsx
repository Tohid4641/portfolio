import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTags, FaCode, FaChevronLeft, FaChevronRight, FaProjectDiagram } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type SubProject = {
  name: string;
  description: string;
  link: string;
};

export type ProjectDetail = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  achievement: string;
  challenges: string[];
  solutions: string[];
  images: string[];
  githubUrl: string;
  liveUrl?: string;
  company?: string;
  role?: string;
  duration?: string;
  subProjects?: SubProject[];
};

interface ProjectDetailsProps {
  project: ProjectDetail;
  onClose: () => void;
}

const ProjectDetails = ({ project, onClose }: ProjectDetailsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors z-50"
          >
            <IoMdClose size={24} />
          </button>

          {/* Project image carousel */}
          <div className="w-full aspect-video relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                prevEl: '.detail-prev',
                nextEl: '.detail-next',
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              className="h-full group"
            >
              {project.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <button
              className="detail-prev absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity z-20"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              className="detail-next absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity z-20"
            >
              <FaChevronRight size={20} />
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h1 className="text-3xl font-bold text-white mb-2">{project.title}</h1>
              {project.company && (
                <p className="text-gray-200">{project.company}</p>
              )}
            </div>
          </div>

          <div className="p-6">
            {/* Project metadata */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                {project.role && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Role</h3>
                    <p className="text-gray-900 dark:text-white">{project.role}</p>
                  </div>
                )}
                {/* {project.duration && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Duration</h3>
                    <p className="text-gray-900 dark:text-white">{project.duration}</p>
                  </div>
                )} */}
              </div>
              <div className="flex gap-4 p-12">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  <FaGithub size={20} />
                  GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Project description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About the Project</h2>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{project.longDescription}</p>
            </div>

            {/* Tech stack */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
                <FaCode />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key features */}
            <div className="mb-8">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
                <FaTags />
                Key Contributions
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Key Projects */}
            {project.subProjects && project.subProjects.length > 0 && (
              <div className="mb-8">
                <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
                  <FaProjectDiagram />
                  Key Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.subProjects.map((subProject, index) => (
                    <motion.a
                      key={index}
                      href={subProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                        {subProject.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {subProject.description}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges and Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Challenges</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Solutions</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;