import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedSection />
      <CategoriesSection />
      <FeaturedBlogs />
      <Footer />
    </div>
  );
};

export default Index;
