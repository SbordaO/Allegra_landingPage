import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="contact" className="py-24 px-16 bg-pine-green text-white text-center">
      <div className="container mx-auto">
        <h2 className="font-serif text-5xl text-white mb-8">Únete a la Familia Allegra</h2>
        <p className="text-xl max-w-[600px] mx-auto mb-8">
          Ponte en contacto para pedidos personalizados o explora nuestra colección completa para encontrar el regalo perfecto para tus seres queridos (¡o para ti!).
        </p>
        <Button asChild className="inline-block bg-soft-gold text-pine-green no-underline py-4 px-12 rounded-full font-bold transition-colors hover:bg-[#c8a02a]">
          <a href="https://www.instagram.com/astrid.ojeda.24/">Contactanos ahora</a>
        </Button>
      </div>
    </section>
  )
}