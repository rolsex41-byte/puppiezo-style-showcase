import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";
import petProducts from "@/assets/pet-products.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      id: 1,
      image: heroPets,
      title: "Find Your Perfect Pet Companion",
      subtitle: "Discover loving pets waiting for their forever homes",
      cta: "Browse Pets",
      ctaAction: () => {
        const element = document.querySelector('#available-pets') as HTMLElement;
        window.scrollTo({ top: element?.offsetTop || 0, behavior: 'smooth' });
      }
    },
    {
      id: 2,
      image: petProducts,
      title: "Premium Pet Products & Care",
      subtitle: "Everything your furry friend needs for a happy life",
      cta: "Shop Now",
      ctaAction: () => window.location.href = '/shop'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-primary/10 to-primary-glow/20">
      {/* Hero Slides */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className="relative min-w-full h-full flex items-center justify-center"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
                {slide.subtitle}
              </p>
              <Button
                onClick={slide.ctaAction}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;