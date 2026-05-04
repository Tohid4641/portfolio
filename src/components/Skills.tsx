import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaReact, FaNode, FaAws, FaDocker, FaBrain, FaRobot } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiRedis, SiSwagger, SiJest, SiJenkins, SiMysql, SiBootstrap, SiOpenai } from 'react-icons/si';
import { VscGithubAction } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';

type Category = 'All' | 'Backend' | 'Frontend' | 'DevOps & Cloud' | 'Databases' | 'Tools & Testing' | 'AI & Tools';

type Skill = {
  name: string;
  icon: ReactElement;
  category: Exclude<Category, 'All'>;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate';
};

const proficiencyConfig = {
  Expert: { color: 'from-blue-500 to-cyan-400', badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300', bars: 3 },
  Advanced: { color: 'from-purple-500 to-violet-400', badge: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300', bars: 2 },
  Intermediate: { color: 'from-gray-400 to-slate-400', badge: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300', bars: 1 },
};

const skills: Skill[] = [
  // 🧠 Backend
  { name: 'Node.js', icon: <FaNode className="text-[#339933]" />, category: 'Backend', proficiency: 'Expert' },
  { name: 'Express.js', icon: <SiExpress />, category: 'Backend', proficiency: 'Expert' },
  { name: 'RESTful APIs', icon: <TbApi className="text-[#00B8D9]" />, category: 'Backend', proficiency: 'Expert' },
  { name: 'JWT / OAuth', icon: <MdSecurity className="text-[#F4B400]" />, category: 'Backend', proficiency: 'Advanced' },
  { name: 'Socket.io', icon: <MdSecurity className="text-[#8E44AD]" />, category: 'Backend', proficiency: 'Intermediate' },
  // 🗄️ Databases
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, category: 'Databases', proficiency: 'Expert' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" />, category: 'Databases', proficiency: 'Advanced' },
  { name: 'MySQL', icon: <SiMysql className="text-[#00758F]" />, category: 'Databases', proficiency: 'Advanced' },
  { name: 'Redis', icon: <SiRedis className="text-[#DC382D]" />, category: 'Databases', proficiency: 'Intermediate' },
  // ☁️ DevOps & Cloud
  { name: 'AWS (EC2/S3)', icon: <FaAws className="text-[#FF9900]" />, category: 'DevOps & Cloud', proficiency: 'Advanced' },
  { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" />, category: 'DevOps & Cloud', proficiency: 'Intermediate' },
  { name: 'GitHub Actions', icon: <VscGithubAction />, category: 'DevOps & Cloud', proficiency: 'Advanced' },
  { name: 'Jenkins', icon: <SiJenkins className="text-[#D33833]" />, category: 'DevOps & Cloud', proficiency: 'Intermediate' },
  // 🧰 Tools & Testing
  { name: 'Postman', icon: <TbApi className="text-[#FF6C37]" />, category: 'Tools & Testing', proficiency: 'Expert' },
  { name: 'Swagger', icon: <SiSwagger className="text-[#85EA2D]" />, category: 'Tools & Testing', proficiency: 'Advanced' },
  { name: 'Jest', icon: <SiJest className="text-[#C21325]" />, category: 'Tools & Testing', proficiency: 'Intermediate' },
  // 🎨 Frontend
  { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" />, category: 'Frontend', proficiency: 'Expert' },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, category: 'Frontend', proficiency: 'Advanced' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, category: 'Frontend', proficiency: 'Advanced' },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" />, category: 'Frontend', proficiency: 'Intermediate' },
  // 🤖 AI & Tools
  // { name: 'OpenAI API', icon: <SiOpenai className="text-[#412991]" />, category: 'AI & Tools', proficiency: 'Advanced' },
  { name: 'ChatGPT', icon: <FaRobot className="text-[#412991]" />, category: 'AI & Tools', proficiency: 'Expert' },
  // { name: 'GitHub Copilot', icon: <VscGithubAction className="text-[#6e40c9]" />, category: 'AI & Tools', proficiency: 'Expert' },
  { name: 'Cursor AI', icon: <FaRobot className="text-[#00C2FF]" />, category: 'AI & Tools', proficiency: 'Expert' },
  { name: 'Antigravity IDE', icon: <FaRobot className="text-[#00C2FF]" />, category: 'AI & Tools', proficiency: 'Expert' },
  { name: 'Prompt Engineering', icon: <FaBrain className="text-[#F59E0B]" />, category: 'AI & Tools', proficiency: 'Advanced' },
  // { name: 'LangChain', icon: <FaBrain className="text-[#1C3C3C]" />, category: 'AI & Tools', proficiency: 'Intermediate' },
  { name: 'Gemini / Claude', icon: <FaRobot className="text-[#4285F4]" />, category: 'AI & Tools', proficiency: 'Advanced' },
];

const tabs: { label: Category; emoji: string }[] = [
  { label: 'All', emoji: '⚡' },
  { label: 'Backend', emoji: '🔧' },
  { label: 'Frontend', emoji: '🎨' },
  { label: 'DevOps & Cloud', emoji: '☁️' },
  { label: 'Databases', emoji: '🗄️' },
  { label: 'Tools & Testing', emoji: '🧰' },
  { label: 'AI & Tools', emoji: '🤖' },
];

// Individual skill card
const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const cfg = proficiencyConfig[skill.proficiency];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.88, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: -8 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="group bg-white dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm hover:shadow-lg hover:border-blue-400/40 dark:hover:border-blue-500/40 transition-all cursor-default"
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center text-4xl rounded-xl bg-gray-50 dark:bg-gray-700/60 group-hover:scale-110 transition-transform">
        {skill.icon}
      </div>

      {/* Name */}
      <span className="text-sm font-semibold text-gray-800 dark:text-gray-100 text-center leading-tight">
        {skill.name}
      </span>

      {/* Proficiency badge */}
      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide ${cfg.badge}`}>
        {skill.proficiency}
      </span>

      {/* Proficiency bars */}
      <div className="flex gap-1 mt-auto">
        {[1, 2, 3].map(bar => (
          <div
            key={bar}
            className={`h-1 w-5 rounded-full transition-all ${bar <= cfg.bars
              ? `bg-gradient-to-r ${cfg.color}`
              : 'bg-gray-200 dark:bg-gray-600/50'
              }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<Category>('All');

  const filtered = activeTab === 'All'
    ? skills
    : skills.filter(s => s.category === activeTab);

  // Count per tab
  const countFor = (cat: Category) =>
    cat === 'All' ? skills.length : skills.filter(s => s.category === cat).length;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-3 gradient-text">Skills & Technologies</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Technologies I work with daily</p>

        {/* Legend */}
        <div className="flex items-center justify-center gap-5 mt-4">
          {Object.entries(proficiencyConfig).map(([level, cfg]) => (
            <span key={level} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${cfg.color} inline-block`} />
              {level}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {tabs.map(tab => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab.label
              ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md shadow-blue-500/30'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
          >
            <span>{tab.emoji}</span>
            <span>{tab.label}</span>
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-0.5 ${activeTab === tab.label
              ? 'bg-white/20 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
              }`}>
              {countFor(tab.label)}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Skill Grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Summary row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-10 flex flex-wrap justify-center gap-6 text-center"
      >
        {[
          { count: skills.filter(s => s.proficiency === 'Expert').length, label: 'Expert Skills', color: 'text-blue-600 dark:text-blue-400' },
          { count: skills.filter(s => s.proficiency === 'Advanced').length, label: 'Advanced Skills', color: 'text-purple-600 dark:text-purple-400' },
          { count: skills.filter(s => s.proficiency === 'Intermediate').length, label: 'Intermediate Skills', color: 'text-gray-500 dark:text-gray-400' },
        ].map(({ count, label, color }) => (
          <div key={label} className="px-6 py-3 bg-white dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm">
            <div className={`text-2xl font-bold ${color}`}>{count}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
