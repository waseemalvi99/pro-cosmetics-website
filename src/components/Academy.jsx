import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import SectionHeader from './SectionHeader'
import './Academy.css'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Academy() {
  return (
    <section className="academy" id="academy">
      <div className="container">
        <SectionHeader
          eyebrow="Learn & Create"
          title="Courses & Events"
          link="#"
          linkText="See Calendar"
        />

        <div className="academy__bento">
          <FadeIn className="academy__main">
            <a className="academy__card academy__card--large" href="#">
              <picture>
                <source type="image/webp" srcSet="/assets/feature/masterclass-960.webp 960w, /assets/feature/masterclass-1400.webp 1400w" sizes="(max-width: 900px) 100vw, 60vw" />
                <img src="/assets/feature/masterclass.jpg" alt="Masterclass" loading="lazy" />
              </picture>
              <div className="academy__card-overlay" />
              <div className="academy__card-content">
                <span className="academy__card-eyebrow">Masterclass</span>
                <h3 className="academy__card-title">Camera-Ready Complexion Techniques</h3>
                <p className="academy__card-desc">Hands-on sessions covering undertone matching, layering logic, and long-wear set routines.</p>
                <span className="academy__card-cta">
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L8 2.5M13 7l-5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </a>
          </FadeIn>

          <FadeIn className="academy__side-top" delay={0.1}>
            <a className="academy__card" href="#" id="story">
              <picture>
                <source type="image/webp" srcSet="/assets/feature/story-640.webp 640w, /assets/feature/story-960.webp 960w" sizes="(max-width: 900px) 100vw, 40vw" />
                <img src="/assets/feature/story.jpg" alt="Brand story" loading="lazy" />
              </picture>
              <div className="academy__card-overlay" />
              <div className="academy__card-content">
                <span className="academy__card-eyebrow">Our Story</span>
                <h3 className="academy__card-title">Built backstage. Perfected for every face.</h3>
                <p className="academy__card-desc">From theater roots to modern studio labs, we focus on precise color and high-performance finish.</p>
              </div>
            </a>
          </FadeIn>

          <FadeIn className="academy__side-bottom" delay={0.2}>
            <div className="academy__info-card">
              <div className="academy__info-inner">
                <span className="academy__info-eyebrow">Upcoming Sessions</span>
                <h4 className="academy__info-title">Weekly workshops in complexion, editorial, and special effects</h4>
                <p className="academy__info-desc">Join live practical classes, guided product labs, and portfolio review sessions designed to level up both beginners and advanced professionals.</p>
                <a className="academy__info-link" href="#">
                  View Course Calendar
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L8 2.5M13 7l-5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
              <div className="academy__info-accent" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
