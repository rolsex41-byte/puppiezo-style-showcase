import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, MapPin, Phone } from "lucide-react";

const Cats = () => {
  const [likedCats, setLikedCats] = useState<number[]>([]);

  const catBreeds = [
    {
      id: 1,
      name: "Persian Cat",
      price: "₹15,000 - ₹35,000",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=300&h=200&fit=crop",
      breeder: "Mumbai Cat Center",
      location: "Mumbai, Maharashtra",
      rating: 4.9,
      age: "8 weeks",
      gender: "Female",
      vaccinated: true,
      features: ["Long Hair", "Calm", "Indoor Cat"]
    },
    {
      id: 2,
      name: "British Shorthair",
      price: "₹25,000 - ₹50,000",
      image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=300&h=200&fit=crop",
      breeder: "Delhi Feline Friends",
      location: "Delhi, NCR",
      rating: 4.8,
      age: "10 weeks",
      gender: "Male",
      vaccinated: true,
      features: ["Gentle", "Good with Kids", "Low Maintenance"]
    },
    {
      id: 3,
      name: "Maine Coon",
      price: "₹30,000 - ₹60,000",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=200&fit=crop",
      breeder: "Bangalore Cat Paradise",
      location: "Bangalore, Karnataka",
      rating: 4.7,
      age: "12 weeks",
      gender: "Female",
      vaccinated: true,
      features: ["Large Size", "Friendly", "Intelligent"]
    },
    {
      id: 4,
      name: "Ragdoll",
      price: "₹20,000 - ₹45,000",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=300&h=200&fit=crop",
      breeder: "Chennai Cat Corner",
      location: "Chennai, Tamil Nadu",
      rating: 4.6,
      age: "9 weeks",
      gender: "Male",
      vaccinated: true,
      features: ["Docile", "Affectionate", "Blue Eyes"]
    },
    {
      id: 5,
      name: "Scottish Fold",
      price: "₹35,000 - ₹60,000",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop",
      breeder: "Pune Purr Palace",
      location: "Pune, Maharashtra",
      rating: 4.8,
      age: "11 weeks",
      gender: "Female",
      vaccinated: true,
      features: ["Folded Ears", "Playful", "Social"]
    },
    {
      id: 6,
      name: "Siamese",
      price: "₹18,000 - ₹40,000",
      image: "https://images.unsplash.com/photo-1573824655653-592d84c5e9c4?w=300&h=200&fit=crop",
      breeder: "Hyderabad Cat House",
      location: "Hyderabad, Telangana",
      rating: 4.5,
      age: "7 weeks",
      gender: "Male",
      vaccinated: true,
      features: ["Vocal", "Intelligent", "Point Coloration"]
    },
    {
      id: 7,
      name: "Bengal",
      price: "₹40,000 - ₹80,000",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=300&h=200&fit=crop",
      breeder: "Kolkata Cat Kingdom",
      location: "Kolkata, West Bengal",
      rating: 4.9,
      age: "10 weeks",
      gender: "Female",
      vaccinated: true,
      features: ["Wild Pattern", "Energetic", "Athletic"]
    },
    {
      id: 8,
      name: "Russian Blue",
      price: "₹25,000 - ₹50,000",
      image: "https://images.unsplash.com/photo-1596492784531-6e4eb5ea9993?w=300&h=200&fit=crop",
      breeder: "Ahmedabad Feline Friends",
      location: "Ahmedabad, Gujarat",
      rating: 4.7,
      age: "8 weeks",
      gender: "Male",
      vaccinated: true,
      features: ["Blue Coat", "Quiet", "Shy"]
    },
    {
      id: 9,
      name: "Sphynx",
      price: "₹50,000 - ₹90,000",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=300&h=200&fit=crop",
      breeder: "Jaipur Cat Care",
      location: "Jaipur, Rajasthan",
      rating: 4.4,
      age: "12 weeks",
      gender: "Female",
      vaccinated: true,
      features: ["Hairless", "Warm", "Outgoing"]
    }
  ];

  const toggleLike = (catId: number) => {
    setLikedCats(prev => 
      prev.includes(catId) 
        ? prev.filter(id => id !== catId)
        : [...prev, catId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Discover Beautiful <span className="text-primary">Cat Breeds</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect feline companion from our trusted network of cat breeders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catBreeds.map((cat) => (
            <Card key={cat.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="relative p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white ${
                      likedCats.includes(cat.id) ? 'text-red-500' : 'text-gray-500'
                    }`}
                    onClick={() => toggleLike(cat.id)}
                  >
                    <Heart className={`h-4 w-4 ${likedCats.includes(cat.id) ? 'fill-current' : ''}`} />
                  </Button>
                  {cat.vaccinated && (
                    <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
                      Vaccinated
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {cat.name}
                  </CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{cat.rating}</span>
                  </div>
                </div>
                
                <p className="text-2xl font-bold text-primary mb-4">{cat.price}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {cat.location}
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span><strong>Age:</strong> {cat.age}</span>
                    <span><strong>Gender:</strong> {cat.gender}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">By {cat.breeder}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Link to={`/cats/${cat.id}`}>
                    <Button className="flex-1">View Details</Button>
                  </Link>
                  <Button variant="outline" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cats;