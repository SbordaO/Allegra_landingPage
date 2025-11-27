export function Hero() {
  return (
    <section id="hero" className="bg-pine-green text-white flex flex-col md:flex-row min-h-[600px] md:min-h-0 md:h-[600px]">
      {/* Left Column: Text */}
      <div className="w-full md:w-2/3 flex flex-col justify-center items-start text-left p-8 md:px-16 order-2 md:order-1">
        <h1 className="font-serif text-5xl md:text-8xl m-0 shadow-none">Calidez artesanal para las fiestas</h1>
        <p className="text-xl md:text-2xl mt-4 max-w-[600px]">Descubre accesorios, decoraciones y ropa acogedora hechos a mano por Allegra.</p>
      </div>
      {/* Right Column: Image */}
      <div 
        className="w-full md:w-1/3 h-64 md:h-auto bg-cover bg-center order-1 md:order-2"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
      </div>
    </section>
  )
}