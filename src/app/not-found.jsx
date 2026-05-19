"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { useState } from "react";
import "./globals.css";

export default function NotFound() {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <div className="min-h-screen bg-linear-to-br from-primary/10 via-accent/5 to-secondary/10 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated Blob Backgrounds */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl w-full">
        {/* Top Floating Pets */}
        <div className="mb-12 flex justify-center gap-12 opacity-10 pointer-events-none">
          <div
            className="text-6xl animate-bounce"
            style={{ animationDelay: "0s" }}
          >
            🐕
          </div>
          <div
            className="text-6xl animate-bounce"
            style={{ animationDelay: "0.2s" }}
          >
            🐈
          </div>
          <div
            className="text-6xl animate-bounce"
            style={{ animationDelay: "0.4s" }}
          >
            🐰
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          {/* 404 Illustration */}
          <div
            className={`mb-8 transition-all duration-1000 transform ${
              isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="text-9xl font-black bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
                4
              </div>
              <div
                className="text-7xl animate-bounce transform transition-transform hover:scale-110"
                style={{ animationDelay: "0.2s" }}
              >
                🐾
              </div>
              <div className="text-9xl font-black bg-linear-to-r from-accent via-secondary to-primary bg-clip-text text-transparent drop-shadow-lg">
                4
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 transform ${
              isAnimating
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <h1 className="text-5xl sm:text-6xl font-black text-dark-text mb-3 drop-shadow-sm">
              Oops! Page Not Found
            </h1>

            <p className="text-xl text-light-text mb-3 font-semibold">
              This pet seems to have wandered off the beaten path! 🐕‍🦺
            </p>

            <p className="text-base text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist. But
              don&apos;t worry! We have plenty of adorable pets waiting for you
              to discover them. Let&apos;s get you back on track!
            </p>

            {/* Decorative Status Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/30 transition-colors">
                <span className="text-lg">🐱</span> Not Found
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 border border-secondary/30 px-4 py-2 text-sm font-semibold text-secondary hover:bg-secondary/30 transition-colors">
                <span className="text-lg">😿</span> Lost Pup
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/30 transition-colors">
                <span className="text-lg">🐾</span> Error 404
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/" className="flex-1 sm:flex-none">
                <Button className="w-full bg-linear-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                  🏠 Go Back Home
                </Button>
              </Link>

              <Link href="/all-pets" className="flex-1 sm:flex-none">
                <Button className="w-full bg-linear-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                  🐾 Browse Pets
                </Button>
              </Link>
            </div>

            {/* Help Text */}
            <div className="pt-8 border-t border-secondary/20">
              <p className="text-sm text-muted">
                Need assistance?{" "}
                <Link
                  href="/"
                  className="text-primary font-bold hover:text-primary/80 underline underline-offset-2 transition-colors"
                >
                  Contact Support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Paw Marks - Bottom Background */}
      <div className="pointer-events-none fixed inset-0 bottom-0 z-0 opacity-5">
        <div
          className="absolute bottom-20 left-1/4 text-6xl animate-bounce"
          style={{ animationDelay: "0s" }}
        >
          🐾
        </div>
        <div
          className="absolute bottom-32 right-1/4 text-7xl animate-bounce"
          style={{ animationDelay: "0.4s" }}
        >
          🐾
        </div>
        <div
          className="absolute bottom-10 left-3/4 text-5xl animate-bounce"
          style={{ animationDelay: "0.8s" }}
        >
          🐾
        </div>
      </div>

      {/* Pet Characters */}
      <div
        className="pointer-events-none fixed bottom-0 right-0 text-9xl opacity-5 animate-bounce"
        style={{ animationDelay: "0.3s" }}
      >
        😸
      </div>
      <div
        className="pointer-events-none fixed bottom-0 left-0 text-9xl opacity-5 animate-bounce"
        style={{ animationDelay: "0.6s" }}
      >
        🐶
      </div>
    </div>
  );
}
