import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
function SideBlogCard({ item }) {
  return (
    <div className="max-w-2xl mx-auto my-5 ">
      <div className="flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
        <div className="relative w-32 h-32 flex-shrink-0">
          <img
            className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
            loading="lazy"
            src={item.img}
          />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <p className="text-lg font-semibold">
            {item.title.length > 25
              ? `${item.title.slice(0, 22)}...`
              : item.title}
          </p>
          <p className="text-gray-500 font-light px-3 text-justify ">
            {item.description.length > 60
              ? `${item.description.slice(0, 60)} ...`
              : item.description}
          </p>
          <Link
            to={`/newsfeed/${item.detail}`}
            className="flex items-center gap-1 justify-start text-gray-500">
            <FiExternalLink size={18} />
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBlogCard;
