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
              src="data:image/jpeg;base64,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"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgK6byrodGWX2uZXXTt2TnFjNddB0V-LnWQ&s"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrzM29LXUuqPXK5HxC3Lr6hiFzjHOhFVi_Q&s"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROt50kKhbVIak-whlY5EBln8NIcP0kYgEzdg&s"
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
