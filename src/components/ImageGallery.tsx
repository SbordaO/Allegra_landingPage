import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const images = ['/images/carrete1.png', '/images/carrete2.png', '/images/carrete3.png', '/images/carrete4.png'];

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto w-full max-w-[1440px] px-8 md:px-16">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-12 md:mb-16 text-deep-red">Galería de Momentos</h2>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-4xl mb-4 h-[400px]">
            <img src={images[currentIndex]} alt="Selected" className="w-full h-[400px] object-cover rounded-lg shadow-lg" />
            <div className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2">
              <button onClick={goToPrevious} className="bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition">
                <ChevronLeft className="text-pine-green" />
              </button>
            </div>
            <div className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2">
              <button onClick={goToNext} className="bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition">
                <ChevronRight className="text-pine-green" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 md:w-24 md:h-24 object-cover rounded-md cursor-pointer border-4 ${currentIndex === index ? 'border-pine-green' : 'border-transparent'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
