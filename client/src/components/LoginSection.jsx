import React from "react";
import Logo from "../assets/images/medicare+2.webp";
function LoginSection() {
  return (
    <div className="pt-3">
      <div>
        <img src={Logo} className="w-32 mx-auto" />
      </div>
      <div className="mt-6 flex flex-col items-center">
        <h1 className="text-xl xl:text-2xl font-bold text-[var(--themeColor2)]">
          Welcome Back to MediCare+
        </h1>
        <p className="mt-2 text-sm text-justify text-gray-500">
          Access your account securely and manage your healthcare with ease and
          stay connected with your doctors, schedule appointments, view medical
          records, and take control of your health—all in one place.
        </p>
        <div className="w-full flex-1 mt-8 mb-4">
          <div className="my-8 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              login here
            </div>
          </div>
          <div className="mx-auto pt-5 max-w-sm">
            <input
              className="focus:scale-[102%] transition-transform duration-300 w-full px-8 py-4 rounded-xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email"
              placeholder="Email"
            />
            <input
              className="focus:scale-[102%] transition-transform duration-300 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="password"
              placeholder="Password"
            />
            <button className="mt-5 tracking-wide font-semibold bg-[var(--themeColor2)] text-gray-100 w-full py-4 mx-auto rounded-2xl hover:bg-[var(--themeColor)] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
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
              <span className="ml-3">Login</span>
            </button>
            <p className="mt-6 text-xs text-gray-600 text-center">
              I agree to abide by templatana's
              <a href="#" className="border-b border-gray-500 border-dotted">
                Terms of Service
              </a>
              and its
              <a href="#" className="border-b border-gray-500 border-dotted">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;
