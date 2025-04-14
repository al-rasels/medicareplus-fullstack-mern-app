import React from "react";
import StarRatings from "react-star-ratings";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";

import { LiaClinicMedicalSolid } from "react-icons/lia";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useWishStore from "../../store/useWishlistStore";
import useUserAccessStore from "../../store/userAccessStore";
import toast from "react-hot-toast";
function DoctorDetail({ DoctorsDetail, openForm, setOpenForm }) {
  const navigate = useNavigate();
  const { WishSaveRequest } = useWishStore();
  const { IsLogin } = useUserAccessStore();
  const handleWishList = async (id) => {
    if (!IsLogin()) {
      navigate("/access");
    } else {
      const res = await WishSaveRequest(id);
      if (res) {
        toast.success("Added to wishlist");
      }
    }
  };

  return (
    <section className=" py-10 px-5">
      {/* Doctor Profile Section */}
      <div className="flex flex-wrap bg-gray-50 rounded-2xl shadow-sm py-6 px-4 hover:scale-[102%] transition-transform duration-300">
        {/* Doctor Image */}
        <div className="w-full md:w-2/5 px-4 mb-5 md:mb-0 relative ">
          <img
            src={DoctorsDetail?.doctor?.img}
            alt="Doctor-Name"
            className="w-full h-auto rounded-lg shadow-lg "
            id="mainImage"
          />
          <div className="flex flex-col items-center justify-center  mt-10">
            <p className="font-light text-[var(--themeColor2)] mb-1  text-lg ">
              {DoctorsDetail?.doctor?.schedule}
            </p>
            <p className="font-light text-[var(--themeColor2)] mb-1  text-sm">
              {DoctorsDetail?.workDay}
            </p>
          </div>
          <button
            onClick={() => {
              handleWishList(DoctorsDetail?.doctor?._id);
            }}
            className="absolute top-4 text-[var(--themeColor)] right-8 bg-white p-2 text-lg rounded-full shadow-md hover:bg-gray-100 hover:text-red-500 transition-colors duration-200">
            <FaHeartCirclePlus size={25} />
          </button>
        </div>

        {/* Doctor Details */}
        <div className="w-full flex flex-col gap-3 md:w-3/5 px-4">
          <div className="flex flex-col items-start gap-2 my-1">
            <div>
              <h2 className="text-3xl font-bold text-gray-700 mb-2 ">
                {DoctorsDetail?.doctor?.name}
              </h2>
              <p className="text-gray-600 text-md ">
                {DoctorsDetail?.speciality?.["name"]}
              </p>
            </div>

            {/* Rating & Reviews */}
            <div className="flex flex-col items-start gap-3">
              <StarRatings
                rating={DoctorsDetail?.doctor?.rating}
                starDimension="20px"
                starSpacing="0.5px"
                starRatedColor="var(--themeColor2)"
              />
            </div>
            <div className="text-md justify-items-start font-semibold inline-flex gap-2 text-[var(--themeColor)]">
              <TbCurrencyTaka size={18} className=" text-center " />
              <span>{DoctorsDetail?.consultingFee}</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-justify leading-relaxed mb-3">
              {DoctorsDetail?.serviceDes}
            </p>
            <div className="flex flex-col item-start  gap-1">
              {/* Contact Details */}
              <p className="font-light inline-flex gap-2 text-gray-600 mb-1">
                <FaPhone className="text-[var(--themeColor2)]" />{" "}
                <span>{DoctorsDetail?.contact}</span>
              </p>
              <p className="font-light inline-flex gap-2 text-gray-600 mb-1">
                <LiaClinicMedicalSolid className="text-[var(--themeColor2)]" />{" "}
                <span>{DoctorsDetail?.doctor.clinic}</span>
              </p>
              <p className="font-light inline-flex gap-2 text-gray-600 mb-1">
                <FaLocationDot className="text-[var(--themeColor2)] " />{" "}
                <span> {DoctorsDetail?.doctor?.location}</span>
              </p>
            </div>
            <button
              onClick={() => {
                setOpenForm(!openForm);
              }}
              className={` ${
                openForm
                  ? "hidden"
                  : "py-3 px-4 my-8 text-md bg-[var(--themeColor2)] inline-flex items-center gap-2 hover:bg-[var(--themeColor)] transition-colors duration-300 rounded-full text-white"
              } `}>
              <FaUserDoctor /> Make Appointment
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 rounded-2xl shadow-md py-8 px-6 mt-8 max-w-3xl mx-auto hover:scale-[102%] transition-transform duration-300">
        <h3 className="text-2xl font-semibold text-center text-gray-600 mb-4">
          About {DoctorsDetail?.doctor?.name}
        </h3>
        <p className="text-gray-600 bg-white text-justify text-md leading-relaxed bg-gray-60 border border-gray-100 rounded-2xl p-5 ">
          {DoctorsDetail?.aboutMe}
        </p>
      </div>
    </section>
  );
}

export default DoctorDetail;
