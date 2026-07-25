import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-allegra-cream/90 backdrop-blur-md shadow-sm py-4 border-b border-allegra-beige/40' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-allegra-dark hover:text-allegra-wine transition-colors">
            Allegra<span className="text-allegra-gold text-lg">.</span>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-allegra-green/80">
            <button onClick={() => scrollTo('colecciones')} className="hover:text-allegra-wine transition-colors">Colecciones</button>
            <button onClick={() => scrollTo('catalogo')} className="hover:text-allegra-wine transition-colors">Catálogo</button>
            <button onClick={() => scrollTo('galeria')} className="hover:text-allegra-wine transition-colors">Galería</button>
            <button onClick={() => scrollTo('nosotros')} className="hover:text-allegra-wine transition-colors">Sobre Allegra</button>
          </nav>

          {/* Acciones (Contacto / Carrito) */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scrollTo('catalogo')}
              className="px-5 py-2 rounded-full bg-allegra-green text-allegra-cream font-sans text-xs font-semibold tracking-wider uppercase transition-all hover:bg-allegra-dark hover:shadow-md"
            >
              Ver Catálogo
            </button>
          </div>

          {/* Botón Menú Móvil */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-allegra-green p-2 focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-allegra-cream/95 backdrop-blur-lg border-b border-allegra-beige/50 px-6 py-6 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-4 text-center font-serif text-lg text-allegra-dark">
            <button onClick={() => scrollTo('colecciones')} className="py-2 hover:text-allegra-wine">Colecciones</button>
            <button onClick={() => scrollTo('catalogo')} className="py-2 hover:text-allegra-wine">Catálogo</button>
            <button onClick={() => scrollTo('galeria')} className="py-2 hover:text-allegra-wine">Galería</button>
            <button onClick={() => scrollTo('nosotros')} className="py-2 hover:text-allegra-wine">Sobre Allegra</button>
            <div className="pt-4 border-t border-allegra-beige/40">
              <button 
                onClick={() => scrollTo('catalogo')}
                className="w-full py-3 rounded-full bg-allegra-green text-allegra-cream font-sans text-sm font-semibold uppercase tracking-wider shadow-sm"
              >
                Ver Catálogo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;