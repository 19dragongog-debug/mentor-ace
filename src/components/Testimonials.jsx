import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const { ref, inView } = useInView()
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Ayan Kumar',
      role: 'NEET 2025 Aspirant',
      image: '👨‍⚕️',
      rating: 5,
      text: 'The coaching transformed my preparation completely. Within 90 days, I went from scoring 450 to 620 marks! The structured approach and doubt solving sessions were game-changers.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      name: 'Priya Singh',
      role: 'JEE Advanced Ranker',
      image: '👩‍💻',
      rating: 5,
      text: 'Best decision for my preparation. The mentors understood exactly where I was struggling and provided targeted help. I improved my rank from 5000 to 1450 in just 3 months!',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      name: 'Rohan Gupta',
      role: 'NEET Qualified',
      image: '👨‍⚕️',
      rating: 5,
      text: 'The personalized guidance and regular mock tests made all the difference. I felt supported throughout and achieved my dream of getting into AFMC. Highly recommend!',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ]

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding">
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
            <span className="gradient-text">Student Reviews</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Real stories from students who transformed their scores and achieved their dreams with our coaching.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Testimonial */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-8 card-shadow">
            {/* Video */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-video rounded-2xl overflow-hidden bg-gray-200"
            >
              <iframe
                width="100%"
                height="100%"
                src={testimonials[activeIndex].videoUrl}
                title="Student Testimonial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Content */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={`testimonial-${activeIndex}-star-${i}`} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl font-medium text-gray-800">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                <p className="text-secondary font-medium">{testimonials[activeIndex].role}</p>
              </div>

              {/* Navigation */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={goToPrev}
                  className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold hover:bg-secondary hover:text-white transition-all"
                >
                  ←
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold hover:bg-secondary/90 transition-all"
                >
                  →
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={`testimonial-${testimonial.name}`}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-8 bg-secondary'
                    : 'w-3 bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
