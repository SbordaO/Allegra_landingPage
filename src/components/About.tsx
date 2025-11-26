export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-8 md:px-16 bg-warm-cream flex flex-col md:flex-row items-center gap-8 md:gap-16">
      <div className="flex-1 order-2 md:order-1">
        <h2 className="font-serif text-4xl md:text-5xl text-deep-red mb-8">Sobre Allegra</h2>
        <p className="leading-relaxed text-lg">
          Allegra nació de la pasión por crear hermosos artículos hechos a mano que brindan calidez y alegría a la temporada navideña. Cada pieza está hecha con amor, utilizando técnicas tradicionales y los mejores materiales. Creemos en la magia de una Navidad hecha a mano y esperamos que nuestras creaciones se conviertan en una parte preciada de las tradiciones de su familia.
        </p>
      </div>
      <div className="flex-1 w-full h-64 md:h-[400px] bg-[url('/images/tejido_mano.png')] bg-center bg-cover bg-no-repeat rounded-xl order-1 md:order-2"></div>
    </section>
  )
}