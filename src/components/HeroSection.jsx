import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const { ref, inView } = useInView()
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const trustBadges = [
    { icon: '⭐', text: 'Rated 4.9/5' },
    { icon: '👥', text: '10,000+ Aspirants' },
    { icon: '📈', text: '95% Student Satisfaction' },
  ]

  return (
    <section className="relative min-h-screen pt-20 pb-12 flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-max-width w-full">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Eyebrow Text */}
            <motion.div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-secondary font-semibold">Welcome to Excellence</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="heading-1 leading-tight">
              Crack <span className="gradient-text">NEET & JEE</span> in 90 Days
            </motion.h1>

            {/* Subheading */}
            <motion.p variants={itemVariants} className="body-text">
              Get expert mentorship, daily practice tests, doubt solving, and personalized guidance to achieve your dream medical or engineering college.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => navigate('/checkout')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary justify-center flex items-center gap-2"
              >
                <FaPhone size={18} />
                Book Free Counselling
              </motion.button>
              <motion.a
                href="https://wa.me/918800000000?text=Hi%20I'm%20interested%20in%20mentorship"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary justify-center flex items-center gap-2"
              >
                <FaWhatsapp size={18} />
                Join WhatsApp Group
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-8">
              {trustBadges.map((badge) => (
                <motion.div
                  key={badge.text}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full"
                >
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full min-h-96"
          >
            <div className="absolute inset-0 gradient-bg rounded-3xl opacity-20"></div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-secondary to-accent rounded-3xl flex items-center justify-center text-6xl">
                👨‍💼
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
