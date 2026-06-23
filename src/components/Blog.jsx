import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { useState } from 'react'

export default function Blog() {
  const { ref, inView } = useInView()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const articles = [
    {
      id: 1,
      title: '10 Effective Study Strategies for NEET Preparation',
      excerpt: 'Master the art of efficient studying with proven techniques used by top rankers.',
      category: 'study-tips',
      date: 'June 23, 2025',
      image: '📚',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'Time Management: How to Balance Studies and Life',
      excerpt: 'Learn to manage your time effectively without compromising on your well-being.',
      category: 'lifestyle',
      date: 'June 22, 2025',
      image: '⏱️',
      readTime: '4 min',
    },
    {
      id: 3,
      title: 'Biology Concepts Made Simple: Cell Division',
      excerpt: 'Complex cell division processes explained in easy-to-understand manner.',
      category: 'subject-guide',
      date: 'June 21, 2025',
      image: '🧬',
      readTime: '6 min',
    },
    {
      id: 4,
      title: 'Mock Tests: Why They\'re Crucial for Your Success',
      excerpt: 'Understand the importance of regular mock tests in your exam preparation.',
      category: 'exam-prep',
      date: 'June 20, 2025',
      image: '✅',
      readTime: '4 min',
    },
    {
      id: 5,
      title: 'Cracking Chemistry: Organic vs Inorganic Strategy',
      excerpt: 'Different approaches to master organic and inorganic chemistry effectively.',
      category: 'subject-guide',
      date: 'June 19, 2025',
      image: '⚗️',
      readTime: '7 min',
    },
    {
      id: 6,
      title: 'Physics Problem Solving: Step-by-Step Approach',
      excerpt: 'Master the art of solving complex physics problems with systematic methods.',
      category: 'subject-guide',
      date: 'June 18, 2025',
      image: '⚛️',
      readTime: '6 min',
    },
    {
      id: 7,
      title: 'Exam Day Anxiety: Tips to Stay Calm and Focused',
      excerpt: 'Practical techniques to manage anxiety and perform your best on exam day.',
      category: 'lifestyle',
      date: 'June 17, 2025',
      image: '🧘',
      readTime: '5 min',
    },
    {
      id: 8,
      title: 'JEE Advanced: Mathematics Strategy and Tips',
      excerpt: 'Advanced problem-solving strategies specifically for JEE mathematics section.',
      category: 'exam-prep',
      date: 'June 16, 2025',
      image: '📐',
      readTime: '8 min',
    },
  ]

  const categories = [
    { value: 'all', label: 'All Articles' },
    { value: 'study-tips', label: 'Study Tips' },
    { value: 'subject-guide', label: 'Subject Guide' },
    { value: 'exam-prep', label: 'Exam Prep' },
    { value: 'lifestyle', label: 'Lifestyle' },
  ]

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
            Study <span className="gradient-text">Blog</span>
          </h1>
          <p className="body-text max-w-2xl mx-auto">
            Tips, strategies, and insights to ace your NEET and JEE examinations.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border-2 border-gray-200 focus:border-secondary focus:outline-none transition-colors text-lg"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex gap-3 mb-12 overflow-x-auto pb-2"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                activeCategory === category.value
                  ? 'bg-secondary text-white'
                  : 'bg-light text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-light rounded-2xl overflow-hidden card-shadow hover-lift cursor-pointer"
              >
                {/* Image Area */}
                <div className="h-40 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center text-6xl">
                  {article.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold bg-secondary text-white px-3 py-1 rounded-full">
                      {categories.find(c => c.value === article.category)?.label}
                    </span>
                    <span className="text-xs text-gray-600">{article.readTime}</span>
                  </div>

                  <h3 className="font-bold text-lg mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-secondary font-bold text-sm"
                    >
                      Read More →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">No articles found matching your search.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
