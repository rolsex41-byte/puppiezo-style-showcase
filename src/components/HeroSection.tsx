import { Button } from "@/components/ui/button";
import heroPets from "@/assets/hero-pets.jpg";
import petProducts from "@/assets/pet-products.jpg";

const HeroSection = () => {
  const bannerTexts = [
    "🐕 Premium Dog Breeds Available",
    "🐱 Beautiful Cats for Adoption", 
    "💝 Pet Products & Accessories",
    "🏥 Professional Veterinary Care",
    "🎓 Pet Training Services",
    "🛁 Grooming & Spa Services"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-glow min-h-screen flex items-center">
      {/* Scrolling Banner */}
      <div className="absolute top-0 left-0 w-full bg-accent text-accent-foreground py-2 overflow-hidden z-10">
        <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex">
              {bannerTexts.map((text, index) => (
                <span key={`${i}-${index}`} className="mx-8 font-medium">
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 mt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                India's Trusted
                <br />
                Pet Ecosystem
              </h1>
              <div className="inline-block">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Companions | Products | Services
                </Button>
              </div>
            </div>
          </div>

          {/* Right content - Hero pets and products with 16:9 ratio */}
          <div className="relative">
            {/* Main pet image with 16:9 aspect ratio */}
            <div className="relative z-10 aspect-video">
              <img 
                src={heroPets} 
                alt="Adorable pets - Dogs and Cats" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Products showcase - hidden on mobile for cleaner look */}
            <div className="hidden md:block absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 z-20 bg-white rounded-xl p-3 lg:p-4 shadow-xl">
              <img 
                src={petProducts} 
                alt="Pet care products" 
                className="w-60 h-16 lg:w-80 lg:h-24 object-cover rounded-lg"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 lg:w-24 lg:h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 lg:left-20 w-24 h-24 lg:w-40 lg:h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 lg:right-20 w-40 h-40 lg:w-60 lg:h-60 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default HeroSection;