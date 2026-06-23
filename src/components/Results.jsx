import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaStar } from 'react-icons/fa'

export default function Results() {
  const { ref, inView } = useInView()

  const topRankers = [
    {
      rank: 1,
      name: 'Ayan Kumar',
      exam: 'NEET 2025',
      score: 680,
      college: 'AIIMS Delhi',
      image: '👨‍⚕️',
      improvement: '520 → 680',
    },
    {
      rank: 2,
      name: 'Priya Singh',
      exam: 'JEE Advanced',
      score: 'AIR 145',
      college: 'IIT Delhi',
      image: '👩‍💻',
      improvement: 'AIR 5000 → AIR 145',
    },
    {
      rank: 3,
      name: 'Rohan Gupta',
      exam: 'NEET 2025',
      score: 660,
      college: 'AFMC Pune',
      image: '👨‍⚕️',
      improvement: '580 → 660',
    },
    {
      rank: 4,
      name: 'Neha Sharma',
      exam: 'JEE Mains',
      score: 'AIR 350',
      college: 'NIT Delhi',
      image: '👩‍💻',
      improvement: 'AIR 800 → AIR 350',
    },
  ]

  const testimonials = [
    {
      name: 'Ayan Kumar',
      college: 'AIIMS Delhi',
      text: 'The structured approach and daily practice tests were game-changers. I improved from 520 to 680 in just 3 months!',
      rating: 5,
      image: '👨‍⚕️',
    },
    {
      name: 'Priya Singh',
      college: 'IIT Delhi',
      text: 'Mentoring sessions helped me understand concepts deeply. From AIR 5000 to AIR 145 - couldn\'t have done it without NEET ACE!',
      rating: 5,
      image: '👩‍💻',
    },
    {
      name: 'Rohan Gupta',
      college: 'AFMC Pune',
      text: 'The doubt-solving support was incredible. Every concept became clear through personalized sessions.',
      rating: 5,
      image: '👨‍⚕️',
    },
  ]

  const improvements = [
    { label: 'Students Improved Score', value: '9,847', icon: '📈' },
    { label: 'Avg Score Increase', value: '+145', icon: '🎯' },
    { label: 'College Admissions', value: '8,562', icon: '🏆' },
    { label: 'Success Rate', value: '95%', icon: '⭐' },
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
            Success <span className="gradient-text">Stories</span>
          </h1>
          <p className="body-text max-w-2xl mx-auto">
            See how our students achieved their dreams with structured coaching and mentorship.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {improvements.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 text-center card-shadow"
            >
              <p className="text-4xl mb-3">{stat.icon}</p>
              <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Top Rankers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <h2 className="heading-3 mb-8 text-center">Top Rankers</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {topRankers.map((ranker) => (
              <motion.div
                key={ranker.rank}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden card-shadow hover-lift"
              >
                {/* Rank Badge */}
                <div className={`h-16 bg-gradient-to-r ${
                  ranker.rank === 1 ? 'from-yellow-400 to-yellow-500' :
                  ranker.rank === 2 ? 'from-gray-400 to-gray-500' :
                  ranker.rank === 3 ? 'from-orange-400 to-orange-500' :
                  'from-secondary to-accent'
                } flex items-center justify-center text-white text-2xl font-bold`}>
                  #{ranker.rank}
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-4xl text-center mb-4">{ranker.image}</p>
                  <h3 className="font-bold text-lg text-center mb-1">{ranker.name}</h3>
                  <p className="text-secondary font-bold text-center text-sm mb-2">{ranker.exam}</p>
                  <p className="text-center text-2xl font-bold gradient-text mb-2">{ranker.score}</p>
                  <p className="text-center text-xs text-gray-600 mb-4">{ranker.college}</p>
                  <p className="text-center text-xs bg-green-100 text-green-700 py-2 rounded-lg font-bold">
                    {ranker.improvement}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="heading-3 mb-8 text-center">Student Reviews</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 card-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

                <div className="flex items-center gap-4">
                  <p className="text-4xl">{testimonial.image}</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-secondary">{testimonial.college}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
