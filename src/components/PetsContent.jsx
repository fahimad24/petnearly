import PetCard from "./PetCard";

export const PetsContent = ({ pets, itemCount }) => {
  return (
    <div className="">
      {pets && pets.length > 0 ? (
        <>
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {pets.slice(0, itemCount).map((pet) => (
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
  );
};
