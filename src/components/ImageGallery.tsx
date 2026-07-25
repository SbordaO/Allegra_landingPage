import React from 'react';

export const ImageGallery: React.FC = () => {
  return (
    <section className="py-20 bg-allegra-cream px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-semibold tracking-widest text-allegra-gold uppercase">
            Inspiración
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-allegra-dark mt-2 mb-4">
            Rincones con Alma
          </h2>
          <p className="text-allegra-green/80 font-sans text-base sm:text-lg">
            Así cobran vida nuestras piezas en hogares reales. Calidez, luz y texturas naturales que abrazan tu espacio.
          </p>
          <div className="w-16 h-0.5 bg-allegra-wine mx-auto mt-6" />
        </div>

        {/* MASONRY GRID ESPECÍFICO (Estilo Revista) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[240px]">
          
          {/* Foto 1: Grande Izquierda */}
          <div className="md:col-span-7 row-span-2 relative rounded-2xl overflow-hidden shadow-premium group cursor-pointer bg-allegra-beige/30">
            <img 
              src="/images/galeria-1.jpg" 
              alt="Ambiente navideño Allegra" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-allegra-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 text-allegra-cream opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-xs uppercase tracking-widest text-allegra-goldLight">Mesa de Nochebuena</span>
              <p className="font-serif text-xl">Lino natural y resplandor de velas</p>
            </div>
          </div>

          {/* Foto 2: Arriba Derecha */}
          <div className="md:col-span-5 row-span-1 relative rounded-2xl overflow-hidden shadow-premium group cursor-pointer bg-allegra-beige/30">
            <img 
              src="/images/galeria-2.jpg" 
              alt="Detalle artesanal" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Foto 3: Abajo Derecha */}
          <div className="md:col-span-5 row-span-2 relative rounded-2xl overflow-hidden shadow-premium group cursor-pointer bg-allegra-beige/30">
            <img 
              src="/images/galeria-3.jpg" 
              alt="Corona de adviento en puerta" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-allegra-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 text-allegra-cream opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-xs uppercase tracking-widest text-allegra-goldLight">Bienvenida</span>
              <p className="font-serif text-xl">Coronas de pino y eucalipto</p>
            </div>
          </div>

          {/* Foto 4: Abajo Izquierda */}
          <div className="md:col-span-7 row-span-1 relative rounded-2xl overflow-hidden shadow-premium group cursor-pointer bg-allegra-beige/30">
            <img 
              src="/images/galeria-4.jpg" 
              alt="Regalos empaquetados" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ImageGallery;