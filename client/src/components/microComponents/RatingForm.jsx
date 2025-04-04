import React from "react";
import StarRatings from "react-star-ratings";

function RatingForm() {
  return (
    <>
      {/* component */}

      <div className="bg-white flex flex-col rounded-xl shadow-sm border border-gray-200">
        <div className="px-12 mt-2 py-5">
          <h2 className="text-gray-600 text-3xl font-semibold">
            Your opinion matters to us!
          </h2>
        </div>
        <div className=" w-full flex flex-col items-center">
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-lg text-gray-800">
              How was your experience?
            </span>
            <div className="cursor-pointer">
              <StarRatings
                starDimension="42px"
                rating={3.5}
                starRatedColor="var(--themeColor2)"
                numberOfStars={5}
                name="rating"
                starHoverColor="var(--themeColor2)"
              />
            </div>
          </div>
          <div className="w-3/4 flex flex-col">
            <textarea
              rows={3}
              className="p-4 text-gray-500 rounded-xl resize-none bg-gray-100"
              defaultValue={"Leave a message, if you want"}
            />
            <button className="py-3 my-8 text-lg bg-[var(--themeColor2)] hover:bg-[var(--themeColor)] transition-colors duration-300 rounded-xl text-white">
              Rate now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RatingForm;
