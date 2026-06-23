import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './components/Home'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import Tests from './components/Tests'
import Notes from './components/Notes'
import Results from './components/Results'
import Blog from './components/Blog'
import SingleBlog from './components/SingleBlog'
import Checkout from './components/Checkout'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [])

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/results" element={<Results />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
