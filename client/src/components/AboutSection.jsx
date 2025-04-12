import React from "react";
import aboutImg from "../assets/images/docfeature.webp";
import PatternBackground from "../laylout/PatternBackground";

function AboutSection() {
  return (
    <section className="relative">
      <PatternBackground />
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mb-4 text-[var(--themeColor2)] text-xl font-bold md:text-5xl md:mb-6 ">
          Meet MediCare+
        </h2>
        <p className="mb-8 max-w-lg text-sm text-justify text-gray-500 sm:text-base md:mb-16">
          MediCare+ is a cutting-edge digital healthcare platform designed to
          connect patients and healthcare providers with the goal of improving
          the quality and accessibility of medical services. Whether you’re a
          patient looking for reliable care or a doctor aiming to streamline
          your practice, MediCare+ offers a comprehensive solution to meet your
          needs.
        </p>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <img
            src={aboutImg}
            alt="doctor-taking care of old man"
            className="inline-block h-full w-full rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-gray-300 p-10 sm:p-12">
            <h2 className="text-3xl text-[var(--themeColor2)] font-bold md:text-5xl">
              Our Mission
            </h2>
            <p className="text-sm text-gray-500 text-justify sm:text-base">
              MediCare+ aims to transform healthcare by providing an accessible,
              efficient, and secure platform that connects patients with
              healthcare providers. Our mission is to improve healthcare
              accessibility, streamline processes, and empower individuals to
              take control of their health. By leveraging technology, we strive
              to offer convenient and reliable healthcare services, foster
              collaboration between patients and doctors, and ensure data
              security. MediCare+ is committed to making quality healthcare
              available to everyone, anytime, anywhere.
            </p>

            <div className=" p-2">
              <ul className="space-y-3 text-md font-light text-gray-700">
                <li className="flex items-center ">
                  <span className="w-3 h-10 bg-blue-500 rounded-2xl mr-3"></span>
                  <span>
                    Enhance Accessibility: Easy access to healthcare anytime,
                    anywhere.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-10 bg-green-500 rounded-full mr-3"></span>
                  <span>
                    Streamline Processes: Simplify appointment scheduling and
                    management.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-10 bg-yellow-500 rounded-full mr-3"></span>
                  <span>
                    Ensure Data Security: Safeguard health data with secure
                    storage and sharing.
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-10 bg-red-500 rounded-full mr-3"></span>
                  <span>
                    Innovate Continuously: Leverage emerging technologies for
                    better care.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
