
import { jwtClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react"


export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_URL,
    plugins: [
        jwtClient()
    ]
})

export const { signIn, signUp, useSession, signOut } = createAuthClient()

export const signInWithGoogle = async () => {
    const data = await authClient.signIn.social({
        provider: "google",
    });


};