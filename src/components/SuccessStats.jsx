import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import CountUp from './CountUp'

export default function SuccessStats() {
  const { ref, inView } = useInView()

  const stats = [
    { value: 5000, suffix: '+', label: 'Successful Mentees' },
    { value: 95, suffix: '%', label: 'Success Rate' },
    { value: 50, suffix: 'k+', label: 'Monthly Users' },
    { value: 500, suffix: '+', label: 'Expert Mentors' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="section-padding bg-gradient-to-r from-secondary/5 to-accent/5">
      <div className="section-max-width">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white rounded-2xl card-shadow"
            >
              <div className="heading-2 gradient-text mb-2">
                {inView && <CountUp end={stat.value} />}
                {stat.suffix}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
