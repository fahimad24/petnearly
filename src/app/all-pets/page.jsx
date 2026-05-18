import { getAllPets } from "@/lib/action";
import PetCard from "@/components/PetCard";

const AllPetsPage = async () => {
  let pets = [];
  let error = null;

  try {
    pets = await getAllPets();
  } catch (err) {
    error = "Failed to load pets. Please try again later.";
    console.error("Error fetching pets:", err);
  }

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

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error ? (
          <div className="bg-red-100 border-2 border-red-500 text-red-700 px-6 py-4 rounded-lg text-center">
            <p className="font-semibold">{error}</p>
          </div>
        ) : pets && pets.length > 0 ? (
          <>
            <div className="mb-8">
              <p className="text-lg text-light-text font-semibold">
                Showing{" "}
                <span className="text-primary font-bold">{pets.length}</span>{" "}
                pets available for adoption
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pets.map((pet) => (
                <PetCard key={pet._id || pet.id} pet={pet} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🐾</div>
            <h2 className="text-3xl font-bold text-dark-text mb-3">
              No Pets Available
            </h2>
            <p className="text-light-text text-lg">
              Check back soon for new pets available for adoption!
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default AllPetsPage;
