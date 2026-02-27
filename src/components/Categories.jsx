import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import SectionHeader from './SectionHeader'
import './Categories.css'

const categories = [
  {
    name: 'Eyes',
    img: '/assets/category/eyes.jpg',
    webp: '/assets/category/eyes-840.webp',
  },
  {
    name: 'Lips',
    img: '/assets/category/lips.jpg',
    webp: '/assets/category/lips-840.webp',
  },
  {
    name: 'Face & Body',
    img: '/assets/category/face-body.jpg',
    webp: '/assets/category/face-body-840.webp',
  },
  {
    name: 'Special Effects',
    img: '/assets/category/sfx.jpg',
    webp: '/assets/category/sfx-840.webp',
  },
]

function CategoryCard({ cat, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.a
      ref={ref}
      className="cat-card"
      href="https://global.kryolan.com/products"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover="hover"
    >
      <div className="cat-card__img-wrap">
        <motion.div
          className="cat-card__img"
          variants={{ hover: { scale: 1.08 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <picture>
            <source type="image/webp" srcSet={cat.webp} />
            <img src={cat.img} alt={cat.name} loading="lazy" />
          </picture>
        </motion.div>
      </div>

      <div className="cat-card__overlay" />

      <div className="cat-card__content">
        <motion.span
          className="cat-card__name"
          variants={{ hover: { y: -4 } }}
          transition={{ duration: 0.4 }}
        >
          {cat.name}
        </motion.span>
        <motion.span
          className="cat-card__explore"
          variants={{ hover: { opacity: 1, y: 0 } }}
          initial={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3 }}
        >
          Explore
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12m0 0L8 2.5M13 7l-5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </div>
    </motion.a>
  )
}

export default function Categories() {
  return (
    <section className="categories" id="collections">
      <div className="container">
        <SectionHeader
          eyebrow="Collections"
          title="Shop by Category"
          link="https://global.kryolan.com/products"
          linkText="All Categories"
        />
        <div className="categories__grid">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
