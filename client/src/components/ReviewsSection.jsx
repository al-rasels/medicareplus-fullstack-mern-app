import React from "react";

import ReviewCard from "./microComponents/ReviewCard";
import RatingForm from "./microComponents/RatingForm";

function ReviewsSection() {
  return (
    <section>
      <div className="relative isolate py-8 md:py-12 border-gray-100 border-b-2 mx-auto ">
        <div className="absolute inset-y-0 top-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:full">
          <svg
            className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-12 sm:pt-32 lg:static lg:px-8 lg:py-16">
            <h5 className="mb-6 text-xl font-semibold text-center leading-8 text-gray-600">
              What Our previous Patients Say About Us.
            </h5>

            <div className="mx-auto max-w-xl lg:mx-0 space-y-3 ">
              {Array.from({ length: 3 }).map((_, i) => (
                <ReviewCard key={i} />
              ))}
            </div>
          </div>
          <idv className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-42">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-1">
                <RatingForm />
              </div>
            </div>
          </idv>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
