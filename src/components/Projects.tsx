import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectDetails from './ProjectDetails';
import projects from '../data/projects.ts';
import type { ProjectDetail } from '../types/ProjectTypes.ts';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [expandedTechStacks, setExpandedTechStacks] = useState<Record<string, boolean>>({});

  const toggleTechStack = (projectId: string) => {
    setExpandedTechStacks(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <>
      <div className="pt-8 pb-8 w-full max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">Showcasing my recent work and achievements</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={{
                    prevEl: `.prev-${project.id}`,
                    nextEl: `.next-${project.id}`,
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  loop={true}
                  className="h-full group"
                >
                  {project.images.map((image, imageIndex) => (
                    <SwiperSlide key={imageIndex}>
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/80 transition-colors z-10" />
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${imageIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Navigation buttons */}
                <button
                  className={`prev-${project.id} absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity z-20`}
                >
                  <FaChevronLeft size={16} />
                </button>
                <button
                  className={`next-${project.id} absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity z-20`}
                >
                  <FaChevronRight size={16} />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  {project.company && (
                    <p className="text-sm text-gray-200">{project.company}</p>
                  )}
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-4">
                  <AnimatePresence initial={false}>
                    <div className="flex flex-wrap gap-1">
                      {(expandedTechStacks[project.id] ? project.techStack : project.techStack.slice(0, 3)).map((tech) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {!expandedTechStacks[project.id] && project.techStack.length > 3 && (
                        <motion.button
                          onClick={() => toggleTechStack(project.id)}
                          className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                        >
                          +{project.techStack.length - 3} more
                        </motion.button>
                      )}
                      {expandedTechStacks[project.id] && (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          onClick={() => toggleTechStack(project.id)}
                          className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                        >
                          Show less
                        </motion.button>
                      )}
                    </div>
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    View Details
                    <FaArrowRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;