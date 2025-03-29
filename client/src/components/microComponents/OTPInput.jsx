import React from "react";

function OTPInput() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen space-y-5">
        <h1 className="font-bold text-3xl text-green-500">Submit OTP</h1>
        <div
          className="flex items-center gap-2.5 justify-center"
          id="otp-container">
          <input
            type="text"
            maxLength={1}
            className="w-16 h-16 font-semibold outline-none text-xl text-gray-700 text-center border rounded-md transition-all bg-gray-100 border-gray-300 focus:border-blue-500"
          />
          <input
            type="text"
            maxLength={1}
            className="w-16 h-16 font-semibold outline-none text-xl text-gray-700 text-center border rounded-md transition-all bg-gray-100 border-gray-300 focus:border-blue-500"
          />
          <input
            type="text"
            maxLength={1}
            className="w-16 h-16 font-semibold outline-none text-xl text-gray-700 text-center border rounded-md transition-all bg-gray-100 border-gray-300 focus:border-blue-500"
          />
          <input
            type="text"
            maxLength={1}
            className="w-16 h-16 font-semibold outline-none text-xl text-gray-700 text-center border rounded-md transition-all bg-gray-100 border-gray-300 focus:border-blue-500"
          />
          <input
            type="text"
            maxLength={1}
            className="w-16 h-16 font-semibold outline-none text-xl text-gray-700 text-center border rounded-md transition-all bg-gray-100 border-gray-300 focus:border-blue-500"
          />
          <input
            type="text"
            maxLength={1}
            className="w-16 h-16 font-semibold outline-none text-xl text-gray-700 text-center border rounded-md transition-all bg-gray-100 border-gray-300 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default OTPInput;
