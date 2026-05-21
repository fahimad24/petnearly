import { Nunito, Poppins } from "next/font/google";
import "./globals.css";
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
    title: "PetNearly",
    description: "Pet adoption platform",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${poppins.variable} ${nunito.variable} h-full antialiased`}
        >
            <body suppressHydrationWarning className="min-h-screen">
                {children}
                <Toast.Provider />
            </body>
        </html>
    );
}