import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref, inView } = useInView()
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 88000 00000',
      action: 'tel:+918800000000',
      type: 'phone',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'info@neetace.com',
      action: 'mailto:info@neetace.com',
      type: 'email',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      value: 'New Delhi, India',
      action: '#',
      type: 'address',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '+91 88000 00000',
      action: 'https://wa.me/918800000000',
      type: 'whatsapp',
    },
  ]

  const faqItems = [
    {
      question: 'What is your average response time?',
      answer: 'We respond to all inquiries within 24 hours during business days.',
    },
    {
      question: 'Do you offer free consultation calls?',
      answer: 'Yes, we offer free 15-minute consultation calls to understand your needs.',
    },
    {
      question: 'What are your business hours?',
      answer: 'We are available Monday to Friday, 9 AM to 6 PM IST.',
    },
    {
      question: 'Can I schedule a demo session?',
      answer: 'Absolutely! Schedule a demo session with our team to experience the platform.',
    },
  ]

  const onSubmit = async (data) => {
    try {
      console.log('Contact Form Data:', data)
      toast.success('Thank you! We\'ll contact you within 24 hours.')
      reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    }
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
    <section className="pt-32 pb-12 bg-white min-h-screen">
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
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="body-text max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="bg-light rounded-3xl p-8"
          >
            <h2 className="heading-3 mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                  })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: { value: /^[0-9]{10}$/, message: 'Enter valid 10-digit number' },
                  })}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
                <select
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none"
                >
                  <option value="">Select subject</option>
                  <option value="course-inquiry">Course Inquiry</option>
                  <option value="technical-issue">Technical Issue</option>
                  <option value="payment">Payment Related</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' },
                  })}
                  placeholder="Your message here..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none resize-none"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-secondary to-accent text-white font-bold rounded-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-8"
          >
            <div>
              <h2 className="heading-3 mb-8">Contact Information</h2>

              <motion.div
                className="space-y-6"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
                initial="hidden"
                animate="visible"
              >
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={idx}
                      href={info.action}
                      target={['whatsapp', 'phone'].includes(info.type) ? '_blank' : undefined}
                      rel={['whatsapp', 'phone'].includes(info.type) ? 'noopener noreferrer' : undefined}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                      }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-6 bg-light rounded-2xl hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white text-xl">
                        <Icon />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{info.title}</p>
                        <p className="font-bold text-lg">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </motion.div>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6">
              <h3 className="font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>📅 Monday - Friday: 9 AM - 6 PM IST</p>
                <p>📅 Saturday: 10 AM - 4 PM IST</p>
                <p>📅 Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="heading-3 text-center mb-12">Frequently Asked Questions</h2>

          <motion.div
            className="max-w-3xl mx-auto space-y-4"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate="visible"
          >
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-light rounded-2xl p-6"
              >
                <h3 className="font-bold text-lg mb-3 text-secondary">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
