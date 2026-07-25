import React from 'react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-allegra-dark text-allegra-cream/80 pt-16 pb-12 border-t border-allegra-gold/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-allegra-cream/10">
          
          {/* Columna 1: Marca (2 espacios) */}
          <div className="lg:col-span-2">
            <a href="#" className="font-serif text-3xl font-bold tracking-tight text-allegra-cream">
              Allegra<span className="text-allegra-gold">.</span>
            </a>
            <p className="mt-4 text-sm text-allegra-cream/70 max-w-sm leading-relaxed">
              Transformamos la temporada navideña con piezas decorativas hechas a mano. Calidad noble, diseño atemporal y elegancia para tu hogar.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-allegra-goldLight tracking-wider uppercase font-semibold">
              <span>✦ Envío Seguro</span>
              <span>•</span>
              <span>✦ Artesanal</span>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="font-serif text-lg text-allegra-cream font-medium mb-4">Explorar</h4>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => scrollTo('colecciones')} className="hover:text-allegra-gold transition-colors">Colecciones</button></li>
              <li><button onClick={() => scrollTo('catalogo')} className="hover:text-allegra-gold transition-colors">Catálogo Navideño</button></li>
              <li><button onClick={() => scrollTo('galeria')} className="hover:text-allegra-gold transition-colors">Galería de Hogares</button></li>
              <li><button onClick={() => scrollTo('nosotros')} className="hover:text-allegra-gold transition-colors">Nuestra Historia</button></li>
            </ul>
          </div>

          {/* Columna 3: Atención al Cliente */}
          <div>
            <h4 className="font-serif text-lg text-allegra-cream font-medium mb-4">Ayuda & Pedidos</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-allegra-gold transition-colors">Envíos y Entregas</a></li>
              <li><a href="#" className="hover:text-allegra-gold transition-colors">Cuidados del Producto</a></li>
              <li><a href="#" className="hover:text-allegra-gold transition-colors">Pedidos Personalizados</a></li>
              <li><a href="#" className="hover:text-allegra-gold transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-serif text-lg text-allegra-cream font-medium mb-4">Contacto</h4>
            <p className="text-sm text-allegra-cream/70 leading-relaxed">
              ¿Dudas o pedidos especiales? Escríbenos a nuestro taller:
            </p>
            <a href="mailto:hola@allegra.com" className="inline-block mt-3 text-sm font-semibold text-allegra-gold hover:underline">
              hola@allegra.com
            </a>
            <div className="mt-4 text-xs text-allegra-cream/50">
              Lunes a Viernes • 9:00 - 18:00
            </div>
          </div>

        </div>

        {/* Copyright y Redes Sociales */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-allegra-cream/50 gap-4">
          <p>© {new Date().getFullYear()} Allegra Studio. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-allegra-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-allegra-gold transition-colors">Pinterest</a>
            <a href="#" className="hover:text-allegra-gold transition-colors">WhatsApp</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;