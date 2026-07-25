import React from 'react';
// Si optaste por modularizar la tarjeta en ProductCard.tsx, la importas así:
import { ProductCard } from './ProductCard.tsx'; 

export interface ProductGridProps {
  products?: Array<{
    id: string | number;
    title: string;
    price: number | string;
    image: string;
    category?: string;
    badge?: string;
  }>;
  onAddToCart?: (id?: string | number) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products = [], 
  onAddToCart 
}) => {
  return (
    <section className="py-20 lg:py-28 bg-allegra-cream px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera Editorial Estilo Zara Home */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-semibold tracking-widest text-allegra-gold uppercase">
            Selección Exclusiva
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-allegra-dark mt-2 mb-4">
            Favoritos de la Temporada
          </h2>
          <p className="text-allegra-green/80 font-sans text-base sm:text-lg">
            Descubre las piezas más apreciadas por nuestros clientes. Diseños únicos creados para aportar luz y armonía a tu celebración.
          </p>
          <div className="w-16 h-0.5 bg-allegra-wine mx-auto mt-6" />
        </div>

        {/* Cuadrícula de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
              badge={product.badge}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;