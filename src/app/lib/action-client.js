const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

import { getApiToken } from "./action";
import { useSession } from "./auth-client";

export const useUserInfo = () => {
    const { data, isPending } = useSession();
    const session = data?.user;
    return { session, isPending };
};

export const submitAdoptionRequest = async (formData, pet, session) => {
    const token = await getApiToken();
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
            "Authorization": `Bearer ${token}`
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
    const token = await getApiToken();
    const res = await fetch(`${API_URL}/all-pets/${petId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ status: status }),
    });
    return res;
}

export const updatePetDetails = async (petId, petData) => {
    const token = await getApiToken();
    const res = await fetch(`${API_URL}/all-pets/${petId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(petData),
    });
    return res;
}

// Fetch adoption requests for a pet status update
export const updateRequestStatus = async (petId, statReq) => {
    const token = await getApiToken();
    const res = await fetch(`${API_URL}/adopt-pet/${petId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ statReq: statReq }),
    });

    return res;
};

// Fetch add pet details 
export const submitAddPetRequest = async (petData) => {
    const token = await getApiToken();
    const res = await fetch(`${API_URL}/all-pets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(petData),
    });
    return res;
};

// delete adoption request
export const deleteAdoptionRequest = async (requestId) => {
    const token = await getApiToken();
    const res = await fetch(`${API_URL}/adopt-pet/${requestId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return res;
};

// delete from all pets
export const deletePet = async (petId) => {
    const token = await getApiToken();
    const res = await fetch(`${API_URL}/all-pets/${petId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return res;
};