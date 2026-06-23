import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaDownload, FaBook } from 'react-icons/fa'

export default function Notes() {
  const { ref, inView } = useInView()

  const notes = [
    {
      subject: 'Biology',
      color: 'from-green-500 to-emerald-500',
      chapters: [
        { name: 'Cell Biology', pages: 45, downloads: 2341 },
        { name: 'Genetics', pages: 52, downloads: 2156 },
        { name: 'Ecology', pages: 38, downloads: 1892 },
        { name: 'Evolution', pages: 35, downloads: 1654 },
        { name: 'Human Body Systems', pages: 68, downloads: 3421 },
        { name: 'Plant Physiology', pages: 42, downloads: 1823 },
      ],
    },
    {
      subject: 'Physics',
      color: 'from-blue-500 to-cyan-500',
      chapters: [
        { name: 'Mechanics', pages: 56, downloads: 3214 },
        { name: 'Electromagnetism', pages: 64, downloads: 2987 },
        { name: 'Optics', pages: 48, downloads: 2341 },
        { name: 'Waves & Sound', pages: 44, downloads: 1923 },
        { name: 'Modern Physics', pages: 52, downloads: 2654 },
        { name: 'Thermodynamics', pages: 38, downloads: 1745 },
      ],
    },
    {
      subject: 'Chemistry',
      color: 'from-purple-500 to-pink-500',
      chapters: [
        { name: 'Organic Chemistry', pages: 78, downloads: 3892 },
        { name: 'Inorganic Chemistry', pages: 65, downloads: 3124 },
        { name: 'Physical Chemistry', pages: 72, downloads: 3456 },
        { name: 'Redox Reactions', pages: 42, downloads: 2341 },
        { name: 'Chemical Bonding', pages: 48, downloads: 2654 },
        { name: 'Periodic Table', pages: 35, downloads: 1923 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="pt-32 pb-12 bg-white min-h-screen">
      <div className="section-max-width">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="heading-2 mb-4">
            Study <span className="gradient-text">Notes</span>
          </h1>
          <p className="body-text max-w-2xl mx-auto">
            Download comprehensive study notes for all subjects prepared by expert educators.
          </p>
        </motion.div>

        {/* Notes by Subject */}
        <motion.div
          className="space-y-16"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {notes.map((subject, sidx) => (
            <motion.div key={sidx} variants={itemVariants}>
              {/* Subject Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center text-white text-xl`}>
                  <FaBook />
                </div>
                <h2 className="heading-3">{subject.subject}</h2>
              </div>

              {/* Chapters Grid */}
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {subject.chapters.map((chapter, cidx) => (
                  <motion.div
                    key={cidx}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-light rounded-2xl p-6 card-shadow hover-lift"
                  >
                    {/* Color Bar */}
                    <div className={`h-1 bg-gradient-to-r ${subject.color} mb-4 rounded`}></div>

                    {/* Chapter Info */}
                    <h3 className="font-bold text-lg mb-3">{chapter.name}</h3>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-sm text-gray-600">{chapter.pages} pages</p>
                        <p className="text-xs text-gray-500">{chapter.downloads.toLocaleString()} downloads</p>
                      </div>
                    </div>

                    {/* Download Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-2 rounded-lg font-bold text-white bg-gradient-to-r ${subject.color} hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                    >
                      <FaDownload size={14} />
                      Download PDF
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            { title: 'Formula Sheets', desc: 'All important formulas', icon: '📐' },
            { title: 'Quick Revision', desc: 'Concept summaries', icon: '⚡' },
            { name: 'Question Bank', desc: 'Practice problems', icon: '📝' },
          ].map((resource, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 text-center"
            >
              <p className="text-4xl mb-4">{resource.icon}</p>
              <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{resource.desc}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2 bg-secondary text-white rounded-lg font-bold text-sm"
              >
                Access Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
