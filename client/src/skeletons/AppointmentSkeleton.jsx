import React from "react";
import App from "./../App";

const AppointmentSkeleton = () => {
  return (
    <>
      <div className="flex items-center justify-center py-5 bg-white">
        <div className="bg-gray-200 animate-pulse rounded-xl p-5 lg:w-[1024px]">
          <div className="h-6 bg-gray-300 rounded mb-10"></div>
          <div className="bg-gray-50 rounded-lg p-10 flex justify-between md:items-center flex-col md:flex-row gap-6">
            <div className="flex md:items-center flex-col md:flex-row gap-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
              <div>
                <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="text-gray-500 inline-flex gap-2">
                  <span className="font-semibold bg-gray-300 rounded h-4 w-16"></span>
                  <span className="font-semibold bg-gray-300 rounded h-4 w-16"></span>
                </div>
              </div>
              <div className="pl-8">
                <div className="bg-gray-300 rounded h-10 w-32"></div>
              </div>
            </div>
            <button className="bg-gray-200 rounded h-10 w-32 flex items-center justify-center">
              <div className="h-6 bg-gray-300 rounded"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentSkeleton;
