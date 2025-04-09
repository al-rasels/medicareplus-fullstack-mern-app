import React from "react";

function UserAvatar({ img }) {
  return (
    <div className="inline-flex items-center hover:cursor-pointer  gap-2 border-[var(--themeColor2)] hover:border-[var(--themeColor)]  border-4 rounded-full">
      <img src={img} className="object-cover w-14 h-14 rounded-full" />
    </div>
  );
}

export default UserAvatar;
