import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import SectionHeader from './SectionHeader'
import './Products.css'

const products = [
  {
    name: 'Fixing Spray',
    desc: 'Long-wear setting mist with micro-fine hold for studio and stage.',
    tag: 'Vegan',
    img: '/assets/products/fixing-spray.png',
    webp220: '/assets/products/fixing-spray-220.webp',
    webp340: '/assets/products/fixing-spray-340.webp',
  },
  {
    name: 'Lip Oil',
    desc: 'Hydrating color gloss with vitamin-infused pigments and a velvet finish.',
    tag: 'New Shades',
    tagAccent: true,
    img: '/assets/products/lip-oil.png',
    webp220: '/assets/products/lip-oil-220.webp',
    webp340: '/assets/products/lip-oil-340.webp',
  },
  {
    name: 'Velvet Vision Palette',
    desc: '12 blendable mattes & shimmers in an eco-refill compact.',
    tag: 'Refillable',
    img: '/assets/products/velvet-vision.png',
    webp220: '/assets/products/velvet-vision-220.webp',
    webp340: '/assets/products/velvet-vision-340.webp',
  },
  {
    name: 'Concealer Circle',
    desc: '6-shade corrector wheel for precise blemish and tone matching.',
    tag: 'Pro Staple',
    img: '/assets/products/concealer-circle.png',
    webp220: '/assets/products/concealer-circle-220.webp',
    webp340: '/assets/products/concealer-circle-340.webp',
  },
  {
    name: 'Digital Complexion',
    desc: 'Camera-optimized foundation with adaptive light-diffusing pigments.',
    tag: 'HD',
    tagAccent: true,
    img: '/assets/products/digital-complexion.png',
    webp220: '/assets/products/digital-complexion-220.webp',
    webp340: '/assets/products/digital-complexion-340.webp',
  },
  {
    name: 'TV Paint Stick',
    desc: "Ultra-coverage cream stick — the original backstage essential since '45.",
    tag: 'Classic',
    img: '/assets/products/tv-paint-stick.png',
    webp220: '/assets/products/tv-paint-stick-220.webp',
    webp340: '/assets/products/tv-paint-stick-340.webp',
  },
]

function ProductCard({ product, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      className="product-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
    >
      <a className="product-card__link" href="https://global.kryolan.com/products">
        <div className="product-card__media">
          <span className={`product-card__tag ${product.tagAccent ? 'product-card__tag--accent' : ''}`}>
            {product.tag}
          </span>
          <div className="product-card__img-wrap">
            <picture>
              <source
                type="image/webp"
                srcSet={`${product.webp220} 220w, ${product.webp340} 340w`}
                sizes="170px"
              />
              <img src={product.img} alt={product.name} loading="lazy" />
            </picture>
          </div>
          <div className="product-card__glow" />
        </div>
        <div className="product-card__info">
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__desc">{product.desc}</p>
          <span className="product-card__cta">
            Discover
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12m0 0L8 2.5M13 7l-5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </a>
    </motion.article>
  )
}

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <SectionHeader
          eyebrow="Bestsellers"
          title="Professional Essentials"
          link="https://global.kryolan.com/products"
          linkText="All Products"
        />
        <div className="products__grid">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
