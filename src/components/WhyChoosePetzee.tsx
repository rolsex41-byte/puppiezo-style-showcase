import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Heart, 
  Users, 
  Award, 
  Clock, 
  MapPin,
  Phone,
  Star,
  CheckCircle
} from "lucide-react";

const WhyChoosePetzee = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified & Trusted",
      description: "All our pets come with health certificates and vaccination records from certified veterinarians.",
      badge: "100% Verified"
    },
    {
      icon: Heart,
      title: "Ethical Breeding",
      description: "We partner only with ethical breeders who prioritize animal welfare and responsible breeding practices.",
      badge: "Ethical"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our team of pet care experts provides 24/7 support for all your pet-related queries and concerns.",
      badge: "24/7 Support"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every pet goes through comprehensive health checks and temperament assessments before adoption.",
      badge: "Quality Assured"
    },
    {
      icon: Clock,
      title: "Lifetime Guidance",
      description: "We provide ongoing support and guidance throughout your pet's lifetime, not just at adoption.",
      badge: "Lifetime"
    },
    {
      icon: MapPin,
      title: "Pan India Delivery",
      description: "Safe and comfortable pet transportation services available across major cities in India.",
      badge: "Pan India"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Families" },
    { number: "15,000+", label: "Pets Adopted" },
    { number: "500+", label: "Verified Breeders" },
    { number: "50+", label: "Cities Covered" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            Why Choose Petzee
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            India's Most <span className="text-primary">Trusted</span> Pet Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just connect you with pets; we create lasting bonds between families and their perfect companions through our comprehensive ecosystem of trust, care, and expertise.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="outline" className="w-fit mx-auto mb-2">
                  {feature.badge}
                </Badge>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 mb-12">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <Star className="inline h-6 w-6 text-yellow-500 mr-2" />
                  Trusted by Pet Lovers Nationwide
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Verified customer reviews with 4.8/5 rating</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Government certified and registered pet business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Insurance coverage for all pet transportation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Veterinary partnerships across 50+ cities</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">4.8</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <div className="text-muted-foreground">
                  Based on 12,000+ reviews
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Find Your Perfect Companion?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of happy families who found their perfect pets through Petzee. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Heart className="h-5 w-5 mr-2" />
              Browse Available Pets
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="h-5 w-5 mr-2" />
              Talk to Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePetzee;