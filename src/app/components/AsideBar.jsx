"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@heroui/styles";

const menuItems = [
  { label: "My Requests", href: "/dashboard/my-requests" },
  { label: "Add Pet", href: "/dashboard/add-pet" },
  { label: "My Listings", href: "/dashboard/my-listings" },
];

const AsideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-72 md:w-57 md:py-20 py-10 bg-neutral border-r border-accent/40   p-4 md:min-h-screen">
      <h2 className="text-xl font-extrabold text-dark-text mb-4">
        Admin Panel
      </h2>

      <nav className=" gap-2 justify-center flex md:flex-col">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-md px-3 py-2 font-semibold transition-colors duration-200 shrink-0",
                isActive
                  ? "bg-secondary/30"
                  : "bg-white text-dark-text hover:bg-secondary/30",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AsideBar;
