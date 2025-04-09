import React from "react";

function CityCard() {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 border-t-4 border-b-4 border-gray-200 hover:border-[var(--themeColor)] rounded-2xl group min-h-[120px] transition-all duration-300 hover:scale-105">
      <a
        href="https://lqrs.com/brands/heineken/?utm_source=q&utm_medium=cpc&utm_campaign=brand&utm_term=Heineken"
        className="flex flex-col items-center justify-center p-4 bg-white border-gray-50 hover:border-gray-100 border-l-4 border-r-4  rounded-2xl group min-h-[120px] transition-all duration-300">
        <div className="mb-2 w-32 aspect-square flex items-center justify-center">
          <img
            className="max-w-full max-h-full object-cover rounded-2xl"
            src="https://placehold.co/400"
            alt="city"
          />
        </div>
        <h5 className="text-center text-lg sm:text-base font-medium text-gray-900 group-hover:text-[var(--themeColor2)]">
          City
        </h5>
      </a>
    </div>
  );
}

export default CityCard;
