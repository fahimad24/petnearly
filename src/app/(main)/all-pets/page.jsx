import { Suspense } from "react";
import { LoadingSpinner } from "@/ui/LoadingSpinner";
import { PetsContent } from "@/app/components/PetsContent";
import { getAllPets } from "@/app/lib/action";
import Link from "next/link";

const AllPetsPage = async ({ searchParams }) => {
  const params = (await Promise.resolve(searchParams)) || {};
  const searchText = (params.search || "").trim();
  const selectedSpecies = Array.isArray(params.species)
    ? params.species
    : params.species
      ? params.species.split(",")
      : [];
  const sortBy = params.sort || "newest";

  const mongoQuery = {};
  if (searchText) {
    mongoQuery.name = { $regex: searchText, $options: "i" };
  }
  if (selectedSpecies.length) {
    mongoQuery.species = { $in: selectedSpecies };
  }

  const petsData = await getAllPets(mongoQuery);
  const pets = [...petsData].sort((a, b) => {
    if (sortBy === "name-asc") {
      return (a?.name || "").localeCompare(b?.name || "");
    }
    if (sortBy === "name-desc") {
      return (b?.name || "").localeCompare(a?.name || "");
    }
    if (sortBy === "oldest") {
      return new Date(a?.createdAt || 0) - new Date(b?.createdAt || 0);
    }
    return new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0);
  });

  const speciesOptions = ["Dog", "Cat", "Bird", "Rabbit", "Fish", "Other"];

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

        <form className="mb-8 grid gap-4 md:grid-cols-4 bg-white p-4 rounded-xl shadow-sm border border-primary/10">
          <div className="md:col-span-2">
            <label
              htmlFor="search"
              className="block text-sm font-semibold mb-2 text-light-text"
            >
              Search by name
            </label>
            <input
              id="search"
              name="search"
              defaultValue={searchText}
              placeholder="Search pets..."
              className="w-full rounded-lg border border-primary/20 px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <label
              htmlFor="species"
              className="block text-sm font-semibold mb-2 text-light-text"
            >
              Filter by species
            </label>
            <select
              id="species"
              name="species"
              multiple
              defaultValue={selectedSpecies}
              className="w-full min-h-11 rounded-lg border border-primary/20 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
            >
              {speciesOptions.map((species) => (
                <option key={species} value={species}>
                  {species}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="sort"
              className="block text-sm font-semibold mb-2 text-light-text"
            >
              Sort
            </label>
            <select
              id="sort"
              name="sort"
              defaultValue={sortBy}
              className="w-full rounded-lg border border-primary/20 px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
            </select>
          </div>

          <div className="md:col-span-4 flex items-center gap-3">
            <button
              type="submit"
              className="rounded-lg bg-primary text-white px-5 py-2.5 font-semibold hover:bg-primary/90 transition"
            >
              Apply
            </button>
            <Link
              href="/all-pets"
              className="rounded-lg border border-primary/25 text-primary px-5 py-2.5 font-semibold hover:bg-primary/5 transition"
            >
              Reset
            </Link>
          </div>
        </form>

        {/* Content Section with Suspense */}
        <Suspense fallback={<LoadingSpinner />}>
          <PetsContent pets={pets} itemCount={pets.length} />
        </Suspense>
      </section>
    </main>
  );
};

export default AllPetsPage;
