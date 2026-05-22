import { Navbar } from "../components/Navbar";
import Link from "next/link";
import Logo from "../components/Logo";
import AsideBar from "../components/AsideBar";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata = {
    title: "Dashboard - PetNearly",
    description: "Admin dashboard for managing pet adoption requests and user accounts.",
};

export default function AdminLayout({ children }) {

    return (
        <>
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
            <div className="flex min-h-screen flex-col md:flex-row">
                <AsideBar />
                <main className="flex-1 bg-[url('/counter_bg.jpg')] bg-position-[100%_100%] "><Suspense fallback={<Loading />}>{children}</Suspense></main>
            </div>
        </>
    );
}
