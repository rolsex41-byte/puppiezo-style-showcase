import { Search, Phone, User, Facebook, Instagram, Linkedin, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background shadow-sm">
      {/* Top bar with contact info - Commented out for future use */}
      {/* 
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
      */}

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-3xl font-bold">
                <span className="text-primary">PET</span>
                <span className="text-accent">ZEE</span>
              </h1>
            </Link>
          </div>

          {/* Search bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search for breeds..." 
                className="pl-10 rounded-full border-2 border-border focus:border-primary"
              />
            </div>
          </div>

          {/* Desktop Social icons */}
          <div className="hidden md:flex items-center gap-2">
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

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-6">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="Search for breeds..." 
                    className="pl-10 rounded-full border-2 border-border focus:border-primary"
                  />
                </div>
                
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-2">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      Home
                    </Button>
                  </Link>
                  <Link to="/dogs" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      Dogs
                    </Button>
                  </Link>
                  <Link to="/cats" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      Cats
                    </Button>
                  </Link>
                  <Link to="/available-pets" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      Available Pets
                    </Button>
                  </Link>
                  <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      Shop
                    </Button>
                  </Link>
                  <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      Blog
                    </Button>
                  </Link>
                  <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      About Us
                    </Button>
                  </Link>
                  <Link to="/work-with-us" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      Work With Us
                    </Button>
                  </Link>
                </nav>

                {/* Mobile Social icons */}
                <div className="flex items-center gap-2 pt-4">
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
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Navigation - Hidden on mobile */}
      <nav className="hidden md:block border-t border-border">
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