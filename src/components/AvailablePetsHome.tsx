import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";

const AvailablePetsHome = () => {
  const featuredPets = [
    {
      id: 1,
      name: "Luna",
      breed: "Golden Retriever",
      age: "2 years",
      location: "Mumbai",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
      rating: 4.9,
      isVerified: true,
      type: "Dog"
    },
    {
      id: 2,
      name: "Milo", 
      breed: "Persian Cat",
      age: "1 year",
      location: "Delhi",
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
      rating: 4.8,
      isVerified: true,
      type: "Cat"
    },
    {
      id: 3,
      name: "Buddy",
      breed: "Labrador",
      age: "6 months",
      location: "Bangalore",
      price: "₹35,000",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
      rating: 4.9,
      isVerified: true,
      type: "Dog"
    },
    {
      id: 4,
      name: "Whiskers",
      breed: "British Shorthair",
      age: "8 months",
      location: "Chennai",
      price: "₹30,000", 
      image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=400&h=300&fit=crop",
      rating: 4.7,
      isVerified: true,
      type: "Cat"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Available Pets Ready for Adoption
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect companion from our verified collection of healthy, happy pets
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max">
            {featuredPets.map((pet) => (
              <Card 
                key={pet.id}
                className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/30 cursor-pointer min-w-[320px] flex-shrink-0"
              >
                <div className="relative">
                  <img 
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant={pet.isVerified ? "default" : "secondary"} className="bg-primary text-primary-foreground">
                      Verified
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-white/90 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {pet.name}
                      </CardTitle>
                      <p className="text-muted-foreground">{pet.breed}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{pet.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{pet.age}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{pet.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">
                      {pet.price}
                    </div>
                    <Badge variant="outline">{pet.type}</Badge>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/available-pets">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              View All Available Pets
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AvailablePetsHome;