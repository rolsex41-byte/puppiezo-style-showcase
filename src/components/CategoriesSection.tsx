import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Award, ShoppingBag, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  const categories = [
    {
      title: "Dogs",
      description: "Find your perfect canine companion from our verified breeders",
      icon: Heart,
      color: "text-primary",
      bgColor: "bg-primary/10",
      link: "/dogs"
    },
    {
      title: "Cats", 
      description: "Discover beautiful feline companions from trusted sources",
      icon: Award,
      color: "text-accent",
      bgColor: "bg-accent/10",
      link: "/cats"
    },
    {
      title: "Pet Products",
      description: "Premium quality products for your beloved pets",
      icon: ShoppingBag, 
      color: "text-primary",
      bgColor: "bg-primary/10",
      link: "/shop"
    },
    {
      title: "Available Pets",
      description: "Browse pets ready for adoption and find your perfect match",
      icon: Users,
      color: "text-accent", 
      bgColor: "bg-accent/10",
      link: "/available-pets"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Customers' Favorite Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing pets, products, and services trusted by thousands of pet parents across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link to={category.link} key={index}>
                <Card 
                  className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/30 cursor-pointer h-full"
                >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    Explore {category.title}
                  </Button>
                </CardContent>
              </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;