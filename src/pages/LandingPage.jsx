import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import DashboardMockup from "../components/Landing/DashboardMockup";
import Pricing from "../components/Landing/Pricing";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DashboardMockup />
      <Pricing />
      <Footer />
    </>
  );
}
