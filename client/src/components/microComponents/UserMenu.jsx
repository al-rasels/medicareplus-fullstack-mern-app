import React, { useState } from "react";
import UserAvatar from "./UserAvatar";
import { TbUserEdit } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import { TbUserHeart } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import useUserAccessStore from "../../store/userAccessStore";
import { SuccessAlert } from "../../utilities/utility";
function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { UserLogoutRequest } = useUserAccessStore();
  const onLogout = async () => {
    const res = await UserLogoutRequest();
    sessionStorage.clear();
    localStorage.clear();

    window.location.href = "/";
    if (res) {
      SuccessAlert("Logout Successfully");
    }
  };

  return (
    <div>
      {/* component */}
      <div className="flex justify-center hover:cursor-pointer">
        <div className="relative inline-block">
          {/* Dropdown toggle button */}
          <button onClick={() => setIsOpen(!isOpen)}>
            <UserAvatar />
          </button>
          {/* Dropdown menu */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2  z-20 w-64 py-2 mt-2 overflow-hidden ${
              isOpen ? "block" : "hidden"
            } bg-white rounded-md shadow-xl`}>
            <a
              href="#"
              className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform  hover:bg-gray-100 ">
              <img
                className="flex-shrink-0 object-cover mx-1 rounded-full w-8 h-8"
                src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
                alt="jane avatar"
              />
              <div className="px-1 hover:text-white">
                <h1 className="text-sm font-semibold text-gray-600">
                  Jane Doe
                </h1>
                <p className="text-sm text-gray-500 ">janedoe@exampl.com</p>
              </div>
            </a>
            <hr className="border-gray-200" />
            <a
              href="#"
              className="flex items-center gap-3 jsu px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
              <TbUserEdit size={16} /> <span>edit profile</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
              <IoPeople size={16} /> <span>Appointment</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
              <TbUserHeart size={16} /> <span> Wishlist</span>
            </a>

            <hr className="border-gray-200" />
            <button
              onClick={() => onLogout()}
              className="flex items-center gap-3  px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
              <IoIosLogOut size={16} /> <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
