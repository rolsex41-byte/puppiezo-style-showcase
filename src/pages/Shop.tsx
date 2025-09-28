import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Star, ShoppingCart, Search, Filter } from "lucide-react";
import { useState } from "react";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Premium Dog Food - Royal Canin",
      category: "food",
      price: "₹2,450",
      originalPrice: "₹2,800",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=200&fit=crop",
      rating: 4.8,
      reviews: 324,
      discount: "12% OFF",
      inStock: true,
      features: ["High Protein", "Grain Free", "All Ages"]
    },
    {
      id: 2,
      name: "Interactive Dog Toy Set",
      category: "toys",
      price: "₹899",
      originalPrice: "₹1,200",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop",
      rating: 4.6,
      reviews: 156,
      discount: "25% OFF",
      inStock: true,
      features: ["Durable", "Mental Stimulation", "Safe Materials"]
    },
    {
      id: 3,
      name: "Cat Scratching Post Tower",
      category: "furniture",
      price: "₹3,200",
      originalPrice: "₹4,000",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=300&h=200&fit=crop",
      rating: 4.9,
      reviews: 89,
      discount: "20% OFF",
      inStock: true,
      features: ["Multi-Level", "Sisal Rope", "Stable Base"]
    },
    {
      id: 4,
      name: "Pet Grooming Kit Professional",
      category: "grooming",
      price: "₹1,999",
      originalPrice: "₹2,500",
      image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=300&h=200&fit=crop",
      rating: 4.7,
      reviews: 203,
      discount: "20% OFF",
      inStock: true,
      features: ["Complete Set", "Professional Grade", "Easy Storage"]
    },
    {
      id: 5,
      name: "Automatic Pet Feeder Smart",
      category: "accessories",
      price: "₹4,500",
      originalPrice: "₹5,500",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=300&h=200&fit=crop",
      rating: 4.5,
      reviews: 67,
      discount: "18% OFF",
      inStock: false,
      features: ["App Control", "Voice Recording", "Timer Function"]
    },
    {
      id: 6,
      name: "Cozy Pet Bed Orthopedic",
      category: "accessories",
      price: "₹2,100",
      originalPrice: "₹2,800",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=300&h=200&fit=crop",
      rating: 4.8,
      reviews: 145,
      discount: "25% OFF",
      inStock: true,
      features: ["Memory Foam", "Washable Cover", "Non-Slip Base"]
    }
  ];

  const categories = [
    { value: "all", label: "All Products" },
    { value: "food", label: "Food & Treats" },
    { value: "toys", label: "Toys & Games" },
    { value: "grooming", label: "Grooming" },
    { value: "accessories", label: "Accessories" },
    { value: "furniture", label: "Pet Furniture" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (product: any) => {
    const message = `I am interested about this product: ${product.name}`;
    const whatsappUrl = `https://wa.me/9876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Pet Products</span> & Accessories
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium quality products for your beloved pets at the best prices
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="relative p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-2 right-2 rounded-full bg-white/80 hover:bg-white ${
                      likedProducts.includes(product.id) ? 'text-red-500' : 'text-gray-500'
                    }`}
                    onClick={() => toggleLike(product.id)}
                  >
                    <Heart className={`h-4 w-4 ${likedProducts.includes(product.id) ? 'fill-current' : ''}`} />
                  </Button>
                  {product.discount && (
                    <Badge className="absolute top-2 left-2 bg-accent">
                      {product.discount}
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge className="absolute bottom-2 left-2 bg-destructive">
                      Out of Stock
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </CardTitle>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1" 
                    disabled={!product.inStock}
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;