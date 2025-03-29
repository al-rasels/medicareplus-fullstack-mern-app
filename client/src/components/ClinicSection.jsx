import React from "react";
import DoctorsCard from "./microComponents/DoctorCard";
import Pagination from "./microComponents/Pagination";
import ClinicCard from "./microComponents/ClinicCard";

function ClinicSection() {
  return (
    <section className="bg-white border-y  border-gray-200">
      {/* Container */}
      <div className="mx-auto max-w-screen-xl px-5 py-8 md:px-10 md:py-12 lg:py-20 ">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl text-[var(--themeColor2)]">
          Our Clinic
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          we have a wide range of Clinic to choose from. Find the best doctor
          for your needs.
        </p>
        {/* Content */}
        <div className="mx-auto grid justify-items-center gap-5 sm:grid-cols-1 sm:gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:justify-items-stretch">
          {Array.from({ length: 8 }).map((_, i) => (
            <ClinicCard key={i} />
          ))}
        </div>
        {/* Pagination */}
        <div className="w-100 mx-auto md:my-20 my-10">
          <Pagination />
        </div>
      </div>
    </section>
  );
}

export default ClinicSection;
