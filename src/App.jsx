import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ServiceSection from "./components/ServiceSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <ServiceSection />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
