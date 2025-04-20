import React from "react";
import PatternBackground from "../laylout/PatternBackground";

function ContactSection() {
  return (
    <section>
      <div className="relative isolate py-8 md:py-12 border-gray-100 border-b-2 mx-auto bg-white">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <PatternBackground />
              <h2 className="text-3xl font-bold tracking-tight text-[var(--themeColor2)]">
                Contact Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Feel free to reach out to us for any inquiries or assistance.
                We're here to help!
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                {/* Email */}
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                    </svg>
                  </dt>
                  <dd>
                    <a
                      className="hover:text-[var(--themeColor2)]"
                      href="mailto:support@medicareplus.com">
                      support@medicareplus.com
                    </a>
                  </dd>
                </div>

                {/* Phone */}
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Phone</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4.5l2.25 1.5m0 0l3 2.25m-3-2.25L3 7.5M21 4.5v15M3 10.5h18M3 14.25h18M3 18h18"></path>
                    </svg>
                  </dt>
                  <dd>
                    <a
                      className="hover:text-[var(--themeColor2)]"
                      href="tel:+8801234567890">
                      +880 1234 567 890
                    </a>
                  </dd>
                </div>

                {/* Address */}
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"></path>
                    </svg>
                  </dt>
                  <dd>
                    Keraniganj, Dhaka 1313, Bangladesh <br />
                    <a
                      className="hover:text-[var(--themeColor2)]"
                      href="https://maps.google.com?q=Keraniganj,Dhaka"
                      target="_blank"
                      rel="noopener noreferrer">
                      View on Google Maps
                    </a>
                  </dd>
                </div>

                {/* Working Hours */}
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Working Hours</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5M21 12A9 9 0 113 12a9 9 0 0118 0z"></path>
                    </svg>
                  </dt>
                  <dd>
                    Sunday – Friday: 9:00 AM – 8:00 PM <br /> Saturday: Closed
                  </dd>
                </div>

                {/* Social Media */}
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Follow Us</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2.25a9.75 9.75 0 110 19.5 9.75 9.75 0 010-19.5zm0 3.75a1.5 1.5 0 00-1.5 1.5v3h-3a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5h-3v-3a1.5 1.5 0 011.5-1.5h3"></path>
                    </svg>
                  </dt>
                  <dd className="inline-flex gap-3">
                    <a
                      className="hover:text-[var(--themeColor2)]"
                      href="https://facebook.com/medicareplus"
                      target="_blank"
                      rel="noopener noreferrer">
                      Facebook
                    </a>{" "}
                    <a
                      className="hover:text-[var(--themeColor2)]"
                      href="https://twitter.com/medicareplus"
                      target="_blank"
                      rel="noopener noreferrer">
                      Twitter
                    </a>{" "}
                    <a
                      className="hover:text-[var(--themeColor2)]"
                      href="https://linkedin.com/company/medicareplus"
                      target="_blank"
                      rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="full-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 outline-0 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--themeColor2)] sm:text-sm sm:leading-6"
                      name="Name"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Email Address
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 outline-0 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--themeColor2)] sm:text-sm sm:leading-6"
                      name="email"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="phone"
                      id="phone"
                      autoComplete="phone"
                      className="block w-full rounded-md border-0 px-3.5 py-2 outline-0 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--themeColor2)] sm:text-sm sm:leading-6"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 outline-0 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--themeColor2)] sm:text-sm sm:leading-6"
                      name="message"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="w-max  rounded-2xl border-2 border-gray-200 outline-0 bg-[var(--themeColor2)]  px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 ease-in-out hover:border-white hover:bg-[var(--themeColor)]">
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
