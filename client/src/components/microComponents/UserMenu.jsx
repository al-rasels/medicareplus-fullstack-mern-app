import React, { useEffect, useState } from "react";
import UserAvatar from "./UserAvatar";
import { TbUserEdit } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import { TbUserHeart } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import useUserAccessStore from "../../store/userAccessStore";
import { SuccessAlert } from "../../utilities/utility";
import { Link } from "react-router-dom";

function UserMenu() {
  const { UserLogoutRequest, UserProfile } = useUserAccessStore();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef();
  const onLogout = async () => {
    localStorage.clear();
    const res = await UserLogoutRequest();
    window.location.href = "/";
    if (res) {
      SuccessAlert("Logout Successfully");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    // Listen for both mouse and touch events for click outside to close model
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* component */}
      <div className="flex justify-center hover:cursor-pointer">
        <div className="relative inline-block">
          {/* Dropdown toggle button */}
          <button onClick={() => setIsOpen(!isOpen)}>
            <UserAvatar img={UserProfile?.img} />
          </button>
          {/* Dropdown menu */}
          <div
            ref={menuRef}
            className={`absolute left-1/2 transform -translate-x-1/2  z-20 w-64 py-2 mt-2 overflow-hidden ${
              isOpen ? "block" : "hidden"
            } bg-white rounded-md shadow-xl`}>
            <Link
              to={"/profile"}
              className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform  hover:bg-gray-100 ">
              <img
                className="flex-shrink-0 object-cover mx-1 rounded-full w-8 h-8"
                src={UserProfile?.img}
                alt="jane avatar"
              />
              <div className="px-1 hover:text-white">
                <h1 className="text-sm font-semibold text-gray-600">
                  {UserProfile?.name}
                </h1>
                <p className="text-sm text-gray-500 ">{UserProfile?.email}</p>
              </div>
            </Link>
            <hr className="border-gray-200" />
            <Link
              to="/edit-profile"
              className="flex items-center gap-3 jsu px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
              <TbUserEdit size={16} /> <span>edit profile</span>
            </Link>
            <Link
              to="/appointment"
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
              <IoPeople size={16} /> <span>Appointment</span>
            </Link>
            <Link
              to={"/wishlist"}
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
              <TbUserHeart size={16} /> <span> Wishlist</span>
            </Link>

            <hr className="border-gray-200" />
            <button
              onClick={() => onLogout()}
              className="flex items-center gap-3 w-full cursor=  px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
              <IoIosLogOut size={16} /> <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
