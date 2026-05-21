import Link from "next/link";
import Icon from "./Icon";

const steps = [
  {
    id: "01",
    title: "Explore Verified Pets",
    description:
      "Browse detailed profiles with temperament, age, and care notes so you can match with confidence.",
  },
  {
    id: "02",
    title: "Send Adoption Request",
    description:
      "Submit your request in minutes and connect directly with the pet owner through a guided flow.",
  },
  {
    id: "03",
    title: "Welcome Home",
    description:
      "Finalize details, prepare your home, and bring your new companion into a safe, loving space.",
  },
];

const AdoptionJourneySection = () => {
  return (
    <section className="relative overflow-hidden py-18 px-4 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-14 right-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto rounded-b-3xl border border-primary/20 bg-linear-to-br from-white via-neutral to-secondary/15 ">
        <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-5 lg:gap-12 lg:p-14">
          <div className="lg:col-span-2">
            <div className="py-1 px-3 rounded-2xl bg-secondary/20 inline-flex items-center mb-4 text-center text-sm font-semibold text-primary/90 justify-center gap-2">
              <Icon
                src="/paw.png"
                alt="paw print"
                width={18}
                height={18}
              ></Icon>
              <span className="font-bold">Adoption Journey</span>
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl font-black text-dark-text leading-tight">
              A Better Path to Pet Adoption
            </h2>
            <p className="mt-4 text-light-text text-base sm:text-lg leading-relaxed">
              We designed the process to feel calm, clear, and trustworthy.
              Every step is simple so you can focus on what matters: finding
              your next family member.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/all-pets"
                className="bg-accent text-white font-bold px-6 py-3 rounded-xl shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Start Exploring
              </Link>
              <Link
                href="/signup"
                className="border-2 border-primary text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-3 gap-4">
              {steps.map((step) => (
                <article
                  key={step.id}
                  className="group rounded-2xl border border-primary/15 bg-white/90 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="inline-block text-primary font-black text-2xl leading-none">
                    {step.id}
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-dark-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-light-text leading-6">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl bg-primary text-white p-4">
                <p className="text-2xl font-black">2.4k+</p>
                <p className="text-xs uppercase tracking-wide text-white/85">
                  Successful Matches
                </p>
              </div>
              <div className="rounded-xl bg-secondary/70 text-dark-text p-4">
                <p className="text-2xl font-black">98%</p>
                <p className="text-xs uppercase tracking-wide text-dark-text/80">
                  Positive Feedback
                </p>
              </div>
              <div className="rounded-xl bg-white border border-primary/20 p-4">
                <p className="text-2xl font-black text-primary">24h</p>
                <p className="text-xs uppercase tracking-wide text-light-text">
                  Avg. Reply Time
                </p>
              </div>
              <div className="rounded-xl bg-accent text-white p-4">
                <p className="text-2xl font-black">320+</p>
                <p className="text-xs uppercase tracking-wide text-white/90">
                  Active Shelters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionJourneySection;
