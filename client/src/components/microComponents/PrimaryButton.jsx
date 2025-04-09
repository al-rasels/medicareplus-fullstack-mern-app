import React from "react";

function PrimaryButton({ children }) {
  return (
    <button className="text-white hover:bg-[var(--themeColor)] bg-[var(--themeColor2)] focus:ring-4 font-light rounded-3xl text-lg px-5  py-3  text-center focus:outline-none transition-colors duration-300 ease-in-out">
      {children}
    </button>
  );
}

export default PrimaryButton;
