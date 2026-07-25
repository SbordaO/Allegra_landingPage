import React from 'react';

export interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onActionClick?: () => void;
}

export const CTA: React.FC<CTAProps> = ({
  title = "Haz de esta Navidad una celebración inolvidable",
  subtitle = "Cada una de nuestras piezas es creada a mano con paciencia, dedicación y materiales de la más alta calidad. Haz tu pedido con anticipación y dale a tu hogar el brillo que merece.",
  buttonText = "Solicitar Pieza Personalizada",
  onActionClick,
}) => {
  return (
    <section className="py-16 lg:py-24 bg-allegra-cream px-4 sm:px-6 lg:px-8">
      {/* Contenedor principal con fondo verde bosque oscuro y borde dorado sutil */}
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden bg-gradient-to-br from-allegra-green via-allegra-dark to-[#122e22] px-6 py-16 sm:px-12 sm:py-20 lg:p-24 shadow-lift border border-allegra-gold/20">
        
        {/* --- EFECTOS VISUALES DE FONDO (Resplandor cálido difuminado) --- */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-allegra-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-allegra-wine/20 rounded-full blur-3xl pointer-events-none" />

        {/* --- CONTENIDO PRINCIPAL (Alto Contraste Garantizado) --- */}
        <div className="relative z-10 max-w-3xl mx-auto text-center animate-fade-in">
          
          {/* Etiqueta / Badge superior con efecto Glassmorphism */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-allegra-snow/10 backdrop-blur-md border border-allegra-gold/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-allegra-gold animate-ping" />
            <span className="text-xs font-semibold tracking-widest text-allegra-goldLight uppercase font-sans">
              Edición Limitada de Temporada
            </span>
          </div>

          {/* Título en Serif, color Crema para legibilidad óptima */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-allegra-cream tracking-tight leading-tight mb-6">
            {title}
          </h2>

          {/* Subtítulo con opacidad controlada para jerarquía visual */}
          <p className="text-base sm:text-lg text-allegra-cream/80 font-sans font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* Botón de Acción Principal (Contraste inverso: Fondo dorado, texto oscuro) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onActionClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-allegra-gold text-allegra-dark font-sans font-semibold text-base tracking-wide transition-all duration-300 hover:bg-[#e0bc42] hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-allegra-snow"
            >
              {buttonText}
            </button>
          </div>

          {/* Detalle de confianza al pie del bloque */}
          <p className="mt-8 text-xs font-sans tracking-wide text-allegra-cream/60 uppercase">
            ✦ Envíos cuidados a todo el país • Garantía de artesanía premium ✦
          </p>

        </div>
      </div>
    </section>
  );
};

export default CTA;