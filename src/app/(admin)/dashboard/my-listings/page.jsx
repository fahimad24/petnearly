import Link from "next/link";
import PetListCard from "../../components/PetListCard";
import { getMatchingPets, getSession } from "@/app/lib/action";
import { Suspense } from "react";
import Loading from "@/app/loading";

const MyListingsPage = async () => {
  const { userId } = await getSession();
  const addedPets = await getMatchingPets(userId);

  return (
    <main className="min-h-screen bg-backTone px-4 py-8 sm:px-6 lg:px-8">
      <Suspense fallback={<Loading />}>
        <section className="mx-auto max-w-275">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
                📋 My Dashboard
              </span>
              <h1 className="text-3xl font-black tracking-tight text-dark-text sm:text-4xl lg:text-5xl">
                My <span className="text-accent">Listings</span>
              </h1>
              <p className="max-w-2xl text-sm text-light-text sm:text-base">
                Manage your pet listings and adoption requests.
              </p>
            </div>
            <Link
              href="/dashboard/add-pet"
              className="rounded-none bg-secondary to-primary px-6 py-1.5 font-semibold text-white shadow-lg transition hover:opacity-95"
            >
              <span className="text-lg">+</span>
              Add New Pet
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-6 bg-purple-300/40 rounded-lg shadow-md flex flex-col items-center gap-2">
              <p className="text-3xl font-black">{addedPets.length}</p>
              <h3>Total Listings</h3>
            </div>

            <div className="p-6 bg-green-300/40 rounded-lg shadow-md flex flex-col items-center gap-2">
              <p className="text-3xl font-black">
                {addedPets.filter((l) => l.status === "Available").length}
              </p>
              <h3>Available</h3>
            </div>
            <div className="p-6 bg-red-300/40 rounded-lg shadow-md flex flex-col items-center gap-2">
              <p className="text-3xl font-black">
                {addedPets.filter((l) => l.status === "Adopted").length}
              </p>
              <h3>Adopted</h3>
            </div>
          </div>

          {/* Listings Grid */}
          {addedPets.length === 0 ? (
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <h1 className="text-2xl font-semibold text-dark-text">
                No Listings Found
              </h1>
              <p className="mt-2 text-sm text-light-text">
                You haven&apos;t added any pet listings yet. Start by adding a
                new pet!
              </p>
              <Link
                href="/dashboard/add-pet"
                className="inline-flex items-center gap-2 mt-4 rounded-full bg-accent/20 border border-accent/30 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/30 transition-colors"
              >
                <span className="text-lg">+</span> Add Your First Pet
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {addedPets.map((pet) => (
                <PetListCard key={pet._id} pet={pet} />
              ))}
            </div>
          )}
        </section>
      </Suspense>
    </main>
  );
};

export default MyListingsPage;
