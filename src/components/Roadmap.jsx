import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Roadmap() {
  const { ref, inView } = useInView()

  const roadmapSteps = [
    {
      week: 'Week 1-2',
      title: 'Assessment & Study Planning',
      description: 'We evaluate your current level, identify weak topics, and create a personalized study plan.',
      icon: '🎯',
    },
    {
      week: 'Week 3-6',
      title: 'Concept Building',
      description: 'Deep-dive into core concepts with expert-led sessions and comprehensive study materials.',
      icon: '📚',
    },
    {
      week: 'Week 7-10',
      title: 'Advanced Practice',
      description: 'Solve challenging problems, attempt full-length mock tests, and improve question accuracy.',
      icon: '🛠️',
    },
    {
      week: 'Week 11-12',
      title: 'Mock Tests & Exam Strategy',
      description: 'Practice under real exam conditions and master time management and question selection strategy.',
      icon: '💼',
    },
  ]

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
            Your 90-Day <span className="gradient-text">NEET/JEE Roadmap</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            A structured journey designed to transform your preparation and help you achieve your best possible score.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary to-accent opacity-20"></div>

          {/* Steps */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="space-y-12"
          >
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.week}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6 },
                  },
                }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:[grid-auto-flow:dense]' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`bg-white rounded-2xl p-8 card-shadow ${
                    index % 2 === 1 ? 'md:order-last' : ''
                  }`}
                >
                  <span className="text-secondary font-bold text-sm">{step.week}</span>
                  <h3 className="heading-3 mt-2 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Icon */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className="flex justify-center md:justify-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-4xl relative z-10">
                    {step.icon}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
