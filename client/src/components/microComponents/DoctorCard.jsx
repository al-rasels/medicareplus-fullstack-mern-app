import React from "react";
import StarRatings from "react-star-ratings";
import { CiLocationOn } from "react-icons/ci";
import { LiaClinicMedicalSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
function DoctorsCard({ item }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-50 border-y-6 hover:scale-[103%]   border-gray-200 hover:border-[var(--themeColor)] rounded-2xl group min-h-[120px]  transition-all duration-300">
        <div className="bg-white shadow-md overflow-hidden max-w-sm w-full  border-gray-200 transition-all duration-300 border-x-4  hover:border-gray-200 rounded-2xl">
          <div className="relative">
            <img
              src={item?.img}
              alt="Doctor image"
              className="w-full h-64 object-cover"
            />
            <span className="absolute top-2 left-2 bg-[var(--themeColor)]  text-white text-xs font-bold px-2 py-1 rounded">
              popular
            </span>
            <button className="absolute top-2 right-2 bg-white p-2 text-lg rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
              <FaRegHeart />
            </button>
          </div>
          <div className="px-2 py-2">
            <div className="flex justify-between items-start px-2 ">
              <div>
                <div>
                  <h1 className="text-xl text-center  my-3 font-bold  text-gray-500">
                    {item?.name}
                  </h1>
                </div>
                <span className="flex justify-between items-center gap-3 mb-3 mx-auto">
                  <p className="text-md font-normal text-white  bg-[var(--themeColor)] rounded-4xl px-3 py-0.5  ">
                    {item?.speciality.name}
                  </p>
                  <div className="flex">
                    <StarRatings
                      rating={parseFloat(item["rating"])}
                      starDimension="17.5px"
                      starSpacing="0.5px"
                      starRatedColor="var(--themeColor)"
                    />
                  </div>
                </span>
                <span className="mt-2 inline-flex gap-1 flex-col">
                  <p className="text-md font-light  inline-flex ">
                    <span className="mr-2">
                      <LiaClinicMedicalSolid />
                    </span>
                    {item?.clinic}
                  </p>
                  <p className="font-light inline-flex ">
                    <span className="mr-2">
                      <CiLocationOn />
                    </span>
                    {item?.location}
                  </p>
                </span>
              </div>
            </div>

            <div className="flex my-3 flex-wrap space-x-3 justify-center items-center">
              <span>
                <p className=" font-light text-md text-[var(--themeColor)] hover:text-[var(--themeColor2)]">
                  9:00 AM to 6:00 PM
                </p>
              </span>
              <Link to={item?.["_id"]}>
                <button className="bg-[var(--themeColor2)] text-white py-2 px-4 rounded-full font-semibold hover:bg-[var(--themeColor)] transition-colors duration-300">
                  Visit Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsCard;
