import Image from "next/image";
import React from "react";
import Icon from "./Icon";

export default function PetCareTips({ className = "" }) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="py-1 px-3 rounded-2xl bg-secondary/20 inline-flex items-center mb-4 text-center text-sm font-semibold text-primary/90 justify-center gap-2">
            <Icon src="/paw.png" alt="paw print" width={18} height={18}></Icon>
            <span className="font-bold">Happy & Healthy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dark-text mb-4 leading-tight">
            Essential <span className="text-accent">Care Tips</span>
          </h2>
          <p className="text-lg text-light-text font-medium leading-relaxed max-w-2xl">
            A few practical techniques can make your pet care routine more
            effective and easier to maintain over time.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Diet & Routine */}
          <div className="bg-white/80 p-8 md:p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(15,23,42,0.03)] border border-primary/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-black mb-6 text-primary">
              Diet & Exercise
            </h3>
            <ul className="grid gap-4">
              <li className="flex items-start gap-4">
                <span
                  className="mt-2 shrink-0 w-2 h-2 rounded-full bg-accent"
                  aria-hidden
                />
                <span className="text-light-text font-medium">
                  Provide fresh water and a balanced diet daily.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span
                  className="mt-2 shrink-0 w-2 h-2 rounded-full bg-accent"
                  aria-hidden
                />
                <span className="text-light-text font-medium">
                  Keep your pet mentally stimulated with toys and walks.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span
                  className="mt-2 shrink-0 w-2 h-2 rounded-full bg-accent"
                  aria-hidden
                />
                <span className="text-light-text font-medium">
                  Practice with active play to lock in what they learned.
                </span>
              </li>
            </ul>
          </div>

          {/* Image 1 */}
          <div className="bg-secondary/15 rounded-[2rem] overflow-hidden flex items-center justify-center p-6 border border-secondary/30 shadow-sm relative transition-transform duration-300 hover:-translate-y-1">
            <Image
              src="/pets-care.png"
              alt="Pet care illustration"
              className="w-full h-full object-cover max-h-62.5 scale-110 opacity-90"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>

          {/* Image 2 */}
          <div className="bg-accent/10 rounded-[2rem] overflow-hidden flex items-center justify-center p-6 border border-accent/20 shadow-sm relative transition-transform duration-300 hover:-translate-y-1">
            <Image
              src="/pet-grooming.png"
              alt="Pet grooming illustration"
              className="w-full h-full object-cover max-h-62.5 scale-110 opacity-90"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>

          {/* Card 2: Health & Vet */}
          <div className="bg-white/80 p-8 md:p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(15,23,42,0.03)] border border-primary/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-black mb-6 text-accent">
              Health & Grooming
            </h3>
            <ul className="grid gap-4">
              <li className="flex items-start gap-4">
                <span
                  className="mt-2 shrink-0 w-2 h-2 rounded-full bg-primary"
                  aria-hidden
                />
                <span className="text-light-text font-medium">
                  Schedule regular vet check-ups and vaccinations.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span
                  className="mt-2 shrink-0 w-2 h-2 rounded-full bg-primary"
                  aria-hidden
                />
                <span className="text-light-text font-medium">
                  Maintain grooming: brush, clean ears, and trim nails.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span
                  className="mt-2 shrink-0 w-2 h-2 rounded-full bg-primary"
                  aria-hidden
                />
                <span className="text-light-text font-medium">
                  Provide a safe, comfortable sleeping area.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
