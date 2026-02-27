import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react'
import './Hero.css'

const slides = [
  {
    eyebrow: 'New Launch',
    title: 'Performance complexion.',
    subtitle: 'Perfected for every face.',
    desc: 'Skin-adaptive formulas built for long hours, high-definition cameras, and effortless comfort.',
    cta: 'Explore Products',
    ctaSecondary: 'Find Your Shade',
    img: '/assets/hero/hero-1.jpg',
    webp768: '/assets/hero/hero-1-768.webp',
    webp1280: '/assets/hero/hero-1-1280.webp',
  },
  {
    eyebrow: 'Velvet Kiss',
    title: 'Editorial color.',
    subtitle: 'Wearable finish.',
    desc: 'Rich pigment payoff, precise edges, and transfer-aware formulas for all-day statement looks.',
    cta: 'Shop Lipstick',
    ctaSecondary: 'See All Shades',
    img: '/assets/hero/hero-2.jpg',
    webp768: '/assets/hero/hero-2-768.webp',
    webp1280: '/assets/hero/hero-2-1280.webp',
  },
  {
    eyebrow: 'Pro Selection',
    title: 'Backstage-ready.',
    subtitle: 'Crafted for creators.',
    desc: 'Build complete kits with prep, pigment, and setting essentials that perform under pressure.',
    cta: 'Build Kit',
    ctaSecondary: 'Book Consultation',
    img: '/assets/hero/hero-3.jpg',
    webp768: '/assets/hero/hero-3-768.webp',
    webp1280: '/assets/hero/hero-3-1280.webp',
  },
]

const stats = [
  { value: '120+', label: 'Pro Formulas' },
  { value: '4.8', label: 'Artist Rating' },
  { value: '36', label: 'Skin Shades' },
  { value: '48h', label: 'Studio Hold' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const stageRef = useRef(null)

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const imgX = useTransform(mouseX, [0, 1], [8, -8])
  const imgY = useTransform(mouseY, [0, 1], [4, -4])
  const imgScale = useTransform(mouseX, [0, 0.5, 1], [1.06, 1.04, 1.06])

  const goTo = useCallback((idx) => {
    setCurrent(idx)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (!stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }, [mouseX, mouseY])

  const slide = slides[current]

  return (
    <section className="hero">
      <div
        className="hero__stage"
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="hero__img-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.picture style={{ x: imgX, y: imgY, scale: imgScale }}>
              <source
                type="image/webp"
                srcSet={`${slide.webp768} 768w, ${slide.webp1280} 1280w`}
                sizes="100vw"
              />
              <img src={slide.img} alt="" className="hero__bg" />
            </motion.picture>
          </motion.div>
        </AnimatePresence>

        <div className="hero__overlay" />

        <div className="hero__vignette" />

        <div className="hero__inner container">
          <div className="hero__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="hero__text"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
                  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
                }}
              >
                <motion.p
                  className="hero__eyebrow"
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    exit: { opacity: 0, y: -10, filter: 'blur(4px)' },
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="hero__eyebrow-line" />
                  {slide.eyebrow}
                </motion.p>

                <motion.h1
                  className="hero__title"
                  variants={{
                    hidden: { opacity: 0, y: 50, filter: 'blur(6px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
                    exit: { opacity: 0, y: -20, filter: 'blur(6px)' },
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {slide.title}
                  <span className="hero__title-accent">{slide.subtitle}</span>
                </motion.h1>

                <motion.p
                  className="hero__desc"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {slide.desc}
                </motion.p>

                <motion.div
                  className="hero__actions"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.a
                    className="btn btn--accent btn--lg"
                    href="https://global.kryolan.com/products"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {slide.cta}
                  </motion.a>
                  <motion.a
                    className="btn btn--ghost btn--lg"
                    href="https://global.kryolan.com/products"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {slide.ctaSecondary}
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="hero__slide-nav">
              <div className="hero__dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    {i === current && (
                      <motion.span
                        className="hero__dot-fill"
                        layoutId="heroDot"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <span className="hero__counter">
                <span className="hero__counter-current">{String(current + 1).padStart(2, '0')}</span>
                <span className="hero__counter-sep">&mdash;</span>
                <span className="hero__counter-total">{String(slides.length).padStart(2, '0')}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="hero__scroll-hint">
          <motion.div
            className="hero__scroll-line"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span>Scroll</span>
        </div>
      </div>

      <motion.div
        className="hero__stats container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="hero__stat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + i * 0.08, duration: 0.5 }}
          >
            <span className="hero__stat-value">{stat.value}</span>
            <span className="hero__stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
