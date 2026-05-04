import type { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaAws, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiGraphql, SiMongodb, SiPostgresql, SiRedis, SiSwagger, SiJest, SiJenkins, SiMysql, SiBootstrap } from 'react-icons/si';
import { VscGithubAction } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';

type Skill = {
  name: string;
  icon: ReactElement;
  category: 'Frontend' | 'Backend' | 'DevOps & Cloud' | 'Databases' | 'Tools & Testing';
};

const skills: Skill[] = [
  // 🧠 Backend
  { name: 'Node.js', icon: <FaNode className="text-[#339933] text-2xl" />, category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress className="text-2xl" />, category: 'Backend' },
  { name: 'RESTful APIs', icon: <TbApi className="text-[#00B8D9] text-2xl" />, category: 'Backend' },
  // { name: 'GraphQL', icon: <SiGraphql className="text-[#E535AB] text-2xl" />, category: 'Backend' },
  { name: 'JWT / OAuth', icon: <MdSecurity className="text-[#F4B400] text-2xl" />, category: 'Backend' },
  { name: 'Socket.io', icon: <MdSecurity className="text-[#8E44AD] text-2xl" />, category: 'Backend' },
  // 🗄️ Databases
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248] text-2xl" />, category: 'Databases' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791] text-2xl" />, category: 'Databases' },
  { name: 'MySQL', icon: <SiMysql className="text-[#00758F] text-2xl" />, category: 'Databases' },
  { name: 'Redis', icon: <SiRedis className="text-[#DC382D] text-2xl" />, category: 'Databases' },
  // ☁️ DevOps & Cloud
  { name: 'AWS (EC2 / S3)', icon: <FaAws className="text-[#FF9900] text-2xl" />, category: 'DevOps & Cloud' },
  { name: 'Docker', icon: <FaDocker className="text-[#2496ED] text-2xl" />, category: 'DevOps & Cloud' },
  { name: 'GitHub Actions', icon: <VscGithubAction className="text-2xl" />, category: 'DevOps & Cloud' },
  { name: 'Jenkins', icon: <SiJenkins className="text-[#D33833] text-2xl" />, category: 'DevOps & Cloud' },
  // 🧰 Tools & Testing
  { name: 'Postman', icon: <TbApi className="text-[#FF6C37] text-2xl" />, category: 'Tools & Testing' },
  { name: 'Swagger', icon: <SiSwagger className="text-[#85EA2D] text-2xl" />, category: 'Tools & Testing' },
  { name: 'Jest', icon: <SiJest className="text-[#C21325] text-2xl" />, category: 'Tools & Testing' },
  { name: 'VS Code', icon: <FaReact className="text-[#007ACC] text-2xl" />, category: 'Tools & Testing' },
  // 🎨 Frontend (Support)
  { name: 'React.js', icon: <FaReact className="text-[#61DAFB] text-3xl" />, category: 'Frontend' },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6] text-2xl" />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4] text-2xl" />, category: 'Frontend' },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-[#06B6D4] text-2xl" />, category: 'Frontend' },
];

const Skills = () => {
  const categories = ['Frontend', 'Backend', 'DevOps & Cloud', 'Databases', 'Tools & Testing'] as const;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Technologies I work with daily</p>
      </motion.div>

      <div className="flex overflow-x-auto space-x-6 pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:bg-gray-900">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="flex-shrink-0 w-64"
          >
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors h-80 flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                {category}
              </h3>
              <div className="overflow-y-scroll [&::-webkit-scrollbar]:hidden flex-1">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all mb-2"
                    >
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
