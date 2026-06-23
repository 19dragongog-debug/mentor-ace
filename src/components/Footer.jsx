import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { Mail, Phone, MapPin} from 'lucide-react'
export default function Footer() {
  const navigate = useNavigate()
  const year = new Date().getFullYear()

  const footerLinks = {
    Pages: [
      { name: 'Courses', route: '/courses' },
      { name: 'Tests', route: '/tests' },
      { name: 'Notes', route: '/notes' },
      { name: 'Results', route: '/results' },
    ],
    Community: [
      { name: 'Blog', route: '/blog' },
      { name: 'Contact', route: '/contact' },
      { name: 'WhatsApp Group', external: true, url: 'https://wa.me/918800000000' },
      { name: 'Community', external: true, url: '#' },
    ],
    Resources: [
      { name: 'Guides', external: true, url: '#' },
      { name: 'Tutorials', external: true, url: '#' },
      { name: 'FAQ', external: true, url: '#' },
      { name: 'Support', external: true, url: 'mailto:support@neetace.com' },
    ],
    Legal: [
      { name: 'Privacy', external: true, url: '#' },
      { name: 'Terms', external: true, url: '#' },
      { name: 'Cookies', external: true, url: '#' },
      { name: 'License', external: true, url: '#' },
    ],
  }

  const socialLinks = [
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaEnvelope, url: 'mailto:hello@mentor.com', label: 'Email' },
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

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="section-max-width">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          >
            {/* Brand */}
            <motion.div className="lg:col-span-1">
              <h3 className="text-2xl font-bold gradient-text mb-4">NEET ACE</h3>
              <p className="text-gray-400 mb-6">
                Transform your preparation with expert guidance and personalized coaching for NEET & JEE.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={index}
                      href={link.icon === Mail ? link.url : link.url}
                      target={link.icon === Mail ? undefined : '_blank'}
                      rel={link.icon === Mail ? undefined : 'noopener noreferrer'}
                      whileHover={{ scale: 1.2, color: '#6366F1' }}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Links */}
            {Object.entries(footerLinks).map((column) => (
              <motion.div
                key={column[0]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold mb-4">{column[0]}</h4>
                <ul className="space-y-3">
                  {column[1].map((link) => (
                    <li key={link.name}>
                      {link.external ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-secondary transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <button
                          onClick={() => navigate(link.route)}
                          className="text-gray-400 hover:text-secondary transition-colors text-left"
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gray-800 my-8"></div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm"
          >
            <p>&copy; {year} NEET ACE Coaching Program. All rights reserved.</p>
            <p>
              Made with ❤️ by{' '}
              <span className="text-secondary font-semibold">NEET ACE Team</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary/90 transition-all z-40"
      >
        ↑
      </motion.button>
    </footer>
  )
}
