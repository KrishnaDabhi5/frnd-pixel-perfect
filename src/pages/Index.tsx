import Header from "../components/Header";
import AppStoreSection from "../components/AppStoreSection";
import ScreenshotsCarousel from "../components/ScreenshotsCarousel";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BackersSection from "../components/BackersSection";
import MediaCoverageSection from "../components/MediaCoverageSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AppStoreSection />
        <ScreenshotsCarousel />
        <FeaturesSection />
        <TestimonialsSection />
        <BackersSection />
        <MediaCoverageSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
