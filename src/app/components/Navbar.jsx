"use client";

import { useState } from "react";
import { cn, Skeleton } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
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
            "grid grid-cols-3 h-20 items-center justify-between ",
            maxWidth !== "full" && maxWidthClasses[maxWidth],
            "mx-auto",
          )}
        >
          <div className="flex items-center">
            <button
              className="md:hidden"
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
          <ul className="hidden items-center justify-center gap-4 md:flex">
            {items &&
              items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      item.isActive && "font-medium text-accent",
                      "hover:text-accent transition-colors delay-100 text-dark-text",
                      pathname === item.href && "font-semibold text-accent",
                    )}
                    aria-current={item.isActive ? "page" : undefined}
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
          <div className="border-t border-gray-200 md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              {items &&
                items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2",
                        item.isActive && "font-medium text-accent",
                        "hover:text-accent transition-colors delay-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              {rightContent && (
                <li className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
                  {rightContent}
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
