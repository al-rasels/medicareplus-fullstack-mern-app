import React from "react";

function ButtonLoader() {
  return (
    /* From Uiverse.io by Javierrocadev */
    <div className="flex flex-row py-1 items-center justify-center gap-2">
      <div className="w-3 h-4 rounded-2xl bg-white animate-bounce"></div>
      <div className="w-3 h-4 rounded-2xl bg-white animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-3 h-4 rounded-2xl bg-white animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
}

export default ButtonLoader;
