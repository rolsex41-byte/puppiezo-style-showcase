import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, Users, Award, TrendingUp, Mail, Phone, MapPin } from "lucide-react";

const WorkWithUs = () => {
  const opportunities = [
    {
      icon: Briefcase,
      title: "Join Our Team",
      description: "Work with passionate pet lovers in a dynamic, growing company",
      benefits: ["Competitive salary", "Health insurance", "Pet-friendly office", "Growth opportunities"],
      action: "View Open Positions"
    },
    {
      icon: Users,
      title: "Become a Breeder Partner",
      description: "Partner with us to reach thousands of potential pet parents",
      benefits: ["Verified listing", "Marketing support", "Quality assurance", "Customer trust"],
      action: "Apply as Breeder"
    },
    {
      icon: Award,
      title: "Veterinary Partnership",
      description: "Join our network of trusted veterinary professionals",
      benefits: ["Professional network", "Referral system", "Digital presence", "Continuing education"],
      action: "Join as Vet Partner"
    },
    {
      icon: TrendingUp,
      title: "Business Partnership",
      description: "Collaborate with us to expand our services and reach",
      benefits: ["Strategic alliance", "Market expansion", "Resource sharing", "Mutual growth"],
      action: "Explore Partnership"
    }
  ];

  const jobOpenings = [
    {
      title: "Senior Veterinarian",
      department: "Medical",
      location: "Mumbai",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead our veterinary team and ensure the highest standards of pet health care."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Bangalore",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive our digital marketing strategy and brand growth across India."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Delhi",
      type: "Full-time",
      experience: "4+ years",
      description: "Shape the future of our platform and enhance user experience."
    },
    {
      title: "Customer Success Associate",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Ensure customer satisfaction and build lasting relationships with pet parents."
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
              <h1 className="text-5xl font-bold mb-6">Work With Petzee</h1>
              <p className="text-xl leading-relaxed mb-8">
                Join India's fastest-growing pet ecosystem and help us create a better world for pets and their families
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Explore Opportunities
              </Button>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Partnership Opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover various ways to collaborate with Petzee and grow together
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {opportunities.map((opportunity, index) => {
                const IconComponent = opportunity.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2">{opportunity.title}</h3>
                          <p className="text-muted-foreground">{opportunity.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-medium mb-3">Benefits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {opportunity.benefits.map((benefit, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full">{opportunity.action}</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Current Job Openings</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our team and help build the future of pet care in India
              </p>
            </div>
            
            <div className="grid gap-6 max-w-4xl mx-auto">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                        <p className="text-muted-foreground">{job.description}</p>
                      </div>
                      <Badge className="ml-4">{job.type}</Badge>
                    </div>
                    
                    <div className="flex gap-6 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div>
                        <strong>Experience:</strong> {job.experience}
                      </div>
                    </div>
                    
                    <Button variant="outline">Apply Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Ready to join the Petzee family? Send us your details and we'll get back to you soon.
                </p>
              </div>
              
              <Card className="p-8">
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <Input placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="Enter your email" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <Input placeholder="Enter your phone number" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Interest Area</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select area of interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="career">Career Opportunities</SelectItem>
                            <SelectItem value="breeder">Breeder Partnership</SelectItem>
                            <SelectItem value="vet">Veterinary Partnership</SelectItem>
                            <SelectItem value="business">Business Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us about yourself and your interest in working with Petzee"
                        rows={4}
                      />
                    </div>
                    
                    <Button className="w-full" size="lg">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Our HR Team</h2>
              <p className="text-lg text-muted-foreground">
                Have questions? Our HR team is here to help you understand opportunities at Petzee
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">careers@petzee.com</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">Mumbai, India</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WorkWithUs;