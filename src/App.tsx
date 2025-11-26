import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ProductGrid } from "@/components/ProductGrid"
import { About } from "@/components/About"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"
import FadeInSection from "./components/FadeInSection"
import { ImageGallery } from "./components/ImageGallery"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FadeInSection>
          <ProductGrid />
        </FadeInSection>
        <FadeInSection>
          <ImageGallery />
        </FadeInSection>
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <CTA />
        </FadeInSection>
      </main>
      <Footer />
    </>
  )
}

export default App
