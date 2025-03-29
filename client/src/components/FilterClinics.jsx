import React from "react";
import SearchBar from "./microComponents/SearchBar";

import CitySelect from "./microComponents/CitySelect";

function FilterClinics() {
  return (
    <section className="bg-gray-100 py-5">
      <div className="max-w-screen-md mt-6 md:mt-8 mx-auto">
        <div className="grid grid-cols-12 my-3 md:my-5 grid-rows-2 gap-5">
          <div className="col-span-12 md:col-span-8">
            <SearchBar />
          </div>

          <div className="col-span-12 sm:col-span-6  md:col-span-4 px-2 ">
            <CitySelect />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterClinics;
