import { Suspense } from "react";
import { LoadingSpinner } from "@/ui/LoadingSpinner";
import { PetsContent } from "@/components/PetsContent";
import { getAllPets } from "@/lib/action";

const AllPetsPage = async () => {
  const pets = await getAllPets();
  return (
    <main className="min-h-screen bg-backTone">
      {/* Header Section */}
      <section className="bg-linear-to-r from-primary to-primary/80 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black mb-3">
            Find Your Perfect <span className="text-secondary">Companion</span>
          </h1>
          <p className="text-xl font-semibold text-white/90">
            Browse through our collection of amazing pets ready for adoption
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 ">
          <p className="text-lg text-light-text font-semibold">
            Showing{" "}
            <span className="text-primary font-bold">{pets.length}</span> pets
            available for adoption
          </p>
        </div>

        {/* Content Section with Suspense */}
        <Suspense fallback={<LoadingSpinner />}>
          <PetsContent pets={pets} itemCount={pets.length} />
        </Suspense>
      </section>
    </main>
  );
};

export default AllPetsPage;
