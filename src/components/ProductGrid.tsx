import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ImageModal from "@/components/ui/ImageModal"
const products = [
  {
    title: "Chaleco tejido",
    description: "Mantente abrigado con nuestros Chalecos tejidos a mano.",
    image: "/images/tejido_mano.png",
  },
  {
    title: "Muñeco de nieve",
    description: "Adornos únicos para un árbol mágico.",
    image: "/images/muneco_nieve.png",
  },
  {
    title: "Saco tejido",
    description: "Saco estilo tipo capa para la temporada de frío.",
    image: "/images/saco.png",
  },
]

export function ProductGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto w-full max-w-[1440px] px-16">
        <h2 className="font-serif text-5xl text-center mb-16 text-deep-red">Nuestra Colección</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="group overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="p-0 relative">
                <img src={product.image} alt={product.title} className="rounded-t-xl w-full h-[300px] object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={() => setSelectedImage(product.image)} className="text-white bg-pine-green px-4 py-2 rounded">
                    Ver Imagen
                  </button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-serif text-2xl mb-2">{product.title}</CardTitle>
                <p className="text-pine-green">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {selectedImage && <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
    </section>
  )
}