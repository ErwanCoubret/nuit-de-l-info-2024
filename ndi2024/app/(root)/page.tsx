import FondationSection from "../components/root/main/FondationSection";
import HeroSection from "../components/root/main/HeroSection";
import Footer from "../components/utils/Footer";
import Navbar from "../components/utils/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <FondationSection />
      <Footer />
    </main>
  );
}
