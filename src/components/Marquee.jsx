import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import './Marquee.css'

const words = ['make-up is a science', '•', 'performance meets artistry', '•', 'built backstage', '•', 'perfected for every face', '•']

export default function Marquee() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])

  return (
    <section className="marquee" ref={ref}>
      <div className="marquee__line marquee__line--top" />
      <motion.div className="marquee__track" style={{ x }}>
        {[...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className={word === '•' ? 'marquee__dot' : 'marquee__word'}
          >
            {word}
          </span>
        ))}
      </motion.div>
      <div className="marquee__line marquee__line--bottom" />
    </section>
  )
}
