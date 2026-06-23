import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useNavigate } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

export default function Programs() {
  const { ref, inView } = useInView()
  const navigate = useNavigate()

  const programs = [
    {
      name: 'Foundation',
      price: '₹9,999',
      period: '/month',
      description: 'Perfect for beginners',
      features: [
        '4 mentoring sessions/month',
        'Email support',
        'Resource library access',
        'Community access',
      ],
      popular: false,
    },
    {
      name: 'Advanced',
      price: '₹24,999',
      period: '/month',
      description: 'Most popular choice',
      features: [
        '8 mentoring sessions/month',
        'Priority email & chat support',
        'Daily practice tests',
        'Doubt solving sessions',
        'Performance tracking',
        'Resource library access',
        'Community access',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      price: '₹49,999',
      period: '/month',
      description: 'For serious aspirants',
      features: [
        'Unlimited mentoring sessions',
        'Priority support (24/7)',
        'Mock test series',
        'Strategy coaching',
        'Personal progress tracking',
        'Advanced study materials',
        'All Advanced benefits',
      ],
      popular: false,
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
    <section id="programs" className="section-padding">
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
            Choose Your <span className="gradient-text">Preparation Plan</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Flexible coaching plans that scale with your preparation needs. All plans include access to our exclusive study community.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-3xl p-8 transition-all ${
                program.popular
                  ? 'bg-gradient-to-br from-secondary to-accent text-white card-shadow hover-lift'
                  : 'bg-white border-2 border-gray-200 hover-lift'
              }`}
            >
              {/* Popular Badge */}
              {program.popular && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full font-bold text-sm"
                >
                  Most Popular
                </motion.div>
              )}

              {/* Plan Name */}
              <h3 className="heading-3 mb-2">{program.name}</h3>
              <p className={program.popular ? 'text-white/80' : 'text-gray-600'}>
                {program.description}
              </p>

              {/* Price */}
              <div className="my-8">
                <div className="heading-2">{program.price}</div>
                <p className={program.popular ? 'text-white/80' : 'text-gray-600'}>
                  {program.period}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {program.features.map((feature) => (
                  <li key={`${program.name}-${feature}`} className="flex items-start gap-3">
                    <FaCheck
                      size={20}
                      className={program.popular ? 'text-yellow-300' : 'text-secondary'}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                onClick={() => navigate('/checkout')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  program.popular
                    ? 'bg-yellow-300 text-black hover:bg-yellow-400'
                    : 'bg-secondary text-white hover:bg-secondary/90'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
