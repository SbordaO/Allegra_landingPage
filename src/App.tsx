import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Benefits } from "@/components/Benefits"       // <- Agregado
import { Categories } from "@/components/Categories"   // <- Agregado
import { ProductGrid } from "@/components/ProductGrid"
import { ImageGallery } from "@/components/ImageGallery" // <- Normalizado a @/
import { About } from "@/components/About"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"
import FadeInSection from "@/components/FadeInSection" // <- Normalizado a @/

function App() {
  return (
    <>
      <Header />
      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. BENEFITS: Por qué elegirnos / Garantías */}
        <div id="manifiesto">
          <FadeInSection>
            <Benefits />
          </FadeInSection>
        </div>

        {/* 3. CATEGORIES: Colecciones visuales */}
        <div id="colecciones">
          <FadeInSection>
            <Categories />
          </FadeInSection>
        </div>

        {/* 4. IMAGE GALLERY: Estilo Pinterest */}
        <div id="galeria">
          <FadeInSection>
            <ImageGallery />
          </FadeInSection>
        </div>

        {/* 5. PRODUCT GRID: Catálogo transaccional */}
        <div id="catalogo">
          <FadeInSection>
            <ProductGrid />
          </FadeInSection>
        </div>

        {/* 6. ABOUT: Historia de la marca */}
        <div id="nosotros">
          <FadeInSection>
            <About />
          </FadeInSection>
        </div>

        {/* 7. CTA: Cierre emocional */}
        <FadeInSection>
          <CTA />
        </FadeInSection>
      </main>
      <Footer />
    </>
  )
}

export default App