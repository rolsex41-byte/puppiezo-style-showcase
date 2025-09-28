import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User, ArrowLeft, Share2 } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for First-Time Dog Owners",
      content: `
        <p>Bringing home your first dog is one of life's most exciting moments, but it can also feel overwhelming. Whether you've adopted a puppy or an adult dog, being prepared will help ensure a smooth transition for both you and your new furry friend.</p>
        
        <h2>1. Prepare Your Home</h2>
        <p>Before your dog arrives, puppy-proof your home by removing hazardous items and securing loose cables. Create a safe space with a comfortable bed, food and water bowls, and some toys.</p>
        
        <h2>2. Establish a Routine</h2>
        <p>Dogs thrive on routine. Set regular times for feeding, walks, playtime, and bedtime. This helps your dog feel secure and makes training easier.</p>
        
        <h2>3. Start Training Early</h2>
        <p>Begin basic training immediately with simple commands like "sit," "stay," and "come." Positive reinforcement with treats and praise works best.</p>
        
        <h2>4. Socialization is Key</h2>
        <p>Expose your dog to different people, animals, and environments in a controlled manner. This helps prevent fear and aggression later.</p>
        
        <h2>5. Find a Good Veterinarian</h2>
        <p>Establish a relationship with a trusted vet for regular check-ups, vaccinations, and emergency care.</p>
      `,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=400&fit=crop",
      author: "Dr. Priya Sharma",
      date: "September 15, 2025",
      readTime: "5 min read",
      category: "Dog Care",
      tags: ["Beginner", "Dog Training", "Pet Care"]
    },
    {
      id: 2,
      title: "Understanding Cat Behavior: Why Your Cat Does What They Do",
      content: `
        <p>Cats have evolved sophisticated ways of communicating with both humans and other cats. Understanding these behaviors can strengthen your bond and help you provide better care.</p>
        
        <h2>Purring: More Than Just Happiness</h2>
        <p>While cats do purr when happy, they also purr when stressed, injured, or seeking comfort. The vibrations actually help promote healing.</p>
        
        <h2>Kneading Behavior</h2>
        <p>When cats "make biscuits" by pressing their paws into soft surfaces, they're displaying comfort and contentment, mimicking nursing behavior from kittenhood.</p>
        
        <h2>The Slow Blink</h2>
        <p>When your cat looks at you and slowly closes and opens their eyes, it's called a "cat kiss" - a sign of trust and affection.</p>
        
        <h2>Scratching Territory</h2>
        <p>Scratching isn't just about claw maintenance. Cats have scent glands in their paws and use scratching to mark their territory.</p>
      `,
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=400&fit=crop",
      author: "Dr. Rajesh Kumar",
      date: "September 18, 2025",
      readTime: "7 min read",
      category: "Cat Care",
      tags: ["Cat Behavior", "Pet Psychology", "Understanding Pets"]
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || "1"));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
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
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl font-bold text-foreground mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="flex items-center justify-between mt-12 pt-8 border-t">
            <div className="flex gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share Article
            </Button>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;