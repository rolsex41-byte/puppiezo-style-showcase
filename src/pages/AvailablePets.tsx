import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Star, MapPin, Phone, Search, Filter } from "lucide-react";
import { useState } from "react";

const AvailablePets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [likedPets, setLikedPets] = useState<number[]>([]);

  // Dogs from Dogs page
  const dogs = [
    { id: 1, name: "Golden Retriever", price: "₹25,000 - ₹45,000", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=200&fit=crop", breeder: "Mumbai Pet Paradise", location: "Mumbai, Maharashtra", rating: 4.8, age: "2 months", gender: "Male", vaccinated: true, features: ["Family Friendly", "Easy Training", "Good with Kids"] },
    { id: 2, name: "German Shepherd", price: "₹35,000 - ₹60,000", image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=300&h=200&fit=crop", breeder: "Delhi Dog Haven", location: "Delhi, NCR", rating: 4.9, age: "3 months", gender: "Female", vaccinated: true, features: ["Guard Dog", "Intelligent", "Loyal"] },
    { id: 3, name: "Labrador Retriever", price: "₹20,000 - ₹40,000", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=200&fit=crop", breeder: "Bangalore Breeders", location: "Bangalore, Karnataka", rating: 4.7, age: "10 weeks", gender: "Male", vaccinated: true, features: ["Active", "Friendly", "Good with Pets"] },
    { id: 4, name: "Rottweiler", price: "₹30,000 - ₹55,000", image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=300&h=200&fit=crop", breeder: "Chennai Canine Club", location: "Chennai, Tamil Nadu", rating: 4.6, age: "12 weeks", gender: "Male", vaccinated: true, features: ["Protective", "Confident", "Fearless"] },
    { id: 5, name: "Siberian Husky", price: "₹40,000 - ₹70,000", image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=300&h=200&fit=crop", breeder: "Pune Pet Palace", location: "Pune, Maharashtra", rating: 4.8, age: "8 weeks", gender: "Female", vaccinated: true, features: ["Energetic", "Independent", "Cold Weather"] },
    { id: 6, name: "Beagle", price: "₹15,000 - ₹30,000", image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=200&fit=crop", breeder: "Hyderabad Hounds", location: "Hyderabad, Telangana", rating: 4.5, age: "9 weeks", gender: "Male", vaccinated: true, features: ["Gentle", "Friendly", "Curious"] },
    { id: 7, name: "Poodle", price: "₹25,000 - ₹50,000", image: "https://images.unsplash.com/photo-1616190494016-1b8146d5ac8d?w=300&h=200&fit=crop", breeder: "Kolkata Kennels", location: "Kolkata, West Bengal", rating: 4.7, age: "11 weeks", gender: "Female", vaccinated: true, features: ["Intelligent", "Hypoallergenic", "Active"] },
    { id: 8, name: "Bulldog", price: "₹35,000 - ₹65,000", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop", breeder: "Ahmedabad Animal House", location: "Ahmedabad, Gujarat", rating: 4.4, age: "10 weeks", gender: "Male", vaccinated: true, features: ["Calm", "Courageous", "Friendly"] },
    { id: 9, name: "Border Collie", price: "₹30,000 - ₹60,000", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=200&fit=crop", breeder: "Jaipur Pet Junction", location: "Jaipur, Rajasthan", rating: 4.9, age: "7 weeks", gender: "Female", vaccinated: true, features: ["Highly Intelligent", "Energetic", "Responsive"] }
  ];

  // Cats from Cats page
  const cats = [
    { id: 1, name: "Persian Cat", price: "₹15,000 - ₹35,000", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=300&h=200&fit=crop", breeder: "Mumbai Cat Center", location: "Mumbai, Maharashtra", rating: 4.9, age: "8 weeks", gender: "Female", vaccinated: true, features: ["Long Hair", "Calm", "Indoor Cat"] },
    { id: 2, name: "British Shorthair", price: "₹25,000 - ₹50,000", image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=300&h=200&fit=crop", breeder: "Delhi Feline Friends", location: "Delhi, NCR", rating: 4.8, age: "10 weeks", gender: "Male", vaccinated: true, features: ["Gentle", "Good with Kids", "Low Maintenance"] },
    { id: 3, name: "Maine Coon", price: "₹30,000 - ₹60,000", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=200&fit=crop", breeder: "Bangalore Cat Paradise", location: "Bangalore, Karnataka", rating: 4.7, age: "12 weeks", gender: "Female", vaccinated: true, features: ["Large Size", "Friendly", "Intelligent"] },
    { id: 4, name: "Ragdoll", price: "₹20,000 - ₹45,000", image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=300&h=200&fit=crop", breeder: "Chennai Cat Corner", location: "Chennai, Tamil Nadu", rating: 4.6, age: "9 weeks", gender: "Male", vaccinated: true, features: ["Docile", "Affectionate", "Blue Eyes"] },
    { id: 5, name: "Scottish Fold", price: "₹35,000 - ₹60,000", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop", breeder: "Pune Purr Palace", location: "Pune, Maharashtra", rating: 4.8, age: "11 weeks", gender: "Female", vaccinated: true, features: ["Folded Ears", "Playful", "Social"] },
    { id: 6, name: "Siamese", price: "₹18,000 - ₹40,000", image: "https://images.unsplash.com/photo-1573824655653-592d84c5e9c4?w=300&h=200&fit=crop", breeder: "Hyderabad Cat House", location: "Hyderabad, Telangana", rating: 4.5, age: "7 weeks", gender: "Male", vaccinated: true, features: ["Vocal", "Intelligent", "Point Coloration"] },
    { id: 7, name: "Bengal", price: "₹40,000 - ₹80,000", image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=300&h=200&fit=crop", breeder: "Kolkata Cat Kingdom", location: "Kolkata, West Bengal", rating: 4.9, age: "10 weeks", gender: "Female", vaccinated: true, features: ["Wild Pattern", "Energetic", "Athletic"] },
    { id: 8, name: "Russian Blue", price: "₹25,000 - ₹50,000", image: "https://images.unsplash.com/photo-1596492784531-6e4eb5ea9993?w=300&h=200&fit=crop", breeder: "Ahmedabad Feline Friends", location: "Ahmedabad, Gujarat", rating: 4.7, age: "8 weeks", gender: "Male", vaccinated: true, features: ["Blue Coat", "Quiet", "Shy"] },
    { id: 9, name: "Sphynx", price: "₹50,000 - ₹90,000", image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=300&h=200&fit=crop", breeder: "Jaipur Cat Care", location: "Jaipur, Rajasthan", rating: 4.4, age: "12 weeks", gender: "Female", vaccinated: true, features: ["Hairless", "Warm", "Outgoing"] }
  ];

  // Combine all pets
  const availablePets = [
    ...dogs.map(dog => ({ ...dog, type: "dog", owner: dog.breeder, description: `${dog.name} is a wonderful companion looking for a loving home.` })),
    ...cats.map(cat => ({ ...cat, type: "cat", owner: cat.breeder, description: `${cat.name} is a beautiful feline ready for adoption.` }))
  ];

  const filteredPets = availablePets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || pet.type === selectedType;
    return matchesSearch && matchesType;
  });

  const toggleLike = (petId: number) => {
    setLikedPets(prev => 
      prev.includes(petId) 
        ? prev.filter(id => id !== petId)
        : [...prev, petId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Available Pets</span> Ready for Adoption
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect companion from our collection of healthy, vaccinated pets
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search pets by name or breed..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Select pet type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pets</SelectItem>
                <SelectItem value="dog">Dogs</SelectItem>
                <SelectItem value="cat">Cats</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPets.map((pet) => (
            <Card key={pet.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="relative p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={pet.image} 
                    alt={pet.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white ${
                      likedPets.includes(pet.id) ? 'text-red-500' : 'text-gray-500'
                    }`}
                    onClick={() => toggleLike(pet.id)}
                  >
                    <Heart className={`h-4 w-4 ${likedPets.includes(pet.id) ? 'fill-current' : ''}`} />
                  </Button>
                  {pet.vaccinated && (
                    <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
                      Vaccinated
                    </Badge>
                  )}
                  <Badge className="absolute bottom-2 left-2 bg-primary">
                    {pet.type === 'dog' ? 'Dog' : 'Cat'}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {pet.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{pet.type === 'dog' ? 'Dog' : 'Cat'}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{pet.rating}</span>
                  </div>
                </div>
                
                <p className="text-2xl font-bold text-primary mb-3">{pet.price}</p>
                
                <p className="text-sm text-muted-foreground mb-4">{pet.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {pet.location}
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span><strong>Age:</strong> {pet.age}</span>
                    <span><strong>Gender:</strong> {pet.gender}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">By {pet.owner}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {pet.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1" 
                    onClick={() => {
                      const message = `I am interested about this pet, ${pet.name}`;
                      const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Adopt Now
                  </Button>
                  <Button variant="outline" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No pets found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedType("all");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default AvailablePets;