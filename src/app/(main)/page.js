import FeaturePets from "@/components/FeaturePets";
import Hero from "@/components/Hero";

export default function Home() {

  return (
    <div>
      <header>
        <Hero />
      </header>
      <main className="">
        <FeaturePets />
      </main>
    </div>
  );
}
