import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Products from './components/Products.jsx'
import Features from './components/Features.jsx'
import CallToAction from './components/CallToAction.jsx'
import Footer from './components/Footer.jsx'

/* App — это «корень» приложения. Он не содержит логики,
   а просто собирает секции лендинга по порядку, как конструктор */
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export default App
