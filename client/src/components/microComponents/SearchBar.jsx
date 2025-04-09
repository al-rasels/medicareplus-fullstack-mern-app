import React from "react";
import useDoctorsStore from "../../store/useDoctorStore";

function SearchBar() {
  const { FilterSelect, FilterChange } = useDoctorsStore();

  return (
    <div>
      <div className="relative w-full max-w-xl mx-auto border hover:scale-[102%] border-gray-200 bg-white rounded-xl text-lg transition-all duration-300">
        <input
          placeholder="e.g. Blog"
          value={FilterSelect.keyword}
          onChange={(e) => FilterChange("keyword", e.target.value)}
          className="rounded-xl w-full h-16 bg-transparent py-2 pl-8 pr-32 text-gray-500 outline-none border-2 border-gray-100  hover:outline-none focus:ring-[var(--themeColor)] focus:border-[var(--themeColor)] "
          type="text"
          name="query"
          id="query"
        />
        <button
          type="submit"
          onClick={() => FilterChange("keyword", "")}
          className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-[var(--themeColor2)] sm:px-6 sm:text-base sm:font-medium hover:bg-[var(--themeColor)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <svg
            className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Clear
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
