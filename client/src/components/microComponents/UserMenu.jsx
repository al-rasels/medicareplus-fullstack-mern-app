import React, { useEffect, useState } from "react";
import UserAvatar from "./UserAvatar";
import { FaFilePrescription } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { TbUserHeart } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import useUserAccessStore from "../../store/userAccessStore";
import useWishStore from "../../store/useWishlistStore";
import { SuccessAlert } from "../../utilities/utility";
import { TbFileReport } from "react-icons/tb";
import { FaBlogger } from "react-icons/fa";
import { TbClock24 } from "react-icons/tb";
import { IoIosChatboxes } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { FaStackExchange } from "react-icons/fa6";
function UserMenu() {
  const { UserLogoutRequest, UserProfile } = useUserAccessStore();
  const { WishSaveRequest, WishList } = useWishStore();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef();

  // Logout Function
  const onLogout = async () => {
    localStorage.clear();
    const res = await UserLogoutRequest();
    window.location.href = "/";
    if (res) {
      SuccessAlert("Logout Successfully");
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Save wishlist
  useEffect(() => {
    if (WishList?.length > 0) {
      WishSaveRequest(WishList);
    }
  }, [WishList]);

  // Menu options for user and admin
  const menuOption = {
    user: [
      {
        label: "Prescriptions",
        icon: <FaFilePrescription size={16} />,
        to: "/prescription",
      },
      {
        label: "My Appointments",
        icon: <FaUserDoctor size={16} />,
        to: "/appointment",
      },
      {
        label: "Wishlist",
        icon: <TbUserHeart size={16} />,
        to: "/wishlist",
      },
      {
        label: "Help & Support",
        icon: <MdSupportAgent size={16} />,
        to: "/help-support",
      },
    ],
    // for future features Admin
    admin: [
      {
        label: "Manage Accounts",
        icon: <MdManageAccounts size={16} />,
        to: "/manage-accounts",
      },
      {
        label: "Manage Doctors",
        icon: <MdManageAccounts size={16} />,
        to: "/manage-doctors",
      },
      {
        label: "Reports",
        icon: <TbFileReport size={16} />,
        to: "reports-analytics",
      },
    ],
    // for future features Doctors
    doctor: [
      {
        label: "Appointments",
        icon: <IoPeople size={16} />,
        to: "doctor-appointment",
      },
      {
        label: "Prescriptions",
        icon: <FaFilePrescription size={16} />,
        to: "doctor-prescription",
      },
      {
        label: "Blogs Posts",
        icon: <FaBlogger size={16} />,
        to: "my-blogs",
      },
      {
        label: "Patient Support",
        icon: <FaUserDoctor size={16} />,
        to: "my-patients",
      },
    ],
    // for future features Support
    support: [
      {
        label: "Customer Support",
        icon: <TbClock24 size={16} />,
        to: "/customer-support",
      },
      {
        label: "Chat Support",
        icon: <IoIosChatboxes size={16} />,
        to: "chat-support",
      },
      {
        label: "Contact Support",
        icon: <FaStackExchange size={16} />,
        to: "contact-support",
      },
    ],
  };

  const role = UserProfile?.role;
  const currentMenu = menuOption[role];

  return (
    <div className="flex justify-center hover:cursor-pointer">
      <div className="relative inline-block">
        <button
          ref={menuRef}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}>
          <UserAvatar img={UserProfile?.img} />
        </button>

        <div
          ref={menuRef}
          className={`absolute left-1/2 transform -translate-x-1/2 z-20 w-64 py-2 mt-2 overflow-hidden ${
            isOpen ? "block" : "hidden"
          } bg-white rounded-md shadow-xl`}>
          {/* Profile Info */}
          <Link
            to={"/profile"}
            className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform hover:bg-gray-100">
            <img
              className="flex-shrink-0 object-cover mx-1 rounded-full w-8 h-8"
              src={UserProfile?.img}
              alt="avatar"
            />
            <div className="px-1 hover:text-white">
              <h1 className="text-sm font-semibold text-gray-600">
                {UserProfile?.name}
              </h1>
              <p className="text-sm text-gray-500">
                {UserProfile?.email?.length >= 20
                  ? UserProfile?.email.slice(0, 20) + "..."
                  : UserProfile?.email}
              </p>
            </div>
          </Link>

          <hr className="border-gray-200" />

          {/* Dynamic Menu Items */}
          {currentMenu?.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-[var(--themeColor2)]/5  hover:text-[var(--themeColor2)]">
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}

          <hr className="border-gray-200" />

          {/* Logout */}
          <button
            onClick={onLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
            <IoIosLogOut size={16} /> <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
