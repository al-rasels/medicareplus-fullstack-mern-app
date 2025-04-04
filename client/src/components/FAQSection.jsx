import React, { useState } from "react";
import PatternBackground from "../laylout/PatternBackground";

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleToggle = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null); // Close the active question if clicked again
    } else {
      setActiveQuestion(index); // Open the clicked question
    }
  };

  return (
    <section className="relative h-fit py-16 ">
      <PatternBackground />
      <div className="max-w-5xl mx-auto py-10 sm:py-20">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--themeColor2)]">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-lg font-medium text-gray-500">
            Some Frequently Asked Questions (FAQs) regarding MediCare+
          </p>
        </div>
        <div className="w-full px-7 md:px-10 xl:px-2 py-4">
          <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
            {/* Question 1 */}
            <div className="border-b border-[#0A071B]/10">
              <button
                className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-semibold text-gray-700 focus:outline-none p-5 "
                onClick={() => handleToggle(1)}>
                <span>
                  How can I schedule an appointment with a doctor on MediCare+?
                </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] ${
                    activeQuestion === 1 ? "rotate-180" : ""
                  }`}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                </svg>
              </button>

              <div
                className={`${
                  activeQuestion === 1 ? "block" : "hidden"
                } pt-2 pb-5 px-5 text-sm lg:text-base text-gray-600 font-normal`}>
                You can easily schedule an appointment by searching for your
                preferred doctor based on specialty, location, and availability.
                Once you find the right doctor, simply select an available time
                slot and confirm your booking.
              </div>
            </div>

            {/* Question 2 */}
            <div className="border-b border-[#0A071B]/10">
              <button
                className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-semibold text-gray-700 focus:outline-none p-5"
                onClick={() => handleToggle(2)}>
                <span>Is my medical information secure on MediCare+?</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] ${
                    activeQuestion === 2 ? "rotate-180" : ""
                  }`}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                </svg>
              </button>

              <div
                className={`${
                  activeQuestion === 2 ? "block" : "hidden"
                } pt-2 pb-5 px-5 text-sm lg:text-base text-gray-600 font-normal`}>
                Yes, your medical data is stored securely on our platform using
                advanced encryption methods. Only authorized healthcare
                providers and users with proper consent can access your
                information, ensuring your privacy and security.
              </div>
            </div>

            {/* Question 3 */}
            <div className="border-b border-[#0A071B]/10">
              <button
                className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-semibold text-gray-700 focus:outline-none p-5"
                onClick={() => handleToggle(3)}>
                <span>Can I consult with a doctor remotely on MediCare+?</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] ${
                    activeQuestion === 3 ? "rotate-180" : ""
                  }`}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                </svg>
              </button>
              {activeQuestion === 3 && (
                <div className="pt-2 pb-5 px-5 text-sm lg:text-base text-gray-600 font-normal">
                  Yes, MediCare+ offers telemedicine features that allow you to
                  have virtual consultations with doctors from the comfort of
                  your home. You can connect through video calls or chat,
                  depending on the doctor's preferences.
                </div>
              )}
            </div>

            {/* Question 4 */}
            <div>
              <button
                className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-semibold text-gray-700 focus:outline-none p-5"
                onClick={() => handleToggle(4)}>
                <span>Does MediCare+ support emergency medical services?</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] ${
                    activeQuestion === 4 ? "rotate-180" : ""
                  }`}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                </svg>
              </button>
              {activeQuestion === 4 && (
                <div className="pt-2 pb-5 px-5 text-sm lg:text-base text-gray-600 font-normal">
                  While MediCare+ focuses on general healthcare, we provide a
                  directory of healthcare providers for urgent care services.
                  However, for emergencies, we recommend contacting your nearest
                  hospital or emergency service directly.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
