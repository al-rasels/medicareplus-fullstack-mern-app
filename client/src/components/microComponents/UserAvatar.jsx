import React from "react";

function UserAvatar() {
  return (
    <div className="inline-flex items-center hover:cursor-pointer  gap-2 border-[var(--themeColor2)] hover:border-[var(--themeColor)]  border-4 rounded-full">
      <img
        src="https://randomuser.me/api/portraits/women/50.jpg"
        className="object-cover w-14 h-14 rounded-full"
      />
    </div>
  );
}

export default UserAvatar;
