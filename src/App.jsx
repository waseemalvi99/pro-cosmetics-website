import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Products from './components/Products'
import Categories from './components/Categories'
import Academy from './components/Academy'
import Journal from './components/Journal'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Categories />
        <Academy />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
