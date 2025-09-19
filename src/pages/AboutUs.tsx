import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Shield, Star, MapPin } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { number: "50,000+", label: "Happy Pet Parents", icon: Heart },
    { number: "1,000+", label: "Verified Breeders", icon: Users },
    { number: "25+", label: "Cities Served", icon: MapPin },
    { number: "99%", label: "Customer Satisfaction", icon: Star }
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Veterinarian",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
      experience: "15+ years",
      specialization: "Small Animal Medicine"
    },
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      experience: "10+ years",
      specialization: "Pet Industry Expert"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c788?w=200&h=200&fit=crop&crop=face",
      experience: "8+ years",
      specialization: "Business Operations"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "All our breeders are verified and pets come with health guarantees"
    },
    {
      icon: Heart,
      title: "Pet Welfare",
      description: "We prioritize the health and happiness of every pet in our ecosystem"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community of pet lovers across India"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing the highest quality products and services"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary-glow text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">About Petzee</h1>
              <p className="text-xl leading-relaxed mb-8">
                India's most trusted pet ecosystem, connecting loving families with healthy pets 
                and providing everything needed for a lifetime of companionship.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Join Our Community
              </Button>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded in 2018, Petzee began with a simple mission: to make pet adoption and care 
                  accessible to every family in India. We recognized the need for a trusted platform 
                  that connects verified breeders with loving families while ensuring the highest 
                  standards of pet welfare.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Today, we've grown into India's largest pet ecosystem, serving over 50,000 families 
                  across 25+ cities. Our platform offers everything from pet adoption to premium 
                  products and expert veterinary care.
                </p>
                <div className="flex gap-4">
                  <Badge className="px-4 py-2">Est. 2018</Badge>
                  <Badge className="px-4 py-2">ISO Certified</Badge>
                  <Badge className="px-4 py-2">Award Winning</Badge>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&h=400&fit=crop"
                  alt="Happy pets in a loving home"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Happy Families</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Petzee
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow group">
                    <CardContent className="p-0">
                      <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate pet lovers and industry experts dedicated to your pet's wellbeing
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary">{member.experience}</Badge>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.specialization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Join the Petzee Family</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to find your perfect pet companion or grow your pet care business with us?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Find Your Pet
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Become a Partner
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;