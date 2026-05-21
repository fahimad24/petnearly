import FeaturePets from "@/app/components/FeaturePets";
import Hero from "@/app/components/Hero";
import AdoptionJourneySection from "@/app/components/AdoptionJourneySection";

export default function Home() {

  return (
    <div>
      <header>
        <Hero />
      </header>
      <main className="">
        <AdoptionJourneySection />
        <FeaturePets />
      </main>
    </div>
  );
}
