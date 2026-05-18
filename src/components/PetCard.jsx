import React from "react";
import Image from "next/image";
import Icon from "./Icon";

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
        <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
          {pet.category || "Pet"}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-2xl font-bold text-foreground mb-2">{pet.name}</h3>

        <div className="space-y-2 mb-4">
          {pet.breed && (
            <p className="text-light-text">
              <span className="font-semibold text-dark-text">Breed:</span>{" "}
              {pet.breed}
            </p>
          )}
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

        {pet.description && (
          <p className="text-light-text text-sm mb-4 line-clamp-2">
            {pet.description}
          </p>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-primary text-white font-bold py-2 px-3 rounded-lg hover:bg-primary/80 transition-colors duration-200 flex items-center justify-center gap-2">
            View Details
          </button>
          <button className="bg-secondary text-dark-text font-bold py-2 px-3 rounded-lg hover:bg-secondary/80 transition-colors duration-200 flex items-center justify-center gap-2">
            <Icon src="/pawprint.png" alt="Adopt" width={16} height={16} />
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
