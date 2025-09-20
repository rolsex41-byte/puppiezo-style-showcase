import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import WhyChoosePetzee from "@/components/WhyChoosePetzee";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedSection />
      <CategoriesSection />
      <WhyChoosePetzee />
      <FeaturedBlogs />
      <Footer />
    </div>
  );
};

export default Index;
