import AISection from "./components/AISection";
import { CreatonPass } from "./components/CreatonPass";
import { Feature } from "./components/Feature";
import { Profit } from "./components/Profit";
import { Vision } from "./components/Vision";

export function LandingPage() {
  return (
    <>
      <CreatonPass />
      <Profit />
      <Vision />
      <Feature />
      <AISection />
    </>
  );
}
