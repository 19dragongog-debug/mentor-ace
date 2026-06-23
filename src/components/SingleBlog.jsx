import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function SingleBlog() {
  const { ref, inView } = useInView()

  const relatedArticles = [
    {
      id: 2,
      title: 'Time Management: How to Balance Studies and Life',
      excerpt: 'Learn to manage your time effectively without compromising...',
      category: 'Lifestyle',
      image: '⏱️',
    },
    {
      id: 4,
      title: 'Mock Tests: Why They\'re Crucial for Your Success',
      excerpt: 'Understand the importance of regular mock tests...',
      category: 'Exam Prep',
      image: '✅',
    },
    {
      id: 7,
      title: 'Exam Day Anxiety: Tips to Stay Calm and Focused',
      excerpt: 'Practical techniques to manage anxiety...',
      category: 'Lifestyle',
      image: '🧘',
    },
  ]

  return (
    <section className="pt-32 pb-12 bg-white min-h-screen">
      <div className="section-max-width">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-gray-600 mb-8"
        >
          <a href="#" className="hover:text-secondary">Blog</a>
          <span>/</span>
          <span className="text-secondary font-bold">Study Tips</span>
        </motion.div>

        {/* Article Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-6">
            <span className="inline-block bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
              Study Tips
            </span>
            <h1 className="heading-2 mb-4">
              10 Effective Study Strategies for <span className="gradient-text">NEET Preparation</span>
            </h1>
          </div>

          <div className="flex items-center gap-6 text-gray-600">
            <span>📅 June 23, 2025</span>
            <span>👤 By Expert Mentors</span>
            <span>⏱️ 5 min read</span>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="h-96 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl flex items-center justify-center text-8xl mb-12"
        >
          📚
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Preparing for NEET requires not just hard work, but smart work. In this comprehensive guide, we'll walk you through 10 proven study strategies used by top-ranking medical students. These techniques have been developed through years of experience and have consistently helped thousands of aspirants achieve their dreams.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Create a Structured Study Schedule</h2>
            <p>
              The foundation of effective preparation is a well-planned schedule. Allocate specific time slots for each subject and topic. This helps maintain consistency and ensures you cover all topics systematically. Remember, consistency beats intensity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Use the Pomodoro Technique</h2>
            <p>
              Study for 25 minutes with full focus, then take a 5-minute break. After 4 cycles, take a longer 15-minute break. This technique maximizes concentration and prevents mental fatigue. It's simple but incredibly effective.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Practice Active Recall</h2>
            <p>
              Instead of passively reading, test yourself regularly. Cover the content and try to recall information from memory. This strengthens neural pathways and improves retention significantly. Use flashcards and practice questions for this.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Solve Previous Year Questions</h2>
            <p>
              PYQs give you insight into the exam pattern and frequently asked topics. Solve at least 10-15 years of previous papers. This not only builds confidence but also helps you understand the difficulty level.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Take Regular Mock Tests</h2>
            <p>
              Mock tests simulate the actual exam environment. Take full-length mock tests at regular intervals. Analyze your performance, identify weak areas, and work on improving them. This is crucial for building exam temperament.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Join a Study Group</h2>
            <p>
              Discussing concepts with peers helps clarify doubts and provides new perspectives. A good study group can be incredibly motivating. However, ensure it's focused and doesn't become a distraction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">7. Maintain a Formula Sheet</h2>
            <p>
              For Physics and Chemistry, keep a personal formula sheet. Writing and organizing formulas helps in retention and serves as a quick reference during revision. This should be comprehensive yet concise.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">8. Use Visualization Techniques</h2>
            <p>
              For Biology especially, create mind maps and diagrams. Visual representation of concepts aids memory significantly. Don't just read—draw and visualize what you're learning.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">9. Revise Regularly</h2>
            <p>
              Don't study a topic once and forget about it. Revise regularly using the Spaced Repetition principle. This ensures information moves to long-term memory and stays with you during the exam.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">10. Stay Healthy and Manage Stress</h2>
            <p>
              Finally, remember that your physical and mental health is paramount. Get 7-8 hours of sleep, exercise regularly, eat healthy, and take breaks. A healthy mind performs better. Don't sacrifice health for studies.
            </p>

            <p className="text-lg font-bold text-secondary mt-8">
              Remember, everyone's preparation journey is unique. Find what works best for you and stick with it. Consistency and persistence are your best friends in this journey.
            </p>
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading-3 mb-8">Related Articles</h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-3 gap-6"
          >
            {relatedArticles.map((article, idx) => (
              <motion.a
                key={idx}
                href="#"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ y: -5 }}
                className="bg-light rounded-2xl overflow-hidden card-shadow hover-lift"
              >
                <div className="h-32 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center text-4xl">
                  {article.image}
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold text-secondary">{article.category}</span>
                  <h3 className="font-bold text-sm line-clamp-2 mt-2 mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-xs line-clamp-2">{article.excerpt}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
