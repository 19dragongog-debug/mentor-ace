import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useNavigate } from 'react-router-dom'
import { FaCheck, FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'

export default function CourseDetails() {
  const { ref, inView } = useInView()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('curriculum')
  const [activeFAQ, setActiveFAQ] = useState(null)

  const curriculum = [
    {
      module: 'Module 1: Biology Fundamentals',
      topics: ['Cell Structure', 'Genetics', 'Evolution', 'Ecology'],
    },
    {
      module: 'Module 2: Physics Concepts',
      topics: ['Mechanics', 'Electromagnetism', 'Optics', 'Modern Physics'],
    },
    {
      module: 'Module 3: Chemistry Essentials',
      topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry'],
    },
  ]

  const features = [
    { title: '300+ Video Lectures', desc: 'Comprehensive video explanations' },
    { title: '500+ Practice Questions', desc: 'Chapter-wise practice problems' },
    { title: '50 Mock Tests', desc: 'Full-length and chapter tests' },
    { title: 'Live Doubt Sessions', desc: 'Weekly interaction with mentors' },
    { title: 'Study Materials', desc: 'Notes and reference books' },
    { title: 'Performance Tracking', desc: 'Detailed analytics and reports' },
  ]

  const faqs = [
    {
      question: 'What is the course validity?',
      answer: 'The course is valid for 12 months from the date of enrollment. You can access all materials within this period.',
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with the course.',
    },
    {
      question: 'Can I download the materials?',
      answer: 'Yes, all study materials can be downloaded for offline access.',
    },
    {
      question: 'Do you provide mentoring support?',
      answer: 'Yes, all premium courses include 1-on-1 mentoring sessions as per the plan.',
    },
  ]

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
        {/* Course Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 items-center mb-16"
        >
          <div>
            <h1 className="heading-2 mb-4">
              Complete <span className="gradient-text">NEET & JEE</span> Master Course
            </h1>
            <p className="body-text mb-6 text-gray-600">
              Master every concept with our comprehensive course covering all topics needed to crack NEET and JEE exams.
            </p>
            <div className="flex items-center gap-8 mb-8">
              <div>
                <p className="text-3xl font-bold gradient-text">₹49,999</p>
                <p className="text-gray-600">One-time payment</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">12 Months</p>
                <p className="text-gray-600">Validity period</p>
              </div>
            </div>
            <motion.button
              onClick={() => navigate('/checkout')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full md:w-auto"
            >
              Enroll Now
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="h-96 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl flex items-center justify-center text-8xl"
          >
            👑
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="mb-16"
        >
          <div className="flex gap-4 mb-8 border-b border-gray-200">
            {['curriculum', 'features', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-bold transition-colors ${
                  activeTab === tab
                    ? 'text-secondary border-b-2 border-secondary'
                    : 'text-gray-600 hover:text-secondary'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {curriculum.map((module, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6"
                >
                  <h3 className="font-bold text-lg mb-4 text-secondary">{module.module}</h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {module.topics.map((topic, tidx) => (
                      <li key={tidx} className="flex items-start gap-3">
                        <FaCheck size={16} className="text-secondary mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6"
                >
                  <h3 className="font-bold text-lg mb-2 text-secondary">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4 max-w-3xl"
            >
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden"
                >
                  <motion.button
                    onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: activeFAQ === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-secondary"
                    >
                      <FaChevronDown />
                    </motion.div>
                  </motion.button>

                  {activeFAQ === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-4 text-gray-600 border-t border-gray-200"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="heading-3 mb-6">Ready to start your NEET/JEE journey?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block"
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
