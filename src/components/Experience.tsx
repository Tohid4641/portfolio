import { motion } from 'framer-motion';
import { FaCalendarAlt, FaBriefcase, FaMapMarkerAlt, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';

type Experience = {
  company: string;
  companyUrl: string;
  location: string;
  tenure: string;
  roles: {
    title: string;
    period: string;
    highlights: string[];
  }[];
};

const experiences: Experience[] = [
  {
    company: 'Tekisky Pvt. Ltd',
    companyUrl: 'https://tekisky.com',
    location: 'Nanded, Maharashtra · On-site',
    tenure: 'Sept 2024 – Present',
    roles: [
      {
        title: 'Full Stack Developer',
        period: 'Sept 2024 – Present',
        highlights: [
          'Developed 3 production-grade MERN stack applications, streamlining business and content management processes by ~40%.',
          'Designed MongoDB schemas and admin dashboards, improving query performance by ~30%.',
          'Managed end-to-end deployment (Vercel and backend hosting), ensuring 99%+ uptime.',
        ]
      }
    ]
  },
  {
    company: 'Redbytes Software',
    companyUrl: 'https://redbytes.in',
    location: 'Aurangabad, Maharashtra · On-site',
    tenure: 'Nov 2022 – Sep 2024 · 1 yr 10 mos',
    roles: [
      {
        title: 'Node.js Backend Developer',
        period: 'Nov 2022 – Sep 2024',
        highlights: [
          'Developed and maintained scalable backend services using Node.js and Express.',
          'Created cost estimation tools using Function Point Analysis (FPA), improving software cost accuracy by 25%.',
          'Developed RESTful APIs for Transport Management Systems, including subscription pricing calculators used by 500+ clients.',
          'Optimized database queries resulting in 40% improved performance.',
          'Optimized CI/CD pipelines using GitHub Actions and Docker, reducing deployment time by 20% for an enterprise Animal Tracking SaaS serving 10k+ users.',
          'Delivered 10+ scalable projects ensuring 99.9% uptime and optimal performance.',
        ]
      }
    ]
  },
  {
    company: 'Tekisky Pvt. Ltd',
    companyUrl: 'https://tekisky.com',
    location: 'Nanded, Maharashtra · On-site',
    tenure: 'Jul 2021 – Nov 2022 · 1 yr 5 mos',
    roles: [
      {
        title: 'MERN Full Stack Developer',
        period: 'Nov 2021 – Nov 2022',
        highlights: [
          'Built responsive web applications with admin panel, supporting 1k+ monthly users.',
          'Integrated CRUD APIs with 3+ mobile apps, enabling real-time data sync for 50k+ monthly active users.',
          'Collaborated with cross-functional teams to enhance user experience and deliver production-ready features.',
        ]
      },
      {
        title: 'Software Engineering Trainee',
        period: 'Jul 2021 – Nov 2021',
        highlights: [
          'Learned and implemented MERN stack development practices.',
          'Participated in team projects and code reviews.',
          'Assisted in developing and maintaining web applications.',
        ]
      },
    ]
  }
];

const education = [
  {
    degree: 'Diploma in Python Web Development',
    institution: 'FirstBit Solutions — Pune',
    period: 'Feb 2021 – Jul 2021',
    duration: '6 months · 300 hrs intensive',
    highlights: [
      'Completed 300-hour intensive training covering Python, Django, HTML, CSS, JavaScript, DBMS, and MySQL.',
    ],
  },
  {
    degree: 'Bachelor of Technology',
    institution: 'Dr. Babasaheb Ambedkar Technological University',
    period: '2017 - 2021',
    duration: '4 years',
    highlights: [
      // 'Bachelor of Technology in Electronics and Telecommunication',
      // 'CGPA: 6.5'
    ],
  },
];

const Experience = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">My professional journey</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative pl-6 border-l-2 border-gradient-to-b border-gray-200 dark:border-gray-700 space-y-10">

        {experiences.map((exp, expIndex) => (
          <motion.div
            key={exp.company + exp.tenure}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: expIndex * 0.1 }}
            className="relative"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 shadow" />

            {/* Company Card */}
            <div className="bg-white dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm overflow-hidden">

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 px-6 pt-5 pb-4 border-b border-gray-100 dark:border-gray-700/50">
                <div>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    {exp.company}
                    <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <FaMapMarkerAlt className="flex-shrink-0 text-blue-500 text-xs" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/40 px-3 py-1.5 rounded-full whitespace-nowrap self-start sm:self-auto">
                  <FaCalendarAlt className="text-[10px]" />
                  {exp.tenure}
                </span>
              </div>

              {/* Roles */}
              <div className="divide-y divide-gray-100 dark:divide-gray-700/40">
                {exp.roles.map((role, roleIndex) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: roleIndex * 0.15 }}
                    className="px-6 py-4"
                  >
                    {/* Role header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <FaBriefcase className="text-blue-500 text-xs flex-shrink-0" />
                        {role.title}
                      </h4>
                      {/* Only show role period if there are multiple roles (avoids duplicate with tenure) */}
                      {exp.roles.length > 1 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <FaCalendarAlt className="text-[10px]" />
                          {role.period}
                        </span>
                      )}
                    </div>

                    {/* Highlights */}
                    {role.highlights.length > 0 && (
                      <ul className="space-y-2 ml-5">
                        {role.highlights.map((highlight, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-blue-500 mt-1 text-xs flex-shrink-0">▸</span>
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Education Section ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold gradient-text">Education</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Academic & training background</p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 max-w-2xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 bg-white dark:bg-gray-800/60 rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:border-blue-500/40 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{edu.degree}</h4>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-0.5">{edu.institution}</p>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs mt-1">
                  <FaCalendarAlt />
                  <span>{edu.period}</span>
                  <span className="text-gray-300 dark:text-gray-600">·</span>
                  <span>{edu.duration}</span>
                </div>
                {edu.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {edu.highlights.map((h, hi) => (
                      <li key={hi} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">▸</span> {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;

