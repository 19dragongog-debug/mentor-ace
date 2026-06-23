import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function Checkout() {
  const { ref, inView } = useInView()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [paymentMethod, setPaymentMethod] = useState('upi')

  const orderSummary = {
    course: 'Advanced NEET & JEE Course',
    price: 24999,
    discount: 0,
    tax: 0,
  }

  const onSubmit = async (data) => {
    try {
      console.log('Checkout Data:', data, 'Payment Method:', paymentMethod)
      toast.success('Order placed successfully! Redirecting to payment...')
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
            Complete Your <span className="gradient-text">Purchase</span>
          </h1>
          <p className="body-text max-w-2xl mx-auto">
            Fill in your details and choose your payment method to enroll today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="md:col-span-2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Student Information */}
              <div className="bg-white rounded-2xl p-8">
                <h2 className="font-bold text-xl mb-6">Student Information</h2>

                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                      })}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number *
                    </label>
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
                </div>
              </div>

              {/* Exam Details */}
              <div className="bg-white rounded-2xl p-8">
                <h2 className="font-bold text-xl mb-6">Exam Details</h2>

                <div className="space-y-4">
                  {/* Class */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Current Class *
                    </label>
                    <select
                      {...register('class', { required: 'Class is required' })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none"
                    >
                      <option value="">Select your class</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                      <option value="12-passed">12 Passed</option>
                    </select>
                    {errors.class && <p className="text-red-500 text-sm mt-1">{errors.class.message}</p>}
                  </div>

                  {/* Target Exam */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Target Exam *
                    </label>
                    <select
                      {...register('targetExam', { required: 'Target exam is required' })}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none"
                    >
                      <option value="">Select target exam</option>
                      <option value="neet">NEET</option>
                      <option value="jee-mains">JEE Mains</option>
                      <option value="jee-advanced">JEE Advanced</option>
                      <option value="both">Both NEET & JEE</option>
                    </select>
                    {errors.targetExam && <p className="text-red-500 text-sm mt-1">{errors.targetExam.message}</p>}
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl p-8">
                <h2 className="font-bold text-xl mb-6">Payment Method</h2>

                <div className="space-y-3">
                  {[
                    { id: 'upi', label: 'UPI/Mobile Wallet' },
                    { id: 'card', label: 'Debit/Credit Card' },
                    { id: 'netbanking', label: 'Net Banking' },
                    { id: 'emi', label: 'EMI Option (No Cost)' },
                  ].map((method) => (
                    <label key={method.id} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-secondary transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-secondary"
                      />
                      <span className="ml-3 font-bold">{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-secondary to-accent text-white font-bold rounded-lg text-lg"
              >
                Proceed to Payment
              </motion.button>

              <p className="text-center text-gray-600 text-sm">
                ✓ Secure payment | ✓ 30-day money back guarantee | ✓ Instant access
              </p>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            <div className="bg-white rounded-2xl p-8 sticky top-32 card-shadow">
              <h2 className="font-bold text-xl mb-6">Order Summary</h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Course */}
                <div className="pb-6 border-b border-gray-200">
                  <div className="text-5xl text-center mb-4">👑</div>
                  <h3 className="font-bold mb-2">{orderSummary.course}</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ 300+ Video Lectures</li>
                    <li>✓ 50 Mock Tests</li>
                    <li>✓ Live Doubt Sessions</li>
                    <li>✓ 12 Months Validity</li>
                  </ul>
                </div>

                {/* Price Details */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Course Price</span>
                    <span className="font-bold">₹{orderSummary.price.toLocaleString()}</span>
                  </div>
                  {orderSummary.discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-₹{orderSummary.discount.toLocaleString()}</span>
                    </div>
                  )}
                  {orderSummary.tax > 0 && (
                    <div className="flex justify-between text-gray-600">
                      <span>Tax</span>
                      <span>₹{orderSummary.tax.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-3 border-t-2 border-gray-200">
                    <span className="font-bold text-lg">Total</span>
                    <span className="text-2xl font-bold gradient-text">
                      ₹{(orderSummary.price + orderSummary.tax - orderSummary.discount).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm font-bold text-green-700 mb-2">✓ You will get instant access to:</p>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• All course materials</li>
                    <li>• Mock tests & previous year papers</li>
                    <li>• Weekly mentoring sessions</li>
                    <li>• 24/7 doubt support</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
