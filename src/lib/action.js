const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

export const getAllPets = async () => {
    const res = await fetch(`${API_URL}/all-pets`);
    const pets = await res.json();
    return pets;
};

export const getPetById = async (petId) => {
    const res = await fetch(`${API_URL}/all-pets/${petId}`);
    if (!res.ok) {
        throw new Error("Failed to fetch pet details");
    }
    const pet = await res.json();
    return pet;
};

export const submitAdoptionRequest = async (formData, pet, session) => {
    const name = formData.get("name");
    const username = session?.name || "Anonymous";
    const email = session?.email || "No email provided";
    const message = formData.get("message");
    const date = formData.get("date");
    const statReq = "Pending";
    const petId = pet._id;
    const userId = session?.id;

    //send the data to the server
    const res = await fetch(`${API_URL}/adopt-pet`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            username,
            email,
            message,
            date,
            statReq,
            petId,
            userId,
        })
    });
    return res;
}