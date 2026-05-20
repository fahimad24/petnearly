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
    return { userId, token };
}


// 
export const getAllPets = async () => {
    const res = await fetch(`${API_URL}/all-pets`, {
        next: { tags: ['all-pets'] },
    });
    const pets = await res.json();
    return pets;
};

export const getPetById = async (petId) => {
    const res = await fetch(`${API_URL}/all-pets/${petId}`, {
        next: { tags: ['all-pets'] },
    });
    if (!res.ok) {
        throw new Error("Failed to fetch pet details");
    }
    const pet = await res.json();
    return pet;
};

export const getAdoptionRequests = async ({ userId }) => {

    const res = await fetch(`${API_URL}/adopt-pet/${userId}`, {
        next: { tags: ['adoption-requests'] },
    });
    if (!res.ok) {
        throw new Error("Failed to fetch adoption requests");
    }
    const requests = await res.json();
    return requests;
}

export const getMatchingPets = async (userId) => {
    const res = await fetch(`${API_URL}/all-pets/user/${userId}`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch matching pets");
    }
    const pets = await res.json();
    return pets;
}