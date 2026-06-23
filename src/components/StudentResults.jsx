import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaStar } from 'react-icons/fa'

export default function StudentResults() {
  const { ref, inView } = useInView()

  const results = [
    {
      name: 'Ayan Kumar',
      role: 'NEET 2025 Aspirant',
      company: 'AIIMS Patna',
      salary: '520 Marks → 680 Marks',
      image: '👨‍⚕️',
      rating: 5,
    },
    {
      name: 'Priya Singh',
      role: 'JEE Advanced Ranker',
      company: 'IIT Delhi',
      salary: 'AIR 5000 → AIR 1450',
      image: '👩‍💻',
      rating: 5,
    },
    {
      name: 'Rohan Gupta',
      role: 'NEET Qualified',
      company: 'AFMC Pune',
      salary: '580 Marks → 690 Marks',
      image: '👨‍⚕️',
      rating: 5,
    },
    {
      name: 'Neha Sharma',
      role: 'JEE Mains Topper',
      company: 'NIT Delhi',
      salary: 'AIR 800 → AIR 350',
      image: '👩‍💻',
      rating: 5,
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
    <section id="results" className="section-padding">
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
            Our <span className="gradient-text">Top Rankers</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Real results from real students. See how our coaching transformed their scores and got them into their dream colleges.
          </p>
        </motion.div>

        {/* Results Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {results.map((result) => (
            <motion.div
              key={result.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 card-shadow hover-lift"
            >
              {/* Avatar */}
              <div className="text-6xl mb-4 text-center">{result.image}</div>

              {/* Name & Role */}
              <h3 className="font-bold text-lg mb-1">{result.name}</h3>
              <p className="text-secondary font-medium text-sm mb-2">{result.role}</p>

              {/* Company */}
              <div className="bg-secondary/10 rounded-lg px-3 py-2 mb-4">
                <p className="text-sm font-semibold text-secondary text-center">{result.company}</p>
              </div>

              {/* Salary */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-r from-secondary to-accent text-white rounded-lg px-3 py-2 mb-4 text-center"
              >
                <p className="text-xs font-medium">Salary Growth</p>
                <p className="font-bold text-lg">{result.salary}</p>
              </motion.div>

              {/* Rating */}
              <div className="flex justify-center gap-1">
                {[...Array(result.rating)].map((_, i) => (
                  <FaStar key={`${result.name}-star-${i}`} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
