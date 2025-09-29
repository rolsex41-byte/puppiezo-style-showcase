import { Card, CardContent } from "@/components/ui/card";
const FeaturedSection = () => {
  const mediaLogos = [{
    name: "Zee News",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop",
    description: "International Dog Day 2023 feature"
  }, {
    name: "Hindustan Times",
    logo: "https://via.placeholder.com/120x40/00B8D4/FFFFFF?text=HT",
    description: "Weekend planner feature"
  }, {
    name: "Curly Tales",
    logo: "https://via.placeholder.com/120x40/FF6B35/FFFFFF?text=CURLY+TALES",
    description: "Pet-friendly events coverage"
  }, {
    name: "So Delhi",
    logo: "https://via.placeholder.com/120x40/00B8D4/FFFFFF?text=SO+DELHI",
    description: "Puppy yoga sessions feature"
  }];
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Featured In Media
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Petzee has been featured across leading media platforms for our innovative pet ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mediaLogos.map((media, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <img
                  src={media.logo}
                  alt={media.name}
                  className="h-10 mx-auto mb-3 object-contain"
                />
                <h3 className="font-semibold text-sm mb-1">{media.name}</h3>
                <p className="text-xs text-muted-foreground">{media.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedSection;