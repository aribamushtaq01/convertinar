import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import HowToUse from "@/components/HowToUse";
import UseAnywhere from "@/components/UseAnywhere";
import FAQ from "@/components/FAQ";
import AppPromotion from "@/components/AppPromotion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UseCases />
        <HowToUse />
        <UseAnywhere />
        <FAQ />
        <AppPromotion />
      </main>
      <Footer />
    </>
  );
}
