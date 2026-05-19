import React from "react";
import Image from "next/image";
import Icon from "./Icon";
import { TiLocationOutline } from "react-icons/ti";
import { cn } from "@heroui/styles";
import { Button, Separator } from "@heroui/react";
import Link from "next/link";

const PetCard = ({ pet }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-secondary/20">
      {/* Image Container */}
      <div className="relative h-64 bg-linear-to-br from-primary/10 to-secondary/10 overflow-hidden">
        {pet.imageUrl ? (
          <Image
            src={pet.imageUrl}
            alt={pet.petName || "Pet Image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon src="/pawprint.png" alt="Pet" width={80} height={80} />
          </div>
        )}
        <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
          {pet.species || "Pet"}
        </div>
        <div
          className={cn(
            "absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold",
            {
              "bg-green-500": pet.status === "Available",
              "bg-red-500": pet.status === "Adopted",
            },
          )}
        >
          {pet.status || "Pet"}
        </div>
      </div>

      {/* Content */}
      <div className="">
        <div className="px-4 pt-4 bg-neutral">
          <div className="flex items-center justify-between">
            {" "}
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {pet.petName || "Unnamed Pet"}
            </h3>
            <p className="text-sm text-muted flex items-center gap-1 mb-1">
              <TiLocationOutline />
              {pet.location || "Unknown"}
            </p>
          </div>

          <Separator></Separator>
          <div className="space-y-2 py-4">
            {pet.breed && (
              <p className="text-light-text">
                <span className="font-semibold text-dark-text">Breed:</span>{" "}
                {pet.breed}
              </p>
            )}
            <div className="flex items-center justify-between text-sm text-muted">
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
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3  border-t px-4 py-3">
          <Link
            className="bg-primary text-white font-bold py-2 px-3 w-full rounded-none hover:bg-primary/80 transition-colors duration-200 flex items-center justify-center gap-2"
            href={`/all-pets/${pet._id}`}
          >
            View Details
          </Link>

          <Button
            isDisabled={pet.status !== "Available"}
            className={cn(
              " text-dark-text font-bold w-full  transition-colors duration-200 flex items-center justify-center gap-2 rounded-none h-full",
              pet.status == "Available"
                ? "bg-secondary hover:bg-secondary/80"
                : "bg-red-500 cursor-not-allowed",
            )}
          >
            {pet.status === "Available" ? "Adopt Me" : "Adopted"}
            <Icon src="/pawprint.png" alt="Adopt" width={16} height={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
