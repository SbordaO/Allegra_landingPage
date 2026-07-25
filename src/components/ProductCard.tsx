import React from 'react';

// Interfaz flexible para adaptarse a la estructura de tu proyecto
export interface ProductCardProps {
  id?: string | number;
  title: string;
  price: number | string;
  image: string;
  category?: string;
  badge?: string; // Ej: "Nuevo", "Edición Limitada", "Bestseller"
  onAddToCart?: (id?: string | number) => void;
  onClick?: (id?: string | number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  category = "Hecho a mano",
  badge,
  onAddToCart,
  onClick,
}) => {
  // Formateador de precio para asegurar una visualización elegante (ej. $45.00)
  const formattedPrice = typeof price === 'number' 
    ? `$${price.toFixed(2)}` 
    : price;

  return (
    <article 
      onClick={() => onClick && onClick(id)}
      className="group relative bg-allegra-snow rounded-2xl overflow-hidden border border-allegra-beige/50 shadow-premium transition-all duration-500 hover:shadow-lift hover:-translate-y-1.5 flex flex-col cursor-pointer"
    >
      {/* --- CONTENEDOR DE LA IMAGEN --- */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-allegra-beige/30">
        
        {/* Imagen con efecto Zoom Suave */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay sutil al hacer hover para resaltar el producto */}
        <div className="absolute inset-0 bg-allegra-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* --- BADGE / ETIQUETA FLOTANTE (Opcional) --- */}
        {badge && (
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-allegra-wine text-allegra-cream shadow-sm">
              {badge}
            </span>
          </div>
        )}

        {/* --- BOTÓN DE ACCIÓN RÁPIDA FLOTANTE --- */}
        {onAddToCart && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // Evita que se active el onClick de toda la tarjeta
              onAddToCart(id);
            }}
            aria-label="Añadir al carrito"
            className="absolute bottom-3.5 right-3.5 z-10 w-11 h-11 rounded-full bg-allegra-cream/95 text-allegra-green shadow-md flex items-center justify-center transition-all duration-300 hover:bg-allegra-green hover:text-allegra-cream hover:scale-110 focus:outline-none focus:ring-2 focus:ring-allegra-gold"
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        )}
      </div>

      {/* --- INFORMACIÓN DEL PRODUCTO --- */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-gradient-to-b from-allegra-snow to-allegra-cream/30">
        <div>
          {/* Categoría / Material */}
          <p className="text-[11px] font-sans font-semibold tracking-widest text-allegra-green/60 uppercase mb-1.5">
            {category}
          </p>

          {/* Título del producto */}
          <h3 className="font-serif text-lg font-normal text-allegra-dark group-hover:text-allegra-wine transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
        </div>

        {/* Precio y línea decorativa */}
        <div className="mt-4 pt-3 border-t border-allegra-beige/40 flex items-center justify-between">
          <span className="font-sans text-lg font-bold text-allegra-green">
            {formattedPrice}
          </span>
          <span className="text-xs font-sans font-medium text-allegra-gold group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
            Ver detalle →
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;