export const getAllPets = async () => {
    const res = await fetch('http://localhost:4000/all-pets');
    const pets = await res.json();
    return pets;
};

export const getPetById = async (petId) => {
    const res = await fetch(`http://localhost:4000/all-pets/${petId}`);
    if (!res.ok) {
        throw new Error("Failed to fetch pet details");
    }
    const pet = await res.json();
    return pet;
};