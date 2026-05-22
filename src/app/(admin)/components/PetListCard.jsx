"use client";

import { Button, Card, Separator } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { MdModeEdit, MdVisibility } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import DeleteModal from "./DeleteModal";
import { RequestModal } from "./RequestModal";
import { getUserAdoptionRequests } from "@/app/lib/action";

const PetListCard = ({ pet }) => {
  const router = useRouter();
  const [requests, setRequests] = useState([]);
  const petStatus = typeof pet.status === "string" ? pet.status : "Available";

  useEffect(() => {
    const handleFetchRequests = async () => {
      const requestsData = await getUserAdoptionRequests(pet._id);
      setRequests(requestsData);
    };
    handleFetchRequests();
  }, [pet._id]);

  return (
    <Card
      key={pet._id}
      className="overflow-hidden rounded-xl border border-secondary/20 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-0 gap-0"
    >
      {/* Image Container - PetCard Style */}
      <div className="relative h-64 bg-linear-to-br from-primary/10 to-secondary/10 overflow-hidden">
        <Image
          src={pet.imageUrl}
          alt={pet.petName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Species Badge - Top Left */}
        <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
          {pet.species}
        </div>
        {/* Status Badge - Top Right */}
        <div
          className={`absolute top-3 right-3  px-3 py-1 rounded-full text-sm font-bold ${
            petStatus === "Pending"
              ? "bg-amber-200/80 text-amber-600"
              : petStatus === "Available"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
          }`}
        >
          {petStatus}
        </div>
        {/* Request Count - Bottom Right */}
        <div className="absolute bottom-3 right-3 bg-white/95 text-dark-text px-2 py-1 rounded text-xs font-bold">
          {requests.length} request
          {requests.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Content - PetCard Style */}
      <div className="px-4 pt-4 bg-neutral">
        {/* Title and Location Header */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-dark-text">{pet.petName}</h3>
          <p className="text-sm text-light-text flex items-center gap-1">
            <TiLocationOutline size={18} className="text-primary" />
            {pet.location}
          </p>
        </div>

        <Separator />

        {/* Details Grid - PetCard Style */}
        <div className="space-y-2 py-3">
          <p className="text-light-text">
            <span className="font-semibold text-dark-text">Breed:</span>{" "}
            {pet.breed}
          </p>
          <div className="flex items-center justify-between text-sm">
            {pet.age && (
              <p className="text-light-text">
                <span className="font-semibold text-dark-text">Age:</span>{" "}
                {pet.age} years
              </p>
            )}
            {pet.gender && (
              <p className="text-light-text">
                <span className="font-semibold text-dark-text">Gender:</span>{" "}
                {pet.gender}
              </p>
            )}
          </div>
        </div>

        {/* Price Display */}
        <div className="mb-3 flex items-center justify-between gap-2 bg-accent/15 rounded px-2 py-2">
          <span className="text-xs text-light-text font-semibold">
            Adoption Fee
          </span>
          <span className="text-xl font-black text-accent">
            ${pet.adoptionFee}
          </span>
        </div>
      </div>

      {/* Action Buttons - Admin Controls */}
      <div className="grid grid-cols-4 gap-2 border-t px-4 py-3 bg-neutral justify-items-center">
        <Button
          isIconOnly
          onPress={() => router.push(`/all-pets/${pet._id}`)}
          className="bg-primary text-white hover:bg-primary/80 transition-colors"
          title="View Details"
        >
          <MdVisibility size={18} />
        </Button>
        <Button
          onPress={() => router.push(`/dashboard/edit-pet/${pet._id}`)}
          isIconOnly
          className="bg-secondary text-dark-text hover:bg-secondary/80 transition-colors"
          title="Edit Listing"
        >
          <MdModeEdit size={18} />
        </Button>
        <RequestModal petId={pet._id} requests={requests} />
        <DeleteModal pet={pet} />
      </div>
    </Card>
  );
};

export default PetListCard;
