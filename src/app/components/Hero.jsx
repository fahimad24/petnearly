import React from "react";
import Icon from "./Icon";
import Link from "next/link";
import BottomThum from "./BottomThum";

const Hero = () => {
  return (
    <section className="bg-[url('/banner.jpg')] bg-cover bg-bottom-right text-white py-40 ">
      <div className="max-w-7xl mx-auto  py-16 relative">
        <div className="max-w-140">
          <h1 className="text-6xl font-black mb-4 leading-18">
            Best Pet Adoption <span className="text-accent">Plat</span>
            <span className="text-secondary">form</span>
          </h1>
          <p className="text-xl font-bold text-white/90 mb-8">
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
        <BottomThum></BottomThum>
      </div>
    </section>
  );
};

export default Hero;
