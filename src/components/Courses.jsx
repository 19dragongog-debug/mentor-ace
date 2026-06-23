import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useNavigate } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

export default function Courses() {
  const { ref, inView } = useInView()
  const navigate = useNavigate()

  const courses = [
    {
      id: 1,
      name: 'Foundation',
      price: '₹9,999',
      duration: '3 Months',
      image: '📚',
      features: ['Concept Building', 'Basic Tests', '100+ Videos', 'Email Support'],
      bestFor: 'Beginners',
    },
    {
      id: 2,
      name: 'Advanced',
      price: '₹24,999',
      duration: '6 Months',
      image: '🚀',
      features: ['Advanced Topics', 'Mock Tests', 'Live Sessions', 'Doubt Support', 'Notes'],
      bestFor: 'Intermediate',
    },
    {
      id: 3,
      name: 'Elite',
      price: '₹49,999',
      duration: '12 Months',
      image: '👑',
      features: ['Complete Curriculum', 'Unlimited Tests', '1-on-1 Mentoring', '24/7 Support', 'Strategy Sessions'],
      bestFor: 'Serious Aspirants',
    },
    {
      id: 4,
      name: 'Crash Course',
      price: '₹14,999',
      duration: '6 Weeks',
      image: '⚡',
      features: ['Quick Revision', 'Important Topics', 'Shortcut Methods', 'Last Minute Tips'],
      bestFor: 'Last Minute',
    },
    {
      id: 5,
      name: 'Test Series',
      price: '₹4,999',
      duration: 'Lifetime',
      image: '📝',
      features: ['50+ Mock Tests', 'Chapter Tests', 'PYQs', 'Performance Analytics'],
      bestFor: 'Practice',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="pt-32 pb-12 bg-light min-h-screen">
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
            Our <span className="gradient-text">Courses</span>
          </h1>
          <p className="body-text max-w-2xl mx-auto">
            Choose the perfect course based on your preparation level and goals.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`rounded-3xl p-8 card-shadow hover-lift transition-all ${
                course.id === 2
                  ? 'bg-gradient-to-br from-secondary to-accent text-white'
                  : 'bg-white'
              }`}
            >
              {/* Popular Badge */}
              {course.id === 2 && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block bg-yellow-300 text-black px-4 py-1 rounded-full font-bold text-sm mb-4"
                >
                  Most Popular
                </motion.div>
              )}

              {/* Icon */}
              <div className="text-5xl mb-4">{course.image}</div>

              {/* Course Name */}
              <h3 className="heading-3 mb-2">{course.name}</h3>
              <p className={course.id === 2 ? 'text-white/80' : 'text-gray-600'}>
                {course.bestFor}
              </p>

              {/* Price & Duration */}
              <div className="my-6">
                <div className="heading-2">{course.price}</div>
                <p className={course.id === 2 ? 'text-white/80' : 'text-gray-600'}>
                  {course.duration}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck
                      size={20}
                      className={course.id === 2 ? 'text-yellow-300' : 'text-secondary'}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Enroll Button */}
              <motion.button
                onClick={() => navigate('/checkout')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  course.id === 2
                    ? 'bg-yellow-300 text-black hover:bg-yellow-400'
                    : 'bg-secondary text-white hover:bg-secondary/90'
                }`}
              >
                Enroll Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
