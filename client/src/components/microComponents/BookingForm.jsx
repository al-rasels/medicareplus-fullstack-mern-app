import React from "react";

function BookingForm() {
  return (
    <div className="flex items-center justify-center  bg-white rounded-2xl shadow-sm border border-gray-200  p-12">
      {/* Author: FormBold Team */}
      <div className="mx-auto w-full max-w-[550px]">
        <form>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[var(--themeColor2)] focus:shadow-md focus:scale-[102%] transition-transform duration-300"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
            />
          </div>
          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-medium text-gray-600 ">
              Reason for appointment
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Information about patient condition"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-gray-600">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-gray-600">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-medium text-gray-600 ">
              Living address Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Enter full address"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md focus:border-[var(--themeColor2)]
focus:scale-[102%] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="hover:shadow-form w-full rounded-md bg-[var(--themeColor2)] hover:bg-[var(--themeColor)]  transition-transform duration-100 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Request Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
