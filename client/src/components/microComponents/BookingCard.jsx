import React from "react";
import { TiMessage } from "react-icons/ti";
import { MdOutlineVideoCall } from "react-icons/md";
import { Link } from "react-router-dom";
function BookingCard({ booking }) {
  return (
    <div className="flex items-center justify-center py-5">
      <div className="bg-[var(--themeColor2)]/10 shadow-md rounded-xl p-5 lg:w-[1024px]">
        <p className="text-lg font-bold text-[var(--themeColor2)]  mb-10">
          Appointment ID: {booking._id.toUpperCase()}
        </p>
        <div className="bg-gray-50 rounded-lg p-10 flex justify-between md:items-center flex-col md:flex-row gap-6">
          <div className="flex md:items-center flex-col md:flex-row gap-6">
            <img
              className="w-24 h-24 object-cover rounded-full"
              src={booking?.doctor?.img}
              alt={booking?.doctor?.name}
            />
            <div>
              <p className="font-semibold text-[var(--themeColor2)] text-lg  mb-2">
                Appointment with {booking?.doctor?.name}
              </p>
              <p>{booking?.doctor?.speciality?.name} </p>
              <p className="text-gray-500 inline-flex gap-2">
                <span className="font-semibold">Date:</span> {booking?.date}
                <span className="font-semibold">time:</span> {booking?.time}
              </p>
            </div>
            <div className="pl-8">
              <button className="bg-white hover:text-[var(--themeColor)] text-gray-600 outline-none font-semibold border hover:border-[var(--themeColor)] border-gray-200 py-2 px-4 rounded hover:bg-white transition-colors duration-300 inline-flex gap-2">
                <MdOutlineVideoCall size={22} /> <span>Join Meeting</span>
              </button>
            </div>
          </div>
          <Link
            to={`/help-support/${booking?.doctor?._id}`}
            className="bg-white hover:text-[var(--themeColor2)] text-gray-600 outline-none font-semibold border hover:border-[var(--themeColor2)] border-gray-200 py-2 px-4 rounded hover:bg-white transition-colors duration-300 inline-flex gap-2">
            <TiMessage size={22} />
            <p className="">Message</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
