import React from "react";

import CityCard from "./microComponents/CityCard";
import PatternBackground from "../laylout/PatternBackground";

function CitySection() {
  return (
    <section className="relative py-5">
      <PatternBackground />

      <div className="mx-auto w-full max-w-screen-xl px-5 py-16 md:px-10 md:py-24 lg:py-32 ">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl text-[var(--themeColor2)]">
          Find which doctors in your city
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          we have a wide range of doctors to choose from. Find the best doctor
          for your needs.
        </p>
        {/* Content */}
        <div className="mx-auto grid justify-items-center gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-5 lg:grid-cols-6 lg:justify-items-stretch">
          {Array.from({ length: 10 }).map((_, i) => (
            <CityCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CitySection;
