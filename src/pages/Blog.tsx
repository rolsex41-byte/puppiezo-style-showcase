import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for First-Time Dog Owners",
      excerpt: "Bringing home your first dog is exciting! Here are the essential tips every new dog owner should know to ensure a smooth transition.",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=250&fit=crop",
      author: "Dr. Priya Sharma",
      date: "September 15, 2025",
      readTime: "5 min read",
      category: "Dog Care",
      tags: ["Beginner", "Dog Training", "Pet Care"]
    },
    {
      id: 2,
      title: "Understanding Cat Behavior: Why Your Cat Does What They Do",
      excerpt: "Decode your feline friend's mysterious behaviors and learn what they're trying to communicate with you.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=250&fit=crop",
      author: "Dr. Rajesh Kumar",
      date: "September 18, 2025",
      readTime: "7 min read",
      category: "Cat Care",
      tags: ["Cat Behavior", "Pet Psychology", "Understanding Pets"]
    },
    {
      id: 3,
      title: "The Ultimate Guide to Pet Nutrition: What to Feed Your Pet",
      excerpt: "Learn about balanced nutrition for dogs and cats, including what foods to avoid and how to choose the right diet for your pet's age and health.",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=250&fit=crop",
      author: "Dr. Anita Patel",
      date: "September 22, 2025",
      readTime: "8 min read",
      category: "Pet Health",
      tags: ["Nutrition", "Pet Health", "Diet"]
    },
    {
      id: 4,
      title: "Creating a Pet-Friendly Home: Safety Tips and Setup Ideas",
      excerpt: "Transform your home into a safe and comfortable environment for your new pet with these practical tips and ideas.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=250&fit=crop",
      author: "Sarah Johnson",
      date: "September 25, 2025",
      readTime: "6 min read",
      category: "Pet Care",
      tags: ["Home Setup", "Pet Safety", "Interior Design"]
    },
    {
      id: 5,
      title: "Grooming Your Pet: Professional Tips for Home Care",
      excerpt: "Keep your pet looking and feeling their best with these professional grooming techniques you can do at home.",
      image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=400&h=250&fit=crop",
      author: "Mike Thompson",
      date: "September 28, 2025",
      readTime: "9 min read",
      category: "Grooming",
      tags: ["Grooming", "Pet Care", "DIY"]
    },
    {
      id: 6,
      title: "The Benefits of Pet Insurance: Is It Worth It?",
      excerpt: "Explore the pros and cons of pet insurance and learn how to choose the right coverage for your furry friend.",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=250&fit=crop",
      author: "Dr. Neha Gupta",
      date: "September 30, 2025",
      readTime: "5 min read",
      category: "Pet Health",
      tags: ["Insurance", "Financial Planning", "Pet Health"]
    },
    {
      id: 7,
      title: "Vaccinations Schedule: Keeping Your Pet Healthy",
      excerpt: "A comprehensive guide to pet vaccinations, including what vaccines your pet needs and when to get them.",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=250&fit=crop",
      author: "Dr. Amit Singh",
      date: "October 2, 2025",
      readTime: "6 min read",
      category: "Pet Health",
      tags: ["Vaccinations", "Prevention", "Health"]
    },
    {
      id: 8,
      title: "Training Your Puppy: Basic Commands and House Training",
      excerpt: "Start your puppy's training journey with these fundamental commands and house training techniques.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=250&fit=crop",
      author: "trainer Maya Patel",
      date: "October 5, 2025",
      readTime: "7 min read",
      category: "Dog Care",
      tags: ["Training", "Puppy", "Behavior"]
    },
    {
      id: 9,
      title: "Senior Pet Care: What Changes as Your Pet Ages",
      excerpt: "Learn how to adapt your pet care routine as your furry friend enters their golden years.",
      image: "https://images.unsplash.com/photo-1444212477490-ca407925329e?w=400&h=250&fit=crop",
      author: "Dr. Kavita Mehta",
      date: "October 8, 2025",
      readTime: "8 min read",
      category: "Pet Health",
      tags: ["Senior Care", "Aging", "Health"]
    },
    {
      id: 10,
      title: "Emergency Pet Care: What Every Owner Should Know",
      excerpt: "Essential emergency care tips that could save your pet's life in critical situations.",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=400&h=250&fit=crop",
      author: "Dr. Rohit Sharma",
      date: "October 10, 2025",
      readTime: "10 min read",
      category: "Pet Health",
      tags: ["Emergency", "First Aid", "Safety"]
    },
    {
      id: 11,
      title: "Choosing the Right Pet Food: Quality Matters",
      excerpt: "Navigate the pet food aisle with confidence. Learn what to look for in quality pet nutrition.",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=250&fit=crop",
      author: "Dr. Sanjana Roy",
      date: "October 12, 2025",
      readTime: "6 min read",
      category: "Pet Health",
      tags: ["Nutrition", "Food Quality", "Health"]
    },
    {
      id: 12,
      title: "Cat Litter Training: Tips for Success",
      excerpt: "Master the art of litter training with these proven techniques for a clean and happy home.",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=250&fit=crop",
      author: "Cat Expert Lisa Chen",
      date: "October 15, 2025",
      readTime: "5 min read",
      category: "Cat Care",
      tags: ["Litter Training", "Hygiene", "Behavior"]
    }
  ];

  const categories = ["All", "Dog Care", "Cat Care", "Pet Health", "Grooming", "Pet Care"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Pet Care</span> Blog & Tips
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice, tips, and insights to help you provide the best care for your beloved pets
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-full object-cover min-h-[300px]"
              />
              <Badge className="absolute top-4 left-4 bg-accent">Featured</Badge>
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-4">{blogPosts[0].category}</Badge>
              <CardTitle className="text-2xl mb-4 hover:text-primary transition-colors">
                <Link to={`/blog/${blogPosts[0].id}`}>{blogPosts[0].title}</Link>
              </CardTitle>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {blogPosts[0].author}
                </div>
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(blogPosts[0].date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <Link to={`/blog/${blogPosts[0].id}`}>
                <Button className="w-fit">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </div>
        </Card>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button 
              key={category} 
              variant="outline" 
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {post.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;