import { Nunito, Poppins } from "next/font/google";
import "../globals.css";
import { Toast } from "@heroui/react";
import { Navbar } from "../components/Navbar";
import Link from "next/link";
import Logo from "../components/Logo";
import AsideBar from "../components/AsideBar";
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
            <body suppressHydrationWarning className="min-h-screen">
                <Navbar
                    brand={
                        <Link href="/" className="flex items-center">
                            <Logo />
                            <p className="font-black font-nunito text-5xl">
                                <span className="text-accent">Pet</span>
                                <span className="text-primary">Nearly</span>
                            </p>
                        </Link>
                    }

                    rightContent={
                        <>
                            <Link
                                className="bg-accent py-2 px-4 text-white cursor-pointer hover:bg-accent/90 transition-colors delay-100"
                                href="/login"
                            >
                                Login
                            </Link>
                            <Link
                                className="bg-primary py-2 px-4 text-white cursor-pointer hover:bg-primary/90 transition-colors delay-100"
                                href="/signup"
                            >
                                Sign Up
                            </Link>
                        </>
                    }
                    className="bg-neutral border-b border-accent/40 "
                />
                <div className="flex flex-col md:flex-row" >


                    <AsideBar />

                    <main className="flex-1">
                        {children}
                    </main>
                </div>

                <Toast.Provider />
            </body>
        </html>
    );
}
