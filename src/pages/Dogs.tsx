import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, MapPin, Phone } from "lucide-react";

const Dogs = () => {
  const [likedDogs, setLikedDogs] = useState<number[]>([]);

  const dogBreeds = [
    {
      id: 1,
      name: "Golden Retriever",
      price: "₹25,000 - ₹45,000",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=200&fit=crop",
      breeder: "Mumbai Pet Paradise",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      age: "2 months",
      gender: "Male",
      vaccinated: true,
      features: ["Family Friendly", "Easy Training", "Good with Kids"]
    },
    {
      id: 2,
      name: "German Shepherd",
      price: "₹35,000 - ₹60,000",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=300&h=200&fit=crop",
      breeder: "Delhi Dog Haven",
      location: "Delhi, NCR",
      rating: 4.9,
      age: "3 months",
      gender: "Female",
      vaccinated: true,
      features: ["Guard Dog", "Intelligent", "Loyal"]
    },
    {
      id: 3,
      name: "Labrador Retriever",
      price: "₹20,000 - ₹40,000",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=200&fit=crop",
      breeder: "Bangalore Breeders",
      location: "Bangalore, Karnataka",
      rating: 4.7,
      age: "10 weeks",
      gender: "Male",
      vaccinated: true,
      features: ["Active", "Friendly", "Good with Pets"]
    },
    {
      id: 4,
      name: "Rottweiler",
      price: "₹30,000 - ₹55,000",
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=300&h=200&fit=crop",
      breeder: "Chennai Canine Club",
      location: "Chennai, Tamil Nadu",
      rating: 4.6,
      age: "12 weeks",
      gender: "Male",
      vaccinated: true,
      features: ["Protective", "Confident", "Fearless"]
    },
    {
      id: 5,
      name: "Siberian Husky",
      price: "₹40,000 - ₹70,000",
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=300&h=200&fit=crop",
      breeder: "Pune Pet Palace",
      location: "Pune, Maharashtra",
      rating: 4.8,
      age: "8 weeks",
      gender: "Female",
      vaccinated: true,
      features: ["Energetic", "Independent", "Cold Weather"]
    },
    {
      id: 6,
      name: "Beagle",
      price: "₹15,000 - ₹30,000",
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=200&fit=crop",
      breeder: "Hyderabad Hounds",
      location: "Hyderabad, Telangana",
      rating: 4.5,
      age: "9 weeks",
      gender: "Male",
      vaccinated: true,
      features: ["Gentle", "Friendly", "Curious"]
    },
    {
      id: 7,
      name: "Poodle",
      price: "₹25,000 - ₹50,000",
      image: "https://images.unsplash.com/photo-1616190494016-1b8146d5ac8d?w=300&h=200&fit=crop",
      breeder: "Kolkata Kennels",
      location: "Kolkata, West Bengal",
      rating: 4.7,
      age: "11 weeks",
      gender: "Female",
      vaccinated: true,
      features: ["Intelligent", "Hypoallergenic", "Active"]
    },
    {
      id: 8,
      name: "Bulldog",
      price: "₹35,000 - ₹65,000",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop",
      breeder: "Ahmedabad Animal House",
      location: "Ahmedabad, Gujarat",
      rating: 4.4,
      age: "10 weeks",
      gender: "Male",
      vaccinated: true,
      features: ["Calm", "Courageous", "Friendly"]
    },
    {
      id: 9,
      name: "Border Collie",
      price: "₹30,000 - ₹60,000",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=200&fit=crop",
      breeder: "Jaipur Pet Junction",
      location: "Jaipur, Rajasthan",
      rating: 4.9,
      age: "7 weeks",
      gender: "Female",
      vaccinated: true,
      features: ["Highly Intelligent", "Energetic", "Responsive"]
    }
  ];

  const toggleLike = (dogId: number) => {
    setLikedDogs(prev => 
      prev.includes(dogId) 
        ? prev.filter(id => id !== dogId)
        : [...prev, dogId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Find Your Perfect <span className="text-primary">Dog Companion</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of healthy, vaccinated puppies from verified breeders across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogBreeds.map((dog) => (
            <Card key={dog.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="relative p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={dog.image} 
                    alt={dog.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white ${
                      likedDogs.includes(dog.id) ? 'text-red-500' : 'text-gray-500'
                    }`}
                    onClick={() => toggleLike(dog.id)}
                  >
                    <Heart className={`h-4 w-4 ${likedDogs.includes(dog.id) ? 'fill-current' : ''}`} />
                  </Button>
                  {dog.vaccinated && (
                    <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
                      Vaccinated
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {dog.name}
                  </CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{dog.rating}</span>
                  </div>
                </div>
                
                <p className="text-2xl font-bold text-primary mb-4">{dog.price}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {dog.location}
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span><strong>Age:</strong> {dog.age}</span>
                    <span><strong>Gender:</strong> {dog.gender}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">By {dog.breeder}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {dog.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Link to={`/dogs/${dog.id}`}>
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

export default Dogs;