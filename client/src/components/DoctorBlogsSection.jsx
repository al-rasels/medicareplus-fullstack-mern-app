import React from "react";
import PatternBackground from "../laylout/PatternBackground";

function DoctorBlogsSection() {
  return (
    <section>
      <div className="relative isolate py-8 md:py-12 border-gray-100 border-b-2 mx-auto bg-white">
        <PatternBackground />
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 items-center justify-items-center ">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--themeColor2)]">
            Publish Your Blog with Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Share your expertise and insights with our community. Fill out the
            form below to submit your blog post.
          </p>
          <form className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-24 w-full">
            <div className="w-full mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl">
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:gap-x-8 px-5">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Blog Title or Heading
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
                    htmlFor="file-upload"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Blog Image from Any Online Source
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="file-upload"
                      autoComplete="file-upload"
                      className="block w-full rounded-md border-0 px-3.5 py-2 outline-0 text-gray-900 bg-gray-50 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--themeColor2)] sm:text-sm sm:leading-6"
                      name="file-upload"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Author Name or Referece Author Name
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
                    Blog Short Description
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
                    Blog Full Description
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
                  Publish Blog
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default DoctorBlogsSection;
