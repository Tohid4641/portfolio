import { motion } from 'framer-motion';
import { FaCalendarAlt, FaBriefcase } from 'react-icons/fa';

type Experience = {
  company: string;
  roles: {
    title: string;
    period: string;
    highlights: string[];
  }[];
};

const experiences: Experience[] = [
  {
    company: 'Redbytes Software',
    roles: [
      {
        title: 'Node.js Backend Developer',
        period: 'Nov 2022 - Sep 2024',
        highlights: [
          'Developed and maintained scalable backend services using Node.js and Express',
          'Created cost estimation tools using Function Point Analysis (FPA), improving software cost accuracy by 25%',
          'Developed RESTful APIs for Transport Management Systems, including subscription pricing calculators used by 500+ clients',
          'Optimized database queries resulting in 40% improved performance',
          'Optimized CI/CD pipelines using GitHub Actions and Docker, reducing deployment time by 20% for an enterprise-level Animal Tracking SaaS platform serving 10k+ users.',
          'Delivered 10+ scalable projects for clients and internal stakeholders, ensuring 99.9% uptime and optimal performance'
        ]
      }
    ]
  },
  {
    company: 'Tekisky Pvt. Ltd',
    roles: [
      {
        title: 'MERN Full Stack Developer',
        period: 'Nov 2021 - Nov 2022',
        highlights: [
          'Developed full-stack web applications using MERN stack',
          'Implemented responsive designs and improved user experience',
          'Collaborated with cross-functional teams to deliver high-quality solutions',
          'Mentored junior developers in modern web technologies'
        ]
      },
      {
        title: 'Software Engineering Trainee',
        period: 'Jul 2021 - Nov 2021',
        highlights: [
          'Learned and implemented MERN stack development practices',
          'Participated in team projects and code reviews',
          'Assisted in developing and maintaining web applications'
        ]
      }
    ]
  }
];

const Experience = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">My professional journey</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line with gradient */}
        <div className="absolute left-10 md:left-[48.5%] top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500" />

        {experiences.map((exp) => (
          <div key={exp.company} className="mb-12 last:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            >
              {/* Company name with adjusted spacing */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="md:text-right md:pr-16 pl-16 col-span-1"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.company}
                </h3>
              </motion.div>
              <div className="col-span-1" />
            </motion.div>

            {exp.roles.map((role, roleIndex) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: roleIndex * 0.2 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 last:mb-0"
              >
                <div className="md:text-right md:pr-16 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-auto md:right-0 top-3 transform translate-x-0 md:translate-x-[9px] -translate-y-1/2">
                    <div className="relative">
                      {/* Outer ring */}
                      <div className="w-4 h-4 bg-white dark:bg-gray-900 rounded-full border-2 border-blue-500 dark:border-blue-400" />
                      {/* Inner dot */}
                      <div className="absolute inset-0 m-1 bg-blue-500 dark:bg-blue-400 rounded-full" />
                    </div>
                  </div>
                  
                  <div className="pl-16 md:pl-0">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {role.title}
                    </h4>
                    <div className="flex items-center md:justify-end gap-2 text-gray-600 dark:text-gray-400 mb-4">
                      <FaCalendarAlt className="flex-shrink-0" />
                      <span>{role.period}</span>
                    </div>
                  </div>
                </div>

                <div className="pl-16 md:pl-16">
                  <ul className="space-y-3">
                    {role.highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <FaBriefcase className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;