import { Nunito, Poppins } from "next/font/google";
import "../globals.css";
import { Toast } from "@heroui/react";
const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "Dashboard - PetNearly",
    description: "Admin dashboard for managing pet adoption requests and user accounts.",
};

export default function RootLayout({ children }) {

    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${poppins.variable} ${nunito.variable} h-full antialiased`}
        >
            <body suppressHydrationWarning>
                {children}
                <Toast.Provider />
            </body>
        </html>
    );
}
