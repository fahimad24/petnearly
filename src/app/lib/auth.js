import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";
const client = new MongoClient(process.env.DATABASE_URL);
const db = client.db('userInfo');

export const auth = betterAuth({
    //...
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        },
    },
    session: {
        cookieCache: {
            enabled: true,
            strategy: "jwt",
            maxAge: 3 * 24 * 60 * 60, // 30 days}
        },
    },
    plugins: [
        jwt()
    ]
});