import React from "react";
import StarRatings from "react-star-ratings";

function ReviewCard() {
  return (
    <div className="flex flex-col gap-3 border bg-white border-gray-200 px-5 py-5 justify-center items-center rounded-md shadow-sm max-w-full">
      <div className="flex flex-col gap-4">
        {/* Profile and Rating */}
        <div className="flex justify justify-between items-center">
          <div className="flex gap-2">
            <div className="w-7 h-7 text-center font-medium rounded-full bg-gray-200">
              J
            </div>
            <span>Jess Hopkins</span>
          </div>
          <StarRatings
            size={20}
            rating={5}
            starDimension="20px"
            starRatedColor="var(--themeColor2)"
          />{" "}
        </div>
        <div className="text-gray-600 font-light">
          Gorgeous design! Even more responsive than the previous version. A
          pleasure to use!
        </div>
        <div className="flex justify-between">
          <span>Feb 13, 2021</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
