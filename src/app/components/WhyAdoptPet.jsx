import Link from "next/link";
import Icon from "./Icon";
import { cn } from "@heroui/styles";
import { PiPawPrintLight } from "react-icons/pi";

const reasons = [
  {
    id: 1,
    title: "Find a true companion",
    description:
      "Adoption gives a pet a second chance and gives you a loyal friend with a real story.",
  },
  {
    id: 2,
    title: "Simple, guided process",
    description:
      "Browse listings, review details, and send a request without confusing steps.",
  },
  {
    id: 3,
    title: "Trusted pet profiles",
    description:
      "See breed, age, location, health notes, and adoption status in one place.",
  },
  {
    id: 4,
    title: "Support a better future",
    description:
      "Every adoption helps reduce shelter pressure and creates more room for rescue pets.",
  },
];

const stats = [
  { id: 1, value: "1K+", label: "Happy matches" },
  { id: 2, value: "24h", label: "Average reply time" },
  { id: 3, value: "100%", label: "Pet-focused" },
];

const WhyAdoptPet = () => {
  return (
    <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -top-10 left-6 h-44 w-44 rounded-full bg-secondary/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl rounded-[2rem] border border-primary/15 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-semibold text-primary">
              <Icon src="/paw.png" alt="paw print" width={18} height={18} />
              <span>Why adopt a pet</span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-dark-text sm:text-4xl lg:text-5xl">
              Adoption that feels calm, friendly, and easy.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-light-text sm:text-lg">
              Our platform keeps the experience simple. You can explore verified
              pets, check the important details quickly, and move forward with
              confidence.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className={cn(
                    "rounded-2xl border border-primary/10 p-4 shadow-sm",
                    stat.id === 1
                      ? "bg-primary text-white"
                      : stat.id === 2
                        ? "bg-secondary text-dark-text"
                        : "bg-accent text-white",
                  )}
                >
                  <div className="text-2xl font-black">{stat.value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide ">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap gap-3">
              <Link
                href="/all-pets"
                className="inline-flex items-center justify-center  bg-primary px-6 py-2  font-semibold text-white transition-colors duration-200 hover:bg-primary/90"
              >
                Browse Pets
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center  border border-primary/20 bg-secondary px-6 py-2  font-semibold text-dark-text transition-colors duration-200 hover:border-primary hover:text-primary group-hover:bg-secondary/90 gap-2"
              >
                Join Now
                <PiPawPrintLight size={18} className="transform rotate-45" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <article
                key={reason.id}
                className="rounded-2xl border border-primary/10 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-secondary/25 text-sm font-black text-primary">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-bold text-dark-text">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-light-text">
                  {reason.description}
                </p>
              </article>
            ))}

            <div className="rounded-2xl border border-accent/15 bg-neutral/80 p-5 shadow-sm sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Gentle reminder
              </p>
              <p className="mt-3 text-sm leading-6 text-light-text sm:text-base">
                Adoption is more than a choice. It is a fresh start for a pet
                and a meaningful moment for your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdoptPet;
