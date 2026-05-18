export const getAllPets = async () => {
    const res = await fetch('http://localhost:4000/all-pets');
    const pets = await res.json();
    return pets;
};