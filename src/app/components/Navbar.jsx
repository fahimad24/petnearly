"use client";

import { useState } from "react";
import { cn, Skeleton } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProfileAvatar } from "@/ui/Profile";
import { useSession } from "../lib/auth-client";
// or your cn utility

const maxWidthClasses = {
  sm: "max-w-[640px]",
  md: "max-w-[768px]",
  lg: "max-w-[1024px]",
  xl: "max-w-[1280px]",
  "2xl": "max-w-[1536px]",
  full: "max-w-full",
};

export function Navbar({
  brand,
  subImage,
  items,
  rightContent,
  className,
  maxWidth = "xl",
  position = "sticky",
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data, isPending } = useSession();
  const session = data?.user;

  return (
    <>
      <nav
        className={cn(
          "z-40 w-full ",
          position === "sticky" && "sticky top-0",
          position === "fixed" && "fixed top-0",
          className,
        )}
      >
        <header
          className={cn(
            "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  h-20 items-center justify-between xl:px-0 lg:px-8 md:px-6 px-4",
            maxWidth !== "full" && maxWidthClasses[maxWidth],
            "mx-auto",
          )}
        >
          <div className="flex items-center">
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            {brand}
          </div>
          <ul className="hidden items-center justify-center gap-4 lg:flex">
            {items &&
              items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "font-medium hover:text-accent transition-colors delay-100 text-dark-text",
                      pathname === item.href && "text-accent font-bold",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
          {rightContent && (
            <div className="hidden items-center justify-end gap-4 md:flex">
              {isPending ? (
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 shrink-0 rounded-full bg-gray-400" />
                </div>
              ) : session ? (
                <ProfileAvatar session={session} />
              ) : (
                rightContent
              )}
            </div>
          )}
        </header>
        {isMenuOpen && (
          <div className="border-t border-gray-200 lg:hidden">
            <ul className="flex flex-col gap-2 p-4">
              {items &&
                items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2",
                        "font-medium text-accent",
                        "hover:text-accent transition-colors delay-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              {rightContent && (
                <li className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
                  {isPending ? (
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 shrink-0 rounded-full bg-gray-400" />
                    </div>
                  ) : session ? (
                    <ProfileAvatar session={session} />
                  ) : (
                    rightContent
                  )}
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
      {subImage && subImage}
    </>
  );
}
