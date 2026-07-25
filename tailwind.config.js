/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        allegra: {
          green: "#1B4332",       // Verde oscuro bosque (Principal)
          wine: "#8B0000",        // Rojo vino (Acento cálido)
          gold: "#D4AF37",        // Dorado (Detalles premium)
          goldLight: "#F3E5AB",   // Dorado suave (Fondos y badges)
          snow: "#FAFAFA",        // Blanco nieve (Tarjetas y contrastes)
          cream: "#FDFBF7",       // Crema (Fondo general del sitio)
          beige: "#E5DCC3",       // Beige (Bordes y separadores cálidos)
          dark: "#0F281E",        // Variante extra oscura para textos
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(27, 67, 50, 0.08)',
        'lift': '0 20px 40px -15px rgba(27, 67, 50, 0.15)',
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}