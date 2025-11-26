import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 flex items-center justify-center md:justify-between bg-white py-6 px-8 md:py-8 md:px-16 border-b">
      {/* Lights Overlay - On Top of Header */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-[url('/images/luces_navideñas.webp')] bg-no-repeat bg-top pointer-events-none z-20"
        style={{ backgroundSize: "auto 100%" }}
      ></div>

      {/* Desktop Navigation (Left) */}
      <nav className="hidden md:flex flex-1 justify-end relative z-30">
        <Button
          variant="ghost"
          asChild
          className="font-bold text-pine-green hover:text-deep-red text-base mx-4"
        >
          <a href="#hero">Inicio</a>
        </Button>
        <Button
          variant="ghost"
          asChild
          className="font-bold text-pine-green hover:text-deep-red text-base mx-4"
        >
          <a href="#products">Productos</a>
        </Button>
      </nav>

      {/* Logo */}
      <div className="font-serif text-3xl text-deep-red text-center md:mx-8 relative z-30">
        Allegra
      </div>

      {/* Desktop Navigation (Right) */}
      <nav className="hidden md:flex flex-1 justify-start relative z-30">
        <Button
          variant="ghost"
          asChild
          className="font-bold text-pine-green hover:text-deep-red text-base mx-4"
        >
          <a href="#about">Sobre Nosotros</a>
        </Button>
        <Button
          variant="ghost"
          asChild
          className="font-bold text-pine-green hover:text-deep-red text-base mx-4"
        >
          <a href="#contact">Contacto</a>
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-30">
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <nav className="fixed top-0 right-0 h-full bg-white w-64 flex flex-col items-center py-16">
            <Button
              variant="ghost"
              asChild
              className="font-bold text-pine-green hover:text-deep-red text-lg my-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#hero">Inicio</a>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="font-bold text-pine-green hover:text-deep-red text-lg my-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#products">Productos</a>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="font-bold text-pine-green hover:text-deep-red text-lg my-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#about">Sobre Nosotros</a>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="font-bold text-pine-green hover:text-deep-red text-lg my-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#contact">Contacto</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}