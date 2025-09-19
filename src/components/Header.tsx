import { Search, Phone, User, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const navItems = [
    "Home",
    "Dogs", 
    "Cats",
    "Available Pets",
    "Breeds Information",
    "Adoptions",
    "Shop",
    "About Us",
    "Work With Us"
  ];

  return (
    <header className="w-full bg-background shadow-sm">
      {/* Top bar with contact info */}
      <div className="border-b border-border px-4 py-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Support</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Login</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">
              <span className="text-primary">PUPPIE</span>
              <span className="text-accent">ZO</span>
            </h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search for breeds..." 
                className="pl-10 rounded-full border-2 border-border focus:border-primary"
              />
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            {navItems.map((item, index) => (
              <Button
                key={item}
                variant={index === 0 ? "default" : "ghost"}
                className={`rounded-none py-6 px-6 ${
                  index === 0 
                    ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                    : "hover:bg-muted"
                }`}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;