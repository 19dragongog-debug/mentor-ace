import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

export default function Tests() {
  const { ref, inView } = useInView()
  const [activeTab, setActiveTab] = useState('mock')

  const mockTests = [
    { id: 1, name: 'NEET Full Mock - 1', attempts: 5482, avg: '520/720', difficulty: 'Hard' },
    { id: 2, name: 'NEET Full Mock - 2', attempts: 4892, avg: '530/720', difficulty: 'Hard' },
    { id: 3, name: 'JEE Main Full Mock - 1', attempts: 3541, avg: '240/300', difficulty: 'Medium' },
    { id: 4, name: 'JEE Advanced Full Mock', attempts: 2156, avg: '180/360', difficulty: 'Hard' },
  ]

  const chapterTests = [
    { id: 1, subject: 'Biology', chapter: 'Cell Biology', questions: 50, duration: '1 hour' },
    { id: 2, subject: 'Physics', chapter: 'Mechanics', questions: 50, duration: '1 hour' },
    { id: 3, subject: 'Chemistry', chapter: 'Organic Chemistry', questions: 50, duration: '1 hour' },
    { id: 4, subject: 'Biology', chapter: 'Genetics', questions: 40, duration: '45 mins' },
  ]

  const pyqs = [
    { id: 1, name: 'NEET 2023 Questions', count: 180, accuracy: 78 },
    { id: 2, name: 'NEET 2022 Questions', count: 180, accuracy: 82 },
    { id: 3, name: 'JEE Mains 2023', count: 90, accuracy: 75 },
    { id: 4, name: 'JEE Advanced 2022', count: 54, accuracy: 68 },
  ]

  const leaderboard = [
    { rank: 1, name: 'Ayan Kumar', score: 680, rank_all: 'AIR 145' },
    { rank: 2, name: 'Priya Singh', score: 670, rank_all: 'AIR 203' },
    { rank: 3, name: 'Rohan Gupta', score: 660, rank_all: 'AIR 512' },
    { rank: 4, name: 'Neha Sharma', score: 655, rank_all: 'AIR 789' },
    { rank: 5, name: 'Amit Patel', score: 650, rank_all: 'AIR 1023' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
            Practice <span className="gradient-text">Tests</span>
          </h1>
          <p className="body-text max-w-2xl mx-auto">
            Master your preparation with mock tests, chapter tests, and previous year questions.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 overflow-x-auto">
          {['mock', 'chapter', 'pyqs', 'leaderboard'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-secondary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab === 'pyqs' ? 'PYQs' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Mock Tests */}
        {activeTab === 'mock' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {mockTests.map((test) => (
              <motion.div
                key={test.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 card-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{test.name}</h3>
                    <p className="text-sm text-gray-600">{test.attempts} attempts</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    test.difficulty === 'Hard'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {test.difficulty}
                  </span>
                </div>
                <p className="text-2xl font-bold gradient-text mb-4">{test.avg}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 bg-secondary text-white rounded-lg font-bold"
                >
                  Start Test
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Chapter Tests */}
        {activeTab === 'chapter' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4 max-w-3xl"
          >
            {chapterTests.map((test) => (
              <motion.div
                key={test.id}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="bg-white rounded-2xl p-6 flex items-center justify-between card-shadow"
              >
                <div>
                  <p className="text-sm text-secondary font-bold">{test.subject}</p>
                  <h3 className="font-bold text-lg">{test.chapter}</h3>
                  <p className="text-sm text-gray-600">{test.questions} questions • {test.duration}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 bg-secondary text-white rounded-lg font-bold"
                >
                  Take Test
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* PYQs */}
        {activeTab === 'pyqs' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {pyqs.map((pyq) => (
              <motion.div
                key={pyq.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 card-shadow"
              >
                <h3 className="font-bold text-lg mb-4">{pyq.name}</h3>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-2xl font-bold gradient-text">{pyq.count}</p>
                    <p className="text-gray-600 text-sm">Questions</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{pyq.accuracy}%</p>
                    <p className="text-gray-600 text-sm">Class Avg</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full py-2 bg-secondary text-white rounded-lg font-bold"
                >
                  Practice Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Leaderboard */}
        {activeTab === 'leaderboard' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-secondary to-accent rounded-3xl p-8 text-white mb-8">
              <h2 className="heading-3 mb-2">This Month's Top Performers</h2>
              <p className="text-white/80">Join the elite list of top-scoring students</p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {leaderboard.map((entry) => (
                <motion.div
                  key={entry.rank}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 flex items-center justify-between card-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                      entry.rank === 1 ? 'bg-yellow-500' :
                      entry.rank === 2 ? 'bg-gray-400' :
                      entry.rank === 3 ? 'bg-orange-600' :
                      'bg-secondary'
                    }`}>
                      {entry.rank}
                    </div>
                    <div>
                      <p className="font-bold">{entry.name}</p>
                      <p className="text-sm text-gray-600">{entry.rank_all}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold gradient-text">{entry.score}</p>
                    <div className="flex justify-end gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
