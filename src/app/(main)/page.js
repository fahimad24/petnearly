import FeaturePets from "@/app/components/FeaturePets";
import Hero from "@/app/components/Hero";
import AdoptionJourneySection from "@/app/components/AdoptionJourneySection";
import PetCareTips from "@/app/components/PetCareTips";
import WhyAdoptPet from "../components/WhyAdoptPet";

export default function Home() {

  return (
    <div>
      <header>
        <Hero />
      </header>
      <main className="">
        <AdoptionJourneySection />
        <FeaturePets />
        <PetCareTips />
        <WhyAdoptPet />
      </main>
    </div>
  );
}
