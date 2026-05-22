import { Navbar } from "@/app/components/Navbar";
import Logo from "@/app/components/Logo";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "PetNearly - Find Your Perfect Pet Match",
  description: "Discover your ideal pet companion with PetNearly. Browse, search, and connect with pets waiting for a loving home. Your perfect match is just a click away!",
};

export default function MainLayout({ children }) {

  return (
    <>
      <Navbar
        brand={
          <Link href="/" className="flex items-center">
            <Logo />
            <p className="font-black font-nunito lg:text-5xl md:text-4xl text-3xl">
              <span className="text-accent">Pet</span>
              <span className="text-primary">Nearly</span>
            </p>
          </Link>
        }
        className="bg-neutral"
        items={[
          { label: "Home", href: "/" },
          { label: "All Pets", href: "/all-pets" },
        ]}
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
        subImage={
          <div className=" h-10 w-full fixed top-18 z-20">
            <Image src="/menu_strip.png" alt="Logo" fill loading="eager" />
          </div>
        }
      />
      {children}
      <Footer />
    </>
  );
}
