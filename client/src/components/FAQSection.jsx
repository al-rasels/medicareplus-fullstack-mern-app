import React from "react";

function FAQSection() {
  return (
    <section className="bg-[#F2F4FF] h-screen">
      <div className="max-w-5xl mx-auto py-10 sm:py-20">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Frequently asked questions
          </h2>
          <p className="text-lg font-medium text-slate-700/70">
            Questions related to web hosting
          </p>
        </div>
        <div className="w-full px-7 md:px-10 xl:px-2 py-4">
          <div className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white">
            <div className="border-b border-[#0A071B]/10">
              <button
                className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
                data-toggle="answer-1">
                <span>What types of hosting plans do you offer?</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className=" mt-1.5 md:mt-0 flex-shrink-0 rotate-180 transform h-5 w-5 text-[#5B5675]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                </svg>
              </button>
              <div
                className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium"
                id="answer-1"
                style={{ display: "none" }}>
                We offer shared hosting, VPS hosting, dedicated server hosting,
                and cloud hosting plans.
              </div>
            </div>
            <div className="border-b border-[#0A071B]/10">
              <button
                className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
                data-toggle="answer-2">
                <span>
                  What is the uptime guarantee for your hosting services?
                </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className=" mt-1.5 md:mt-0 flex-shrink-0  h-5 w-5 text-[#5B5675]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                </svg>
              </button>
              <div
                className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium"
                id="answer-2"
                style={{ display: "none" }}>
                We guarantee an uptime of 99.9% for all our hosting services.
              </div>
            </div>
            <div className="border-b border-[#0A071B]/10">
              <button
                className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
                data-toggle="answer-3">
                <span>Do you provide website migration assistance?</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className=" mt-1.5 md:mt-0 flex-shrink-0  h-5 w-5 text-[#5B5675]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                </svg>
              </button>
              <div
                className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium"
                id="answer-3"
                style={{ display: "none" }}>
                Yes, we offer free website migration assistance for new
                customers.
              </div>
            </div>
            <div className="">
              <button
                className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
                data-toggle="answer-4">
                <span>What security measures do you have in place?</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className=" mt-1.5 md:mt-0 flex-shrink-0  h-5 w-5 text-[#5B5675]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                </svg>
              </button>
              <div
                className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium"
                id="answer-4"
                style={{ display: "none" }}>
                We employ advanced security measures including firewalls, DDoS
                protection, and regular security audits.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
