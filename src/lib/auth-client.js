import { toast } from "@heroui/react";
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
})

export const { signIn, signUp, useSession, signOut } = createAuthClient()

export const signInWithGoogle = async () => {
    const data = await authClient.signIn.social({
        provider: "google",
    });


};