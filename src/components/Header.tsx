import { Search, Phone, User, Facebook, Instagram, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
              <span className="text-primary">PET</span>
              <span className="text-accent">ZEE</span>
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
          <NavigationMenu className="mx-0 max-w-full">
            <NavigationMenuList className="flex-wrap justify-start">
              <NavigationMenuItem>
                <Link to="/">
                  <Button variant="default" className="rounded-none py-6 px-6 bg-accent text-accent-foreground hover:bg-accent/90">
                    Home
                  </Button>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="rounded-none py-6 px-6 hover:bg-primary hover:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground">
                  Dogs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link to="/dogs" className="block hover:bg-muted p-2 rounded">All Dogs</Link>
                    <Link to="/dogs?breed=golden-retriever" className="block hover:bg-muted p-2 rounded">Golden Retriever</Link>
                    <Link to="/dogs?breed=german-shepherd" className="block hover:bg-muted p-2 rounded">German Shepherd</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="rounded-none py-6 px-6 hover:bg-primary hover:text-primary-foreground data-[state=open]:bg-primary data-[state=open]:text-primary-foreground">
                  Cats
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <Link to="/cats" className="block hover:bg-muted p-2 rounded">All Cats</Link>
                    <Link to="/cats?breed=persian" className="block hover:bg-muted p-2 rounded">Persian</Link>
                    <Link to="/cats?breed=british-shorthair" className="block hover:bg-muted p-2 rounded">British Shorthair</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/available-pets">
                  <Button variant="ghost" className="rounded-none py-6 px-6 hover:bg-primary hover:text-primary-foreground">
                    Available Pets
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/shop">
                  <Button variant="ghost" className="rounded-none py-6 px-6 hover:bg-primary hover:text-primary-foreground">
                    Shop
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/blog">
                  <Button variant="ghost" className="rounded-none py-6 px-6 hover:bg-primary hover:text-primary-foreground">
                    Blog
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <Button variant="ghost" className="rounded-none py-6 px-6 hover:bg-primary hover:text-primary-foreground">
                    About Us
                  </Button>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/work-with-us">
                  <Button variant="ghost" className="rounded-none py-6 px-6 hover:bg-primary hover:text-primary-foreground">
                    Work With Us
                  </Button>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;