export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center min-h-[600px] md:min-h-0 md:h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text readability */}
      {/* Content Column: Text */}
      <div className="relative z-10 text-white text-center p-8 md:px-16 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-8xl m-0 shadow-none">Calidez artesanal para las fiestas</h1>
        <p className="text-xl md:text-2xl mt-4">Descubre accesorios, decoraciones y ropa acogedora hechos a mano por Allegra.</p>
      </div>
    </section>
  )
}