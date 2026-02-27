import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import './Header.css'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Collections', href: '#collections' },
  { label: 'Academy', href: '#academy' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <motion.header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="header__inner container">
        <a href="#" className="header__brand">
          <span className="header__brand-icon">
            <img src="/logo.png" alt="" />
          </span>
          <span className="header__brand-text">
            <strong>Pro Cosmetics</strong>
            <small>Professional Make-up</small>
          </span>
        </a>

        <nav className="header__nav" role="navigation">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="header__link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="header__actions">
          <motion.a
            className="btn btn--outline"
            href="https://global.kryolan.com/products"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Shop Now
          </motion.a>
        </div>

        <button
          className={`header__burger ${mobileOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mobile-menu__nav">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="mobile-menu__link"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                className="btn btn--primary mobile-menu__cta"
                href="https://global.kryolan.com/products"
              >
                Shop Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
