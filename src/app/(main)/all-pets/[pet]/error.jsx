"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-backTone px-4 py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <section className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-br from-accent to-secondary text-5xl font-black text-white shadow-lg shadow-accent/30">
            !
            <span className="absolute -inset-2 rounded-full border border-accent/20" />
            <span className="absolute -inset-5 rounded-full border border-secondary/15" />
          </div>

          <div className="flex-1 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Pet details error
            </p>
            <h1 className="text-3xl font-black tracking-tight text-dark-text sm:text-4xl">
              We could not load this pet right now.
            </h1>
            <p className="max-w-xl text-sm leading-6 text-light-text sm:text-base">
              The listing page hit a problem while fetching data. You can retry
              the request or go back to the pet catalog and continue browsing.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-red-100 bg-red-50/70 p-4 text-sm text-red-700">
          If this keeps happening, the pet record may be missing or the server
          may be temporarily unavailable.
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
          >
            Try again
          </button>
          <Link
            href="/all-pets"
            className="inline-flex items-center justify-center rounded-full border border-accent/30 bg-white px-5 py-3 text-sm font-semibold text-dark-text transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            Back to all pets
          </Link>
        </div>
      </section>
    </main>
  );
}
