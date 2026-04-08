import "./App.css";
import CraftProcess from "./components/CraftProcess";
import Experience from "./components/Experience";
import HighLight from "./components/HighLight";
import { InformationBadges } from "./components/InformationBadges";
import { Navigation } from "./components/Navigation";
import { NewHero } from "./components/NewHero";
import PricingSection from "./components/PricingSection";
import HoursSection from "./components/HoursSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <NewHero />
      <InformationBadges />
      <HighLight />
      <CraftProcess />
      <Experience />
      <PricingSection />
      <CTA />
      <HoursSection />
      <Footer />
    </>
  );
}

export default App;
