import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setEmail('')
  }

  return (
    <section className="newsletter-section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="newsletter-card"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="newsletter-card__grain" />
          <div className="newsletter-card__glow newsletter-card__glow--1" />
          <div className="newsletter-card__glow newsletter-card__glow--2" />

          <div className="newsletter-card__content">
            <div className="newsletter-card__text">
              <motion.p
                className="newsletter-card__eyebrow"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="newsletter-card__eyebrow-line" />
                Stay Connected
              </motion.p>
              <motion.h3
                className="newsletter-card__title"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Join the Pro Beauty Journal
              </motion.h3>
              <motion.p
                className="newsletter-card__desc"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Get launch alerts, training sessions, and artist-only offers delivered to your inbox.
              </motion.p>
            </div>

            <motion.form
              className="newsletter-card__form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="newsletter-card__input-wrap">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-card__input"
                  aria-label="Email address"
                  required
                />
                <motion.button
                  type="submit"
                  className="newsletter-card__submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="newsletter-card__privacy">
                By subscribing, you agree to our privacy policy. Unsubscribe anytime.
              </p>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
