import React from "react";
import { Link } from "react-router-dom";
import { LiaUsersSolid } from "react-icons/lia";
function JoinUsButton() {
  return (
    <Link
      to="/access"
      className="text-white inline-flex items-center justify-between gap-2 hover:bg-[var(--themeColor)] bg-[var(--themeColor2)] focus:ring-4 font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none transition-colors duration-300 ease-in-out">
      <LiaUsersSolid size={20} /> Join now
    </Link>
  );
}

export default JoinUsButton;
