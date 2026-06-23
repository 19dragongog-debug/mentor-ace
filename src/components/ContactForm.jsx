import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaEnvelope, FaComment } from 'react-icons/fa'

export default function ContactForm() {
  const { ref, inView } = useInView()
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      console.log('Form Data:', data)
      toast.success('Thanks! We\'ll contact you within 24 hours.')
      reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    }
  }

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'info@neetace.com',
      action: 'mailto:info@neetace.com',
    },
    {
      icon: FaComment,
      title: 'WhatsApp',
      value: '+91 88000 00000',
      action: 'https://wa.me/918800000000',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-secondary to-accent">
      <div className="section-max-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div>
              <h2 className="heading-2 mb-4 text-white">
                Ready to Crack <span className="text-yellow-300">NEET/JEE?</span>
              </h2>
              <p className="text-white/90 text-lg">
                Take the first step towards your dream college. Book your free counselling call today.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={method.title}
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">{method.title}</p>
                      <p className="font-bold text-lg">{method.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div>
                <p className="text-3xl font-bold">24hrs</p>
                <p className="text-white/70">Response Time</p>
              </div>
              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-white/70">Free Consultation</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 card-shadow"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                  })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email format',
                    },
                  })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Enter valid 10-digit phone number',
                    },
                  })}
                  placeholder="9876543210"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell us about your preparation
                </label>
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                  placeholder="What are your exam targets and goals?"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-secondary to-accent text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Book Free Counselling
              </motion.button>

              <p className="text-center text-gray-600 text-sm">
                We respect your privacy. We'll contact you within 24 hours.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
