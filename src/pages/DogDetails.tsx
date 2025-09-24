import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Star, MapPin, Phone, ArrowLeft, Calendar, Shield, Award } from "lucide-react";

const DogDetails = () => {
  const { id } = useParams();

  const allDogs = [
    {
      id: 1,
      name: "Golden Retriever",
      price: "₹25,000 - ₹45,000",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=400&fit=crop",
      breeder: "Mumbai Pet Paradise",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      age: "2 months",
      gender: "Male",
      vaccinated: true,
      features: ["Family Friendly", "Easy Training", "Good with Kids"],
      description: "Golden Retrievers are known for their friendly and tolerant attitude. They are great family pets and are particularly good with children. They are intelligent, easy to train, and have a gentle mouth for retrieving game.",
      weight: "25-35 kg (adult)",
      height: "51-61 cm",
      lifespan: "10-12 years",
      temperament: "Friendly, Intelligent, Devoted",
      healthTests: ["Hip Dysplasia", "Elbow Dysplasia", "Eye Clearance"],
      breederContact: "+91 98765 43210",
      pedigree: "KCI Registered"
    },
    {
      id: 2,
      name: "German Shepherd",
      price: "₹35,000 - ₹60,000",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&h=400&fit=crop",
      breeder: "Delhi Dog Haven",
      location: "Delhi, NCR",
      rating: 4.9,
      age: "3 months",
      gender: "Female",
      vaccinated: true,
      features: ["Guard Dog", "Intelligent", "Loyal"],
      description: "German Shepherds are confident, courageous, and smart working dogs that are extremely versatile. They are loyal to their family and can be reserved with strangers but not aggressive.",
      weight: "22-40 kg (adult)",
      height: "55-65 cm",
      lifespan: "9-13 years",
      temperament: "Confident, Courageous, Smart",
      healthTests: ["Hip Dysplasia", "Elbow Dysplasia", "Degenerative Myelopathy"],
      breederContact: "+91 98765 43211",
      pedigree: "KCI Registered"
    },
    {
      id: 3,
      name: "Labrador Retriever",
      price: "₹20,000 - ₹40,000",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=400&fit=crop",
      breeder: "Bangalore Breeders",
      location: "Bangalore, Karnataka",
      rating: 4.7,
      age: "10 weeks",
      gender: "Male",
      vaccinated: true,
      features: ["Active", "Friendly", "Good with Pets"],
      description: "Labs are friendly, outgoing, and active companions. They are famously friendly and outgoing, and are happy to see everyone they meet. Their easy-going nature makes them excellent family pets.",
      weight: "25-36 kg (adult)",
      height: "54-62 cm",
      lifespan: "10-12 years",
      temperament: "Outgoing, Even Tempered, Gentle",
      healthTests: ["Hip Dysplasia", "Elbow Dysplasia", "Progressive Retinal Atrophy"],
      breederContact: "+91 98765 43212",
      pedigree: "KCI Registered"
    }
  ];

  const dog = allDogs.find(d => d.id === parseInt(id || "1"));

  if (!dog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Dog not found</h1>
          <Link to="/dogs">
            <Button>Back to Dogs</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Link to="/dogs" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Dogs
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <img 
              src={dog.image} 
              alt={dog.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold text-foreground">{dog.name}</h1>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{dog.rating}</span>
                </div>
              </div>
              <p className="text-2xl font-bold text-primary">{dog.price}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {dog.features.map((feature, index) => (
                <Badge key={index} variant="secondary">
                  {feature}
                </Badge>
              ))}
              {dog.vaccinated && (
                <Badge className="bg-green-500 hover:bg-green-600">
                  Vaccinated
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Age: {dog.age}</span>
              </div>
              <div className="text-sm">
                <strong>Gender:</strong> {dog.gender}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{dog.location}</span>
              </div>
              <div className="text-sm">
                <strong>Weight:</strong> {dog.weight}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{dog.description}</p>

            <div className="flex gap-3">
              <Button size="lg" className="flex-1">
                Contact Breeder
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Health & Vaccination
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Vaccinated:</strong> {dog.vaccinated ? "Yes" : "No"}</p>
              <p><strong>Health Tests:</strong></p>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {dog.healthTests.map((test, index) => (
                  <li key={index}>{test}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Breed Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Height:</strong> {dog.height}</p>
              <p><strong>Lifespan:</strong> {dog.lifespan}</p>
              <p><strong>Temperament:</strong> {dog.temperament}</p>
              <p><strong>Pedigree:</strong> {dog.pedigree}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Breeder Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Breeder:</strong> {dog.breeder}</p>
              <p><strong>Location:</strong> {dog.location}</p>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{dog.breederContact}</span>
              </div>
              <Button className="w-full mt-4">
                Call Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DogDetails;