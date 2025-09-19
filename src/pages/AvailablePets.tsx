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

  const availablePets = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      type: "dog",
      price: "₹35,000",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=200&fit=crop",
      owner: "Mumbai Pet Center",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      age: "3 months",
      gender: "Male",
      vaccinated: true,
      features: ["Playful", "Trained", "Good with Kids"],
      description: "Buddy is a loving Golden Retriever puppy looking for his forever home."
    },
    {
      id: 2,
      name: "Whiskers",
      breed: "Persian Cat",
      type: "cat",
      price: "₹20,000",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=300&h=200&fit=crop",
      owner: "Delhi Cat Sanctuary",
      location: "Delhi, NCR",
      rating: 4.9,
      age: "2 months",
      gender: "Female",
      vaccinated: true,
      features: ["Calm", "House Trained", "Affectionate"],
      description: "Whiskers is a beautiful Persian cat with a gentle personality."
    },
    {
      id: 3,
      name: "Max",
      breed: "German Shepherd",
      type: "dog",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=300&h=200&fit=crop",
      owner: "Bangalore Dog House",
      location: "Bangalore, Karnataka",
      rating: 4.7,
      age: "4 months",
      gender: "Male",
      vaccinated: true,
      features: ["Guard Dog", "Intelligent", "Loyal"],
      description: "Max is a strong and intelligent German Shepherd ready for training."
    }
  ];

  const filteredPets = availablePets.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
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
                    <p className="text-sm text-muted-foreground">{pet.breed}</p>
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
                  <Button className="flex-1">Adopt Now</Button>
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