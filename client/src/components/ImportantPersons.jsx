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
          <div className="grid w-full grid-flow-row justify-center gap-6 rounded-md border border-solid border-gray-300 p-8 md:grid-cols-2">
            <img
              src="https://placehold.co/400"
              alt="John Doe"
              className="inline-block h-72 w-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold">John Doe</p>
              <p className="mb-4 font-semibold text-gray-500">Founder & CEO</p>
              <p className="text-sm text-gray-500 sm:text-base">
                John is a visionary entrepreneur with over 15 years of
                experience in healthcare and technology. He founded MediCare+ to
                make healthcare more accessible and efficient for everyone,
                utilizing technology to bridge the gap between providers and
                patients.
              </p>
            </div>
          </div>
          {/* CTO */}
          <div className="grid w-full grid-flow-row justify-center gap-6 rounded-md border border-solid border-gray-300 p-8 md:grid-cols-2">
            <img
              src="https://placehold.co/400"
              alt="Sarah Smith"
              className="inline-block h-72 w-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold">Sarah Smith</p>
              <p className="mb-4 font-semibold text-gray-500">
                Chief Technology Officer
              </p>
              <p className="text-sm text-gray-500 sm:text-base">
                Sarah is an experienced CTO with expertise in building scalable,
                secure healthcare platforms. She is passionate about using
                cutting-edge technology to improve healthcare delivery and the
                patient experience.
              </p>
            </div>
          </div>
          {/* Medical Advisor */}
          <div className="grid w-full grid-flow-row justify-center gap-6 rounded-md border border-solid border-gray-300 p-8 md:grid-cols-2">
            <img
              src="https://placehold.co/400"
              alt="Dr. Emily Johnson"
              className="inline-block h-72 w-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold">Dr. Emily Johnson</p>
              <p className="mb-4 font-semibold text-gray-500">
                Medical Advisor
              </p>
              <p className="text-sm text-gray-500 sm:text-base">
                Dr. Johnson is a board-certified family physician with over 10
                years of experience. She provides expert guidance on medical
                practices to ensure MediCare+ meets the highest standards of
                healthcare quality.
              </p>
            </div>
          </div>
          {/* Product Manager */}
          <div className="grid w-full grid-flow-row justify-center gap-6 rounded-md border border-solid border-gray-300 p-8 md:grid-cols-2">
            <img
              src="https://placehold.co/400"
              alt="Michael Lee"
              className="inline-block h-72 w-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold">Michael Lee</p>
              <p className="mb-4 font-semibold text-gray-500">
                Product Manager
              </p>
              <p className="text-sm text-gray-500 sm:text-base">
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
