import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import profileImg from '../assets/images/profile.png';
import myResume from '../assets/pdfs/Tauhid Full Stack Developer.pdf';

const Hero = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [currentCodeLine, setCurrentCodeLine] = useState(0);

  const backendCodeLines = [
    'Scalable Full Stack Dev',
    'Node + MERN | Cloud',
    'Optimized Code, 99.9% Uptime',
    'Cloud-Driven Dev',
    'Fast Deployments, Clean Code',
    'Node.js | AWS | React',
    'APIs, Cloud, Real-Time',
  ];

  useEffect(() => {
    if (currentCodeLine < backendCodeLines.length) {
      const timer = setTimeout(() => {
        setCurrentCodeLine(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else if (currentCodeLine === backendCodeLines.length) {
      const timer = setTimeout(() => {
        setShowProfile(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentCodeLine]);

  const codeSnippets = [
    { text: "npm run build", delay: 0.2, type: 'command' },
    { text: "const app = express();", delay: 0.4, type: 'backend' },
    { text: "useEffect(() => { ... })", delay: 0.6, type: 'frontend' },
    { text: "mongoose.connect(URI);", delay: 0.8, type: 'backend' },
    { text: "<Component props={data} />", delay: 1.0, type: 'frontend' },
    { text: "app.use(cors());", delay: 1.2, type: 'backend' },
    { text: "git push origin main", delay: 1.4, type: 'command' },
    { text: "docker-compose up", delay: 1.6, type: 'command' },
    { text: "const [state, setState] = useState();", delay: 1.8, type: 'frontend' }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5" />
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              x: [-100, 0, 200, 300],
              y: [Math.random() * 100, Math.random() * 200]
            }}
            transition={{
              duration: 10,
              delay: snippet.delay,
              repeat: Infinity,
              repeatDelay: Math.random() * 5
            }}
            className={`absolute left-0 font-mono text-sm whitespace-nowrap ${
              snippet.type === 'frontend' 
                ? 'text-blue-600/20 dark:text-blue-400/20' 
                : snippet.type === 'backend' 
                  ? 'text-purple-600/20 dark:text-purple-400/20'
                  : 'text-gray-600/20 dark:text-gray-400/20'
            }`}
            style={{
              top: `${(index * 10) + Math.random() * 60}%`,
            }}
          >
            {snippet.text}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="container max-w-7xl mx-auto px-8 min-h-screen flex items-center">
        <div className="w-full grid md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 col-span-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                Hi there! 👋
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                I'm a{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Specializing in Node.js & MERN Stack Development
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg mb-8 text-gray-600 dark:text-gray-400"
            >
              Building scalable web applications with modern technologies
            </motion.p>

            <div className="flex gap-6 mb-8">
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:dev.tauhid@gamil.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/shaikh-tauhid-1a9787208/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/Tohid4641"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg shadow-lg transition-colors"
              >
                View Projects
              </motion.a>
              <motion.a
                href={myResume}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg shadow-lg transition-colors"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image with Code Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block relative col-span-1"
          >
            <div className="relative w-[400px] h-[400px] mx-auto">
              {/* Animated circles behind the image */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
              />
              
              {/* Code reveal and profile image container */}
              <AnimatePresence mode="wait">
                {!showProfile ? (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ 
                      opacity: 0,
                      rotateY: 90,
                      transition: { duration: 0.5 }
                    }}
                    className="relative w-full h-full rounded-full bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden border-4 border-blue-500/20"
                  >
                    <div className="absolute inset-0 p-16 font-mono text-sm">
                      {backendCodeLines.slice(0, currentCodeLine).map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.3 }}
                          className="text-green-400 mb-2"
                        >
                          {line}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="profile"
                    initial={{ rotateY: -90 }}
                    animate={{ rotateY: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl w-full h-full"
                    >
                      <img
                        src={profileImg}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;