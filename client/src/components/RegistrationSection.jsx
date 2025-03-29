import React from "react";
import Logo from "../assets/images/medicare+2.webp";

function RegisterSection() {
  return (
    <div className="py-6">
      <div>
        <img src={Logo} className="w-32 mx-auto" />
      </div>
      <div className="mt-6 flex flex-col items-center">
        <h1 className="text-xl xl:text-2xl font-bold text-[var(--themeColor2)]">
          Welcome to MediCare+
        </h1>
        <p className="mt-2 text-sm text-justify text-gray-500">
          Create your account and take control of your healthcare journey. Stay
          connected with your doctors, schedule appointments, access medical
          records, and manage your health effortlessly—all in one place.
        </p>
        <div className="w-full flex-1 mt-6">
          <div className="my-6 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Register here
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="py-5 px-4 sm:rounded-lg md:px-10">
          <form>
            <div>
              <div className="mx-auto max-w-md">
                <input
                  className="mb-6 w-full px-8 py-4 rounded-xl font-medium bg-gray-100 border focus:scale-[102%] transition-transform duration-300 border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[var(--themeColor2)] focus:bg-white"
                  type="email"
                  placeholder="Full Name"
                />
                <input
                  className="w-full px-8 py-4 rounded-xl font-medium focus:scale-[102%] transition-transform duration-300 bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[var(--themeColor2)] focus:bg-white"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className=" mt-6 py-4 w-full px-8  focus:scale-[102%] transition-transform duration-300 rounded-xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[var(--themeColor2)] focus:bg-white"
                  type="text"
                  placeholder="Phone Number"
                />
                <input
                  className=" mt-6 py-4 w-full px-8  rounded-xl focus:scale-[102%] transition-transform duration-300 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[var(--themeColor2)] focus:bg-white"
                  type="Address"
                  placeholder="Address"
                />
                <button className="mt-5 tracking-wide font-semibold  bg-[var(--themeColor2)] text-gray-100 w-full py-4 rounded-lg hover:bg-[var(--themeColor)] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy={7} r={4} />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Register Now</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by templatana's
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>
                  and its
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterSection;
