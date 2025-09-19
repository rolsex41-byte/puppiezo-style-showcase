import { Card, CardContent } from "@/components/ui/card";

const FeaturedSection = () => {
  const mediaLogos = [
    {
      name: "Zee News",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop",
      description: "International Dog Day 2023 feature"
    },
    {
      name: "Hindustan Times", 
      logo: "https://via.placeholder.com/120x40/00B8D4/FFFFFF?text=HT",
      description: "Weekend planner feature"
    },
    {
      name: "Curly Tales",
      logo: "https://via.placeholder.com/120x40/FF6B35/FFFFFF?text=CURLY+TALES", 
      description: "Pet-friendly events coverage"
    },
    {
      name: "So Delhi",
      logo: "https://via.placeholder.com/120x40/00B8D4/FFFFFF?text=SO+DELHI",
      description: "Puppy yoga sessions feature"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured In</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mediaLogos.map((media, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img 
                    src={media.logo} 
                    alt={media.name}
                    className="mx-auto h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {media.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;