import SearchBar from "./microComponents/SearchBar";
import SpecialitySelect from "./microComponents/SpecialitySelect";
import CitySelect from "./microComponents/CitySelect";
import useDoctorsStore from "../store/doctorStore";
import { useEffect } from "react";

function FilterDoctors() {
  const { FilterSelect, ListByFilterRequest } = useDoctorsStore();
  useEffect(() => {
    (async () => {
      await ListByFilterRequest(FilterSelect);
    })();
  }, [FilterSelect]);

  return (
    <section className="bg-gray-100 py-5">
      <div className="max-w-screen-lg my-8 md:my-8 mx-auto ">
        <div className="grid grid-cols-12 my-5 md:my-8 grid-rows-2 gap-5">
          <div className="col-span-12 md:col-span-6">
            <SearchBar />
          </div>

          <div className="col-span-12 sm:col-span-6  md:col-span-3 px-2 ">
            <SpecialitySelect />
          </div>
          <div className="col-span-12 sm:col-span-6  md:col-span-3 px-2 ">
            <CitySelect />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilterDoctors;
