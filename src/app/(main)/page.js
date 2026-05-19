import FeaturePets from "@/app/components/FeaturePets";
import Hero from "@/app/components/Hero";

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
