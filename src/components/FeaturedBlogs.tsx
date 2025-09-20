import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedBlogs = () => {
  const featuredBlogs = [
    {
      id: 1,
      title: "10 Essential Tips for First-Time Dog Owners",
      excerpt: "Everything you need to know before bringing your first dog home.",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop",
      category: "Dog Care",
      date: "2025-09-15",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Cat Behavior",
      excerpt: "Decode your feline friend's mysterious behaviors.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=200&fit=crop",
      category: "Cat Care",
      date: "2025-09-12",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Pet Nutrition Guide",
      excerpt: "Learn about balanced nutrition for your pets.",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=200&fit=crop",
      category: "Pet Health",
      date: "2025-09-10",
      readTime: "8 min read"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Pet Care</span> Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice and tips to help you provide the best care for your beloved pets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredBlogs.map((blog) => (
            <Card key={blog.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {blog.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </CardTitle>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    {new Date(blog.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {blog.readTime}
                  </div>
                </div>
                
                <Link to={`/blog/${blog.id}`}>
                  <Button variant="outline" className="w-full group">
                    Read More 
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button size="lg">
              View All Articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;