import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'

export default function FAQ() {
  const { ref, inView } = useInView()
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'How is this coaching different from other NEET/JEE platforms?',
      answer: 'We offer personalized 1-on-1 mentoring from experienced educators with structured 90-day preparation roadmaps. Unlike large batch coaching, you get dedicated attention to your specific weak areas and learning style.',
    },
    {
      question: 'What if I don\'t see score improvement in 90 days?',
      answer: 'We\'re so confident in our program that we offer a 30-day money-back guarantee if you don\'t see measurable improvement. Most students see significant progress within 60 days.',
    },
    {
      question: 'Can I get a refund if I change my mind?',
      answer: 'Yes, we offer a full refund within 14 days of enrollment. After that, you can transfer your coaching to another person or roll it over to the next batch.',
    },
    {
      question: 'How much time do I need to dedicate per week?',
      answer: 'We recommend 5-7 hours per week for optimal results. This includes mentoring sessions, mock tests, doubt sessions, and self-study. You can adjust based on your schedule and preparation stage.',
    },
    {
      question: 'Do you provide exam strategy and time management coaching?',
      answer: 'Yes, all plans include dedicated sessions on exam strategy, time management, question selection, and stress management. We focus on maximizing your score in the limited exam time.',
    },
    {
      question: 'Is this suitable for beginners or only advanced students?',
      answer: 'We have customized programs for all levels. Whether you\'re starting fresh, need to improve your current score, or are aiming for top ranks, we have structured paths designed for your specific needs.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="faq" className="section-padding">
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Have questions? We've got answers. Contact us if you don't find what you're looking for.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={`faq-${faq.question}`}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden card-shadow"
            >
              <motion.button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full px-6 py-4 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-secondary"
                >
                  <FaChevronDown size={24} />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-8 pb-4 md:pb-6 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? <br className="md:hidden" />
            <span className="font-semibold text-secondary">
              Chat with our team
            </span>
          </p>
          <motion.a
            href="https://wa.me/918800000000?text=I%20have%20questions%20about%20the%20mentorship%20program"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex"
          >
            Start Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
