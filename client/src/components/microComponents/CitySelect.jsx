import React, { useEffect } from "react";
import useDoctorsStore from "../../store/doctorStore";
import { useLocation } from "react-router-dom";

function CitySelect() {
  const { CityList, FilterChange } = useDoctorsStore();
  const location = useLocation();

  useEffect(() => {
    FilterChange("cityID", "");
  }, [location.pathname]);

  return (
    <div className="max-w-2xl mx-auto">
      <select
        onChange={(e) => {
          FilterChange("cityID", e.target.value);
        }}
        id="city"
        className="bg-gray-50 border hover:scale-[103%] transition-all duration-500 border-gray-300 text-gray-600 text-sm rounded-xl focus:ring-[var(--themeColor2)] focus:border-[var(--themeColor)] block w-full p-5 outline-0 text-md">
        <option value="">Choose a City</option>
        {CityList?.map(
          (city, i) => (
            <option key={i} value={city._id}>
              {city.name}
            </option>
          ) // assuming 'id' and 'name' are unique properties in the city data
        )}
      </select>
    </div>
  );
}

export default CitySelect;
