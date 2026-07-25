import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-allegra-snow border-t border-allegra-beige/60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Imagen Taller */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-lift aspect-[4/3] bg-allegra-beige/40 border border-allegra-beige">
              <img 
                src="../../public/images/muneco_nieve" 
                alt="Manos artesanas en el taller de Allegra" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Marco decorativo de fondo */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border-2 border-allegra-gold/40 -z-10 hidden sm:block" />
          </div>

          {/* Columna Texto */}
          <div className="lg:col-span-6 animate-fade-in">
            <span className="text-xs font-semibold tracking-widest text-allegra-wine uppercase font-sans">
              Nuestra Historia
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-allegra-dark font-normal mt-2 mb-6 leading-tight">
              Manos que crean magia en cada detalle.
            </h2>
            <p className="text-base sm:text-lg text-allegra-green/80 font-sans leading-relaxed mb-6">
              Allegra nació del deseo de recuperar la autenticidad de las fiestas. Creemos en el valor de lo imperfecto, en las texturas que solo las fibras naturales pueden ofrecer y en el respeto por los tiempos de la artesanía tradicional.
            </p>
            <p className="text-base sm:text-lg text-allegra-green/80 font-sans leading-relaxed mb-8">
              Cada adorno es cortado, moldeado o ensamblado a mano en nuestro taller. Cuando te llevas una pieza de Allegra, llevas a casa una pequeña obra de arte destinada a acompañar los recuerdos de tu familia durante generaciones.
            </p>

            {/* Firma o sello de calidad */}
            <div className="flex items-center gap-4 pt-4 border-t border-allegra-beige/60">
              <div className="font-serif italic text-2xl text-allegra-green">Allegra Studio</div>
              <span className="text-allegra-gold">•</span>
              <span className="text-xs uppercase tracking-widest text-allegra-green/60 font-sans font-semibold">Diseño & Artesanía</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;