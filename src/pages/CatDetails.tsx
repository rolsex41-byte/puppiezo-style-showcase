import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Star, MapPin, Phone, ArrowLeft, Calendar, Shield, Award } from "lucide-react";

const CatDetails = () => {
  const { id } = useParams();

  const allCats = [
    {
      id: 1,
      name: "Persian Cat",
      price: "₹15,000 - ₹35,000",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600&h=400&fit=crop",
      breeder: "Mumbai Cat Center",
      location: "Mumbai, Maharashtra",
      rating: 4.9,
      age: "8 weeks",
      gender: "Female",
      vaccinated: true,
      features: ["Long Hair", "Calm", "Indoor Cat"],
      description: "Persian cats are known for their luxurious long coat and sweet personality. They are quiet, docile cats who prefer a serene environment and are content to pose and be pampered.",
      weight: "3.2-5.4 kg (adult)",
      height: "25-38 cm",
      lifespan: "12-17 years",
      temperament: "Docile, Quiet, Sweet",
      healthTests: ["PKD", "Progressive Retinal Atrophy", "Hypertrophic Cardiomyopathy"],
      breederContact: "+91 98765 43213",
      pedigree: "CFA Registered"
    },
    {
      id: 2,
      name: "British Shorthair",
      price: "₹25,000 - ₹50,000",
      image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&h=400&fit=crop",
      breeder: "Delhi Feline Friends",
      location: "Delhi, NCR",
      rating: 4.8,
      age: "10 weeks",
      gender: "Male",
      vaccinated: true,
      features: ["Gentle", "Good with Kids", "Low Maintenance"],
      description: "British Shorthairs are easy-going and placid. They are fiercely loyal and loving towards their family, and friendly towards strangers. They are quite content to be around their owners and family.",
      weight: "4-8 kg (adult)",
      height: "30-35 cm",
      lifespan: "12-20 years",
      temperament: "Easy-going, Placid, Loyal",
      healthTests: ["Hypertrophic Cardiomyopathy", "PKD", "FIV/FeLV"],
      breederContact: "+91 98765 43214",
      pedigree: "TICA Registered"
    },
    {
      id: 3,
      name: "Maine Coon",
      price: "₹30,000 - ₹60,000",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=400&fit=crop",
      breeder: "Bangalore Cat Paradise",
      location: "Bangalore, Karnataka",
      rating: 4.7,
      age: "12 weeks",
      gender: "Female",
      vaccinated: true,
      features: ["Large Size", "Friendly", "Intelligent"],
      description: "Maine Coons are gentle giants of the cat world. They are known for their dog-like personalities, intelligence, and their ability to get along well with children and other pets.",
      weight: "4.5-8.2 kg (adult)",
      height: "25-40 cm",
      lifespan: "12-15 years",
      temperament: "Gentle, Intelligent, Playful",
      healthTests: ["Hypertrophic Cardiomyopathy", "Hip Dysplasia", "Spinal Muscular Atrophy"],
      breederContact: "+91 98765 43215",
      pedigree: "CFA Registered"
    }
  ];

  const cat = allCats.find(c => c.id === parseInt(id || "1"));

  if (!cat) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Cat not found</h1>
          <Link to="/cats">
            <Button>Back to Cats</Button>
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
        <Link to="/cats" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Cats
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <img 
              src={cat.image} 
              alt={cat.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold text-foreground">{cat.name}</h1>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{cat.rating}</span>
                </div>
              </div>
              <p className="text-2xl font-bold text-primary">{cat.price}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.features.map((feature, index) => (
                <Badge key={index} variant="secondary">
                  {feature}
                </Badge>
              ))}
              {cat.vaccinated && (
                <Badge className="bg-green-500 hover:bg-green-600">
                  Vaccinated
                </Badge>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Age: {cat.age}</span>
              </div>
              <div className="text-sm">
                <strong>Gender:</strong> {cat.gender}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{cat.location}</span>
              </div>
              <div className="text-sm">
                <strong>Weight:</strong> {cat.weight}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">{cat.description}</p>

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
              <p><strong>Vaccinated:</strong> {cat.vaccinated ? "Yes" : "No"}</p>
              <p><strong>Health Tests:</strong></p>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {cat.healthTests.map((test, index) => (
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
              <p><strong>Height:</strong> {cat.height}</p>
              <p><strong>Lifespan:</strong> {cat.lifespan}</p>
              <p><strong>Temperament:</strong> {cat.temperament}</p>
              <p><strong>Pedigree:</strong> {cat.pedigree}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Breeder Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Breeder:</strong> {cat.breeder}</p>
              <p><strong>Location:</strong> {cat.location}</p>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{cat.breederContact}</span>
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

export default CatDetails;