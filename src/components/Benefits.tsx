import React from 'react';

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-allegra-snow border-y border-allegra-beige/60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* --- MANIFIESTO DE MARCA (Estilo Editorial) --- */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <span className="text-xs font-semibold tracking-widest text-allegra-wine uppercase">
            El Alma de Allegra
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-allegra-dark font-normal mt-3 mb-6 leading-tight">
            "No creamos simples adornos; tejemos recuerdos para las fiestas que importan."
          </h2>
          <p className="text-base sm:text-lg text-allegra-green/80 font-sans leading-relaxed">
            En un mundo de producción masiva, en Allegra apostamos por la pausa, las manos expertas y los materiales honestos. Cada pieza que llega a tu puerta lleva consigo horas de taller, aroma a madera y el calor de una tradición rediseñada para el hogar contemporáneo.
          </p>
          <div className="w-12 h-0.5 bg-allegra-gold mx-auto mt-8" />
        </div>

        {/* --- PILARES DE BENEFICIOS (Grid 3 Columnas) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pt-8">
          
          {/* Beneficio 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl transition-colors duration-300 hover:bg-allegra-cream/80">
            <div className="w-14 h-14 rounded-full bg-allegra-green/5 border border-allegra-green/15 flex items-center justify-center text-allegra-green mb-6 shadow-sm">
              <svg className="w-6 h-6 stroke-allegra-green" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-allegra-dark font-medium mb-2">
              Diseño de Edición Limitada
            </h3>
            <p className="text-sm text-allegra-green/75 font-sans leading-relaxed">
              Colecciones exclusivas y series numeradas para garantizar que tu decoración mantenga un carácter único y original.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl transition-colors duration-300 hover:bg-allegra-cream/80">
            <div className="w-14 h-14 rounded-full bg-allegra-wine/5 border border-allegra-wine/15 flex items-center justify-center text-allegra-wine mb-6 shadow-sm">
              <svg className="w-6 h-6 stroke-allegra-wine" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-allegra-dark font-medium mb-2">
              100% Hecho a Mano
            </h3>
            <p className="text-sm text-allegra-green/75 font-sans leading-relaxed">
              Trabajamos de la mano con artesanos locales, utilizando fibras naturales, cerámicas horneadas y ceras botánicas.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl transition-colors duration-300 hover:bg-allegra-cream/80">
            <div className="w-14 h-14 rounded-full bg-allegra-gold/10 border border-allegra-gold/30 flex items-center justify-center text-allegra-gold mb-6 shadow-sm">
              <svg className="w-6 h-6 stroke-allegra-gold" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-allegra-dark font-medium mb-2">
              Empaque para Regalo
            </h3>
            <p className="text-sm text-allegra-green/75 font-sans leading-relaxed">
              Protegemos cada pieza con embalaje ecológico de alta resistencia, preparado y perfumado para sorprender al abrirlo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Benefits;