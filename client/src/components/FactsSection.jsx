import PatternBackground from "../laylout/PatternBackground";

function FactsSection() {
  return (
    <section className="relative border-b  border-gray-200">
      <PatternBackground />
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mb-8 text-[var(--themeColor2)] text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
          We get results
        </h2>
        {/* Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {/* Item */}
          <div className="relative p-8 md:p-10">
            <h3 className="mb-4 text-3xl text-[var(--themeColor)] font-bold md:text-5xl">
              1.5M
            </h3>
            <p className="text-sm text-gray-500">
              Over 1.5 million patients have successfully used MediCare+ for
              online consultations, finding the right doctors and healthcare
              solutions.
            </p>
            <div className="absolute right-0 top-1/3 hidden h-2/5 border-r border-gray-300 md:block"></div>
          </div>
          {/* Item */}
          <div className="relative p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold text-[var(--themeColor)] md:text-5xl">
              41%
            </h3>
            <p className="text-sm text-gray-500">
              41% of our users have reported faster recovery times due to the
              convenience of remote consultations and tailored healthcare plans.
            </p>
            <div className="absolute right-0 top-1/3 hidden h-2/5 border-r border-gray-300 md:block"></div>
          </div>
          {/* Item */}
          <div className="p-8 md:p-10">
            <h3 className="mb-4 text-3xl font-bold md:text-5xl text-[var(--themeColor)]">
              3657+
            </h3>
            <p className="text-sm text-gray-500">
              Over 3,657 healthcare professionals, including doctors,
              specialists, and consultants, are available for virtual
              consultations on MediCare+.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FactsSection;
