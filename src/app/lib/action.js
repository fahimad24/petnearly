"use server";
import { headers } from "next/headers";
import { auth } from "./auth";


const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

export const getSession = async () => {
    const result = await auth.api.getSession({
        headers: await headers()
    })
    const session = result?.session;
    const { userId, token } = session || {};
    return { userId, token, session };
}

export const getApiToken = async () => {
    const { token } = await auth.api.getToken(
        {
            headers: await headers()
        }
    );
    return token;

};




// search, filter and sort pets
export const getAllPets = async (search = "", species = "", sortBy = "") => {
    const res = await fetch(`${API_URL}/all-pets?search=${search}&species=${species}&sortBy=${sortBy}`, {
        next: { tags: ['all-pets'] },

    });
    const pets = await res.json();
    return pets;
};

export const getPetById = async (petId) => {
    const token = await getApiToken();
    const res = await fetch(`${API_URL}/all-pets/${petId}`, {
        next: { tags: ['all-pets'] },
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!res.ok) {
        const error = new Error("Failed to fetch pet details");
        error.status = res.status;
        throw error;
    }
    const pet = await res.json();
    return pet;
};

export const getAdoptionRequests = async (userId) => {
    const token = await getApiToken();
    const res = await fetch(`${API_URL}/adopt-pet/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!res.ok) {
        throw new Error("Failed to fetch adoption requests");
    }
    const requests = await res.json();
    return requests;
}

export const getMatchingPets = async (userId) => {
    const token = await getApiToken();
    const res = await fetch(`${API_URL}/all-pets/user/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!res.ok) {
        throw new Error("Failed to fetch matching pets");
    }
    const pets = await res.json();
    return pets;
}

// get one adoption request by request id
export const getAdoptionRequestById = async (requestId) => {
    const token = await getApiToken();
    const res = await fetch(`${API_URL}/adopt-pet/request/${requestId}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!res.ok) {
        throw new Error("Failed to fetch adoption request");
    }
    const request = await res.json();
    return request;
}