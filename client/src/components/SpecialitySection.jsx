import { FaArrowRight } from "react-icons/fa";

import SpecialityCard from "./microComponents/SpecialityCard";

import PrimaryButton from "./microComponents/PrimaryButton";
import { Link } from "react-router-dom";
import SqureCard from "./../skeletons/SqureCard";

function SpecialitySection({ SpecialityList, buttonVisible }) {
  return (
    <section className="relative py-5">
      <div className="absolute inset-y-0 top-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:full">
        <svg
          className="absolute inset-0 h-full w-full stroke-gray-200/80 [mask-image:radial-gradient(100%_100%_at_top_right,white)]"
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

      <div className="mx-auto w-full max-w-screen-xl px-5 py-16 md:px-10 md:py-24 lg:py-32 ">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl text-[var(--themeColor2)]">
          Find your doctor by speciality
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          we have a wide range of doctors to choose from. Find the best doctor
          for your needs.
        </p>
        {/* Content */}
        {SpecialityList !== null ? (
          <div className="mx-auto grid justify-items-center gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-5 lg:grid-cols-6 lg:justify-items-stretch">
            {SpecialityList?.map((item, i) => {
              return <SpecialityCard key={i} item={item} />;
            })}
          </div>
        ) : (
          <div className="mx-auto grid justify-items-center gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-5 lg:grid-cols-6 lg:justify-items-stretch">
            {SpecialityList?.map((_, i) => {
              return <SqureCard key={i} />;
            })}
          </div>
        )}
        <div
          className={`flex flex-col ${buttonVisible} justify-center items-center py-16`}>
          <Link to="/specialist">
            <PrimaryButton>
              <div className="transition-all flex gap-2 hover:gap-5 items-center duration-300">
                <span className="inline-block">View More</span>
                <FaArrowRight className="inline-block" />
              </div>
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SpecialitySection;
