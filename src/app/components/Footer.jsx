import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  discover: [
    { label: "All Pets", href: "/all-pets" },
    { label: "Adoption Flow", href: "/" },
    { label: "Success Stories", href: "/" },
  ],
  account: [
    { label: "Login", href: "/login" },
    { label: "Sign Up", href: "/signup" },
    { label: "Dashboard", href: "/dashboard" },
  ],
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-primary/20 bg-linear-to-br from-primary to-[#1f5f1f] text-white">
      <div className="pointer-events-none absolute -top-12 -right-16 h-52 w-52 rounded-full bg-secondary/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 left-10 h-52 w-52 rounded-full bg-accent/25 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-end">
              <Logo />
              <p className="font-black font-nunito text-5xl leading-none">
                <span className="text-accent">Pet</span>
                <span className="text-secondary">Nearly</span>
              </p>
            </Link>
            <p className="mt-4 max-w-md text-sm sm:text-base text-white/85 leading-relaxed">
              Helping pets find caring homes with a smoother, more transparent
              adoption experience for families and shelters.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/all-pets"
                className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-white hover:bg-accent/90 transition-colors"
              >
                Find a Pet
              </Link>
              <Link
                href="/signup"
                className="rounded-full border border-white/40 px-5 py-2 text-sm font-bold text-white hover:bg-white hover:text-primary transition-colors"
              >
                Join Community
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-secondary">
              Discover
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.discover.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/85 hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-secondary">
              Account
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.account.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/85 hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/20 pt-5 text-xs sm:text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} PetNearly. All rights reserved.</p>
          <p>Designed for better pet matches and happier homes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
