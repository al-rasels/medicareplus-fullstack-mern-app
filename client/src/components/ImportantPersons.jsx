import React from "react";
import PatternBackground from "../laylout/PatternBackground";

function ImportantPersons() {
  return (
    <section className="relative">
      <PatternBackground />
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-[var(--themeColor2)] text-3xl font-bold md:text-5xl">
          Brains Behind Medicare+
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Meet the people who are driving innovation at MediCare+
        </p>
        {/* Content */}
        <div className="grid grid-cols-2 justify-center justify-items-center gap-5 sm:justify-items-stretch  md:gap-8 md:grid-cols-2">
          {/* CEO */}
          <div className="grid w-full grid-flow-row justify-center gap-6 rounded-lg bg-white border border-solid border-gray-200 p-8 md:grid-cols-2 shadow-sm">
            <img
              src="https://placehold.co/400"
              alt="John Doe"
              className="inline-block h-72 rounded-lg w-full  object-cover"
            />
            <div>
              <p className="text-xl text-center font-semibold text-[var(--themeColor2)]">
                John Doe
              </p>
              <p className="mb-4 font-semibold text-gray-500 text-center">
                Founder & CEO
              </p>
              <p className="text-sm text-gray-500 sm:text-base text-justify">
                John is a visionary entrepreneur with over 15 years of
                experience in healthcare and technology. He founded MediCare+ to
                make healthcare more accessible and efficient for everyone,
              </p>
            </div>
          </div>
          {/* CTO */}
          <div className="grid w-full grid-flow-row justify-center gap-6 rounded-lg bg-white border border-solid border-gray-200 shadow-sm p-8 md:grid-cols-2">
            <img
              src="https://placehold.co/400"
              alt="Sarah Smith"
              className="inline-block rounded-lg h-72 w-full object-cover"
            />
            <div>
              <p className="text-xl text-center font-semibold text-[var(--themeColor2)]">
                Sarah Smith
              </p>
              <p className="mb-4 font-semibold text-gray-500 text-center">
                Chief Technology Officer
              </p>
              <p className="text-sm text-gray-500 sm:text-base text-justify">
                Sarah is an experienced CTO with expertise in building scalable,
                secure healthcare platforms. She is passionate about using
                cutting-edge technology to improve healthcare delivery and the
                patient experience.
              </p>
            </div>
          </div>
          {/* Medical Advisor */}
          <div className="grid w-full grid-flow-row justify-center gap-6 rounded-lg bg-white border border-solid border-gray-200 shadow-sm p-8 md:grid-cols-2">
            <img
              src="https://placehold.co/400"
              alt="Dr. Emily Johnson"
              className="inline-block rounded-lg h-72 w-full object-cover"
            />
            <div>
              <p className="text-xl text-center font-semibold text-[var(--themeColor2)]">
                Dr. Emily Johnson
              </p>
              <p className="mb-4 font-semibold text-gray-500 text-center">
                Medical Advisor
              </p>
              <p className="text-sm text-gray-500 sm:text-base text-justify">
                Dr. Johnson is a board-certified family physician with over 10
                years of experience. She provides expert guidance on medical
                practices to ensure MediCare+ meets the highest standards of
                healthcare quality.
              </p>
            </div>
          </div>
          {/* Product Manager */}
          <div className="grid w-full grid-flow-row justify-center gap-6 rounded-lg bg-white border border-solid border-gray-200 shadow-sm p-8 md:grid-cols-2">
            <img
              src="https://placehold.co/400"
              alt="Michael Lee"
              className="inline-block rounded-lg h-72 w-full object-cover"
            />
            <div>
              <p className="text-xl text-center font-semibold text-[var(--themeColor2)]">
                Michael Lee
              </p>
              <p className="mb-4 font-semibold text-gray-500 text-center">
                Product Manager
              </p>
              <p className="text-sm text-gray-500 sm:text-base text-justify">
                Michael is a product manager with a background in healthcare and
                technology. He ensures that MediCare+ delivers a seamless user
                experience and meets the needs of both patients and healthcare
                providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImportantPersons;
