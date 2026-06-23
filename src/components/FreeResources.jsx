import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaDownload } from 'react-icons/fa'
import { BookOpen, Play } from 'lucide-react'

export default function FreeResources() {
  const { ref, inView } = useInView()

  const resources = [
    {
      icon: BookOpen,
      title: 'NEET Biology Notes',
      description: 'Complete chapter-wise notes covering all important topics from NCERT',
      type: 'PDF Guide',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Play,
      title: 'Physics Formula Sheet',
      description: 'All essential formulas and derivations for quick revision',
      type: 'Video Guide',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'Chemistry Quick Revision',
      description: 'Quick reference guide for important reactions and concepts',
      type: 'PDF Guide',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Play,
      title: 'NEET/JEE Mock Test PDF',
      description: 'Full-length mock tests with solutions to practice under exam conditions',
      type: 'Test Paper',
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="section-padding bg-light">
      <div className="section-max-width">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Free <span className="gradient-text">Study Resources</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Get access to premium study materials instantly. No credit card required.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {resources.map((resource) => {
            const Icon = resource.icon
            return (
              <motion.div
                key={resource.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden card-shadow hover-lift"
              >
                {/* Color Bar */}
                <div className={`h-1 bg-gradient-to-r ${resource.color}`}></div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center text-white mb-4`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-secondary">
                      {resource.type}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      className="text-secondary hover:text-secondary/80"
                    >
                      <FaDownload size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-secondary to-accent rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="heading-3 mb-4">Get Weekly Career Tips</h3>
          <p className="mb-6 text-white/90">
            Join 50,000+ professionals receiving exclusive insights and opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-yellow-300 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
