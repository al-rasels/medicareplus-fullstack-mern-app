import React from "react";

function BookingCard() {
  return (
    <div className="flex items-center justify-center py-5">
      <div className="bg-white shadow-md rounded-xl p-10 lg:w-[1024px]">
        <p className="text-lg font-bold text-[var(--themeColor2)]  mb-10">
          Appointment IDX04541545
        </p>
        <div className="bg-[var(--themeColor2)]/5 rounded-lg p-10 flex justify-between md:items-center flex-col md:flex-row gap-6">
          <div className="flex md:items-center flex-col md:flex-row gap-6">
            <img
              className="w-24 h-24 object-cover rounded-full"
              src="https://placehold.co/150"
              alt="Avatar"
            />

            <div>
              <p className=" font-semibold text-md text-gray-600 mb-2">
                Appointment with Dr. Smith
              </p>
              <p className="text-gray-500 inline-flex gap-2">
                <span className="font-semibold">Date:</span> 2023-08-15.
                <span className="font-semibold">time:</span> 10:00 AM
              </p>
            </div>
            <div className="pl-8">
              <span class="inline-flex items-center rounded-md  mx-auto bg-green-50 px-3 py-2 text-xs font-medium  text-green-700 ring-1 ring-green-600/20 ring-inset">
                Completed
              </span>
            </div>
          </div>
          <button className="bg-white hover:text-[var(--themeColor2)] text-gray-600 outline-none font-semibold border hover:border-[var(--themeColor2)] border-gray-200 py-2 px-4 rounded hover:bg-white transition-colors duration-300">
            <p className="">Edit</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
