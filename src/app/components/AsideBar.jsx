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
    <aside className="w-full md:w-72 py-20 bg-neutral border border-secondary/20 shadow-sm rounded-lg p-4 h-svh">
      <h2 className="text-xl font-extrabold text-dark-text mb-4">
        Admin Panel
      </h2>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-md px-3 py-2 font-semibold transition-colors duration-200",
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
