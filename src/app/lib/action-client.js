const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

import { useSession } from "./auth-client";

export const useUserInfo = () => {
    const { data, isPending } = useSession();
    const session = data?.user;
    return { session, isPending };
};

export const submitAdoptionRequest = async (formData, pet, session) => {
    const name = formData.get("name");
    const username = session?.name || "Anonymous";
    const email = session?.email || "No email provided";
    const message = formData.get("message");
    const pickUpDate = formData.get("date");
    const requestDate = new Date().toLocaleDateString('en-CA');
    const statReq = "Pending";
    const petId = pet._id;
    const userId = session?.id;

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
            pickUpDate,
            requestDate,
            statReq,
            petId,
            userId,
        })
    });
    return res;
}

export const updatePetStatus = async (petId, status) => {
    const res = await fetch(`${API_URL}/all-pets/${petId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
    });
    return res;
}

export const updatePetDetails = async (petId, petData) => {
    const res = await fetch(`${API_URL}/all-pets/${petId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(petData),
    });
    return res;
}

// Fetch add pet details 
export const submitAddPetRequest = async (petData) => {
    const res = await fetch(`${API_URL}/all-pets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(petData),
    });
    return res;
};

// delete adoption request
export const deleteAdoptionRequest = async (requestId) => {
    const res = await fetch(`${API_URL}/adopt-pet/${requestId}`, {
        method: "DELETE",
    });
    return res;
};

// delete from all pets
export const deletePet = async (petId) => {
    const res = await fetch(`${API_URL}/all-pets/${petId}`, {
        method: "DELETE",
    });
    return res;
};