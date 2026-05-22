import React from "react";
import Icon from "./Icon";
import Link from "next/link";
import BottomThum from "./BottomThum";

const Hero = () => {
  return (
    <section className="lg:bg-[url('/banner.jpg')] bg-[url('/banner2.jpg')]  bg-cover lg:bg-bottom-right bg-center text-white xl:py-40 lg:py-32 md:py-24 py-16">
      <div className="max-w-7xl mx-auto  py-16 xl:px-0 lg:px-8 md:px-6 px-4 relative">
        <div className="max-w-140 max-sm:bg-backdrop rounded-2xl p-4 max-sm:backdrop-blur-sm">
          <div className="relative z-10">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-black mb-4 md:leading-18">
              Best Pet Adoption <span className="text-accent">Plat</span>
              <span className="text-secondary">form</span>
            </h1>
            <p className="text-xl font-bold text-white/90 mb-8 md:max-w-120 lg:max-w-140">
              Your one-stop platform for finding and adopting pets in need of a
              loving home.
            </p>
            <Link
              href="/all-pets"
              className="bg-secondary text-dark-text font-bold px-6 py-3  hover:bg-secondary/90 transition-colors delay-100 flex items-center gap-2 w-max "
            >
              Adopt Now
              <Icon src="/pawprint.png" alt="Adopt" width={20} height={20} />
            </Link>
          </div>
        </div>
        <div className="md:block hidden xl:px-0 lg:px-8 md:px-6 px-4 absolute bottom-0 left-0 w-full">
          <BottomThum></BottomThum>
        </div>
      </div>
    </section>
  );
};

export default Hero;
