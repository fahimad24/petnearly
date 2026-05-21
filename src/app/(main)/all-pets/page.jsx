// app/all-pets/page.jsx (Alternative structure)
"use client";

import { useState, useEffect, Suspense } from "react";
import { LoadingSpinner } from "@/ui/LoadingSpinner";
import { PetsContent } from "@/app/components/PetsContent";
import { getAllPets } from "@/app/lib/action";
import PetFilterSearch from "../components/PetFilterSearch";
import Loading from "@/app/loading";

export default function AllPetsPage() {
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filteredPets, setFilteredPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPets() {
      const allPets = await getAllPets(search, species, sortBy);
      setFilteredPets(allPets);
      setLoading(false);
    }
    loadPets();
  }, [search, species, sortBy]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-backTone">
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
        <div className=" gap-8">
          <div className="flex-1">
            <div className="mb-8">
              <p className="text-lg text-light-text font-semibold">
                Showing{" "}
                <span className="text-primary font-bold">
                  {filteredPets.length}
                </span>{" "}
                pets available for adoption
              </p>
            </div>
            <div className="my-4">
              <PetFilterSearch
                setSearch={setSearch}
                setSpecies={setSpecies}
                setSortBy={setSortBy}
              />
            </div>

            <PetsContent pets={filteredPets} />
          </div>
        </div>
      </section>
    </main>
  );
}
