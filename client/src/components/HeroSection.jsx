import React from "react";
import bgVideo from "../assets/video/hero-bg.mp4";
import heroP from "../assets/images/hero-p.webp";

function HeroSection() {
  return (
    <section className="relative w-full md:h-[80vh] flex items-center justify-center">
      {/* Background Video */}
      <video
        src={bgVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover contrast-75"></video>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8 text-white">
        {/* Left Section */}
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10 rounded-2xl bg-white/10 border-x-10 border-y-1 px-10">
          <div className="text-left">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
              Search for your favorite
              <span className="font-bold text-[var(--themeColor2)] hover:text-[var(--themeColor)]">
                {" "}
                Doctors
              </span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              we have a wide range of doctors to choose from. Find the best
              doctor for your needs.
            </p>
            <div className="mt-5 sm:flex md:mt-8">
              <div className="relative w-full max-w-xl mx-auto bg-white rounded-full">
                <input
                  placeholder="e.g. Blog"
                  className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-[var(--themeColor2)] focus:border-[var(--themeColor2)]"
                  type="text"
                  name="query"
                  id="query"
                />
                <button
                  type="submit"
                  className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-[var(--themeColor2)] sm:px-6 sm:text-base sm:font-medium hover:bg-[var(--themeColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <svg
                    className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
          <img
            src={heroP}
            alt="doctor"
            className="inset-shadow-white shadow-4xl border-y-10 border-x-1 px-2 border-white/75 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
