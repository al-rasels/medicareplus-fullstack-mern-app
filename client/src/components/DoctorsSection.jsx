import React from "react";
import DoctorsCard from "./microComponents/DoctorCard";
import DocCardSkeleton from "../skeletons/DocCardSkeleton";
import PatternBackground from "../laylout/PatternBackground";

function DoctorsSection({ Doctors }) {
  return (
    <section className=" border-t border-b relative  border-gray-200">
      <PatternBackground />
      {/* Container */}
      <div className="mx-auto max-w-screen-xl px-5 py-8 md:px-10 md:py-12 lg:py-20 ">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl text-[var(--themeColor2)]">
          Our Doctors
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          we have a wide range of doctors to choose from. Find the best doctor
          for your needs.
        </p>
        {/* Content */}
        {Doctors ? (
          <div className="mx-auto grid justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-7 lg:grid-cols-4 lg:justify-items-stretch">
            {Doctors?.map((item, i) => (
              <DoctorsCard item={item} key={i} />
            ))}
          </div>
        ) : (
          <div className="mx-auto grid justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:justify-items-stretch">
            {Doctors?.slice(0, 8).map((_, i) => (
              <DocCardSkeleton key={i} />
            ))}
          </div>
        )}
        {/* Pagination */}
        {/* <div className="w-100 mx-auto md:my-20 my-10">
          <Pagination />
        </div> */}
      </div>
    </section>
  );
}

export default DoctorsSection;
