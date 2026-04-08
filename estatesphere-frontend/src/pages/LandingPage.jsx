import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import DashboardMockup from "../components/landing/DashboardMockup";
import Pricing from "../components/landing/Pricing";

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
