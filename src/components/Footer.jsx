import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import './Footer.css'

const columns = [
  {
    title: 'Products',
    links: [
      { label: 'Face & Body', href: 'https://global.kryolan.com/products' },
      { label: 'Lips', href: 'https://global.kryolan.com/products' },
      { label: 'Eyes', href: 'https://global.kryolan.com/products' },
      { label: 'Special Effects', href: 'https://global.kryolan.com/products' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Courses', href: '#' },
      { label: 'How To', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Store Locator', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Shipping', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy', href: '#' },
    ],
  },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <motion.div
          className="footer__top"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <img src="/logo.png" alt="" />
            </div>
            <div>
              <strong className="footer__brand-name">Pro Cosmetics</strong>
              <p className="footer__brand-tagline">
                High-performance professional make-up for stage, screen, editorial, and daily wear.
              </p>
            </div>
          </div>

          <div className="footer__columns">
            {columns.map((col) => (
              <div key={col.title} className="footer__col">
                <h5 className="footer__col-title">{col.title}</h5>
                <ul className="footer__col-list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a className="footer__col-link" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="footer__bottom">
          <p className="footer__copy">&copy; 2026 Pro Cosmetics &mdash; Professional Make-up</p>
          <div className="footer__bottom-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
