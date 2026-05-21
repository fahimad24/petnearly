import React, { Suspense } from "react";
import { PetsContent } from "./PetsContent";
import { LoadingSpinner } from "@/ui/LoadingSpinner";
import Icon from "./Icon";
import Link from "next/link";
import { getAllPets } from "../lib/action";

const FeaturePets = async () => {
  const data = await getAllPets();
  return (
    <section className=" py-16 bg-[url('/counter_bg.jpg')] bg-cover bg-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="py-1 px-3 rounded-2xl bg-secondary/20 inline-flex items-center mb-4 text-center text-sm font-semibold text-primary/90 justify-center gap-2">
            <Icon src="/paw.png" alt="paw print" width={18} height={18}></Icon>
            <span className="font-bold">Selected Pet for You</span>
          </div>
          <h2 className="text-4xl font-black text-dark-text mb-2">
            Featured <span className="text-accent">Pets</span>
          </h2>
          <p className="text-lg text-light-text font-semibold">
            Meet some of our adorable pets looking for their forever homes
          </p>
        </div>
        <Suspense
          fallback={
            <div className="h-svh flex items-center justify-center">
              <LoadingSpinner />
            </div>
          }
        >
          <PetsContent pets={data} itemCount={6} />
        </Suspense>
        <div className="flex justify-center mt-8">
          <Link
            href="/all-pets"
            className="bg-primary rounded-none py-3 px-6 text-white font-bold hover:bg-primary/90 transition-colors duration-200 flex items-center gap-2"
          >
            View All Pets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturePets;
