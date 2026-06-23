import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === '/'

  const navLinks = [
    { name: 'Courses', href: '/courses', isPage: true },
    { name: 'Tests', href: '/tests', isPage: true },
    { name: 'Notes', href: '/notes', isPage: true },
    { name: 'Results', href: '/results', isPage: true },
    { name: 'Blog', href: '/blog', isPage: true },
    { name: 'Contact', href: '/contact', isPage: true },
  ]

  const handleNavClick = (href, isPage) => {
    setIsOpen(false)
    if (isPage) {
      navigate(href)
    } else {
      // For home page sections
      if (!isHome) {
        navigate('/')
        setTimeout(() => {
          const element = document.querySelector(href)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleLogoClick = () => {
    setIsOpen(false)
    navigate('/')
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 blur-effect z-50 border-b border-gray-200">
      <div className="section-max-width">
        <div className="flex justify-between items-center px-4 md:px-8 py-4">
          {/* Logo */}
          <motion.button
            onClick={handleLogoClick}
            className="text-2xl font-bold gradient-text cursor-pointer hover:opacity-80 transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            NEET ACE
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.isPage)}
                className="text-gray-700 hover:text-secondary transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://wa.me/918800000000?text=Hi%20I'm%20interested%20in%20mentorship"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all"
            >
              <FaWhatsapp size={18} />
              <span className="text-sm font-medium">WhatsApp</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 py-4 space-y-3 border-t border-gray-200">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.isPage)}
                className="block w-full text-left py-2 text-gray-700 hover:text-secondary transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/918800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 px-4 py-2 bg-green-500 text-white rounded-lg font-medium"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
