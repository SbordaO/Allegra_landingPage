import React from 'react';
// 1. IMPORTACIÓN CORREGIDA AL INICIO DEL ARCHIVO
import heroImage from '../../public/images/hero-navidad.png'; 

export interface HeroProps {
  onExploreClick?: () => void;
  onAboutClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onAboutClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-allegra-cream py-16 lg:py-24">
      {/* --- EFECTOS VISUALES DE FONDO --- */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-allegra-gold/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-allegra-wine/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- COLUMNA IZQUIERDA: COPY & CTAS --- */}
          <div className="lg:col-span-7 text-center lg:text-left animate-fade-in z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-allegra-green/5 border border-allegra-green/15 mb-6">
              <span className="w-2 h-2 rounded-full bg-allegra-gold animate-ping" />
              <span className="text-xs md:text-sm font-medium tracking-wide text-allegra-green uppercase">
                Navidad Artesanal • Diseño Exclusivo
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-allegra-dark font-normal tracking-tight leading-[1.15] mb-6">
              Viste tu hogar de <br className="hidden sm:block" />
              <span className="italic font-medium text-allegra-wine drop-shadow-sm">
                calidez y elegancia
              </span>{' '}
              esta temporada.
            </h1>

            <p className="text-lg sm:text-xl text-allegra-green/80 font-normal max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-sans">
              Piezas decorativas hechas a mano, concebidas para transformar cada rincón en un refugio festivo inolvidable. Calidad premium que perdura en el tiempo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-allegra-green text-allegra-cream font-medium text-base tracking-wide transition-all duration-300 hover:bg-allegra-dark hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-allegra-gold/50 shadow-premium flex items-center justify-center gap-3 group"
              >
                <span>Explorar Colección</span>
                <svg className="w-4 h-4 text-allegra-gold transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={onAboutClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-allegra-green/30 text-allegra-green font-medium text-base tracking-wide transition-all duration-300 hover:bg-allegra-green/5 hover:border-allegra-green focus:outline-none flex items-center justify-center gap-2"
              >
                <span>El Valor de lo Hecho a Mano</span>
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-allegra-beige/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <p className="font-serif text-2xl lg:text-3xl font-semibold text-allegra-green">100%</p>
                <p className="text-xs text-allegra-green/70 uppercase tracking-wider mt-0.5">Artesanal</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl font-semibold text-allegra-wine">Edición</p>
                <p className="text-xs text-allegra-green/70 uppercase tracking-wider mt-0.5">Limitada</p>
              </div>
              <div>
                <p className="font-serif text-2xl lg:text-3xl font-semibold text-allegra-gold">4.9 ★</p>
                <p className="text-xs text-allegra-green/70 uppercase tracking-wider mt-0.5">Calidad</p>
              </div>
            </div>
          </div>

          {/* --- COLUMNA DERECHA: IMAGEN & COMPOSICIÓN VISUAL --- */}
          <div className="lg:col-span-5 relative animate-slide-up">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-allegra-gold/20 via-allegra-beige/40 to-allegra-wine/10 -z-10 transform rotate-1 transition-transform duration-500 hover:rotate-0" />
              
              <div className="relative rounded-xl overflow-hidden shadow-lift aspect-[4/5] bg-allegra-beige">
                {/* 2. VARIABLE APLICADA DIRECTAMENTE AL SRC */}
                <img
                  src={heroImage}
                  alt="Colección navideña artesanal de Allegra"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-allegra-dark/40 via-transparent to-transparent opacity-60" />
              </div>

              <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-8 glass-card p-4 sm:p-5 rounded-xl shadow-premium max-w-[240px] border border-allegra-gold/30 animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-allegra-wine/10 flex items-center justify-center text-allegra-wine font-serif text-xl shrink-0">
                    ✦
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-allegra-dark">
                      Detalle Exclusivo
                    </h4>
                    <p className="text-xs text-allegra-green/80 mt-0.5">
                      Acabados nobles con toques en dorado natural.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;