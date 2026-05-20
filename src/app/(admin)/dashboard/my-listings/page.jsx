import Image from "next/image";
import { Button, Card, Separator } from "@heroui/react";
import { MdModeEdit, MdVisibility, MdDelete, MdMessage } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import Link from "next/link";

const mockListings = [
  {
    _id: "1",
    petName: "ertyuiol",
    species: "Fish",
    breed: "Goldfish",
    age: 2,
    gender: "Male",
    location: "sarghkl",
    adoptionFee: 654,
    adoptionRequests: 1,
    status: "Available",
    imageUrl: "https://via.placeholder.com/300x300?text=Fish+Pet",
  },
  {
    _id: "2",
    petName: "Bella",
    species: "Cat",
    breed: "Persian",
    age: 3,
    gender: "Female",
    location: "Downtown",
    adoptionFee: 200,
    adoptionRequests: 3,
    status: "Available",
    imageUrl: "https://via.placeholder.com/300x300?text=Cat+Pet",
  },
];

const MyListingsPage = () => {
  return (
    <main className="min-h-screen bg-neutral px-4 py-8 sm:px-6 lg:px-8">
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
            href="/add-pet"
            className="rounded-none bg-secondary to-primary px-6 py-1.5 font-semibold text-white shadow-lg transition hover:opacity-95"
          >
            <span className="text-lg">+</span>
            Add New Pet
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="p-6 bg-purple-300/40 rounded-lg shadow-md flex flex-col items-center gap-2">
            <p className="text-3xl font-black">{mockListings.length}</p>
            <h3>Total Listings</h3>
          </div>

          <div className="p-6 bg-green-300/40 rounded-lg shadow-md flex flex-col items-center gap-2">
            <p className="text-3xl font-black">
              {mockListings.filter((l) => l.status === "Available").length}
            </p>
            <h3>Available</h3>
          </div>
          <div className="p-6 bg-red-300/40 rounded-lg shadow-md flex flex-col items-center gap-2">
            <p className="text-3xl font-black">
              {mockListings.filter((l) => l.status === "Adopted").length}
            </p>
            <h3>Adopted</h3>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockListings.map((pet) => (
            <Card
              key={pet._id}
              className="overflow-hidden rounded-xl border border-secondary/20 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Container - PetCard Style */}
              <div className="relative h-64 bg-linear-to-br from-primary/10 to-secondary/10 overflow-hidden">
                <Image
                  src={pet.imageUrl}
                  alt={pet.petName}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Species Badge - Top Left */}
                <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                  {pet.species}
                </div>
                {/* Status Badge - Top Right */}
                <div
                  className={`absolute top-3 right-3 text-white px-3 py-1 rounded-full text-sm font-bold ${
                    pet.status === "Available" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {pet.status}
                </div>
                {/* Request Count - Bottom Right */}
                <div className="absolute bottom-3 right-3 bg-white/95 text-dark-text px-2 py-1 rounded text-xs font-bold">
                  {pet.adoptionRequests} request
                  {pet.adoptionRequests !== 1 ? "s" : ""}
                </div>
              </div>

              {/* Content - PetCard Style */}
              <div className="px-4 pt-4 bg-neutral">
                {/* Title and Location Header */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-dark-text">
                    {pet.petName}
                  </h3>
                  <p className="text-sm text-light-text flex items-center gap-1">
                    <TiLocationOutline className="text-primary" />
                    {pet.location}
                  </p>
                </div>

                <Separator className="mb-3" />

                {/* Details Grid - PetCard Style */}
                <div className="space-y-2 py-3">
                  <p className="text-light-text">
                    <span className="font-semibold text-dark-text">Breed:</span>{" "}
                    {pet.breed}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    {pet.age && (
                      <p className="text-light-text">
                        <span className="font-semibold text-dark-text">
                          Age:
                        </span>{" "}
                        {pet.age} years
                      </p>
                    )}
                    {pet.gender && (
                      <p className="text-light-text">
                        <span className="font-semibold text-dark-text">
                          Gender:
                        </span>{" "}
                        {pet.gender}
                      </p>
                    )}
                  </div>
                </div>

                {/* Price Display */}
                <div className="mb-3 flex items-center gap-2 bg-accent/15 rounded px-2 py-2">
                  <span className="text-xl font-black text-accent">
                    ${pet.adoptionFee}
                  </span>
                  <span className="text-xs text-light-text font-semibold">
                    Adoption Fee
                  </span>
                </div>
              </div>

              {/* Action Buttons - Admin Controls */}
              <div className="grid grid-cols-4 gap-2 border-t px-4 py-3 bg-neutral">
                <Button
                  isIconOnly
                  className="bg-primary text-white hover:bg-primary/80 transition-colors"
                  title="View Details"
                >
                  <MdVisibility size={18} />
                </Button>
                <Button
                  isIconOnly
                  className="bg-secondary text-dark-text hover:bg-secondary/80 transition-colors"
                  title="Edit Listing"
                >
                  <MdModeEdit size={18} />
                </Button>
                <Button
                  isIconOnly
                  className="bg-accent text-white hover:bg-accent/80 transition-colors"
                  title="View Requests"
                >
                  <MdMessage size={18} />
                </Button>
                <Button
                  isIconOnly
                  className="bg-red-500 text-white hover:bg-red-600 transition-colors"
                  title="Delete Listing"
                >
                  <MdDelete size={18} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MyListingsPage;
