import React from "react";
import DoctorsCard from "./microComponents/DoctorCard";
import DocCardSkeleton from "../skeletons/DocCardSkeleton";
import PatternBackground from "../laylout/PatternBackground";
import useDoctorsStore from "../store/useDoctorStore";
import ErrorSection from "./ErrorSection";

function DoctorsSection({ Doctors }) {
  const { DoctorsLoading } = useDoctorsStore();
  console.log(DoctorsLoading);
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
        {DoctorsLoading === true && Doctors === null ? (
          <div className="mx-auto grid justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:justify-items-stretch">
            {Array.from({ length: 12 }).map((_, i) => (
              <DocCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="mx-auto grid justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-7 lg:grid-cols-4 lg:justify-items-stretch">
            {Doctors?.map((item, i) => (
              <DoctorsCard item={item} key={i} />
            ))}
          </div>
        )}
        {Doctors?.length === 0 && (
          <ErrorSection
            title={"No Doctors Found"}
            description={
              "Your wish list is empty try searching for a doctor and adding them to your wish list"
            }
            to={"/doctors"}
            buttonText={"Go to Doctors Page"}
          />
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
