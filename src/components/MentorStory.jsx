import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaUsers } from 'react-icons/fa'
import { Trophy, Zap } from 'lucide-react'

export default function MentorStory() {
  const { ref, inView } = useInView()

  const highlights = [
    {
      icon: Trophy,
      title: 'Top Faculty Guidance',
      description: 'Learn from expert mentors with 15+ years of NEET & JEE experience',
    },
    {
      icon: FaUsers,
      title: 'Doubt Solving Community',
      description: 'Join a network of 10,000+ aspirants with 24/7 doubt support',
    },
    {
      icon: Zap,
      title: 'Fast Results',
      description: 'See significant score improvement within 90 days of structured learning',
    },
  ]

  return (
    <section id="about" className="section-padding bg-light">
      <div className="section-max-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 gradient-bg rounded-3xl opacity-30"></div>
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl h-96 flex items-center justify-center text-8xl"
            >
              📚
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="heading-2 mb-4">
                Why Choose Our <span className="gradient-text">Coaching?</span>
              </h2>
              <p className="body-text">
                Comprehensive NEET & JEE preparation with mentorship, tests, doubt solving and performance tracking.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-secondary/20 text-secondary">
                        <Icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
