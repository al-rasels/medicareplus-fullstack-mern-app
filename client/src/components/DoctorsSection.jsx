import React from "react";
import DoctorsCard from "./microComponents/DoctorCard";
import Pagination from "./microComponents/Pagination";
import DocCardSkeleton from "../skeletons/DocCardSkeleton";

function DoctorsSection({ Doctors }) {
  return (
    <section className=" border-t border-b relative  border-gray-200">
      <div className="absolute inset-y-0 top-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:full">
        <svg
          className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_bottom_left,white)]"
          aria-hidden="true">
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="100%"
              y={-1}
              patternUnits="userSpaceOnUse">
              <path d="M130 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="white" />
          <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
            <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
      </div>
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
