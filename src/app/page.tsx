import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import HowToUse from "@/components/HowToUse";
import UseAnywhere from "@/components/UseAnywhere";
// import FAQ from "@/components/FAQ";
import Showcase from "@/components/Showcase";
import AppPromotion from "@/components/AppPromotion";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UseCases />
        <HowToUse />
        <Showcase />
        <UseAnywhere />
        <CaseStudies />
        {/* <FAQ /> */}
        <AppPromotion />
      </main>
      <Footer />
    </>
  );
}
