import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import SectionHeader from './SectionHeader'
import './Journal.css'

const posts = [
  {
    category: 'Trend Report',
    title: 'Soft Metal Neutrals for Spring Editorial Looks',
    desc: 'How to balance sheen and depth for camera-friendly texture.',
    img: '/assets/journal/trend.jpg',
    webp: '/assets/journal/trend-900.webp',
  },
  {
    category: 'How To',
    title: '3-Step Method for Long-Lasting Base in Humid Weather',
    desc: 'Prep, set, and lock techniques with minimal product load.',
    img: '/assets/journal/howto.jpg',
    webp: '/assets/journal/howto-900.webp',
  },
  {
    category: 'Artist Talk',
    title: 'Inside a Fashion Week Kit: What Professionals Actually Carry',
    desc: 'The essentials artists repeat in global backstage setups.',
    img: '/assets/journal/artist.jpg',
    webp: '/assets/journal/artist-900.webp',
  },
]

function JournalCard({ post, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      className="journal-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
    >
      <a className="journal-card__link" href="#">
        <div className="journal-card__img-wrap">
          <picture>
            <source type="image/webp" srcSet={post.webp} />
            <img src={post.img} alt={post.title} loading="lazy" />
          </picture>
        </div>
        <div className="journal-card__body">
          <span className="journal-card__cat">{post.category}</span>
          <h4 className="journal-card__title">{post.title}</h4>
          <p className="journal-card__desc">{post.desc}</p>
          <span className="journal-card__read">
            Read Article
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12m0 0L8 2.5M13 7l-5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </a>
    </motion.article>
  )
}

export default function Journal() {
  return (
    <section className="journal" id="journal">
      <div className="container">
        <SectionHeader
          eyebrow="Stories"
          title="Journal"
          link="#"
          linkText="Read All Posts"
        />
        <div className="journal__grid">
          {posts.map((post, i) => (
            <JournalCard key={post.title} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
