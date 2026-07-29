import React from 'react';

export interface CategoryItem {
  id: string | number;
  title: string;
  subtitle?: string;
  image: string;
  link?: string;
}

export interface CategoriesProps {
  categories?: CategoryItem[];
  onCategoryClick?: (category: CategoryItem) => void;
}

// Categorías por defecto con temática navideña y artesanal
const DEFAULT_CATEGORIES: CategoryItem[] = [
  {
    id: 1,
    title: "Centros de Mesa & Coronas",
    subtitle: "Follaje natural y acabados eternos",
    image: "/images/categoria-coronas.png",
  },
  {
    id: 2,
    title: "Iluminación & Candelabros",
    subtitle: "Calidez en latón y cerámica",
    image: "/images/categoria-velas.png",
  },
  {
    id: 3,
    title: "Textiles de Lino & Algodón",
    subtitle: "Texturas orgánicas para tu mesa",
    image: "/images/categoria-textiles.png",
  }
];

export const Categories: React.FC<CategoriesProps> = ({
  categories = DEFAULT_CATEGORIES,
  onCategoryClick,
}) => {
  return (
    <section className="py-20 bg-allegra-cream px-4 sm:px-6 lg:px-8 border-t border-allegra-beige/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest text-allegra-gold uppercase">
              Colecciones
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-allegra-dark mt-1">
              Explora por Universo
            </h2>
          </div>
          <p className="text-allegra-green/70 font-sans text-sm sm:text-base mt-2 md:mt-0 max-w-md">
            Cada rincón de tu casa merece una atmósfera propia. Descubre nuestras piezas organizadas según el alma de tu espacio.
          </p>
        </div>

        {/* Cuadrícula Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <article
              key={cat.id}
              onClick={() => onCategoryClick && onCategoryClick(cat)}
              className="group relative h-96 rounded-2xl overflow-hidden shadow-premium cursor-pointer transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              {/* Imagen de fondo con zoom suave */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Degradado para legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-allegra-dark/80 via-allegra-dark/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Contenido tipográfico flotante */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
                <span className="text-allegra-goldLight text-xs tracking-widest uppercase font-sans mb-1 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Descubrir colección →
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-allegra-cream font-normal leading-snug">
                  {cat.title}
                </h3>
                {cat.subtitle && (
                  <p className="text-sm text-allegra-cream/80 font-sans mt-1 line-clamp-1">
                    {cat.subtitle}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;