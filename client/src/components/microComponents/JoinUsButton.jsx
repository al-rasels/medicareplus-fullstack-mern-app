import React from "react";
import { Link } from "react-router-dom";

function JoinUsButton() {
  return (
    <Link
      to="/access"
      className="text-white hover:bg-[var(--themeColor)] bg-[var(--themeColor2)] focus:ring-4 font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none transition-colors duration-300 ease-in-out">
      Join us now
    </Link>
  );
}

export default JoinUsButton;
