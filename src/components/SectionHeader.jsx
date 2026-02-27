import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import './SectionHeader.css'

export default function SectionHeader({ eyebrow, title, link, linkText }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div className="section-header" ref={ref}>
      <div className="section-header__left">
        {eyebrow && (
          <motion.p
            className="section-header__eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-header__eyebrow-line" />
            {eyebrow}
          </motion.p>
        )}
        <motion.h2
          className="section-header__title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h2>
      </div>
      {link && (
        <motion.a
          className="section-header__link"
          href={link}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {linkText || 'View All'}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12m0 0L8 2.5M13 7l-5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      )}
    </div>
  )
}
