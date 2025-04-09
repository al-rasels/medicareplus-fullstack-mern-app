import React, { useEffect } from "react";
import useDoctorsStore from "../../store/useDoctorStore";
import { useLocation } from "react-router-dom";

function SpecialitySelect() {
  const { SpecialityList, FilterChange } = useDoctorsStore();
  const location = useLocation();

  useEffect(() => {
    FilterChange("specialityID", "");
  }, [location.pathname]);
  return (
    <div className="max-w-2xl mx-auto">
      <select
        onChange={(e) => {
          FilterChange("specialityID", e.target.value);
        }}
        id="speciality"
        className="bg-gray-50 hover:scale-[103%] transition-all duration-500 border border-gray-300 text-gray-600 text-sm rounded-xl focus:ring-[var(--themeColor)] focus:border-[var(--themeColor)] block w-full text-md p-5 outline-0">
        <option value="">Choose a Speciality</option>
        {SpecialityList?.map((speciality, i) => (
          <option key={i} value={speciality._id}>
            {speciality.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SpecialitySelect;
