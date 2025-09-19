import { Button } from "@/components/ui/button";
import heroPets from "@/assets/hero-pets.jpg";
import petProducts from "@/assets/pet-products.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-glow min-h-[100vh] flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                India's Trusted
                <br />
                Pet Ecosystem
              </h1>
              <div className="inline-block">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Companions | Products | Services
                </Button>
              </div>
            </div>
          </div>

          {/* Right content - Hero pets and products */}
          <div className="relative">
            {/* Main pet image */}
            <div className="relative z-10">
              <img 
                src={heroPets} 
                alt="Adorable pets - Dogs and Cats" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Products showcase */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-white rounded-xl p-4 shadow-xl">
              <img 
                src={petProducts} 
                alt="Pet care products" 
                className="w-80 h-24 object-cover rounded-lg"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default HeroSection;