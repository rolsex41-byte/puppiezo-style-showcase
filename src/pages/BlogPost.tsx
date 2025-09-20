import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, User, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = {
    "1": {
      title: "10 Essential Tips for First-Time Dog Owners",
      excerpt: "Everything you need to know before bringing your first dog home.",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=400&fit=crop",
      category: "Dog Care",
      date: "2025-09-15",
      readTime: "5 min read",
      author: "Dr. Sarah Johnson",
      content: `
        <p>Bringing home your first dog is an exciting and life-changing experience. Whether you've adopted a playful puppy or a mature dog, preparation is key to ensuring a smooth transition for both you and your new furry friend.</p>

        <h3>1. Puppy-Proof Your Home</h3>
        <p>Before your dog arrives, remove or secure anything that could be harmful or tempting to chew. This includes electrical cords, toxic plants, small objects that could be swallowed, and valuable items you don't want destroyed.</p>

        <h3>2. Stock Up on Essential Supplies</h3>
        <p>Your dog will need food and water bowls, a collar with ID tags, a leash, a comfortable bed, toys for mental stimulation, and high-quality dog food appropriate for their age and size.</p>

        <h3>3. Establish a Routine</h3>
        <p>Dogs thrive on consistency. Set regular times for feeding, walks, play, and sleep. This helps your dog feel secure and makes house training much easier.</p>

        <h3>4. Start Training Early</h3>
        <p>Basic commands like "sit," "stay," "come," and "down" are essential for safety and good behavior. Positive reinforcement with treats and praise works best.</p>

        <h3>5. Socialization is Key</h3>
        <p>Expose your dog to different people, animals, environments, and experiences in a controlled and positive way. This helps prevent fear and aggression later in life.</p>

        <h3>6. Find a Good Veterinarian</h3>
        <p>Schedule a check-up within a week of bringing your dog home. Discuss vaccination schedules, spaying/neutering, and parasite prevention.</p>

        <h3>7. Be Patient with House Training</h3>
        <p>Accidents will happen. Clean them thoroughly with an enzymatic cleaner and never punish your dog. Consistency and positive reinforcement are key to success.</p>

        <h3>8. Provide Mental Stimulation</h3>
        <p>A bored dog can become destructive. Puzzle toys, training sessions, and interactive games help keep your dog's mind engaged and prevent behavioral problems.</p>

        <h3>9. Exercise Regularly</h3>
        <p>Different breeds have different exercise needs, but all dogs benefit from daily physical activity. This helps maintain their physical health and prevents behavioral issues.</p>

        <h3>10. Show Love and Patience</h3>
        <p>Building a strong bond with your dog takes time. Be consistent with your rules, shower them with love, and remember that every dog learns at their own pace.</p>

        <p>Remember, the first few weeks are an adjustment period for everyone. With patience, consistency, and love, you'll build a wonderful relationship with your new companion that will last for years to come.</p>
      `
    },
    "2": {
      title: "Understanding Cat Behavior",
      excerpt: "Decode your feline friend's mysterious behaviors.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=400&fit=crop",
      category: "Cat Care",
      date: "2025-09-12",
      readTime: "7 min read",
      author: "Dr. Emily Chen",
      content: `
        <p>Cats are fascinating creatures with complex behaviors that often leave their human companions puzzled. Understanding these behaviors can help you build a stronger bond with your feline friend and ensure their happiness and well-being.</p>

        <h3>Why Do Cats Purr?</h3>
        <p>While we often associate purring with contentment, cats also purr when they're stressed, injured, or seeking comfort. The vibrations from purring may actually help heal bones and tissues, making it a self-soothing mechanism.</p>

        <h3>The Mystery of Kneading</h3>
        <p>When cats push their paws against soft surfaces, they're recreating the kneading motion they used as kittens to stimulate milk flow from their mother. This behavior indicates comfort and affection.</p>

        <h3>Tail Language</h3>
        <p>A cat's tail is like a mood ring. A high, upright tail indicates confidence and happiness, while a puffed-up tail signals fear or aggression. A twitching tail tip often means your cat is focused or slightly agitated.</p>

        <h3>The Slow Blink</h3>
        <p>When your cat looks at you and slowly closes and opens their eyes, they're giving you a "cat kiss." This is a sign of trust and affection. You can return the gesture by slow blinking back at them.</p>

        <h3>Why Cats Bring "Gifts"</h3>
        <p>When cats bring you dead mice or birds, they're not being malicious. This behavior stems from their natural hunting instincts and can be seen as a way of sharing their "prey" with their family.</p>

        <h3>Scratching Behavior</h3>
        <p>Cats scratch to mark their territory (they have scent glands in their paws), maintain their claws, and stretch their muscles. Providing appropriate scratching posts can redirect this natural behavior away from your furniture.</p>

        <h3>Hiding and High Perches</h3>
        <p>Cats feel safest when they can observe their environment from high vantage points. They also like to hide in small, enclosed spaces when they feel stressed or want to rest undisturbed.</p>

        <h3>Vocalization Patterns</h3>
        <p>Adult cats rarely meow at other cats – this behavior is primarily reserved for communicating with humans. Each cat develops their own "language" with their owner, using different meows for different needs.</p>

        <p>By understanding these behaviors, you can better respond to your cat's needs and strengthen your relationship. Remember, every cat is unique, so take time to learn your individual cat's specific behavioral patterns and preferences.</p>
      `
    },
    "3": {
      title: "Pet Nutrition Guide",
      excerpt: "Learn about balanced nutrition for your pets.",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&h=400&fit=crop",
      category: "Pet Health",
      date: "2025-09-10",
      readTime: "8 min read",
      author: "Dr. Michael Rodriguez",
      content: `
        <p>Proper nutrition is the foundation of your pet's health and longevity. Whether you have a dog, cat, or other companion animal, understanding their nutritional needs is crucial for maintaining their optimal health throughout their lives.</p>

        <h3>Understanding Basic Nutritional Needs</h3>
        <p>All pets require six basic nutrients: water, proteins, fats, carbohydrates, vitamins, and minerals. The proportions and amounts vary significantly between species, age groups, and individual animals.</p>

        <h3>Protein Requirements</h3>
        <p>Protein is essential for muscle development, immune function, and overall growth. Dogs need about 18-25% protein in their diet, while cats require 26% or more as they are obligate carnivores with higher protein needs.</p>

        <h3>The Importance of Quality Fats</h3>
        <p>Fats provide energy and help with vitamin absorption. Omega-3 and Omega-6 fatty acids are particularly important for skin health, coat shine, and brain function. Fish oil is an excellent source of these essential fats.</p>

        <h3>Carbohydrates: Friend or Foe?</h3>
        <p>While dogs can digest carbohydrates well, cats have limited ability to process them. High-quality carbohydrates like sweet potatoes and brown rice can provide energy for dogs, but should be limited in cat diets.</p>

        <h3>Life Stage Nutrition</h3>
        <p>Puppies and kittens need more calories and nutrients per pound than adults. Senior pets may need easily digestible foods with joint-supporting nutrients. Always choose age-appropriate foods.</p>

        <h3>Reading Pet Food Labels</h3>
        <p>Look for foods where the first ingredient is a named meat source. Avoid foods with excessive fillers, artificial colors, or preservatives. The AAFCO (Association of American Feed Control Officials) statement ensures the food meets nutritional standards.</p>

        <h3>Common Nutritional Mistakes</h3>
        <p>Overfeeding is the most common mistake, leading to obesity and related health issues. Free-feeding, giving too many treats, and feeding table scraps can all contribute to nutritional imbalances.</p>

        <h3>Special Dietary Considerations</h3>
        <p>Some pets have food allergies or sensitivities. Common allergens include beef, chicken, dairy, wheat, and soy. If you suspect food allergies, consult your veterinarian about elimination diets.</p>

        <h3>Hydration is Key</h3>
        <p>Fresh, clean water should always be available. Cats, in particular, have low thirst drives and benefit from wet food to increase their water intake and prevent urinary issues.</p>

        <h3>When to Consult a Professional</h3>
        <p>Work with your veterinarian to determine the best diet for your pet's individual needs. They can recommend specific foods for medical conditions, weight management, or life stage transitions.</p>

        <p>Remember, good nutrition is an investment in your pet's long-term health. Take time to research and choose high-quality foods that meet your pet's specific needs, and monitor their body condition regularly to ensure they're maintaining optimal health.</p>
      `
    }
  };

  const currentPost = blogPosts[id as keyof typeof blogPosts];

  if (!currentPost) {
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
      
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article header */}
          <header className="mb-8">
            <Badge className="mb-4" variant="secondary">
              {currentPost.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {currentPost.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {currentPost.excerpt}
            </p>
            
            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {currentPost.author}
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {new Date(currentPost.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {currentPost.readTime}
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-1" />
                Like
              </Button>
            </div>
          </header>

          {/* Featured image */}
          <div className="mb-8">
            <img 
              src={currentPost.image} 
              alt={currentPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>

          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />

          {/* Article footer */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-semibold mb-2">About the Author</h3>
                <p className="text-muted-foreground">
                  {currentPost.author} is a veterinary expert with over 10 years of experience in pet care and animal health.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Like Article
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;